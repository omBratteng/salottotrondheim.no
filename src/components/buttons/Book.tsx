import styled from 'styled-components'

import { useApp } from 'contexts/app'

const Button = styled.button<Props>`
	background: ${(props) => !props.bg && 'transparent'};
	border: 4px solid ${(props) => (props.dark ? '#000' : '#f6f6f6')};
	clear: both;
	color: ${(props) => (props.dark ? '#000' : '#f6f6f6')};
	cursor: pointer;
	display: inline-block;
	font-family: 'Rozha One', serif;
	font-size: 1.75rem;
	font-weight: 400;
	opacity: ${(props) => (props.dark ? '1' : '0.8')};
	padding: 15px 90px 15px 20px;
	position: relative;
	text-decoration: none;
	transition: ease-in-out 0.1s;

	svg {
		position: absolute;
		right: 30px;
		top: 50%;
		transform: translate3d(0, -50%, 0);
		transition: ease-in-out 0.5s;
	}

	&:hover {
		svg {
			transform: translate3d(15%, -50%, 0);
		}
	}

	@media (min-width: 425px) {
		padding: 20px 100px 20px 30px;
	}

	@media (min-width: 768px) {
		font-size: 2.25rem;
	}
`

type Props = {
	bg?: boolean
	dark?: boolean
}

const Book: React.FC<Props> = ({ bg = false, dark = true }: Props) => {
	const { setModalOpen } = useApp()

	return (
		<Button
			bg={bg}
			dark={dark}
			onClick={() => {
				setModalOpen((prevState) => !prevState)
			}}
			className="bookButton"
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

export default Book