import React from "react";

interface TooltipProps {
	children: React.ReactNode;
	content: string;
}

export const Tooltip = ({ children, content }: TooltipProps) => {
	return (
		<div className="group relative flex items-center">
			{children}
			<div className="absolute bottom-full mb-1 px-1 py-1 bg-white text-font text-xs rounded whitespace-nowrap -translate-x-1/2 left-1/2 transition opacity-0 group-hover:opacity-100 pointer-events-none">
				{content}
			</div>
		</div>
	);
};
