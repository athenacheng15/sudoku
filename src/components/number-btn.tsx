interface NumberBtnProp {
	n: number;
	onClick: (n: number) => void;
}
export const NumberBtn = ({ n, onClick }: NumberBtnProp) => {
	return (
		<button
			className="size-12 sm:size-14 text-2xl rounded-lg bg-[#F1E1CC] text-font hover:bg-[#DECBB1] transition"
			onClick={() => onClick(n)}
		>
			{n}
		</button>
	);
};
