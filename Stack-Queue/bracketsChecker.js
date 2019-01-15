/* 
	Given a string of parenthesis such as ‘{}()[]’ return true or false 
	if every opening parenthesis matches its closing partner.
*/

const bracketsChecker = (code) => {
	const openersToClosers = {
		"[" : "]",
		"(" : ")",
		"{" : "}",
	}
	// Passing the array to add all the elements (otherwise set will just add the first argument)
	const openers = new Set(["[","{","("]);
	const closers = new Set(["]","}",")"]);

	const	openersStack = [];

	for (let char of code) {
		if (openers.has(char)) {
			openersStack.push(char);
		} else if (closers.has(char)) {
			// if there is no opener and we found closer then we can short circuit to return false
			if (!openersStack.length) {
				return false;
			} else {
				let lastOpener = openersStack.pop();

				// Check if the closer is valid to the opener => if not return false right away
				if (openersToClosers[lastOpener] !== char) {
					return false;
				}
			}
		}
	}

	// No bracket left in the entire code so return true
	return openersStack.length === 0;
}

// console.log(bracketsChecker("[{}]"))  // true
// console.log(bracketsChecker("[{[}]]"))   // false
// console.log(bracketsChecker("]"))   // false