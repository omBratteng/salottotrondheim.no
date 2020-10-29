import styled from 'styled-components'

import { Section } from 'components/layout/section'
import SoMeLinks from 'components/SoMeLinks'
import { H4 } from 'components/text'
import ScrollTo from 'components/ScrollTo'

import { CONTACT_EMAIL, CONTACT_PHONE, ADDRESS } from 'structuredData'

const Wrapper = styled(Section)`
	display: flex;
	flex-direction: column;
	margin-bottom: 3rem;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`

const Div = styled.div`
	flex: 1;
`

const Open = styled.div`
	display: grid;
	grid-template-columns: 8ch 1fr;
	padding: 1rem;

	span {
		line-height: 1.5;
	}
`

const Information = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	p {
		border-bottom: 1px dashed #373636;
		padding: 1rem;

		&:nth-last-child(-n + 2) {
			border-bottom: 0;
		}
	}

	@media (min-width: 425px) {
		grid-template-columns: max(96px) 1fr;
	}
`

const ContactUs = () => {
	const { streetAddress, postalCode, addressLocality } = ADDRESS
	return (
		<Wrapper>
			<Div>
				<H4>Kontakt</H4>

				<Information>
					<p>
						<strong>besøk</strong>
					</p>
					<p>
						<ScrollTo bottom itemProp="address">
							{`${streetAddress}, ${postalCode} ${addressLocality}`.toLowerCase()}
						</ScrollTo>
					</p>
					<p>
						<strong>ring</strong>
					</p>
					<p>
						<a href={`tel:${CONTACT_PHONE}`}>
							{CONTACT_PHONE.replace(
								/(\+\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g,
								'$1 $2 $3 $4 $5',
							)}
						</a>
					</p>
					<p>
						<strong>skriv</strong>
					</p>
					<p>
						<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
					</p>
					<p>
						<strong>åpent</strong>
					</p>
					<Open>
						<span>mandag</span>
						<span>10:00 - 18:00</span>
						<span>tirsdag</span>
						<span>10:00 - 18:00</span>
						<span>onsdag</span>
						<span>10:00 - 18:00</span>
						<span>torsdag</span>
						<span>10:00 - 19:00</span>
						<span>fredag</span>
						<span>10:00 - 18:00</span>
						<span>lørdag</span>
						<span>10:00 - 16:00</span>
						<span>søndag</span>
						<span>stengt</span>
					</Open>
				</Information>
			</Div>

			<Div>
				<H4>Følg oss</H4>
				<SoMeLinks />
			</Div>
		</Wrapper>
	)
}

export default ContactUs
