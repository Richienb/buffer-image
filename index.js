"use strict"

const { compressFile: compressBuffer, decompressFile: decompressBuffer } = require("lzma-purejs")
const Jimp = require("jimp")
const steggy = require("steggy-noencrypt")

const calculateImageWidth = input => Math.floor((40 + input.length) * 32 / 3)

module.exports = async input => {
	if (!Buffer.isBuffer(input)) {
		throw new TypeError(`Expected a buffer, got ${typeof input}`)
	}

	input = compressBuffer(input)

	const image = await Jimp.create(calculateImageWidth(input), 1)
	const imageBuffer = await image.getBufferAsync(Jimp.MIME_PNG)

	return steggy.conceal(imageBuffer, input)
}

module.exports.from = async input => {
	if (!Buffer.isBuffer(input)) {
		throw new TypeError(`Expected a buffer, got ${typeof input}`)
	}

	return decompressBuffer(steggy.reveal(input))
}
