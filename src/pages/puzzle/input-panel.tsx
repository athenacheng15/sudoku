import { NumberBtn } from "@components/number-btn";
import { usePuzzle } from "@hooks/usePuzzle";
import { useCurrentGrid } from "@hooks/useCurrentGrid";
import { useCheckError } from "@hooks/useCheckError";

export const InputPanel = () => {
	const buttons: string[] = Array(9).fill("-");
	const { setNumber } = usePuzzle();
	const { currentGrid } = useCurrentGrid();
	const { checkError } = useCheckError();

	const handleOnClick = (num: number) => {
		if (!currentGrid) return;
		setNumber(currentGrid, { num: num.toString() });
		checkError();
	};

	return (
		<div className="grid grid-cols-3 sm:grid-cols-9 gap-1">
			{buttons.map((_, idx) => (
				<NumberBtn key={idx + 1} n={idx + 1} onClick={handleOnClick} />
			))}
		</div>
	);
};
