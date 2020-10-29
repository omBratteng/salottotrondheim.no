import styled, { css } from 'styled-components'

const H3 = styled.h3`
	font-size: 1.125rem;
	line-height: 1.5;
	margin-bottom: 2em;
	margin-top: 1em;

	${(props) =>
		props.center &&
		css`
			text-align: center;
		`}
`

export default H3
