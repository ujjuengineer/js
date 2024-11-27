/* use js to create a game of rock paper scissor, the game 
should ask you to enter R, P or S. the computer should be able 
to randomly generate R, P or S and declare win or lose using 
alert. use confirm and prompt wherever required */

// run this in console

let arr = ["R","P","S"];
// we have to play the game 3 times, if we won 2 out of them then we are winner else system is the winner

let wantToPlay = true;

while(wantToPlay) {
    let computerChoice = arr[Math.floor(Math.random() * arr.length)]
    let userChoice = prompt("choose 'rock' : 'R', 'paper': 'P', 'scissor' : 'S' ");

    while(! arr.includes(userChoice)) {
        userChoice = prompt("please enter a valid choice")
    }

    // let display what is the choice of the user and computer
    console.info(`your choise is ${userChoice} and computer choice is ${computerChoice}`);

    // let decide the winner
    if(userChoice == computerChoice) alert("match tied");
    else if((userChoice == 'R' && computerChoice == 'S') || (userChoice == 'P' && computerChoice == 'R') || (userChoice == 'S' && computerChoice == 'P')){
        alert("you won this round");

    }
    else alert("computer won this round");
    wantToPlay = confirm("do you want to play once more ?");
}


