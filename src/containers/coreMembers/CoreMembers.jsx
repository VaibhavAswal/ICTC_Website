import UserCard from "../../components/userCard/UserCard";
import user from "../../images/user.png";
import "./CoreMembers.css";

const CoreMembers = (props) => {
	return (
		<div>
			<div className="CoreMembers">
				<h1>Core Members</h1>
				<div className="CoreMembersChild">
					<UserCard image={user} name="xxx xxx" designation="President" />
					<UserCard image={user} name="xxx xxx" designation="Vice President" />
					<UserCard
						image={user}
						name="xxx xxx"
						designation="General Secretary"
					/>
					<UserCard
						image={user}
						name="xxx xxx"
						designation="Web Development Head"
					/>
					<UserCard image={user} name="xxx xxx" designation="Cyber Head" />
					<UserCard image={user} name="xxx xxx" designation="President" />
					<UserCard
						image={user}
						name="xxx xxx"
						designation="Creative Team Head"
					/>
					<UserCard
						image={user}
						name="xxx xxx"
						designation="Social Meadia Head"
					/>
					<UserCard image={user} name="xxx xxx" designation="Designing Head" />
					<UserCard image={user} name="xxx xxx" designation="Core Member" />
					<UserCard image={user} name="xxx xxx" designation="Core member" />
				</div>
				{props.home && (
					<>
						<div className="CoreMembersText">
							We Do What We Do Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Tenetur, fugit atque facere accusamus aperiam
							perspiciatis, iste minima, accusantium perferendis culpa nisi quia
							labore veniam pariatur!
						</div>
						{/* button */}
						<div className="wrapperbutton CoreMembersButton">
							<a href="/contact">
								<span>Contact Us</span>
							</a>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default CoreMembers;
