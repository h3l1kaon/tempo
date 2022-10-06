import React from 'react';
import './topnav.scss';

const TopNav = ({ triggerModal }) => {
	return (
		<div className="top_nav">
			TopNav
			<button onClick={() => triggerModal(true)} id="inscription">
				Inscription
			</button>
			<button id="connexion">Connexion</button>
		</div>
	);
};

export default TopNav;
