declare const bufferImage: {
	/**
	Convert a buffer to a png buffer.
	@param input The buffer to convert.
	@example
	```
	const bufferImage = require("buffer-image");

	(async () => {
		const result = await bufferImage(Buffer.from("Hello World"));

		console.log(result);
	})();
	```
	*/
	(input: Buffer): Buffer

	/**
	Convert a png buffer to a buffer.
	@param input The buffer to convert.
	@example
	```
	const bufferImage = require("buffer-image");
	const imageBuffer = require("./image-buffer");

	(async () => {
		const result = await bufferImage.from(imageBuffer);

		console.log(result);
	})();
	```
	*/
	from(input: Buffer): Buffer
}

export = bufferImage
