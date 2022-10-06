import React from 'react'
import './TrackListTable.scss'

const TrackRowItem = ({ name, authors, genres, duration, id }) => {
	return (
		<tr className="track_row">
			<td className="play_track title">
				<span>{id + 1}</span>
				<span>{name}</span>
			</td>

			<td className="authors">
				{authors &&
					authors.map((author) => {
						return (
							<span className="track_link" key={author}>
								{author}
							</span>
						)
					})}
			</td>

			<td className="genres">
				{genres &&
					genres.map((genre) => {
						return (
							<span className="track_link" key={genre}>
								{genre}
							</span>
						)
					})}
			</td>
			<td className="duration">{duration}</td>
		</tr>
	)
}

const TrackListTable = () => {
	const iterator = (n) => {
		const t = []
		for (let i = 0; i < n; i++) {
			t.push(
				<TrackRowItem
					name={'track' + i}
					authors={['author' + i]}
					genres={['genre' + i]}
					duration={i * 45 + 's'}
					id={i}
					key={i}
				/>
			)
		}
		return t
	}

	return (
		<table className="tracks_table">
			<thead>
				<tr>
					<th className="title">Titre</th>
					<th className="authors">Artiste</th>
					<th className="genres">Album</th>
					<th className="duration">Durée</th>
				</tr>
			</thead>
			<tbody>
				{iterator(10).map((tr) => {
					return tr
				})}
			</tbody>
		</table>
	)
}

export default TrackListTable
