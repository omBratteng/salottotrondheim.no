import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.a`
	border: 4px solid ${(props) => (props.dark ? '#818181' : '#f6f6f6')};
	clear: both;
	color: ${(props) => (props.dark ? '#818181' : '#f6f6f6')};
	display: inline-block;
	font-family: 'Rozha One', serif;
	font-size: 36px;
	opacity: ${(props) => (props.dark ? '1' : '0.8')};
	padding: 20px 100px 20px 30px;
	position: relative;
	text-decoration: none;
	transition: ease-in-out 0.1s;

	svg {
		position: absolute;
		right: 30px;
		top: 50%;
		transform: translate3d(0, -50%, 0);
		transition: ease-in-out 0.5s;

		&:hover {
			transform: translate3d(15%, -50%, 0);
		}
	}
`

const Book = ({ dark }) => {
	return (
		<Button
			dark={dark}
			href="#"
			className="bookButton"
			// href="https://frisorsalotto.bestille.no/oncust2/#!/"
		>
			<span>bestill time</span>
			<svg width="47" height="22">
				<g
					fill="none"
					stroke="currentColor"
					fillRule="evenodd"
					strokeWidth="2"
				>
					<path d="M1.5 10.602h41.104M33.259 20.523l11.408-9.804L33.357 1" />
				</g>
			</svg>
		</Button>
	)
}

Book.defaultProps = {
	dark: true,
}

Book.propTypes = {
	dark: PropTypes.bool,
}

export default Book
