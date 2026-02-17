---
title: mimic-css
---

### Overriding Media Breakpoints

To change the pixel values for each of the media breakpoints specify the new values in the 'mediaBreakPointsValueOverride' object of the mimic.config.js file. No need to add the 'px' suffix here as this will automatically be added by mimic-css for us.

Example:

```js
let config;

export default config = {
  mediaBreakPointsValueOverride: {
    extrasmall: "1000",
    small: "1010",
    medium: "1020",
    large: "1030",
    extralarge: "1040",
  },
};
```

### Overriding Media Tags

To change the text that is used to specify a Media breakpoint use the 'MediaBreakPointsTextOverride' object in the mimic.config.js file

Example:

```js
let config;

export default config = {
  MediaBreakPointsTextOverride: {
    extrasmall: "xsmall",
    small: "sm",
    medium: "normal",
    large: "big",
    extralarge: "vbig",
  },
};
```

### Overriding Snapping Tags

To change the text that is used on the snapping tags use the 'SnappingOverride' object in the mimic.config.js file.

```js
  SnappingOverride: {
    xs: "xsmall",
    sm: "small",
    md: "medium",
    lg: "big",
    xl: "verybig",
    xl2: "crazybig",
  },
```
