import styled from 'styled-components'

import SoMeLinks from 'components/SoMeLinks'
import { scrollToBottom } from 'scrollTo'

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	grid-column: 2;
	margin-bottom: 3rem;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`

const Section = styled.div`
	flex: 1;

	h3 {
		font-size: 1.25rem;
		letter-spacing: 1.5px;
		padding: 1em;
		text-align: center;
		text-transform: uppercase;
		width: 100%;
	}
`

const Table = styled.table`
	border-bottom: 1px dashed #373636;
	border-collapse: collapse;
	width: 100%;

	tr {
		border: 1px #373636;
		border-style: dashed none none none;

		&:hover {
			background-color: #111;
		}
	}

	td {
		line-height: 1.5em;
		padding: 1em;

		&:first-child {
			font-weight: 500;
		}
	}
`

const ContactUs = () => {
	return (
		<Wrapper>
			<Section>
				<h3>Kontakt</h3>

				<Table>
					<tbody>
						<tr>
							<td>besøk</td>
							<td>
								<a href="#" onClick={scrollToBottom}>
									dronningens gt. 26, 7011 trondheim
								</a>
							</td>
						</tr>
						<tr>
							<td>ring </td>
							<td>
								<a href="tel:+4773505051">+47 73 50 50 51</a>
							</td>
						</tr>
						<tr>
							<td>skriv</td>
							<td>
								<a href="mailto:ciao@salottotrondheim.no">
									ciao@salottotrondheim.no
								</a>
							</td>
						</tr>
						<tr>
							<td>åpent</td>
							<td>
								mandag - fredag 10:00 - 18:00 <br />
								torsdag 10:00 - 19:00 <br />
								lørdag 10:00 - 16:00
							</td>
						</tr>
					</tbody>
				</Table>
			</Section>

			<Section>
				<h3>Følg oss</h3>

				<SoMeLinks />
			</Section>
		</Wrapper>
	)
}

export default ContactUs
