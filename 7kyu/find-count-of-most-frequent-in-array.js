// DESCRIPTION:
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.


//My solution
function mostFrequentItemCount(collection) {
    if (collection.length) {
        return Math.max(...collection.map(element1 => collection.filter(element2 => element1 == element2).length))
    } else {
        return 0
    }
}