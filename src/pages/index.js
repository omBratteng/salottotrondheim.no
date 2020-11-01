import { useEffect } from 'react'

import Slider from 'components/layout/Slider'
import PriceList from 'components/PriceList'

import { useApp } from 'contexts/app'
import { Section } from 'components/layout/section'
import { Book } from 'components/buttons'
import { H1, H2 } from 'components/text'

const Index = () => {
	const { setPageTitle } = useApp()

	useEffect(() => {
		setPageTitle('GI HODET EN AVKOBLING')
	})

	return (
		<>
			<Slider />
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
