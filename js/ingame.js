knut();
let playerArr = players.split(",");
playerAmount = playerArr.length;
let i2 = 0;

let skola = [
  "Skola",
  "Lärare",
  "Elev",
  "Städare",
  "Mattant",
  "Rektor",
  "jfieofjoeijfosidjfoijo",
];
let kontor = [
  "Arbetare",
  "kenneths mamma",
  "något mer",
  "en till sak",
  "dig sjelv",
];

let maps = [skola, kontor];

while (i2 < playerAmount) {
  i2++;
  var playerContainer = document.getElementById("container");
  var playerCard = document.createElement("div");

  playerCard.setAttribute("class", "item");
  playerCard.setAttribute("id", "player" + i2);
  playerCard.insertAdjacentText("beforeend", playerArr[i2 - 1]);

  playerContainer.appendChild(playerCard);
}
giveRandomOccupation();

function giveRandomOccupation() {
  i2 = 0;

  let spyOccupied = false;
  let randomOccupationNum = 0;

  let plats = maps[parseInt(Math.random() * 2)];
  let lastPlayer = document.getElementsByClassName("item");
  let player = document.getElementById("");
  while (i2 < lastPlayer.length) {
    player = document.getElementById("player" + (i2 + 1));
    var playerInfo = document.createElement("div");
    if (spyOccupied == true) {
      randomOccupationNum = parseInt(Math.random() * (plats.length + 1));
      if (randomOccupationNum == 0) {
        randomOccupationNum = randomOccupationNum + 1;
      }
    } else if (spyOccupied == false) {
      console.log("hej");
    }
    console.error(plats.length);
    console.log(randomOccupationNum);

    playerInfo.setAttribute("class", "playerInfo");
    player.appendChild(playerInfo);

    console.log(player);
    playerCard = Math.random() * plats.length;
    i2++;
  }
}

if (playerAmount < 5) {
  playerContainer.style.width = "max-content";
}

//timer settings
const wholeTimer = document.getElementById("timer");
const timerSeconds = document.getElementById("timer-seconds");
const timerMinutes = document.getElementById("timer-minutes");
const colon = document.getElementById("colon");
let onVar = false;
let finishedVar = false;
let seconds = 0;
let countdown;

timerSeconds.textContent = seconds;
colon.textContent = ":0";

// !IMPORTANT KALLE!
//Detta (minutes) ska vara den globala variabeln som sätt i timer.html,
//bara för nu har jag satt den som 0 för test

//hämtar värdet och sätter minutes till savedTime
getSavedTime();
console.log(newTimerValue);
let minutes = newTimerValue;
timerMinutes.textContent = minutes;
let nextBtn = document.getElementById("next-btn");

function startTimer() {
  countdown = setInterval(function () {
    if (onVar === false) {
      return;
    } else {
      seconds--;
      timerSeconds.textContent = seconds;
      if (seconds < 10 && seconds > 1) {
        colon.textContent = ":0";
      } else if (seconds == 0 && minutes == 0) {
        clearInterval(countdown);
        colon.innerHTML = "0:00";
        nextBtn.style.visibility = "visible";
        timerSeconds.textContent = "";
        timerMinutes.textContent = "";
        finishedVar = true;
        colon.setAttribute("#hide");
      } else if (seconds == -1) {
        minutes--;
        timerMinutes.textContent = minutes;
        seconds = 59;
        timerSeconds.textContent = seconds;
        colon.textContent = ":";
      }
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
}

//function
wholeTimer.addEventListener("click", function () {
  console.log("Timer klickad");
  if (onVar === false && finishedVar === false) {
    startTimer();
    onVar = true;
  } else if (onVar === true && finishedVar === false) {
    stopTimer();
    onVar = false;
  }
});

//function for putting clicked player card in focus

let inFocus = false;
let focusCard = "";
playerContainer.onclick = function (event) {
  let target = event.target;
  console.log(target);
  if (inFocus === false && focusCard === "" && target !== playerContainer) {
    target.classList.add("focus-class");
    inFocus = true;
    focusCard = target;
    console.log("Fokus är " + focusCard);
    console.log(target);
    target.firstElementChild.style.display = "block";

    //styling
    document.querySelector("body").style.backgroundColor = "rgb(30, 30, 30)";
    playerContainer.style.backgroundColor = "rgb(30, 30, 30)";
    playerContainer.style.overflow = "hidden";
    playerContainer.classList.remove("scroll-shadows");
  } else if (inFocus === true && focusCard === target) {
    target.classList.remove("focus-class");
    inFocus = false;
    focusCard = "";
    target.firstElementChild.style.display = "none";

    //styling
    document.querySelector("body").style.backgroundColor = "#333333";
    playerContainer.style.backgroundColor = "#333333";
    playerContainer.style.overflow = "scroll";
    playerContainer.classList.add("scroll-shadows");
  }
};
