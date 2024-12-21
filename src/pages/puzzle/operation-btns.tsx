import { HiOutlineVariable } from "react-icons/hi";
import { LuEraser } from "react-icons/lu";
import { TbReload } from "react-icons/tb";

import { OperationBtn } from "@components/operation-btn";
import { usePuzzle } from "@hooks/usePuzzle";
import { useCurrentGrid } from "@hooks/useCurrentGrid";

export const OperationBtns = () => {
	const { deleteNumber } = usePuzzle();
	const { currentGrid } = useCurrentGrid();

	const handleDeleteNumber = () => {
		if (!currentGrid) return;
		deleteNumber(currentGrid);
	};

	return (
		<>
			<div className="mb-8">
				<OperationBtn isHighlight icon={TbReload} onClick={() => {}} />
			</div>
			{/* TODO : tooltips */}
			<OperationBtn icon={HiOutlineVariable} onClick={() => {}} />
			<OperationBtn icon={LuEraser} onClick={handleDeleteNumber} />
		</>
	);
};
