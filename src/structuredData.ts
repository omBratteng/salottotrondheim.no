import { IMGIX_URL } from 'site-config'

export const PAGE_URL = 'https://salottotrondheim.no/'
export const PAGE_DESC = 'Gi hodet en avkobling.'
export const OG_IMAGE = IMGIX_URL + 'assets/img/og.jpg'
export const OG_ALT = 'En mann iført dress og sløyfe som holder en iskrem'
export const CONTACT_EMAIL = 'ciao@salottotrondheim.no'
export const CONTACT_PHONE = '+4773505051'
export const VAT_ID = 917021597

export const ADDRESS = {
	'@type': 'PostalAddress',
	streetAddress: 'Dronningens gate 26',
	addressLocality: 'Trondheim',
	addressRegion: 'Trøndelag',
	postalCode: '7011',
	addressCountry: 'NO',
}

const STRUCTURED_DATA = {
	'@context': 'https://schema.org',
	'@type': 'HealthAndBeautyBusiness',
	name: 'Salotto',
	url: PAGE_URL,
	email: CONTACT_EMAIL,
	telephone: CONTACT_PHONE,
	image: [OG_IMAGE],
	description: `Salotto er et sted du kan føle deg hjemme med dyktige stylister som frisker opp frisyren.
	Ta en god kopp kaffe mens fargen setter seg. Gi deg en avkobling fra hverdagsmaset med en hodemassasje i vaskestolen.
	Stikk innom, slå av en prat og bestill din behandling!`,
	slogan: PAGE_DESC,
	vatID: VAT_ID,
	address: ADDRESS,
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 63.43210315034183,
		longitude: 10.39570885089437,
	},
	naics: '812112',
	foundingDate: '2016-03-01',
	priceRange: '$$',
	currenciesAccepted: 'NOK',
	paymentAccepted: 'Cash, Credit Card',
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
			opens: '10:00',
			closes: '18:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Thursday'],
			opens: '10:00',
			closes: '19:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '10:00',
			closes: '16:00',
		},
	],
	smokingAllowed: false,
}

export default STRUCTURED_DATA
