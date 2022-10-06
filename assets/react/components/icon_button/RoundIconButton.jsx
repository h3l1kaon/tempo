import React from 'react'
import './round_icon_button.scss'
const RoundIconButton = ({ icon }) => {
	return (
		<div className='round_icon_button'>
			<span>{icon}</span>
		</div>
	)
}

export default RoundIconButton
