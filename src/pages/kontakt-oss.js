import { useEffect } from 'react'

import { useLayout } from 'components/layout/Layout'
import { Section } from 'components/layout/section'

import { H1, H3, P } from 'components/text'
import ScrollTo from 'components/ScrollTo'

const Index = () => {
	const { setPageTitle } = useLayout()

	useEffect(() => {
		setPageTitle('kontakt oss')
	})

	return (
		<Section style={{ textAlign: 'center' }}>
			<H1>kontakt oss</H1>
			<H3>
				<a href="mailto:ciao@salottotrondheim.no">
					ciao@salottotrondheim.no
				</a>
			</H3>
			<P>
				<a href="tel:+4773505051">+47 73 50 50 51</a>
			</P>

			<P>
				<ScrollTo bottom>Besøk oss ↓</ScrollTo>
			</P>
		</Section>
	)
}

export default Index
