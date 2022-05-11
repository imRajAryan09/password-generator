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
				<div className="form-div">
					<div className="form-items">
						<div className="form-item">
							<label for="len">Required Password Length :</label>
							<div className="check-eg">
								<input type="text" id="len" name="len"></input>
							</div>
						</div>
						<div className="form-item">
							<label for="symbol">Include Symbols :</label>
							<div className="check-eg">
								<input type="checkbox" id="symbol" name="symbol"></input>
								<span>( e.g. @#$% )</span>
							</div>
						</div>
						<div className="form-item">
							<label for="numbers">Include Numbers :</label>
							<div className="check-eg">
								<input type="checkbox" id="numbers" name="numbers"></input>
								<span>( e.g. 123456 )</span>
							</div>
						</div>
						<div className="form-item">
							<label for="uppercase">Include Uppercase Characters :</label>
							<div className="check-eg">
								<input type="checkbox" id="uppercase" name="uppercase"></input>
								<span>( e.g. ABCDEFGH )</span>
							</div>
						</div>
						<div className="form-item">
							<label for="lowercase">Include Lowercase Characters :</label>
							<div className="check-eg">
								<input type="checkbox" id="lowercase" name="lowercase"></input>
								<span>( e.g. abcdefgh )</span>
							</div>
						</div>
						<div className="form-item">
							<label for="similar">Exclude Similar Characters :</label>
							<div className="check-eg">
								<input type="checkbox" id="similar" name="similar"></input>
								<span>( e.g. i, l, 1, L, o, 0, O )</span>
							</div>
						</div>
						<div className="form-item">
							<label for="ambiguous">Exclude Ambiguous Characters :</label>
							<div className="check-eg">
								<input type="checkbox" id="ambiguous" name="ambiguous"></input>
								<span>( {} [ ] ( ) / \ ' " ` ~ , ; : . &lt; &gt; )</span>
							</div>
						</div>
						<button className="generate-button">Generate Password</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Generate;
