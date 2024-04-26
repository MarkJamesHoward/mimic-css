# mimic-css

**mimic-css** is a design system that allows you use standard CSS styles within the class attribute ALONG with Media Queries and modifiers.

So we can write standard CSS such as `display:flex` and apply a media query inline within the class e.g.

`<div class="large?display:flex"> Some Text </div>`

Which will result in the below class being generated for us and ensuring that the flex container is only applied when the screen size is greater than 1280px wide

`@media (min-width: 1280px) {
.large\?display\:flex {
	display: flex;
	}
}`

We can also apply selectors like **hover** also inline with the class attribute

`<div class="background-color:blue:hover"> Some Text </div>`

Which will create a class for us like this

`.background-color\:blue\:hover:hover {
	background-color: blue;
}`

From this we gain the benefits of using a design system but without the downside of losing your CSS knowledge
at the same time

## Install:

npm i -D mimic-css

## Usage

npx mimic-css

This will search in the current folder (and all subfolders) for .html, .ts, .js and .astro files.
Ouput will be sent to the file mimic-css.css

we can override these defaults as below to specify a specific folder to monitor (**src**) and the output filename to use (**mimic.css**)
npx mimic-css -i ./src/ -o ./src/mimic.css

<ul>
   <li>  i: { type: "string", default: "./", alias: "input" },</li>
    <li> o: { type: "string", default: "./mimic.css", alias: "output" },</li>
    <li> e: { type: "string", default: "", alias: "exclude" },</li>
    <li> l: { type: "boolean", default: false, alias: "lit" },</li>
</ul>

`

<head>
    <link rel="stylesheet" href="./mimic.css" />
</head>
`

`

<div class="flex-direction:row large?flex-direction:column display:flex">
`

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

So for **Fonts** we'll have the below mapping:

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

`

<div class="padding-top:md"> Some Text </div>
`

**becomes**

`.padding-top\:md {
	padding-top: 8px;
}`

### And then for Font Size we'd see

`

<div class="font-size:md"> Some Text </div>
`

`.font-size\:md {
	font-size: 16px;
}`

Normal CSS will simply be mapped to the same but with a space included

**So the below:**

`

<div class="flex-direction:row"> Some Text</div>
`

**Becomes:**

`.display\:flex {
	display: flex;
}`

## Media Breakpoints

The 5 options we have for specifying media breakpoints are below:

<ul>
<li>extrasmall</li>
<li>small</li>
<li>medium</li>
<li>large</li>
<li>extralarge</li>
</ul>
