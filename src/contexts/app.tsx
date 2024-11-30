import { Dispatch, SetStateAction, type ReactElement } from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { Global, ThemeProvider } from '@emotion/react'

// Next.js
import Head from 'next/head'

import { appGlobalStyles, theme } from 'styles/index'
import BookingFrame from 'components/BookingFrame'

export type ContextProps = Partial<{
	menuOpen: boolean
	setMenuOpen: Dispatch<SetStateAction<boolean>>
	modalOpen: boolean
	setModalOpen: Dispatch<SetStateAction<boolean>>
	pageTitle: string
	setPageTitle: Dispatch<SetStateAction<string>>
}>

export const AppContext = createContext({})
export const useApp = (): ContextProps => {
	const context = useContext(AppContext)
	if (context === undefined) {
		throw new Error('useContext must be used within a AppProvider')
	}

	return context
}

interface IAppProvider {
	siteTitle: string
	children: ReactElement
}

const AppProvider = ({ siteTitle = '', children }: IAppProvider): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	const [pageTitle, setPageTitle] = useState<string>('')
	const [title, setTitle] = useState<string>(siteTitle)

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
					<>
						<Global styles={appGlobalStyles} />
						{children}
						{modalOpen && <BookingFrame />}
					</>
				</ThemeProvider>
			</AppContext.Provider>
		</>
	)
}

export default AppProvider
