import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	compiler: {
		emotion: true,
	},
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		loader: 'custom',
		deviceSizes: [320, 420, 768, 1024, 1200, 1400],
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
}

export default nextConfig
