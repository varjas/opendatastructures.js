const ods = require('../ods.js')


// Test ArrayDeque data structure
test('ArrayDeque add', () => {
	let a = new ods.ArrayDeque()
	a.add(0,0)
	a.add(1,1)
	a.add(2,2)
	expect(a.array).toEqual([0,1,2, undefined])
	expect(a.length).toBe(3)
})

test('ArrayDeque remove', () => {
	let a = new ods.ArrayDeque()
	a.add(0,0)
	a.add(1,1)
	a.add(2,2)
	expect(a.remove(1)).toEqual(1)
	expect(a.length).toBe(2)
	expect(a.remove(1)).toEqual(2)
	expect(a.remove(0)).toEqual(0)
})

test('ArrayDeque get', () => {
	let a = new ods.ArrayDeque()
	a.add(0,0)
	a.add(1,1)
	a.add(2,2)
	expect(a.get(1)).toEqual(1)
	expect(a.get(2)).toEqual(2)
	expect(a.get(0)).toEqual(0)
})
