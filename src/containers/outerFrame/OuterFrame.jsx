import { Top, Right, Left } from "../../components/outerFrame/OuterFrame";
import "./OuterFrame.css";

const OuterFrame = () => {
	return (
		<div className="OuterFrame">
			<Top />
			<div className="OuterFrameMiddle">
				<Left />
				<Right />
			</div>
		</div>
	);
};

export default OuterFrame;
