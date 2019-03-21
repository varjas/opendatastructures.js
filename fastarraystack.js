const BaseCollection = require('./base.js')

/** Implementation of FastArrayStack data structure */
class FastArrayStack extends BaseCollection {
	constructor() {
		super()
		this.array = []
		this.length = 0
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
		this.array.splice(index, 0, value)
		this.length++
	}

	remove(index) {
		this._indexWithinRange(index)
		const element = this.array[index]
		this.array.splice(index, 1)
		this.length--
		this.array.length = this.length
		return element
	}
}

module.exports = FastArrayStack
