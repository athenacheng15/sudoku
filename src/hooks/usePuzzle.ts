import {
	LevelEnum as LevelType,
	PuzzleNumberObjType,
	NumStatusEnum as NumStatusType,
} from "@types";

import { create } from "zustand";
import { getSudoku } from "sudoku-gen";

import { NumStatusEnum } from "@types";
import { addIndexToSet } from "@utils";

type usePuzzleStore = {
	numberObj: PuzzleNumberObjType[] | null;
	solution: string | null;
	difficulty: string | null;
	error: string | null;
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
};

export const usePuzzle = create<usePuzzleStore>((set, get) => ({
	numberObj: null,
	error: null,
	solution: null,
	difficulty: null,
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

		const rowSets = Array.from(
			{ length: 9 },
			() => new Map<string, number[]>()
		);
		const colSets = Array.from(
			{ length: 9 },
			() => new Map<string, number[]>()
		);
		const boxSets = Array.from(
			{ length: 9 },
			() => new Map<string, number[]>()
		);
		let duplicates = new Set<number>();

		current.forEach((cell, idx) => {
			const num = cell.num;
			const rowNum = Math.floor(idx / 9);
			const colNum = idx % 9;
			const boxIndex = Math.floor(rowNum / 3) * 3 + Math.floor(colNum / 3);

			if (num !== "-") {
				if (rowSets[rowNum].has(num)) {
					rowSets[rowNum].get(num)?.forEach((dupIdx) => duplicates.add(dupIdx));
					duplicates.add(idx);
				}
				addIndexToSet(rowSets[rowNum], num, idx);

				if (colSets[colNum].has(num)) {
					colSets[colNum].get(num)?.forEach((dupIdx) => duplicates.add(dupIdx));
					duplicates.add(idx);
				}
				addIndexToSet(colSets[colNum], num, idx);

				if (boxSets[boxIndex].has(num)) {
					boxSets[boxIndex]
						.get(num)
						?.forEach((dupIdx) => duplicates.add(dupIdx));
					duplicates.add(idx);
				}
				addIndexToSet(boxSets[boxIndex], num, idx);
			}
		});

		if (duplicates.size > 0) {
			get().setError(Array.from(duplicates), true);
		}

		// check if not duplicate anymore
		const nonDuplicates = current
			.map((_, idx) => idx)
			.filter((idx) => !duplicates.has(idx));

		get().setError(nonDuplicates, false);
	},
}));
