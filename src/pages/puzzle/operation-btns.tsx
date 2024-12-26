import { HiOutlineVariable } from "react-icons/hi";
import { LuEraser } from "react-icons/lu";
import { TbReload } from "react-icons/tb";

import { OperationBtn } from "@components/operation-btn";
import { usePuzzle } from "@hooks/usePuzzle";
import { useCurrentGrid } from "@hooks/useCurrentGrid";
import { useCheckError } from "@hooks/useCheckError";
import { useNavigate } from "react-router-dom";

export const OperationBtns = () => {
	const navigate = useNavigate();
	const { deleteNumber, deleteAllNumber } = usePuzzle();
	const { checkError } = useCheckError();
	const { currentGrid } = useCurrentGrid();

	const handleDeleteNumber = () => {
		if (!currentGrid) return;
		deleteNumber(currentGrid);
		checkError();
	};

	const handleDeleteAllNumber = () => {
		if (!currentGrid) return;
		deleteAllNumber(currentGrid);
		checkError();
	};

	return (
		<>
			<div className="mb-8">
				<OperationBtn
					isHighlight
					icon={TbReload}
					onClick={() => navigate("/")}
				/>
			</div>
			{/* TODO : tooltips */}
			<OperationBtn icon={HiOutlineVariable} onClick={handleDeleteAllNumber} />
			<OperationBtn icon={LuEraser} onClick={handleDeleteNumber} />
		</>
	);
};
