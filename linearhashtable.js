const BaseSet = require('./base.js').BaseSet
const ArrayStack = require('./arraystack.js')

const integerBits = 30 // 32
const integerBitsExponent = 1 << integerBits // 2 ** integerBits


/** Implementation of Set with a linear hash table data structure */
class LinearHashTable extends BaseSet {
	constructor() {
		super()
		this.dimension = 1
		this.table = new ArrayStack((1 << this.dimension))
		this.lengthUtilized = 0
		this.length = 0
	}

	add(value) {
		if (this.find(value) !== null) {return false}
		if (2 * (lengthUtilized + 1) > this.table.length) {this._resize()}
		let index = this.hash(value)
		while (this.table[index] !== null && this.table[index] !== del) {
			index = (index + 1) % this.table.length
		}
		if (this.table[index] === null) {
			this.lengthUtilized++
		}
		this.length++
		this.table[index] = value
		return true
	}

	find(value) {
		let index = this.hash(value)
		while (this.table[index] !== null) {
			if (this.table[index] !== del && value === this.table[index]) {
				return this.table[index]
			}
			index = (index + 1) % this.table.length
		}
	}
}

module.exports = LinearHashTable
