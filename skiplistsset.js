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

	_pickHeight() {
		let random = Math.floor(Math.random() * 2147483647)
		let value = 0
		while (random & 1) {
			value++
			random = Math.floor(random / 2)
		}
		return value
	}

	add(value) {
		let node = this.sentinel
		let currentHeight = this.height
		while (currentHeight >= 0) {
			while (node.next[currentHeight] && node.next[currentHeight].value < value) {
				node = node.next[currentHeight]
			}
			if (node.next[currentHeight] !== undefined && node.next[currentHeight].value === value) {return false}
			self.stack[currentHeight] = node
			currentHeight--
		}
		let newNode = new Node(value, this._pickHeight())
		while (this.height < newNode.height) {
			this.height++
			self.stack = this.sentinel
		}
		for (let i = 0; i < newNode.next.length) {
			newNode.next[i] = this.stack[i].next[i]
			this.stack[i].next[i] = newNode
		}
		this.length++
		return true
	}

	remove(value) {
		let removed = false
		let node = this.sentinel
		let currentHeight = this.height
		while (currentHeight >= 0) {
			while (node.next[currentHeight] !== undefined && node.next[currentHeight].value < value) {
				node = node.next[currentHeight]
			}
			if (node.next[currentHeight] !== undefined && node.next[currentHeight].value === value) {
				removed = true
				node.next[currentHeight] = node.next[currentHeight].next[currentHeight]
				if (node === this.sentinel && node.next[currentHeight] === undefined) {
					this.height--
				}
			}
			currentHeight--
		}
		if (removed === true) {this.length--}
		return removed
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
