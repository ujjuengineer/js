// string usually are defined inside of double quotes, but in js we can define it inside of single quotes as well

let name = "ujjwal sharma";
console.log(name.length); // string.length gives the size of the string

// we can access string characters just like an array
console.log(name[0], name[1], name[2]);



console.log()


// template literals (string interpolation)

let boy1 = "ujjwal sharma";
let boy2 = "ram";
let sentence = `boy1 is friend of boy2`; 
console.log(sentence);
// now we will use template literals 
sentence = `${boy2} is friend of ${boy1}`; // we can insert variable directly in template literal. this is called string interpolation. 
console.log(sentence);
/* template literals use backtick instead of quotes to define a string. with templates literals we can use single or double quotes inside of a string. */






// escape sequence

/* if we have to add a single or double quotes then we can use escape sequence */
name = "ujjwa\"l";
console.log(name); // by adding \" or \' we can add double quotes or single quotes within string