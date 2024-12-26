import {
	LevelEnum as LevelType,
	PuzzleNumberObjType,
	NumStatusEnum as NumStatusType,
} from "@types";

import { create } from "zustand";
import { getSudoku } from "sudoku-gen";
import { zipWith } from "lodash";

import { NumStatusEnum } from "@types";
import { checkDuplicate } from "@utils";

type usePuzzleStore = {
	numberObj: PuzzleNumberObjType[] | null;
	error: string | null;
	solution: string | null;
	difficulty: string | null;
	isComplete: boolean;
	getPuzzle: (level: LevelType) => void;
	setNumber: (
		idx: number,
		update: { num?: string; status?: NumStatusType }
	) => void;
	deleteNumber: (idx: number) => void;
	deleteAllNumber: (idx: number) => void;
	setHighlight: (idx: number) => void;
	setError: (idxes: number[], isError: boolean) => void;
	checkError: () => void;
	checkCompleted: () => void;
	setFinished: () => void;
};

export const usePuzzle = create<usePuzzleStore>((set, get) => ({
	numberObj: null,
	error: null,
	solution: null,
	difficulty: null,
	isComplete: false,
	getPuzzle: async (level: LevelType) => {
		try {
			const response = await getSudoku(level);
			const numArray = response.puzzle.split("");
			const formattedPuzzle: PuzzleNumberObjType[] = numArray.map((num) => ({
				num,
				isDefault: num !== "-",
				status: null,
			}));
			set({
				numberObj: formattedPuzzle,
				solution: response.solution,
				difficulty: response.difficulty,
				error: null,
			});
		} catch (error) {
			console.error("Error fetching puzzle:", error);
			set({
				numberObj: null,
				solution: null,
				difficulty: null,
				error: "Failed to fetch puzzle",
			});
		}
	},
	setNumber: (idx: number, { num, status }) => {
		const current = get().numberObj;
		if (!current || idx < 0 || idx >= current.length) return;

		const updatedPuzzle = current;
		const targetGrid = updatedPuzzle[idx];

		if (num) {
			updatedPuzzle[idx] = { ...targetGrid, num };
		}
		if (status) {
			updatedPuzzle[idx] = { ...targetGrid, status };
		}
		set({ numberObj: updatedPuzzle });
		get().checkError();
		get().checkCompleted();
	},
	deleteNumber: (idx: number) => {
		const current = get().numberObj;
		if (!current || idx < 0 || idx >= current.length) return;

		const updatedPuzzle = current;
		const targetGrid = updatedPuzzle[idx];

		if (targetGrid.isDefault) return;

		updatedPuzzle[idx] = { ...targetGrid, num: "-" };
		set({ numberObj: updatedPuzzle });
		get().checkError();
	},
	deleteAllNumber: (idx: number) => {
		const current = get().numberObj;
		if (!current || idx < 0 || idx >= current.length) return;

		const targetNum = current[idx].num;

		const updatedPuzzle = current.map((item) =>
			item.num === targetNum && !item.isDefault ? { ...item, num: "-" } : item
		);
		set({ numberObj: updatedPuzzle });
		get().checkError();
	},
	setHighlight: (idx: number) => {
		const current = get().numberObj;
		if (!current || idx < 0 || idx >= current.length) return;

		const targetNum = current[idx].num;

		if (targetNum !== "-") {
			// TODO fix error status
			const updatedPuzzle = current.map((item) =>
				item.num === targetNum
					? { ...item, status: NumStatusEnum.HIGHLIGHT }
					: { ...item, status: null }
			);
			set({ numberObj: updatedPuzzle });
		}
	},
	setError: (idxes: number[], isError: boolean) => {
		const current = get().numberObj;
		if (!current) return;

		const updatedPuzzle = current.map((cell, idx) => ({
			...cell,
			status: idxes.includes(idx)
				? isError
					? NumStatusEnum.ERROR
					: null
				: cell.status,
		}));
		set({ numberObj: updatedPuzzle });
	},
	checkError: () => {
		const current = get().numberObj;
		if (!current) return;

		const { duplicates, nonDuplicates } = checkDuplicate(current);

		if (duplicates.size > 0) {
			get().setError(Array.from(duplicates), true);
		}

		get().setError(nonDuplicates, false);
	},
	checkCompleted: () => {
		const current = get().numberObj;
		if (!current) return;
		const allFilled = current.every((item) => item.num !== "-");
		const userAnswer = current.map((item) => item.num).join("");
		const isComplete = allFilled && userAnswer === get().solution;
		set({ isComplete });
	},
	setFinished: () => {
		//warning : only for dev use
		const current = get().numberObj;
		if (!current) return;
		const solution = get().solution!.split("");

		const updatedPuzzle = zipWith(current, solution, (puzzle, solutionNum) => ({
			...puzzle,
			num: solutionNum,
		}));
		set({ numberObj: updatedPuzzle });
		get().checkCompleted();
	},
}));
