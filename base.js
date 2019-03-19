class BaseCollection {
	// Returns larger of two values
	_max(a, b) {
		return (a > b) ? a : b
	}

	// Generic validate index for data structure length
	_indexWithinRange(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('IndexError')
		}
	}

	// Generic return length function that works with most data structures
	_size() {
		return this.length
	}
}
