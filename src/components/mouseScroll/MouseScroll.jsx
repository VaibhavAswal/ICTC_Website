import { useEffect, useState } from "react";
import "./MouseScroll.css";

const MouseScroll = () => {
	const [mouseVisible, setMouseVisible] = useState(true);
	function hideMouse() {
		// When the scroll is greater than 50 viewport height, add the hidden class to the mouse tag
		if (this.scrollY >= 80) {
			setMouseVisible(false);
		} else {
			setMouseVisible(true);
		}
	}
	useEffect(() => {
		window.addEventListener("scroll", hideMouse);
	});
	return (
		<div className={`mouse_scroll ${mouseVisible ? "" : "hidden"}`}>
			<div className="mouse">
				<div className="wheel"></div>
			</div>
			<div>
				<span className="m_scroll_arrows unu"></span>
				<span className="m_scroll_arrows doi"></span>
				<span className="m_scroll_arrows trei"></span>
			</div>
		</div>
	);
};

export default MouseScroll;
