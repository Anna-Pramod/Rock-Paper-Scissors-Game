var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
//when user clicks on a button, take that value and compare it with computers choice
//which is going to be a random choice and check who wins

function getComputerChoices(){
    const choices=["r","p","s"];
    // to get a random element from choices array we use built-in object
    // in js called math 0:rock; 1:paper; 2:scissors;
    const randomNumber = Math.floor(Math.random() * 3); //generates random number between 0,1,2
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(user) + smallUser + " beats " + convertToWord(computer) + smallComp + ". You WIN!! "
    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add("green-glow");
    setTimeout(function() { userChoice_div.classList.remove("green-glow") }, 300);
}

function lose(user, computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(user) + smallUser + " loses to " + convertToWord(computer) + smallComp + ". You Loooosee... :( "
    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add("red-glow");
    setTimeout(function() { userChoice_div.classList.remove("red-glow") }, 300);
}

function draw(user, computer){
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(user) + smallUser + " equals " + convertToWord(computer) + smallComp + ". And Its's a Draww! "
    const userChoice_div = document.getElementById(user);
    userChoice_div.classList.add("yellow-glow");
    setTimeout(function() { userChoice_div.classList.remove("yellow-glow") }, 300);
}


function game(userChoice){
    const computerChoice = getComputerChoices();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {    
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}
main();