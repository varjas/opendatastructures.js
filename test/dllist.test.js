const ods = require('../ods.js')


// Test DLList data structure
test('DLList add', () => {
	let l = new ods.DLList()
	expect(l.length).toBe(0)
	for (let i = 0; i < 17; i++) {
		l.add(i, i)
	}
	expect(l.length).toBe(17)
	let next = l.dummy
	expect(l.dummy.value).toBe(undefined)
	for (let i = 0; i < 17; i++) {
		next = next.next
		expect(next.value).toBe(i)
	}
})
