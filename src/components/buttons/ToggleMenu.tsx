import { useCallback } from 'react'
import styled from 'styled-components'

import { useApp } from 'contexts/app'

const Bars = styled.span`
	cursor: pointer;
	display: block;
	height: 36px;
	position: relative;
	width: 40px;

	> span {
		background: ${(props) => props.theme.colors.black};
		border-radius: 2px;
		height: 4px;
		position: absolute;
		transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6), background 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6),
			width 0.2s ease 0.2s;
	}

	> span:nth-child(1) {
		left: 0;
		margin: -2px 0 0 0;
		top: 50%;
		transform-origin: 50% 50%;
		width: 40px;
	}

	> span:nth-child(2) {
		left: 0;
		top: 2px;
		transform-origin: 0 50%;
		width: 20px;
	}

	> span:nth-child(3) {
		bottom: 2px;
		right: 0;
		transform: translate(0, 0);
		transform-origin: 100% 50%;
		width: 20px;
	}
`

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

	&[aria-expanded='false']:hover ${Bars} {
		> span:nth-child(2),
		> span:nth-child(3) {
			width: 40px;
		}
	}

	&[aria-expanded='true'] ${Bars} {
		position: fixed;

		> span {
			background: ${(props) => props.theme.colors.white};
		}

		> span:nth-child(1),
		> span:nth-child(2),
		> span:nth-child(3) {
			transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s, width 0.2s ease;
			width: 19px;
		}

		> span:nth-child(1) {
			transform: rotate(-45deg);
			width: 40px;
		}

		> span:nth-child(2) {
			transform: translate(6px, 0) rotate(45deg);
		}

		> span:nth-child(3) {
			transform: translate(-6px, 0) rotate(45deg);
		}
	}
`

type Props = {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ToggleMenu: React.FC<Props> = ({ onClick = () => {} }: Props) => {
	const { menuOpen, setMenuOpen } = useApp()
	const handleClick = useCallback(
		(event) => {
			setMenuOpen && setMenuOpen((prevState) => !prevState)

			event.persist()
			onClick(event)
		},
		[onClick, setMenuOpen],
	)

	return (
		<Button onClick={handleClick} aria-label={`${!menuOpen ? 'åpne' : 'lukk'} sidenavigasjon`} aria-expanded={menuOpen}>
			<Bars>
				<span />
				<span />
				<span />
			</Bars>
		</Button>
	)
}

export default ToggleMenu
