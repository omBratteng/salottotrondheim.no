import styled from 'styled-components'

import Book from 'components/buttons/Book'
import { Section } from 'components/layout/section'
import Image from 'next/image'
import { useMediaLayout } from 'use-media'

const Wrapper = styled(Section)`
	position: relative;

	.bookButton {
		bottom: 0;
		left: 50%;
		position: absolute;
		transform: translate3d(-50%, -50%, 0);
	}
`

const LayoutSlider = () => {
	const isMobile = useMediaLayout({ maxWidth: '650px' })
	return (
		<Wrapper type="pseudo">
			<Image
				src={`/assets/img/cover-${isMobile ? 'mobile' : 'desktop'}.jpg`}
				quality={75}
				priority
				width={isMobile ? 650 : 1600}
				height={650}
			/>
			<Book bg={true} />
		</Wrapper>
	)
}

export default LayoutSlider
