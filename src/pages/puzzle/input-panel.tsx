import { NumberBtn } from "@components/number-btn";
import { usePuzzle } from "@hooks/usePuzzle";
import { useCurrentGrid } from "@hooks/useCurrentGrid";

export const InputPanel = () => {
	const buttons: string[] = Array(9).fill("-");
	const { setNumber } = usePuzzle();
	const { currentGrid } = useCurrentGrid();

	const handleOnClick = (num: number) => {
		if (currentGrid === null || currentGrid === undefined) return;
		setNumber(currentGrid, { num: num.toString() });
	};

	return (
		<div className="grid grid-cols-3 sm:grid-cols-9 gap-1">
			{buttons.map((_, idx) => (
				<NumberBtn key={idx + 1} n={idx + 1} onClick={handleOnClick} />
			))}
		</div>
	);
};
