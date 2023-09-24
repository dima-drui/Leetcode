class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {

    const head: ListNode = new ListNode()
    let curr: ListNode = head

    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }

    curr.next = list1 || list2
    
    let allValues: number[] = seeALValues(head.next)

    return { h: head.next, allValues: allValues}
};


function seeALValues(node: ListNode | null): number[] {
    let allValues: number[] = []
    let curr: ListNode | null = node
    while(curr !== null) {
        allValues.push(curr.val)
        curr = curr.next
    }
    return allValues
}


const list13 = new ListNode(3)
const list12 = new ListNode(2, list13)
const list11 = new ListNode(1, list12)

const list23 = new ListNode(4)
const list22 = new ListNode(2, list23)
const list21 = new ListNode(1, list22)

console.log(
    mergeTwoLists(list11, list21)
)

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.