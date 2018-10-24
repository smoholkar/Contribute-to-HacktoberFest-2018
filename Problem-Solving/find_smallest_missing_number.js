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
 */
function calculate() {
	var array = [0, 1, 2, 3, 4, 5, 6, 7, 10];
	console.log(findSmallestMissing(array, 0, array.length-1);
}

function findSmallestMissing(var array, var start, var end) 
{ 
    if (start  > end) 
        return end + 1; 
  
    if (start != array[start]) 
        return start; 
  
    var mid = (start + end) / 2; 
  
    if (array[mid] == mid) {
        return findSmallestMissing(array, mid+1, end); 
	} else {
		return findSmallestMissing(array, start, mid); 
	}
} 
