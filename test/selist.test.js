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
})
