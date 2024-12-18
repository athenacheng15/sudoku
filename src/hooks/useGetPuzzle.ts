import { PuzzleGenResType } from "@types";
import type { LevelEnum as LevelType } from "@types";

import { create } from "zustand";
import { getSudoku } from "sudoku-gen";

type useGetPuzzleStore = {
	puzzle: PuzzleGenResType | null;
	error: string | null;
	getPuzzle: (level: LevelType) => Promise<PuzzleGenResType | null>;
};

export const useGetPuzzle = create<useGetPuzzleStore>((set) => ({
	puzzle: null,
	error: null,
	getPuzzle: async (level: LevelType) => {
		try {
			const response = await getSudoku(level);
			set({ puzzle: response, error: null });
			return response;
		} catch (error) {
			console.error("Error fetching puzzle:", error);
			set({ puzzle: null, error: "Failed to fetch puzzle" });
			return null;
		}
	},
}));
