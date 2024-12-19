import { useTimer } from "@src/hooks/useTimer";

export const Timer = () => {
	const { hours, minutes, seconds } = useTimer();
	return (
		<div className="text-font text-5xl">{`${hours === "00" ? "" : `${hours}:`}
		${minutes}:${seconds}`}</div>
	);
};
