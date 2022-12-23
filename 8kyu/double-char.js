// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


//My Solution
function doubleChar(str) {
    let double = ""
    for (let i = 0; i < str.length; i++) {
        double += str[i] + str[i]

    }
    return double
}

//Alternate Solution
const doubleChar = str => str.split('').map(c => c+c).join('')
