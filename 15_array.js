/* initialisation of array */
let marks = [91,52,83,34];
console.log(marks);
console.log(marks.length); /* gives length of the array */


/* we can print marks using for in loop */
for(let a in marks) {
    console.log(marks[a]);
}
console.log("\n")

/* we can print array using for loop as well */
for(let a = 0; a<marks.length; a++) {
    console.log(marks[a]);
}

/* array is a type of object. we can change the value of array using its index, it is mutable unlike string which is inmutable */




/* some array meathods */
let num = [1,2,3,4];

// we can convert an array to string
let numStr = num.toString();
console.log(typeof numStr, numStr);

/* we can join element of array using joiner function */
let numJoin = num.join(" and "); // this will join the array with and
console.log(numJoin, typeof numJoin);
numJoin = num.join(""); // this will join the array without any spaces
console.log(numJoin, typeof numJoin);

num.pop(); // this will delete the last element of the array
console.log(num); 

let numPoped = num.pop(); // this will delete and return the poped element of the array
console.log(num);
console.log(numPoped);

/* similarly push add new elements in the array */
num.push(69);
num.push(70);
console.log("new array become",num);

/* similarly we have shift, to remove the first element of the array */
num.shift();
console.log("num after shifting become:",num);

/* we have unshift to add new element to the begining of the array */
num.unshift(63);
console.log("num after unshifting become:",num);


/* delete is a type of operator, just like typeof. it's not a function */
delete num[1];
console.log("nums after deleting nums[1]",num);
/* note that if we use delete operator, it will delete the elements of num but it's successive elements don't fill the place of that deleted element, it's space remains unfilled */

/* we can even concat two array into a single array */
let concatNum1 = [1,2,3,4];
let concatNum2 = [5,6,7];
let concatNum3 = [8,9,10];

let newConcat = concatNum1.concat(concatNum2,concatNum3);
console.log(newConcat);
/* note that concatNum1, concatNum2, concatNum3 all remains same as previous */

/* sort function sort the array numereically wise, just like string */
let sortArray = [342,2,265,584,64,245,567];
sortArray.sort();
console.log("array after sorting become : ",sortArray);



/* to sort the array in assending or decending, we use compare function */
let compare = (a,b) => {
    return b-a; // this will sort the array in decending order, return a-b to sort in accending order
}
let newArray = [551,22,3,14,5,6,7,8,229];
newArray.sort(compare);
console.log("after sorting array become",newArray);

/* we have reverse function to reverse the array */
newArray.reverse();
console.log("array after reversing",newArray);



/* splice and slice */
let NewArray = [1,2,3,4,5,6];
NewArray.splice(2,1,69,69); // 2nd index se 3 element delete kr do, and 69,69 waha insert kr do
console.log(NewArray);

// we can get the deleted values by storing it in a variable
NewArray = [1,2,3,4,5,6];
let deletedValues = NewArray.splice(2,4,69,69);
console.log("deleted value area : ",deletedValues);


/* slice property : it create a new array */
newArray = [1,2,3,4,5,6,7,8,9];
let sliceArray = newArray.slice(2,5); // 2nd index to 4th index ka array return krega
console.log("sliced array = ",sliceArray);
