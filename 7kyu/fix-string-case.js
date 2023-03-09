// n this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!


//My solution
function solve(s) {
    let lower = 0
    let upper = 0
    let arr = s.split('')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i].toLowerCase()) {
            lower++
        } else {
            upper++
        }
    }

    if (lower > upper || lower === upper) {
        return s.toLowerCase()
    } else {
        return s.toUpperCase()
    }
}


//Refactor
function solve(s) {
    let lower = 0
    let upper = 0
    let arr = s.split('')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i].toLowerCase()) {
            lower++
        } else {
            upper++
        }
    }

    return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}