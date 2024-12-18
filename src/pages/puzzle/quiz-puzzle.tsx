import { Grid } from "@components/grid";
import { cn } from "@utils";

import type { PuzzleGenResType } from "../../types";

interface QuizPuzzleProps {
	puzzle: PuzzleGenResType;
}

export const QuizPuzzle = ({ puzzle }: QuizPuzzleProps) => {
	console.log(puzzle);
	const puzzleGrid = puzzle.puzzle.split("");
	return (
		<div className="grid grid-cols-9">
			{puzzleGrid.map((n, idx) => {
				const row = Math.floor(idx / 9) + 1;
				const column = (idx + 1) % 9;
				return (
					<div
						key={idx}
						className={cn(
							(column === 3 || column === 6) && "border-r border-theme",
							(row === 3 || row === 6) && "border-b border-theme"
						)}
					>
						<div className="flex items-center justify-center w-11 h-11 text-xl">
							<Grid n={n} />
						</div>
					</div>
				);
			})}
		</div>
	);
};
