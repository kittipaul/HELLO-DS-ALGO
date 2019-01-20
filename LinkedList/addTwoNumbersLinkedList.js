/*
==> ADD TWO NUMBERS <==
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

const addTwoNumbers = (l1, l2) => {
  let resultList = new ListNode(0);
  let l1Current = l1;
  let l2Current = l2;
  let carry = 0;
  let current = resultList;
    
  while (l1Current || l2Current) {
      let l1Val = (l1Current !== null) ? l1Current.val : 0;
      let l2Val = (l2Current !== null) ? l2Current.val : 0;
      let sum = l1Val + l2Val + carry;

      carry = (sum >= 10) ? 1 : 0;
      current.next = new ListNode(sum % 10);
      current = current.next;
      if (l1Current !== null) l1Current = l1Current.next;
      if (l2Current !== null) l2Current = l2Current.next;
     
  }
  if (carry > 0) {
      current.next = new ListNode(carry);
  }
  return resultList.next;
};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next = new ListNode(3);
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next = new ListNode(4);

// console.log(addTwoNumbers(l1, l2)); // 7 -> 0 -> 8

