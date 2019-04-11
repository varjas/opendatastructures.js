class BaseCollection {
	// Returns larger of two values
	_max(a, b) {
		return (a > b) ? a : b
	}

	// Generic return length function that works with most data structures
	size() {
		return this.length
	}

	// Generic validate index is within length of data structure
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
		return this.add(0, value)
	}

	addLast(value) {
		return this.add(this.size(), value)
	}

	removeFirst() {
		return this.remove(0)
	}

	removeLast() {
		return this.remove(this.size() - 1)
	}

	removeValue(value) {
		try {
			return this.remove(this.array.indexOf(value))
		}catch (e) {
			return false
		}
	}
}

module.exports = {BaseSet, BaseList}
