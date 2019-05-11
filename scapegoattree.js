const BinarySearchTree = require('./binarysearchtree.js')


/** Implementation of a scapegoat tree data structure */
class ScapegoatTree extends BinarySearchTree {
	constructor() {
		super()
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
}

module.exports = ScapegoatTree