const ods = require('../ods.js')
const testLength = 5


// Test BinarySearchTree data structure
test('BinarySearchTree add', () => {
	let t = new ods.BinarySearchTree()
	expect(t.length).toBe(0)
	// Add integer values
	for (let i = 0; i >= -testLength; i--) {
		expect(t.add(i)).toBe(true)
	}
	for (let i = 1; i < testLength; i++) {
		expect(t.add(i)).toBe(true)
	}
	// Check that duplicate values can't be added
	expect(t.add(1)).toBe(false)
	expect(t.length).toBe(testLength * 2)
})

test('BinarySearchTree find', () => {
	let t = new ods.BinarySearchTree()
	expect(t.find(0)).toBe(undefined)
	// Add integer values
	t.add(1)
	t.add(0)
	// Add integer values
	for (let i = 2; i < testLength; i++) {
		t.add(i)
	}
	for (let i = 0; i < testLength; i++) {
		expect(t.find(i)).toBe(i)
	}
	expect(t.find(testLength + 1)).toBe(undefined)
})

test('BinarySearchTree remove', () => {
	let t = new ods.BinarySearchTree()
	expect(t.remove(1)).toBe(false)
	// Add integer values
	for (let i = 0; i >= -testLength; i--) {
		t.add(i)
	}
	for (let i = 1; i < testLength; i++) {
		t.add(i)
	}
	// Remove integer values
	for (let i = -testLength; i < testLength; i++) {
		expect(t.remove(i)).toBe(true)
	}
	// Check that duplicate values can't be added
	expect(t.remove(1)).toBe(false)
	expect(t.length).toBe(0)
})


// Print visual representation of tree
function printTree(tree) {
	let output = mapOutput(tree.root)
	console.log(output)
	console.log(output.flat(1))
	printRow(output)
}

function printRow(arr) {
	let row = ''
	for (let element of arr) {
		if (typeof(element) === 'object') {
			if (element.length === 0) {
				// console.log('blank')
				row += ' '
			}
		}else{
			row += ' ' + element.toString() + ' '
		}
	}
	console.log(row)
	// console.log(arr.filter((v) => typeof(v) !== 'object'), arr.filter((v) => typeof(v) === 'object'))
	// console.log(arr.filter((v) => typeof(v) === 'object'))
	// console.log(arr.filter((v) => typeof(v) === 'object').flat(1))
	let next = arr.filter((v) => typeof(v) === 'object').flat(1)
	if (next.length === 0) {return}
	return printRow(next)
}

function mapOutput(node) {
	if (node === undefined) {return []}
	return [node.value, mapOutput(node.left), mapOutput(node.right)]
}
