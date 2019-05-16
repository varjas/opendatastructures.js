const BaseList = require('./base.js').BaseList
const ArrayStack = require('./arraystack.js')

/** Implementation of DualArrayDeque data structure */
class DualArrayDeque extends BaseList {
	constructor() {
		super()
		this.front = new ArrayStack()
		this.back = new ArrayStack()
	}

	_balance() {
		const length = this.size()
		const center = ~~(length / 2)
		if (3 * this.front.length < this.back.length || 3 * this.back.length < this.front.length) {
			let newFront = new ArrayStack()
			for (let i = 0; i < center; i++) {
				newFront.add(i, this.get(center - i - 1))
			}
			let newBack = new ArrayStack()
			for (let i = 0; i < length - center; i++) {
				newBack.add(i, this.get(center + i))
			}
			this.front = newFront
			this.back = newBack
		}
	}

	size() {
		return this.front.length + this.back.length
	}

	get(index) {
		if (index < this.front.length) {
			return this.front.get(this.front.length - index - 1)
		}else{
			return this.back.get(index - this.front.length)
		}
	}

	set(index, value) {
		if (index < this.front.length) {
			return this.front.set(this.front.length - index - 1, value)
		}else{
			return this.back.set(index - this.front.length, value)
		}
	}

	add(index, value) {
		if (index < this.front.length) {
			this.front.add(this.front.length - index, value)
		}else{
			this.back.add(index - this.front.length, value)
		}
		this._balance()
	}

	remove(index) {
		let current
		if (index < this.front.length) {
			current = this.front.remove(this.front.length - index - 1)
		}else{
			current = this.back.remove(index - this.front.length)
		}
		this._balance()
		return current
	}
}

module.exports = DualArrayDeque
