import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from 'next/link'

import SoMeLinks from 'components/SoMeLinks'
import Book from 'components/buttons/Book'
import { useApp } from 'contexts/app'

const Wrapper = styled.div`
	align-items: center;
	color: ${(props) => props.theme.colors.white};
	display: grid;
	grid-column: 2;
	grid-template-columns: 1fr;
	height: 50%;
	margin: auto 0;

	@media (min-width: 900px) {
		grid-template-columns: 1fr 1fr;
	}
`

const Nav = styled.nav`
	font-size: 2.25rem;
	line-height: 1.5;
	text-align: center;

	a {
		color: inherit;
		display: block;
		text-decoration: none;
	}
`

const FollowUs = styled.div`
	font-size: 1.5rem;
	text-align: center;

	p {
		margin-bottom: 2rem;
	}
`

const NavLink = ({ title, ...props }) => {
	const { setMenuOpen } = useApp()

	return (
		<Link {...props} passHref>
			<a onClick={() => setMenuOpen((prevState) => !prevState)}>
				{title}
			</a>
		</Link>
	)
}

NavLink.propTypes = {
	title: PropTypes.string,
}

const Menu = () => {
	return (
		<Wrapper>
			<Nav>
				<NavLink href="/" title="forsiden" />
				<NavLink href="/om-oss" title="om oss" />
				<NavLink href="/kontakt-oss" title="kontakt oss" />
			</Nav>
			<FollowUs>
				<p>følg oss</p>
				<SoMeLinks />
			</FollowUs>
			<Book dark={false} />
		</Wrapper>
	)
}

export default Menu
