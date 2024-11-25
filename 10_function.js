// we can roundoff any decimal into integer as follows
let num = 7.98
console.log("round of",num,"is",Math.round(num));
// Math.round(value)


function Avrage(a,b){ // a and b are passed by values 
    return (a+b)/2;
}

let a = 5, b = 6, c = 8;
console.log("avrage of",a,"and",b,"is",Avrage(a,b));
console.log("avrage of",b,"and",c,"is",Avrage(b,c));
console.log("avrage of",c,"and",a,"is",Avrage(a,c));


// arrow function
// we can create function like this in modern js
const hello = (x,y) => {
    return (x+y)/2;
}
console.log("return of hello function is", hello(1,3));

// we can use the above method to create a function without argument
const fun = () => {
    console.log("hello world, how are you ?")
}

fun();


// IMPORTANT NOTE : 
/* 
    if you defined any function in traditional way in js, like function fun(x,y){}
    then you can call this funciton before it's declaration 
    
    but the function is defined in modern way const fun = (a,b) => {}
        then we can't call this function before its declaration, it will throw an 
        error
                                               
*/