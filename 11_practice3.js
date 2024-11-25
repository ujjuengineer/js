// QUES 1:  write a programe to print the marks of a student in an object usig for loop

const marks = {
    "ujjwal" : 30,
    "siddhi" : 40, 
    "ganesh" : 50,
    "anurag" : "maa chudae"
}
console.log(Object.keys(marks));
// object.keys(name) gives an array of all the keys of your marks object
// to get one element of this array we use 
console.log("first keys of marks object is",Object.keys(marks)[0])
// to get the value of the key we use marks[object.keys(marks)[0]]
console.log("the value of",Object.keys(marks)[0],"is", marks[Object.keys(marks)[0]])

console.log(Object.keys(marks).length) 
// object.keys(name).length  => gives the length of the array



// now we will use these concepts to print the marks of all the students using for loop
for(let a = 0; a < Object.keys(marks).length; a++){
    console.log(Object.keys(marks)[a],"=",marks[Object.keys(marks)[a]]);
}
console.log("\n\n")


// Ques 2 : usually we use for_in loop to print the object's keys and values
for(let a in marks) {
    console.log(a,"=",marks[a]);
}

// QUES 3: write a programe to print "tyr again" until the user enters the correct number
// use this in browser

/* 
let cn = 4;
let i;
while(i != cn) {
    i = prompt("enter the correct number");
    if(i!=cn)console.log("try again");
}
console.log("you have entered the correct number"); */

// QUES 5 : write a fucntion to print the mean of 5 numbers
const meanOf5 = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5;
}
console.log("mean of the the given 5 numbers is",meanOf5(2,2,2,2,2))