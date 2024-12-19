import type { NumStatusEnum as NumStatusType } from "@src/types";

import { cn } from "@src/utils";
import { useGrid } from "@src/hooks/useGrid";

interface GridProps {
	idx: number;
	n: string;
	isDefault: boolean;
	status?: NumStatusType | null;
}

export function Grid({ idx, n = "-", isDefault }: GridProps) {
	const { currentGrid, setCurrentGrid } = useGrid();
	const isSelected = currentGrid === idx;

	return (
		<button
			className={`${cn(
				"w-10 h-10 rounded bg-theme-light text-xl text-[#8B7757] transition",
				isDefault && "text-font-dark",
				isSelected && "bg-[#DFC6A2]"
			)}`}
			onClick={() => setCurrentGrid(idx)}
		>
			{n !== "-" && n}
		</button>
	);
}
