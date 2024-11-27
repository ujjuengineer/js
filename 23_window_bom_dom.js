//when js runs in browser, window is a global object, all the methods we are using fall under window object
/* 

for example 
console.log(), this is actually window.console.log() , 
similary alert() is actually window.alert()

try these in console
*/

// dom : document object model
// it represent page content as html, 
// document.body -> page body as js object
// we can control the css property using this
// document.body.style.background = "green"; this will change the page background to green

/*
The Document Object Model (DOM) represents the structure of an HTML document as a tree, allowing JavaScript to interact with and manipulate the content, structure, and style of a webpage.

Use Cases of DOM:
Dynamically updating content, such as changing text, images, or styles.
Adding interactivity like responding to button clicks.
Validating form inputs before submitting.


document.getElementById("myDiv") selects an element with the ID myDiv.
document.getElementById("myDiv").innerHTML = "Hello World!"; changes the content of myDiv.
document.createElement("p") creates a new <p> element.
document.getElementById("myDiv").style.color = "red"; changes text color to red.
document.getElementById("btn").addEventListener("click", () => alert("Button clicked!"));
*/


/*
BOM : 
The Browser Object Model (BOM) lets JavaScript interact with the browser outside the web page's content. It gives access to browser-related functionalities like the URL, browser history, and window size.

Use Cases of BOM:
Redirect users to another page using location.href = "link".
Show alerts, confirms, or prompts using window.alert(), window.confirm().
Get information about the user's browser for optimization.

navigator.userAgent gives the browser details.
screen.width returns the screen's width.
location.href gets the current page URL.
history.back() takes the user to the previous page.
*/