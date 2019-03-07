/** Implementation of ArrayQueue data structure */
class ArrayQueue {
	constructor() {
		this.array = new Array(1)
		this.nextElement = 0
		this.length = 0
	}

	_max(a, b) {
		return (a > b) ? a : b
	}

	_resize() {
		let newArray = new Array(this._max(1, 2 * this.length))
		for (let i = 0; i < this.length; i++) {
			newArray[i] = this.array[(this.nextElement + i) % this.array.length]
		}
		this.array = newArray
		this.nextElement = 0
	}

	add(value) {
		if (this.length + 1 > this.array.length) {this._resize()}
		this.array[(this.nextElement + this.length) % this.array.length] = value
		this.length++
		return true
	}

	remove() {
		if (this.length === 0) {throw new Error('IndexError')}
		const element = this.array[this.nextElement]
		this.nextElement = (this.nextElement + 1) % this.array.length
		this.length--
		if (this.array.length >= 3 * this.length) {this._resize()}
		return element
	}
}

module.exports = ArrayQueue
