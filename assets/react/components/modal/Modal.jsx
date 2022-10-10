import React from "react";
import Connection from "./connection/Connection";
import "./modal.scss";
import Register from "./register/Register";
import { MdClose } from "react-icons/md";

function Modal({ openned, close }) {
	console.log(openned);
	return (
		<div
			className="modal"
			style={{
				display: openned.open ? "flex" : "none",
				backgroundColor: openned.open ? "rgba(26, 25, 25, 0.495)" : "none",
			}}
		>
			<div className="content">
				{/* <h1>{openned.val}</h1> */}

				<span onClick={() => close(false)}>
					<MdClose />
				</span>
				{openned.val === "register" ? <Register /> : <Connection />}
			</div>
		</div>
	);
}

export default Modal;
