import type { ReactNode } from 'react'
import styled from '@emotion/styled'

const Button = styled.a`
	appearance: none;
	background: transparent;
	border: 0;
	cursor: pointer;
	text-decoration: underline;
`

type Props = {
	bottom?: boolean
	to?: number
	children: ReactNode
}

const ScrollTo = ({ bottom = false, to, children }: Props): JSX.Element => (
	<Button
		onClick={(event) => {
			event.preventDefault()
			window.scrollTo({
				top: to ? to : bottom ? document.body.scrollHeight : 0,
				left: 0,
				behavior: 'smooth',
			})
		}}
	>
		{children}
	</Button>
)

export default ScrollTo
