import process from 'process'
import { googleFonts } from 'utils/'

const devLinks = [
	googleFonts(
		'Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900',
	),
]

const prodLinks = [
	'https://cdn.salottotrondheim.no',
	'https://stamen-tiles.freetls.fastly.net',
	googleFonts('Roboto:ital,wght@0,300;0,500;1,300;1,500'),
]
const globalLinks = [googleFonts('Rozha+One', 'bestill time')]

const links = [
	...(process.env.NODE_ENV === 'development' ? devLinks : prodLinks),
	...globalLinks,
]

export default links
