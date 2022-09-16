import logo from "../../images/logo.jpg";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="Footer">
			<img src={logo} alt="" />
			<h3>
				<span style={{ color: "var(--color-1)" }}>iNeuron</span>X
				<span style={{ color: "var(--color-1)" }}>DITU</span> &#169;2022, All
				Rights Reserved | GitHUb
			</h3>
		</div>
	);
};

export default Footer;
