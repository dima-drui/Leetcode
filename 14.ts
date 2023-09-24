function longestCommonPrefix(strs: string[]): string {
    
    let template = strs[0]
    
    while(template.length > 0){
        let amount = 0
        for(let i=1 ; i<strs.length ; i++) {
            if(strs[i].startsWith(template)) amount++
        }
        
        if(amount == strs.length - 1 ) return template

        template = template.slice(0, -1)
    }
    return ""
};


// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".


// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 
// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.