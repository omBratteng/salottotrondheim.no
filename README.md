<h1 align="center">Welcome to @bratteng/salottotrondheim.no 👋</h1>
<p align="center">
  <a aria-label="License" href="LICENSE">
    <img alt="" src="https://img.shields.io/badge/License-BSD%203%20Clause-green?style=for-the-badge&labelColor=000" />
  </a>
</p>

> Salotto Trondheim's website built with Next.js

### 🏠 [Homepage](https://salottotrondheim.no)

### Generating fonts
To generate the base64 fonts we need, we'll run [`webfont-dl`](https://github.com/mmastrac/webfont-dl).
For `bestill time` button
```sh
 npx webfont-dl "https://fonts.googleapis.com/css2?family=Rozha+One&display=swap&text=bestil%20m" \
	-o bold.css \
	--eot=omit \
	--ttf=omit \
	--woff1=omit
```

For italic (300)
```sh
 npx webfont-dl 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap&text=Salotpersn%C2%ADvk%C3%A6igH%20y%3FPfmjd%2Cu-.b%C3%A5Fh%C2%AB%C2%BBNG%C3%B8(c)%C2%A0IAV%3BzD%C3%A9KO%40T26701%2B435%3A89%C3%98L%E2%88%92%7CMCBY%E2%80%94%C2%A9%E2%86%91%0A%E2%86%93%5B%5D!E%2Fx' \
	-o bold.css \
	--eot=omit \
	--ttf=omit \
	--woff1=omit --woff2=link
```

For italic (300)
```sh
 npx webfont-dl "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap&text=kortmediulang1%2F2%20hxsjvpby%2B%5B%C3%A5%5Df" \
	-o bold.css \
	--eot=omit \
	--ttf=omit \
	--woff1=omit --woff2=link
```

For bold (500)
```sh
 npx webfont-dl "https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap&text=hos%20finerdupkt%3ASlv%C3%A5KLPmONTAF%C3%98Gac%40.%C2%AD%C3%A6gHy%3FIj()b72" \
	-o bold.css \
	--eot=omit \
	--ttf=omit \
	--woff1=omit
```

## Author

👤 **Ole-Martin Bratteng**

* Github: [@omBratteng](https://github.com/omBratteng)

## 📝 License

Copyright © 2020 [Bratteng Solutions AS](https://github.com/bratteng).<br />
This project is [BSD-3-Clause](LCIENS) licensed.
