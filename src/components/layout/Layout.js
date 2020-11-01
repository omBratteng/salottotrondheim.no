import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Main = styled.main`
	display: grid;
	flex: 1;
	grid-template-columns: 1fr min(920px, 100%) 1fr;
	padding-bottom: 4rem;
`

const Layout = ({ children }) => (
	<StyledLayout>
		<Header />
		<Main>{children}</Main>
		<Footer />
	</StyledLayout>
)

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout
