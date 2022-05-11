import { BrowserRouter } from "react-router-dom";
import Generate from "./pages/generate/Generate";
// import Home from "./pages/home/Home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Generate />
			</BrowserRouter>
		</div>
	);
}

export default App;
