import "./navbar.scss";
const Navbar = () => {
	return (
		<nav>
			<div className="logo">PassGen</div>
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
