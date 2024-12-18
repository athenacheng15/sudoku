import type { PuzzleGenResType } from "@types";
import type { LevelEnum as LevelType } from "@types";

import { useEffect, useState } from "react";
import { getSudoku } from "sudoku-gen";

export const useGetPuzzle = (difficulty: LevelType) => {
	const [puzzle, setPuzzle] = useState<PuzzleGenResType | null>(null);
	const getPuzzle = async () => {
		try {
			const response = await getSudoku(difficulty);
			setPuzzle(response);
			return response;
		} catch (error) {
			console.error("Failed to fetch puzzle:", error);
			return null;
		}
	};

	useEffect(() => {
		if (difficulty) {
			getPuzzle();
		}
	}, [difficulty]);

	return { puzzle };
};
