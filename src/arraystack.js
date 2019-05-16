const BaseList = require('./base.js').BaseList

/** Implementation of ArrayStack data structure */
class ArrayStack extends BaseList {
	constructor(size=1) {
		super()
		// Backing array to hold data
		this.array = new Array(size)
		// Number of data elements in data structure
		this.length = 0
	}

	_resize() {
		// Create new array that is 2 * the current data size, or 1 element
		let newArray = new Array(this._max(1, 2 * this.size()))
		// Map current elements into new array
		for (let i = 0; i < this.size(); i++) {
			newArray[i] = this.array[i]
		}
		// Set new array as backing array
		this.array = newArray
	}

	get(index) {
		// Validate index is within length of array
		this._indexWithinRange(index)
		// Return element at requested index
		return this.array[index]
	}

	set(index, value) {
		// Validate index is within length of array
		this._indexWithinRange(index)
		// Save current element
		const element = this.array[index]
		// Set new value to requested index
		this.array[index] = value
		// Return previous element
		return element
	}

	add(index, value) {
		// Validate index is within length of array + 1
		if (index < 0 || index > this.size()) {throw new Error('IndexError')}
		// Resize array if the array is full
		if (this.array.length === this.size()) {this._resize()}
		// Iterate through end of array to the requested index
		for (let i = this.size(); i > index; i--) {
			// Shift elements over by one in backing array
			this.array[i] = this.array[i-1]
		}
		// Set new value to requested index
		this.array[index] = value
		// Increase element count
		this.length++
	}

	remove(index) {
		// Validate index is within length of array
		this._indexWithinRange(index)
		// Save current element
		const element = this.array[index]
		// Iterate through end of array from the requested index
		for (let i = index; i < this.size(); i++) {
			// Shift elements over by one in backing array
			this.array[i] = this.array[i+1]
		}
		// Decrease element count
		this.length--
		this.array.length = this.size()
		// Resize array if the array is 3x larger than the data size
		if (this.array.length >= 3 * this.size()) {this._resize()}
		// Return previous element that was removed
		return element
	}

	append(value) {
		// Add element at the end of the stack
		this.add(this.size(), value)
	}
}

module.exports = ArrayStack
