const BaseList = require('./base.js').BaseList

/** Implementation of ArrayStack data structure */
class ArrayStack extends BaseList {
	constructor(size=1) {
		super()
		this.array = new Array(size)
		this.length = 0
	}

	_resize() {
		let newArray = new Array(this._max(1, 2 * this.size()))
		for (let i = 0; i < this.size(); i++) {
			newArray[i] = this.array[i]
		}
		this.array = newArray
	}

	get(index) {
		this._indexWithinRange(index)
		return this.array[index]
	}

	set(index, value) {
		this._indexWithinRange(index)
		let element = this.array[index]
		this.array[index] = value
		return element
	}

	add(index, value) {
		if (index < 0 || index > this.size()) {throw new Error('IndexError')}
		if (this.array.length === this.size()) {this._resize()}
		for (let i = this.size(); i > index; i--) {
			this.array[i] = this.array[i-1]
		}
		this.array[index] = value
		this.length++
	}

	remove(index) {
		this._indexWithinRange(index)
		const element = this.array[index]
		for (let i = index; i < this.size(); i++) {
			this.array[i] = this.array[i+1]
		}
		this.length--
		this.array.length = this.size()
		if (this.array.length >= 3 * this.size()) {this._resize()}
		return element
	}

	append(value) {
		this.add(this.size(), value)
	}
}

module.exports = ArrayStack
