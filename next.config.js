/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const isProd = process.env.NODE_ENV === 'production' && process.env.APP_ENV !== 'staging'

const CDN = 'https://cdn.salottotrondheim.no'
const assetPrefix = isProd ? CDN : ''

const nextConfig = {
	experimental: {
		emotion: true,
	},
	reactStrictMode: false,
	poweredByHeader: false,
	assetPrefix,
	devIndicators: false,
	images: {
		loader: 'custom',
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
		]
	},
	publicRuntimeConfig: {
		assetPrefix,
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
}

module.exports = withPlugins([withBundleAnalyzer], nextConfig)
