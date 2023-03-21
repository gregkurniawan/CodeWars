// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!


//My solution
function solve(s) {

    let upper = 0,
        lower = 0,
        num = 0,
        char = 0

    for (let i = 0; i < s.length; i++) {
        if (/[a-z]/.test(s[i])) {
            lower += 1
        } else if (/[A-Z]/.test(s[i])) {
            upper += 1
        } else if (/[0-9]/.test(s[i])) {
            num += 1
        } else {
            char += 1
        }
    }

    return [upper, lower, num, char]
}