import styled from 'styled-components'

import Image from 'next/image'

import list from 'components/employees/list'
import { Section } from 'components/layout/section'

const Name = styled.p`
	font-size: 2.25rem;
	font-weight: 500;
	margin-bottom: 0.83em;
`

const Wrapper = styled(Section)`
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	display: grid;
	grid-column-gap: 2rem;
	grid-template-columns: 1fr;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`

const Description = styled.div`
	margin-bottom: 1.5rem;
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

	&:last-child {
		border-bottom: 0;
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

const Employees = (): JSX.Element => {
	return (
		<Wrapper aria-label="oversikt over ansatte">
			{list.map(({ name, description, image }, index) => (
				<Employee key={`employee-${index}`}>
					<Name>{name}</Name>
					<Description>{description}</Description>
					<Image
						src={`/assets/employees/${image}`}
						alt={`portrett bilde av ${name}`}
						width="444"
						height="650"
					/>
				</Employee>
			))}
		</Wrapper>
	)
}

export default Employees
