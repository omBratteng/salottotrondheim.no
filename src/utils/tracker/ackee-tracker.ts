/* eslint-disable @typescript-eslint/no-explicit-any */
import bowser from 'bowser'
import { AckeeInstance, ServerDetails, TrackingOptions } from './ackee-types'

const isBrowser = typeof window !== 'undefined'

/**
 * Determines if a host is a localhost.
 * @param {String} hostname - Hostname that should be tested.
 * @returns {Boolean} isLocalhost
 */
const isLocalhost = (hostname: string): boolean =>
	hostname === '' ||
	hostname === 'localhost' ||
	hostname === '127.0.0.1' ||
	hostname === '::1'

/**
 * Determines if user agent is a bot. Approach is to get most bots, assuming other bots don't run JS.
 * Source: https://stackoverflow.com/questions/20084513/detect-search-crawlers-via-javascript/20084661
 * @param {String} userAgent - User agent that should be tested.
 * @returns {Boolean} isBot
 */
const isBot = (userAgent: string): boolean =>
	/bot|crawler|spider|crawling/i.test(userAgent)

/**
 * Check if record id is a fake id. This is the case when Ackee ignores you because of the `ackee_ignore` cookie.
 * @param {String} recordId - Record id that should be tested.
 * @returns {Boolean} isFakeRecordId
 */
const isFakeRecordId = (recordId: string): boolean =>
	recordId === '88888888-8888-8888-8888-888888888888'
/**
 * Gathers all platform-, screen- and user-related information.
 * @param {Boolean} detailed - Include personal data.
 * @returns {Object} attributes - User-related information.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const attributes = (detailed = false) => {
	const { browser, os, platform } = bowser.parse(navigator.userAgent)

	const defaultData = {
		siteLocation: window.location.href,
		siteReferrer: document.referrer,
	}

	const detailedData = {
		siteLanguage: navigator.language.substr(0, 2),
		screenWidth: screen.width,
		screenHeight: screen.height,
		screenColorDepth: screen.colorDepth,
		deviceName: platform.model,
		deviceManufacturer: platform.vendor,
		osName: os.name,
		osVersion: os.version,
		browserName: browser.name,
		browserVersion: browser.version,
		browserWidth: window.outerWidth,
		browserHeight: window.outerHeight,
	}

	return {
		...defaultData,
		...(detailed === true ? detailedData : {}),
	}
}

/**
 * Construct URL to the GraphQL endpoint of Ackee.
 * @param {String} server - URL of the Ackee server.
 * @returns {String} endpoint - URL to the GraphQL endpoint of the Ackee server.
 */
const endpoint = (server: string): string => {
	const hasTrailingSlash = server.substr(-1) === '/'

	return server + (hasTrailingSlash === true ? '' : '/') + 'api'
}

/**
 * Sends a request to a specified URL.
 * Won't catch all errors as some are already logged by the browser.
 * In this case the callback won't fire.
 * @param {String} url - URL to the GraphQL endpoint of the Ackee server.
 * @param {String} query - GraphQL query.
 * @param {?Object} variables - Variables for the GraphQL query.
 * @param {?Object} opts
 * @param {Function} next - The callback that handles the response. Receives the following properties: err, json.
 */
const send = (
	url: string,
	query: string,
	variables: any,
	opts: any,
	next: any,
) => {
	const xhr = new XMLHttpRequest()

	xhr.open('POST', url)

	xhr.onload = () => {
		if (xhr.status === 200 || xhr.status === 201) {
			let json = null

			try {
				json = JSON.parse(xhr.responseText)
			} catch (e) {
				return next(new Error('Failed to parse response from server'))
			}

			if (json.errors != null) {
				return next(new Error(json.errors[0].message))
			}

			return next(null, json)
		} else {
			return next(new Error('Server returned with an unhandled status'))
		}
	}

	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

	if (opts.ignoreOwnVisits) xhr.withCredentials = true

	xhr.send(JSON.stringify({ query, variables }))
}

/**
 * Creates a new record on the server and updates the record
 * every x seconds to track the duration of the visit.
 * @param {String} server - URL of the Ackee server.
 * @param {String} domainId - Id of the domain.
 * @param {Object} attrs - Attributes that should be transferred to the server.
 * @param {Object} opts
 * @param {Function} active - Indicates if the record should still update.
 * @returns {?*}
 */
const record = (
	server: string,
	domainId: string,
	attrs: any,
	opts: any,
	active: any,
) => {
	if (
		opts.ignoreLocalhost === true &&
		isLocalhost(location.hostname) === true
	) {
		return console.warn('Ackee ignores you because you are on localhost')
	}

	if (isBot(navigator.userAgent) === true) {
		return console.warn('Ackee ignores you because you are a bot')
	}

	const url = endpoint(server)

	const createQuery = `
		mutation createRecord($domainId: ID!, $input: CreateRecordInput!) {
			createRecord(domainId: $domainId, input: $input) {
				payload {
					id
				}
			}
		}
	`

	const createVariables = {
		domainId,
		input: attrs,
	}

	// Send initial request to server. This will create a new record.
	send(url, createQuery, createVariables, opts, (err: string, json: any) => {
		if (err != null) return console.error(err)

		const recordId = json.data.createRecord.payload.id

		if (isFakeRecordId(recordId) === true) {
			return console.warn(
				'Ackee ignores you because this is your own site',
			)
		}

		// PATCH the record constantly to track the duration of the visit
		const interval = setInterval(() => {
			if (active() === false) {
				clearInterval(interval)
				return
			}

			const updateQuery = `
				mutation updateRecord($id: ID!) {
					updateRecord(id: $id) {
						success
					}
				}
			`

			const updateVariables = {
				id: recordId,
			}

			if ('requestIdleCallback' in window) {
				requestIdleCallback(
					() => {
						send(
							url,
							updateQuery,
							updateVariables,
							opts,
							(err: string) => {
								if (err != null) return console.error(err)
							},
						)
					},
					{ timeout: 2000 },
				)
			} else {
				send(url, updateQuery, updateVariables, opts, (err: string) => {
					if (err != null) return console.error(err)
				})
			}
		}, 15000)
	})
}

/**
 * Looks for an element with Ackee attributes and executes Ackee with the given attributes.
 * Fails silently.
 */
export const detect = (): void => {
	const elem = document.querySelector('[data-ackee-domain-id]')

	if (elem == null) return

	const server: string = elem.getAttribute('data-ackee-server') || ''
	const domainId: string = elem.getAttribute('data-ackee-domain-id') || ''
	const opts = elem.getAttribute('data-ackee-opts') || '{}'

	create({ server, domainId }, JSON.parse(opts)).record()
}

/**
 * Creates a new instance.
 * @param {Object} server - Server details.
 * @param {?Object} opts
 * @returns {Object} instance
 */

export const create = (
	{ server, domainId }: ServerDetails,
	opts: TrackingOptions = {
		detailed: false,
		ignoreLocalhost: true,
		ignoreOwnVisits: false,
	},
): AckeeInstance => {
	let globalExecutionId: number

	// Return the instance
	return {
		// Creates a new record on the server and updates the record
		// very x seconds to track the duration of the visit. Tries to use
		// the default attributes when there're no custom attributes defined.
		record: (attrs = attributes(opts.detailed)) => {
			// Manually stop updating
			let isStopped = false

			// Automatically stop updating when calling the record function, again
			const localExecutionId: number = (globalExecutionId = Date.now())

			// Helper function that checks if the record should still update
			const active = () =>
				isStopped === false && localExecutionId === globalExecutionId

			// Call this function to stop updating the record
			const stop = () => {
				isStopped = true
			}

			if ('requestIdleCallback' in window) {
				requestIdleCallback(
					() => {
						record(server, domainId, attrs, opts, active)
					},
					{ timeout: 2000 },
				)
			} else {
				record(server, domainId, attrs, opts, active)
			}

			return {
				stop,
			}
		},
	}
}

// Only run Ackee automatically when executed in a browser environment
if (isBrowser === true) {
	detect()
}
