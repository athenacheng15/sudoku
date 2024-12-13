interface GridProps {
	n: string;
	isFromInput?: boolean;
	isError?: boolean;
	isHighlight?: boolean;
}

export function Grid({ n = "-" }: GridProps) {
	return (
		<button className="w-10 h-10 rounded bg-theme-light text-xl text-font-dark">
			{n !== "-" && n}
		</button>
	);
}
