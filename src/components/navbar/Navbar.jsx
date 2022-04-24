import "./navbar.scss";
import PatternIcon from "@mui/icons-material/Pattern";
const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<PatternIcon className="logo-icon" />
				PassGen
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Generate</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
