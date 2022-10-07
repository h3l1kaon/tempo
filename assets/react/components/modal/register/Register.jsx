import React from "react";

const Register = () => {
	return (
		<div>
			<h1>Inscrivez-vous </h1>
			<form action="" method="POST">
				{/* <label for="username">Nom</label> */}
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Nom d'utilisateur"
				/>
				<br />
				{/* <label for="email">EMAIL</label> */}
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Saisissez votre Email"
				/>
				<br />
				{/* <label for="password">MDP</label> */}
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Créez votre mot de passe"
				/>
				<br />
				<label for="isArtist">Etes vous un artiste ?</label>
				<input type="checkbox" id="isArtist" name="isArtist" />
				<br />
				<input type="submit" value="Envoyer" />
			</form>
		</div>
	);
};

export default Register;
