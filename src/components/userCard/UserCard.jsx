import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import "./UserCard.css";

const UserCard = (props) => {
	return (
		<div className="UserCard">
			<div className="picture">
				<img className="img-fluid" src={props.image} alt="" />
			</div>
			<div className="team-content">
				<h3 className="name">{props.name}</h3>
				<h4 className="title">{props.designation}</h4>
			</div>
			<ul className="social">
				<li>
					<a href="https://tollygram.vaibhavaswal.codes/" aria-hidden="true">
						<FaFacebookF />
					</a>
				</li>
				<li>
					<a href="https://tollygram.vaibhavaswal.codes/" aria-hidden="true">
						<FaTwitter />
					</a>
				</li>
				<li>
					<a href="https://tollygram.vaibhavaswal.codes/" aria-hidden="true">
						<FaInstagram />
					</a>
				</li>
				<li>
					<a href="https://tollygram.vaibhavaswal.codes/" aria-hidden="true">
						<FaLinkedinIn />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default UserCard;
