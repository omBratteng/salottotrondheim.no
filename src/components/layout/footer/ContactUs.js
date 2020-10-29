import styled from 'styled-components'

import { Section } from 'components/layout/section'
import SoMeLinks from 'components/SoMeLinks'
import { scrollToBottom } from 'scrollTo'
import { H4 } from 'components/text'

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

		&.timeTable span {
			@media (max-width: 374px) {
				display: none;
			}
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
			<Div>
				<H4>Kontakt</H4>

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
							<td>ring</td>
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
						<tr className="timeTable">
							<td>åpent</td>
							<td>
								<p>
									man<span>dag</span> - fre<span>dag</span>{' '}
									10:00 - 18:00
								</p>
								<p>
									tors<span>dag</span> 10:00 - 19:00
								</p>
								<p>
									lør<span>dag</span> 10:00 - 16:00
								</p>
							</td>
						</tr>
					</tbody>
				</Table>
			</Div>

			<Div>
				<H4>Følg oss</H4>
				<SoMeLinks />
			</Div>
		</Wrapper>
	)
}

export default ContactUs
