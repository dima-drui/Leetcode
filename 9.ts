function isPalindrome(x: number) {

    let numToString = x.toString()

    for(let s=0, e=numToString.length-1; s<=e; s++, e--){
        if(numToString[s]!== numToString[e]) return false
    }
    return true
};

let num = 1221

console.log(
    isPalindrome(num)
)


// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
// Constraints:
// -231 <= x <= 231 - 1
 
// Follow up: Could you solve it without converting the integer to a string?