import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import BgSvg from "../../assets/hero-svg-pwdgen.png";
const Home = () => {
	return (
		<div className="home">
			<div className="nav-component">
				<Navbar />
			</div>
			<div className="home-content">
				<div className="text">
					<h1>Keep Your Private Data Secure</h1>
					<p>Generate secure and strong passwords with ease. </p>
					<div className="button">Generate Password</div>
				</div>
				<div className="image">
					<img
						src={BgSvg}
						alt="hero-img"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
