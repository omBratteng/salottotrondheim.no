import { useEffect } from 'react'
import styled from 'styled-components'

import { useLayout } from 'components/layout/Layout'

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

	h2 {
		font-size: 1.5rem;
		margin: 1em 0 1.5em;
	}

	p,
	h3 {
		font-size: 1.125rem;
		line-height: 1.5;
		margin-bottom: 2em;

		&:last-child {
			margin-bottom: 0;
		}
	}
`

const Narrow = styled.div`
	margin: 0 auto;
	max-width: 70ch;
	width: 100%;
`

const Page = () => {
	const { setPageTitle } = useLayout()

	useEffect(() => {
		setPageTitle('personvernerklæring')
	})

	return (
		<>
			<Section>
				<h1>Personvernerklæring</h1>

				<Narrow>
					<h2>Hva er personopplysninger?</h2>
					<p>
						Personopplysninger er informasjon som kan knyttes til
						deg, som navn, telefonnummer og e-post. Hvordan du
						bruker et nettsted, kan også regnes som
						personopplysninger. For eksempel hva du har klikket på,
						nyhetsbrev du abonnerer på, og hvem du gir «likes» til.
					</p>
					<p>
						Når du er i kontakt med Grensesnitt på nett, gir du
						bedriften tilgang til opplysninger om deg.
						Personvernerklæringen forteller hvilke opplysninger vi
						samler inn, hvordan vi gjør det, og hva vi bruker
						opplysningene til.
					</p>
					<h2>Hvilke personopplysninger vi samler inn og hvorfor?</h2>
					<p>
						For å vite hvordan folk bruker nettsiden vår, henter vi
						informasjon ved hjelp av søkefelt og informasjonskapsler
						(cookies), men vi lagrer ikke personopplysninger i
						prosessen.
					</p>
					<p>
						På&nbsp;
						<a href="https://nettvett.no/slik-administrer-du-informasjonskapsler/">
							nettvett.no
						</a>
						&nbsp;kan du lese om cookies og se hvordan du
						administrerer dem i din egen nettleser.
					</p>
					<h3>Informasjonskapsler (cookies) fra Google Analytics</h3>
					<p>
						Vi bruker analyseverktøyet Google Analytics for å få
						statistikk om hvordan besøkende navigerer og bruker
						sidene våre. Vi får for eksempel vite tidspunkt på
						dagen, hvilke sider de besøker, og hvor lenge de bruker
						siden. Vi lagrer ingen personopplysninger rundt dette.
					</p>
					<p>
						Google Analytics bruker informasjonskapsler; små
						tekstfiler som nettstedet lagrer på din datamaskin. For
						å sikre personvernet ditt bruker vi anonymizeIP, en
						funksjon som gjør at alle opplysninger som kan
						identifisere deg, inkludert IP-adresse, blir
						anonymisert.
					</p>
					<h3>Informasjonskapsler</h3>
					<p>
						Hvis du har en konto og logger deg inn på dette
						nettstedet, vil vi opprette en midlertidig
						informasjonskapsel for å avgjøre om nettleseren din
						støtter bruk av dette. Denne informasjonskapselen
						inneholder ingen personopplysninger og forsvinner så
						snart du lukker nettleseren din.
					</p>
					<p>
						Når du logger deg inn, blir det opprettet
						informasjonskapsler som lagrer innloggingsinformasjonen
						din og valg du har tatt når det gjelder hvordan innhold
						skal vises. Informasjonskapsler med
						innloggingsinformasjon utløper etter to dager, mens de
						med visningsvalg varer i ett år. Hvis du krysser av for
						«Husk meg», vil innloggingsinformasjonen din oppbevares
						i to uker. Hvis du logger deg ut av kontoen din, vil
						disse informasjonskapslene forsvinne.
					</p>
					<p>
						Hvis du redigerer eller publiserer en artikkel, vil
						ytterligere en informasjonskapsel bli lagret i
						nettleseren din. Denne informasjonskapselen inneholder
						ingen personopplysninger, men bare ID-en til artikkelen
						du nettopp redigerte. Den utløper etter én dag.
					</p>
					<h3>Innebygd innhold fra andre nettsteder</h3>
					<p>
						Artikler på denne siden kan inkludere innebygd innhold
						(f.eks. videoer, bilder, artikler osv.). Innebygd
						innhold fra andre nettsteder oppfører seg på nøyaktig
						samme måte som om den besøkende hadde besøkt nettstedet
						som det innebygde innholdet kommer fra.
					</p>
					<p>
						Disse nettstedene kan samle inn opplysninger om deg,
						bruke informasjonskapsler eller bygge inn
						sporingssystemer fra en tredjepart og overvåke hva du
						gjør via dette innebygde innholdet. Dette omfatter også
						sporing av handlingene dine via det innebygde innholdet
						dersom du har en konto og er logget inn på nettstedet.
					</p>
					<h2>Kontakt</h2>
					<p>
						Om du har spørsmål knyttet til Grensesnitt og våre
						rutiner for håndtering av personvern, ta kontakt
						via&nbsp;
						<a href="mailto:gdpr@bratteng.solutions">
							gdpr@bratteng.solutions
						</a>
					</p>
				</Narrow>
			</Section>
		</>
	)
}

export default Page
