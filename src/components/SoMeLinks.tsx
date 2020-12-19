import styled from 'styled-components'

import { SoMeLink } from 'components/buttons/'

const Div = styled.div`
	text-align: center;
`

import Facebook from 'assets/icons/facebook.svg'
import Instagram from 'assets/icons/instagram.svg'

const SoMeLinks = (): JSX.Element => (
	<Div>
		<SoMeLink
			href="https://www.facebook.com/salottotrondheim.no/"
			title="Salotto på Facebook"
		>
			<Facebook className="svg-inline--fa fa-fw" />
		</SoMeLink>

		<SoMeLink
			href="https://www.instagram.com/salottotrondheim/"
			title="Salotto på Instagram"
		>
			<Instagram className="svg-inline--fa fa-fw" />
		</SoMeLink>
	</Div>
)

export default SoMeLinks
