/** Implementation of ArrayStack data structure */
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
		if (index < 0 || index > this.length) {throw new Error('IndexError')}
		for (let i = this.length; i > index; i--) {
			this.array[i] = this.array[i-1]
		}
		this.array[index] = value
		this.length++
	}

	remove(index) {
		this._indexWithinRange(index)
		const element = this.array[index]
		for (let i = index; i < this.length; i++) {
			this.array[i] = this.array[i+1]
		}
		this.length--
		this.array.length = this.length
		return element
	}
}
