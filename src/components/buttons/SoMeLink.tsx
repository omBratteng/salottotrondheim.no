import styled from 'styled-components'
import { hideVisually, size } from 'polished'

interface LinkProps {
	href: string
	title: string
}

const Link = styled.a<LinkProps>`
	${size('2.5rem')}
	align-items: center;
	background: ${(props) => props.theme.colors.grey};
	border-radius: 100%;
	display: inline-flex;
	font-size: 1.5rem;
	justify-content: center;
	margin: 0 0.5rem;
	outline: 0;
	transition: all 0.5s ease;

	&:focus,
	&:hover {
		background: ${(props) => props.theme.colors.white};
	}

	&:focus {
		box-shadow: 0px 0px 0px 2px #005fcc;
		outline: 0;
	}

	span {
		${hideVisually()}
	}

	svg {
		color: ${(props) => props.theme.colors.black};
	}
`

interface Props extends LinkProps {
	children: React.ReactNode
}

const SoMeLink = ({ href, title, children }: Props): JSX.Element => {
	return (
		<Link title={title} href={href} className="no-bg">
			{children}
			<span>{title}</span>
		</Link>
	)
}

export default SoMeLink
