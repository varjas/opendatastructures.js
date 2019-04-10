const BaseSet = require('./base.js').BaseSet

/** Implementation of ArrayQueue data structure */
class ArrayQueue extends BaseSet {
	constructor() {
		super()
		// Backing array to hold data
		this.array = new Array(1)
		// Index reference for next element
		this.nextElement = 0
		// Number of data elements in data structure
		this.length = 0
	}

	_resize() {
		// Create new array that is 2 * the current data size, or 1 element
		let newArray = new Array(this._max(1, 2 * this.length))
		// Map current elements into new array, starting queue at index 0
		for (let i = 0; i < this.length; i++) {
			newArray[i] = this.array[(this.nextElement + i) % this.array.length]
		}
		// Set new array as backing array
		this.array = newArray
		// Set next element to start of backing array
		this.nextElement = 0
	}

	add(value) {
		// Resize array if the array is full
		if (this.length + 1 > this.array.length) {this._resize()}
		// Set new value to index offset from data size and backing array size
		this.array[(this.nextElement + this.length) % this.array.length] = value
		// Increase element count
		this.length++
		return true
	}

	remove() {
		// Validate that the queue is not empty
		if (this.length === 0) {throw new Error('IndexError')}
		// Save current element
		const element = this.array[this.nextElement]
		// Set next element
		this.nextElement = (this.nextElement + 1) % this.array.length
		// Decrease element count
		this.length--
		// Resize array if the array is 3x larger than the data size
		if (this.array.length >= 3 * this.length) {this._resize()}
		// Return previous element that was removed
		return element
	}
}

module.exports = ArrayQueue
