import React from 'react'
import LargeCard from '../../components/large_card/LargeCard'
import ListCard from '../../components/list_card/ListCard'
import './explore.scss'

const ExplorePage = () => {
	const make = (n) => {
		const t = []
		for (let i = 0; i < n; i++) {
			t.push(<ListCard />)
		}
		return t
	}
	const make2 = (n) => {
		const t = []
		for (let i = 0; i < n; i++) {
			t.push(<LargeCard />)
		}
		return t
	}
	return (
		<div className="explore_page">
			<h1>head</h1>
			<div className="explore_head">
				{make2(4).map((e, i) => {
					return e
				})}
			</div>
			<hr />
			<h1>body</h1>
			<div className="explore_body">
				{make(20).map((e, i) => {
					return e
				})}
			</div>
		</div>
	)
}

export default ExplorePage
