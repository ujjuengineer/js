// simple for loop
for(let a = 0; a<2; a++){
    console.log(a);
}


let obj = {
    "ujjwal" : 100, 
    "ganesh" : 230,
    "shree ram" : 300,
    "siddhi" : 500
}

// for in loop
// this is how you can access keys of object
for(let a in obj){
    console.log(a);
}
console.log("\n")
// this is how you can access data of object
for(let a in obj) {
    console.log(obj[a]);
}
console.log("\n")

// this is how you can access keys and data together
for(let a in obj) {
    console.log(a,"=",obj[a]);
}



// for of loops, use to print iterable data like array or string
let str = "ujjwal sharma";
for(let a of str){
    console.log(a);
}


