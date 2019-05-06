const BinarySearchTree = require('./binarysearchtree.js')
const BaseNode = require('./base.js').BaseNode


/** Implementation of a Treap data structure */
class Treap extends BinarySearchTree {
	constructor() {
		super()
	}

	rotateLeft(node) {
		let current = node.right
		let current.previous = node.previous
		if (current.previous !== undefined) {
			if (current.previous.left === node) {
				current.previous.left = current
			}else{
				current.previous.right = current
			}
		}
		node.right = current.left
		if (node.right !== undefined) {
			node.right.previous = node
		}
		node.previous = current
		current.left = node
		if (node === this.root) {
			this.root = current
			this.root.previous = undefined
		}
	}
}

class Node extends BaseNode {
	constructor(value) {
		super()
		this.priority = Math.random()
		this.value = value
	}
}

module.exports = Treap
