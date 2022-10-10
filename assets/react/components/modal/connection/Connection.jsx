import React from "react";

function Connection() {
	return (
		<div>
			<h1>Connexion</h1>
			<form action="" method="POST">
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Saisissez votre Email"
				/>
				<br />

				<input
					type="password"
					id="password"
					name="password"
					placeholder="Saisissez votre mot de passe"
				/>
				<br />

				<input type="submit" value="Connexion" />
			</form>
		</div>
	);
}

export default Connection;
