import type { LevelEnum as LevelType } from "@types";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LevelEnum } from "@types";
import { DifficultyBtn } from "@components/difficulty-btn";

export const Home = () => {
	const navigate = useNavigate();
	const [currentLevel, setCurrentLevel] = useState<LevelType>(LevelEnum.EASY);
	const levels = Object.values(LevelEnum);
	return (
		<div className="flex flex-col items-center justify-center">
			<p className="text-font-dark text-7xl">SODOKU</p>
			<div className="flex flex-col items-center justify-center space-y-4 my-10">
				{levels.map((level) => (
					<DifficultyBtn
						key={level}
						label={level}
						isSelected={level === currentLevel}
						onClick={() => setCurrentLevel(level)}
					/>
				))}
			</div>
			<button
				className="text-2xl text-white border-theme bg-theme hover:bg-theme-hover hover:border-theme-hover transition border-4 border-solid rounded-xl w-80 h-20"
				onClick={() => navigate(`/puzzle/${currentLevel}`)}
			>
				Go
			</button>
		</div>
	);
};
