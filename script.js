let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


function generateTarget(){
  return Math.floor(Math.random()*9);
}

function compareGuesses(user,cp,tg){
  let guessUser = abs(tg-user);
  let guessCp = abs(tg-cp);
  if (guessUser === guessCp || guessUser < guessCp){
    return true;
  }
  else{
    return false;
  }
}

function updateScore(winner){
  if(compareGuesses){
    humanScore++;
  }
  else{
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber++;
}

updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1
updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1


