const getRandom = function(floor, ceiling) {
	return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
};


const shuffleInplaceArray = function(array) {
	if (array.length <= 1) {
		return array;
	}

	for(let i = 0; i < array.length - 1; i++) {
		// We could iterate up until the element at index before last element because the last element HAVE TO sit into that index
		let randomIndex = getRandom(i, array.length - 1);
		
		if (i !== randomIndex) {
			let temp = array[i];
			array[i] = array[randomIndex];
			array[randomIndex] = temp;
			// For ES6+ we can do the swap by [array[i], array[randomIndex]] = [array[reandomIndex], array[i]]
		}
	}

	return array;
}

// console.log(shuffleInplaceArray([1,2,3,4,5])); // [ 2, 1, 3, 4, 5 ]
// console.log(shuffleInplaceArray([1,2,3,4,5])); // [ 4, 1, 2, 5, 3 ]


