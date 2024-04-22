/*
TIC-TAC-TOE GAME
AUTHOR: AARON MILBURY
DATE: April 21st, 2024
*/
//Add event listeners for buttons and cells.
window.onload = function(){
    document.querySelector("#startGame").addEventListener("click",startGame);
}

function startGame(){
    let content = document.querySelector("#content");
    content.classList.remove("hidden");
    let button = document.querySelector("#startGame");
    button.classList.add("hidden");
}
