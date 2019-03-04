class ArrayStack {
	constructor() {
		this.array = []
		this.length = 0
	}

	_indexWithinRange(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('IndexError')
		}
	}

	get(index) {
		this._indexWithinRange(index)
		return this.array[index]
	}

	set(index, value) {
		this._indexWithinRange(index)
		let element = this.array[index]
		this.array[index] = value
		return element
	}

	add(index, value) {
		if (index < 0 || index > this.length) {
			throw new Error('IndexError')
		}
		// if (this.length === this.array.length) {resize()}
		// this.array.splice(index, 0, value)
		for (let i = this.length; i > index; i--) {
			this.array[i] = this.array[i-1]
		}
		this.array[index] = value
		this.length ++
	}

	remove(index) {
		this._indexWithinRange(index)
		const element = this.array[index]
		for (let i = index; i < this.length; i++) {
			this.array[i] = this.array[i+1]
		}
		this.length --
		// delete this.array[this.length]
		this.array.length = this.length
		// if (this.array.length >= 3 * this.length) {resize()}
		return element
	}
}
