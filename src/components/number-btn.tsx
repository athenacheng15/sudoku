interface NumberBtnProp {
	n: number;
}
export const NumberBtn = ({ n }: NumberBtnProp) => {
	return (
		<button className="size-14 text-2xl rounded-lg bg-[#F1E1CC] text-font hover:bg-[#DECBB1] transition">
			{n}
		</button>
	);
};
