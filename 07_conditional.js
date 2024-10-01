// prompt use to ask question from user, just like alert, it also pop up  on the window screen when you go the page


// let a = prompt("what is your age ?") 
// this will always take input in string, you can typecaste it into number 

// the above code is not a part of js, so if you try running this here, it will show error, but you can run this in the console of the browser, try running this and see the result.

let age = "45"
console.log(typeof age);
age = Number.parseInt(age); // this is typecasting : string to number
console.log(typeof age);

// we can give conditions like
if(age > 18) {
    // alert("you can drive the car"); this is again command of browser
    console.log("you can drive");
}


// similarly we have if else, if else if else statement just like other languages


// switch statement
let x = 2;
switch(x) {
    case 1 : console.log("one");
             break;
    case 2 : console.log("two");
             break;
    case 3 : console.log("three");
             break;
    case 4 : console.log("four");
             break;
    default : console.log("not matched with any case")
}

// ternery operator
// syntax -> condition ? true : false
age = 15;
console.log( age>18 ? "you can drive" : "you can't drive");