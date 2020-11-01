import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import PriceList from 'components/PriceList'

import { useApp } from 'contexts/app'
import { Section } from 'components/layout/section'
import { Book } from 'components/buttons'
import { H1, H2 } from 'components/text'

const ImageSection = styled(Section)`
	overflow: hidden;
	position: relative;

	.bookButton {
		bottom: 0;
		left: 50%;
		position: absolute;
		transform: translate3d(-50%, -50%, 0);
	}

	.mobile,
	.desktop {
		background-repeat: no-repeat;
		background-size: cover;
		filter: ${(props) => (props.isLoaded ? 'none' : 'blur(25px)')};
		transition: filter 0.5s ease;
	}

	.mobile {
		background-image: url('data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCABkAGQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDBAEF/8QAKhAAAgEEAgEEAQQDAQAAAAAAAAECAxEhMRJBBBMiUWGBMkJxkRQjYsH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGxEBAQEAAwEBAAAAAAAAAAAAAAERAjFBIRL/2gAMAwEAAhEDEQA/AE2tCfI+BbZwRpGd0voglzl8IpWk3LiuhqEFe7dy9I7TpJa/spwvhIqs/p/snOrGGERT3jQp/wDUiM6+W/qxCpVcnf8AAl7ssiWqVJ2pqJFMJPkwsaR25y4WCwQAFgA9FnNnWdgr7ObbJOL9R3RSEox2/wCssvUpqSsyUvFn+zJd0TqeRJq0faiF2y3+LVvmI8fFl2X5Ey1ls3ljcG+rI0Og49MRproupiXBL7OYKMRgKB0LFHAO2ADd/JSkrtkblvH/AFHNpyup+m+Gy1BR4L3PlbJyeVZrYjjUoTSX+xS6ltfkQaeL+bneAU89P8lGsBUnFWyjLUpwbNNVu2DHVbbAlNQgTp0Z15Wpxb+2Uwt5f2NF1JpU6btyfzs1qYSp4VWmruz/AIMzxi2j1ZUHShHlOTl3kyeZR4uMl2sklLPjLcAA0y2Z0NGXGSZO8rD0oupNRS2YabqKUmpPQ8oJtyW32LimlHoeLuFNCNklv7OTdkM3ZGepMDk5XM8430O5Ngo3Ckh4zktkuK9b0308M2c+EHx3pCU/FcXyqz9zy0kBSv7aCvl3sZPKeYRe0smnyaism17Y5z2zz5Sc5uT2xC9Fcc6AYDTD1XRj+3AJOC/9KAPzGJyqDcpO0ov6d9jUJPjLdrlTkngzZjpLscnLBnm7jzeBLXI0VLI2jqjZCykArllX6Y9TzKcV7Xd/BnnIjFJyKgq1Z1pXk/wcSLKmmLOPEumJ5AGwCPZOMANuIa5JrV/ghapGolyUo93VmXE9PjJyi3l5Rmt8K41dCWHkycpWRh1cnKyM06n2FWoZpSbLIlqkp4FhKzuxvS4U+c+9IjdzlZGsTWuFamlmSEqTTytEeNmorMmXnBUqa7kyYajeT0BojVhRiobfeOwKj0gADTkAACVZ2lUwjJOTADDszN3qJdNnaPvrwi9X0AGmR5c26jT0jlJJU7rb7AB4eq+JFepJ9rCI16knVedaABOzxHYABpl//9k=');
		display: block;

		> div {
			vertical-align: middle;
		}
	}

	.desktop {
		background-image: url('data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAApAGQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMEAQUC/8QAKxAAAgIBAwMDAQkAAAAAAAAAAQIAEQMEITESQVEiMnETIzM0QkNicoGR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgEAA//EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIhMf/aAAwDAQACEQMRAD8A6Bk+sF4b8GUReVOvGy+RMMQCFzB47jtC4XQrOaXbkwxoiY+puY0orYyW7TDoWcg9e3giVk+TUflTZREMSzXLX0RxixRk7Y2LUFJPgbxTEpO8Ziyvia1PyPM81R32mGVHY02cMoYcHkSkicTTZvp7EzrYMoyJVw/Gs17hNIhE5tswuZNkZNqcBa8mP3dx5knVfzOpF5NPjyGyN/IksOdJtP67T+5Vix9ANmx2nhcIxqQg55Nz07EJR57wnPSdSeoUDFYsbLmRW4begajAO5ng6jpBCpbnvMSbVqpe15reSmUsDuW5MQELNQEUCt+n9mHDcmqlOlcpR7XJyVS1G5vmUYlK4wDzzLUdRSGUEQkK5CoqEjZF0IQlcxCEJWHMURS+rmNitR7Iej4vqTUZ69KycsyZNxv3Hib+sP5CeD78vzJIdprtZDZKAq6kxcsT2BMZq/vj8CLx+8RQa6Oj0ClBky7k7hfEoOixfu/2M034fH8RpmFIdEl7M0JTCZNf/9k=');
		display: none;

		> div {
			vertical-align: middle;
		}
	}

	@media (min-width: 650px) {
		.mobile {
			display: none;
		}
		.desktop {
			display: block;
		}
	}
`

const Index = () => {
	const { setPageTitle } = useApp()
	const [isLoaded, setLoaded] = useState()

	useEffect(() => {
		setPageTitle('GI HODET EN AVKOBLING')
	})

	return (
		<>
			<ImageSection type="pseudo">
				<div className="mobile" style={{ filter: isLoaded && 'none' }}>
					<Image
						src={`/assets/img/cover-mobile.jpg`}
						width={650}
						height={650}
						alt="en kvinne med solhatt"
						onLoad={() => {
							setLoaded(true)
						}}
					/>
				</div>
				<div className="desktop" style={{ filter: isLoaded && 'none' }}>
					<Image
						src={`/assets/img/cover-desktop.jpg`}
						width={1600}
						height={650}
						alt="en kvinne med solhatt"
						onLoad={() => {
							setLoaded(true)
						}}
					/>
				</div>
				<Book bg={true} />
			</ImageSection>
			<Section style={{ textAlign: 'center' }}>
				<H1>prisliste</H1>
				<H2>Alle behandlinger kommer med et hygienetillegg på 72kr</H2>
			</Section>
			<PriceList />
			<Section style={{ textAlign: 'center' }}>
				<Book />
			</Section>
		</>
	)
}

export default Index
