class BaseCollection {
	// Returns larger of two values
	_max(a, b) {
		return (a > b) ? a : b
	}

	// Generic return length function that works with most data structures
	size() {
		return this.length
	}

	// Generic validate index for data structure length
	_indexWithinRange(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('IndexError')
		}
	}
}

class BaseSet extends BaseCollection {
	constructor() {
		super()
	}
}

class BaseList extends BaseCollection {
	constructor() {
		super()
	}

	append(value) {
		this.add(this.size(), value)
	}

	addFirst(value) {
		this.add(0, value)
	}

	addLast(value) {
		this.add(this.size(), value)
	}

	removeFirst() {
		this.remove(0)
	}

	removeLast() {
		this.remove(this.size() - 1)
	}
}

module.exports = {BaseSet, BaseList}
