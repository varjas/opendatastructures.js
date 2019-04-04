const ods = require('../ods.js')


// Test SkiplistSSet data structure
test('SkiplistSSet add', () => {
	let l = new ods.SkiplistSSet()
	expect(l.length).toBe(0)
	// Add integer values
	for (let i = 0; i < 17; i++) {
		l.add(i)
	}
})
