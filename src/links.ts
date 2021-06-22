import process from 'process'
import getConfig from 'next/config'

type Links = (string | { href: string; as?: string; type?: string })[]

const { publicRuntimeConfig } = getConfig()
const { assetPrefix } = publicRuntimeConfig

const devLinks: Links = []

const prodLinks: Links = [assetPrefix, 'https://stamen-tiles.freetls.fastly.net', 'https://qckm.io']
const globalLinks: Links = [
	{
		href: `${assetPrefix}/assets/fonts/roboto-aa15f90aa29a18c813f9f34597b779f01222af95.woff2`,
		as: 'font',
		type: 'font/woff2',
	},
	{
		href: `${assetPrefix}/assets/fonts/roboto-8370d7348c62e9e25631cb33454da110fa57afd0.woff2`,
		as: 'font',
		type: 'font/woff2',
	},
	{
		href: `${assetPrefix}/assets/fonts/roboto-e55fb552fb1e9cf4a64979459c04857d19daaef6.woff2`,
		as: 'font',
		type: 'font/woff2',
	},
]

const links: Links = [...(process.env.NODE_ENV === 'development' ? devLinks : prodLinks), ...globalLinks]

export default links
