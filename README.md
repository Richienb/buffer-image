# buffer-image [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/buffer-image/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/buffer-image)

Convert a buffer to and from png image data.

[![NPM Badge](https://nodei.co/npm/buffer-image.png)](https://npmjs.com/package/buffer-image)

## Install

```sh
npm install buffer-image
```

## Usage

```js
const bufferImage = require("buffer-image");

(async () => {
	const image = await bufferImage(Buffer.from("Hello World"));

	const result = await bufferImage.from(image)
	console.log(result.toString())
	//=> "Hello World"
})()
```

## API

### bufferImage(input)

Convert a buffer to a png buffer.

### bufferImage.from(input)

Convert a png buffer to a buffer.

#### input

Type: `string`

The buffer to convert.
