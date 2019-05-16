const BaseSet = require('./base.js').BaseSet
const ArrayStack = require('./arraystack.js')

const integerBits = 30 // 32
const integerBitsExponent = 1 << integerBits // 2 ** integerBits


/** Implementation of Set with a chained hash table data structure */
class ChainedHashTable extends BaseSet {
	constructor() {
		super()
		this.dimension = 1
		this.table = this._createTable((1 << this.dimension))
		this.random = this._randomOddInt()
		this.length = 0
	}

	_randomOddInt() {
		return Math.random() * integerBitsExponent | 1
	}

	_createTable(size) {
		let table = []
		for (let i = 0; i < size; i++) {
			table.push(new ArrayStack())
		}
		return table
	}

	_resize() {
		this.dimension = 1
		while ((1 << this.dimension) <= this.length) {
			this.dimension += 1
		}
		this.length = 0
		const table = this.table
		this.table = this._createTable(1 << this.dimension)
		for (let i = 0; i < table.length; i++) {
			for (let element of table[i].array) {
				if (element === undefined) {continue}
				this.add(element)
			}
		}
	}

	_hash(value) {
		let hash = 0
		let character
		value = value.toString()
		if (value.length === 0) {return hash}
		for (let i = 0; i < value.length; i++) {
			character = value.charCodeAt(i)
			hash = ((hash << 5) - hash) + character
			hash |= 0
		}
		return hash
	}

	hash(value) {
		return (this.random * this._hash(value) % (integerBitsExponent)) >> (integerBits - this.dimension)
	}

	add(value) {
		if (this.find(value) !== null) {return false}
		if (this.length + 1 > this.table.length) {this._resize()}
		this.table[(this.hash(value))].append(value)
		this.length++
		return true
	}

	remove(value) {
		let currentElements = this.table[this.hash(value)]
		for (let element of currentElements.array) {
			if (element === value) {
				currentElements.removeValue(element)
				this.length--
				if (3 * this.length < this.table.length) {this._resize()}
				return element
			}
		}
		return null
	}

	find(value) {
		for (let element of this.table[this.hash(value)].array) {
			if (element === value) {
				return element
			}
		}
		return null
	}
}

module.exports = ChainedHashTable
