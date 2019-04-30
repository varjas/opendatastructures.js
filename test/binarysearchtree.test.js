const ods = require('../ods.js')
const testLength = 20


// Test BinarySearchTree data structure
test('BinarySearchTree add', () => {
	let t = new ods.BinarySearchTree()
	expect(t.length).toBe(0)
	// Add integer values
	for (let i = 0; i < testLength; i++) {
		expect(t.add(i)).toBe(true)
	}
	// Check that duplicate values can't be added
	expect(t.add(1)).toBe(false)
	expect(t.length).toBe(testLength)
	// printTree(t)
})

// Print visual representation of tree
function printTree(tree) {
	let next = [tree.root]
	let width = 0
	while (next.length > 0) {
		console.log(' '.repeat(width) + next.map((v) => {return v.value}).join(' '))
		for (let i = next.length - 1; i >= 0; i--) {
			let addElements = [next[i].left, next[i].right].filter((v) => v !== undefined)
			next.splice(i, 1, ...addElements)
			width += 2
		}
	}
}
