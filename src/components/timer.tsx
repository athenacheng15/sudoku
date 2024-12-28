import { useEffect } from "react";

import { useTimer } from "@hooks/useTimer";
import { formatTime } from "@utils";
import { useNavigate, useParams } from "react-router-dom";

interface TimerProps {
	isComplete: boolean;
}

export const Timer = ({ isComplete }: TimerProps) => {
	const navigate = useNavigate();
	const { difficulty } = useParams();

	const { hours, minutes, seconds } = useTimer();

	useEffect(() => {
		if (isComplete) {
			navigate("/completed", {
				state: { difficulty, time: formatTime(hours, minutes, seconds) },
			});
		}
	}, [difficulty, hours, isComplete, minutes, navigate, seconds]);

	return (
		<div className="text-font text-5xl">
			{formatTime(hours, minutes, seconds)}
		</div>
	);
};
