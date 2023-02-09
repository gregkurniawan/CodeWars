// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14


//My solution
function getSumOfDigits(integer) {
    return integer.toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0)
}