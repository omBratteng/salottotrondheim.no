import type { AppProps as NextAppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'

// Context
import AppProvider from 'contexts/app'

// Components
import Layout from 'components/layout/Layout'
import { createEmotionCache } from 'utils'

import structuredData, { PAGE_URL, PAGE_DESC, OG_IMAGE, OG_ALT } from 'structuredData'

type AppProps = NextAppProps & {
	emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps): JSX.Element => {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta name="apple-mobile-web-app-capable" content="yes" />

				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#231f20" />
				<meta name="msapplication-TileColor" content="#231f20" />
				<meta name="theme-color" content="#231f20" />

				{/* Primary Meta Tags */}
				<meta name="description" content={PAGE_DESC} />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={PAGE_URL} />
				<meta property="og:description" content={PAGE_DESC} />
				<meta property="og:image" content={OG_IMAGE} />
				<meta property="og:image:alt" content={OG_ALT} />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={PAGE_URL} />
				<meta property="twitter:description" content={PAGE_DESC} />
				<meta property="twitter:image" content={OG_IMAGE} />
				<meta property="twitter:image:alt" content={OG_ALT} />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData),
					}}
				/>
			</Head>
			<AppProvider siteTitle="Salotto">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AppProvider>
		</CacheProvider>
	)
}

export default App
