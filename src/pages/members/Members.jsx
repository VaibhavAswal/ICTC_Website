import FacultyCoordinators from "../../containers/facultyCoordinators/FacultyCoordinators";
import CoreMembers from "../../containers/coreMembers/CoreMembers";
import "./Members.css";

const Members = () => {
	return (
		<div className="MembersPage">
			<FacultyCoordinators />
			<CoreMembers home={false} />
			<h2 align="center" style={{ marginTop: "2rem" }}>
				Members list coming soon...
			</h2>
		</div>
	);
};

export default Members;
