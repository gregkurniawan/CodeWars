// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//My solution
function accum(s) {
    let result = '',
        arr = s.toLowerCase().split('')

    for (let i = 0; i < arr.length; i++) {
        result += arr[i].toUpperCase()

        for (let j = i; j > 0; j--) {
            result += arr[i]
        }
        if (i < arr.length - 1) {
            result += '-'
        }
    }

    return result
}

//Refactored code
function accum(s) {
    let arr = s.toLowerCase().split('')
    return arr.map((letter, index) => letter.toUpperCase() + letter.repeat(index)).join('-')
}

// const accum = (s) => s.toLowerCase()
//                       .split('')
//                       .map((letter,index) => letter.toUpperCase() + letter.repeat(index))
//                       .join('-')
