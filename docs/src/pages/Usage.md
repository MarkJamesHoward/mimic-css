---
title: mimic-css
---

## Usage

`npx mimic-css`

The app will search in the current folder (and all subfolders) for .html, .ts, .js and .astro files.
Ouput will be sent to the file mimic.css which you can link:

```html
<link rel="stylesheet" href="mimic.css" />
```

You can override where to base your scan for web pages using the -i flag

```
npx mimic-css -i ./src
```

You can also override where to output the generated CSS file using the -o flag

```
npx mimic-css -o ./styles/customname.css
```

Other options:

- i: { type: "string", default: "./", alias: "input" },
- o: { type: "string", default: "./mimic.css", alias: "output" },
- e: { type: "string", default: "", alias: "exclude" },
- l: { type: "boolean", default: false, alias: "lit" },
