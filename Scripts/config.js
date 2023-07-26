
function OpenPlayerConfig(event){
    const selectedPlayerId = event.target.dataset.playerid;
    editedPlayer = +selectedPlayerId;
    overlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function ClosePlayerConfig(){
        
    overlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error')
    errorText.textContent = '';
    formElement.firstElementChild.lastElementChild.value ='';
}
function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playerName').trim();
    if(!enteredPlayerName)
    {
        event.target.firstElementChild.classList.add("error");
        errorText.textContent = "Error: Invalid player name try again!";
        return;
    }
    const updatedPlayerData = document.getElementById("player-"+editedPlayer+"-data");
    updatedPlayerData.children[1].textContent = enteredPlayerName;
    players[editedPlayer-1].name = enteredPlayerName;
    ClosePlayerConfig();
}