import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { PuzzleNumberObjType } from "@src/types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const addIndexToSet = (
	set: Map<string, number[]>,
	num: string,
	idx: number
) => {
	if (!set.has(num)) {
		set.set(num, []);
	}
	set.get(num)?.push(idx);
};

export const checkDuplicate = (
	numberObj: PuzzleNumberObjType[]
): { duplicates: Set<number>; nonDuplicates: number[] } => {
	const rowSets = Array.from({ length: 9 }, () => new Map<string, number[]>());
	const colSets = Array.from({ length: 9 }, () => new Map<string, number[]>());
	const boxSets = Array.from({ length: 9 }, () => new Map<string, number[]>());
	let duplicates = new Set<number>();

	numberObj.forEach((cell, idx) => {
		const num = cell.num;
		const rowNum = Math.floor(idx / 9);
		const colNum = idx % 9;
		const boxIndex = Math.floor(rowNum / 3) * 3 + Math.floor(colNum / 3);

		if (num !== "-") {
			if (rowSets[rowNum].has(num)) {
				rowSets[rowNum].get(num)?.forEach((dupIdx) => duplicates.add(dupIdx));
				duplicates.add(idx);
			}
			addIndexToSet(rowSets[rowNum], num, idx);

			if (colSets[colNum].has(num)) {
				colSets[colNum].get(num)?.forEach((dupIdx) => duplicates.add(dupIdx));
				duplicates.add(idx);
			}
			addIndexToSet(colSets[colNum], num, idx);

			if (boxSets[boxIndex].has(num)) {
				boxSets[boxIndex].get(num)?.forEach((dupIdx) => duplicates.add(dupIdx));
				duplicates.add(idx);
			}
			addIndexToSet(boxSets[boxIndex], num, idx);
		}
	});
	const nonDuplicates = numberObj
		.map((_, idx) => idx)
		.filter((idx) => !duplicates.has(idx));

	return { duplicates, nonDuplicates };
};

export const formatTime = (hours: string, minutes: string, seconds: string) => {
	return `${hours === "00" ? "" : `${hours}:`}${minutes}:${seconds}`;
};

