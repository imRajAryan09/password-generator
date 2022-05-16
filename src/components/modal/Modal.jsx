import { ContentCopy } from "@mui/icons-material";
import { useEffect } from "react";
import "./modal.scss";
const Modal = (props) => {
	const closeOnEscapeKeyDown = (e) => {
		if (e.charCode === 27 || e.keyCode === 27) {
			props.onClose();
		}
	};
	useEffect(() => {
		document.body.addEventListener("keydown", closeOnEscapeKeyDown);
		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
		};
	});
	return (
		<div
			className={`modal ${props.show ? "show" : ""}`}
			onClick={props.onClose}
		>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					<h3>Your Generated Password</h3>
				</div>
				<div className="modal-body">
					<p>{props.pwd}</p>
					<ContentCopy
						className="copy-icon"
						onClick={() => navigator.clipboard.writeText(props.pwd)}
					/>
				</div>
				<div className="modal-footer">
					<button onClick={props.onClose} className="close">
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
