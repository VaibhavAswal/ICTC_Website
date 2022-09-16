import OuterFrame from "./containers/outerFrame/OuterFrame";
import Home from "./pages/home/Home";
import "./App.css";
import Footer from "./containers/footer/Footer";

function App() {
	return (
		<div className="App">
			<OuterFrame />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
