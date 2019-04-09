const BaseSet = require('./base.js').BaseSet
const ArrayStack = require('./arraystack.js')

const w = 30 // 32
const wExponent = 1 << w // 2 ** w

/** Implementation of Set with a chained hash table data structure */
class ChainedHashTable extends BaseSet {
	constructor() {
		super()
		this.d = 1
		this.table = this._createTable((1 << this.d))
		this.random = this._randomOddInt()
		this.length = 0
	}

	_randomOddInt() {
		return Math.random() * wExponent | 1
	}

	_createTable(size) {

	}

	_resize() {

	}

	_removeValue(element) {

	}

	_hash(value) {

	}

	hash(value) {

	}

	add(value) {
		if (this.find(value) !== undefined) {return false}
		if (this.length + 1 > this.length(this.table)) {this._resize()}
		this.table[(this.hash(value))].append(value)
		this.length++
		return true
	}

	remove(value) {
		let currentElements = this.table[this.hash(value)]
		for (let element of currentElements) {
			if (element === value) {
				currentElements._removeValue(element)
			}
			this.length--
			if (3 * this.length < this.table.length) {this._resize()}
			return element
		}
		return undefined
	}
}

module.exports = ChainedHashTable
