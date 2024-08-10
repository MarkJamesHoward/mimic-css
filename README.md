# mimic-css

**mimic-css** is a design system that allows the use of standard CSS styles within the class attribute ALONG with Media Queries and Modifiers. From this you gain the benefits of using a design system but without the downside of losing your CSS knowledge
at the same time

So you are enabled to write standard CSS (**No spaces though!**) such as `display:flex` and apply a media query inline within the class e.g.

```html
<div class="large?display:flex">Some Text</div>
```

Which will result in the below class being generated for you and ensuring that the flex container is only applied when the screen size is greater than 1280px wide

```css
@media (min-width: 1280px) {
  .large\?display\:flex {
    display: flex;
  }
}
```

## Design System

To ensure consistency there is a set of standard Tags that can be used in place of specific pixel values.

These Tags are used across the board keeping the learning curve simple

| Tag | Description |
| -------- | ------- |
| **xs** | extra small |
| **sm** | small |
| **md** | medium |
| **lg** | large |
| **xl** | extra large |
| **2xl**  | extra extra large |

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

| Tag    | Value |
| -------- | ------- |
| xs  | 8px    |
| sm | 12px    |
| md    | 16px    |
| lg    | 24px    |
| xl    | 48px   |
| 2xl    | 92px   |


Whereas for **Padding** the mappings will be different:


| Tag    | Value |
| -------- | ------- |
| xs  | 2px    |
| sm | 4px    |
| md    | 8px    |
| lg    | 20px    |
| xl    | 50px   |
| 2xl    | 200px   |

And then for **Line height** they map to percentages

| Tag    | Value |
| -------- | ------- |
| xs  | 100%    |
| sm | 120%     |
| md    | 140%    |
| lg    | 160%    |
| xl    | 200%    |
| 2xl    | 240%    |



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

### options:

| option    | Default | Alias |
| -------- | ------- | ------- |
| -i | ./ | input   |
| -o | ./mimic.css | output   |
| -e | <N/A> | exclude   |
| -l | <N/A> | lit   |


## Configuration

By default mimic-css will search ".html", ".js", ".astro", ".ts"  files for classes to process

In order to serch additional files we can create a file named **'mimic.config.mjs'** and specify the extensions to search. 

So to also search jsx and react files in addition to the defaults we would create the below:

```js
let config;

export default config = {
  extensions: [".html", ".js", ".astro", ".ts", ".jsx"],
};
```

## Lit Integration

To include CSS in LitElements a good approach to take is Constructable Style Sheets. These require the CSS to be in a JS string and mimic-css provide this output in the file **mimic.css.js** for us when using the -l flag.

The generated file can be imported to a LitElement using the below syntax

```javascript
import { TWStyles } from "../styles/mimic.css.js";

export class Header extends
  LitElement { static styles = [css``, TWStyles];
```
