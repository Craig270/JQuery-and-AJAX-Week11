"use strict";

let newGameBtn = document.querySelector("#newgame");
let player1Info = document.querySelector("player--0");
let player2Info = document.querySelector("player--1");
let playing = true;

newGameBtn.addEventListener("click", () => {
    
});
function newPlayerInfo()

function chooseFirst() {
  let flip = Math.trunc(Math.random() * 2 + 1);
  console.log(flip);
  if (flip == 1) {
    console.log("Player 1");
    return "Player1";
  } else {
    console.log("Player 2 ");
    return "Player2";
  }
}

chooseFirst();
