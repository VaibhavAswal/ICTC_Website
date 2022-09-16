import "./UserCard.css";

const UserCard = (props) => {
	return (
		<div className="UserCard">
			<img src={props.image} alt="" />
			<h1>{props.name}</h1>
			<p>{props.designation}</p>
		</div>
	);
};

export default UserCard;
