const ArrayStack = require('./arraystack.js')

/** Implementation of DualArrayDeque data structure */
class DualArrayDeque {
	constructor() {
		this.front = new ArrayStack()
		this.back = new ArrayStack()
	}

	_balance() {
		const length = this.size()
		const center = length / 2
		if (3 * front.length < back.length || 3 * back.length < front.length) {
			let newFront = new ArrayStack()
			for (let i = 0; i < center; i++) {
				newFront.add(i, this.get(center - i - 1))
			}
			let newBack = new ArrayStack()
			for (let i = 0; i < length - center; i++) {
				newBack.add(i, this.get(center + 1))
			}
			this.front = newFront
			this.back = newBack
		}
	}

	size() {
		return front.length + back.length
	}

	get(index) {
		if (index < front.length) {
			return front.get(front.length - index - 1)
		}else{
			return back.get(index - front.length)
		}
	}

	set(index, value) {
		if (index < front.length) {
			return front.set(front.length - index - 1, value)
		}else{
			return back.set(index - front.length, value)
		}
	}

	add(index, value) {
		if (index < front.length) {
			front.add(front.length - index, value)
		}else{
			back.add(index - front.length, value)
		}
		this._balance()
	}

	remove(index) {
		let current
		if (index < front.length) {
			current = front.remove(front.length - index - 1)
		}else{
			current = back.remove(index - front.length)
		}
		this._balance()
		return current
	}
}

module.exports = DualArrayDeque
