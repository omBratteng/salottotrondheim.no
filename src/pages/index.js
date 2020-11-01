import { useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import PriceList from 'components/PriceList'

import { useApp } from 'contexts/app'
import { Section } from 'components/layout/section'
import { Book } from 'components/buttons'
import { H1, H2 } from 'components/text'

const ImageSection = styled(Section)`
	position: relative;

	.bookButton {
		bottom: 0;
		left: 50%;
		position: absolute;
		transform: translate3d(-50%, -50%, 0);
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

const Index = () => {
	const { setPageTitle } = useApp()

	useEffect(() => {
		setPageTitle('GI HODET EN AVKOBLING')
	})

	return (
		<>
			<ImageSection type="pseudo">
				<div className="mobile">
					<Image
						src={`/assets/img/cover-mobile.jpg`}
						width={650}
						height={650}
					/>
				</div>
				<div className="desktop">
					<Image
						src={`/assets/img/cover-desktop.jpg`}
						width={1600}
						height={650}
					/>
				</div>
				<Book bg={true} />
			</ImageSection>
			<Section style={{ textAlign: 'center' }}>
				<H1>prisliste</H1>
				<H2>Alle behandlinger kommer med et hygienetillegg på 72kr</H2>
			</Section>
			<PriceList />
			<Section style={{ textAlign: 'center' }}>
				<Book />
			</Section>
		</>
	)
}

export default Index
