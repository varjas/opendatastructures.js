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
	// Find integer values
	for (let i = 0; i < 17; i++) {
		expect(l.find(i)).toBe(i)
	}
	expect(l.find(20)).toBe(undefined)
})

test('SkiplistSSet remove', () => {
	let l = new ods.SkiplistSSet()
	expect(l.remove(-1)).toBe(false)
	expect(l.remove(10)).toBe(false)
	// Add integer values
	for (let i = 0; i < 17; i++) {
		l.add(i)
	}
	// Remove integer values from start
	for (let i = 0; i < 17; i++) {
		expect(l.remove(i)).toBe(true)
		expect(l.length).toBe(16 - i)
	}
	// Add integer values
	for (let i = 0; i < 17; i++) {
		l.add(i)
	}
	// Remove integer values from end
	for (let i = 17 - 1; i >= 0; i--) {
		expect(l.remove(i)).toBe(true)
		expect(l.length).toBe(i)
	}
	// Add integer values
	for (let i = 0; i < 17; i++) {
		l.add(i)
	}
	expect(l.remove(10)).toBe(true)
	expect(l.remove(10)).toBe(false)
})
