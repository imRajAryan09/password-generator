import Navbar from "../../components/navbar/Navbar";
import "./generate.scss";

const Generate = () => {
	return (
		<div className="generate">
			<div className="nav-component">
				<Navbar />
			</div>
			<div className="generate-content">
				<div className="form-div">
					<div className="form-items">
						<div className="form-item">
							<label htmlFor="len">
								Required Password Length :
								<div className="check-eg">
									<input
										type="number"
										id="len"
										name="len"
										placeholder="Enter Password Length"
									></input>
								</div>
							</label>
						</div>
						<div className="form-item">
							<label htmlFor="symbol">
								Include Symbols :
								<div className="check-eg">
									<input type="checkbox" id="symbol" name="symbol"></input>
									<span className="checkbox-custom"></span>
									<span>( e.g. @#$% )</span>
								</div>
							</label>
						</div>
						<div className="form-item">
							<label htmlFor="numbers">
								Include Numbers :
								<div className="check-eg">
									<input type="checkbox" id="numbers" name="numbers"></input>
									<span className="checkbox-custom"></span>
									<span>( e.g. 123456 )</span>
								</div>
							</label>
						</div>
						<div className="form-item">
							<label htmlFor="uppercase">
								Include Uppercase Characters :
								<div className="check-eg">
									<input
										type="checkbox"
										id="uppercase"
										name="uppercase"
									></input>
									<span className="checkbox-custom"></span>
									<span>( e.g. ABCDEFGH )</span>
								</div>
							</label>
						</div>
						<div className="form-item">
							<label htmlFor="lowercase">
								Include Lowercase Characters :
								<div className="check-eg">
									<input
										type="checkbox"
										id="lowercase"
										name="lowercase"
									></input>
									<span className="checkbox-custom"></span>
									<span>( e.g. abcdefgh )</span>
								</div>
							</label>
						</div>
						<div className="form-item">
							<label htmlFor="similar">
								Exclude Similar Characters :
								<div className="check-eg">
									<input type="checkbox" id="similar" name="similar"></input>
									<span className="checkbox-custom"></span>
									<span>( e.g. i, l, 1, L, o, 0, O )</span>
								</div>
							</label>
						</div>
						<div className="form-item">
							<label htmlFor="ambiguous">
								Exclude Ambiguous Characters :
								<div className="check-eg">
									<input
										type="checkbox"
										id="ambiguous"
										name="ambiguous"
									></input>
									<span className="checkbox-custom"></span>
									<span>( {} [ ] ( ) / \ ' " ` ~ , ; : . &lt; &gt; )</span>
								</div>
							</label>
						</div>
					</div>
					<button className="generate-button">Generate Password</button>
				</div>
			</div>
		</div>
	);
};

export default Generate;
