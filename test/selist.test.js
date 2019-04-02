const ods = require('../ods.js')


// Test SEList data structure
test('SEList add', () => {
	let l = new ods.SEList(3)
	// Check index errors and default length initialization
	expect(() => l.add(-1, -1)).toThrowError('IndexError')
	expect(() => l.add(1, 1)).toThrowError('IndexError')
	expect(l.length).toBe(0)
	// Add integer values that correspond with each index
	for (let i = 0; i < 17; i++) {
		l.add(i, i)
	}
	// Validate that array blocks were generated and set correctly
	expect(l.dummy.next.deque.array).toEqual([0,1,2,3])
	expect(l.dummy.next.next.deque.array).toEqual([4,5,6,7])
	expect(l.dummy.next.next.next.deque.array).toEqual([8,9,10,11])
	expect(l.dummy.next.next.next.next.deque.array).toEqual([12,13,14,15])
	expect(l.dummy.next.next.next.next.next.deque.array).toEqual([16,undefined,undefined,undefined])

	l = new ods.SEList(3)
	let length = 17
	// Add integer values to index zero
	for (let i = 0; i < length; i++) {
		l.add(0, i)
	}
	// Validate that values were added correctly
	for (let i = 0; i < length; i++) {
		expect(l.get(i)).toBe(length - 1 - i)
	}
})

test('SEList get', () => {
	let l = new ods.SEList(3)
	// Add integer values that correspond with each index
	for (let i = 0; i < 17; i++) {
		l.add(i, i)
	}
	// Validate that each value was set correctly
	for (let i = 0; i < 17; i++) {
		expect(l.get(i)).toBe(i)
	}
})

test('SEList set', () => {
	let l = new ods.SEList(3)
	// Add integer values that correspond with each index
	for (let i = 0; i < 17; i++) {
		l.add(i, i)
	}
	// Set each index to twice the size of the integer value
	for (let i = 0; i < 17; i++) {
		l.set(i, i * 2)
	}
	// Validate that each value was set correctly
	for (let i = 0; i < 17; i++) {
		expect(l.get(i)).toBe(i * 2)
	}
})

test('SEList remove', () => {
	let l = new ods.SEList(3)
	// Add integer values that correspond with each index
	for (let i = 0; i < 17; i++) {
		l.add(i, i)
	}
	l.remove(0)
	expect(l.length).toBe(16)
	l.remove(3)
	expect(l.length).toBe(15)
	l.remove(5)
	expect(l.length).toBe(14)
	l.remove(l.length - 1)
	expect(l.length).toBe(13)

	// Remove remaining values from the first index
	for (let i = 0; i < l.length; i++) {
		l.remove(0)
		expect(l.length).toBe(12 - i)
	}
})

function printBlocks(list) {
	let block = list.dummy.next
	while (block !== list.dummy) {
		console.log(block.deque.array)
		block = block.next
	}
}
