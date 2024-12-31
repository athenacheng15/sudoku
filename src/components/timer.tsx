import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LuEye, LuEyeOff } from "react-icons/lu";

import { useTimer } from "@hooks/useTimer";
import { formatTime } from "@utils";

interface TimerProps {
	isComplete: boolean;
}

export const Timer = ({ isComplete }: TimerProps) => {
	const navigate = useNavigate();
	const { difficulty } = useParams();
	const { hours, minutes, seconds } = useTimer();

	const [isTimerHidden, setIsTimerHidden] = useState(false);

	useEffect(() => {
		if (isComplete) {
			navigate("/completed", {
				state: { difficulty, time: formatTime(hours, minutes, seconds) },
			});
		}
	}, [difficulty, hours, isComplete, minutes, navigate, seconds]);

	return (
		<div className="relative flex items-center text-font">
			<div className="min-w-44 flex items-center justify-center text-5xl">
				{isTimerHidden ? "-- : --" : formatTime(hours, minutes, seconds)}
			</div>
			<div className="absolute left-full hover:cursor-pointer">
				{isTimerHidden ? (
					<LuEye onClick={() => setIsTimerHidden(false)} />
				) : (
					<LuEyeOff onClick={() => setIsTimerHidden(true)} />
				)}
			</div>
		</div>
	);
};
