const ArrayStack = require('./arraystack.js')

/** Implementation of RootishArrayStack data structure */
class RootishArrayStack {
	constructor() {
		this.blocks = new ArrayStack()
		this.length = 0
	}

	_getBlock(index) {
		return ~~Math.ceil((-3 + Math.sqrt(9 + 8 * index)) / 2)
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

	_grow() {
		this.blocks.append(new ArrayStack(this.blocks.length + 1))
	}

	add(index, value) {
		const length = this.blocks.length
		if (length * (length + 1) / 2 < this.length + 1) {
			this._grow()
		}
		this.length++
		// for (let blockIndex = this.length - 1; blockIndex <= index; blockIndex++) {
		for (let blockIndex = this.length; blockIndex <= index; blockIndex++) {
			this.set(blockIndex, this.get(blockIndex - 1))
		}
		this.set(index, value)
	}

	remove(index) {
		const current = this.get(index)
		for (let blockIndex = index; blockIndex < this.length - 1; blockIndex++) {
			this.set(blockIndex, this.get(blockIndex + 1))
		}
		this.length--
		const length = this.blocks.length
		if ((length - 2) * (length - 1) / 2 >= this.length) {
			this._shrink()
		}
		return current
	}

	_shrink() {
		let length = this.blocks.length
		while (length > 0 && (length - 2) * (length - 1) / 2 >= this.length) {
			this.blocks.remove(this.blocks.length - 1)
			length--
		}
	}
}

module.exports = RootishArrayStack
