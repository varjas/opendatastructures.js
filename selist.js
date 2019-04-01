const BaseList = require('./base.js').BaseList
const ArrayDeque = require('./arraydeque.js')

/** Implementation of space-efficient linked list data structure */
class SEList extends BaseList{
	constructor(blockSize) {
		super()
		this.dummy = new Node(0)
		this.dummy.prev = this.dummy
		this.dummy.next = this.dummy
		this.blockSize = blockSize
		this.length = 0
	}

	_getLocation(index) {
		let block
		if (index < this.size() / 2) {
			block = this.dummy.next
			while (index >= block.deque.size()) {
				index = index - block.deque.size()
				block = block.next
			}
			return [block, index]
		}else{
			block = this.dummy
			let internalIndex = this.size()
			while (index < internalIndex) {
				block = block.prev
				internalIndex = internalIndex - block.deque.size()
			}
			return [block, index - internalIndex]
		}
	}

	get(index) {
		const [block, internalIndex] = this._getLocation(index)
		return block.deque.get(internalIndex)
	}

	set(index, value) {
		const [block, internalIndex] = this._getLocation(index)
		return block.deque.set(internalIndex, value)
	}

	_addBefore(node) {
		let newNode = new Node(this.blockSize)
		newNode.prev = node.prev
		newNode.next = node
		newNode.next.prev = newNode
		newNode.prev.next = newNode
		return newNode
	}

	append(value) {
		let last = this.dummy.prev
		if (last === this.dummy || last.deque.size() === this.blockSize + 1) {
			last = this._addBefore(this.dummy)
		}
		last.deque.append(value)
		this.length++
	}

	_spread(block) {
		let currentBlock = block
		for (let i = 0; i < this.blockSize; i++) {
			currentBlock = currentBlock.next
		}
		currentBlock = this._addBefore(currentBlock)
		while (currentBlock !== block) {
			while (currentBlock.deque.size() < this.blockSize) {
				currentBlock.deque.addFirst(currentBlock.prev.deque.removeLast())
			}
			currentBlock = currentBlock.prev
		}
	}

	_removeNode(node) {
		node.prev.next = node.next
		node.next.prev = node.prev
	}

	_gather(block) {
		let currentBlock = block
		for (let j = 0; j < this.blockSize - 1; j++) {
			while (currentBlock.deque.size() < this.blockSize) {
				currentBlock.deque.addLast(currentBlock.next.deque.removeFirst())
			}
			currentBlock = currentBlock.next
		}
		this._removeNode(currentBlock)
	}

	add(index, value) {
		if (index < 0 || index > this.size()) {throw new Error('IndexError')}
		if (index === this.size()) {
			this.append(value)
			return
		}
		const [block, internalIndex] = this._getLocation(index)

		let currentIndex = 0
		let currentBlock = block

		while (currentIndex < this.blockSize && currentBlock !== this.dummy && currentBlock.deque.size() === this.blockSize + 1) {
			currentBlock = currentBlock.next
			currentIndex++
		}

		if (currentIndex === this.blockSize) {
			this._spread(block)
			currentBlock = block
		}

		if (currentBlock === this.dummy) {
			currentBlock = this._addBefore(currentBlock)
		}

		while (currentBlock !== block) {
			currentBlock.deque.addFirst(currentBlock.prev.deque.removeLast())
			currentBlock = currentBlock.prev
		}

		currentBlock.deque.add(internalIndex, value)
		this.length++
	}

	remove(index) {
		this._indexWithinRange(index)
		let [block, internalIndex] = this._getLocation(index)

		let currentIndex = 0
		let currentBlock = block

		while (currentIndex < this.blockSize && currentBlock != this.dummy && currentBlock.deque.size() === this.blockSize - 1) {
			currentBlock = currentBlock.next
			currentIndex++
		}

		if (currentIndex === this.blockSize) {
			this._gather(block)
		}
		block.deque.remove(internalIndex)

		while (block.deque.size() < this.blockSize - 1 && block.next != this.dummy) {
			block.deque.addLast(block.next.deque.removeFirst())
			block = block.next
		}

		if (block.deque.size() === 0) {
			this._removeNode(block)
		}

		this.length--
	}
}

class Deque extends ArrayDeque {
	constructor(blockSize) {
		super(blockSize + 1)
	}

	_resize() {
		return
	}
}

class Node {
	constructor(blockSize) {
		this.deque = new Deque(blockSize)
		this.next = undefined
		this.prev = undefined
	}
}

module.exports = SEList
