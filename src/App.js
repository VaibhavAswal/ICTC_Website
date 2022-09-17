import OuterFrame from "./containers/outerFrame/OuterFrame";
import Home from "./pages/home/Home";
import "./App.css";
import Footer from "./containers/footer/Footer";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import Members from "./pages/members/Members";
import Events from "./pages/events/Events";
import Gallery from "./pages/gallery/Gallery";

const sr = ScrollReveal({
	distance: "60px",
	reset: true,
	duration: 1000,
	delay: 200,
});

function App() {
	useEffect(() => {
		sr.reveal(`.MainLeftH1`, { origin: "top", reset: true, duration: 900 });
		sr.reveal(`.MainLeftP`, { origin: "top", reset: true, duration: 1500 });
		sr.reveal(`.MainLeftButton`, {
			origin: "top",
			reset: true,
			duration: 1500,
		});
		sr.reveal(`.MainRight`, { origin: "right", reset: true, duration: 2500 });
		sr.reveal(`.mouse_scroll `, {
			origin: "bottom",
			delay: 800,
			reset: false,
			duration: 1500,
		});
		sr.reveal(`.OuterFrameLeftChild1`, {
			delay: 700,
			origin: "left",
			reset: false,
			duration: 1500,
		});
		sr.reveal(`.OuterFrameLeftChild2`, {
			delay: 900,
			origin: "left",
			reset: false,
			duration: 1500,
		});
		sr.reveal(`.OuterFrameLeftChild3`, {
			delay: 1100,
			origin: "left",
			reset: false,
			duration: 1500,
		});
		sr.reveal(`.OuterFrameLeftChild4`, {
			delay: 1300,
			origin: "left",
			reset: false,
			duration: 1500,
		});
		sr.reveal(`.nav`, {
			delay: 900,
			origin: "top",
			reset: false,
			duration: 1500,
		});
		sr.reveal(`.Home2Left`, {
			origin: "left",
			reset: true,
			duration: 1500,
		});
		sr.reveal(`.Home2RightH1`, {
			delay: 300,
			origin: "right",
			reset: true,
			duration: 1500,
		});
		sr.reveal(`.Home2RightP`, {
			delay: 400,
			origin: "right",
			reset: true,
			duration: 2500,
		});
		sr.reveal(
			`.counterChild, .CoreMembersText, .CoreMembersButton, .eventsChild`,
			{
				origin: "bottom",
				reset: true,
				duration: 1500,
			}
		);
		sr.reveal(`.UserCard`, {
			origin: "bottom",
			reset: true,
			duration: 900,
			distance: "60px",
		});
		sr.reveal(`.FacultyCoordinatorsH1`, {
			distance: "0px",
			easing: "ease-in",
			reset: false,
		});
	}, []);
	return (
		<div className="App">
			<OuterFrame />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/members" element={<Members />} />
				<Route path="/events" element={<Events />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/achievements" element={<ComingSoon />} />
				<Route path="/:id" element={<ComingSoon />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
