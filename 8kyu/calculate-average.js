// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


//My solution
const findAverage = array => (array.length === 0) ? 0 : array.reduce((a, b) => a + b, 0) / array.length

//Alternate Solution
const findAverage = array => {
    if (array.length === 0) {
        return 0;
    } else {
        return array.reduce((a, b) => a + b, 0) / array.length
    }
}