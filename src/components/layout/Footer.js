import Link from 'next/link'
import styled from 'styled-components'

import { useInView } from 'react-intersection-observer'
import { Section } from 'components/layout/section'
import { ContactUs } from './footer/'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), {
	ssr: false,
})

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
