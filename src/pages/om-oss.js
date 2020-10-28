import { useEffect } from 'react'
import styled from 'styled-components'

import { useLayout } from 'components/layout/Layout'
import Employees from 'components/employees/Employees'

import { Evo, Ghd, Tigi, Gold, Olaplex } from 'assets/products'

const Section = styled.section`
	grid-column: 2;
	margin-bottom: 4rem;
	padding: 0 1.5rem;

	&:last-child {
		margin-bottom: 0;
	}

	h1 {
		font-size: 2.5rem;
		margin: 0.83em 0 1.5em;
		text-align: center;
	}

	h3 {
		font-size: 1.25rem;
		margin: 1em 0 1.5em;
		text-align: center;
	}

	em {
		display: block;
		margin-bottom: 2em;
		text-align: center;
	}

	p {
		line-height: 1.75em;
		margin-bottom: 2em;

		&:last-child {
			margin-bottom: 0;
		}
	}
`

const Narrow = styled(Section)`
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	margin-left: auto;
	margin-right: auto;
	max-width: 73ch;
	padding-bottom: 2.5rem;
`

const Products = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media (min-width: 768px) {
		grid-template-columns: repeat(5, 1fr);
	}
`

const Page = () => {
	const { setPageTitle } = useLayout()

	useEffect(() => {
		setPageTitle('om oss')
	})

	return (
		<>
			<Narrow>
				<h1>om oss</h1>

				<em>[salåttå] er italiensk for salong</em>

				<p>
					Salonger var et fenomen fra 1600-tallet til 1700-tallet, en
					utvalgt del av byens overklasse samles for å «holde salong»,
					det vil si konversere om litterære begivenheter eller hva
					som helst.
				</p>

				<p>
					Salotto er en videreutvikling av salongfenomenet.
					<br />
					Vi er et sted du kan føle deg hjemme med dyktige stylister
					som frisker opp frisyren. <br />
					Ta en god kopp kaffe mens fargen setter seg. Gi deg en
					avkobling fra hverdagsmaset med en hodemassasje i
					vaskestolen.
					<br />
					Stikk innom, slå av en prat og bestill din behandling!
				</p>
			</Narrow>

			<Employees />

			<Section>
				<h3>hos oss finner du disse produktene:</h3>

				<Products>
					<Tigi />
					<Evo />
					<Ghd />
					<Gold />
					<Olaplex />
				</Products>
			</Section>
		</>
	)
}

export default Page
