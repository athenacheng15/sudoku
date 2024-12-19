import { useState, useEffect } from "react";

export const useTimer = () => {
	const [time, setTime] = useState<number>(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prev) => prev + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const hours = Math.floor(time / 3600)
		.toString()
		.padStart(2, "0");

	const minutes = Math.floor((time % 3600) / 60)
		.toString()
		.padStart(2, "0");
	const seconds = String(time % 60).padStart(2, "0");

	return { hours, minutes, seconds };
};
