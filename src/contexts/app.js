import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from 'styles'
import BookingFrame from 'components/BookingFrame'

const AppContext = createContext(undefined)

const useApp = () => {
	const context = useContext(AppContext)

	if (context === undefined) {
		throw new Error('useContext must be used within a AppProvider')
	}

	return context
}

const AppProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<AppContext.Provider
			value={{ menuOpen, setMenuOpen, modalOpen, setModalOpen }}
		>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
				{modalOpen && <BookingFrame />}
			</ThemeProvider>
		</AppContext.Provider>
	)
}

AppProvider.propTypes = {
	children: PropTypes.node,
}

export default AppProvider
export { useApp }
