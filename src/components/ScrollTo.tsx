import styled from 'styled-components'

const Button = styled.a`
	appearance: none;
	background: transparent;
	border: 0;
	cursor: pointer;
	text-decoration: underline;
`

interface Props {
	bottom?: boolean
	to?: number
}

const ScrollTo: React.FC<Props> = ({ bottom = false, to }: Props) => (
	<Button
		onClick={(event) => {
			event.preventDefault()
			window.scrollTo({
				top: to ? to : bottom ? document.body.scrollHeight : 0,
				left: 0,
				behavior: 'smooth',
			})
		}}
	/>
)

export default ScrollTo
