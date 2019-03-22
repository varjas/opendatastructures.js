const BaseCollection = require('./base.js')

/** Implementation of ArrayDeque data structure */
class ArrayDeque extends BaseCollection{
	constructor() {
		super()
		this.array = new Array(1)
		this.nextElement = 0
		this.length = 0
	}

	_resize() {
		let newArray = new Array(this._max(1, 2 * this.size()))
		for (let i = 0; i < this.size(); i++) {
			newArray[i] = this.array[(this.nextElement + i) % this.array.length]
		}
		this.array = newArray
		this.nextElement = 0
	}

	get(index) {
		this._indexWithinRange(index)
		return this.array[(index + this.nextElement) % this.array.length]
	}

	set(index, value) {
		this._indexWithinRange(index)
		const current = this.get(index)
		this.array[(index + this.nextElement) % this.array.length] = value
		return current
	}

	add(index, value) {
		if (index < 0 || index > this.size()) {throw new Error('IndexError')}
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
		this.length++
	}

	remove(index) {
		this._indexWithinRange(index)
		const current = this.array[(this.nextElement + index) % this.array.length]
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
		this.length--
		if (this.array.length >= 3 * this.size()) {this._resize()}
		return current
	}
}

module.exports = ArrayDeque
