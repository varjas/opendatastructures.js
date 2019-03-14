const ods = require('../ods.js')


// Test DualArrayDeque data structure
test('DualArrayDeque add', () => {
	let a = new ods.DualArrayDeque()
	for (let i = 0; i < 17; i++) {
		a.add(i, i)
	}
	expect(a.size()).toBe(17)
	expect(a.front.array).toEqual([7,6,5,4,3,2,1,0])
	expect(a.back.array).toEqual([8,9,10,11,12,13,14,15,16])
})

test('DualArrayDeque remove', () => {
	let a = new ods.DualArrayDeque()
	for (let i = 0; i < 17; i++) {
		a.add(i, i)
	}
	expect(a.remove(1)).toEqual(1)
	expect(a.remove(8)).toEqual(9)
	expect(a.size()).toBe(15)
	expect(a.front.array).toEqual([7,6,5,4,3,2,0])
	expect(a.back.array).toEqual([8,10,11,12,13,14,15,16])
	for (let i = 0; i < 10; i++) {
		a.remove(0)
	}
	expect(a.front.array).toEqual([13,12])
	expect(a.back.array).toEqual([14,15,16])
})

test('DualArrayDeque get', () => {
	let a = new ods.DualArrayDeque()
	for (let i = 0; i < 17; i++) {
		a.add(i, i)
	}
	expect(a.get(1)).toEqual(1)
	expect(a.get(10)).toEqual(10)
	expect(a.get(0)).toEqual(0)
})

test('DualArrayDeque set', () => {
	let a = new ods.DualArrayDeque()
	for (let i = 0; i < 17; i++) {
		a.add(i, i)
	}
	expect(a.set(1, 3)).toEqual(1)
	expect(a.get(1)).toEqual(3)
	expect(a.set(0, 5)).toEqual(0)
	expect(a.get(0)).toEqual(5)
	expect(a.set(15, 2)).toEqual(15)
	expect(a.get(15)).toEqual(2)
})
