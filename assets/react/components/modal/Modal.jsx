import React from 'react';
import Connection from './connection/Connection';
import './modal.scss';
import Register from './register/Register';

function Modal({ openned, close }) {
	console.log(openned);
	return (
		<div
			className="modal"
			style={{
				display: openned.open ? 'flex' : 'none',
			}}
		>
			<div className="content">
				<h1>{openned.val}</h1>
				<span onClick={() => close(false)}>X</span>
				{/* <h1>Test Formulaire modal</h1>
				<p>olololeazeaeaeaea</p> */}
				{openned.val === 'register' ? <Register /> : <Connection />}
			</div>
		</div>
	);
}

export default Modal;
