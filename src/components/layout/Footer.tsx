import { useEffect } from 'react'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'

import Link from 'next/link'

import { Section } from 'components/layout/section'
import { ContactUs } from './footer/'
import ScrollTo from 'components/ScrollTo'
import { P } from 'components/text'
import STRUCTURED_DATA from 'structuredData'

const StyledFooter = styled.footer`
	background-color: ${(props) => props.theme.colors.black};
	color: ${(props) => props.theme.colors.white};
	display: grid;
	grid-template-columns: 1fr min(920px, 100%) 1fr;
	position: relative;
	z-index: 0;

	a {
		color: inherit;
	}

	.leaflet-bar a,
	.leaflet-bar a:hover {
		color: #000;
	}
`

const Bottom = styled(Section)`
	align-items: center;
	display: flex;
	height: 6rem;
	justify-content: space-between;

	${P} {
		margin-bottom: 0;
		margin-right: 1rem;
	}

	@media (min-width: 768px) {
		height: 4rem;
	}
`

const Footer = (): JSX.Element => {
	const { geo } = STRUCTURED_DATA

	const { inView } = useInView({
		rootMargin: '340px',
		threshold: 0,
		triggerOnce: true,
	})

	useEffect(() => {
		inView && setMap(<Map position={[geo.latitude, geo.longitude]} />)
	}, [geo.latitude, geo.longitude, inView])

	return (
		<StyledFooter>
			<ContactUs />
			<Bottom aria-label="opphavsrett og lenke til personvernerklæring">
				<P>
					<span>&copy; {new Date().getFullYear()} Salotto | </span>
					<Link href="/personvernerklaering" prefetch={false}>
						Personvernerklæring
					</Link>
				</P>
				<ScrollTo>&uarr; til toppen</ScrollTo>
			</Bottom>
		</StyledFooter>
	)
}

export default Footer
