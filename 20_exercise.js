/*
write a js program to genrate a random number and store it in a 
variable. the program then takes an input from the user to tell
them wether the guess was correct, greater or lesser than the
original number


the score = 100 - (number of guesses user took to guess correct number )
*/

// math.random() //generates a random number ranging between [0,1) 
                // note here 1 is not included

// to get random number in your desire range, use follow

/*
    to get int value ranging between 1 to 10
    min = 1
    max = 10
    randomNum = math.floor(math.random() * (max- min + 1)) + min
    math.floor ensure the number is integer

    to get float value ranging between 1 to 10
    min = 1
    max = 10
    randomNUm = (math.random()* (max - min)) + min

    note : in first we added 1 in max-min, but in second we dind't added 1, this is because :

    Math.random() generates a number in the range [0, 1) (inclusive of 0, exclusive of 1).
    When scaling this result to a range [min, max], the difference lies in whether you want inclusive integers or continuous floats.

    Why +1?
    The formula ensures the range [min, max] is inclusive for integers.
    Math.random() * (max - min + 1) generates a number between 0 and (max - min + 1) (exclusive of max - min + 1).
    Math.floor then rounds this number down, so you effectively include the max value in the final output.
*/





// generate random value from array
let arr = ["ujjwal", "kalua", "ganesh", "ram", "ash", "pari"]

// we have to choose random index ranging from 0 to arr.length-1
// min = 0, max = arr.length-1
// max - min + 1 = arr.length

let random = arr[Math.floor(Math.random() * (arr.length))]

console.log("lucky among them is : ", random);


// let solve the question 
let max = 10, min = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
let x, guessCount;
do{
    guessCount++;
    x = prompt("enter a nubmer : ");
    if(x>randomNum) alert("number is smaller than ",x);
    else if(x<randomNum) alert("number is greater than ",x);
}while(x != randomNum);
console.log("you score is ",10-guessCount);