// @flow
/**
 * Rearrange characters in a string such that no two adjacent are same.
 * (issue #21)
 * @param  {string} str any lowercase string
 * @return {string} the string without two adjacents chars or 'Not Possible' 
 */
function rearrangeAdjacentChars(str) {
	// FIXME fails or not on empty string?
	if (!str) return 'Not Possible';
	if (str.length === 1) return str;
	if (str.length === 2) {
		return str.charAt(0) === str.charAt(1) ? 'Not Possible'	: str;
	}

	const newStr = [];
	const adjacents = [];
	let lastChar = '';

	// Populate newStr with only not adjacents chars and stack the others
	for (let i = 0; i < str.length; ++i) {
		const nextChar = str.charAt(i);

		if (lastChar === nextChar) {
			adjacents.push(nextChar);
		} else {
			newStr.push(nextChar);
			lastChar = nextChar;
		}
	}

	while (adjacents.length > 0) {
		const adjacent = adjacents.pop();

		// Searches backwards into the current newStr to place the latest adjacent char
		let prev = newStr.length;
		while (prev >= 0) {
			const prevChar = newStr[prev - 1] || '';
			const nextChar = newStr[prev] || '';

			if (adjacent !== prevChar && adjacent !== nextChar) {
				// Places the adjacent char between prevChar and nextChar
				newStr.splice(prev, 0, adjacent);
				prev = -2;
			}

			--prev;
		}

		// If not suitable place found, the string will always have at least 2 adjacents
		if (prev === -1) return 'Not Possible';
	}

	return newStr.join('');
}

/*
Input: aaabc
Output: abaca

Input: aaabb
Output: ababa

Input: aa
Output: Not Possible

Input: aaaabc
Output: Not Possible

You can assume input is always lower case.
*/
function testRearrangeAdjacentChars() {
	const tests = [
		['bcaa', 'baca'],
		['aaabc', 'abaca'],
		['bcaaa', 'abaca'],
		['aaabb', 'ababa'],
		['', 'Not Possible'],
		['aa', 'Not Possible'],
		['aaaabc', 'Not Possible'],
	];

	for (test of tests) {
		// console.log('trying ', test[0]);

		const rearranged = rearrangeAdjacentChars(test[0]);
		if (rearranged !== test[1]) {
			console.error(`failed for '${test[0]}': '${rearranged}' !== '${test[1]}'`);
			return false;
		}
	}

	return true;
}

// testRearrangeAdjacentChars();
