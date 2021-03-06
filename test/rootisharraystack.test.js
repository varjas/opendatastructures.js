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
	expect(a.blocks.array[5].array).toEqual([15,16,undefined,undefined,undefined,undefined])
	a.add(12,17)
	a.add(12,18)
	a.add(12,19)
	a.add(12,20)
	a.add(12,21)
	expect(a.length).toBe(22)
	expect(a.blocks.length).toBe(7)
	expect(a.blocks.array[0].array).toEqual([0])
	expect(a.blocks.array[1].array).toEqual([1,2])
	expect(a.blocks.array[2].array).toEqual([3,4,5])
	expect(a.blocks.array[3].array).toEqual([6,7,8,9])
	expect(a.blocks.array[4].array).toEqual([10,11,21,20,19])
	expect(a.blocks.array[5].array).toEqual([18,17,12,13,14,15])
	expect(a.blocks.array[6].array).toEqual([16,undefined,undefined,undefined,undefined,undefined,undefined])
})

test('RootishArrayStack remove', () => {
	let a = new ods.RootishArrayStack()
	for (let i = 0; i < 17; i++) {
		a.add(i, i)
	}
	expect(a.remove(1)).toEqual(1)
	expect(a.remove(8)).toEqual(9)
	expect(a.length).toBe(15)
	for (let i = 0; i < 10; i++) {
		a.remove(0)
	}
	expect(a.length).toEqual(5)
	expect(a.blocks.array[0].array).toEqual([12])
	expect(a.blocks.array[1].array).toEqual([13,14])
	expect(a.blocks.array[2].array).toEqual([15,16,undefined])
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

test('RootishArrayStack set', () => {
	let a = new ods.RootishArrayStack()
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

function printBlocks(stack) {
	let output =[]
	for (let block of stack.blocks.array) {
		output.push(block)
	}
	console.log(output)
}
