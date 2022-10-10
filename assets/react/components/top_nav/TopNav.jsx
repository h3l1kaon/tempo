import React from "react";
import "./topnav.scss";

const TopNav = ({ triggerModal }) => {
	return (
		<div className="top_nav">
			<button onClick={() => triggerModal("register")} id="register">
				Inscription
			</button>
			<button id="connexion" onClick={() => triggerModal("connection")}>
				Connexion
			</button>
		</div>
	);
};

export default TopNav;
