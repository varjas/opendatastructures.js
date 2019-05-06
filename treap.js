const BinarySearchTree = require('./binarysearchtree.js')
const BaseNode = require('./base.js').BaseNode


/** Implementation of a Treap data structure */
class Treap extends BinarySearchTree {
	constructor() {
		super()
	}
}

class Node extends BaseNode {
	constructor(value) {
		super()
		this.p = Math.random()
		this.value = value
	}
}

module.exports = Treap
