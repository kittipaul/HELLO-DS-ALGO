// In a sorted array, find the number of pairs whose sum is less than a given value.

var myArray = [3, 4, 6, 10, 13, 15];

const pairSumLessThanGivenValue = (arr, val) => {
	let count = 0;
	for(let i = 0; i < arr.length - 1; i++){
		for(let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] < val) {
				count++;
			};
		};
	};
	return count;
};

// console.log(pairSumLessThanGivenValue(myArray, 16));  // 5
/*
	Brute force approach
	Time complexity: O(N^2)
	Space Complexity: O(1)
*/


const pairSumLessValue = (arr, val) => {
	let left = 0, 
			right = arr.length - 1,
			count = 0;

	while (left < right) {
		if (arr[left] + arr[right] < val) {
			count += right - left;
			left++;
		} else {
			right--;
		}
	}
	return count;
}

// console.log(pairSumLessValue(myArray, 16));  // 5

/*
	Time complexity: O(N)  => Iterate thru array only once
	Space Complexity: O(1)

	Use the advantage of the sorted array to move two pointer for sum the elements
*/