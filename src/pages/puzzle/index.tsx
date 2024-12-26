import type { LevelEnum as LevelType } from "@types";


import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { Timer } from "@components/timer";
import { Loader } from "@components/loader";
import { usePuzzle } from "@src/hooks/usePuzzle";

import { QuizPuzzle } from "./quiz-puzzle";
import { InputPanel } from "./input-panel";
import { OperationBtns } from "./operation-btns";

export const Sudoku = () => {
	const { difficulty } = useParams();
	const navigate = useNavigate();
	const level = difficulty as LevelType;
	const { numberObj, error, isComplete, getPuzzle } = usePuzzle();

	useEffect(() => {
		if (!level) return;
		getPuzzle(level);
	}, [getPuzzle, level]);

	if (error) {
		return <div>{error}</div>;
	}

	if (!numberObj) return <Loader />;

	if (isComplete) {
		navigate("/completed");
	}

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
						<OperationBtns />
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
