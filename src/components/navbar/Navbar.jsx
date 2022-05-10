import { Pattern, Menu, Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	useEffect(() => {
		if (size.width > 768 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);
	const menuToggleHandler = () => {
		setMenuOpen((p) => !p);
	};

	return (
		<header>
			<div className="header-content">
				<div className="logo">
					<Pattern className="logo-icon" />
					<span>KeyGen</span>
				</div>
				<nav className={menuOpen && size.width <= 768 ? "isMenu" : ""}>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Generate</li>
					</ul>
				</nav>
				<div className="hamburger">
					{!menuOpen ? (
						<Menu className="hamburger-icon" onClick={menuToggleHandler} />
					) : (
						<Close className="close-icon" onClick={menuToggleHandler} />
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
