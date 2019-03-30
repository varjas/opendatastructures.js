const BaseList = require('./base.js').BaseList
const ArrayDeque = require('./arraydeque.js')

/** Implementation of space-efficient linked list data structure */
class SEList extends BaseList{
	constructor(blockSize) {
		super()
		this.dummy = new Node(undefined)
		this.dummy.prev = this.dummy
		this.dummy.next = this.dummy
		this.blockSize = blockSize
		this.length = 0
	}

	_getLocation(index) {
		let block
		if (index < this.length / 2) {
			block = this.dummy.next
			while (index >= block.deque.size()) {
				index = index - block.deque.size()
				block = block.next
			}
			return [block, index]
		}else{
			block = this.dummy
			let internalIndex = this.length
			while (index < internalIndex) {
				block = block.prev
				internalIndex = internalIndex - block.deque.size()
			}
			return [block, index - internalIndex]
		}
	}

	get(index) {
		const location = this._getLocation(index)
		const block = location[0]
		const internalIndex = location[1]
		return block.deque.get(internalIndex)
	}

	set(index, value) {
		const location = this._getLocation(index)
		const block = location[0]
		const internalIndex = location[1]
		return block.deque.set(internalIndex, value)
	}

	_addBefore(node, value) {
		let newNode = new Node(value)
		newNode.prev = node.prev
		newNode.next = node
		newNode.next.prev = newNode
		newNode.prev.next = newNode
		return newNode
	}

	append(value) {
		let last = dummy.prev
		if (last === dummy || last.deque.size() === this.blockSize + 1) {
			last = this._addBefore(dummy)
		}
		last.deque.append(value)
		this.length++
	}
}

class Deque extends ArrayDeque {
	constructor() {
		super()
	}

	_resize() {
		return
	}
}

class Node {
	constructor(value) {
		this.deque = new Deque()
		this.next = undefined
		this.prev = undefined
	}
}

module.exports = SEList
