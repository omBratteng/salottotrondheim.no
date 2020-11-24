import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { hideVisually, size } from 'polished'

interface LinkProps {
	href: string
	alt: string
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
	icon: IconName
}

const SoMeLink = ({ href, alt, icon }: Props): JSX.Element => {
	return (
		<Link alt={alt} href={href} className="no-bg">
			<FontAwesomeIcon icon={['fab', icon]} fixedWidth />
			<span>{alt}</span>
		</Link>
	)
}

export default SoMeLink
