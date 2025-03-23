import { Grid } from "@components/grid";
import { usePuzzle } from "@hooks/usePuzzle";
import { useCurrentGrid } from "@hooks/useCurrentGrid";
import { cn } from "@utils";

export const QuizPuzzle = () => {
	// TODO: add Id to pervent double fetch
	const { numberObj, setHighlight } = usePuzzle();
	const { currentGrid, setCurrentGrid } = useCurrentGrid();

	const handleOnClickGrid = (idx: number) => {
		setCurrentGrid(idx);
		setHighlight(idx);
	};

	if (!numberObj) return null;

	return (
		<div className="grid grid-cols-9">
			{numberObj.map(({ num, isDefault, isError, isHighlight }, idx) => {
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
						<div className="flex items-center justify-center w-9 h-9 xs:w-11 xs:h-11 text-xl">
							{/* TODO : click outside */}
							<Grid
								n={num}
								isDefault={isDefault}
								isSelected={currentGrid === idx}
								onClick={() => {
									handleOnClickGrid(idx);
								}}
								isError={isError}
								isHighlight={isHighlight}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};
function useOnClickOutside<T>(arg0: {
	ref: import("react").RefObject<HTMLDivElement>;
	handler: (event: MouseEvent | TouchEvent) => void;
}) {
	throw new Error("Function not implemented.");
}
