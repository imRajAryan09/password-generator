import Navbar from "../../components/navbar/Navbar";
// import Announcement from "../../components/announcement/Announcement";
import "./home.scss";
import BgSvg from "../../assets/hero-svg-pwdgen.png";
import Lock from "../../components/lock/Lock";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div className="home">
			<div className="nav-component">
				{/* <Announcement/> */}
				<Navbar />
			</div>
			<div className="home-content">
				<div className="text">
					<h1>Keep Your Data Secure</h1>
					<p>Generate secure and strong passwords with ease. </p>
					<Link to="/generate">
						<div className="button">
							<Lock className="lock-icon" />
							<span>Generate Password</span>
						</div>
					</Link>
				</div>
				<div className="image">
					<img src={BgSvg} alt="hero-img" />
				</div>
			</div>
		</div>
	);
};

export default Home;
