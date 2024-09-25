let score = "69";
console.log(typeof score);
// now i want this score in number, so we use typecaste
let valueInNumber = Number(score);
console.log(typeof valueInNumber);


// what is NAN (not a number)
// if we define a string something like this
let newScore = "33abc";
// and now if we convert this in number and try to print it
let NewNumber = Number(newScore);
console.log(NewNumber);

// if we do put value of variable as null
newScore = null;
NewNumber = Number(newScore); // this is converting null into 0
console.log(NewNumber);

/*
null => 0
"123" => 123
"123abc" => NaN
*/

// we can convert string or number into boolean
let newString = "";
let newBoolean = Boolean(newString);
console.log(newBoolean); // false
// if we fill our string and again do the same 
newString = "xyz";
newBoolean = Boolean(newString);
console.log(newBoolean);

/* 
1 => true, 0 => false
"" => false, "xyz" => true 
*/


// we can convert number into string as well
let someNumber = 33;
let stringNumber = String(someNumber);
console.table([stringNumber, typeof stringNumber]); 