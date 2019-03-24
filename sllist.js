const BaseCollection = require('./base.js')

/** Implementation of single-linked list data structure */
class SLList extends BaseCollection{
	constructor() {
		super()
		this.head = undefined
		this.tail = undefined
		this.length = 0
	}

	push(value) {
		let newNode = new Node(value)
		newNode.next = this.head
		this.head = newNode
		if (this.length === 0) {
			this.tail = newNode
		}
		this.length++
		return value
	}
}

class Node {
	constructor(value) {
		this.value = value
		this.next = undefined
	}
}

module.exports = SLList
