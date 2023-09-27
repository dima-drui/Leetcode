function addBinary(a: string, b: string): string {

    let res = '', i = 1, increment = 0
    const length = Math.max(a.length, b.length)

    while( i <= length){
        let midSum = parseInt(a[a.length-i] || '0') + parseInt(b[b.length-i] || '0') + increment
        increment = midSum > 1 ? 1 : 0
        res = midSum%2 == 0 ? '0' + res : '1' + res 
        i++
    }
    if(increment == 1) res = '1' + res

    return res
};


console.log(`'1', '111': `, 
    addBinary('1', '111')
);



// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.