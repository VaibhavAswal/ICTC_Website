import img from "../../images/img1.jpg";
import { AiOutlineCalendar } from "react-icons/ai";
import "./Events.css";
const Events = () => {
	return (
		<div className="EventsPage">
			<div className="eventsBanner">
				<img src={img} alt="" />
				<h1>Events</h1>
			</div>
			<div className="events">
				<div className="eventsChild">
					<h1>Recruitment Drive</h1>
					<p>
						iNeuron Student community at DIT University has started its
						recruitment drive for the year 2022. Use{" "}
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSeIOFeiTuET8CXZIAAIkUDnikXMauf_GypjXw_CNkcixo4rWg/viewform"
							rel="noreferrer"
							target="_blank"
						>
							This Link
						</a>{" "}
						to register.
					</p>
					<div>
						<AiOutlineCalendar /> 15 Sept 22
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
