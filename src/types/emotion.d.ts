import { theme } from 'styles'

declare module '@emotion/react' {
	type CustomTheme = typeof theme
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface Theme extends CustomTheme {}
}
