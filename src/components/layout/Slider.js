import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
	background-color: ${(props) => props.theme.colors.blue};
	grid-column: 1 / 4;
	height: 35rem;
	width: 100%;
`

const Slider = () => {
	return <Wrapper></Wrapper>
}

export default Slider
