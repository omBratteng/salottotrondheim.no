import type { DocumentContext, DocumentInitialProps } from 'next/document'

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { assetPrefix } = publicRuntimeConfig

class Doc extends Document {
	static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = context.renderPage

		try {
			context.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(
							<StyleSheetManager>
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
					<link
						rel="preload"
						as="font"
						href={`${assetPrefix}/assets/fonts/roboto-aa15f90aa29a18c813f9f34597b779f01222af95.woff2`}
						crossOrigin="anonymous"
						type="font/woff2"
					/>
					<link
						rel="preload"
						as="font"
						href={`${assetPrefix}/assets/fonts/roboto-8370d7348c62e9e25631cb33454da110fa57afd0.woff2`}
						crossOrigin="anonymous"
						type="font/woff2"
					/>
					<link
						rel="preload"
						as="font"
						href={`${assetPrefix}/assets/fonts/roboto-e55fb552fb1e9cf4a64979459c04857d19daaef6.woff2`}
						crossOrigin="anonymous"
						type="font/woff2"
					/>
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

export default Doc
