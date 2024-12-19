import { PuzzleNumberObjType } from "@types";
import type { LevelEnum as LevelType } from "@types";

import { create } from "zustand";
import { getSudoku } from "sudoku-gen";

type useGetPuzzleStore = {
	numberObj: PuzzleNumberObjType[] | null;
	solution: string | null;
	difficulty: string | null;
	error: string | null;
	getPuzzle: (level: LevelType) => void;
};

export const useGetPuzzle = create<useGetPuzzleStore>((set) => ({
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
}));
