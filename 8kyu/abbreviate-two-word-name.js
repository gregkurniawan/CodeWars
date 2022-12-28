// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


//My solution
const abbrevName = name => name.split(' ').map(string => string[0].toUpperCase()).join('.')

//Alternate solution
function abbrevName(name) {
    let fName = name.split(' ')
    let lName = []
    lName.push(fName.pop())
    fName = fName.join()
    lName = lName.join()

    return `${fName[0].toUpperCase()}.${lName[0].toUpperCase()}`
}