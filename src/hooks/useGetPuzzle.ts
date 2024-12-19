import type {
	LevelEnum as LevelType,
	PuzzleNumberObjType,
	NumStatusEnum as NumStatusType,
} from "@types";

import { create } from "zustand";
import { getSudoku } from "sudoku-gen";

type useGetPuzzleStore = {
	numberObj: PuzzleNumberObjType[] | null;
	solution: string | null;
	difficulty: string | null;
	error: string | null;
	getPuzzle: (level: LevelType) => void;
	setNumberObj: (
		idx: number,
		update: { num?: string; status?: NumStatusType }
	) => void;
};

export const useGetPuzzle = create<useGetPuzzleStore>((set, get) => ({
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
	setNumberObj: (idx: number, { num, status }) => {
		const current = get().numberObj;
		if (!current || idx < 0 || idx >= current.length) return;

		const updatedPuzzle = current;
		const currentItem = updatedPuzzle[idx];

		if (num) {
			updatedPuzzle[idx] = { ...currentItem, num };
		}
		if (status) {
			updatedPuzzle[idx] = { ...currentItem, status };
		}
		set({ numberObj: updatedPuzzle });
	},
}));
