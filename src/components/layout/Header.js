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

	display: grid;
	grid-template-columns: 1fr min(920px, 100%) 1fr;
	height: var(--header-height);

	> div {
		display: flex;
		grid-column: 1 / -1;
		justify-content: space-between;
		margin-left: auto;
		margin-right: auto;
		max-width: 1600px;
		padding: 0 1.5rem;
		width: 100%;
	}
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
	z-index: 99;
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
				<div>
					<Link href="/" passHref>
						<Logo>
							<span>Salotto</span>
							<LogoSVG />
						</Logo>
					</Link>

					{!modalOpen && <ToggleMenu tabIndex="1" />}
				</div>
			</StyledHeader>
			<Portal menuOpen={menuOpen}>
				<Menu />
			</Portal>
		</>
	)
}

export default Header
