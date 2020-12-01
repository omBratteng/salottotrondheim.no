import type { GetStaticProps } from 'next'
import type { PriceListInterface } from 'utils/getPricelist'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { getImage } from '@plaiceholder/next'
import { getPixelsSVG, PixelsSVG } from '@plaiceholder/svg'

import PriceList from 'components/PriceList'

import { useApp } from 'contexts/app'
import { Section } from 'components/layout/section'
import { Book } from 'components/buttons/'
import { H1, H2 } from 'components/text'
import { getPricelist } from 'utils/getPricelist'

const ImageSection = styled(Section)`
	overflow: hidden;
	position: relative;

	.bookButton {
		bottom: 0;
		left: 50%;
		position: absolute;
		transform: translate3d(-50%, -50%, 0);
	}

	.mobile,
	.desktop {
		> div {
			vertical-align: middle;
		}
	}

	.mobile {
		display: block;
	}

	.desktop {
		display: none;
	}

	@media (min-width: 650px) {
		.mobile {
			display: none;
		}
		.desktop {
			display: block;
		}
	}
`

const PriceSection = styled(Section)`
	margin-bottom: 4rem;

	${H1}, ${H2} {
		column-span: all;
	}

	@media (min-width: 768px) {
		column-count: 2;
		column-gap: calc((8.3333333333vw * 1) - 3rem);
	}
`

interface Index {
	priceList: PriceListInterface
	img: {
		src: {
			mobile: string
			desktop: string
		}
		alt: string
	}
	desktopSVG: PixelsSVG
}

const PlaceholderSVG = styled.svg`
	bottom: 0;
	filter: blur(24px);
	left: 50%;
	position: absolute;
	right: 0;
	top: 50%;
	transform: scale(1.3) translate(-37.5%, -37.5%);
`

const Index = ({ priceList, desktopSVG, img }: Index): JSX.Element => {
	const { setPageTitle } = useApp()

	useEffect(() => {
		if (setPageTitle) setPageTitle('GI HODET EN AVKOBLING')
	})

	return (
		<>
			<ImageSection as="div" type="pseudo">
				<PlaceholderSVG {...desktopSVG[1]}>
					{desktopSVG[2].map((child) => (
						<rect
							key={`desktop-placeholder-${[
								child[1].x,
								child[1].y,
							].join(',')}`}
							{...child[1]}
						/>
					))}
				</PlaceholderSVG>
				<div className="mobile">
					<Image
						src={img.src.mobile}
						width={650}
						height={650}
						alt={img.alt}
					/>
				</div>
				<div className="desktop">
					<Image
						src={img.src.desktop}
						width={1600}
						height={650}
						alt={img.alt}
					/>
				</div>
				<Book bg={true} />
			</ImageSection>
			<PriceSection style={{ textAlign: 'center' }}>
				<H1>prisliste</H1>
				<H2>Alle behandlinger kommer med et hygienetillegg på 72kr</H2>

				<PriceList priceList={priceList} />
			</PriceSection>
			<Section as="div" style={{ textAlign: 'center' }}>
				<Book />
			</Section>
		</>
	)
}

export const getStaticProps: GetStaticProps<Index> = async () => {
	const img = {
		src: {
			mobile: '/assets/img/cover-mobile.jpg',
			desktop: '/assets/img/cover-desktop.jpg',
		},
		alt: 'en kvinne med solhatt',
	}

	const desktopImage = await getImage(img.src.desktop)
	const desktopSVG = await getPixelsSVG(desktopImage)

	delete desktopSVG[1].style
	desktopSVG[1].height = '100%'

	return {
		props: {
			priceList: getPricelist(),
			img,
			desktopSVG,
		},
	}
}

export default Index
