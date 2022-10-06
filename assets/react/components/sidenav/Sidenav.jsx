import React from 'react';
import { NavLink } from 'react-router-dom';

import './sidenav.scss';
import { BiSearch } from 'react-icons/bi';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { GiHorseHead } from 'react-icons/gi';

const Sidenav = () => {
	return (
		<div className="side_nav">
			<span className="logo">
				<NavLink to="/">Tempo</NavLink>
			</span>

			<div className="nav_search">
				<span>
					<BiSearch />
				</span>
				<input type="text" />
			</div>

			<nav>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) => (isActive ? 'link-active' : 'link')}
							to="/playlists"
						>
							<span>
								<AiOutlinePlayCircle />
							</span>
							Mes Playlists
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/explore"
							className={({ isActive }) => (isActive ? 'link-active' : 'link')}
						>
							<span>
								<GiHorseHead />
							</span>
							Explorez
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidenav;
