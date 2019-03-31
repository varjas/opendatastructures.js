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

test('ArrayStack append', () => {
	let a = new ods.ArrayStack()
	a.append(0)
	expect(a.length).toBe(1)
	expect(a.array).toEqual([0])
	a.append(1)
	expect(a.length).toBe(2)
	expect(a.array).toEqual([0,1])
	a.append(2)
	expect(a.length).toBe(3)
	expect(a.array).toEqual([0,1,2,undefined])
})
