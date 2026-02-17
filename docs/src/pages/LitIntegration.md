---
title: mimic-css
---

## Lit Integration

LitElement is happiest when its CSS is provided in a Constructable Style Sheet. These require the CSS to be in a JS string and mimic-css provides this output in the file **mimic.css.js** for us when using the -l flag.

The generated file can be imported to a LitElement using the below syntax

```javascript
import { TWStyles } from "../styles/mimic.css.js";

export class Header extends
  LitElement { static styles = [css``, TWStyles];
```