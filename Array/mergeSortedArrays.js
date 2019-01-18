/* 
We have our lists of orders sorted numerically already, in arrays. 
 =>  Write a function to merge our arrays of orders into one sorted array.
============ Example ======================
var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

===========================================
*/


const mergeArrays = (arr1, arr2) => {
	let sortedArr = [];

	while (arr1.length || arr2.length) {
		if (arr1.length && (!arr2.length || arr1[0] < arr2[0])) {
			sortedArr.push(arr1.shift());
		} else {
			sortedArr.push(arr2.shift());
		}
	}

	return sortedArr;
};

var myArray     = [3, 4, 6, 10, 13, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));

/*
	TIPS!!!
	> Arrays are already SORTED (We should taking the advantage of that)
	
	Complexity:
		Time: O(N) -> Iterate thru both array once
		Space: O(N) -> Where N is the (arr1.length + arr2.length) from the result 'sortedArr'
*/


// - Just try to implement -
// function mergeArray(a1,a2) {
// 	let merged = [];

// 	let a1Index = 0;
// 	let a2Index = 0;
// 	let mIndex = 0;

// 	while (mIndex < (a1.length + a2.length)) {
// 		let isA1done = a1Index >= a1.length;
// 		let isA2done = a2Index >= a2.length;

// 		if (!isA1done && (isA2done || a1[a1Index] < a2[a2Index])) {
// 			merged[mIndex] = a1[a1Index];
// 			a1Index++;
// 		} else {
// 			merged[mIndex] = a2[a2Index];
// 			a2Index++;
// 		}
// 		mIndex++;
// 	}

// 	return merged;
// }

// console.log(mergeArray([2,4,6,10,11,15], [1,5,8,12,14,19]));
// console.log(mergeArray([2,4,6,10,11,15], [1,5,8]));
// console.log(mergeArray([2,4,6,10], [1,5,8,12,14,19]));


