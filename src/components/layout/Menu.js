import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from 'next/link'

import SoMeLinks from 'components/SoMeLinks'
import { Book } from 'components/buttons/'
import { useApp } from 'contexts/app'

import { Section } from 'components/layout/section'

const Wrapper = styled(Section)`
	color: ${(props) => props.theme.colors.white};
	display: grid;
	grid-row-gap: 2rem;
	grid-template-columns: 1fr;
	margin: auto;

	@media (min-width: 768px) {
		grid-row-gap: 4rem;
		grid-template-columns: 1fr 1fr;
	}
`

const Nav = styled.nav`
	font-size: 2rem;
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
	order: 2;
	text-align: center;

	p {
		margin-bottom: 2rem;
	}

	@media (min-width: 768px) {
		order: unset;
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
