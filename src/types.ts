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