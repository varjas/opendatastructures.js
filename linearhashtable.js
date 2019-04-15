const BaseSet = require('./base.js').BaseSet
const ArrayStack = require('./arraystack.js')

const integerBits = 30 // 32
const integerBitsExponent = 1 << integerBits // 2 ** integerBits


/** Implementation of Set with a linear hash table data structure */
class LinearHashTable extends BaseSet {
	constructor() {
		super()
		this.del = {}
		this.dimension = 1
		this.table = new ArrayStack((1 << this.dimension))
		this.lengthUtilized = 0
		this.length = 0
	}

	_resize() {
		this.dimension = 1
		while (2 ** this.dimension < 3 * this.lenth) {
			this.dimension++
		}
		const oldTable = this.table
		this.table = new ArrayStack((2 ** this.dimension))
		this.lengthUtilized = this.length
		for (value of oldTable) {
			if (value !== null && value !== del) {
				let index = this.hash(value)
				while (this.table[index] !== null) {
					index = (index + 1) % this.table.length
				}
				this.table[index] = value
			}
		}
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

	remove(value) {
		let index = this.hash(value)
		let current
		while (this.table[index] !== null) {
			current = this.table[index]
			if (current !== del && value = current) {
				this.table[index] = del
				this.length--
				if (8 * n < this.table.length) {this._resize()}
				return current
			}
			index = (index + 1) % this.table.length
		}
		return null
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
