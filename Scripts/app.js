//overlay elements
const overlayElement = document.getElementById("overlay-config");
const backdropElement = document.getElementById("backdrop");
const cancelConfigButtonElement = document.getElementById("cancel-config-btn");
const submitConfigButtonElement = document.getElementById("submit-config-btn");
const formElement = document.getElementById("edit-form");
const errorText = document.getElementById("errorText");
let editedPlayer = 0;

//Edit button elements
const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");

//Game Elements
const startGameButtonElement = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");
const gameFieldElements = document.querySelectorAll("#game-board li");
const activePlayerName = document.querySelector("#active-player-name");
const winnerText = document.querySelector("#winner-text");
let gameIsOver = false;


//For some reason I can't assign 'winner' variable as a constant, 
//when I try to access it after a reset i.e: changing the inner HTML of the parent I cannot access the variable anymore.
//had to change it to a regular variable an re assign in after the change.
let winner = document.querySelector("#winner");
//

let activePlayer = 0;
let roundsPlayed = 0;
const startingPlayer = 0;
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

//Action listeners
editPlayer1BtnElement.addEventListener("click", OpenPlayerConfig);
editPlayer2BtnElement.addEventListener("click", OpenPlayerConfig);

cancelConfigButtonElement.addEventListener("click", ClosePlayerConfig);
backdropElement.addEventListener("click", ClosePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startGameButtonElement.addEventListener("click", StartNewGame);

for (const gameFieldElement of gameFieldElements)
  gameFieldElement.addEventListener("click", selectGameField);

//General data
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];
