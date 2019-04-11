const ods = require('../ods.js')


// Test ChainedHashTable data structure
test('ChainedHashTable add', () => {
	let h = new ods.ChainedHashTable()
	const testLength = 17
	expect(h.length).toBe(0)
	// Add integer values that correspond with each index
	for (let i = 0; i < testLength; i++) {
		h.add(i)
	}
	expect(h.length).toBe(testLength)
	// Sum total lengths of internal arrays
	expect(h.table.reduce((acc, a) => {
		return acc + a.length
	}, 0)).toBe(testLength)
})

test('ChainedHashTable find', () => {
	let h = new ods.ChainedHashTable()
	expect(h.find(1)).toBe(null)
	// Add integer values that correspond with each index
	for (let i = 0; i < 17; i++) {
		h.add(i)
	}
	// Find integer values
	for (let i = 0; i < 17; i++) {
		expect(h.find(i)).toBe(i)
	}
	expect(h.find(20)).toBe(null)
})

// Print visual representation of hash table
function printHashTable(hashTable) {
	let output = []
	for (let a of hashTable.table) {
		output.push(a.array)
	}
	console.log(output)
}
