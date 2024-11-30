import styled from '@emotion/styled'

import { useApp } from 'contexts/app'

const Button = styled.button<Props>`
	background: ${(props) => !props.bg && 'transparent'};
	border: 4px solid ${(props) => (props.dark ? '#000' : '#f6f6f6')};
	clear: both;
	color: ${(props) => (props.dark ? '#000' : '#f6f6f6')};
	cursor: pointer;
	display: flex;
	font-family: 'Rozha One', serif;
	font-size: 1.75rem;
	font-weight: 400;
	justify-content: space-between;
	padding: 15px 20px 15px 20px;
	position: relative;
	text-decoration: none;

	svg {
		align-self: center;
		transform: translate3d(0, 0, 0);
		transition: transform ease-in-out 0.5s;
		margin-left: 30px;
	}

	&:hover {
		svg {
			transform: translate3d(15%, 0, 0);
		}
	}

	@media (min-width: 425px) {
		padding: 20px 30px;
	}

	@media (min-width: 768px) {
		font-size: 2.25rem;
	}
`

type Props = {
	bg?: boolean
	dark?: boolean
}

const Book = ({ bg = false, dark = true }: Props): JSX.Element => {
	const { setModalOpen } = useApp()

	return (
		<Button
			bg={bg}
			dark={dark}
			onClick={() => {
				if (setModalOpen) {
					setModalOpen((prevState) => !prevState)
				}
			}}
			className="bookButton"
		>
			<span>bestill time</span>
			<svg width="47" height="22">
				<g fill="none" stroke="currentColor" fillRule="evenodd" strokeWidth="2">
					<path d="M1.5 10.602h41.104M33.259 20.523l11.408-9.804L33.357 1" />
				</g>
			</svg>
		</Button>
	)
}

export default Book
