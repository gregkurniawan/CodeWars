// You received an array with two strings. Create a function that will return their product as a string. E.g.

// arrMultiply(['9','6']) should return '54'


//My solution
function arrMultiply(arr) {
    arr = arr.map(element => parseInt(element))
    return arr.reduce((a, b) => a * b).toString()
}