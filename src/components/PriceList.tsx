import type { PriceListInterface } from 'utils/getPricelist'
import styled from 'styled-components'

const ProductGroup = styled.ul`
	list-style: none;
	margin: 0 0 40px 0;
	padding: 0;
	transition: all ease-in-out 0.1s;
`

const Product = styled.li`
	align-items: center;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42 34'%3E%3Cpath fill='%23a7a69c' d='M17 13h8v8h-8z' /%3E%3C/svg%3E%0A");
	background-position: left bottom 0.25em;
	background-repeat: repeat-x;
	background-size: 10px;
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const Option = styled.small`
	color: #555;
	font-size: 0.625rem;
	font-style: italic;
`

const Span = styled.span`
	background-color: #fff;
	color: #000;
	display: inline-block;
	font-size: 1rem;
	line-height: 1.6;
	padding: 0 5px;

	&.hidden {
		visibility: hidden;
	}

	@media (min-width: 375px) {
		font-size: 1.25rem;
	}

	@media (min-width: 425px) {
		font-size: 1.375rem;
	}
`

const Comment = styled(Span)`
	font-size: 0.95rem;
	font-style: italic;
	text-align: center;
	width: 100%;
`

interface IPriceList {
	priceList: PriceListInterface
}

const formatCurrency = (number: number): string => {
	return `${number.toLocaleString('no-NB')},-`
}

const PriceList = ({ priceList }: IPriceList): JSX.Element => {
	return (
		<>
			{priceList.map((group, groupKey) => (
				<ProductGroup key={`priceGroup-${groupKey}`}>
					{group.prices.map((product, productKey) => (
						<Product key={`priceGroup-${groupKey}-${productKey}`}>
							<Span className={group.name && productKey !== 0 ? 'hidden' : undefined}>
								{group.name ?? product.name}
							</Span>
							{group.name && <Option>{product.name}</Option>}
							{product.price && <Span>{product.price.map((price) => formatCurrency(price)).join(' / ')}</Span>}
						</Product>
					))}
					{group.comment && (
						<Product>
							<Comment>{group.comment}</Comment>
						</Product>
					)}
				</ProductGroup>
			))}
		</>
	)
}

export default PriceList
