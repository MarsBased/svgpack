# [![svgpack](https://marsbased.github.io/svgpack/svgpack.png)](https://www.npmjs.com/package/@marsbased/svgpack)

[![npm](https://img.shields.io/npm/v/@marsbased/svgpack.svg?style=flat-square)](https://www.npmjs.com/package/@marsbased/svgpack)

`svgpack` converts SVG files into SASS functions.

It optimizes and sanitizes the svg, extract its colors and generate a sass function with the colors as parameters. One or more svg can be _packed_ into a scss file.

**Advantages:**

- Fewer requests for resources on the server.
- Less management problems with the assets of the css.
- The functions do not write anything in our css until they are used, which is perfect for using it internally in angular or react components.
- The same function can be used several times to change the colors.
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
> svgpack my-icon-folder/
> svgpack my-icon-folder/ > icons.scss
```

Write `svgpack --help` for more options

## SCSS Usage

### Simple example

Running `svgpack` against [this svg file](https://github.com/MarsBased/svgpack/blob/master/test/assets/svgpack-imagotype.svg):

```
> svgpack test/assets/svgpack-imagotype.svg
```

outputs something like this:

```scss
@function svgpack-imagotype($color: #ef1625) {
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

[![youtube](https://marsbased.github.io/svgpack/svgpack-youtube-svg-to-scss.jpg)](http://www.youtube.com/watch?v=cllVRaJZSMo "svgpack svg to scss")

See this example in [codepen](https://codepen.io/JavierArtero/pen/OBQwme?editors=1100)

### [Codepen example with icons](https://codepen.io/JavierArtero/pen/EdQdEK?editors=1100)

### [Codepen example multicolor](https://codepen.io/JavierArtero/pen/oaEQLq?editors=1100)

### [Codepen icons text color](https://codepen.io/JavierArtero/pen/MWjaogg?editors=1100)

### [Codepen mask background](https://codepen.io/JavierArtero/pen/OJRygmr?editors=1100)

## Test

Run tests with `yarn test` or, if you have jest globally installed, just `jest`

You can run svgpack directly from the repository like this: `./bin/svgpack test/icons`

## License

MIT License
