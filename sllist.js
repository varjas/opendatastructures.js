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

	pop() {
		if (this.length === 0) {return undefined}
		const value = this.head.value
		this.head = this.head.next
		this.length--
		if (this.length === 0) {
			this.tail = undefined
		}
		return value
	}

	remove() {
		return this.pop()
	}

	add(value) {
		const newNode = new Node(value)
		if (this.length === 0) {
			this.head = newNode
		}else{
			this.tail.next = newNode
		}
		this.tail = newNode
		this.length++
		return true
	}
}

class Node {
	constructor(value) {
		this.value = value
		this.next = undefined
	}
}

module.exports = SLList
