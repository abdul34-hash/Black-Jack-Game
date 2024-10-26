let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame =() =>{
    console.log("Game was draw!")
    msg.innerText = "Game was draw. play again!"
    msg.style.backgroundColor = "#081b31"
}
const shoWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
       compScore++;
       compScorePara.innerText = compScore
        msg.innerText = `You lose ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer was clicked", compChoice)
    if(userChoice === compChoice){
       drawGame();
    }else{
        let userWin = true;
        if( userChoice ==="rock"){
           userWin= compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false:true;
        }
        else{
            userWin = compChoice === "rock" ? false:true;
        }
        shoWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("user choice was clicked", userChoice)
        playGame(userChoice);
    });
});
