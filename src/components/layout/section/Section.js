import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const willBleed = (type) => type === 'wide' || type === 'pseudo'

const Section = styled.section`
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

Section.propTypes = {
	type: PropTypes.oneOf(['pseudo', 'wide', 'narrow']),
	border: PropTypes.bool,
}

export default Section
