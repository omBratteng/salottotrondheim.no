import process from 'process'
import getConfig from 'next/config'

type Links = (string | { href: string; as?: string; type?: string })[]

const { publicRuntimeConfig } = getConfig()
const { assetPrefix } = publicRuntimeConfig

const devLinks: Links = []

const prodLinks: Links = [
	assetPrefix,
	'https://stamen-tiles.freetls.fastly.net',
]
const globalLinks: Links = [
	{
		href: `${assetPrefix}/assets/fonts/rozhaone/rozha-one-v8-latin-regular.woff2`,
		as: 'font',
		type: 'font/woff2',
	},
	{
		href: `${assetPrefix}/assets/fonts/roboto/roboto-v20-latin-300.woff2`,
		as: 'font',
		type: 'font/woff2',
	},
	{
		href: `${assetPrefix}/assets/fonts/roboto/roboto-v20-latin-300italic.woff2`,
		as: 'font',
		type: 'font/woff2',
	},
	{
		href: `${assetPrefix}/assets/fonts/roboto/roboto-v20-latin-500.woff2`,
		as: 'font',
		type: 'font/woff2',
	},
]

const links: Links = [
	...(process.env.NODE_ENV === 'development' ? devLinks : prodLinks),
	...globalLinks,
]

export default links
