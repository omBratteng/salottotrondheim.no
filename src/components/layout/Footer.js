import Link from 'next/link'
import styled from 'styled-components'

import { useInView } from 'react-intersection-observer'
import { Section } from 'components/layout/section'
import { ContactUs } from './footer/'
import dynamic from 'next/dynamic'
import ScrollTo from 'components/ScrollTo'
import { P } from 'components/text'

const Map = dynamic(() => import('components/Map'), {
	ssr: false,
})

const StyledFooter = styled.footer`
	background-color: ${(props) => props.theme.colors.black};
	color: ${(props) => props.theme.colors.white};
	display: grid;
	grid-template-columns: 1fr min(920px, 100%) 1fr;
	z-index: 0;

	a {
		color: inherit;
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

const Footer = () => {
	const { ref, inView } = useInView({
		rootMargin: '340px',
		threshold: 0,
		triggerOnce: true,
	})

	return (
		<StyledFooter>
			<ContactUs />
			<Section type="wide" ref={ref}>
				<Map
					position={[63.43210315034183, 10.39570885089437]}
					render={inView}
				/>
			</Section>
			<Bottom>
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
