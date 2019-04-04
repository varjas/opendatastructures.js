const ods = require('../ods.js')


// Test SkiplistSSet data structure
test('SkiplistSSet add', () => {
	let l = new ods.SkiplistSSet()
	expect(l.length).toBe(0)
	// Add integer values
	for (let i = 0; i < 17; i++) {
		l.add(i)
	}
	for (let i = 0; i < 17; i++) {
		expect(l.add(i)).toBe(false)
	}
})

test('SkiplistSSet find', () => {
	let l = new ods.SkiplistSSet()
	expect(l.find(0)).toBe(undefined)
	// Add integer values
	for (let i = 0; i < 17; i++) {
		l.add(i)
	}
	// Remove integer values
	for (let i = 0; i < 17; i++) {
		expect(l.find(i)).toBe(i)
		// expect(l.length).toBe(16 - i)
	}
	expect(l.find(20)).toBe(undefined)
})
