import type { LevelEnum as LevelType } from "@types";

import { HiOutlineVariable } from "react-icons/hi";
import { LuEraser } from "react-icons/lu";
import { TbReload } from "react-icons/tb";
import { useParams } from "react-router-dom";

import { Timer } from "@components/timer";
import { OperationBtn } from "@components/operation-btn";
import { Loader } from "@components/loader";
import { useGetPuzzle } from "@hooks/useGetPuzzle";

import { QuizPuzzle } from "./quiz-puzzle";
import { InputPanel } from "./input-panel";
import { useEffect } from "react";
export const Sudoku = () => {
	const { difficulty } = useParams();
	const level = difficulty as LevelType;
	const { puzzle, error, getPuzzle } = useGetPuzzle();

	useEffect(() => {
		if (!level) return;
		getPuzzle(level);
	}, [getPuzzle, level]);

	if (error) {
		return <div>{error}</div>;
	}

	if (!puzzle) return <Loader />;

	console.log(puzzle);

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mb-10">
				{/* TODO: timer hidden choice */}
				<Timer />
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
