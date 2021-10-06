import { useEffect } from 'react'

import { useApp } from 'contexts/app'
import { Section } from 'components/layout/section'

import { H1, P } from 'components/text'
import ScrollTo from 'components/ScrollTo'
import { CONTACT_EMAIL, CONTACT_PHONE } from 'structuredData'

const Page = (): JSX.Element => {
	const { setPageTitle } = useApp()

	useEffect(() => {
		if (setPageTitle) setPageTitle('kontakt oss')
	})

	return (
		<Section style={{ textAlign: 'center' }}>
			<H1>kontakt oss</H1>
			<P style={{ fontWeight: 500, marginBottom: '2em' }}>
				<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
			</P>
			<P>
				<a href={`tel:${CONTACT_PHONE}`}>
					{CONTACT_PHONE.replace(/(\+\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g, '$1 $2 $3 $4 $5')}
				</a>
			</P>

			<P>
				<ScrollTo bottom>Besøk oss ↓</ScrollTo>
			</P>
		</Section>
	)
}

export default Page
