import type { LevelEnum as LevelType } from "@types";

import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

import { Timer } from "@components/timer";
import { Loader } from "@components/loader";
import { usePuzzle } from "@hooks/usePuzzle";
import { useCurrentGrid } from "@hooks/useCurrentGrid";
import { useClickOutside } from "@hooks/useClickOutside";

import { QuizPuzzle } from "./quiz-puzzle";
import { InputPanel } from "./input-panel";
import { OperationBtns } from "./operation-btns";

export const Sudoku = () => {
	const puzzleRef = useRef<HTMLDivElement>(null);
	const InputPanelRef = useRef<HTMLDivElement>(null);
	const operationBtnsRef = useRef<HTMLDivElement>(null);
	const { difficulty } = useParams();
	const { numberObj, error, isComplete, getPuzzle, removeHighlight } =
		usePuzzle();
	const { setCurrentGrid } = useCurrentGrid();

	useEffect(() => {
		const level = difficulty as LevelType;
		level && getPuzzle(level);
	}, [difficulty, getPuzzle]);

	const handleClickOutside = (event: MouseEvent | TouchEvent) => {
		setCurrentGrid(null);
		removeHighlight();
	};

	useClickOutside({
		targetRef: puzzleRef,
		handler: handleClickOutside,
		excludeRefs: [InputPanelRef, operationBtnsRef],
	});

	if (error) {
		return <div>{error}</div>;
	}

	if (!numberObj) return <Loader />;

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mb-8">
				<Timer isComplete={isComplete} />
			</div>
			<div className="mb-6 relative">
				<div ref={puzzleRef}>
					<QuizPuzzle />
				</div>
				<div
					ref={operationBtnsRef}
					className="hidden absolute top-14 right-[-120px] sm:flex flex-col space-y-1"
				>
					<OperationBtns />
				</div>
			</div>
			<hr className="w-full border border-theme" />
			<div ref={InputPanelRef} className="mt-6">
				<div className="flex justify-center items-center">
					<InputPanel />
				</div>
				<div className="flex sm:hidden mt-6">
					<OperationBtns />
				</div>
			</div>
		</div>
	);
};
