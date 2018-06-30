# Subfont Font-Weight Issue (Example Project)

This project is an example of the default Gatsby starter, however, I don't think React/Gatsby are relevant to the issue this demo illustrates.

The project contains example text that is styled using the Google Font `Lora` (using the class `.lora` which is defined at the top of `src/components/layout.css)

## How to test

To view development version (before subfont), run the following:

```sh
cd gatsby-example-site
gatsby develop
```

Then, navigate to `http://localhost:8000` to view the site in your browser.

To view the built version (including subfont), run the following:
```sh
gatsby build && subfont public -i --inline-css && gatsby serve
```

Then, navigate to `http://localhost:9000` to view the site in the browser.

## What you will see

1. Subfont works well for the statically rendered characters.
2. When new characters are dynamically added to the page, subfont loads the correct font for every character.
3. However, there is an issue with their font-weight of the dynamically-added characters: 
  a. If all font-weights used in the dynamically-added content are also present in the static HTML, everything works fine
  b. If a new font-weight appears in the dynamically-added content, new characters will display correctly, but repeated characters (i.e. characters that are also present in the static HTML), will NOT be displayed in the new font-weight (they will retain the font-weight used in the static HTML)




## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
