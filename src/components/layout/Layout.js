import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Next.js
import Head from 'next/head'

import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import BookingFrame from 'components/BookingFrame'

import { useApp } from 'contexts/app'

const LayoutContext = createContext(undefined)
const useLayout = () => {
	const context = useContext(LayoutContext)

	if (context === undefined) {
		throw new Error('useContext must be used within a LayoutContext')
	}

	return context
}

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

const Layout = ({ siteTitle, children }) => {
	const [pageTitle, setPageTitle] = useState(undefined)
	const [title, setTitle] = useState(siteTitle)

	const { modalOpen } = useApp()

	useEffect(() => {
		setTitle(pageTitle ? `${siteTitle} – ${pageTitle}` : siteTitle)
	}, [pageTitle, siteTitle])

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<LayoutContext.Provider value={{ pageTitle, setPageTitle }}>
				<StyledLayout>
					<Header />
					<Main>{children}</Main>
					<Footer />
					{modalOpen && <BookingFrame />}
				</StyledLayout>
			</LayoutContext.Provider>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node,
	siteTitle: PropTypes.string,
}

Layout.defaultProps = {
	siteTitle: '',
}

export default Layout
export { useLayout }
