const structureNames = [
	'ArrayStack',
	'FastArrayStack',
	'ArrayQueue',
	'ArrayDeque',
	'DualArrayDeque',
	'RootishArrayStack',
	'SLList'
]

let structures = {}

// Generate combined object of all data structures
structureNames.forEach(name => {
	structures[name] = require('./' + name.toLowerCase() + '.js')
})

module.exports = structures
