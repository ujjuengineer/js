/* we have seen a escape sequence, some other escape sequence are
        \n : new line
        \t : tab */


/* length of string */
let name = "ujjwal sharma"
let len = name.length;
console.log(len);


/* converting to uppercase */
let uc = name.toUpperCase(); // toUppercase ang toLowerCase are function
console.log(uc);

/* converting to lowercase */
let lc = uc.toLowerCase();
console.log(lc);

/* this is how we get substring in js */
let subStr = name.slice(3);
console.log(subStr); // this will print sub string from index 3 to end

subStr = name.slice(3,7); // print substring from index 3 to 6, 7 not included
console.log(subStr);
/* in c++ str.substr(3,6) means substring of size 6 starting from index 3 */


/* we can replace a part of string using replace function */
name = name.replace("ujjwal", "ganesh");
console.log(name);

/* we can add two strings using concat function */
let newName = "ujjwal sharma";
let sentence = name.concat(" is girlfriend of ",newName, " ok");
console.log(sentence);
// we can also add like that
console.log(name +"is a girlfriend of "+newName);


/* we can remove extra spaces form the both side of the string using trim function */
let str2 = "    name is ujjwal     ";
console.log(str2);
str2 = str2.trim();
console.log(str2);

/* we can also replace element of the  */
console.log(name);
console.log(name.replace(name[3],'d'))

