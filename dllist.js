const BaseCollection = require('./base.js')

/** Implementation of doubly-linked list data structure */
class DLList extends BaseCollection{
	constructor() {
		super()
		this.dummy = new Node(undefined)
		this.dummy.prev = this.dummy
		this.dummy.next = this.dummy
		this.length = 0
	}

	getNode(index) {
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
}

class Node {
	constructor(value) {
		this.value = value
		this.next = undefined
		this.prev = undefined
	}
}

module.exports = DLList
