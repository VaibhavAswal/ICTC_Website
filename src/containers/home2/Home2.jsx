import img from "../../images/img1.jpg";
import "./Home2.css";

const Home2 = () => {
	return (
		<div className="Home2" id="Home2">
			<div className="Home2Left">
				<img src={img} alt="" />
			</div>
			<div className="Home2Right">
				<h1>Who we are</h1>
				<p>
					WE are some awesome Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Impedit, corporis. Incidunt, modi natus. Inventore, est
					asperiores temporibus voluptatibus ipsa quam error sint natus, saepe,
					reiciendis explicabo facilis a! Quam, quibusdam.
				</p>
			</div>
		</div>
	);
};

export default Home2;
