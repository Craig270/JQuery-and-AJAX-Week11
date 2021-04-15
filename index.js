"use strict";
//my tic tac tow game
let moves = 0;
let newGameBtn = document.getElementById("newGame");
const spaces = [];
let player1Text = "O";
let player2Text = "X";
const playerWinText = document.getElementById("playerWinsMessage");
const gameOn = true;
let currentPlayer = player1Text;
let grid9 = document.getElementById("9").innerHTML;
let grid8 = document.getElementById("8").innerHTML;
let grid7 = document.getElementById("7").innerHTML;
let grid6 = document.getElementById("6").innerHTML;
let grid5 = document.getElementById("5").innerHTML;
let grid4 = document.getElementById("4").innerHTML;
let grid3 = document.getElementById("3").innerHTML;
let grid2 = document.getElementById("2").innerHTML;
let grid1 = document.getElementById("1").innerHTML;

function clearnBoard() {
  document.getElementById("9").innerHTML = "";
  document.getElementById("8").innerHTML = "";
  document.getElementById("7").innerHTML = "";
  document.getElementById("6").innerHTML = "";
  document.getElementById("5").innerHTML = "";
  document.getElementById("4").innerHTML = "";
  document.getElementById("3").innerHTML = "";
  document.getElementById("2").innerHTML = "";
  document.getElementById("1").innerHTML = "";
}

function makeBtns() {
  document.getElementById("9").addEventListener("click", boxClick);
  document.getElementById("8").addEventListener("click", boxClick);
  document.getElementById("7").addEventListener("click", boxClick);
  document.getElementById("6").addEventListener("click", boxClick);
  document.getElementById("5").addEventListener("click", boxClick);
  document.getElementById("4").addEventListener("click", boxClick);
  document.getElementById("3").addEventListener("click", boxClick);
  document.getElementById("2").addEventListener("click", boxClick);
  document.getElementById("1").addEventListener("click", boxClick);
  document.getElementById(
    "playerTurn"
  ).innerHTML = `Player ${currentPlayer} turn`;
}
function playerHasWon() {
  //check all rows
  if (
    (spaces["7"] == currentPlayer &&
      spaces["8"] == currentPlayer &&
      spaces["9"] == currentPlayer) ||
    (spaces["4"] == currentPlayer &&
      spaces["5"] == currentPlayer &&
      spaces["6"] == currentPlayer) ||
    (spaces["1"] == currentPlayer &&
      spaces["2"] == currentPlayer &&
      spaces["3"] == currentPlayer)
  ) {
    return true;
  }
  //check columns
  if (
    (spaces["7"] == currentPlayer &&
      spaces["4"] == currentPlayer &&
      spaces["1"] == currentPlayer) ||
    (spaces["8"] == currentPlayer &&
      spaces["5"] == currentPlayer &&
      spaces["2"] == currentPlayer) ||
    (spaces["9"] == currentPlayer &&
      spaces["6"] == currentPlayer &&
      spaces["3"] == currentPlayer)
  ) {
    return true;
  }
  //check diagonals
  if (
    (spaces["7"] == currentPlayer &&
      spaces["5"] == currentPlayer &&
      spaces["3"] == currentPlayer) ||
    (spaces["9"] == currentPlayer &&
      spaces["5"] == currentPlayer &&
      spaces["1"] == currentPlayer)
  ) {
    return true;
  }
}

function boxClick(e) {
  const id = e.target.id;
  console.log(id);
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerHTML = currentPlayer;
    if (playerHasWon()) {
      playerWinText.innerHTML = `${currentPlayer} has won`;
      player1Text = " ";
      player2Text = "";
      currentPlayer = "";
      document.getElementById("jumbo").classList.toggle("hidden");
      document.getElementById("playerTurn").classList.add("hidden");
      document.getElementById("newGame").classList.add("hidden");
      return;
    }
    moves = moves + 1;
    currentPlayer = currentPlayer == player1Text ? player2Text : player1Text;
    document.getElementById(
      "playerTurn"
    ).innerHTML = `Player ${currentPlayer} turn`;
    console.log(moves);

    if (moves >= 9) {
      draw();
    }
  }
}

function draw() {
  document.getElementById("playerTurn").innerHTML = "DRAW! No Winners!";
  document.getElementById("playerWinsMessage").innerHTML = "DRAW!";
  document.getElementById("jumbo").classList.toggle("hidden");
  document.getElementById("newGame").classList.add("hidden");
}

document.getElementById("restartGame").addEventListener("click", () => {
  console.log(`reset button pressed`);
  spaces["grid9"] = "";
  spaces["grid8"] = "";
  spaces["grid7"] = "";
  spaces["grid6"] = "";
  spaces["grid5"] = "";
  spaces["grid4"] = "";
  spaces["grid3"] = "";
  spaces["grid2"] = "";
  spaces["grid1"] = "";
  document.getElementById("jumbo").classList.toggle("hidden");
  clearnBoard();
  document.location.reload();
});
newGameBtn.addEventListener("click", () => {
  console.log("button pressed");
  clearnBoard();
  makeBtns();
});
