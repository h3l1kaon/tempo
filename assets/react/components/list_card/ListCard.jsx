import React from 'react'
import './list_card.scss'
import cover from './cover.webp'
import { BsPlayFill, BsThreeDots } from 'react-icons/bs'
import RoundIconButton from '../icon_button/RoundIconButton'
const ListCard = () => {
	return (
		<div className="list_card">
			<div className="cover_container">
				<img src={cover} alt="cover_image" className="cover_image" />
				<div className="overlay">
					<div className="buttons_container">
						<RoundIconButton icon={<BsPlayFill />} />
						<RoundIconButton icon={<BsThreeDots />} />
					</div>
				</div>
			</div>
			<div className="list_card_desc">
				<p className="list_name">list_name</p>
				<p className="list_genre">list_genre/cat</p>
			</div>
		</div>
	)
}

export default ListCard
