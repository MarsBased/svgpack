![svgpack](https://marsbased.github.io/svgpack/svgpack.png)

SVGPACK converts SVG files into SASS functions, compressing it and adding each different color it finds as an argument with its current color as the default value.

**Advantage**

- Fewer requests for resources on the server.
- Less management problems with the assets of the css.
- The functions do not write anything in our css until they are used, which is perfect for using it internally in angular or react components.
- The same function can be used several times to change the colors.
- It is much faster to update all resources, save the svg again and execute the command.

## Install

Currently there's no published package, so you have to clone the repository and install from it:

```
cd svgpack
npm i --global .
```

(TODO: I don't know how to do that with yarn)

## Usage

It accepts a folder and write the result in the standard output:

```
> svgpack my-icon-folder/
> svgpack my-icon-folder/ > icons.scss
```

## SCSS

To use the sass functions we only need to call them as the value of the background or background-image property

### Simple example

```
$color: #FFF;

.svgpack-main-logo {
  display: block;
  width: 32rem;
  height: 6rem;
  background: svgpack-imagotype($color) center/contain no-repeat;
}
```

see this example in [codepen](https://codepen.io/JavierArtero/pen/OBQwme?editors=1100)

### [Codepen example with icons](https://codepen.io/JavierArtero/pen/EdQdEK?editors=1100)

### [Codepen example multicolor](https://codepen.io/JavierArtero/pen/oaEQLq?editors=1100)

## Test

Run tests with `yarn test` or, if you have jest globally installed, just `jest`

You can run svgpack directly from repo like this: `./bin/svgpack test/icons`

## License

MIT License
