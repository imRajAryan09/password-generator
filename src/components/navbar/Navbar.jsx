import { Pattern, Menu } from "@mui/icons-material";
import "./navbar.scss";

const Navbar = () => {
	return (
		<header>
			<div className="header-content">
				<div className="logo">
					<Pattern className="logo-icon" />
					<span>KeyGen</span>
				</div>
				<nav>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Generate</li>
					</ul>
				</nav>
				<div className="hamburger">
					<Menu className="hamburger-icon" />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
