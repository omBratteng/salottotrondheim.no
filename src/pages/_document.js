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

const devLinks = []

const prodLinks = [
	{
		href: 'https://cdn.salottotrondheim.no',
	},
	{
		href: 'https://www.google-analytics.com',
	},
]
const globalLinks = [
	{
		href: 'https://use.typekit.net/qyu1pry.js',
		as: 'script',
	},
	{
		href: googleFonts('Rozha+One', 'bestill time'),
		as: 'style',
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
					<script
						dangerouslySetInnerHTML={{
							__html: `try{Typekit.load({ async: true });}catch(e){console.log(e)}`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<div id="booking" />
					<NextScript />
					<script
						async
						dangerouslySetInnerHTML={
							!isDev
								? {
										__html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga("create", "UA-6139247-10", "auto");
ga("set", "anonymizeIp", true);
ga("send", "pageview");`,
								  }
								: {
										__html: `var ga = function () {}`,
								  }
						}
					/>
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
		let as = linkProps?.as

		preconnect.add(`${url.protocol}//${url.host}`)

		if (url.pathname !== '/') {
			preload.add(
				<link
					rel="preload"
					as={as}
					href={linkProps.href}
					crossOrigin="anonymous"
				/>,
			)

			as === 'style'
				? stylesheet.add(
						<link
							rel="stylesheet"
							href={linkProps.href}
							crossOrigin="anonymous"
						/>,
				  )
				: scripts.add(
						// eslint-disable-next-line @next/next/no-sync-scripts
						<script src={linkProps.href} crossOrigin="anonymous" />,
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
