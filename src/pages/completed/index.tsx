import { FaCrown } from "react-icons/fa";
import { DataBlock } from "../../components/dataBlock";

export const Completed = () => {
	return (
		<>
			<div className="text-font-dark flex flex-col items-center mb-10 space-y-8">
				<FaCrown size={64} />
				<p className="text-7xl ">COMPLETED</p>
			</div>
			<div className="flex space-x-4">
				<DataBlock title="TIME" content="16:55" />
				<DataBlock title="LEVEL" content="MEDIUM" />
			</div>
		</>
	);
};
