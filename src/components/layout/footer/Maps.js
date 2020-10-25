import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

import mapTheme from './mapTheme.json'

const Wrapper = styled.section`
	grid-column: 1 / 4;
	height: 600px;
	width: 100%;
`

const Maps = () => {
	const renderMarkers = (map, maps) => {
		new maps.Marker({
			position: {
				lat: 63.43210315034183,
				lng: 10.39570885089437,
			},
			map,
			title: 'Salotto Trondheim',
		})
	}

	return (
		<Wrapper>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyAeOzDaPTr-YPQALM9MRPXbIis10E9aj6M',
				}}
				defaultCenter={{
					lat: 63.43210315034183,
					lng: 10.39570885089437,
				}}
				defaultZoom={15}
				yesIWantToUseGoogleMapApiInternals
				options={{
					styles: mapTheme,
				}}
				onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
			></GoogleMapReact>
		</Wrapper>
	)
}

export default Maps
