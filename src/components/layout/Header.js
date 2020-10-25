import React from 'react'
import styled from 'styled-components'
import { hideVisually } from 'polished'

import Link from 'next/link'

import LogoSVG from 'assets/logo.svg'
import ToggleMenu from 'components/buttons/ToggleMenu'

const StyledHeader = styled.header`
	--header-height: 80px;

	display: flex;
	height: var(--header-height);
	justify-content: space-between;
	padding: 0 45px;
`

const Logo = styled.a`
	align-items: center;
	display: flex;

	span {
		${hideVisually()}
	}

	svg {
		width: 120px;
	}
`

const Header = () => {
	return (
		<StyledHeader role="banner">
			<Link href="/" passHref>
				<Logo>
					<span>Salotto</span>
					<LogoSVG />
				</Logo>
			</Link>

			<ToggleMenu tabIndex="1" />
		</StyledHeader>
	)
}

export default Header
