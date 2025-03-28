import { useNavigate } from "react-router-dom";
import { HiOutlineVariable } from "react-icons/hi";
import { LuEraser } from "react-icons/lu";
import { TbReload } from "react-icons/tb";
import { FiHome } from "react-icons/fi";

//only for dev use
import { MdOutlineLightbulb } from "react-icons/md";

import { OperationBtn } from "@components/operation-btn";
import { Tooltip } from "@src/components/tooltip";
import { usePuzzle } from "@hooks/usePuzzle";
import { useCurrentGrid } from "@hooks/useCurrentGrid";

export const OperationBtns = () => {
	const navigate = useNavigate();
	const { numberObj, deleteNumber, deleteAllNumber, setRestart, setFinished } =
		usePuzzle();
	const { currentGrid } = useCurrentGrid();

	const handleReturnToHomePage = () => {
		let confirmed = window.confirm(
			"Are you sure you want to return to the home page?\n(Your current progress will be lost)"
		);
		if (confirmed) {
			navigate("/");
		}
	};

	const handleReStart = () => {
		let confirmed = window.confirm(
			"Are you sure you want to restart?\n(Timer won't be reset)"
		);
		if (confirmed) {
			setRestart();
		}
	};

	const handleDeleteNumber = () => {
		if (!currentGrid) return;
		deleteNumber(currentGrid);
	};

	const handleDeleteAllNumber = () => {
		if (!currentGrid || !numberObj) return;
		const gridNum = numberObj[currentGrid];

		if (gridNum.num === "-") return;

		let confirmed = window.confirm(
			`Are you sure you want to remove all entered numbers ${gridNum.num}?`
		);
		if (confirmed) {
			deleteAllNumber(currentGrid);
		}
	};

	//only for dev use
	const handleFill = () => {
		setFinished();
	};

	return (
		<div className="flex flex-row sm:flex-col justify-center items-center w-full gap-4 sm:gap-6">
			<div className="">
				<Tooltip content="Home">
					<OperationBtn
						isHighlight
						icon={FiHome}
						onClick={handleReturnToHomePage}
					/>
				</Tooltip>
			</div>
			<div className="flex flex-row sm:flex-col gap-1 justify-center items-center">
				<Tooltip content="Restart">
					<OperationBtn icon={TbReload} onClick={handleReStart} />
				</Tooltip>
				<Tooltip content="Clear All Matched">
					<OperationBtn
						icon={HiOutlineVariable}
						onClick={handleDeleteAllNumber}
					/>
				</Tooltip>
			</div>
			<Tooltip content="Clear">
				<OperationBtn icon={LuEraser} onClick={handleDeleteNumber} />
			</Tooltip>

			{/* WARNING : only for dev use */}
			{/* <OperationBtn icon={MdOutlineLightbulb} onClick={handleFill} /> */}
		</div>
	);
};
