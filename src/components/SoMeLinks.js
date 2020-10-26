import styled from 'styled-components'

import SoMeLink from 'components/buttons/SoMeLink'

const Div = styled.div`
	text-align: center;
`

const SoMeLinks = () => (
	<Div>
		<SoMeLink
			href="https://www.facebook.com/salottotrondheim.no/"
			alt="Salotto på Facebook"
			icon="facebook-f"
		/>

		<SoMeLink
			href="https://www.instagram.com/salottotrondheim/"
			alt="Salotto på Instagram"
			icon="instagram"
		/>
	</Div>
)

export default SoMeLinks
