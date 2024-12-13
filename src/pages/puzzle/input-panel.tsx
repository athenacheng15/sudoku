import { NumberBtn } from "../../components/number-btn";

export const InputPanel = () => {
	const buttons: string[] = Array(9).fill("-");

	return (
		<div className="grid grid-cols-3 sm:grid-cols-9 gap-1">
			{buttons.map((_, idx) => (
				<NumberBtn n={idx + 1} />
			))}
		</div>
	);
};
