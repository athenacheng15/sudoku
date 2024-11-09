import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Puzzle } from "./pages/puzzle";
import { Completed } from "./pages/completed";
import { Layout } from "./layout";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="puzzle/:difficulty" element={<Puzzle />} />
				<Route path="completed" element={<Completed />} />
				<Route path="*" element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
