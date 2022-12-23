// DESCRIPTION:
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


//My Solution
const booleanToString = b => (b === true) ? b.toString() : b.toString()

//Alternative Solution
function booleanToString(b) {
    return (b === true) ? 'true' : 'false'
}