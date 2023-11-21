function getComputerChoice() {
    let choiseNum = Math.floor(Math.random() * 3);
    const choises = ["rock","paper","scissors"]
    computerChoise = choises[choiseNum]
    console.log("Computer chose: "+computerChoise)
    return computerChoise;
}

function playRound(computerChoise, playerChoise) {
    let winner = "";
    let player_or_computer = 0;
    if (playerChoise === computerChoise){
        winner = "Draw!"
        player_or_computer = 3;
    }

    if (playerChoise === "paper"){
        if (computerChoise === "rock"){
            winner = ("You win! "+ playerChoise + " beats " + computerChoise)
            player_or_computer = 1;
            }
        if (computerChoise === "scissors"){
            winner = ("You lose! "+ computerChoise + " beats " + playerChoise)
            player_or_computer = 2;
            }
    }

    if (playerChoise === "rock"){
        if (computerChoise === "scissors"){
            winner = ("You win! "+ playerChoise + " beats " + computerChoise)
            player_or_computer = 1;
            }
        if (computerChoise === "paper"){
            winner = ("You lose! "+ computerChoise + " beats " + playerChoise)
            player_or_computer = 2;
            }
    }

    if (playerChoise === "scissors"){
        if (computerChoise === "paper"){
            winner = ("You win! "+ playerChoise + " beats " + computerChoise)
            player_or_computer = 1;
            }
        if (computerChoise === "rock"){
            winner = ("You lose! "+ computerChoise + " beats " + playerChoise)
            player_or_computer = 2;
            }
    }

    return [winner, player_or_computer];
}

function getPlayerSelection() {
while(true){
    let playerSelection = "";
    playerSelection = prompt("Please write your selection (rock/paper/scissors): ")
    while(playerSelection.length !== 0 && playerSelection !== null){
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === "paper" || playerSelection === "rock" || playerSelection === "scissors"){
            console.log("Player chose: "+playerSelection)
            return playerSelection
            break;
        }
        playerSelection = prompt("Please write your selection (rock/paper/scissors): ")
    }
  }
}

// Play the game 5 times and keep count
function game() {
    let computerWins = 0;
    let playerWins = 0;
    let draws = 0;
    let winArray = [];

    for (let i = 0; i < 5; i++) {

        winArray = playRound(getComputerChoice(), getPlayerSelection())
        console.log(winArray[0])
        if (winArray[1] === 2 && winArray[1] != null) { computerWins++; }
        if (winArray[1] === 1 && winArray[1] != null) { playerWins++; }
        if (winArray[1] === 3 && winArray[1] != null) { draws++; }

    }

    console.log("Player wins: " + playerWins)
    console.log("Computer wins: " + computerWins)
    console.log("Draws:" + draws)

    console.log("Total played games: " + (draws+playerWins+computerWins))

    if (playerWins === computerWins) {console.log("Tournament has come to a draw!")}
    if (playerWins > computerWins) { 

        console.log("Player wins the tournament!")
    } 
    else if (playerWins < computerWins) {
        console.log("Computer wins the tournament!")
    }
    else {

    }

}


const playbuttons = document.querySelectorAll(".playbtn");

 for (let i = 0; i < playbuttons.length; i++) {
    playbuttons[i].addEventListener("click", (e) => {
        console.log(playbuttons[i]);

        // Get element class(es)
        let elementClass = e.target.className;
        // If element has class(es)
        if (elementClass !== '') {
            console.log(elementClass);
        }
        // If element has no classes
        else {
            console.log('An element without a class was clicked');
        }

     });
 }



// game()

// function getePlayerChoice(playerChoise) {
//     let playerSelection;
    
//     return playerSelection;
// }


