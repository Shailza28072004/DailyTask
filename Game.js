const choices = ["rock", "paper", "scissor"];
const playerScoreElement=document.getElementById("user");
const computerScoreElement=document.getElementById("comp");
const resultOfgame=document.getElementById("whowin");

let playerScore=0;
let computerScore=0;

function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function game(userChoice){
    const compChoice=getComputerChoice();
    let result="";

    if (userChoice===compChoice){
        result="It's a tie";
    } else {
        switch(userChoice){
            case 'rock':
                result=(compChoice==="scissor")?"You Win":"You Lose the match";
                if(result==="You Win")
                    playerScore++;
                else 
                    computerScore++;
                break;
            case 'paper':
                result=(compChoice==="rock")?"You Win":"You Lose the match";
                if(result==="You Win") 
                    playerScore++;
                else 
                    computerScore++;
                break;
            case 'scissor':
                result=(compChoice==='paper')?"You Win":"You Lose the match";
                if(result==="You Win") 
                    playerScore++;
                else 
                    computerScore++;
                break;
            default:
                result="Invalid choice";
                break;
        }
    }
    playerScoreElement.textContent=playerScore;
    computerScoreElement.textContent=computerScore;
    resultOfgame.textContent=result;
}
document.getElementById("rock").addEventListener("click",()=>game("rock"));
document.getElementById("Paper").addEventListener("click",()=>game("paper"));
document.getElementById("scissor").addEventListener("click",()=>game("scissor"));