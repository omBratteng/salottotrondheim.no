/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const isProd = process.env.NODE_ENV === 'production' && process.env.APP_ENV !== 'staging'

const CDN = 'https://cdn.salottotrondheim.no'
const assetPrefix = isProd ? CDN : ''

const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	assetPrefix,
	devIndicators: false,
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200, 1400],
		domains: [new URL(CDN).hostname],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
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
						value: 'public, max-age=15552000',
					},
				],
			},
			{
				source: '/assets/employees/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=15552000',
					},
				],
			},
			{
				source: '/assets/img/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=15552000',
					},
				],
			},
		]
	},
	publicRuntimeConfig: {
		assetPrefix,
		quickMetricsAPIKey: process.env.NEXT_PUBLIC_QUICK_METRICS_API_KEY,
	},
}

module.exports = withPlugins([], nextConfig)
