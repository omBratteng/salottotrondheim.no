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
	grid-template-columns: 1fr 1fr;
	padding-bottom: 2.5rem;
`

const Description = styled.div`
	p {
		font-size: 1.125rem;
		line-height: 1.5;
		margin-bottom: 1.5em;
	}
`

const Img = styled.img`
	max-width: 100%;
	vertical-align: middle;
`

const Employee = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: auto;

	&:nth-of-type(even) {
		${Name} {
			order: 2;
		}
		${Description} {
			order: 3;
		}
		${Img} {
			margin-bottom: 1rem;
			order: 1;
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
