# [![svgpack](https://marsbased.github.io/svgpack/svgpack.png)](https://www.npmjs.com/package/@marsbased/svgpack)

[![npm](https://img.shields.io/npm/v/@marsbased/svgpack.svg?style=flat-square)](https://www.npmjs.com/package/@marsbased/svgpack)

`svgpack` converts SVG files into CSS variables and ready-to-use classes.

It optimizes and sanitizes SVGs and generates CSS variables for direct use, plus optional CSS classes for easy implementation. Perfect for modern web development with frameworks like Remix, NextJS, and vanilla CSS.

**Advantages:**

- Fewer requests for resources on the server.
- Less management problems with the assets of the css.
- CSS variables are native and work in all modern browsers.
- Ready-to-use CSS classes for instant implementation.
- Perfect for component-based frameworks like React, Vue, Angular.
- Easy to use with CSS-in-JS libraries.
- No build step required for CSS variables.
- Flexible sizing and coloring with CSS custom properties.
- It is much faster to update all resources, save the svg again and execute the command.

## Install

npm:

```
npm install --global @marsbased/svgpack
```

yarn:

```
yarn global add @marsbased/svgpack
```

To get the latest version, clone the repository and install from it:

```
cd svgpack
npm install --global .
```

## CLI Usage

It accepts a folder and write the result in the standard output:

```
> svgpack my-images/
> svgpack my-images/ > images.css
```

### CSS Classes Mode

Generate CSS variables with ready-to-use classes:

```
> svgpack my-images/ --background --mask
> svgpack my-images/ --background my-image --mask my-mask > images.css
```

### SCSS Functions Mode

Generate SCSS functions instead of CSS variables:

```
> svgpack my-images/ --sass
> svgpack my-images/ --sass > images.scss
```

Write `svgpack --help` for more options

## CSS Variables Usage

### Simple example

Running `svgpack` against [this svg file](https://github.com/MarsBased/svgpack/blob/master/test/assets/svgpack-imagotype.svg):

```
> svgpack test/assets/svgpack-imagotype.svg
```

outputs something like this:

```css
:root {
  --svgpack-imagotype: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='90' viewBox='0 0 440 90'%3E%3Cg fill='%23EF1625' fill-rule='evenodd'%3E%3Cpath ...");
}
```

To use the CSS variable:

```css
.svgpack-main-logo {
  display: block;
  width: 36rem;
  height: 6rem;
  background: var(--svgpack-imagotype) center/contain no-repeat;
}
```

### CSS Classes Usage

Generate ready-to-use CSS classes with the `--background` and `--mask` flags:

```bash
# Generate CSS variables with background and mask classes
svgpack my-images/ --background --mask

# Generate with custom class names
svgpack my-images/ --background my-image --mask my-mask
```

This generates CSS classes that make it super easy to use your images:

```css
:root {
  --my-logo: url("data:image/svg+xml,...");
  --my-icon: url("data:image/svg+xml,...");
}

.svgpack-background {
  background: var(--image) center/contain no-repeat;
  background-size: 100% 100%;
  width: var(--image--width, 1em);
  height: var(--image--height, 1em);
}

.svgpack-mask {
  background-color: var(--image--color, currentColor);
  mask: var(--image) center/contain no-repeat;
  mask-size: 100% 100%;
  width: var(--image--width, 1em);
  height: var(--image--height, 1em);
}
```

### HTML Usage

Simply add the class to any element:

```html
<!-- Background usage -->
<div class="svgpack-background" style="--image: var(--my-logo)"></div>

<!-- Mask usage (great for colored icons) -->
<div class="svgpack-mask" style="--image: var(--my-icon); --image--color: #ff0000"></div>

<!-- Custom sizing -->
<div class="svgpack-background" style="--image: var(--my-logo); --image--width: 2em; --image--height: 2em"></div>
```

### Advanced Usage

CSS variables work great with modern frameworks:

```jsx
// React component
const Image = ({ name, className, type = 'background' }) => (
  <div 
    className={`svgpack-${type} ${className}`}
    style={{ '--image': `var(--${name})` }}
  />
);

// Usage
<Image name="my-logo" type="background" className="w-6 h-6" />
<Image name="my-icon" type="mask" className="text-red-500" />
```

```vue
<!-- Vue component -->
<template>
  <div 
    :class="`svgpack-${type}`"
    :style="{ '--image': `var(--${imageName})` }"
  />
</template>
```

## SCSS Functions Usage

For projects that use SCSS, you can generate functions instead of CSS variables:

```
> svgpack my-icon-folder/ --sass
```

### Simple example

```
> svgpack test/assets/svgpack-imagotype.svg --sass
```

outputs something like this:

```scss
@function svgpack-imagotype($color:rgb(5, 4, 4)) {
  $color: str-replace(inspect($color), "#", "%23"); //fix and replace hexcolor
  @return url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 90'%3E%3Cg fill='"+$color+"' fill-rule='evenodd'%3E%3Cpath ...");
}
```

To use the sass function we only need to call them passing the desired color:

```scss
$color: #fff;

.svgpack-main-logo {
  display: block;
  width: 36rem;
  height: 6rem;
  background: svgpack-imagotype($color) center/contain no-repeat;
}
```

### SVG to SCSS

**Note:** SCSS functions support color parameters, while CSS variables have fixed colors. Both approaches have their advantages depending on your project setup.

## Test

Run tests with `npm run test` or, if you have jest globally installed, just `jest`

You can run svgpack directly from the repository like this: `./bin/svgpack test/icons`

## License

MIT License
