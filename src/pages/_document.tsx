import type { DocumentContext, DocumentInitialProps } from 'next/document'

import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'

import createEmotionServer from '@emotion/server/create-instance'

import { createEmotionCache } from 'utils'

const { publicRuntimeConfig } = getConfig()
const { assetPrefix } = publicRuntimeConfig

class Doc extends Document {
	static async getInitialProps(
		context: DocumentContext,
	): Promise<DocumentInitialProps & { emotionStyleTags: JSX.Element[] }> {
		const originalRenderPage = context.renderPage

		const emotionCache = createEmotionCache()
		const { extractCriticalToChunks } = createEmotionServer(emotionCache)

		context.renderPage = () =>
			originalRenderPage({
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				enhanceApp: (App: any) =>
					function EnhanceApp(props) {
						return <App emotionCache={emotionCache} {...props} />
					},
			})

		const initialProps = await Document.getInitialProps(context)
		const emotionStyles = extractCriticalToChunks(initialProps.html)
		const emotionStyleTags = emotionStyles.styles.map((style) => (
			<style
				data-emotion={`${style.key} ${style.ids.join(' ')}`}
				key={style.key}
				dangerouslySetInnerHTML={{ __html: style.css }}
			/>
		))

		return {
			...initialProps,
			emotionStyleTags,
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
					{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
					{(this.props as any).emotionStyleTags}
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
