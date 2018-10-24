/**
 * Given an array arr[] of size n and a number k such that k <= n
 * Examples
 * Input: [3, 7, 90, 20, 10, 50, 40], k = 3
Output: [20, 10, 50]

Input: [3, 7, 5, 20, -10, 0, 12], k = 2
Output: [-10,0]
 */

const findSubArrayLeastAverage = (arr, k) => {
  const maxIndex = arr.length - k;
  let minSubArray = 0;
  for (let index = 0, minAverage = undefined; index <= maxIndex; index++) {
    const subArray = arr.slice(index, k + index);
    const average = subArray.reduce((prev, item) => prev + item, 0) / k;
    if (average <= minAverage || !minAverage) {
      minAverage = average;
      minSubArray = subArray;
    }
  }
  return minSubArray;
}
