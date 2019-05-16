const BaseList = require('./base.js').BaseList

/** Implementation of ArrayDeque data structure */
class ArrayDeque extends BaseList {
	constructor(size=1) {
		super()
		// Backing array to hold data
		this.array = new Array(size)
		// Index reference for next element
		this.nextElement = 0
		// Number of data elements in data structure
		this.length = 0
	}

	_resize() {
		// Create new array that is 2 * the current data size, or 1 element
		let newArray = new Array(this._max(1, 2 * this.size()))
		// Map current elements into new array, starting deque at index 0
		for (let i = 0; i < this.size(); i++) {
			newArray[i] = this.array[(this.nextElement + i) % this.array.length]
		}
		// Set new array as backing array
		this.array = newArray
		// Set next element to start of backing array
		this.nextElement = 0
	}

	get(index) {
		// Validate index is within length of array
		this._indexWithinRange(index)
		return this.array[(this.nextElement + index) % this.array.length]
	}

	set(index, value) {
		// Validate index is within length of array
		this._indexWithinRange(index)
		// Save current element
		const current = this.get(index)
		this.array[(this.nextElement + index) % this.array.length] = value
		// Return previous element
		return current
	}

	add(index, value) {
		if (index < 0 || index > this.size()) {throw new Error('IndexError')}
		// Resize array if the array is full
		if (this.size() === this.array.length) {this._resize()}
		if (index < this.size() / 2) {
			this.nextElement = (this.nextElement === 0) ? this.array.length - 1 : (this.nextElement - 1) % this.array.length
			for (let k = 0; k < index; k++) {
				this.array[(this.nextElement + k) % this.array.length] = this.array[(this.nextElement + k + 1) % this.array.length]
			}
		}else{
			for (let k = this.size(); k > index; k--) {
				this.array[(this.nextElement + k) % this.array.length] = this.array[(this.nextElement + k - 1) % this.array.length]
			}
		}
		this.array[(this.nextElement + index) % this.array.length] = value
		// Increase element count
		this.length++
	}

	remove(index) {
		// Validate index is within length of array
		this._indexWithinRange(index)
		// Save current element
		const current = this.get(index)
		if (index < this.size() / 2) {
			for (let k = index; k > 0; k--) {
				this.array[(this.nextElement + k) % this.array.length] = this.array[(this.nextElement + k - 1) % this.array.length]
			}
			this.nextElement = (this.nextElement + 1) % this.array.length
		}else{
			for (let k = index; k < this.array.length - 1; k++) {
				this.array[(this.nextElement + k) % this.array.length] = this.array[(this.nextElement + k + 1) % this.array.length]
			}
		}
		// Decrease element count
		this.length--
		// Resize array if the array is 3x larger than the data size
		if (this.array.length >= 3 * this.size()) {this._resize()}
		// Return previous element that was removed
		return current
	}
}

module.exports = ArrayDeque
