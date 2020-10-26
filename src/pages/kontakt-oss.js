import { useEffect } from 'react'
import styled from 'styled-components'

import { scrollToBottom } from 'scrollTo'
import { useLayout } from 'components/layout/Layout'

const Wrapper = styled.section`
	grid-column: 2;

	h1 {
		font-size: 3rem;
		margin: 0.83em 0 1.5em;
	}

	h4 {
		font-size: 1.3rem;
		margin: 1.33em 0;
	}

	p {
		margin-bottom: 2em;

		&:last-child {
			margin-bottom: 0;
		}
	}

	h1,
	h4,
	p {
		text-align: center;
	}
`

const Index = () => {
	const { setPageTitle } = useLayout()

	useEffect(() => {
		setPageTitle('kontakt oss')
	})

	return (
		<>
			<Wrapper>
				<h1>kontakt oss</h1>
				<h4>
					<a href="mailto:ciao@salottotrondheim.no">
						ciao@salottotrondheim.no
					</a>
				</h4>
				<p>
					<a href="tel:+4773505051">+47 73 50 50 51</a>
				</p>

				<p>
					<a href="#" onClick={scrollToBottom}>
						Besøk oss ↓
					</a>
				</p>
			</Wrapper>
		</>
	)
}

export default Index
