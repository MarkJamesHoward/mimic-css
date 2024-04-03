## mimic-css

mimic-css is a design system that allows you use standard CSS styles within classes. From this we
gain the benefits of using a design system but without the downside of losing your CSS knowledge
at the same time

## Install:

npm i mimic-css

npx mimic -i ./src/index.html -o ./src/mimic.css

## Usage

<head>
    <link rel="stylesheet" href="./mimic.css" />
</head>

<div class="flex-direction:row large?flex-direction:column display:flex">

## Magic Numbers

In order to reduce the amount of time spent looking up the valid numbers that can be applied to
a property, mimic lets us specify any value and then _snaps_ it to the closest boundary. So we
still get a consistent look across the webpage but also avoid the need to constantly check if the
value we are using it a valid one provided by the design system.

<div class="padding-top:100px">
