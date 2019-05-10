const BinarySearchTree = require('./binarysearchtree.js')
const BaseNode = require('./base.js').BaseNode


/** Implementation of a Treap data structure */
class Treap extends BinarySearchTree {
	constructor() {
		super()
	}

	rotateLeft(node) {
		let current = node.right
		current.previous = node.previous
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

	rotateRight(node) {
		let current = node.left
		current.previous = node.previous
		if (current.previous !== undefined) {
			if (current.previous.left === node) {
				current.previous.left = current
			}else{
				current.previous.right = current
			}
		}
		node.left = current.right
		if (node.left !== undefined) {
			node.left.previous = node
		}
		node.previous = current
		current.right = node
		if (node === this.root) {
			this.root = current
			this.root.previous = undefined
		}
	}

	add(value) {
		let node = new Node(value)
		if (this.addNode(node)) {
			this.bubbleUp(node)
			return true
		}
		return false
	}

	bubbleUp(node) {
		while (node !== this.root && node.previous.priority > node.priority) {
			if (node.previous.right === node) {
				this.rotateLeft(node.previous)
			}else{
				this.rotateRight(node.previous)
			}
		}
		if (node.previous === undefined) {
			this.root = node
		}
	}

	remove(value) {
		let node = this.findLast(value)
		if (node !== undefined && node.value == value) {
			this.trickleDown(node)
			this.splice(node)
			return true
		}
		return false
	}

	trickleDown(node) {
		while (node.left !== undefined || node.right !== undefined) {
			if (node.left === undefined) {
				this.rotateLeft(node)
			}else if (node.right === undefined) {
				this.rotateRight(node)
			}else if (node.left.previous < node.right.previous) {
				this.rotateRight(node)
			}else{
				this.rotateLeft(node)
			}
			if (this.root === node) {
				this.root = node.parent
			}
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
