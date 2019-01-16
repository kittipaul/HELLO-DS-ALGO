const highestProductOf3Nested = (arr) => {
	if (arr.length < 3) {
		return "Array of integers should have at least 3 items";
	}

	var highestProduct = -Number.MAX_VALUE;

	for (let i = 0; i < arr.length - 2; i++) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				let productOf3 = arr[i] * arr[j] * arr[k];

				if (productOf3 > highestProduct) {
					highestProduct = productOf3;
				}
			}
		}
	}

	return highestProduct;
}

const arrayOfInts = [1, 10, -5, 1, -100];
// console.log(highestProductOf3Nested(arrayOfInts));
/* 
	Complexity:
		Time => O(n^3)
		Space => O(1)
*/

const highestProductOf3 = (arr) => {
	if (arr.length < 3) throw new Error("Require 3 items at least");

	let highest = Math.max(arr[0], arr[1]);
	let lowest = Math.min(arr[0], arr[1]);

	let highestOf2 = arr[0] * arr[1];
	let lowestOf2 = arr[0] * arr[1];

	let highestOf3 = arr[0] * arr[1] * arr[2];

	for (let i = 2; i < arr.length; i++) {
		let current = arr[i];

		highestOf3 = Math.max(highestOf3, current * highestOf2, current * lowestOf2);
		highestOf2 = Math.max(highestOf2, current * highest, current * lowest);
		lowestOf2 = Math.min(lowestOf2, current * highest, current * lowest);
		highest = Math.max(highest, current);
		lowest = Math.min(lowest, current);

	}

	return "Hey this is Greedy algorithm answer: " + highestOf3;
}

// console.log(highestProductOf3(arrayOfInts));
/* 
	Complexity:
		Time => O(n) because we walk thru input array once
		Space => O(1)
*/

const highestProductOf3BySort = (arr) => {
	var sortedArray = arr.sort((a,b) => {return a - b});
	var lastIndex = arr.length - 1;
	return Math.max(
					(sortedArray[0] * sortedArray[1] * sortedArray[lastIndex]), 
					(sortedArray[lastIndex] * sortedArray[lastIndex - 1] * sortedArray[lastIndex - 2])
				);
}

// console.log(highestProductOf3BySort(arrayOfInts));
/* 
	Complexity:
		Time => O(n lg n) because we sort the array 
		Space => O(1)
*/


