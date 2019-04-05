const BaseList = require('./base.js').BaseList

/** Implementation of skiplist data structure */
class SkiplistList extends BaseList {
	constructor() {
		super()
		this.sentinel = new Node(undefined, 32)
		this.stack = new Array(this.sentinel.height() + 1)
		this.height = 0
		this.length = 0
	}

	_pickHeight() {
		let random = Math.floor(Math.random() * 2147483647)
		let value = 0
		while (random & 1) {
			value++
			random = Math.floor(random / 2)
		}
		return value
	}

	_findPredNode(index) {
		let currentNode = this.sentinel
		let currentHeight = this.height
		let currentIndex = -1
		while (currentHeight >= 0) {
			while (currentNode.next[currentHeight] !== undefined && (currentIndex + currentNode.length[currentHeight]) < index) {
				currentIndex += currentNode.length[currentHeight]
				currentNode = currentNode.next[currentHeight]
			}
			currentHeight--
		}
		return currentNode
	}

	get(index) {
		this._indexWithinRange(index)
		return this._findPredNode(index).next[0].value
	}

	set(index, value) {
		this._indexWithinRange(index)
		let currentNode = this._findPredNode(index).next[0]
		const currentValue = currentNode.value
		currentNode.value = value
		return currentValue
	}
}

class Node {
	constructor(value, height) {
		this.value = value
		this.next = new Array(height + 1)
		this.length = new Array(height + 1).fill(1)
	}
	height() {
		return this.next.length - 1
	}
}

module.exports = SkiplistList
