// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


//My solution
function sumMix(x) {
    let sum = 0
    x.forEach(element => {
        element = Number(element)
        sum += element
    })
    return sum
}