function strStr(haystack: string, needle: string): number {

    let n = 0

    for(let k = 0 ; k < haystack.length ; k++){
      if(haystack[k] == needle[0]) {
        for(let h=0 ; h < needle.length; h++){
          if(haystack[k+h] == needle[h]) n++
        }
        if(n == needle.length) return k
        n=0
      }
    }

    return -1
}


// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
// Constraints:
// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.