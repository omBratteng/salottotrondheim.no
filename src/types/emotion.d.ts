import { theme } from 'styles'

declare module '@emotion/react' {
	type CustomTheme = typeof theme
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	export interface Theme extends CustomTheme {}
}
