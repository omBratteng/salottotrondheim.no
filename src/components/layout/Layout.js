import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

const Main = styled.main`
	display: grid;
	flex: 1;
	grid-template-columns: 1fr min(920px, 100%) 1fr;
	padding-bottom: 4rem;
`

const Layout = ({ children }) => (
	<>
		<Header />
		<Main>{children}</Main>
		<Footer />
	</>
)

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout
