const ArrayQueue = require('./arrayqueue.js')


/** Implementation of a basic binary tree data structure */
class BinaryTree {
	constructor() {
		this.root = undefined
	}

	depth(node) {
		let depth = 0
		while (node !== this.root) {
			node = node.parent
			depth++
		}
		return depth
	}

	size(node) {
		if (node === undefined) {return 0}
		return 1 + this.size(node.left) + this.size(node.right)
	}

	height(node) {
		if (node === undefined) {return 0}
		return 1 + this.max(this.height(node.left), this.height(node.right))
	}

	traverse(node) {
		if (node === undefined) {return}
		this.traverse(node.left)
		this.traverse(node.right)
	}
}

module.exports = BinaryTree
