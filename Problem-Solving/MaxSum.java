/**
 * Given an array of positive numbers, find the maximum sum of a subsequence 
 * with the constraint that no 2 numbers in the sequence should be adjacent in the array.
 *  So 3 2 7 10 should return 13 (sum of 3 and 10) or 3 2 5 10 7 should return 15 (sum of 3, 5 and 7).
 * Answer the question in most efficient way.
 * Input : arr[] = {5, 5, 10, 100, 10, 5}
Output : 110
Input : arr[] = {1, 2, 3}
Output : 4
 */

import java.util.*;
public class MaxSum {
    
    /* maxSumIS() returns the
     maximum sum of subsequence of non-adjacent elements in arr[] of size n */
    static int maxSumIS(int arr[], int n)
    {
        int i, sum = 0, maxSum = 0, maxinc = 0, maxexc = 0;
        
        for (i = 0; i < n; i++) {
            sum+= arr[i];
            maxSum = Math.max(maxinc,maxexc);
            
            //sum including the current element
            maxinc = maxexc+arr[i];
            //sum excluding the current element
            maxexc = maxSum;
        }
        return Math.max(maxinc,maxexc);
    }
    
    // Driver code
    public static void main(String args[])
    {
        //Take the input from user
        Scanner s=new Scanner(System.in);
        System.out.println("Enter number of elements");
        int n=s.nextInt();
        
        //Create arra
        int arr[]=new int[n];
        
        System.out.println("Enter elements");
        
        for(int i=0;i<n;i++){
            //for reading array
            arr[i]=s.nextInt();
            
        }
        //Print the output
        System.out.println("maximum sum of a subsequence of non-adjacent elements = "+
                           maxSumIS(arr, n));
    }
    
}
