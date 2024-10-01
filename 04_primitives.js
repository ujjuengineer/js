console.log("premittive data type");
// nn bb ss u
// 7 types of primittive data type
let a = null; 
let b = 345; 
let c = true;
let d = "ujjwal sharma";
let e = BigInt("567") + BigInt("3");
let f = undefined;
// if we do like "let f;" then it also fall under undefined categeory of data type, we don't need to mention that

console.log(a,b,c,d,e,f);

// we can find the type of the data type as follows
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f);


console.log("non premitive data type\n");
// object is a non premitive data type
const item = {
    "ujjwal" : true,
    "priya" : false,
    "babbar" : 37,
    "harry" : undefined
}

console.log("item in priya is",item["priya"]);