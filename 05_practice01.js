// Question-1 create a variable to type string and try to add a number to it
let str = "ujjwal"
console.log(str);
let a = 2;
let ans = str + a;
console.log(ans);
// number are getting added in string
console.log() // to skip a line

// Question-2 use typeof to find the data type of the string in the last question
console.log(typeof ans);


// Question-3 create a const object in javascript. can you change it to hold a number later
const temp = {
    "name" : "ujjwal", 
    "age" : 47,
    "clg" : "mmmut" 
    // here name, age, clg are called as key of temp object
    // we can define key inside of "" or without double quotes
}
// temp = 45
// console.log(temp)
// this will show error as we can't change this const object to hold any number
// actually temp is acting as a reference, we can change the value of variable inside this temp using referene, we can even create a new variable inside of this temp object


// Question-4 Try to add a new key to the const object in problem 3. were you able to do it ?
// we can do it using reference
console.log(temp);
temp["age"] = 56;
console.log(temp);

// adding new key
temp["height"] = 5.7;
console.log(temp);

// we can access one particular key as follows
console.log(temp.name);
console.log(temp["name"]);



// Q-5 write a js program to create a word-meaning dictionary of 5 words

const dic = {
    "appreciate" : "recognize the full worth of.",
    "ataraxia" : "a state of freedom from emotional disturbance and anxiety",
    "yakka" : "work, especially hard work"
}

console.log("meaning of yakka is",dic["yakka"]);


