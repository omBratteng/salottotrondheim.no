import React, { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'

import { useApp } from 'contexts/app'
import ClientOnlyPortal from './tools/ClientOnlyPortal'

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

const BookingFrame = () => {
	const modalRef = useRef()

	const { modalOpen, setModalOpen } = useApp()

	const closeModal = useCallback(
		() => setModalOpen((prevState) => !prevState),
		[setModalOpen],
	)

	const onKeydown = useCallback(
		(event) => {
			if (event.key === 'Escape') closeModal()
		},
		[closeModal],
	)

	const handleClickOutside = (event) => {
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
		modalOpen && (
			<ClientOnlyPortal selector="#booking">
				<Backdrop onClick={handleClickOutside}>
					<Modal ref={modalRef}>
						<iframe
							src="https://frisorsalotto.bestille.no/oncust2#!?iframe=true&width=1200&height=100%"
							frameBorder="0"
						></iframe>
					</Modal>
					<style jsx>{`
						:global(body) {
							overflow: hidden;
						}
					`}</style>
				</Backdrop>
			</ClientOnlyPortal>
		)
	)
}

export default BookingFrame
