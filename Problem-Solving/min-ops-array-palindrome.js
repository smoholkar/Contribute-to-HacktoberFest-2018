/*
This program finds the minimum number of merge operations 
required to make an array palindrome.
*/

// array declaration
var array1 = [2, 30, 22, 30, 2];
var array2 = [66, 87, 76, 34, 99, 8, 69, 23];
var array3 = [34, 87, 21, 34];

// this functions takes arrat and array size, then prints minimum number of operations
function min_palindrome_ops(array, size) {

    var operations = 0;
    var i = 0;  // starting the comparision from left
    var j = size - 1;   // ending from right

    while (i <= j) {

        // if left and right elements are equal, no need to change
        if (array[i] == array[j]) {
            i++;
            j--;
        }

        // if left element is greater than right element, then merge two elements on right
        else if (array[i] > array[j]) {
            array[j - 1] = array[j - 1] + array[j];
            j--;
            operations++;
        }

        //if right element is greater than left element, then merge two elements on left
        else {
            array[i + 1] = array[i + 1] + array[i];
            i++;
            operations++;
        }
    }

    // print number of operations on screen
    document.write("Number of operations: " + operations);
}

// calling function with various test cases
min_palindrome_ops(array1, 5);
min_palindrome_ops(array2, 8);
min_palindrome_ops(array3, 4);