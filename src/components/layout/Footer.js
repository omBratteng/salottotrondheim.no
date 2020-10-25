import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import { Copyright, ContactUs, Maps } from './footer/'

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
	return (
		<StyledFooter>
			<ContactUs />
			<Maps />
			<Copyright>
				<p>
					&copy; 2020 Salotto |{' '}
					<Link href="/personvernerklaering">
						Personvernerklæring
					</Link>
				</p>
			</Copyright>
		</StyledFooter>
	)
}

export default Footer
