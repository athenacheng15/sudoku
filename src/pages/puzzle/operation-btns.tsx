import { HiOutlineVariable } from "react-icons/hi";
import { LuEraser } from "react-icons/lu";
import { TbReload } from "react-icons/tb";

import { OperationBtn } from "@components/operation-btn";
import { usePuzzle } from "@hooks/usePuzzle";
import { useCurrentGrid } from "@hooks/useCurrentGrid";
import { useCheckError } from "@hooks/useCheckError";

export const OperationBtns = () => {
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
				<OperationBtn isHighlight icon={TbReload} onClick={() => {}} />
			</div>
			{/* TODO : tooltips */}
			<OperationBtn icon={HiOutlineVariable} onClick={handleDeleteAllNumber} />
			<OperationBtn icon={LuEraser} onClick={handleDeleteNumber} />
		</>
	);
};
