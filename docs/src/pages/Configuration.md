---
title: mimic-css
---

## Configuration

By default mimic-css will search ".html", ".js", ".astro", "ts" files for classes to process

In order to serch additional files we can create a file named 'mimic.config.mjs'

To also search jsx files we would create the below:

```js
let config;

export default config = {
  extensions: [".html", ".js", ".astro", "ts", "jsx"],
};
```
