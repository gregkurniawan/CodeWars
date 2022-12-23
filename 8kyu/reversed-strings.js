// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


//My Solution
const solution = str => str.split('').reverse().join('')

//Alternate Solution
function solution(str) {
    let reversed = str.split('').reverse().join('')
    return reversed
}