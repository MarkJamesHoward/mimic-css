---
title: mimic-css
---

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
