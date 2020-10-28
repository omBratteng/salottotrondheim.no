import Link from 'next/link'
import styled from 'styled-components'

import { ContactUs, Maps } from './footer/'

const StyledFooter = styled.footer`
	background-color: ${(props) => props.theme.colors.black};
	color: ${(props) => props.theme.colors.white};
	display: grid;
	grid-template-columns: 1fr min(920px, 100%) 1fr;

	a {
		color: inherit;
	}
`

const Copyright = styled.section`
	grid-column: 1 / 4;
	padding: 1.5rem 45px;
	width: 100%;
`

const Footer = () => {
	return (
		<StyledFooter>
			<ContactUs />
			<Maps />
			<Copyright>
				<p>
					&copy; {new Date().getFullYear()} Salotto |{' '}
					<Link href="/personvernerklaering" prefetch={false}>
						Personvernerklæring
					</Link>
				</p>
			</Copyright>
		</StyledFooter>
	)
}

export default Footer
