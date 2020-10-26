import { useEffect } from 'react'
import styled from 'styled-components'

import Slider from 'components/layout/Slider'
import PriceList from 'components/PriceList'

import { useLayout } from 'components/layout/Layout'
import Book from 'components/buttons/Book'

const Wrapper = styled.section`
	grid-column: 2;

	h2 {
		font-size: 2.25rem;
		margin-top: 0.83em;
	}

	h3 {
		font-size: 1.5rem;
		margin: 1em 0;
	}

	h2,
	h3 {
		text-align: center;
	}
`

const Index = () => {
	const { setPageTitle } = useLayout()

	useEffect(() => {
		setPageTitle('GI HODET EN AVKOBLING')
	})

	return (
		<>
			<Slider />
			<Wrapper>
				<h2>prisliste</h2>
				<h3>Alle behandlinger kommer med et hygienetillegg på 72kr</h3>
			</Wrapper>
			<PriceList />
			<Wrapper>
				<Book />
			</Wrapper>
		</>
	)
}

export default Index
