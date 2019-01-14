/*
	=> You can assume the input string only contains lowercase letters.
	"civic" should return true
	"ivicc" should return true
	"civil" should return false
	"livci" should return false

*/

const isPermStrPalindrome = (string) => {
	let stringLeft = new Set();

	for (let char of string) {
		if (stringLeft.has(char)) {
			stringLeft.delete(char);
		} else {
			stringLeft.add(char);
		}
	}

	return stringLeft.size <= 1;	
};

// console.log(isPermStrPalindrome("PALLAPOLL")); // true


/*
	Time Complexity: O(N) => We have to iterate thru every char in the string
	Space Complexity: O(N) => Worst case if the string is all different

	Tips!! 
		- We don't need to make the permutation of the string, we can just check if we have the
			character that different 0 (all chars are cross out) or 1 (the middle char left which is a palindrome)
*/