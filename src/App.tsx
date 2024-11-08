import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Puzzle } from "./pages/puzzle";

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="puzzle/:difficulty" element={<Puzzle />} />
			<Route path="*" element={<Home />} />
		</Routes>
	);
}

export default App;
