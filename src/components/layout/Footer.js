import Link from 'next/link'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

import { Section } from 'components/layout/section'
import { ContactUs } from './footer/'

import mapTheme from 'mapTheme.json'

const Copyright = styled.p`
	padding: 1.5rem 0;
`

const StyledFooter = styled.footer`
	background-color: ${(props) => props.theme.colors.black};
	color: ${(props) => props.theme.colors.white};
	display: grid;
	grid-template-columns: 1fr min(920px, 100%) 1fr;

	a {
		color: inherit;
	}
`

const Footer = () => {
	return (
		<StyledFooter>
			<ContactUs />
			<Section type="wide" style={{ height: 600 }}>
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
					onGoogleApiLoaded={({ map, maps }) => {
						new maps.Marker({
							position: {
								lat: 63.43210315034183,
								lng: 10.39570885089437,
							},
							map,
							title: 'Salotto Trondheim',
						})
					}}
				/>
			</Section>
			<Section>
				<Copyright>
					&copy; {new Date().getFullYear()} Salotto |{' '}
					<Link href="/personvernerklaering" prefetch={false}>
						Personvernerklæring
					</Link>
				</Copyright>
			</Section>
		</StyledFooter>
	)
}

export default Footer
