const BinaryTree = require('./binarytree.js')
const BaseNode = require('./base.js').BaseNode


/** Implementation of a binary search tree data structure */
class BinarySearchTree extends BinaryTree {
	constructor() {
		super()
		this.length = 0
	}

	findEq(value) {
		let node = this.root
		while (node !== undefined) {
			if (value < node.value) {
				node = node.left
			}else if (value > node.value) {
				node = node.right
			}else{
				return node.value
			}
		}
		return undefined
	}

	find(value) {
		let node = this.root
		let last = undefined
		while (node !== undefined) {
			if (value < node.value) {
				last = node
				node = node.left
			}else if (value > node.value) {
				node = node.right
			}else{
				return node.value
			}
		}
		if (last === undefined) {return undefined}
		return last.value
	}

	add(value) {
		const previous = this._findLast(value)
		return this._addChild(previous, new Node(value))
	}

	_findLast(value) {
		let node = this.root
		let previous = undefined
		while (node !== undefined) {
			previous = node
			if (value < node.value) {
				node = node.left
			}else if (value > node.value) {
				node = node.right
			}else{
				return node
			}
		}
		return previous
	}

	_addChild(previous, node) {
		if (previous === undefined) {
			this.root = node
		}else{
			if (node.value < previous.value) {
				previous.left = node
			}else if (node.value > previous.value) {
				previous.right = node
			}else{
				return false
			}
			node.previous = previous
		}
		this.length++
		return true
	}

	splice(node) {
		let adjacent, prevoius
		if (node.left !== undefined) {
			adjacent = node.left
		}else{
			adjacent = node.right
		}
		if (node === this.root) {
			this.root = adjacent
			previous = undefined
		}else{
			previous = node.previous
			if (previous.left = node) {
				previous.left = adjacent
			}else{
				previous.right = adjacent
			}
		}
		if (adjacent !== undefined) {
			adjacent.previous = previous
		}
		this.length--
	}

	_removeNode(node) {
		if (node.left === undefined || node.right === undefined) {
			this.splice(node)
		}else{
			let current = node.right
			while (current.left !== undefined) {
				current = current.left
			}
			node.value = current.value
			this.splice(current)
		}
	}

	remove(value) {
		let node = this._findLast(value)
		if (node !== undefined && value === node.value) {
			this._removeNode(node)
			return true
		}
		return false
	}
}

class Node extends BaseNode {
	constructor(value) {
		super()
		this.value = value
	}
}

module.exports = BinarySearchTree
