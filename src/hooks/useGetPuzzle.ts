import { PuzzleGenResType, PuzzleFormattedType } from "@types";
import type { LevelEnum as LevelType } from "@types";

import { create } from "zustand";
import { getSudoku } from "sudoku-gen";

type useGetPuzzleStore = {
	quizObj: PuzzleFormattedType | null;
	error: string | null;
	getPuzzle: (level: LevelType) => void;
};

export const useGetPuzzle = create<useGetPuzzleStore>((set) => ({
	quizObj: null,
	error: null,
	getPuzzle: async (level: LevelType) => {
		try {
			const response = await getSudoku(level);
			const numArray = response.puzzle.split("");
			const formattedPuzzle: PuzzleFormattedType = {
				puzzle: numArray.map((num) => ({
					num,
					isDefault: num !== "-",
					status: null,
				})),
				solution: response.solution,
				difficulty: response.difficulty,
			};
			set({ quizObj: formattedPuzzle, error: null });
		} catch (error) {
			console.error("Error fetching puzzle:", error);
			set({ quizObj: null, error: "Failed to fetch puzzle" });
		}
	},
}));
