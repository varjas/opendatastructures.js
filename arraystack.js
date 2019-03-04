class ArrayStack {
	constructor() {
		this.array = new Array(1)
		this.length = 0
	}

	_indexWithinRange(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('IndexError')
		}
	}

	_resize(message) {
		let newArray = new Array(2 * this.length)
		for (let i = this.length; i >= 0; i--) {
			newArray[i] = this.array[i]
		}
		this.array = newArray
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
		// if (this.length === this.array.length) {this._resize()}
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
		this.array.length = this.length
		// if (this.array.length >= 3 * this.length) {this._resize()}
		return element
	}
}
