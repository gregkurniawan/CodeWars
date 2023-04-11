// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];


//My solution
const first = (arr, n) => (n === 0) ? [] : (n === undefined) ? [arr[0]] : arr.slice(0, n)

//Refactored
const first = (arr, n = 1) => arr.slice(0, n)