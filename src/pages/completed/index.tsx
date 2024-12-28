import { useLocation, useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa";

import { DataBlock } from "@components/data-block";
import { usePuzzle } from "@hooks/usePuzzle";
import { useCurrentGrid } from "@hooks/useCurrentGrid";

export const Completed = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { setToDefault } = usePuzzle();
	const { setCurrentGrid } = useCurrentGrid();
	const { difficulty, time } = location.state;

	const handleOnclick = () => {
		setToDefault();
		setCurrentGrid(null);
		navigate("/");
	};

	return (
		<>
			<div className="text-font-dark flex flex-col items-center mb-10 space-y-8">
				<FaCrown size={64} />
				<p className="text-7xl ">COMPLETED</p>
			</div>
			<div className="flex space-x-4">
				<DataBlock title="TIME" content={time} />
				<DataBlock title="LEVEL" content={difficulty.toUpperCase()} />
			</div>
			<div className="mt-8">
				<button
					className="text-2xl text-white border-theme bg-theme hover:bg-theme-hover hover:border-theme-hover transition border-4 border-solid rounded-xl w-80 h-20"
					onClick={handleOnclick}
				>
					Home
				</button>
			</div>
		</>
	);
};
