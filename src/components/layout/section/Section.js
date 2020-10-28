import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const willBleed = (type) => type === 'wide' || type === 'pseudo'

const Section = styled.section`
	grid-column: ${({ type }) => (willBleed(type) ? '1 / -1' : '2')};
	margin-left: auto;
	margin-right: auto;
	padding: ${({ type }) => (willBleed(type) ? '0' : '0 1.5rem')};
	width: 100%;

	${({ type }) =>
		type === 'pseudo' &&
		css`
			max-width: 1600px;
		`}

	${({ type }) =>
		type === 'narrow' &&
		css`
			max-width: 73ch;
		`}
`

Section.propTypes = {
	type: PropTypes.oneOf(['pseudo', 'wide', 'narrow']),
}

export default Section
