import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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