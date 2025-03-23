import { cn } from "@src/utils";

interface GridProps {
	n: string;
	isSelected: boolean;
	isDefault: boolean;
	isError: boolean;
	isHighlight: boolean;
	onClick: () => void;
}

export function Grid({
	n = "-",
	isDefault,
	isSelected,
	isError,
	isHighlight,
	onClick,
}: GridProps) {
	const getNumberDisplayed = () => {
		if (isError) return "text-[#DB372F]";
		if (isHighlight) return "text-[#D79326]";
		if (isDefault) return "text-font-dark";
		return "text-[#8B7757]";
	};
	return (
		<button
			className={`${cn(
				"w-8 h-8 xs:w-10 xs:h-10 rounded bg-theme-light text-xltransition",
				isSelected && "bg-[#DFC6A2]",
				getNumberDisplayed()
			)}`}
			onClick={onClick}
		>
			{n !== "-" && n}
		</button>
	);
}
