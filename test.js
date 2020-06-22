const test = require("ava")
const bufferImage = require(".")

test("main", async t => {
	const result = Buffer.from("Hello World")
	t.deepEqual(await bufferImage.from(await bufferImage(result)), result)
})
