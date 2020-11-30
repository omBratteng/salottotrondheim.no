import type { AppProps, NextWebVitalsMetric } from 'next/app'
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

import structuredData, {
	PAGE_URL,
	PAGE_DESC,
	OG_IMAGE,
	OG_ALT,
} from 'structuredData'

import { preload } from 'utils'
import links from 'links'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta name="apple-mobile-web-app-capable" content="yes" />

				{preload({ links })}

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
		</>
	)
}

const metrics: NextWebVitalsMetric[] = []
let isRequestIdleCallbackScheduled = false

const sendMetric = ({ name, value }: NextWebVitalsMetric): void => {
	if (process.env.NODE_ENV === 'production') return
	const url = `https://qckm.io?m=webVital.${name}&v=${value}&k=${process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY}`

	// Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
	if ('sendBeacon' in navigator) {
		navigator.sendBeacon(url)
	} else {
		fetch(url, { method: 'POST', keepalive: true })
	}
}

const schedulePendingEvents = (): void => {
	if (isRequestIdleCallbackScheduled) return

	isRequestIdleCallbackScheduled = true

	if ('requestIdleCallback' in window) {
		// Wait at most two seconds before processing events.
		requestIdleCallback(processPendingAnalyticsEvents, {
			timeout: 2000,
		})
	} else {
		processPendingAnalyticsEvents()
	}
}

const processPendingAnalyticsEvents = (deadline?: IdleDeadline): void => {
	// Reset the boolean so future rICs can be set.
	isRequestIdleCallbackScheduled = false

	// If there is no deadline, just run as long as necessary.
	// This will be the case if requestIdleCallback doesn’t exist.
	if (typeof deadline === 'undefined')
		deadline = {
			timeRemaining: function () {
				return Number.MAX_VALUE
			},
			didTimeout: false,
		}

	// Go for as long as there is time remaining and work to do.
	while (deadline.timeRemaining() > 0 && metrics.length > 0) {
		const metric = metrics.pop()
		metric && sendMetric(metric)
	}

	// Check if there are more events still to send.
	if (metrics.length > 0) schedulePendingEvents()
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
	if (process.env.NEXT_PUBLIC_SEND_METRICS !== 'true') return
	switch (metric.name) {
		case 'LCP': // Largest Contentful Paint
		case 'FID': // First Input Delay
		case 'CLS': // Cumulative Layout Shift
		case 'FCP': // First Contentful Paint
		case 'TTFB': // Time to First Byte
			metrics.push(metric)
			// prepareMetrics(metric)
			break
		default:
			break
	}

	schedulePendingEvents()
}

export default App
