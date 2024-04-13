## css-in-class

css-in-class is a design system that allows you use standard CSS styles within classes. From this we
gain the benefits of using a design system but without the downside of losing your CSS knowledge
at the same time

## Install:

npm i css-in-class

## Usage

npx css-in-class

This will search in the current folder (and all subfolders) for .html files.
Ouput will be sent to the file css-in-class.css

we can override these defaults as below
npx css-in-class -i ./src/ -o ./src/css-in-class.css

-i input folder
-o output filename

<head>
    <link rel="stylesheet" href="./css-in-class.css" />
</head>

<div class="flex-direction:row large?flex-direction:column display:flex">

## Magic Numbers

In order to reduce the amount of time spent looking up magic names in css-in-class there
is one set of values used across the board:

xs
sm
md
lg
xl
2xl

<div class="padding-top:md">

becomes

## Media Breakpoints

extrasmall
small
medium
large
extralarge
