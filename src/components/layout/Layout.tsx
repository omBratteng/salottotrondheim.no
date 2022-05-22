import type { ReactNode } from 'react'
import styled from '@emotion/styled'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

import useAnalytics from 'hooks/useAnalytics'

const Main = styled.main`
	display: grid;
	flex: 1;
	grid-template-columns: 1fr min(920px, 100%) 1fr;
	padding-bottom: 4rem;
`

type Props = {
	children: ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
	useAnalytics({
		domainId: 'f374ffdb-fc4c-497c-9a28-50ae5c9b769e',
		server: 'https://analytics.bratteng.cloud',
		options: {
			detailed: true,
			ignoreLocalhost: true,
		},
	})

	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	)
}

export default Layout
