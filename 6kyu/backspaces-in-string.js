// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


//My solution
function cleanString(s) {
    let arr = []
    s.split('').forEach(letter => {
        letter !== '#' ? arr.push(letter) : arr.pop()
    })
    return arr.join('')
}