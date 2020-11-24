import type { LatLngExpression } from 'leaflet'

import { useState, useEffect } from 'react'

import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import Head from 'next/head'

interface Props {
	render?: boolean
	zoom?: number
	position: LatLngExpression
}
const Map = ({ render = false, position, zoom = 16 }: Props): JSX.Element => {
	const [show, setShow] = useState(true)

	useEffect(() => {
		setShow(render)
	}, [render])

	return (
		<>
			{show && (
				<>
					<Head>
						<link
							rel="preload"
							href="https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.css"
							integrity="sha256-BPfK9M5v34c2XP6p0cxVz1mUQLst0gTLk0mlc7kuodA="
							crossOrigin="anonymous"
							as="style"
						/>
						<link
							rel="stylesheet"
							href="https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.css"
							integrity="sha256-BPfK9M5v34c2XP6p0cxVz1mUQLst0gTLk0mlc7kuodA="
							crossOrigin="anonymous"
						/>
					</Head>
					<MapContainer
						center={position}
						zoom={zoom}
						style={{ height: 600 }}
					>
						<TileLayer
							url="https://stamen-tiles.freetls.fastly.net/toner/{z}/{x}/{y}.png"
							attribution='Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						/>
						<Marker
							position={position}
							icon={
								new Icon({
									iconUrl: '/assets/pin.svg',
									iconRetinaUrl: '/assets/pin.svg',
									iconAnchor: [12, 47],
									iconSize: [28.656, 50],
								})
							}
						/>
					</MapContainer>
				</>
			)}
		</>
	)
}

export default Map
