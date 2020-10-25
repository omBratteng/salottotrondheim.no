import React from 'react'
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

const Wrapper = styled.section`
	grid-column: 1 / 4;
`

const Carousel = styled(CarouselProvider)`
	position: relative;
`

const Slider = styled(PureSlider)`
	background-image: url('/assets/slides/bg.jpg');
	background-repeat: no-repeat;
	background-size: 100%;
	max-height: 35rem;
	position: relative;
	width: 100%;
`

const Slide = styled(PureSlide)`
	background-image: url('/assets/slides/slide-${(props) => props.index}.png');
	background-position-x: ${(props) => props.bgalign}, right;
	background-position-y: top, center;
	background-repeat: no-repeat;
	background-size: contain;

	.carousel__slide-focus-ring {
		display: none;
	}
`

const InnerSlide = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100% - 5rem);
	margin: 0 auto 0;
	max-width: 960px;
	padding-top: 5rem;
	width: 90%;

	p {
		font-size: 2rem;
		text-transform: uppercase;
		width: 100%;
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
	left: 50%;
	position: absolute;
	transform: translateX(-50%);
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
		<Wrapper>
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
					<Slide
						index={0}
						innerClassName="Slider-InnerSlide"
						bgalign="center"
					>
						<InnerSlide className="slide-0">
							<p>Gi hodet en avslapning</p>
							<Book dark={false} />
						</InnerSlide>
					</Slide>
					<Slide
						index={1}
						innerClassName="Slider-InnerSlide"
						bgalign="right"
					>
						<InnerSlide className="slide-1">
							<Book dark={false} />
							<p>Gi hodet en avslapning</p>
						</InnerSlide>
					</Slide>
				</Slider>
				<DotGroup renderDots={renderDots} />
			</Carousel>
		</Wrapper>
	)
}

export default LayoutSlider
