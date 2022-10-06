import React from 'react'
import TrackListHead from './head/TrackListHead'
import TrackListTable from './table/TrackListTable'

const TrackListDisplay = () => {
	return (
		<div className="tracks_display">
			<TrackListHead />
			<TrackListTable />
		</div>
	)
}
export default TrackListDisplay
