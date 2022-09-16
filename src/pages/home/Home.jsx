import Counter from "../../components/counter/Counter";
import CoreMembers from "../../containers/coreMembers/CoreMembers";
import FacultyCoordinators from "../../containers/facultyCoordinators/FacultyCoordinators";
import Home1 from "../../containers/home1/Home1";
import Home2 from "../../containers/home2/Home2";

const Home = () => {
	return (
		<>
			<Home1 />
			<Home2 />
			<Counter />
			<FacultyCoordinators />
			<CoreMembers />
		</>
	);
};

export default Home;
