import React from 'react'
import { useState, useEffect } from 'react'
import useWindowDimensions from '../../../services/getWindow'
import './carousel.scss'

const Carousel = ({ children, breakpoints, singleLine }) => {
	const { height, width } = useWindowDimensions()
	const [visibleChildren, setVisibleChildren] = useState(children)
	const [nbOfElements, setNbOfElements] = useState()
	const [index, setIndex] = useState(0)

	// prendre des breakpoint
	// surveiller la taille de l'écran pour update visibleChildren
	// gerer l'indexation?

	// faire des batchs contenant les éléments précédents et suivants

	function defineBreakPoints(breakpoints) {
		let nb_elements = 0
		let max = width
		for (const bp of breakpoints) {
			if (bp.max_px >= max) {
				max = bp.max
				nb_elements = bp.elements
			}
		}
		setNbOfElements(nb_elements)
	}

	function assignChildren() {
		defineBreakPoints(breakpoints)
		console.log(nbOfElements)
		if (index === 0) {
			setVisibleChildren(children.slice(index, nbOfElements))
		} else {
			setVisibleChildren(children.slice(index * nbOfElements, nbOfElements))
		}
	}

	useEffect(() => {
		assignChildren()
	}, [width])

	useEffect(() => {}, [children])

	return (
		<div className="carousel">
			<div className="children_container">
				{visibleChildren.map((child, i) => {
					return (
						<div className="child_container" key={i}>
							{child}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Carousel
