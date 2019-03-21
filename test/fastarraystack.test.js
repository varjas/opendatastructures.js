const ods = require('../ods.js')


// Test FastArrayStack data structure
test('FastArrayStack add', () => {
	let a = new ods.FastArrayStack()
	expect(() => a.add(1,0)).toThrowError('IndexError')
	expect(() => a.add(-1,0)).toThrowError('IndexError')
	a.add(0, 5)
	expect(a.array).toEqual([5])
	expect(a.length).toBe(1)
	// expect(a.add(5, 5)).toBe()
	// expect(a.add(-1, 5)).toBe()
})

test('FastArrayStack set', () => {
	let a = new ods.FastArrayStack()
	a.add(0, 5)
	expect(a.set(0, 3)).toBe(5)
	expect(a.array).toEqual([3])
	expect(a.length).toBe(1)
	// expect(a.set(5, 5)).toBe()
	// expect(a.set(-1, 5)).toBe()
})

test('FastArrayStack get', () => {
	let a = new ods.FastArrayStack()
	a.add(0, 5)
	expect(a.get(0)).toBe(5)
	expect(a.length).toBe(1)
	// expect(a.get(5)).toBe()
	// expect(a.get(-1)).toBe()
})

test('FastArrayStack remove', () => {
	let a = new ods.FastArrayStack()
	a.add(0, 5)
	a.remove(0)
	expect(a.array[0]).toBe(undefined)
	expect(a.length).toBe(0)
	// expect(a.remove(5)).toBe()
	// expect(a.remove(-1)).toBe() 
})

test('FastArrayStack combined', () => {
	let a = new ods.FastArrayStack()
	a.add(0, 'd')
	a.add(0, 'e')
	a.add(0, 'r')
	a.add(0, 'b')
	a.add(2, 'e')
	a.add(5, 'r')
	a.add(5, 'e')
	a.remove(4)
	a.remove(4)
	a.remove(4)
	a.set(2, 'i')
	expect(a.array).toEqual(['b', 'r', 'i', 'e'])
	expect(a.length).toBe(4)
})
