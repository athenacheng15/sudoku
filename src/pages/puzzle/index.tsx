import { Timer } from "../../components/timer";
import { OperationBtn } from "../../components/operation-btn";

import { QuizPuzzle } from "./quiz-puzzle";
import { InputPanel } from "./input-panel";

import { HiOutlineVariable } from "react-icons/hi";
import { LuEraser } from "react-icons/lu";
import { TbReload } from "react-icons/tb";

export const Sudoku = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mb-10">
				<Timer min={16} sec={55} />
			</div>
			<div className="mb-6">
				<div className="relative">
					<QuizPuzzle />
					<div className="absolute top-24 right-[-120px] flex flex-col space-y-1">
						<div className="mb-8">
							<OperationBtn isHighlight icon={TbReload} onClick={() => {}} />
						</div>
						<OperationBtn icon={HiOutlineVariable} onClick={() => {}} />
						<OperationBtn icon={LuEraser} onClick={() => {}} />
					</div>
				</div>
			</div>
			<hr className="w-full border border-theme" />
			<div className="mt-6">
				<InputPanel />
			</div>
		</div>
	);
};
