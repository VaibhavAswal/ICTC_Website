import UserCard from "../../components/userCard/UserCard";
import user from "../../images/user.png";
import "./FacultyCoordinators.css";

const FacultyCoordinators = () => {
	return (
		<div className="FacultyCoordinators">
			<h1>Faculty Coordinators</h1>
			<div className="FacultyCoordinatorsChild">
				<UserCard
					image={user}
					name="Dr. Sudhani Surname"
					designation="HOD IT"
				/>
				<UserCard image={user} name="Prof. forgot name" designation="xxx xxx" />
			</div>
		</div>
	);
};

export default FacultyCoordinators;
