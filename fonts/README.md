# Bundled interface fonts

Two local CSS families, both covering every Kurdish letter (ڤ ێ ۆ ڕ ڵ ە ک گ ی):

| Family | Use | Arabic script | Latin |
|---|---|---|---|
| `Civil Defense UI` | Body text, controls | Vazirmatn | Vazirmatn |
| `Civil Defense Display` | Headings, titles, numbers in tiles | Noto Kufi Arabic | Vazirmatn |

The CSS variables `--font-body` and `--font-display` in `src/styles/index.css` point to these families; components use the variables, not the family names.

Unmodified WOFF2 variable-weight subsets (weights 100–900) from Fontsource packages `@fontsource-variable/vazirmatn@5.3.0` and `@fontsource-variable/noto-kufi-arabic@5.3.0`. Fonts load from this application, with no Google Fonts request. Both licenses (SIL OFL 1.1) are in this folder.

Sources: https://fontsource.org/fonts/vazirmatn, https://github.com/rastikerdar/vazirmatn, https://fontsource.org/fonts/noto-kufi-arabic, https://github.com/notofonts/arabic
