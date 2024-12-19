import { NumStatus } from "@src/types";
import { cn } from "@src/utils";

interface GridProps {
	n: string;
	isDefault: boolean;
	status?: NumStatus | null;
}

export function Grid({ n = "-", isDefault }: GridProps) {
	return (
		<button
			className={`${cn(
				"w-10 h-10 rounded bg-theme-light text-xl",
				isDefault ? "text-font-dark" : "text-[#8B7757]"
			)}`}
		>
			{n !== "-" && n}
		</button>
	);
}
