import type { LevelEnum as LevelType } from "@types";


import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { Timer } from "@components/timer";
import { Loader } from "@components/loader";
import { usePuzzle } from "@hooks/usePuzzle";
import { useTimer } from "@hooks/useTimer";
import { formatTime } from "@utils";

import { QuizPuzzle } from "./quiz-puzzle";
import { InputPanel } from "./input-panel";
import { OperationBtns } from "./operation-btns";

export const Sudoku = () => {
	const { difficulty } = useParams();
	const navigate = useNavigate();

	const { numberObj, error, isComplete, getPuzzle } = usePuzzle();
	const { hours, minutes, seconds } = useTimer();

	useEffect(() => {
		const level = difficulty as LevelType;
		level && getPuzzle(level);
	}, [difficulty, getPuzzle]);

	useEffect(() => {
		if (isComplete) {
			navigate("/completed", {
				state: { difficulty, time: formatTime(hours, minutes, seconds) },
			});
		}
	}, [difficulty, hours, isComplete, minutes, navigate, seconds]);

	if (error) {
		return <div>{error}</div>;
	}

	if (!numberObj) return <Loader />;

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mb-10">
				{/* TODO: timer hidden choice */}
				<Timer hours={hours} minutes={minutes} seconds={seconds} />
			</div>
			<div className="mb-6 relative">
				<QuizPuzzle />
				<div className="absolute top-14 right-[-120px] flex flex-col space-y-1">
					<OperationBtns />
				</div>
			</div>
			<hr className="w-full border border-theme" />
			<div className="mt-6">
				<InputPanel />
			</div>
		</div>
	);
};
