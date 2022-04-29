import "./navbar.scss";
import PatternIcon from "@mui/icons-material/Pattern";
const Navbar = () => {
	return (
		<header>
			<div className="header-content">
				<div className="logo">
					<PatternIcon className="logo-icon" />
					PassGen
				</div>
				<nav>
					<div className="nav-items">
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Generate</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
