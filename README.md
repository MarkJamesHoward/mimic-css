# mimic-css

**mimic-css** is a design system that allows you use standard CSS styles within the class attribute ALONG with Media Queries and Modifiers.

So you are enabled to write standard CSS such as `display:flex` and apply a media query inline within the class e.g.

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

You can also apply selectors like **hover** also inline with the class attribute

```html
<div class="background-color:blue:hover">Some Text</div>
```

Which will create a class for you like this

```css
.background-color\:blue\:hover:hover {
  background-color: blue;
}
```

From this you gain the benefits of using a design system but without the downside of losing your CSS knowledge
at the same time

## Install:

`npm install --save-dev mimic-css`

mimic-css is a development time process that watches for file changes to your web pages and create classes from them.

## Usage

`npx mimic`

The app will search in the current folder (and all subfolders) for .html, .ts, .js and .astro files.
Ouput will be sent to the file mimic.css

You can override where to base your scan for web pages using the -i flag

```
npx mimic-css -i ./src/
```

You can also override where to output the generated CSS file using the -o flag

```
npx mimic-css -o ./styles/mimic.css
```

Other options:

- i: { type: "string", default: "./", alias: "input" },
- o: { type: "string", default: "./mimic.css", alias: "output" },
- e: { type: "string", default: "", alias: "exclude" },
- l: { type: "boolean", default: false, alias: "lit" },

## Magic Numbers

In order to reduce the amount of time spent looking up magic names in mimic-css there
is **one** set of values used across the board:

<ul>
<li>xs</li>
<li>sm</li>
<li>md</li>
<li>lg</li>
<li>xl</li>
<li>2xl</li>
</ul>

These specifiers will map to different **Pixel Values** depending upon the usage.

So for **Fonts** you'll have the below mapping:

<ul>
<li>xs:     8px</li>
<li>sm:     12px</li>
<li>md:     16px</li>
<li>lg:     24px</li>
<li>xl:     48px</li>
<li>2xl:    92px</li>
</ul>

Whereas for **Padding** the mappings will be different:

<ul>
<li>xs:     2px</li>
<li>sm:     4px</li>
<li>md:     8px</li>
<li>lg:     20px</li>
<li>xl:     50px</li>
<li>2xl:    200px</li>
</ul>

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

Normal CSS will remain unchanged (bar a space inserted)

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

## Media Breakpoints

The 5 options we have for specifying media breakpoints are below:

<ul>
<li>extrasmall</li>
<li>small</li>
<li>medium</li>
<li>large</li>
<li>extralarge</li>
</ul>
