import type { LatLngExpression } from 'leaflet'

import { useState, useEffect } from 'react'

import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import Head from 'next/head'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { assetPrefix } = publicRuntimeConfig

interface Props {
	render?: boolean
	zoom?: number
	position: LatLngExpression
}
const Map = ({ render = false, position, zoom = 16 }: Props): JSX.Element => {
	const [show, setShow] = useState(false)
	const href = `${assetPrefix}/assets/js/leaflet/leaflet.min.css`

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
							href={href}
							integrity="sha256-2VzX/spJuFIEL4PRC+T7DlbBvxXJSuXRCTXvxMqz7tk="
							crossOrigin="anonymous"
							as="style"
						/>
						<link
							rel="stylesheet"
							href={href}
							integrity="sha256-2VzX/spJuFIEL4PRC+T7DlbBvxXJSuXRCTXvxMqz7tk="
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
