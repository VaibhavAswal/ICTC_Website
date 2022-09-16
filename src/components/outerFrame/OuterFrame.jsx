import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../../images/logo2.jpg";
import "./OuterFrame.css";

export const Top = () => {
	return (
		<div className="OuterFrameTop">
			{/* <div className="logo"> */}
			<img src={logo} alt="" className="logo" />
			{/* </div> */}
			<div className="nav">
				<div>
					<a href="/events">Events</a>
				</div>
				<div>
					<a href="/Members">Members</a>
				</div>
				<div>
					<a href="/projects">Projects</a>
				</div>
				<div>
					<a href="/achievments">Achievements</a>
				</div>
				<div>
					<a href="/magazine">Magazine</a>
				</div>
				<div>
					<a href="/gallery">Gallery</a>
				</div>
			</div>
			<div className="menu">
				<HiMenuAlt3 />
			</div>
		</div>
	);
};

export const Left = () => {
	return (
		<div className="OuterFrameLeft">
			<h1>FOLLOW US</h1>
			<div>
				<a href="/no">INSTAGRAM</a>
			</div>
			<div>
				<a href="/no">LINKEDIN</a>
			</div>
			<div>
				<a href="/no">TWITTER</a>
			</div>
		</div>
	);
};

export const Right = () => {
	return <div className="OuterFrameRight"></div>;
};
