# MIMIC CSS

A design system that allows the use of standard CSS styles within the class attribute ALONG with Media Queries and Modifiers.

Advantages:

1. No need to learn **MAGIC** utility names for existing CSS Styles
2. Grow your CSS knowledge while reaping the rewards of using a Design System at the same time

Write standard CSS (**No spaces though!**) such as `display:flex` and apply a media query inline within the class

#### Example

```html
<div class="large?display:flex">Some Text</div>
```

Generates the below class ensuring that the flex container is only applied when the screen size is greater than 1280px wide

```css
@media (min-width: 1280px) {
  .large\?display\:flex {
    display: flex;
  }
}
```

## Media BreakPoints

<ul>
  <li>xs</li>
  <li>sm</li>
  <li>md</li>
  <li>lg</li>
  <li>xl</li>
</ul>

## Design System

To ensure consistency there is a set of standard Tags that can be used in place of specific pixel values.

These Tags are used across the board keeping the learning curve simple

| Tag     | Description       |
| ------- | ----------------- |
| **xs**  | extra small       |
| **sm**  | small             |
| **md**  | medium            |
| **lg**  | large             |
| **xl**  | extra large       |
| **2xl** | extra extra large |

```html
<div class="padding-top:md">Some Text</div>
```

**becomes**

```css
.padding-top\:md {
  padding-top: 8px;
}
```

These Tags will map to different **Pixel Values** depending upon the usage.

So for **Fonts** we have the below mapping:

| Tag | Value |
| --- | ----- |
| xs  | 8px   |
| sm  | 12px  |
| md  | 16px  |
| lg  | 24px  |
| xl  | 48px  |
| 2xl | 92px  |

Whereas for **Padding** the mappings will be different:

| Tag | Value |
| --- | ----- |
| xs  | 2px   |
| sm  | 4px   |
| md  | 8px   |
| lg  | 20px  |
| xl  | 50px  |
| 2xl | 200px |

And then for **Line height** they map to percentages

| Tag | Value |
| --- | ----- |
| xs  | 100%  |
| sm  | 120%  |
| md  | 140%  |
| lg  | 160%  |
| xl  | 200%  |
| 2xl | 240%  |

### An example for Padding

```html
<div class="padding-top:md">Some Text</div>
```

**becomes**

```css
.padding-top\:md {
  padding-top: 8px;
}
```

### And then for Font Size you will see

```html
<div class="font-size:md">Some Text</div>
```

```css
.font-size\:md {
  font-size: 16px;
}
```

### Normal CSS will remain unchanged (bar a space inserted)

**So the below:**

```html
<div class="display:flex">Some Text</div>
```

**Becomes:**

```css
.display\:flex {
  display: flex;
}
```

## Pseudo Classes

You can also apply pseudo class like **hover** and **focus** inline with the class attribute

```html
<div class="background-color:blue:hover">Some Text</div>
```

Which will create a class for you like this

```css
.background-color\:blue\:hover:hover {
  background-color: blue;
}
```

## Custom Classes

To create a class in place we can use the @ symbol to combine css into a class

```html
<div class="padding:xl@btn border-radius:md@btn btn"></div>
```

Generated css for the above will be:

```css
.btn {
  padding: 50px;
  border-radius: 10px;
}
```

## Install:

`npm install --save-dev mimic-css`

mimic-css is a development time process that watches for file changes to your web pages and create classes from them.

## Usage

`npx mimic`

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

## Command Line Arguments

| option | Default     | Alias   |
| ------ | ----------- | ------- |
| -i     | ./          | input   |
| -o     | ./mimic.css | output  |
| -e     | <N/A>       | exclude |
| -l     | <N/A>       | lit     |

## Configuration [**'mimic.config.mjs'**]

Customisation can be applied within a file named **'mimic.config.mjs'**

### Overriding Files to Search

By default mimic-css will search ".html", ".js", ".astro", ".ts" files for classes to process

So to also search jsx files in addition to the defaults we would create the below:

```js
let config;

export default config = {
  extensions: [".html", ".js", ".astro", ".ts", ".jsx"],
};
```

### Color Palettes

#### There are 4 built in Color Palettes each of which can be customised

```js
color_palette_1 = {
  c1a: "#222831",
  c1b: "#393E46",
  c1c: "#00ADB5",
  c1d: "#EEEEEE",
};

color_palette_2 = {
  c2a: "#FFC7C7",
  c2b: "#FFE2E2",
  c2c: "#F6F6F6",
  c2d: "#8785A2",
};

color_palette_3 = {
  c3a: "#B7C4CF",
  c3b: "#EEE3CB",
  c3c: "#D7C0AE",
  c3d: "#967E76",
};

color_palette_4 = {
  c4a: "#F9ED69",
  c4b: "#F08A5D",
  c4c: "#B83B5E",
  c4d: "#6A2C70",
};
```

### Overriding Line Height Snapping

```js
let config;

export default config = {
  extensions: [".html"],
  lineHeightSnapping: {
    xs: "60%",
    sm: "120%",
    md: "140%",
    lg: "160%",
    xl: "200%",
    xl2: "240%",
  },
};
```

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

#### Creating Classes

To create a class in place we can use the @ symbol to combine css into a class

```html
<div class="padding:xl@btn border-radius:md@btn btn"></div>
```

Generated css for the above will be:

```html
.btn { padding: 50px; border-radius: 10px; }
```

## Specify folders to exclude

## Lit Integration

To include CSS in LitElements a good approach to take is Constructable Style Sheets. These require the CSS to be in a JS string and mimic-css provide this output in the file **mimic.css.js** for us when using the -l flag.

The generated file can be imported to a LitElement using the below syntax

```javascript
import { TWStyles } from "../styles/mimic.css.js";

export class Header extends
  LitElement { static styles = [css``, TWStyles];
```
