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

	_findPredNode(value) {
		let currentNode = this.sentinel
		let currentHeight = this.height

		while (currentHeight >= 0) {
			while (currentNode.next[currentHeight] !== undefined && currentNode.next[currentHeight].value < value) {
				currentNode = currentNode.next[currentHeight]
			}
			currentHeight--
		}
		return currentNode
	}

	find(value) {
		let currentNode = this._findPredNode(value)
		if (currentNode.next[0] === undefined) {return undefined}
		return currentNode.next[0].value
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
