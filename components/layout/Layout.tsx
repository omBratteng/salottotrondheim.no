import styled from 'styled-components'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

import useAnalytics from 'hooks/useAnalytics'

const Main = styled.main`
	display: grid;
	flex: 1;
	grid-template-columns: 1fr min(920px, 100%) 1fr;
	padding-bottom: 4rem;
`

interface Props {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
	useAnalytics({
		domainId: '90ff8e7a-5d58-4151-9a8a-0ffa5d772195',
		server: 'https://analytics.bratteng.cloud',
		options: {
			detailed: true,
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
