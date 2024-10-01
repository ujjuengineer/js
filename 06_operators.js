console.log("operators in js")

// Arthematic operator
let a = 45, b = 4;
console.log("a =",a,"b =",b);
console.log("a+b =",a+b);
console.log("a-b =",a-b);
console.log("a/b =",a/b);
console.log("a*b =",a*b);
console.log("a**b =",a**b); // a to the power b
console.log("a%b =",a%b); 
console.log("a++ =",a++); // this will print prev value of a and then increase a
console.log("++b",++b); // this will first increase the prev value of b then print b

// assingment operator
console.log("\nassingment operators\n")
a += 5;
console.log("new value of a is",a);
let x = 3;
x **= 3; // this means x = x to the power 3
console.log(x);

// comparison operators
console.log("\ncomprision operators\n")
let a1 = "6";
let a2 = 6;
console.log("a1 =",a1,"b1 =",a2);

console.log("a1 == a2", a1==a2);
// now if you notice a1 is string and a2 is number, so to compare value as well as data type we use === operator and !== operator
console.log("a1 === a2", a1===a2);


a1 = 6;
a2 = 6;
console.log("a1 !== a2", a1!==a2);


// similarly we have && and || operators