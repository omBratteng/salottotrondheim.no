import type { GetStaticProps } from 'next'
import type { PriceListInterface } from 'utils/getPricelist'

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { getImage } from '@plaiceholder/next'
import { getPixelsCSS, PixelsCSS } from '@plaiceholder/css'

import PriceList from 'components/PriceList'

import { useApp } from 'contexts/app'
import { Section } from 'components/layout/section'
import { Book } from 'components/buttons/'
import { H1, H2 } from 'components/text'
import { getPricelist } from 'utils/getPricelist'

const ImageSection = styled(Section)<{ isLoaded?: boolean }>`
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
		position: relative;
		z-index: ${(props) => (props.isLoaded ? '0' : '-1')};

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

type TPlaceholder = Partial<{
	mobileCSS: PixelsCSS
	desktopCSS: PixelsCSS
}>
const Placeholder = styled.div<TPlaceholder>`
	filter: blur(40px);
	height: 100%;
	position: absolute;
	transform: scale(1.2);
	width: 100%;

	${(props) => props.mobileCSS}

	@media (min-width: 650px) {
		${(props) => props.desktopCSS}
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
	mobileCSS: PixelsCSS
	desktopCSS: PixelsCSS
}

const Index = ({
	priceList,
	mobileCSS,
	desktopCSS,
	img,
}: Index): JSX.Element => {
	const { setPageTitle } = useApp()
	const [isLoaded, setLoaded] = useState<boolean>(false)

	useEffect(() => {
		if (setPageTitle) setPageTitle('GI HODET EN AVKOBLING')
	})

	return (
		<>
			<ImageSection as="div" type="pseudo" isLoaded={isLoaded}>
				<Placeholder mobileCSS={mobileCSS} desktopCSS={desktopCSS} />
				<div className="mobile">
					<Image
						src={img.src.mobile}
						width={650}
						height={650}
						alt={img.alt}
						onLoad={() => {
							setLoaded(true)
						}}
					/>
				</div>
				<div className="desktop">
					<Image
						src={img.src.desktop}
						width={1600}
						height={650}
						alt={img.alt}
						onLoad={() => {
							setLoaded(true)
						}}
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

	const mobileImage = await getImage(img.src.mobile)
	const mobileCSS = await getPixelsCSS(mobileImage)

	const desktopImage = await getImage(img.src.desktop)
	const desktopCSS = await getPixelsCSS(desktopImage)

	return {
		props: {
			priceList: getPricelist(),
			img,
			mobileCSS,
			desktopCSS,
		},
	}
}

export default Index
