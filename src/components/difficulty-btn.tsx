interface DifficultyBtnProps {
	label: string;
	selected: boolean;
}

export const DifficultyBtn = ({ label }: DifficultyBtnProps) => {
	return (
		<button className="text-theme border-theme border-4 border-solid rounded-xl w-80 h-20 hover:bg-theme-light transition">
			{label}
		</button>
	);
};
