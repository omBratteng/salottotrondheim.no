import process from 'process'
import getConfig from 'next/config'
import { googleFonts } from 'utils/'

type Links = (string | { href: string; as?: string })[]

const { publicRuntimeConfig } = getConfig()
const { assetPrefix } = publicRuntimeConfig

const devLinks: Links = []

const prodLinks: Links = [
	assetPrefix,
	'https://stamen-tiles.freetls.fastly.net',
]
const globalLinks: Links = []

const links: Links = [
	...(process.env.NODE_ENV === 'development' ? devLinks : prodLinks),
	...globalLinks,
]

export default links
