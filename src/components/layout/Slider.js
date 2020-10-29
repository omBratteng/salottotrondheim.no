import styled from 'styled-components'

import {
	CarouselProvider,
	Slider as PureSlider,
	Slide as PureSlide,
	Dot as PureDot,
	DotGroup as PureDotGroup,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import Book from 'components/buttons/Book'

import { Section } from 'components/layout/section'
import Image from 'next/image'

const Carousel = styled(CarouselProvider)`
	position: relative;
`

const Slider = styled(PureSlider)`
	background-image: url('/assets/slides/bg.jpg');
	background-image: url('/_next/image?url=%2Fassets%2Fslides%2Fbg.jpg&w=1400&q=75');
	background-repeat: no-repeat;
	background-size: 100%;
	max-height: 35rem;
	position: relative;
	width: 100%;
`

const Slide = styled(PureSlide)`
	overflow: hidden;

	.carousel__slide-focus-ring {
		display: none;
	}
`

const SlideBG = styled.div`
	left: 50%;
	position: absolute;
	transform: translate3d(-50%, 0, 0);
	z-index: -1;
`

const InnerSlide = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100% - 5rem);
	margin: 0 auto 0;
	max-height: calc(560px - 5rem);
	max-width: 960px;
	padding-top: 5rem;
	width: 90%;

	p {
		display: none;
		font-size: 2rem;
		text-transform: uppercase;
		width: 100%;

		@media (min-width: 920px) {
			display: block;
		}
	}

	&.slide-0 {
		.bookButton {
			align-self: flex-end;
		}
	}

	&.slide-1 {
		justify-content: space-between;

		p {
			margin-bottom: 1rem;
		}

		.bookButton {
			align-self: flex-end;
		}
	}
`

const Dot = styled(PureDot)`
	background: ${(props) => (props.selected ? '#fff' : 'transparent')};
	border: 2px solid rgba(255, 255, 255, 0.75);
	border-radius: 100%;
	height: 16px;
	margin-right: 1rem;
	transition: all 0.5s ease;
	width: 16px;

	&:hover {
		border: 2px solid rgba(255, 255, 255, 1);
	}

	&:last-child {
		margin-right: 0;
	}
`

const DotGroup = styled(PureDotGroup)`
	bottom: 1.5rem;
	display: none;
	left: 50%;
	position: absolute;
	transform: translateX(-50%);

	@media (min-width: 920px) {
		display: block;
	}
`

const LayoutSlider = () => {
	const renderDots = ({
		currentSlide,
		totalSlides,
		visibleSlides,
		disableActiveDots,
	}) => {
		const dots = []

		for (let i = 0; i < totalSlides; i += 1) {
			const selected =
				i >= currentSlide && i < currentSlide + visibleSlides
			const slide =
				i >= totalSlides - visibleSlides
					? totalSlides - visibleSlides
					: i
			dots.push(
				<Dot
					key={i}
					slide={slide}
					selected={selected}
					disabled={disableActiveDots ? selected : false}
				></Dot>,
			)
		}

		return dots
	}
	return (
		<Section type="wide">
			<Carousel
				naturalSlideWidth={1600}
				naturalSlideHeight={560}
				totalSlides={2}
				interval={6000}
				isPlaying={true}
				touchEnabled={false}
				dragEnabled={false}
			>
				<Slider>
					<Slide index={0} innerClassName="Slider-InnerSlide">
						<SlideBG>
							<Image
								src="/assets/slides/slide-0.png"
								priority={true}
								width={1600}
								height={560}
							/>
						</SlideBG>
						<InnerSlide className="slide-0">
							<p>Gi hodet en avslapning</p>
							<Book dark={false} />
						</InnerSlide>
					</Slide>
					<Slide index={1} innerClassName="Slider-InnerSlide">
						<SlideBG>
							<Image
								src="/assets/slides/slide-1.png"
								priority={true}
								width={1600}
								height={560}
							/>
						</SlideBG>
						<InnerSlide className="slide-1">
							<Book dark={false} />
							<p>Gi hodet en avslapning</p>
						</InnerSlide>
					</Slide>
				</Slider>
				<DotGroup renderDots={renderDots} />
			</Carousel>
		</Section>
	)
}

export default LayoutSlider
