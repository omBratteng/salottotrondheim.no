import { createGlobalStyle } from 'styled-components'

// FontAwesome
// Add the css on the server side
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

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
.svg-inline--fa.fa-w-1{width:0.0625em;}
.svg-inline--fa.fa-w-2{width:0.125em;}
.svg-inline--fa.fa-w-3{width:0.1875em;}
.svg-inline--fa.fa-w-4{width:0.25em;}
.svg-inline--fa.fa-w-5{width:0.3125em;}
.svg-inline--fa.fa-w-6{width:0.375em;}
.svg-inline--fa.fa-w-7{width:0.4375em;}
.svg-inline--fa.fa-w-8{width:0.5em;}
.svg-inline--fa.fa-w-9{width:0.5625em;}
.svg-inline--fa.fa-w-10{width:0.625em;}
.svg-inline--fa.fa-w-11{width:0.6875em;}
.svg-inline--fa.fa-w-12{width:0.75em;}
.svg-inline--fa.fa-w-13{width:0.8125em;}
.svg-inline--fa.fa-w-14{width:0.875em;}
.svg-inline--fa.fa-w-15{width:0.9375em;}
.svg-inline--fa.fa-w-16{width:1em;}
.svg-inline--fa.fa-w-17{width:1.0625em;}
.svg-inline--fa.fa-w-18{width:1.125em;}
.svg-inline--fa.fa-w-19{width:1.1875em;}
.svg-inline--fa.fa-w-20{width:1.25em;}
.svg-inline--fa.fa-pull-left{margin-right:0.3em;width:auto;}
.svg-inline--fa.fa-pull-right{margin-left:0.3em;width:auto;}
.svg-inline--fa.fa-border{height:1.5em;}
.svg-inline--fa.fa-li{width:2em;}
.svg-inline--fa.fa-fw{width:1.25em;}

${'' /* ${dom.css()} */}
`

export { GlobalStyle, theme }