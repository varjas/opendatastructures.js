const BaseSet = require('./base.js').BaseSet

/** Implementation of skiplist data structure */
class SkiplistSSet extends BaseSet{
	constructor() {
		super()
		this.sentinel = new Node(undefined, 32)
		this.stack = new Array(this.sentinel.height() + 1)
		this.height = 0
		this.length = 0
	}
}

class Node {
	constructor(value, height) {
		this.value = value
		this.next = new Array(height + 1)
	}
	height() {
		return this.next.length - 1
	}
}

module.exports = SkiplistSSet
