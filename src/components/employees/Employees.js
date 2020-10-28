import styled from 'styled-components'

import Image from 'next/image'

import list from 'components/employees/list'

const Name = styled.h1`
	font-size: 2.25rem;
	margin-bottom: 0.83em;
`

const Wrapper = styled.section`
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	display: grid;
	grid-column: 2;
	grid-column-gap: 2rem;
	grid-template-columns: 1fr;
	padding: 0 1.5rem 2.5rem;

	@media (max-width: 767px) {
		margin: 0 auto;
		max-width: 70ch;
	}

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`

const Description = styled.div`
	p {
		font-size: 1.125rem;
		line-height: 1.5;
		margin-bottom: 1.5em;
	}
`

const Employee = styled.div`
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	overflow-x: auto;
	padding-bottom: 2rem;

	${Name},
	${Description} {
		width: 100%;
	}

	@media (min-width: 768px) {
		border-bottom: 0;

		&:nth-of-type(even) {
			${Name} {
				margin-top: 1rem;
				order: 1;
			}
			${Description} {
				order: 2;
			}
		}
	}
`

const Employees = () => {
	return (
		<Wrapper>
			{list.map(({ name, description, image }, index) => (
				<Employee key={`employee-${index}`}>
					<Name>{name}</Name>
					<Description>{description}</Description>
					<Image
						src={`/assets/employees/${image}`}
						alt={name}
						width="444"
						height="650"
					/>
				</Employee>
			))}
		</Wrapper>
	)
}

export default Employees
