export enum LevelEnum {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
	EXPERT = "expert",
}

export interface PuzzleGenResType {
	puzzle: string;
	solution: string;
	difficulty: string;
}

export interface PuzzleNumberObjType {
	num: string;
	isDefault: boolean;
	isError: boolean;
	isHighlight: boolean;
}

export interface PuzzleFormattedType {
	puzzle: PuzzleNumberObjType[];
	solution: string;
	difficulty: string;
}