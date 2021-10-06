import type { GetStaticProps } from 'next'
import type { PriceListInterface } from 'utils/getPricelist'

import React, { useEffect } from 'react'
import styled from 'styled-components'

import Image from 'next/image'

import PriceList from 'components/PriceList'

import { useApp } from 'contexts/app'
import { Section } from 'components/layout/section'
import { Book } from 'components/buttons/'
import { H1, H2 } from 'components/text'
import { getPricelist } from 'utils/getPricelist'
import { imgixLoader } from 'utils'

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
}

const Index = ({ priceList }: Index): JSX.Element => {
	const { setPageTitle } = useApp()

	useEffect(() => {
		if (setPageTitle) setPageTitle('GI HODET EN AVKOBLING')
	})

	return (
		<>
			<ImageSection as="div" type="pseudo">
				<div className="mobile">
					<Image
						src="/assets/img/cover-mobile.jpg"
						loader={imgixLoader}
						width={650}
						height={650}
						layout="responsive"
						alt="en kvinne med solhatt"
					/>
				</div>
				<div className="desktop">
					<Image
						src="/assets/img/cover-desktop.jpg"
						loader={imgixLoader}
						width={1600}
						height={650}
						layout="responsive"
						alt="en kvinne med solhatt"
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
	return {
		props: {
			priceList: getPricelist(),
		},
	}
}

export default Index
