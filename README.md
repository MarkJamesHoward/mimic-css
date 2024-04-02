##MIMIC-CSS

mimic-css is a design system that allows you use standard CSS styles within classes. From this we
gain the benefits of using a design system but without the downside of losing your CSS knowledge
at the same time

##Install:

npm i mimic-css

npx mimic -i ./src/index.html -o ./src/mimic.css

<head>
    <link rel="stylesheet" href="./mimic.css" />
</head>

<div class="flex-direction:row large?flex-direction:column display:flex">
