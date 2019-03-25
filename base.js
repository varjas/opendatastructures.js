class BaseCollection {
	// Returns larger of two values
	_max(a, b) {
		return (a > b) ? a : b
	}

	// Generic return length function that works with most data structures
	size() {
		return this.length
	}
}

// class BaseSet {
class BaseSet extends BaseCollection {
	constructor() {
		super()
	}
	// Generic validate index for data structure length
	_indexWithinRange(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('IndexError')
		}
	}
}

class BaseList extends BaseCollection {
	constructor() {
		super()
	}
}

module.exports = {BaseSet, BaseList}
