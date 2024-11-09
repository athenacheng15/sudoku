import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<div className="flex flex-col items-center justify-center p-8">
			<Outlet />
		</div>
	);
};
