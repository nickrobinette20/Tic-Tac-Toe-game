let element = null;
let turn = "circle";
let game = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
let winner = "";
const winConditions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
  [2, 5, 8],
  [6, 7, 8],
  [1, 4, 7],
  [3, 4, 5],
];

function startGame() {
  let elementsArray = document.querySelectorAll(".square");
  elementsArray.forEach((element) => {
    element.addEventListener("click", takeTurn);
  });
}

function addXToSquare(div, imgSource, height, width) {
  let img = document.createElement("img");
  img.src = "assets/redX.png";
  img.id = "X";
  img.style.height = "185px";
  img.style.width = "185px";
  div.appendChild(img);
  gameState[div.id - 1] = "X";
}

function addOToSquare(div, imgSource, height, width) {
  let img = document.createElement("img");
  img.src = "assets/greenO.png";
  img.id = "O";
  img.style.height = "185px";
  img.style.width = "185px";
  div.appendChild(img);
  gameState[div.id - 1] = "O";
}

function takeTurn(div) {
  if (game) {
    if (div.srcElement.id === "picture") {
      console.log("broke");
    } else if (turn === "circle") {
      addOToSquare(div.srcElement);
      turn = "x";
      oWins();
      
      if (!game ) {
        document.getElementById("Text").innerText = "O is the Winnner";
      } else if (isTie() && game) {
        document.getElementById("Text").innerText = "its a tie";
      }
    } else if (turn === "x") {
      addXToSquare(div.srcElement);
      turn = "circle";
      xWins();
      
      if (!game ) {
        document.getElementById("Text").innerText = "X is the Winnner";
      }else if (isTie() && game){
        document.getElementById("Text").innerText = "its a tie";
      }
    }
  }
}

function xWins() {
  if (gameState[0] == "X" && gameState[1] == "X" && gameState[2] == "X") {
    console.log("xWins");
    game = false;
  } else if (
    gameState[0] == "X" &&
    gameState[3] == "X" &&
    gameState[6] == "X"
  ) {
    console.log("xWins");
    game = false;
  } else if (
    gameState[0] == "X" &&
    gameState[4] == "X" &&
    gameState[8] == "X"
  ) {
    console.log("xWins");
    game = false;
  } else if (
    gameState[2] == "X" &&
    gameState[4] == "X" &&
    gameState[6] == "X"
  ) {
    console.log("xWins");
    game = false;
  } else if (
    gameState[2] == "X" &&
    gameState[5] == "X" &&
    gameState[8] == "X"
  ) {
    console.log("xWins");
    game = false;
  } else if (
    gameState[6] == "X" &&
    gameState[7] == "X" &&
    gameState[8] == "X"
  ) {
    console.log("xWins");
    game = false;
  } else if (
    gameState[1] == "X" &&
    gameState[4] == "X" &&
    gameState[7] == "X"
  ) {
    console.log("xWins");
    game = false;
  } else if (
    gameState[3] == "X" &&
    gameState[4] == "X" &&
    gameState[5] == "X"
  ) {
    console.log("xWins");
    game = false;
  }
}

function oWins() {
  if (gameState[0] == "O" && gameState[1] == "O" && gameState[2] == "O") {
    console.log("oWins");
    game = false;
  } else if (
    gameState[0] == "O" &&
    gameState[3] == "O" &&
    gameState[6] == "O"
  ) {
    console.log("oWins");
    game = false;
  } else if (
    gameState[0] == "O" &&
    gameState[4] == "O" &&
    gameState[8] == "O"
  ) {
    console.log("oWins");
    game = false;
  } else if (
    gameState[2] == "O" &&
    gameState[4] == "O" &&
    gameState[6] == "O"
  ) {
    console.log("oWins");
    game = false;
  } else if (
    gameState[2] == "O" &&
    gameState[5] == "O" &&
    gameState[8] == "O"
  ) {
    console.log("oWins");
    game = false;
  } else if (
    gameState[6] == "O" &&
    gameState[7] == "O" &&
    gameState[8] == "O"
  ) {
    console.log("oWins");
    game = false;
  } else if (
    gameState[1] == "O" &&
    gameState[4] == "O" &&
    gameState[7] == "O"
  ) {
    console.log("oWins");
    game = false;
  } else if (
    gameState[3] == "O" &&
    gameState[4] == "O" &&
    gameState[5] == "O"
  ) {
    console.log("oWins");
    game = false;
  }
}

function isTie(){
  result = true
  gameState.forEach(element => {
    if (element === "") {
      result = false
    }console.log(result)
    return result;
  });return result
}
startGame();
