import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.a`
	appearance: none;
	background: transparent;
	border: 0;
	cursor: pointer;
	text-decoration: underline;
`

const ScrollTo = ({ bottom, to, ...props }) => (
	<Button
		{...props}
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

ScrollTo.defaultProps = {
	bottom: false,
}

ScrollTo.propTypes = {
	bottom: PropTypes.bool,
	to: PropTypes.number,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
}

export default ScrollTo
