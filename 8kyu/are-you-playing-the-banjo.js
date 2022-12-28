// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.


//My solution
const areYouPlayingBanjo = name => name.toLowerCase().startsWith('r') === true ? `${name} plays banjo` : `${name} does not play banjo`

//Alternate solution
function areYouPlayingBanjo(name) {
    if (name.toLowerCase().startsWith('r') === true) {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}