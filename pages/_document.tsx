import type { DocumentContext, DocumentInitialProps } from 'next/document'
import type { Url } from 'url'

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import process from 'process'
import { parse as URLParse } from 'url'

const googleFonts = (fonts: string, text?: string) => {
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
	static async getInitialProps(
		context: DocumentContext,
	): Promise<DocumentInitialProps> {
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

	render(): JSX.Element {
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

interface IPreload {
	links: Array<{
		as?: string
		integrity?: string
		autoload?: boolean
		href: string
	}>
}

const PreloadStyles = ({ links }: IPreload): JSX.Element => {
	const preconnect: Set<string> = new Set()
	const preload: Set<unknown> = new Set()
	const stylesheet: Set<unknown> = new Set()
	const scripts: Set<unknown> = new Set()

	links.map((linkProps, key: number) => {
		const url: Url = URLParse(linkProps.href)

		const { as, integrity, autoload = true } = linkProps

		preconnect.add(`${url.protocol}//${url.host}`)

		if (url.pathname !== '/') {
			preload.add(
				<link
					key={key}
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
							key={key}
							rel="stylesheet"
							href={linkProps.href}
							crossOrigin="anonymous"
						/>,
				  )
				: scripts.add(
						<script
							key={key}
							src={linkProps.href}
							crossOrigin="anonymous"
							async
						/>,
				  )
		}
	})

	return (
		<>
			{[
				[...preconnect].map((href: string, key: number) => (
					<link
						rel="preconnect"
						href={href}
						key={key}
						crossOrigin="anonymous"
					/>
				)),
				...preload,
				...stylesheet,
				...scripts,
			]}
		</>
	)
}

export default Doc
