import { cn } from "@utils";

interface OperationBtnProps {
	icon: React.ElementType;
	onClick: () => void;
	isHighlight?: boolean;
}

export const OperationBtn = ({
	icon: Icon,
	onClick,
	isHighlight,
}: OperationBtnProps) => {
	return (
		<button
			className={cn(
				"flex items-center justify-center size-12 sm:size-14 text-2xl rounded-lg bg-[#F1E1CC] text-font hover:bg-[#DECBB1] transition",
				isHighlight && "bg-[#A28C69] text-white hover:bg-[#7D6846]"
			)}
			onClick={onClick}
		>
			<div>
				<Icon size={32} />
			</div>
		</button>
	);
};
