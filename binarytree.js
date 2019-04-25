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

	size() {
		return this._size(this.root)
	}

	_size(node) {
		if (node === undefined) {return 0}
		return 1 + this._size(node.left) + this._size(node.right)
	}

	height() {
		return this._height(this.root)
	}

	_height(node) {
		if (node === undefined) {return 0}
		return 1 + this.max(this._height(node.left), this._height(node.right))
	}

	traverse(node) {
		if (node === undefined) {return}
		this.traverse(node.left)
		this.traverse(node.right)
	}

	traverse2() {
		let node = this.root
		let previous = undefined
		let next = undefined
		while (node !== undefined) {
			if (previous === node.parent) {
				if (node.left !== undefined) {
					next = node.left
				}else if (node.right !== undefined) {
					next = node.right
				}else {
					next = node.parent
				}
			}else if (previous === node.left) {
				if (node.right !== undefined) {
					next = node.right
				}else{
					next = node.parent
				}
			}else{
				next = node.parent
			}
			previous = node
			node = next
		}
	}

	size2() {
		let node = this.root
		let previous = undefined
		let counter = 0
		while (node !== undefined) {
			if (previous === node.parent) {
				counter++
				if (node.left !== undefined) {
					next = node.left
				}else if (node.right !== undefined) {
					next = node.right
				}else {
					next = node.parent
				}
			}else if (previous === node.left) {
				if (node.right !== undefined) {
					next = node.right
				}else{
					next = node.parent
				}
			}else{
				next = node.parent
			}
			previous = node
			node = next
		}
		return counter
	}

	bfTraverse() {
		let queue = new ArrayQueue()
		if (this.root !== undefined) {queue.add(this.root)}
		while (queue.size() > 0) {
			let node = queue.remove()
			if (node.left !== undefined) {queue.add(node.left)}
			if (node.right !== undefined) {queue.add(node.right)}
		}
	}
}

module.exports = BinaryTree
