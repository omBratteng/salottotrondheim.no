import { useEffect } from 'react'
import styled from 'styled-components'

import { useLayout } from 'components/layout/Layout'
import { Section as SCSection } from 'components/layout/section'
import Employees from 'components/employees/Employees'

import { Evo, Ghd, Tigi, Gold, Olaplex } from 'assets/products'
import { H1, H3, P } from 'components/text'

const Section = styled(SCSection)`
	margin-bottom: 4rem;

	&:last-child {
		margin-bottom: 0;
	}

	em {
		display: block;
		margin-bottom: 2em;
		text-align: center;
	}
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
			<Section type="narrow" border={true}>
				<H1>om oss</H1>

				<em>[salåttå] er italiensk for salong</em>

				<P>
					Salonger var et fenomen fra 1600-tallet til 1700-tallet, en
					utvalgt del av byens overklasse samles for å «holde salong»,
					det vil si konversere om litterære begivenheter eller hva
					som helst.
				</P>

				<P>
					Salotto er en videreutvikling av salongfenomenet.
					<br />
					Vi er et sted du kan føle deg hjemme med dyktige stylister
					som frisker opp frisyren. <br />
					Ta en god kopp kaffe mens fargen setter seg. Gi deg en
					avkobling fra hverdagsmaset med en hodemassasje i
					vaskestolen.
					<br />
					Stikk innom, slå av en prat og bestill din behandling!
				</P>
			</Section>

			<Employees />

			<Section>
				<H3 center>hos oss finner du disse produktene:</H3>

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
