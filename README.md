# Subfont Font-Weight Issue (Example Project)

This project is an example of the default Gatsby starter (although I no longer believe React/Gatsby are relevant to the issue).

The project contains example text styled using the Google Font `Lora` and subset using `subset`.

The class `.lora` is declared at `line 1` of `src/components/layout.css`).

The `link` tag for the Google Font (which includes the font-weights `400` and `700`) is at `line 30` of `src/components/layout.js`.

The example paragraphs are at `line 20` of `src/pages/index.js` (in case you want to test what happens when you change their font-weights).

## To view development version (without subfont):

Run the following:

```sh
cd subfont-test
gatsby develop
```

Then, navigate to `http://localhost:8000` to view the site in your browser.

## To view the built version (including subfont)

Run the following:

```sh
gatsby build && subfont public -i --inline-css && gatsby serve
```

Then, navigate to `http://localhost:9000` to view the site in the browser.

## What you will see

1. Subfont works well for the statically rendered characters.
2. When new characters are dynamically added to the page, subfont loads the correct font for every character.
3. If all font-weights used in the dynamically-added content __are also present__ in the static HTML, all characters in the dynamically-added content render correctly.
4. However, __if a new font-weight appears__ in the dynamically-added content: 
    a. __New characters__ that use the new font-weight will display correctly, but
    b. __REUSED characters__ (i.e. characters also present in the static HTML) that use the new font-weight __will (incorrectly) retain the font-weight used in the static HTML__ (i.e. they will NOT use the new font-weight). 

## Conclusion

The issue is not due to the original font not being used by the new characters: the font is being used by all characters as expected. 

The actual issue is actually that when a new font-weight is used for dynamically-added content, the wrong `font-weight` is applied to any characters that also exist in the static HTML.