import React from 'react'
import { Link } from 'react-router-dom'

import './sidenav.scss'
import { BiSearch } from 'react-icons/bi'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { GiHorseHead } from 'react-icons/gi'

const Sidenav = () => {
	return (
		<div className="side_nav">
			<span className="logo">
				<Link to="/">Tempo</Link>
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
						<span>
							<AiOutlinePlayCircle />
						</span>
						<Link to="/playlists">Mes Playlists</Link>
					</li>
					<li>
						<span>
							<GiHorseHead />
						</span>
						<Link to="/explore">Explorez</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Sidenav
