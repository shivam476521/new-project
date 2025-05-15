let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const drawGame=() => {
    msg.innerText = "Game Draw.";
    msg.style.backgroundColor = '#081b31';
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        msg.innerText = `You Won. Your ${userChoice} beats ${compChoice}`;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
    return userWin;
}

const genCompChoice = () => {
    const options = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // Draw

        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock" && compChoice === "paper"){
            userWin = false;
            
        }
        else if(userChoice === "rock" && compChoice === "scissors"){
            userWin = true;
        }
        else if(userChoice === "paper" && compChoice === "scissors"){
            userWin = false;
        }
        else if(userChoice === "paper" && compChoice === "rock"){
            userWin = true;
        }
        else if(userChoice === "scissors" && compChoice === "rock"){
            userWin = false;
        }
        else{
            userWin = true;
        }
        showWinner(userWin, userChoice, compChoice);
        
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});