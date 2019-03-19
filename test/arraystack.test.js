const ods = require('../ods.js')


// Test ArrayStack data structure
test('ArrayStack add', () => {
	let a = new ods.ArrayStack()
	a.add(0, 0)
	a.add(1, 1)
	a.add(2, 2)
	a.add(3, 3)
	a.add(4, 4)
	expect(a.array).toEqual([0,1,2,3,4, undefined, undefined, undefined])
	expect(a.length).toBe(5)
})

test('ArrayStack set', () => {
	let a = new ods.ArrayStack()
	a.add(0, 5)
	expect(a.set(0, 3)).toBe(5)
	expect(a.array).toEqual([3])
	expect(a.length).toBe(1)
	// expect(a.set(5, 5)).toBe()
	// expect(a.set(-1, 5)).toBe()
})

test('ArrayStack get', () => {
	let a = new ods.ArrayStack()
	a.add(0, 5)
	expect(a.get(0)).toBe(5)
	expect(a.length).toBe(1)
	// expect(a.get(5)).toBe()
	// expect(a.get(-1)).toBe()
})

test('ArrayStack remove', () => {
	let a = new ods.ArrayStack()
	a.add(0, 5)
	a.remove(0)
	expect(a.array[0]).toBe(undefined)
	expect(a.length).toBe(0)
	// expect(a.remove(5)).toBe()
	// expect(a.remove(-1)).toBe() 
})

test('ArrayStack combined', () => {
	let a = new ods.ArrayStack()
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
