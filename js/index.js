console.log("index.js laddat");

let playerCount = document.getElementsByClassName("player-input").length;
var playerCountString = "input-" + playerCount;
console.log(playerCountString);
let i = 0;


function nextPage() {
  while (i < playerCount) {
    playerCountString = document.getElementById("input-" + (i + 1)).value;
    console.log(playerCountString);
    players[i] = playerCountString;
    i++;
  }
  window.location.href = "/timer.html";
  console.log(players);
  
}

function addPlayer() {
  playerCount = document.getElementsByClassName("player-input").length;
  console.log("clicked");
  var playerBox = document.getElementById("player-box");
  var input = document.createElement("input");
  input.type = "text";

  input.setAttribute("type", "text");
  input.setAttribute("class", "player-input");
  input.setAttribute("id", "input-" + (playerCount + 1));

  input.setAttribute("placeholder", "Player " + (playerCount + 1) + " name");

  console.log(playerCount);
  playerBox.appendChild(input);
}

function removePlayer() {
  playerCount = document.getElementsByClassName("player-input").length;
  var playerBox = document.getElementById("player-box");
  console.log("RM WORKED");

  if (playerCount <= 3) {
    return;
  }

  playerBox.removeChild(playerBox.lastElementChild);
}
