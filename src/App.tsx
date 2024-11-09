import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Puzzle } from "./pages/puzzle";
import { Layout } from "./layout";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="puzzle/:difficulty" element={<Puzzle />} />
				<Route path="*" element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
