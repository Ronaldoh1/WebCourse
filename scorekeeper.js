var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");

var p1Score = 0;
var p2Score = 0;

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var input = document.querySelector("input");

var winningSoreDisplay = document.querySelector("p span");

var gameOver = false;

var winningScore = 5;

input.addEventListener("change", function() {
  winningSoreDisplay.textContent = input.value;
  winningScore = Number(input.value);
  reset();
});

p1button.addEventListener("click", function() {
  if(!gameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
  }
  if(p1Score === winningScore) {
    p1Display.classList.add("winner");
    gameOver = true;
  }
});

p2button.addEventListener("click", function() {
  if(!gameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
  }
  if(p2Score === winningScore) {
    p2Display.classList.add("winner");
    gameOver = true;
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  if (p1Score === winningScore) {
    p1Display.classList.remove("winner")
  } else {
    p2Display.classList.remove("winner")
  }
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  gameOver = false;
}
