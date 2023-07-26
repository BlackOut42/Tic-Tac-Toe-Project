function StartNewGame() {
  if (players[0].name == "" || players[1].name == "") {
    alert("Enter valid player names before starting!");
    return;
  }
  gameAreaElement.style.display = "block";
  SetActivePlayerName(startingPlayer);
}

function selectGameField(event) {
  const chosenGameField = event.target;
  const selectedFieldRow = chosenGameField.dataset.row - 1;
  const selectedFieldCol = chosenGameField.dataset.col - 1;
  if (gameData[selectedFieldRow][selectedFieldCol] > 0) {
    return;
  }
  chosenGameField.textContent = players[activePlayer].symbol;
  chosenGameField.classList.add("disabled");
  gameData[selectedFieldRow][selectedFieldCol] = activePlayer + 1;
  console.log(gameData);
  changeActivePlayer(activePlayer);
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
function checkWinner() {}
