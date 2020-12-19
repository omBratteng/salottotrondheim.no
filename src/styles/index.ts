import getConfig from 'next/config'
import { createGlobalStyle } from 'styled-components'

const { publicRuntimeConfig } = getConfig()
const { assetPrefix } = publicRuntimeConfig

// FontAwesome
// Add the css on the server side

import { theme } from 'styles/theme'

const GlobalStyle = createGlobalStyle`
:root {
	box-sizing: border-box;
	font-family: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
		Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	font-size: 1rem;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	font-style: normal;
	font-weight: 300;
	line-height: var(--global-line-height);
	-ms-overflow-style: -ms-autohiding-scrollbar;
	text-rendering: optimizeLegibility;
	text-size-adjust: 100%;
}

html,
body,
#__next { height: 100%; }

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	background: ${(props) => props.theme.background};
	color: ${(props) => props.theme.font};
	font-feature-settings: "liga" 1, "lnum" 1, "tnum" 1;
	font-variant-ligatures: common-ligatures;
	margin: 0;
	transition: background 0.5s ease, color 0.5s ease;

	@supports not (font-variant-ligatures: common-ligatures) {
		font-feature-settings: "liga";
	}
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
	font-weight: 500;
}

a {
	color: ${(props) => props.theme.font};
}

svg:not(:root).svg-inline--fa{overflow:visible;}
.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em;}
.svg-inline--fa.fa-lg{vertical-align:-0.225em;}
.svg-inline--fa.fa-fw{width:1.25em;}

@font-face {
	font-display: swap;
	font-family: 'Rozha One';
	font-style: normal;
	font-weight: 400;
	src: url("data:application/x-font-woff2;base64,d09GMgABAAAAAASYAA4AAAAACCQAAARFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhYbHhwoBmAAXBEICoUYhCcLFAABNgIkAyQEIAWFKAcgG6wGyAQeeDqt9yfpbtB6Fk6pKalUWGhyhpIc7Bx/77Rn4QLcwin92brm1E1zUxEHNvb0MNDAMQ3xajoQD97gaATgjGqXEBLoIj8Y2I10kZtfWosOba/R4XiEshUBAkiI9Oztm+vCVS55pLdW2idOwQkkVWqEqiQJE+0oQv5WsVslSlsV1eZX8AgmzJrP/28GzefiKmbk9LvYL0hRThMGspmgAWQ0SqqMlkLAFYskNmGimz6GGMNMR1pljTLzE8dHjkscFznOd5zrOOPXJBWecDhwA32k9pwlxutm4fqAWjtnRKCW5g7Hd2q1+m1emw06Q1TYjg6ti9Ogk4u2YcNqse+3qWFvvaE+d9996g0YnAzCyPl2o8XKxhs9zlajxR665YY3VJvNJvbbLdZO436b+gYNRgzCqGGZ9lfU1/a/bnm1oUE8q1ruHrn/MYP6TNCFSEacy9ZM6ZkwrrcbLXXhffRYxH6bzWaz2y3WPefe8MR9F98s9tvUFzasViuBO1Tb3vNufvreC25gw9rCxoVbzrVs4wGDahNv+bfutjcYMfKV2rSzqUJ98MiDvHp+qXd2SdLki6lj1WtPruV55Sw4L/hdvddLVeRnfv+7cG9Q6eSh+fzwHj56OkJ/87pP/b7Ut2qHIodq5IrosJ6CxcPmh9fWIxYvbw04Xu9/qJ4fvBT5b1m5Ikh+SNfhU6QUxRT58oOXIv8tK3OK/AwJyIr8t6xsLzg/ZHuK7vZMSZG1cur2gvNDknZ1KPLfsnKFIj8TG1zpFznvm31xnU/UbY+i2TyYZCoI6tvR7Z1ZZJwfL7u8J6Yl+cT9FTteMXhkutfVJWYHdmxv35udE5vXVf3UUkp78oVTPe/Lrdv54O5f699Y+arkK/mnpNqGigFjsVz8R1GpS47ruWZ5q8wGUeY6GXvS1g631N90es2XLMDLXx3fkiywKu4+/336f7OuXfM5bEz6BWpz160L++/TP1/StW9Bcb30PXdg7ytFYJA07BWZBAVMzSMx4h32iaEfu/UcOMRlXycEh47+46HUbmP3EfFAIRB4iusEEq7iAo+GePGoQIuPyBU48SO1xMFSx8LuSiweHcSMmUmSiSSSGXqYZohJzMwQwcyR+0QEE0wzQCQV5FNKNRMsMUgXFYzTRzjV9DHALKN0MU09fZx47bQJxjERTQQxRBFNCpXUNAZFkcIgE5jpeUQ717UoggQSSWGMLkbou92rnwhGGaIbhaG4YDzRJH1SmXLhkDy0i1nMTHD7EOOK3UQQCHlwNMGYCGcUEwkZmnYqJCqogBtHFCxQgBigXGI8YB7D4HD6MdFLH3N0VdF8ZcFcqE2KJFPJ6FtXRC35VJAyh2UrZX8QmcMEkyyuFgysIjFW6BklKD9SxCKziHF6GaKLfrCWRSbJ2fOZkIluDLD4EjFfwX4myMykj6vNcnW/DBEr5hwj+BrHtVqOO1FwAQAA") format("woff2");
}
@font-face {
	font-display: swap;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 300;
	src: local('Roboto'),
		url('${assetPrefix}/assets/fonts/roboto-aa15f90aa29a18c813f9f34597b779f01222af95.woff2') format('woff2');
}
@font-face {
	font-display: swap;
	font-family: 'Roboto';
	font-style: italic;
	font-weight: 300;
	src: local('Roboto'),
		url('${assetPrefix}/assets/fonts/roboto-8370d7348c62e9e25631cb33454da110fa57afd0.woff2') format('woff2');
}
@font-face {
	font-display: swap;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	src: local('Roboto'),
		url('${assetPrefix}/assets/fonts/roboto-e55fb552fb1e9cf4a64979459c04857d19daaef6.woff2') format('woff2');
}
`

export { GlobalStyle, theme }
