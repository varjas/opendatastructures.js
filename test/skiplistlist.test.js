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

test('SkiplistList get', () => {
	let l = new ods.SkiplistList()
	// Check index errors and default length initialization
	expect(() => l.get(-1)).toThrowError('IndexError')
	expect(() => l.get(1)).toThrowError('IndexError')
	// Add integer values
	for (let i = 0; i < 17; i++) {
		l.add(i, i)
	}
	// Find integer values
	for (let i = 0; i < 4; i++) {
		expect(l.get(i)).toBe(i)
	}
})

test('SkiplistList set', () => {
	let l = new ods.SkiplistList()
	// Check index errors and default length initialization
	expect(() => l.set(-1)).toThrowError('IndexError')
	expect(() => l.set(1)).toThrowError('IndexError')
	// Add integer values
	for (let i = 0; i < 17; i++) {
		l.add(i, i)
	}
	// Set new integer values
	for (let i = 0; i < 17; i++) {
		expect(l.set(i, i * 2)).toBe(i)
	}
	// Find integer values
	for (let i = 0; i < 17; i++) {
		expect(l.get(i)).toBe(i * 2)
	}
})

test('SkiplistList remove', () => {
	let l = new ods.SkiplistList()
	// Check index errors and default length initialization
	expect(() => l.remove(-1)).toThrowError('IndexError')
	expect(() => l.remove(1)).toThrowError('IndexError')
	// Add integer values
	for (let i = 0; i < 17; i++) {
		l.add(i, i)
	}
	// Remove integer values from start
	for (let i = 0; i < 17; i++) {
		expect(l.remove(0)).toBe(i)
		expect(l.length).toBe(16 - i)
	}
	// Add integer values
	for (let i = 0; i < 17; i++) {
		l.add(i, i)
	}
	console.log(l.get(16))
	console.log(l.remove(15))
	// Remove integer values from end
	for (let i = 17 - 1; i >= 0; i--) {
		expect(l.remove(i)).toBe(i)
		expect(l.length).toBe(i)
	}
	// Add integer values
	// for (let i = 0; i < 17; i++) {
	// 	l.add(i, i)
	// }
	// expect(l.remove(10)).toBe(true)
	// expect(l.remove(10)).toBe(false)
})

// Print visual representation of skiplist 
function printSkiplist(list) {
	if (list.height <= 0) {return console.log('List height is zero')}
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
