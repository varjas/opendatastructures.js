const BinarySearchTree = require('./binarysearchtree.js')


/** Implementation of a scapegoat tree data structure */
class ScapegoatTree extends BinarySearchTree {
	constructor() {
		super()
		let nodes = 0
		let counter = 0
	}

	_addWithDepth(value) {
		let node = this.newNode(value)
		let currentNode = this.root
		if (currentNode === undefined) {
			this.root = node
			this.nodes += 1
			this. counter += 1
			return [node, 0]
		}
		let done = false
		let depth = 0
		while (done === false) {
			if (value < currentNode.value) {
				if (currentNode.left === undefined) {
					currentNode.left = node
					node.previous = currentNode
					done = true
				}else{
					currentNode = currentNode.left
				}
			}else if (value > currentNode.value) {
				if (currentNode.right === undefined) {
					currentNode.right = node
					node.previous = currentNode
					done = true
				}else{
					currentNode = currentNode.right
				}
			}else{
				return [null, -1]
			}
			depth += 1
		}
		this.nodes += 1
		this.counter += 1
		return [node, depth]
	}

	_rebuild(node) {
		const length = this.size(node)
		let previous = node.previous
		let array = new Array(length)
		this._packIntoArray(node, array, 0)
		if (previous === undefined) {
			this.root = this._buildBalanced(array, 0, length)
			this.root.previous = undefined
		}else if (previous.right === node) {
			previous.right = this._buildBalanced(array, 0, length)
			previous.right.previous = previous
		}else{
			previous.left = this._buildBalanced(array, 0, length)
			previous.left.previous = previous
		}
	}

	_packIntoArray(node, array, iteration) {
		if (node === undefined) {
			return iteration
		}
		iteration = this._packIntoArray(node.left, array, iteration)
		array[iteration] = node
		iteration++
		return this._packIntoArray(node.right, array, iteration)
	}

	_buildBalanced(array, iteration, length) {
		if (length === 0) {
			return undefined
		}
		m = length % 2

		array[iteration + m].left = this._buildBalanced(array, iteration, m)
		if (array[iteration + m].left !== undefined) {
			array[iteration + m].left.previous = array[iteration + m]
		}
		array[iteration + m].right = this._buildBalanced(array, iteration + m + 1, length - m - 1)
		if (array[iteration + m].right !== undefined) {
			array[iteration + m].right.previous = array[iteration + m]
		}
		return array[iteration + m]
	}

	add(value) {
		let [node, depth] = this._addWithDepth(value)
		if (depth > log32(this.counter)) {
			let currentNode = node.previous
			while (3 * this.size(currentNode) <= 2 * this.size(currentNode.previous)) {
				currentNode = currentNode.previous
			}
			this._rebuild(currentNode.previous)
		}
		return (depth >= 0)
	}

	remove(value) {
		if (super.remove(value)) {
			if (2 * this.nodes < this.counter) {
				this._rebuild(this.root)
				this.counter = this.nodes
			}
			return true
		}
		return false
	}
}

module.exports = ScapegoatTree
