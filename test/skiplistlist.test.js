const ods = require('../ods.js')


// Test SkiplistList data structure
test('SkiplistList add', () => {
	let l = new ods.SkiplistList()
	// Check index errors and default length initialization
	expect(() => l.add(-1, -1)).toThrowError('IndexError')
	expect(() => l.add(1, 1)).toThrowError('IndexError')
	expect(l.length).toBe(0)
	// Add integer values that correspond with each index
	for (let i = 0; i < 17; i++) {
		l.add(i, i)
	}
	expect(l.length).toBe(17)
})

// Print visual representation of skiplist 
function printSkiplist(list) {
	// Generate rows for each height
	let output = new Array(list.height).fill([])
	// Iterate through heights
	for (let h = list.height; h >= 0; h--) {
		let layer = []
		let previous = -1
		let node = list.sentinel.next[h]
		// Iterate through each node
		while (node !== undefined) {
			// Add blanks for values that are not present
			for (let i = previous + 1; i < node.value; i++) {
				layer.push(' '.repeat(i.toString().length))
			}
			// Add values that are present
			layer.push(node.value.toString())
			// Save current value for offset on next iteration
			previous = node.value
			// Move to next node
			node = node.next[h]
		}
		console.log(layer.join(' '))
	}
}
