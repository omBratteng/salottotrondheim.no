import React from 'react'
import PropTypes from 'prop-types'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faInstagram)

// import { fad } from '@fortawesome/pro-duotone-svg-icons'
// import { fal } from '@fortawesome/pro-light-svg-icons'
import { faBars } from '@fortawesome/pro-solid-svg-icons'
// import { far } from '@fortawesome/pro-regular-svg-icons'
library.add(faBars)

// Next.js
import Head from 'next/head'

// Context
import AppProvider from 'contexts/app'

// Components
import Layout from 'components/layout/Layout'

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<link rel="icon" type="image/png" href="/favicon.png" />

				<meta property="og:title" content="Salotto" />
				<meta
					property="og:description"
					content="GI HODET EN AVKOBLING."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://salottotrondheim.no/"
				/>
				<meta property="og:image" content="/assets/img/og.jpg" />
			</Head>
			<AppProvider>
				<Layout siteTitle="Salotto">
					<Component {...pageProps} />
				</Layout>
			</AppProvider>
		</>
	)
}

App.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
}

export default App
