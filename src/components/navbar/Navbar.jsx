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
							<li><span data-hover="Home">Home</span></li>
							<li><span data-hover="About">About</span></li>
							<li><span data-hover="Generate">Generate</span></li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
