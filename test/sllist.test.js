const ods = require('../ods.js')


// Test SLList data structure
test('SLList push', () => {
	let l = new ods.SLList()
	expect(l.length).toBe(0)
	expect(l.push(0)).toBe(0)
	expect(l.head.value).toBe(0)
	expect(l.tail.value).toBe(0)
	expect(l.length).toBe(1)
	expect(l.push(1)).toBe(1)
	expect(l.head.value).toBe(1)
	expect(l.tail.value).toBe(0)
	expect(l.length).toBe(2)
	expect(l.push(2)).toBe(2)
	expect(l.head.value).toBe(2)
	expect(l.tail.value).toBe(0)
	expect(l.length).toBe(3)
	expect(l.head.next.value).toBe(1)
	expect(l.head.next.next.value).toBe(0)
	expect(l.head.next.next.next).toBe(undefined)
})
