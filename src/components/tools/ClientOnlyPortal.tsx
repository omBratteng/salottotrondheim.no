import type { ReactPortal, ReactNode } from 'react'
import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface IClientOnlyPortal {
	children: ReactNode
	selector: string
}

type TClientOnlyPortal = ({ children, selector }: IClientOnlyPortal) => ReactPortal | null

const ClientOnlyPortal: TClientOnlyPortal = ({ children, selector }) => {
	const ref = useRef<Element | null>()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector(selector)

		if (!ref.current) {
			throw new Error(`The element ${selector} wasn't found`)
		}

		setMounted(true)
	}, [selector])

	return ref.current && mounted ? createPortal(<>{children}</>, ref.current) : null
}

export default ClientOnlyPortal
