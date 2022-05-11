import Navbar from "../../components/navbar/Navbar";
import "./generate.scss";

const Generate = () => {
	return (
		<div className="generate">
			<div className="nav-component">
				{/* <Announcement/> */}
				<Navbar />
			</div>
			<div className="generate-content">
				<div className="form-div"></div>
			</div>
		</div>
	);
};

export default Generate;
