/*
==>  Longest Substring Without Repeating Characters <== MEDIUM
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
	let length = s.length;
	let hasSeen = new Set();
	let longest = 0, i = 0, j = 0;
    
	while(i < length && j < length) {
	  if (!hasSeen.has(s[j])) {
      hasSeen.add(s[j]);
      j++;
      longest = Math.max(longest, j - i);
	  } else {
      hasSeen.delete(s[i]);
      i++;
  	}
	}
  return longest
};

/*
	Sliding Window Method!!!
	Time Complexity: O(N)
	Space Complexity: O(N) where N is the size of the Set
*/


const lengthOfLongestSubstringBrutForce = (s) => {
	let longest = 0;
  
  for (let i = 0; i < s.length; i++) {
    let hasSeen = new Set();
    let currLength = 0;
    for (let j = i; j < s.length; j++) {
      let char = s[j];
      if (!hasSeen.has(char)) {
        hasSeen.add(char);
        currLength++;
        if (currLength > longest) {
          longest = currLength;
        }
      } else {
        break;
      }
    }
  }
  
  return longest;
};

/* 
	Time Complexity: O(N^2)
	Space Complexity: O(N) where N is the size of the Set
*/
