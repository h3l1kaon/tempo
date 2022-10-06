import React from 'react';
import './modal.scss';

function Modal({ openned, close }) {
	return (
		<div
			className="modal"
			style={{
				display: openned ? 'flex' : 'none',
			}}
		>
			<div className="content">
				<span onClick={() => close(false)}>X</span>
				<h1>Test Formulaire modal</h1>
				<p>olololeazeaeaeaea</p>
			</div>
		</div>
	);
}

export default Modal;
