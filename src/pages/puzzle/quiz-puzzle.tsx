import { Grid } from "@components/grid";
import { cn } from "@utils";

import { usePuzzle } from "@src/hooks/usePuzzle";
import { useCurrentGrid } from "@src/hooks/useCurrentGrid";

export const QuizPuzzle = () => {
	// TODO: add Id to pervent double fetch
	const { numberObj, setHighlight } = usePuzzle();
	const { currentGrid, setCurrentGrid } = useCurrentGrid();

	if (!numberObj) return null;

	return (
		<div className="grid grid-cols-9">
			{numberObj.map(({ num, isDefault, status }, idx) => {
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
							<Grid
								n={num}
								isDefault={isDefault}
								isSelected={currentGrid === idx}
								onClick={() => {
									setCurrentGrid(idx);
									setHighlight(idx);
								}}
								status={status}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};
