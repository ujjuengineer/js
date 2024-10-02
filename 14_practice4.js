/* QUES 1: what will following print in javascript console.log("har\"".length) */
console.log("ujju\"".length); // note that escape sequence is also a charcter


/* explore the includes, startwith and endwith function of a string */
const sentence = 'the quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word)); // it give true or false based on wether word is present in sentence or not

console.log(`${word} ${sentence.includes(word) ? "is present": "is not present"} in the sentence`);

/* extract the amount out of the string "please give rs 1000" */
let sent = "please give rs 1000";
sent = sent.slice("please give rs ".length);
console.log(sent);
// sent is still stirng
console.log(typeof sent);
// we can convert string to number using
sent = Number.parseInt(sent);
console.log(typeof sent);


/* can we change the character of string just like array */
let name = "ujjwal sharma";
name[4] = "k";
console.log(name)
/* we can change it using replace function */
console.log(name.replace(name[4], "k"));