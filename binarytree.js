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
}

module.exports = BinaryTree
