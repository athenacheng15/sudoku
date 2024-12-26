import { formatTime } from "@utils";
interface TimerProps {
	hours: string;
	minutes: string;
	seconds: string;
}

export const Timer = ({ hours, minutes, seconds }: TimerProps) => {
	return (
		<div className="text-font text-5xl">
			{formatTime(hours, minutes, seconds)}
		</div>
	);
};
