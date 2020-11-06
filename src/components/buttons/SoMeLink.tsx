import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { hideVisually, size } from 'polished'

const Link = styled.a`
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
type Props = {
	href: string
	alt: string
	icon: IconName
}
const SoMeLink: React.FC<Props> = ({ href, alt, icon }: Props) => {
	return (
		<Link {...{ alt, href }} className="no-bg">
			<FontAwesomeIcon icon={['fab', icon]} fixedWidth />
			<span>{alt}</span>
		</Link>
	)
}

export default SoMeLink
