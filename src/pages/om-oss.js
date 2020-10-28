import { useEffect } from 'react'
import styled from 'styled-components'

import { useLayout } from 'components/layout/Layout'
import Employees from 'components/employees/Employees'

import { Evo, Ghd, Tigi, Gold, Olaplex } from 'assets/products'

const Section = styled.section`
	grid-column: 2;
	margin-bottom: 4rem;

	&:last-child {
		margin-bottom: 0;
	}

	h1 {
		font-size: 3rem;
		margin: 0.83em 0 1.5em;
		text-align: center;
	}

	h3 {
		font-size: 1.5rem;
		margin: 1em 0 1.5em;
		text-align: center;
	}

	p {
		font-size: 1.125rem;
		line-height: 1.5;
		margin-bottom: 2em;

		&:last-child {
			margin-bottom: 0;
		}
	}
`

const Narrow = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	margin: 0 auto;
	max-width: 70ch;
	padding-bottom: 2.5rem;
	width: 100%;
`

const Em = styled.em`
	display: block;
	font-size: 1.125rem;
	margin-bottom: 2em;
	text-align: center;
`

const Products = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);

	img {
		flex: 1;
		max-width: 100%;
	}
`

const Page = () => {
	const { setPageTitle } = useLayout()

	useEffect(() => {
		setPageTitle('om oss')
	})

	return (
		<>
			<Section>
				<h1>om oss</h1>

				<Narrow>
					<Em>[salåttå] er italiensk for salong</Em>

					<p>
						Salonger var et fenomen fra 1600-tallet til 1700-tallet,
						en utvalgt del av byens overklasse samles for å «holde
						salong», det vil si konversere om litterære begivenheter
						eller hva som helst.
					</p>

					<p>
						Salotto er en videreutvikling av salongfenomenet.
						<br />
						Vi er et sted du kan føle deg hjemme med dyktige
						stylister som frisker opp frisyren. <br />
						Ta en god kopp kaffe mens fargen setter seg. Gi deg en
						avkobling fra hverdagsmaset med en hodemassasje i
						vaskestolen.
						<br />
						Stikk innom, slå av en prat og bestill din behandling!
					</p>
				</Narrow>
			</Section>

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
