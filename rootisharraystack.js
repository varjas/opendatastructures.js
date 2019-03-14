const ArrayStack = require('./arraystack.js')

/** Implementation of RootishArrayStack data structure */
class RootishArrayStack {
	constructor() {
		this.blocks = new ArrayStack()
		this.length = 0
	}

	_getBlock(index) {
		return ~~Math.ceil(-3 + Math.sqrt(9 + 8 * index) / 2)
	}

	get(index) {
		const block = this._getBlock(index)
		const blockIndex = index - block * (block + 1) / 2
		return this.blocks.get(block)[blockIndex]
	}

	set(index, value) {
		const block = this._getBlock(index)
		const blockIndex = index - block * (block + 1) / 2
		const current = this.blocks.get(block)[blockIndex]
		this.blocks.get(block)[blockIndex] = value
		return current
	}
}

module.exports = RootishArrayStack
