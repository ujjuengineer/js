// console is a class which has different methods, log is one of them
// to find out all the methods we can print the console class , console.log(console)

// console.log(console);

// try these command in the console
console.error("this is an error");
console.warn("please don't fall in love");
console.info("i love her");

console.assert(5>7); // use to check assertion
// console.clear() use to clear the console

const item = {
    "name" : "ujjwal kumar sharma",
    "age" : 20,
    "branch" : "IT"
}

console.table(item) // use to display the data in table form

// time counting between the execution of 2 code
console.time("t");
//some process 
console.log("calculating time... ");
console.timeEnd("t"); // this will give the time 