/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const isProd =
	process.env.NODE_ENV === 'production' && process.env.APP_ENV !== 'staging'

const assetPrefix = isProd ? 'https://cdn.salottotrondheim.no' : ''

const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	assetPrefix,
	devIndicators: false,
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200, 1400],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: ['@svgr/webpack'],
		})

		return config
	},
	async headers() {
		return [
			{
				source: '/assets/js/leaflet/leaflet.min.css',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=2628000',
					},
				],
			},
			{
				source: '/assets/fonts/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=7884000',
					},
				],
			},
		]
	},
	publicRuntimeConfig: {
		assetPrefix,
		sendMetrics: process.env.NEXT_PUBLIC_SEND_METRICS,
		quickMetricsAPIKey: process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY,
	},
}

module.exports = withPlugins([], nextConfig)
