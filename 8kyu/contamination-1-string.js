// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"


//My solution
const contamination = (text, char) => (!text.length || !char.length) ? '' : text.split('').fill(char).join('')


//Refactored solution
const contamination = (text, char) => char.repeat(text.length)