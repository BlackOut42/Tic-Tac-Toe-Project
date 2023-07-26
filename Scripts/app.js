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

//Action listeners
editPlayer1BtnElement.addEventListener('click',OpenPlayerConfig);
editPlayer2BtnElement.addEventListener('click',OpenPlayerConfig);

cancelConfigButtonElement.addEventListener('click',ClosePlayerConfig);
backdropElement.addEventListener('click',ClosePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);

//General data
const players = [
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    }
];