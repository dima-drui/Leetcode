function fullJustify(words: string[], maxWidth: number): string[] {

    let res: string[] = [], 
        temp = [], 
        row = '', 
        counter = 0,
        space = ' '

    for(let i=0; i<words.length; i++){        

        if(row.length == 0 && words[i].length == maxWidth) {
            res.push(words[i])
        }

        else if(row.length + words[i].length < maxWidth){
            row.length == 0 ? row += words[i] : row += ' ' + words[i]
            temp.push(words[i])
            counter++
        } else {
            if(temp.length < 2 ){
                let diff = maxWidth - row.length
                if(diff > 0) row += space.repeat(diff)
                res.push(row)
            } else {
                let diff = maxWidth - row.length
                let gapQuantity = counter == 1 ? 1 : counter-1
                let spacesPerGap = 1 + Math.floor(diff / gapQuantity)
                let reminer = diff % gapQuantity
                row = ''
                for(let c=0; c<temp.length; c++){
                    if(c == temp.length-1) spacesPerGap = 0
                    row += temp[c] + ' '.repeat(spacesPerGap + (reminer > 0 ? 1 : 0))
                    reminer--
                }
                res.push(row)
            }
            counter = 0
            temp = []
            row = ''
            i--
        }

    }

    if(row.length > 0) {
        let diff = maxWidth - row.length
        if(diff > 0) row += space.repeat(diff)
        res.push(row)
    }

    return res
};


// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.
 

// Example 1:

// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]


// Example 2:

// Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// Output:
// [
//   "What   must   be",
//   "acknowledgment  ",
//   "shall be        "
// ]
// Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
// Note that the second line is also left-justified because it contains only one word.


// Example 3:

// Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
// Output:
// [
//   "Science  is  what we",
//   "understand      well",
//   "enough to explain to",
//   "a  computer.  Art is",
//   "everything  else  we",
//   "do                  "
// ]
 

// Constraints:

// 1 <= words.length <= 300
// 1 <= words[i].length <= 20
// words[i] consists of only English letters and symbols.
// 1 <= maxWidth <= 100
// words[i].length <= maxWidth