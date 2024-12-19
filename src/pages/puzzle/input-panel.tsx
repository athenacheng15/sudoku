import { NumberBtn } from "@components/number-btn";
import { useGetPuzzle } from "@hooks/useGetPuzzle";
import { useGrid } from "@hooks/useGrid";

export const InputPanel = () => {
	const buttons: string[] = Array(9).fill("-");
	const { setNumberObj } = useGetPuzzle();
	const { currentGrid } = useGrid();

	const handleOnClick = (num: number) => {
		if (!currentGrid) return;
		setNumberObj(currentGrid, { num: num.toString() });
	};

	return (
		<div className="grid grid-cols-3 sm:grid-cols-9 gap-1">
			{buttons.map((_, idx) => (
				<NumberBtn key={idx + 1} n={idx + 1} onClick={handleOnClick} />
			))}
		</div>
	);
};
