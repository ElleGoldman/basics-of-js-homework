/**
 * RANGE
 *
 * to run code from this file use: npx nodemon 5-range
 *
 * 5.1 Write a function that takes two arguments, start and end, and returns an array
 *    containing all the numbers from start up to (and including) end. Next, write a sum
 *    function that takes an array of numbers and returns the sum of these numbers.
 *
 * 5.2 Optional: As a bonus assignment, modify your range function to take an optional
 *    third argument that indicates the “step” value used when building the array. If no
 *    step is given, the elements go up by increments of one, corresponding to the old behavior.
 *    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with
 *    negative step values so that range(5, 2, -1)
 *
 */

// Your code here.
//
// console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55

function range (start, end){
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
console.log('5.1 | ' + range(1, 10));

function sum(arr) {
    let total = 0;
    for (let i = 0; i<arr.length; i++) {
        total += arr[i]; 
    }
    return total;
}
console.log('5.1.1 | ' + sum(range(1, 10)));


function range (start, end, step) { 
    let arr = [];
    if (end < start && step < 0) {
        for (let i = start; i >= end; i += step || -1 ) {
            arr.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step || 1 ) {
            arr.push(i);
        }
    }
    return arr;
}
console.log('5.2 | ' + (range(1, 10, 2)));
