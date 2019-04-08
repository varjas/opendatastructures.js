const BaseSet = require('./base.js').BaseSet
const ArrayStack = require('./arraystack.js')

const w = 32

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
	}

	_createTable(size) {
		
	}
}

module.exports = ChainedHashTable
