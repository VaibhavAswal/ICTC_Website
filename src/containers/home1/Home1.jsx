import Lottie from "lottie-react";
import animationData from "../../images/lottieHome.json";
import MouseScroll from "../../components/mouseScroll/MouseScroll";
import "./Home1.css";

const Main = () => {
	return (
		<div className="Main">
			<div className="MainLeft">
				<h1>
					Connect
					<br />
					Collaborate
					<br />
					Solve
				</h1>
				<p>
					iNEURON - We are society from another Dimension. Visit EL from
					Stranger Things to know more. If she doesn't tell contact @thor
				</p>
				<button>Join Us</button>
			</div>
			<div className="MainRight">
				<Lottie
					style={{ height: "calc(100vh - 6rem)" }}
					animationData={animationData}
					loop={true}
				/>
			</div>
			<div
				onClick={() => {
					document.getElementById("Home2").scrollIntoView();
				}}
			>
				<MouseScroll />
			</div>
		</div>
	);
};

export default Main;
