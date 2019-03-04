class ArrayStack {
	constructor() {
		this.array = []
		this.length = 0
	}

	get(index) {
		if (index < 0 || index >= this.length) {throw new Error('IndexError')}
		return this.array[index]
	}

	set(index, value) {
		if (index < 0 || index >= this.length) {throw new Error('IndexError')}
		let current = this.array[index]
		this.array[index] = value
		return current
	}
}

