export const scrollToBottom = (event) => {
	event.preventDefault()
	window.scrollTo({
		top: document.body.scrollHeight,
		left: 0,
		behavior: 'smooth',
	})
}
