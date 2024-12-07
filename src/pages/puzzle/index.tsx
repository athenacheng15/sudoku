import { QuizPuzzle } from "./quiz-puzzle";
import { Timer } from "../../components/timer";
import { InputPanel } from "./input-panel";

export const Sudoku = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mb-10">
				<Timer min={16} sec={55} />
			</div>
			<div className="mb-6">
				<QuizPuzzle />
			</div>
			<hr className="w-full border border-theme" />
			<div className="mt-6">
				<InputPanel />
			</div>
		</div>
	);
};
