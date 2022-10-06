import React from 'react'
import './TrackListHead.scss'
import image from './305x305cc.webp'

const TrackListHead = () => {
	return (
		<div className="tracklist_head">
			<div className="list_image_container">
				<img src={image} alt="cover" />
			</div>
			<div className="list_description">
				<div className="list_infos">
					<h2 className="list_title">title</h2>
					<h3 className="list_genre">
						<span>Genre --- Link</span>
					</h3>
					<span className="list_last_update">Updated Yesterday</span>
				</div>

				<p className="list_details">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
					dicta animi? Dolor voluptatibus saepe debitis! Maxime adipisci totam
					ab nesciunt unde aspernatur illo quidem necessitatibus! Vel odio aut
					ex molestiae?
				</p>
				<button>Preview</button>
			</div>
		</div>
	)
}

export default TrackListHead
