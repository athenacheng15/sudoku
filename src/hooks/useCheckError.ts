import { usePuzzle } from "./usePuzzle";

interface UseCheckErrorReturnType {
	checkError: () => void;
}

export const useCheckError = (): UseCheckErrorReturnType => {
	const { numberObj, setError } = usePuzzle();

	const addIndexToSet = (
		set: Map<string, number[]>,
		num: string,
		idx: number
	) => {
		if (!set.has(num)) {
			set.set(num, []);
		}
		set.get(num)?.push(idx);
	};

	const checkError = () => {
		if (!numberObj) return;

		const rowSets = Array.from(
			{ length: 9 },
			() => new Map<string, number[]>()
		);
		const colSets = Array.from(
			{ length: 9 },
			() => new Map<string, number[]>()
		);
		const boxSets = Array.from(
			{ length: 9 },
			() => new Map<string, number[]>()
		);
		let duplicates = new Set<number>();

		numberObj.forEach((cell, idx) => {
			const num = cell.num;
			const rowNum = Math.floor(idx / 9);
			const colNum = idx % 9;
			const boxIndex = Math.floor(rowNum / 3) * 3 + Math.floor(colNum / 3);

			if (num !== "-") {
				// check row
				if (rowSets[rowNum].has(num)) {
					rowSets[rowNum].get(num)?.forEach((dupIdx) => duplicates.add(dupIdx));
					duplicates.add(idx);
				}
				addIndexToSet(rowSets[rowNum], num, idx);

				// check column
				if (colSets[colNum].has(num)) {
					colSets[colNum].get(num)?.forEach((dupIdx) => duplicates.add(dupIdx));
					duplicates.add(idx);
				}
				addIndexToSet(colSets[colNum], num, idx);

				// check box
				if (boxSets[boxIndex].has(num)) {
					boxSets[boxIndex]
						.get(num)
						?.forEach((dupIdx) => duplicates.add(dupIdx));
					duplicates.add(idx);
				}
				addIndexToSet(boxSets[boxIndex], num, idx);
			}
		});

		if (duplicates.size > 0) {
			setError(Array.from(duplicates), true);
		}

		// check if not duplicate anymore
		const nonDuplicates = numberObj
			.map((_, idx) => idx)
			.filter((idx) => !duplicates.has(idx));

		setError(nonDuplicates, false);
	};

	return { checkError };
};
