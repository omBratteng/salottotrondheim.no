import styled from '@emotion/styled'
import { css } from '@emotion/react'

type SectionTypes = 'pseudo' | 'wide' | 'narrow'
type Props = Partial<{
	type: SectionTypes
	border: boolean
}>

const willBleed = (type?: SectionTypes) => type === 'wide' || type === 'pseudo'
const Section = styled('section', {
	shouldForwardProp: (prop) => !['type', 'border'].includes(prop as string),
})<Props>`
	grid-column: ${(props) => (willBleed(props.type) ? '1 / -1' : '2')};
	margin-left: auto;
	margin-right: auto;
	padding: ${(props) => (willBleed(props.type) ? '0' : '0 1.5rem')};
	width: 100%;

	${(props) =>
		props.type === 'pseudo' &&
		css`
			max-width: 1600px;
		`}

	${(props) =>
		props.type === 'narrow' &&
		css`
			max-width: 73ch;
		`}

	${(props) =>
		props.border &&
		css`
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			padding-bottom: 2.5rem;
		`}
`

export default Section
