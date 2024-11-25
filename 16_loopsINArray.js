let num = [3,5,1,2,4];

/* using for loop */
for(let a = 0; a<num.length; a++){
    console.log(num[a]);
}
console.log("\n");


/* using forEach loop */
console.log("using for each loop")
num.forEach((element) => {
    console.log(element);
})
console.log("\n");

/* for of loop is use for iterative data type only, like string, array; not for class */
/* for of loop gives the value of the keys whereas for in loop gives the keys */


/* using for of loop */
console.log("using for of loop")
for(let a of num){
    console.log(a); // note that here a = num[0], num[1], num[2], num[3]
}


/* using for in loop */
console.log("using for in loop")
for(let a in num) {
    console.log(num[a]); // note that here a = 0,1,2,3 {object k andar for inloop keys deta tha, yaha index dega}
}
// see the difference between for in loop and for of loop



/* array.from use to make any html collecton into an array */
let name = "ujjwal sharma";
console.log(typeof name); // string

let arr = Array.from(name);
console.log(typeof arr, arr); // object