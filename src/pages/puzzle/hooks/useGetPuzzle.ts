import type { PuzzleGenResType } from "../../../types";
import type { LevelEnum } from "../../../types";

import { getSudoku } from "sudoku-gen";

import { useEffect, useState } from "react";

export const useGetPuzzle = (difficulty: LevelEnum) => {
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
