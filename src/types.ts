export enum LevelEnum {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
	EXPERT = "expert",
}

export enum NumStatus {
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
	status: NumStatus | null;
}

export interface PuzzleFormattedType {
	puzzle: PuzzleNumberObjType[];
	solution: string;
	difficulty: string;
}