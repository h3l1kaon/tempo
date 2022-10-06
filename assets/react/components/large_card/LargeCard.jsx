import React from 'react'
import './large_card.scss'
import cover from './cover1.jpg'
import RoundIconButton from '../icon_button/RoundIconButton'
import { BsPlayFill, BsThreeDots } from 'react-icons/bs'
const LargeCard = () => {
	return (
		<div className="large_card">
			<div className="cover_container">
				<img src={cover} alt="cover_image" className="cover_image" />
				<div className="overlay">
					<div className="buttons_container">
						<RoundIconButton icon={<BsPlayFill />} />
						<RoundIconButton icon={<BsThreeDots />} />
					</div>
				</div>
			</div>
			<div className="large_card_desc">
				<p className="large_name">list_name</p>
				<p className="large_genre">list_genre/cat</p>
			</div>
		</div>
	)
}

export default LargeCard
