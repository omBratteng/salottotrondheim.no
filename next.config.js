/* eslint-disable no-undef */

const withPlugins = require('next-compose-plugins')
const isProd =
	process.env.NODE_ENV === 'production' && process.env.APP_ENV !== 'staging'

const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	assetPrefix: isProd ? 'https://cdn.salottotrondheim.no' : '',
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
}

module.exports = withPlugins([], nextConfig)
