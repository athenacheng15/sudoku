export enum LevelEnum {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
	EXPERT = "expert",
}

export enum NumStatusEnum {
	HIGHLIGHT = "highlight",
	ERROR = "error",
}

export interface PuzzleGenResType {
	puzzle: string;
	solution: string;
	difficulty: string;
}

export interface PuzzleNumberObjType {
	num: string;
	isDefault: boolean;
	status: NumStatusEnum | null;
}

export interface PuzzleFormattedType {
	puzzle: PuzzleNumberObjType[];
	solution: string;
	difficulty: string;
}