const structureNames = [
	'ArrayStack',
	'FastArrayStack',
	'ArrayQueue',
	'ArrayDeque',
	'DualArrayDeque',
	'RootishArrayStack',
	'SLList',
	'DLList',
	'SEList',
	'SkiplistSSet',
	'SkiplistList',
	'ChainedHashTable',
	'LinearHashTable',
	'BinaryTree',
	'BinarySearchTree',
	'Treap'
]

let structures = {}

// Generate combined object of all data structures
structureNames.forEach(name => {
	structures[name] = require('./' + name.toLowerCase() + '.js')
})

module.exports = structures
