// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


//My solution
function rowSumOddNumbers(n) {
    let odds = (n * n) - (n - 1)
    let ans = 0
    let count = 0

    while (count < n) {
        if (odds % 2 !== 0) {
            ans += odds
            count++
        }
        odds++
    }

    return ans
}

// Refactored
const rowSumOddNumbers = n => Math.pow(n, 3)