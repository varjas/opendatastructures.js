const ods = require('../ods.js')


// Test RootishArrayStack data structure
test('RootishArrayStack add', () => {
	let a = new ods.RootishArrayStack()
	for (let i = 0; i < 17; i++) {
		a.add(i, i)
	}
	expect(a.length).toBe(17)
	expect(a.blocks.length).toBe(6)
	expect(a.blocks.array[0].array).toEqual([0])
	expect(a.blocks.array[1].array).toEqual([1,2])
	expect(a.blocks.array[2].array).toEqual([3,4,5])
	expect(a.blocks.array[3].array).toEqual([6,7,8,9])
	expect(a.blocks.array[4].array).toEqual([10,11,12,13,14])
	expect(a.blocks.array[5].array).toEqual([15,16])
})

test('RootishArrayStack get', () => {
	let a = new ods.RootishArrayStack()
	for (let i = 0; i < 17; i++) {
		a.add(i, i)
	}
	expect(a.get(1)).toEqual(1)
	expect(a.get(10)).toEqual(10)
	expect(a.get(0)).toEqual(0)
})
