let myScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const myScorepara = document.querySelector("#myScore");
const comScorepara = document.querySelector("#comScore");
const msg = document.querySelector("#result-msg");

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "Black";
};

const showWinner = (myWin , myChoice , comChoice) => {
    if(myWin){
        myScore++;
        myScorepara.innerText = myScore;
        msg.innerText = `You Win🥳! ${myChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        compScore++;
        comScorepara.innerText = compScore;
        msg.innerText = `You Lose😔! ${comChoice} beats ${myChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const gencompChoice = () => {
    const option = ["Rock","Paper","Scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
};

const playGame = (myChoice) => {
    // Generate Computer Choice
    const comChoice = gencompChoice();
    // Draw Message
if(myChoice === comChoice) {
    drawGame();
} else {
    let myWin = true;
    if(myChoice === "Rock"){
        // paper , Scissors
       myWin =  comChoice === "Paper" ? false : true;
    } else if(myChoice === "Paper"){
        // rock , scissors
        myWin = comChoice === "Scissor" ? false : true;
    }else{
        // rock , paper 
         myWin = comChoice === "Rock" ? false : true;
    }
    showWinner(myWin,myChoice,comChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const myChoice = choice.getAttribute("id");
        playGame(myChoice);
    });
});
