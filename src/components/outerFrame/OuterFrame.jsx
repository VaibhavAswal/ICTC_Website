import "./OuterFrame.css";

export const Top = () => {
	return (
		<div className="OuterFrameTop">
			<div className="logo"></div>
			<div className="nav">
				<p>HOME</p>
				<p>GALLERY</p>
				<p>MEMBERS</p>
				<p>SOMETHING</p>
				<p>HELLO</p>
			</div>
			<div className="menu"></div>
		</div>
	);
};

export const Left = () => {
	return (
		<div className="OuterFrameLeft">
			<div>
				<p>INSTAGRAM</p>
			</div>
			<div>
				<p>LINKEDIN</p>
			</div>
			<div>
				<p>FOLLOW US</p>
			</div>
		</div>
	);
};

export const Right = () => {
	return <div className="OuterFrameRight"></div>;
};
