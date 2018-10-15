![svgpack](https://marsbased.github.io/svgpack/svgpack.png)

Examples:

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

## Test

Run tests with `yarn test` or, if you have jest globally installed, just `jest`

You can run svgpack directly from repo like this: `./bin/svgpack test/icons`

## License

MIT License
