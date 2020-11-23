import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import process from 'process'
import { parse as URLParse } from 'url'

const googleFonts = (fonts, text = false) => {
	let url = `https://fonts.googleapis.com/css2?family=${fonts}&display=swap`
	if (text) {
		text = text
			.split('')
			.filter(function (item, pos, self) {
				return self.indexOf(item) == pos
			})
			.join('')
		url += `&text=${encodeURIComponent(text)}`
	}

	return url
}

const devLinks = [
	{
		href: googleFonts(
			'Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900',
		),
		as: 'style',
	},
]

const prodLinks = [
	{
		href: 'https://cdn.salottotrondheim.no',
	},
	{
		href: 'https://cdn.jsdelivr.net',
	},
	{
		href: 'https://stamen-tiles.freetls.fastly.net',
	},
	{
		href: googleFonts('Roboto:ital,wght@0,300;0,500;1,300;1,500'),
		as: 'style',
	},
]
const globalLinks = [
	{
		href: googleFonts('Rozha+One', 'bestill time'),
		as: 'style',
	},
	{
		href: 'https://cdn.bratteng.cloud',
	},
]

const isDev = process.env.NODE_ENV === 'development'
const links = [...(isDev ? devLinks : prodLinks), ...globalLinks]

class Doc extends Document {
	static async getInitialProps(context) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = context.renderPage

		try {
			context.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(
							<StyleSheetManager disableVendorPrefixes={isDev}>
								<App {...props} />
							</StyleSheetManager>,
						),
				})

			const initialProps = await Document.getInitialProps(context)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang="no">
				<Head>
					<PreloadStyles links={links} />
				</Head>
				<body>
					<Main />
					<div id="booking" />
					<NextScript />
				</body>
			</Html>
		)
	}
}

const PreConnect = ({ hrefs }) =>
	hrefs.map((href, key) => (
		<link rel="preconnect" href={href} key={key} crossOrigin="anonymous" />
	))

const PreloadStyles = ({ links }) => {
	let preconnect = new Set()
	let preload = new Set()
	let stylesheet = new Set()
	let scripts = new Set()

	links.map((linkProps) => {
		let url = new URLParse(linkProps.href)

		const { as, integrity, autoload = true } = linkProps

		preconnect.add(`${url.protocol}//${url.host}`)

		if (url.pathname !== '/') {
			preload.add(
				<link
					rel="preload"
					as={as}
					href={linkProps.href}
					crossOrigin="anonymous"
					integrity={integrity}
				/>,
			)

			if (!autoload) return

			as === 'style'
				? stylesheet.add(
						<link
							rel="stylesheet"
							href={linkProps.href}
							crossOrigin="anonymous"
						/>,
				  )
				: scripts.add(
						<script
							src={linkProps.href}
							crossOrigin="anonymous"
							async
						/>,
				  )
		}
	})

	return [
		<PreConnect hrefs={[...preconnect]} key="0" />,
		...preload,
		...stylesheet,
		...scripts,
	]
}

export default Doc
