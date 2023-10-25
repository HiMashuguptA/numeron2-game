// Iteration 8: Making scoreboard functional
let parems= new URLSearchParams(window.location.search)
let score = parems.get("score")

let scoreboard = document.getElementById("score-board");
scoreboard.textContent = score;

let playAgain = document.getElementById("play-again-button");
playAgain.onclick=()=>{
    window.location.href="./game.html"
}