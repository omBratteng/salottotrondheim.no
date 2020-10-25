import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import process from 'process'
import { parse as URLParse } from 'url'

const googleFonts = (fonts) =>
	`https://fonts.googleapis.com/css2?family=${fonts}&display=swap`

const devLinks = []

const prodLinks = [
	{
		href: 'https://cdn.bratteng.sh',
	},
]
const globalLinks = [
	{
		href: 'https://use.typekit.net/qyu1pry.js',
		as: 'script',
	},
	{
		href: googleFonts('Rozha+One'),
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
