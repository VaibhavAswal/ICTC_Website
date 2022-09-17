import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo2.jpg";
import "./OuterFrame.css";

export const Top = () => {
	const navigate = useNavigate();
	const [navVisible, setnavVisible] = useState(false);
	const path = window.location.pathname;

	useEffect(() => {
		path === "/" ? console.log() : setnavVisible(true);
		function showNav() {
			// When the scroll is greater than 50 viewport height, add the headerVisible class to the nav tag
			if (this.scrollY >= 50) {
				setnavVisible(true);
			} else {
				setnavVisible(false);
			}
		}
		window.addEventListener("scroll", showNav);
	});
	return (
		<div className="OuterFrameTop">
			<div className="OuterFrameTopChild1">
				<img src={logo} alt="" className="logo" />
				<div className="nav">
					<div>
						<p
							onClick={() => {
								navigate("/");
							}}
							className={path === "/" ? "active" : ""}
						>
							Home
						</p>
					</div>
					<div>
						<p
							onClick={() => {
								navigate("/members");
							}}
							className={path === "/members" ? "active" : ""}
						>
							Members
						</p>
					</div>
					<div>
						<p
							onClick={() => {
								navigate("/projects");
							}}
							className={path === "/projects" ? "active" : ""}
						>
							Projects
						</p>
					</div>
					<div>
						<p
							onClick={() => {
								navigate("/achievements");
							}}
							className={path === "/achievements" ? "active" : ""}
						>
							Achievements
						</p>
					</div>
					<div>
						<p
							onClick={() => {
								navigate("/gallery");
							}}
							className={path === "/gallery" ? "active" : ""}
						>
							Gallery
						</p>
					</div>
				</div>
				<div className="menu">
					<HiMenuAlt3 />
				</div>
			</div>
			<div className={`OuterFrameTopChild2 ${navVisible ? "" : "hidden"}`}>
				<div
					onClick={() => {
						navigate("/");
					}}
					className={path === "/" ? "active" : ""}
				>
					Home
				</div>
				<div
					onClick={() => {
						navigate("/members");
					}}
					className={path === "/members" ? "active" : ""}
				>
					Members
				</div>
				<div
					onClick={() => {
						navigate("/achievments");
					}}
					className={path === "/achievments" ? "active" : ""}
				>
					Achievments
				</div>
				<div
					onClick={() => {
						navigate("/gallery");
					}}
					className={path === "/gallery" ? "active" : ""}
				>
					Gallery
				</div>
			</div>
		</div>
	);
};

export const Left = () => {
	return (
		<div className="OuterFrameLeft">
			<h1 className="OuterFrameLeftChild4">FOLLOW US</h1>
			<div className="OuterFrameLeftChild3">
				<a href="/no" target="_blank">
					INSTAGRAM
				</a>
			</div>
			<div className="OuterFrameLeftChild2">
				<a href="/no" target="_blank">
					LINKEDIN
				</a>
			</div>
			<div className="OuterFrameLeftChild1">
				<a href="/no" target="_blank">
					TWITTER
				</a>
			</div>
		</div>
	);
};

export const Right = () => {
	return <div className="OuterFrameRight"></div>;
};
