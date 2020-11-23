import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

// Next.js
import Head from 'next/head'

import { GlobalStyle, theme } from 'styles/index'
import BookingFrame from 'components/BookingFrame'

const AppContext = createContext(undefined)
const useApp = () => {
	const context = useContext(AppContext)

	if (context === undefined) {
		throw new Error('useContext must be used within a AppProvider')
	}

	return context
}

const AppProvider = ({ siteTitle, children }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)

	const [pageTitle, setPageTitle] = useState(undefined)
	const [title, setTitle] = useState(siteTitle)

	useEffect(() => {
		setTitle(pageTitle ? `${siteTitle} – ${pageTitle}` : siteTitle)
	}, [pageTitle, siteTitle])

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="title" content={siteTitle} />
				<meta property="og:title" content={siteTitle} />
				<meta property="twitter:title" content={siteTitle} />
			</Head>
			<AppContext.Provider
				value={{
					menuOpen,
					setMenuOpen,
					modalOpen,
					setModalOpen,
					pageTitle,
					setPageTitle,
				}}
			>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					{children}
					{modalOpen && <BookingFrame />}
				</ThemeProvider>
			</AppContext.Provider>
		</>
	)
}

AppProvider.propTypes = {
	children: PropTypes.node,
	siteTitle: PropTypes.string,
}

AppProvider.defaultProps = {
	siteTitle: '',
}

export default AppProvider
export { useApp }
