import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface H3Props {
	center?: boolean
}

const H3 = styled.h3<H3Props>`
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
