import { useEffect } from 'react'

import { useApp } from 'contexts/app'
import { Section } from 'components/layout/section'

import { H1, H2, H3, P } from 'components/text'

const Page = (): JSX.Element => {
	const { setPageTitle } = useApp()

	useEffect(() => {
		if (setPageTitle) setPageTitle('personvernerklæring')
	})

	return (
		<>
			<Section type="narrow">
				<H1>person&shy;vern&shy;erklæring</H1>

				<H2>Hva er person&shy;opplysninger?</H2>
				<P>
					Personopplysninger er informasjon som kan knyttes til deg, som navn, telefonnummer og e-post. Hvordan du
					bruker et nettsted, kan også regnes som personopplysninger. For eksempel hva du har klikket på, nyhetsbrev
					du abonnerer på, og hvem du gir «likes» til.
				</P>
				<P>
					Når du er i kontakt med Grensesnitt på nett, gir du bedriften tilgang til opplysninger om deg.
					Personvernerklæringen forteller hvilke opplysninger vi samler inn, hvordan vi gjør det, og hva vi bruker
					opplysningene til.
				</P>
			</Section>

			<Section type="narrow">
				<H2>Hvilke person&shy;opplysninger vi samler inn og hvorfor?</H2>
				<P>
					For å vite hvordan folk bruker nettsiden vår, henter vi informasjon ved hjelp av søkefelt og
					informasjonskapsler (cookies), men vi lagrer ikke personopplysninger i prosessen.
				</P>
				<P>
					På&nbsp;
					<a href="https://nettvett.no/slik-administrer-du-informasjonskapsler/">nettvett.no</a>
					&nbsp;kan du lese om cookies og se hvordan du administrerer dem i din egen nettleser.
				</P>
				<H3>Informasjonskapsler (cookies) fra Google Analytics</H3>
				<P>
					Vi bruker analyseverktøyet Google Analytics for å få statistikk om hvordan besøkende navigerer og bruker
					sidene våre. Vi får for eksempel vite tidspunkt på dagen, hvilke sider de besøker, og hvor lenge de bruker
					siden. Vi lagrer ingen personopplysninger rundt dette.
				</P>
				<P>
					Google Analytics bruker informasjonskapsler; små tekstfiler som nettstedet lagrer på din datamaskin. For å
					sikre personvernet ditt bruker vi anonymizeIP, en funksjon som gjør at alle opplysninger som kan
					identifisere deg, inkludert IP-adresse, blir anonymisert.
				</P>
				<H3>Informasjonskapsler</H3>
				<P>
					Hvis du har en konto og logger deg inn på dette nettstedet, vil vi opprette en midlertidig
					informasjonskapsel for å avgjøre om nettleseren din støtter bruk av dette. Denne informasjonskapselen
					inneholder ingen personopplysninger og forsvinner så snart du lukker nettleseren din.
				</P>
				<P>
					Når du logger deg inn, blir det opprettet informasjonskapsler som lagrer innloggingsinformasjonen din og
					valg du har tatt når det gjelder hvordan innhold skal vises. Informasjonskapsler med innloggingsinformasjon
					utløper etter to dager, mens de med visningsvalg varer i ett år. Hvis du krysser av for «Husk meg», vil
					innloggingsinformasjonen din oppbevares i to uker. Hvis du logger deg ut av kontoen din, vil disse
					informasjonskapslene forsvinne.
				</P>
				<P>
					Hvis du redigerer eller publiserer en artikkel, vil ytterligere en informasjonskapsel bli lagret i
					nettleseren din. Denne informasjonskapselen inneholder ingen personopplysninger, men bare ID-en til
					artikkelen du nettopp redigerte. Den utløper etter én dag.
				</P>
				<H3>Innebygd innhold fra andre nettsteder</H3>
				<P>
					Artikler på denne siden kan inkludere innebygd innhold (f.eks. videoer, bilder, artikler osv.). Innebygd
					innhold fra andre nettsteder oppfører seg på nøyaktig samme måte som om den besøkende hadde besøkt
					nettstedet som det innebygde innholdet kommer fra.
				</P>
				<P>
					Disse nettstedene kan samle inn opplysninger om deg, bruke informasjonskapsler eller bygge inn
					sporingssystemer fra en tredjepart og overvåke hva du gjør via dette innebygde innholdet. Dette omfatter
					også sporing av handlingene dine via det innebygde innholdet dersom du har en konto og er logget inn på
					nettstedet.
				</P>
			</Section>

			<Section type="narrow">
				<H2>Kontakt</H2>
				<P>
					Om du har spørsmål knyttet til Grensesnitt og våre rutiner for håndtering av personvern, ta kontakt
					via&nbsp;
					<a href="mailto:gdpr@bratteng.solutions">gdpr@bratteng.solutions</a>
				</P>
			</Section>
		</>
	)
}

export default Page
