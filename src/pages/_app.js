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

const PAGE_URL = 'https://salottotrondheim.no/'
const PAGE_DESC = 'Gi hodet en avkobling.'
const OG_IMAGE = PAGE_URL + 'assets/img/og.jpg'

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

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#231f20"
				/>
				<meta name="msapplication-TileColor" content="#231f20" />
				<meta name="theme-color" content="#231f20" />

				{/* Primary Meta Tags */}
				<meta name="description" content={PAGE_DESC} />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={PAGE_URL} />
				<meta property="og:description" content={PAGE_DESC} />
				<meta property="og:image" content={OG_IMAGE} />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={PAGE_URL} />
				<meta property="twitter:description" content={PAGE_DESC} />
				<meta property="twitter:image" content={OG_IMAGE} />
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
