import type { SyntheticEvent } from 'react'
import { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { useApp } from 'contexts/app'
import ClientOnlyPortal from 'components/tools/ClientOnlyPortal'

const Backdrop = styled.div`
	background-color: rgba(0, 0, 0, 0.97);
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 101;
`

const Modal = styled.div`
	background-color: white;
	bottom: 5%;
	left: 10%;
	position: absolute;
	right: 10%;
	top: 5%;

	iframe {
		height: 100%;
		width: 100%;
	}
`

const BookingFrame = (): JSX.Element => {
	const modalRef = useRef<HTMLDivElement | null>(null)

	const { modalOpen, setModalOpen } = useApp()

	const closeModal = useCallback(() => {
		if (setModalOpen) setModalOpen((prevState: boolean) => !prevState)
	}, [setModalOpen])

	const onKeydown = useCallback(
		(event) => {
			if (event.key === 'Escape') closeModal()
		},
		[closeModal],
	)

	const handleClickOutside = (event: SyntheticEvent) => {
		if (event.target !== modalRef.current) {
			closeModal()
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', onKeydown)

		return () => {
			window.removeEventListener('keydown', onKeydown)
		}
	}, [modalOpen, onKeydown])

	return (
		<>
			{modalOpen && (
				<ClientOnlyPortal selector="#booking">
					<Backdrop onClick={handleClickOutside}>
						<Modal ref={modalRef}>
							<iframe
								src="https://frisorsalotto.bestille.no/OnCust2/#!/"
								frameBorder="0"
								title="Booking av time"
							></iframe>
						</Modal>
						<style jsx>{`
							:global(body) {
								overflow: hidden;
							}
						`}</style>
					</Backdrop>
				</ClientOnlyPortal>
			)}
		</>
	)
}

export default BookingFrame
