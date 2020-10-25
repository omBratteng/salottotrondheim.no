import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
	grid-column: 2;

	@media (min-width: 768px) {
		column-count: 2;
		column-gap: calc((8.3333333333vw * 1) - 3rem);
	}

	ul {
		list-style: none;
		margin: 0 0 40px 0;
		padding: 0;
		transition: all ease-in-out 0.1s;
	}

	li {
		align-items: center;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'%3E%3Cpath fill='%23A7A69C' d='M4 4.26V3.18L4.08 3h1.71l.21.09v1.82L5.81 5h-1.6l-.13-.11z'/%3E%3C/svg%3E");
		background-position: left bottom 0.25em;
		background-repeat: repeat-x;
		background-size: 10px;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	span {
		background-color: #fff;
		color: #000;
		display: inline-block;
		font-size: 18px;
		line-height: 1.6;
		padding: 0 5px;
		font-size: 1.5rem;

		&.hidden {
			visibility: hidden;
		}
	}

	small {
		color: #555;
		font-size: 80%;
		font-style: italic;
	}
`

const PriceList = () => {
	return (
		<Wrapper>
			<ul>
				<li>
					<span>klipp</span>
					<span>790,- / 890,-</span>
				</li>
				<li>
					<span>barn</span>
					<span>600,-</span>
				</li>
			</ul>

			<ul>
				<li>
					<span>helfarge</span>
					<small>kort</small>
					<span>1 350,-</span>
				</li>
				<li>
					<span className="hidden">helfarge</span>
					<small>medium</small>
					<span>1 650,-</span>
				</li>
				<li>
					<span className="hidden">helfarge</span>
					<small>langt</small>
					<span>1 850,-</span>
				</li>
			</ul>

			<ul>
				<li>
					<span>foliefarging kort hår</span>
					<small>1/2 hode</small>
					<span>1 550,-</span>
				</li>
				<li>
					<span className="hidden">foliefarging kort hår</span>
					<small>1/1 hode</small>
					<span>1 650,-</span>
				</li>
			</ul>

			<ul>
				<li>
					<span>foliefarging langt hår</span>
					<small>1/2 hode</small>
					<span>1 750,-</span>
				</li>
				<li>
					<span className="hidden">foliefarging langt hår</span>
					<small>1/1 hode</small>
					<span>2 050,-</span>
				</li>
				<li>
					<span className="hidden">foliefarging langt hår</span>
					<small>extra 1/1</small>
					<span>2 350,-</span>
				</li>
			</ul>

			<ul>
				<li>
					<span>hårkur</span>
					<span>250,-</span>
				</li>
				<li>
					<span className="hidden">hårkur</span>
					<small>med massasje</small>
					<span>450,-</span>
				</li>
			</ul>

			<ul>
				<li>
					<span>vask eller styling</span>
					<span>250,- / 400,-</span>
				</li>
				<li>
					<span>vask og føn</span>
					<span>550,-</span>
				</li>
			</ul>

			<ul>
				<li>
					<span>farging</span>
					<small>av vipper</small>
					<span>330,-</span>
				</li>
				<li>
					<span className="hidden">farging</span>
					<small>av bryn</small>
					<span>250,-</span>
				</li>
				<li>
					<span className="hidden">farging</span>
					<small>av vipper + bryn</small>
					<span>450,-</span>
				</li>
			</ul>

			<ul>
				<li>
					<span>strukturendring kort</span>
					<span>1 150,-</span>
				</li>
			</ul>

			<ul>
				<li>
					<span>makeup</span>
					<span>500,-</span>
				</li>
				<li>
					<span>oppsetting pr 1/2 time</span>
					<span>550,-</span>
				</li>
			</ul>

			<ul>
				<li>
					<span>brudepynt pr time</span>
					<span>1 300,-</span>
				</li>
			</ul>
		</Wrapper>
	)
}

export default PriceList
