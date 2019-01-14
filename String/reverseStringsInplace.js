 // Given a string, return a reversed string in-place

const reverseStrsInplace = (str) => {
	// convert str to the array SO we can mutate the object !! String is IMMUTABLE !!
	let strArr = str.split('');

	let startIndex = 0;
	let endIndex = strArr.length - 1;

	while (startIndex < endIndex) {

		// do the swap
		[strArr[startIndex], strArr[endIndex]] = [strArr[endIndex], strArr[startIndex]];

		startIndex++;
		endIndex--;
	}

	// join all the elements in the array back to STRING
	return strArr.join('');
};


let str = "I Love You So Much";
// console.log(reverseStrsInplace(str));  // hcuM oS uoY evoL I


/*
	Tips: Strings in JS is "IMMUTABLE" 
			=> So we have to convert the strings into the array of the character (Then it will be MUTABLE and we can mutate the object!!!!!!)
	
	Time Complexity: O(n)
	Space Complexity: O(1)

	=> When we do something In-place: expect that we will have to swap the elements!!
*/
