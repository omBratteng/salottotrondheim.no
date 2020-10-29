import { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { hideVisually } from 'polished'

import Link from 'next/link'

import LogoSVG from 'assets/logo.svg'
import ToggleMenu from 'components/buttons/ToggleMenu'
import { useApp } from 'contexts/app'
import Menu from 'components/layout/Menu'

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

const Portal = styled.div`
	background-color: rgba(0, 0, 0, 0.97);
	display: grid;
	grid-template-columns: 1fr min(920px, 100%) 1fr;
	height: ${(props) => (props.menuOpen ? '100%' : '0%')};
	left: 0;
	overflow-y: hidden;
	position: fixed;
	top: 0;
	transition: ease-in-out 0.5s;
	width: 100%;
	z-index: 9999;
`

const Header = () => {
	const { menuOpen, setMenuOpen, modalOpen } = useApp()

	const closeMenu = useCallback(
		() => setMenuOpen((prevState) => !prevState),
		[setMenuOpen],
	)

	const onKeydown = useCallback(
		(event) => {
			if (modalOpen) return
			if (event.key === 'Escape') closeMenu()
		},
		[closeMenu, modalOpen],
	)

	useEffect(() => {
		window.addEventListener('keydown', onKeydown)

		return () => {
			window.removeEventListener('keydown', onKeydown)
		}
	}, [menuOpen, onKeydown])

	return (
		<>
			<StyledHeader role="banner">
				<Link href="/" passHref>
					<Logo>
						<span>Salotto</span>
						<LogoSVG />
					</Logo>
				</Link>

				{!modalOpen && <ToggleMenu tabIndex="1" />}
				<Portal menuOpen={menuOpen}>
					<Menu />
				</Portal>
			</StyledHeader>
		</>
	)
}

export default Header
