console.log("javascript tutorial 3 : var, let and const");

// var is a global variable, we don't use it anymore
{
    var c = "ujjwal sharma";
}
console.log(c);


// but if we do the same with let, then it will show error, so we generally use let or const to define variable

const a = 45;
// const is a variable type whose data can't be changed
// a = "ujjwal";
// console.log(a); this will give error

// but we can do the same with let
let b = 45
console.log(b)
b = "ujjwal sharma"
console.log(b)