# Subfont Font-Weight Issue (Example Project)

This project is an example of the default Gatsby starter, however, I don't think React/Gatsby are relevant to the issue this demo illustrates.

The project contains example text that is styled using the Google Font `Lora` (using the class `.lora` which is defined at the top of `src/components/layout.css`)

## How to test

### To view development version (without subfont):

Run the following:

```sh
cd gatsby-example-site
gatsby develop
```

Then, navigate to `http://localhost:8000` to view the site in your browser.

### To view the built version (including subfont)

Run the following:

```sh
gatsby build && subfont public -i --inline-css && gatsby serve
```

Then, navigate to `http://localhost:9000` to view the site in the browser.

## What you will see

1. Subfont works well for the statically rendered characters.
2. When new characters are dynamically added to the page, subfont DOES load the correct font for every character.
3. If all font-weights used in the dynamically-added content are also present in the static HTML, all characters in the dynamically-added content render correctly.
4. However, if a new font-weight appears in the dynamically-added content: 
  a. New characters that use the new font-weight will display correctly, but
  b. Reused characters (i.e. characters also present in the static HTML) will incorrectly retain the font-weight used in the static HTML (i.e. they will NOT be displayed in the new font-weight). 

## Conclusion

The issue which I thought was due to the original font not being applied to dynamically is actually just due to the wrong `font-weight` being applied to characters that also appear in the static HTML.