function StartNewGame() {
  if (players[0].name == "" || players[1].name == "") {
    alert("Enter valid player names before starting!");
    return;
  }
  
  resetGame();
  gameAreaElement.style.display = "block";
  SetActivePlayerName(startingPlayer);
}

function selectGameField(event) {
  const chosenGameField = event.target;
  const selectedFieldRow = chosenGameField.dataset.row - 1;
  const selectedFieldCol = chosenGameField.dataset.col - 1;
  roundsPlayed++;
  if (gameData[selectedFieldRow][selectedFieldCol] > 0 || gameIsOver) {
    return;
  }
  chosenGameField.textContent = players[activePlayer].symbol;
  chosenGameField.classList.add("disabled");
  gameData[selectedFieldRow][selectedFieldCol] = activePlayer + 1;
  changeActivePlayer(activePlayer);
  const currentResult = CheckGameOver();
  if (currentResult) {
    GameOver(currentResult);
  }
}
function changeActivePlayer(player) {
  if (player) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }
  SetActivePlayerName(activePlayer);
}
function SetActivePlayerName(wantedPlayer) {
  if (wantedPlayer) {
    activePlayerName.textContent = players[1].name;
  } else {
    activePlayerName.textContent = players[0].name;
  }
}
function CheckGameOver() {
  //checking for winning row
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  //checking for winning col
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  //checking diagonals -left to right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  } else if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }
  //checking for Draw
  if (roundsPlayed === 9) {
    return -1;
  }
  return 0;
}
//checking who won
function GameOver(winnerId) {
  gameIsOver = true;
  if (winnerId > 0) {
    winner.textContent = players[winnerId - 1].name;
    winnerText.style.display = "block";
  } else {
    winnerText.firstElementChild.textContent = "It's a Draw!";
    winnerText.style.display = "block";
  }
}
function resetGame() {
  currentResult = 0;
  roundsPlayed = 0;
  activePlayer = 0;
  gameIsOver = false;
  winnerText.style.display = 'none';
//   another option for game elements reset- OPTION B: gameBoardIndex = 0;
  winnerText.firstElementChild.innerHTML = 'The winner is <span id="winner">Player Name</span>!'
  winner = document.querySelector("#winner");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
//    OPTION B {
    //   gameAreaElement.lastElementChild.children[gameBoardIndex].textContent = "";
    //   gameAreaElement.lastElementChild.children[gameBoardIndex].classList.remove("disabled");
    //   gameBoardIndex++;
//   }

    }
  }
  for(const gameFieldElement of gameFieldElements)
    {
        gameFieldElement.textContent = "";
        gameFieldElement.classList.remove("disabled");
    }

}
