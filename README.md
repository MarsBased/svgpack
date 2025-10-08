# [![svgpack](https://raw.githubusercontent.com/MarsBased/svgpack/main/docs/svgpack.png)](https://www.npmjs.com/package/@marsbased/svgpack)

[![npm](https://img.shields.io/npm/v/@marsbased/svgpack.svg?style=flat-square)](https://www.npmjs.com/package/@marsbased/svgpack)

`svgpack` converts SVG files into CSS variables and ready-to-use classes.

It optimizes and sanitizes SVGs and generates CSS variables for direct use, plus optional CSS classes for easy implementation. Perfect for modern web development with frameworks like Remix, NextJS, and vanilla CSS.

**Why CSS Variables over Direct SVG?**

Instead of embedding SVG code directly in your HTML (which downloads the entire SVG content on every page load), svgpack converts SVGs into CSS variables that are:

- **Cached once**: CSS variables are downloaded once and cached by the browser, reducing bandwidth usage
- **Reusable**: Same SVG can be used multiple times without duplicating content
- **Smaller HTML**: No inline SVG code cluttering your HTML markup
- **Better performance**: Faster page loads since SVG content isn't repeated in every HTML document
- **Easier maintenance**: Update SVG once in CSS, changes apply everywhere

**Additional Advantages:**

- Fewer requests for resources on the server
- Less management problems with the assets of the css
- CSS variables are native and work in all modern browsers
- Ready-to-use CSS classes for instant implementation
- Perfect for component-based frameworks like React, Vue, Angular
- Easy to use with CSS-in-JS libraries
- No build step required for CSS variables
- Flexible sizing and coloring with CSS custom properties
- It is much faster to update all resources, save the svg

## Table of Contents

- [Quick Start](#quick-start)
- [CLI Usage](#cli-usage)
- [CSS Variables Usage](#css-variables-usage)
- [SCSS Functions](#scss-functions)
- [React Components](#react-components)
- [Installation Options](#installation-options)
- [Testing](#testing)

## Quick Start

### Install as Project Dependency (Recommended)

```bash
npm install @marsbased/svgpack
```

### CLI Usage

```bash
# Basic usage - generate CSS variables
svgpack my-images/ > images.css

# With ready-to-use classes
svgpack my-images/ --background --mask > images.css

# SCSS functions instead of CSS variables
svgpack my-images/ --sass > images.scss

# Get help
svgpack --help
```

**Example output:**
```css
:root {
  --my-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'...");
  --my-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'...");
}
```

### Build Scripts

Add to your `package.json` scripts:
```json
{
  "scripts": {
    "build:svg": "svgpack src/shared/assets/svg > src/styles/_svgpack.css --mask --background",
  }
}
```

Then run:
```bash
npm run build:svg
```

### Global Installation (Alternative)

```bash
npm install --global @marsbased/svgpack
```

### React Components (Optional)

```jsx
import { SvgpackMask, SvgpackBackground } from '@marsbased/svgpack';

// Use as React components
<SvgpackMask image="my-icon" width="24px" height="24px" className="text-blue-500" />
<SvgpackBackground image="my-logo" width="100%" height="200px" />
```

## React Components

svgpack includes ready-to-use React components for easy integration:

### Usage

```jsx
import { SvgpackMask, SvgpackBackground } from '@marsbased/svgpack';

// SvgpackMask component (great for colored icons)
<SvgpackMask
  image="my-icon"
  width="24px"
  height="24px"
  className="text-blue-500"
/>

// SvgpackBackground component
<SvgpackBackground
  image="my-logo"
  width="100%"
  height="200px"
  className="bg-gray-100"
/>
```

### Component Props

#### SvgpackMask & SvgpackBackground

Both components accept the following props:

- `image?: string` - The name of the SVG variable (without the `--` prefix)
- `width?: string` - CSS width value (e.g., "24px", "100%", "2rem")
- `height?: string` - CSS height value (e.g., "24px", "200px", "3rem")
- `className?: string` - Additional CSS classes
- `style?: React.CSSProperties` - Inline styles
- `children?: React.ReactNode` - Child elements
- All standard HTML div attributes

### TypeScript Support

The components are fully typed and include TypeScript definitions:

```tsx
import { SvgpackMask, SvgpackBackground } from '@marsbased/svgpack';

interface MyComponentProps {
  iconName: string;
  size?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ iconName, size = "24px" }) => (
  <SvgpackMask
    image={iconName}
    width={size}
    height={size}
    className="text-primary"
  />
);
```

## CLI Usage

### Basic Usage

```bash
# Generate CSS variables
svgpack my-images/

# Save to file
svgpack my-images/ > images.css
```

### CSS Classes Mode

Generate CSS variables with ready-to-use classes:

```bash
# Generate with default class names
svgpack my-images/ --background --mask

# Generate with custom class names
svgpack my-images/ --background my-image --mask my-mask > images.css
```

### SCSS Functions Mode

Generate SCSS functions instead of CSS variables:

```bash
# Generate SCSS functions
svgpack my-images/ --sass > images.scss
```

### CLI Options

- `--background [className]` - Generate background CSS classes
- `--mask [className]` - Generate mask CSS classes  
- `--sass` - Generate SCSS functions instead of CSS variables
- `--help` - Show help information

Write `svgpack --help` for more options

## CSS Variables Usage

### Simple Example

Running `svgpack` against [this svg file](https://github.com/MarsBased/svgpack/blob/master/test/assets/svgpack-imagotype.svg):

```bash
svgpack test/assets/svgpack-imagotype.svg
```

Outputs:

```css
:root {
  --svgpack-imagotype: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='90' viewBox='0 0 440 90'%3E%3Cg fill='%23EF1625' fill-rule='evenodd'%3E%3Cpath ...");
}
```

Usage:

```css
.svgpack-main-logo {
  display: block;
  width: 36rem;
  height: 6rem;
  background: var(--svgpack-imagotype) center/contain no-repeat;
}
```

### Live Example

See a working example on CodePen: [SVG to CSS Variables Demo](https://codepen.io/JavierArtero/pen/JoGEeBq)

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


## SCSS Functions

For projects that use SCSS, you can generate functions instead of CSS variables:

```bash
svgpack my-icon-folder/ --sass
```

### Example

```bash
svgpack test/assets/svgpack-imagotype.svg --sass
```

Outputs:

```scss
@function svgpack-imagotype($color:rgb(5, 4, 4)) {
  $color: str-replace(inspect($color), "#", "%23");
  @return url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 440 90'%3E%3Cg fill='"+$color+"' fill-rule='evenodd'%3E%3Cpath ...");
}
```

Usage:

```scss
$color: #fff;

.svgpack-main-logo {
  display: block;
  width: 36rem;
  height: 6rem;
  background: svgpack-imagotype($color) center/contain no-repeat;
}
```

**Note:** SCSS functions support color parameters, while CSS variables have fixed colors. Both approaches have their advantages depending on your project setup.

## Installation Options

### Project Dependency (Recommended)

For both React components and build scripts:

```bash
# npm
npm install @marsbased/svgpack

# yarn
yarn add @marsbased/svgpack
```

Use cases:
- **React Components**: Import and use components directly
- **Build Scripts**: Add to package.json scripts for automated SVG processing

### Global Installation (CLI Only)

For one-off usage or manual processing:

```bash
# npm
npm install --global @marsbased/svgpack

# yarn
yarn global add @marsbased/svgpack
```

### Development Installation

To get the latest version, clone the repository and install from it:

```bash
cd svgpack
npm install --global .
```

## Testing

Run tests with `npm run test` or, if you have jest globally installed, just `jest`

You can run svgpack directly from the repository like this: `./bin/svgpack test/icons`

## License

MIT License
