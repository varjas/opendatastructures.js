const ods = require('../ods.js')


// Test internal base functions with ArrayStack data structure
test('ArrayStack max', () => {
	let a = new ods.ArrayStack()
	expect(a._max(1,5)).toBe(5)
	expect(a._max(5,1)).toBe(5)
	expect(a._max(-5,5)).toBe(5)
	expect(a._max(5,-5)).toBe(5)
})

test('ArrayStack index range', () => {
	let a = new ods.ArrayStack()
	expect(() => a._indexWithinRange(1)).toThrowError('IndexError')
	expect(() => a._indexWithinRange(-1)).toThrowError('IndexError')
})
