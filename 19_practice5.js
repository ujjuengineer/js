/* 
QUES 1 : 

create an array of numbers and take input from user to add 
number to this array 

use prompt meathod to take the input from the user in browser console


solution : 

let arr = [1,2,3,4,5,6];
for (let x in arr) {
    arr[x] = arr[x] + prompt("enter the value");
}
console.log(arr);

let you give input at every iteration 1,1,1,1,1,1

then the output will be 11,21,31,41,51,61 as we know prompt take
input as string, so we must first convert the input into int
*/




/* 
QUES 2 :    

keep adding elements in an array untill (take the elements as
an input from user) you don't get 0 form the user

"better you use do while loop in this question"

solution using while loop : 

let arr = [1,2,3,4,5]
let x;
while(x != 0) {
    x = prompt("enter the value : ");
    arr.push(x);
}
console.log(arr)

*/


/*
QUES 3 : 
filter for number divisible by in the given array
*/

/*
QUES 4 :
create an array of square of given numbers
*/

/*
QUES 5 :
use reduce to calculate factorial of a given number from an 
array of first n natural number (n being numbe whose factorial 
is needs to be calculated)
*/

// ques 5 sol : 
let arr = [1,2,3,4,5,6]
// here n = 7 and we have to calculate the factorial of 7

let x = arr.reduce((x1,x2) => {
    return x1*x2;
})

console.log(x);