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
}

class Node extends BaseNode {
	constructor(value) {
		super()
		this.value = value
	}
}

module.exports = BinarySearchTree
