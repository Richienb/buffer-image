"use strict"

const { compressFile: compressBuffer } = require("lzma-purejs")
const { toBigIntBE: toBigInt } = require("bigint-buffer")
const Jimp = require("jimp")

async function renderImage({ width, height, data }) {
	const image = await Jimp.create(imagePixels.length, 1)

	for (let x = 0; x < width; x++) {
		for (let y = 0; y < height; y++) {
			const dataIndex = (y * width * 4) + (x * 4)
			if (!(data[dataIndex] === 0 && data[dataIndex + 1] === 0 && data[dataIndex + 2] === 0 && data[dataIndex + 3] === 0)) {
				image.setPixelColour(Jimp.rgbaToInt(data[dataIndex], data[dataIndex + 1], data[dataIndex + 2], data[dataIndex + 3]), x, y)
			}
		}
	}

	return image
}

module.exports = async input => {
	if (!Buffer.isBuffer(input)) {
		throw new TypeError(`Expected a buffer, got ${typeof input}`)
	}

	input = compressBuffer(input)
	input = toBigInt(input)

	let remainderAmount = input % 255n
	const fullPixels = Number((input - remainderAmount) / 255n)

	remainderAmount = Number(remainderAmount)

	const imagePixels = new Uint8ClampedArray(fullPixels).fill(255)

	if (remainderAmount) {
		imagePixels.push(remainder)
	}

	return renderImage({
		width: imagePixels.length,
		height: 1,
		data: imagePixels
	})
}
