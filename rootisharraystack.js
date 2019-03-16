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
		const blockIndex = this._getBlock(index)
		const arrayIndex = index - blockIndex * (blockIndex + 1) / 2
		return this.blocks.get(blockIndex).array[arrayIndex]
	}

	set(index, value) {
		const blockIndex = this._getBlock(index)
		const arrayIndex = index - blockIndex * (blockIndex + 1) / 2
		const current = this.blocks.get(blockIndex).array[arrayIndex]
		this.blocks.get(blockIndex).array[arrayIndex] = value
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
		// for (let arrayIndex = this.length - 1; arrayIndex <= index; arrayIndex++) {
		for (let arrayIndex = this.length; arrayIndex <= index; arrayIndex++) {
			this.set(arrayIndex, this.get(arrayIndex - 1))
		}
		this.set(index, value)
	}

	remove(index) {
		const current = this.get(index)
		for (let arrayIndex = index; arrayIndex < this.length - 1; arrayIndex++) {
			this.set(arrayIndex, this.get(arrayIndex + 1))
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
