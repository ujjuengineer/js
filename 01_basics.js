// const means constant, we can't change its value, if we do so, it will show error
const accountId = 144553;

// we can difine variable using let or var, but nowadays let is mostly used
let accountEmail = "ujjuengineer@gmail.com";
var accountPassword = "12345";
/* prefer not to use var 
    because of issuein block scope and functional scope */

// js me direclty v variable ko define kr skte hai, but this is bad practice
accountCity = "jaipur"

let accountState;

// const me jo value define ho gyi wo lock ho gyi, wo change nhi hogi
// accountId = 2
// console.log(accountId); // for output
// the above will give error as we are reassigning a new value to a constant 

accountEmail = "hello@gamil.com";
accountCity = "patna";
accountPassword = "4321";

// this is how we can print different variable
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// we can also print like this
//  \n is use to move in next line
console.log("account email is",accountEmail,"\naccount paasword is",accountPassword);


