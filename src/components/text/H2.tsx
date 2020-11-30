import styled, { css } from 'styled-components'

interface H2Props {
	center?: boolean
}

const H2 = styled.h2<H2Props>`
	font-size: 1.5rem;
	margin: 1em 0 1.5em;

	${(props) =>
		props.center &&
		css`
			text-align: center;
		`}
`

export default H2
