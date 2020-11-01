import { useState, useEffect } from 'react'

const useWindowWidth = () => {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowWidth, setWindowWidth] = useState(undefined)

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth)

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return windowWidth
}

export default useWindowWidth
