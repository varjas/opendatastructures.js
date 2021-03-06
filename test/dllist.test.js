const ods = require('../ods.js')
const testLength = 20


// Test DLList data structure
test('DLList add', () => {
	let l = new ods.DLList()
	expect(() => l.add(-1, -1)).toThrowError('IndexError')
	expect(() => l.add(1, 1)).toThrowError('IndexError')
	expect(l.length).toBe(0)
	for (let i = 0; i < testLength; i++) {
		l.add(i, i)
	}
	expect(l.length).toBe(testLength)
	let next = l.dummy
	expect(l.dummy.value).toBe(undefined)
	for (let i = 0; i < testLength; i++) {
		next = next.next
		expect(next.value).toBe(i)
	}
})

test('DLList get', () => {
	let l = new ods.DLList()
	expect(() => l.get(0)).toThrowError('IndexError')
	expect(() => l.get(-1)).toThrowError('IndexError')
	for (let i = 0; i < testLength; i++) {
		l.add(i, i)
	}
	for (let i = 0; i < testLength; i++) {
		expect(l.get(i)).toBe(i)
	}
})

test('DLList set', () => {
	let l = new ods.DLList()
	expect(() => l.get(0)).toThrowError('IndexError')
	expect(() => l.get(-1)).toThrowError('IndexError')
	for (let i = 0; i < testLength; i++) {
		l.add(i, i)
	}
	for (let i = 0; i < testLength; i++) {
		expect(l.set(i, i * 2)).toBe(i)
	}
	for (let i = 0; i < testLength; i++) {
		expect(l.get(i)).toBe(i * 2)
	}
})

test('DLList remove', () => {
	let l = new ods.DLList()
	expect(() => l.get(0)).toThrowError('IndexError')
	expect(() => l.get(-1)).toThrowError('IndexError')
	for (let i = 0; i < testLength; i++) {
		l.add(i, i)
	}
	l.remove(16)
	l.remove(5)
	l.remove(0)
	expect(l.get(0)).toBe(1)
	expect(l.get(4)).toBe(6)
	expect(l.get(13)).toBe(15)
	expect(l.length).toBe(testLength - 3)
})
