const ods = require('../ods.js')
const testLength = 20


// Test LinearHashTable data structure
test('LinearHashTable add', () => {
	let h = new ods.LinearHashTable()
	expect(h.length).toBe(0)
	// // Add integer values that correspond with each index
	for (let i = 0; i < testLength; i++) {
		expect(h.add(i)).toBe(true)
	}
	// // Check that duplicate values can't be added
	expect(h.add(1)).toBe(false)
	expect(h.length).toBe(testLength)
})

test('LinearHashTable find', () => {
	let h = new ods.LinearHashTable()
	// expect(h.find(1)).toBe(null)
	// Add integer values that correspond with each index
	for (let i = 0; i < testLength; i++) {
		h.add(i)
	}
	// Find integer values
	for (let i = 0; i < testLength; i++) {
		expect(h.find(i)).toBe(i)
	}
})

test('LinearHashTable remove', () => {
	let h = new ods.LinearHashTable()
	// Add integer values that correspond with each index
	for (let i = 0; i < testLength; i++) {
		h.add(i)
	}
	// Find integer values
	for (let i = 0; i < testLength; i++) {
		expect(h.length).toBe(testLength - i)
		expect(h.remove(i)).toBe(i)
	}
	expect(h.length).toBe(0)
})

// Print visual representation of hash table
function printHashTable(hashTable) {
	let output = []
	for (let a of hashTable.table) {
		output.push(a.array)
	}
	console.log(output)
}
