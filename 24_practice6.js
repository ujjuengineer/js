/*
write a program using prompt function to take input of age as a 
value from user ans use alert to tell him if he can drive

*/

/*
in question 1 use confirm to ask the user if he wants to see the
prompt again
*/

/*
in prev question use console.error to log the error if the age 
entered is negative
*/

// run in console
let repeat = true; // to control the loop
while(repeat) {
    let age = Number.parseInt(prompt("enter your age"));
    while(age < 0) {
        console.error("please enter a valid age");
        age = prompt("enter your age again : ");
    }
    let choose = confirm(`you age is ${age}, are you sure`);
    if(choose) {
        if(age > 18) alert("you can drive");
        else alert("you can't drive");
        repeat = false;
    }
    else {
        alert("lets try again");
    }
}

/*
wap to change the url to google.com if user enters a number greater than 4
*/

/*
change the background of the page to yellow, orange or any other color based on user input through prompt
*/
