import { Top, Right, Left } from "../../components/outerFrame/OuterFrame";
import logo from "../../images/logo.jpg";
import "./OuterFrame.css";

const OuterFrame = () => {
	return (
		<>
			<div className="OuterFrame">
				<Top />
				<Left />
				<Right />
			</div>
			<img src={logo} className="fixedLogo" alt="" />
		</>
	);
};

export default OuterFrame;
