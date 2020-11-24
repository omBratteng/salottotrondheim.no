import type { Url } from 'url'
import { parse } from 'url'

interface IPreload {
	links: Array<
		| string
		| {
				as?: string
				integrity?: string
				autoload?: boolean
				href: string
		  }
	>
}

const Preload = ({ links }: IPreload): JSX.Element => {
	const preconnect: Set<string> = new Set()
	const preload: Set<unknown> = new Set()
	const stylesheet: Set<unknown> = new Set()
	const scripts: Set<unknown> = new Set()

	links.map((link, key: number) => {
		if (typeof link === 'string') {
			preconnect.add(link)
			return
		}

		const { as, integrity, href, autoload = true, ...props } = link
		const url: Url = parse(href)

		preconnect.add(`${url.protocol}//${url.host}`)

		if (url.pathname !== '/') {
			preload.add(
				<link
					key={key}
					rel="preload"
					as={as}
					href={href}
					crossOrigin="anonymous"
					integrity={integrity}
					{...props}
				/>,
			)

			if (!autoload) return

			as === 'style'
				? stylesheet.add(
						<link
							key={key}
							rel="stylesheet"
							href={href}
							crossOrigin="anonymous"
						/>,
				  )
				: scripts.add(
						<script
							key={key}
							src={href}
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
export default Preload
