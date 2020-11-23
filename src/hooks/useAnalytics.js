import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

const useAnalytics = ({ domainId, server, options = {} }) => {
	const router = useRouter()
	const tracker = useRef()

	const recordVisit = () => tracker.current.record()

	useEffect(() => {
		;(async () => {
			await import('ackee-tracker').then((ackeeTracker) => {
				tracker.current = ackeeTracker.create(
					{
						server,
						domainId,
					},
					options,
				)
			})

			recordVisit()
		})()

		router.events.on('routeChangeStart', recordVisit)

		return () => {
			router.events.off('routeChangeStart', recordVisit)
		}
	}, [router.events, domainId, server, options])

	return tracker.current
}

export default useAnalytics
