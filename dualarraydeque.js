const ArrayStack = require('./arraystack.js')

/** Implementation of DualArrayDeque data structure */
class DualArrayDeque {
	constructor() {
		this.front = new ArrayStack()
		this.back = new ArrayStack()
	}

	_balance() {

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
