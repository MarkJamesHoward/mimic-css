---
title: mimic-css
---

**mimic-css** is a design system that allows you to use standard CSS styles within the class attribute ALONG with Media Queries and Modifiers. Particulary suited to prototyping websites where speed is an important factor.

One of the differentiating factors with mimic-css is that it does not use magic utility class names; the same css that you would use in a style tag is exactly what you use in the class tag. From this you gain the benefits of using a design system but without the downside of losing your CSS knowledge
at the same time.

This keeps the learning curve for mimic-css to a minimun and is further reduced by keeping the standard values that can be assigned to say border widths and margins consistent across the board. You'll only need to be aware of 6 values xs, sm, md, lg, xl and 2xl and you are good to go with consistent spacings across all layout attributes.

So you are enabled to write standard CSS such as `display:flex` and apply a media query inline within the class e.g.

```html
<div class="lg?display:flex">Some Text</div>
```

Which will result in the below class being generated for you and ensuring that the flex container is only applied when the screen size is greater than 1280px wide

```css
@media (min-width: 1280px) {
  .lg\?display\:flex {
    display: flex;
  }
}
```
