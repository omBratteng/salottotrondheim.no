/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

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
	publicRuntimeConfig: {
		assetPrefix
	}
}

module.exports = withPlugins([], nextConfig)
