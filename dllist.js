const BaseList = require('./base.js').BaseList

/** Implementation of doubly-linked list data structure */
class DLList extends BaseList{
	constructor() {
		super()
		this.dummy = new Node(undefined)
		this.dummy.prev = this.dummy
		this.dummy.next = this.dummy
		this.length = 0
	}

	_getNode(index) {
		let value
		if (index < this.length / 2) {
			value = this.dummy.next
			for (let i = index; i >= 0; i--) {
				value = value.next
			}
		}else{
			value = this.dummy
			for (let i = this.length - index; i >= 0; i--) {
				value = value.prev
			}
		}
		return value
	}

	_addBefore(node, value) {
		let newNode = new Node(value)
		newNode.prev = node.prev
		newNode.next = node
		newNode.next.prev = newNode
		newNode.prev.next = newNode
		this.length++
		return newNode
	}

	_removeNode(node) {
		node.prev.next = node.next
		node.next.prev = node.prev
		this.length--
	}

	get(index) {
		return this._getNode(index).value
	}

	set(index, value) {
		let specificNode = this._getNode(index)
		const current = specificNode.value
		specificNode.value = value
		return current
	}

	add(index, value) {
		this._addBefore(this._getNode(index), value)
	}

	remove(index) {
		this._removeNode(this._getNode(index))
	}
}

class Node {
	constructor(value) {
		this.value = value
		this.next = undefined
		this.prev = undefined
	}
}

module.exports = DLList
