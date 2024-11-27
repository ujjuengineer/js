/* we use map when we have to create new array, and we use for loop when we have to do some operations on the same array */


/* array map meathod */
let arr = [45,46,47];

// use to transfer the valueo of arr into a, syntax is just like for each loop
let a = arr.map((value) =>{
    return value;
})
console.log(a);
console.log();

/* we can take multiple inputs in map */
let a1 = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value + index; 
    // whatever will be the return value, the same will be the elements of a1
}) 
console.log("new a1 array become",a1);
console.log();


/* array filter meathod */
// use to filter out the elements
let arr2 = [45,46,47,3,2,1];

let a2 = arr2.filter((a)=>{
    return a<10;
})
console.log("preve a2 array is",arr2);
console.log("new array a2 after filter become",a2);





/* array reduce meathod, it returns a value */ 
let arr3 = [1,5,2,6,3];
let newArr3 = arr3.reduce((x1,x2)=>{
    return x1 + x2; // it will take 1+5=6 => 6+2=8 => 8+6=14 => 14+3=17
})
console.log(newArr3); 

