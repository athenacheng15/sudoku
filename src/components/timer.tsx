interface TimerProps {
	min: number;
	sec: number;
}

export const Timer = ({ min, sec }: TimerProps) => {
	return <div className="text-font text-5xl">{`${min}:${sec}`}</div>;
};
