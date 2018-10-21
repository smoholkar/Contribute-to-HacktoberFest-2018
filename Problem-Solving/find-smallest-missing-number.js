/**
 * Given a sorted array of n distinct numbers where each number is in the range from 0 to m-1 and m > n. 
 * Find the smallest number that is missing from the array.
 * Examples
 *  Input: {0, 1, 2, 6, 9}, n = 5, m = 10
Output: 3

Input: {4, 5, 10, 11}, n = 4, m = 12
Output: 0

Input: {0, 1, 2, 3}, n = 4, m = 5
Output: 4

Input: {0, 1, 2, 3, 4, 5, 6, 7, 10}, n = 9, m = 11
Output: 8

Solution written by:
	Andrés Ignacio Torres
	@aitorres on github
	@andresitorresm on twitter
 */

/**
 * Given a sorted array of n numbers in the range [0, m), 
 * returns the smallest number that is missing from the array
 * 
 * @param  {array of integer} number_list Sorted array of distinct numbers
 * @param  {int} n           Amount of elements in the number list
 * @param  {int} m           Number denoting the first element that is not in the list
 * @return {int}             The smallest missing number
 */
function smallest_missing_number(number_list, n, m) {
	// We iterate on the numbers from 0 to m-1
	for (var i = 0; i < m; i++) {
		// If one number does not correspond to its
		// marked position on the number list,
		// return it as the first missing number
		if (i != number_list[i]) {
			return i;
		}
	}
}