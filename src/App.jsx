import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Generate from "./pages/generate/Generate";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route index element={<Home />} />
				<Route path="/generate" element={<Generate />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
