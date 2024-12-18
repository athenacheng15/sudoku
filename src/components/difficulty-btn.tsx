import { cn } from "@utils";

interface DifficultyBtnProps {
	label: string;
	isSelected: boolean;
	onClick: () => void;
}

export const DifficultyBtn = ({
	label,
	isSelected,
	onClick,
}: DifficultyBtnProps) => {
	return (
		<button
			className={cn(
				"text-theme border-theme border-4 border-solid rounded-xl w-80 h-20 hover:bg-theme-light transition text-2xl",
				isSelected &&
					"bg-[#A28C69] text-white hover:bg-theme-hover hover:border-theme-hover"
			)}
			onClick={onClick}
		>
			{label.toUpperCase()}
		</button>
	);
};
