// Type definitions for ackee-tracker 4.0
// Project: https://github.com/electerious/ackee-tracker
// Definitions by: Pablo Sáez <https://github.com/PabloSzx>
//                 Spencer Elliott <https://github.com/elliottsj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ServerDetails {
	server: string
	domainId: string
}

export interface TrackingOptions {
	/**
	 * Defaults to `true`
	 */
	ignoreLocalhost?: boolean
	/**
	 * Defaults to `false`
	 */
	detailed?: boolean

	/**
	 * Defaults to `false`
	 */
	ignoreOwnVisits?: boolean
}

export interface AckeeInstance {
	record: (attrs?: DefaultData | (DefaultData & DetailedData)) => { stop: () => void }
}

export interface DefaultData {
	siteLocation: string
	siteReferrer: string
}

// Based on https://github.com/bestiejs/platform.js/blob/master/platform.js
export interface DetailedData {
	siteLanguage: string
	screenWidth: number
	screenHeight: number
	screenColorDepth: number
	deviceName: string | null
	deviceManufacturer: string | null
	osName: string | null
	osVersion: string | null
	browserName: string | null
	browserVersion: string | null
	browserWidth: number
	browserHeight: number
}
