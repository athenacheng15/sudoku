interface DataBlockProps {
	title: string;
	content: string;
}

export const DataBlock = ({ title, content }: DataBlockProps) => {
	return (
		<div className="w-72 h-44 bg-theme-light rounded-xl flex flex-col items-center justify-center space-y-4">
			<p className="text-theme text-3xl">{title}</p>
			<p className="text-font-highlight text-5xl">{content}</p>
		</div>
	);
};
