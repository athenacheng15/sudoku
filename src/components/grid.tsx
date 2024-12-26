import type { NumStatusEnum as NumStatusType } from "@src/types";

import { cn } from "@src/utils";

import { NumStatusEnum } from "@src/types";


interface GridProps {
	n: string;
	isDefault: boolean;
	isSelected: boolean;
	status: NumStatusType | null;
	onClick: () => void;
}

export function Grid({
	n = "-",
	isDefault,
	isSelected,
	status,
	onClick,
}: GridProps) {
	return (
		<button
			className={`${cn(
				"w-10 h-10 rounded bg-theme-light text-xl text-[#8B7757] transition",
				isDefault && "text-font-dark",
				isSelected && "bg-[#DFC6A2]",
				status === NumStatusEnum.HIGHLIGHT && "text-[#D79326]",
				status === NumStatusEnum.ERROR && "text-[#DB372F]"
			)}`}
			onClick={onClick}
		>
			{n !== "-" && n}
		</button>
	);
}
