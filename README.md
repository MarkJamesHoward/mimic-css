# mimic-css

mimic-css is a design system that allows you use standard CSS styles within classes. From this we
gain the benefits of using a design system but without the downside of losing your CSS knowledge
at the same time

## Install:

npm i mimic-css

## Usage

npx mimic-css

This will search in the current folder (and all subfolders) for .html, .ts and .astro files.
Ouput will be sent to the file mimic-css.css

we can override these defaults as below
npx mimic-css -i ./src/ -o ./src/mimic-css.css

<ul>
   <li>  i: { type: "string", default: "./", alias: "input" },</li>
    <li> o: { type: "string", default: "./mimic.css", alias: "output" },</li>
   <li>  e: { type: "string", default: "", alias: "exclude" },</li>
    <li> l: { type: "boolean", default: false, alias: "lit" },</li>
</ul>

<head>
    <link rel="stylesheet" href="./mimic.css" />
</head>

<div class="flex-direction:row large?flex-direction:column display:flex">

## Magic Numbers

In order to reduce the amount of time spent looking up magic names in mimic-css there
is one set of values used across the board:

<ul>
<li>xs</li>
<li>sm</li>
<li>md</li>
<li>lg</li>
<li>xl</li>
<li>2xl</li>
</ul>

#### These values will map to different values depending upon the usage.

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

`<div class="padding-top:md">`

**becomes**

`.padding-top\:md {
	padding-top: 8px;
}`

### And then for Font Size we'd see

`<div class="font-size:md">Two</div>`

`.font-size\:md {
	font-size: 16px;
}`

### Normal CSS will simply be mapped to the same but with a space included

**So the below:**

`<div class="flex-direction:row"></div>`

**Becomes:**

`.display\:flex {
	display: flex;
}`

# Media Breakpoints

<ul>
<li>extrasmall</li>
<li>small</li>
<li>medium</li>
<li>large</li>
<li>extralarge</li>
</ul>
