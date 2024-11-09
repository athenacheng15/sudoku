import { DifficultyBtn } from "../../components/difficulty-btn";
export const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<p className="text-font-dark text-7xl">SODOKU</p>
			<div className="flex flex-col items-center justify-center space-y-4 my-10">
				<DifficultyBtn selected label="EASY" />
				<DifficultyBtn selected label="MEDIUM" />
				<DifficultyBtn selected label="HARD" />
				<DifficultyBtn selected label="EXPERT" />
			</div>
			<button className="text-white border-theme bg-theme hover:bg-theme-hover hover:border-theme-hover transition border-4 border-solid rounded-xl w-80 h-20">
				Go
			</button>
		</div>
	);
};
