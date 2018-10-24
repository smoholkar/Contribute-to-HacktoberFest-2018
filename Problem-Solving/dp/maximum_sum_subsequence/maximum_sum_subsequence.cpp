/**
 * @Author Navneet Jain
 * Given an array of positive numbers, find the maximum sum of a subsequence 
 * with the constraint that no 2 numbers in the sequence should be adjacent in the array.
 *  So 3 2 7 10 should return 13 (sum of 3 and 10) or 3 2 5 10 7 should return 15 (sum of 3, 5 and 7).
 * Answer the question in most efficient way.
 * Input : arr[] = {5, 5, 10, 100, 10, 5}
Output : 110
Input : arr[] = {1, 2, 3}
Output : 4
 */


#include <iostream>
#include <vector>
#include <limits>
using namespace std;

int maxSubsetSum(vector<int> arr) {
    int sizeA = arr.size(), maxVal = INT32_MIN;
    vector<int> dp(sizeA, INT32_MIN);
    dp[0] = arr[0];
    dp[1] = max(arr[1], dp[0]);
    maxVal = max(dp[0] , dp[1]);
    for(int i = 2 ; i < sizeA; i++){
        dp[i] = max(dp[i-2] + arr[i] , max(arr[i] , maxVal));
        maxVal = max(maxVal, dp[i]);
    }
    
    return dp[sizeA-1];
}

int main(){
	vector<int> arr = {5, 5, 10, 100, 10, 5};
	cout << maxSubsetSum(arr);
}
