import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useApp } from 'contexts/app'

const Button = styled.button`
	align-items: center;
	background: transparent;
	border: 0;
	cursor: pointer;
	display: flex;
	font-size: 1.5rem;
	height: var(--header-height);
	justify-content: center;
	padding: 0;
	width: var(--header-height);
	z-index: 100;
`

const Bars = styled.div`
	cursor: pointer;
	display: block;
	height: 36px;
	position: relative;
	width: 40px;

	> div {
		background: ${(props) => props.theme.colors.black};
		border-radius: 2px;
		height: 4px;
		position: absolute;
		transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6),
			background 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6),
			width 0.2s ease 0.2s;
	}

	> div:nth-child(1) {
		left: 0;
		margin: -2px 0 0 0;
		top: 50%;
		transform-origin: 50% 50%;
		width: 40px;
	}

	> div:nth-child(2) {
		left: 0;
		top: 2px;
		transform-origin: 0 50%;
		width: 20px;
	}

	> div:nth-child(3) {
		bottom: 2px;
		right: 0;
		transform: translate(0, 0);
		transform-origin: 100% 50%;
		width: 20px;
	}

	&[aria-expanded='false']:hover {
		> div:nth-child(2),
		> div:nth-child(3) {
			width: 40px;
		}
	}

	&[aria-expanded='true'] {
		> div {
			background: ${(props) => props.theme.colors.white};
		}

		> div:nth-child(1),
		> div:nth-child(2),
		> div:nth-child(3) {
			transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s,
				width 0.2s ease;
			width: 19px;
		}

		> div:nth-child(1) {
			transform: rotate(-45deg);
			width: 40px;
		}

		> div:nth-child(2) {
			transform: translate(6px, 0) rotate(45deg);
		}

		> div:nth-child(3) {
			transform: translate(-6px, 0) rotate(45deg);
		}
	}
`

const ToggleMenu = ({ onClick, ...props }) => {
	const { menuOpen, setMenuOpen } = useApp()
	const handleClick = useCallback(
		(event) => {
			setMenuOpen((prevState) => !prevState)

			event.persist()
			onClick(event)
		},
		[onClick, setMenuOpen],
	)

	return (
		<Button {...props} onClick={handleClick}>
			<Bars aria-expanded={menuOpen}>
				<div />
				<div />
				<div />
			</Bars>
		</Button>
	)
}

ToggleMenu.propTypes = {
	onClick: PropTypes.func,
}

ToggleMenu.defaultProps = {
	onClick: () => {},
}

export default ToggleMenu
