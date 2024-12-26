import { HiOutlineVariable } from "react-icons/hi";
import { LuEraser } from "react-icons/lu";
import { TbReload } from "react-icons/tb";

import { OperationBtn } from "@components/operation-btn";
import { usePuzzle } from "@hooks/usePuzzle";
import { useCurrentGrid } from "@hooks/useCurrentGrid";
import { useNavigate } from "react-router-dom";

export const OperationBtns = () => {
	const navigate = useNavigate();
	const { deleteNumber, deleteAllNumber, numberObj } = usePuzzle();
	const { currentGrid } = useCurrentGrid();

	const handleReturnToHomePage = () => {
		let confirmed = window.confirm(
			"Are you sure you want to return to the home page?\n(Your current progress will be lost)"
		);
		if (confirmed) {
			navigate("/");
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

	return (
		<>
			<div className="mb-8">
				<OperationBtn
					isHighlight
					icon={TbReload}
					onClick={handleReturnToHomePage}
				/>
			</div>
			{/* TODO : tooltips */}
			<OperationBtn icon={HiOutlineVariable} onClick={handleDeleteAllNumber} />
			<OperationBtn icon={LuEraser} onClick={handleDeleteNumber} />
		</>
	);
};
