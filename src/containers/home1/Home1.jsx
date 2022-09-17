import Lottie from "lottie-react";
import animationData from "../../images/lottieHome.json";
import MouseScroll from "../../components/mouseScroll/MouseScroll";
import "./Home1.css";

const Main = () => {
	return (
		<div className="Main">
			<div className="MainLeft">
				<h1 className="MainLeftH1">
					<span style={{ color: "var(--color-1)" }}>Connect</span>
					<br />
					<span style={{ color: "var(--color-2)" }}>Collaborate</span>
					<br />
					<span style={{ color: "var(--color-1)" }}>Solve</span>
				</h1>
				<p className="MainLeftP">
					iNEURON - We are society from another Dimension. Visit EL from
					Stranger Things to know more. If she doesn't tell contact @thor
				</p>
				<div className="pulse">
					<a
						href="https://forms.gle/2SJwxjnX9Ld5o14J8"
						target="_blank"
						className="MainLeftButton"
						rel="noreferrer"
					>
						Join Us
					</a>
				</div>
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
