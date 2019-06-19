$(document).ready(function(){

var score = 0;
var total = 0;
var total2 = 0;
var players = 0;
var playerStr = "Player 1";

function playerSwap() {
if (players === 0) {
  players = 1;
  playerStr = "Player 2";
} else {
  players = 0 ;
  playerStr = "Player 1";
}
}


function win() {
  if (total >= 100) {
    alert("P1 Win!");
  } else if (total2 >= 100) {
    alert("P2 Win!");
  }
}

function cpuE() {
  var cpuTurns;
  if (players === 1) {
    for (var i = 0; i <= 2; i++) {
    buttonRoll();
    }
    buttonHold();
  }
}

  $("button#roll").click(function buttonRoll() {
    var x = Math.floor((Math.random() * 6) + 1);
      var y = Math.floor((Math.random() * 6) + 1);
    if (x === 1 || y === 1) {
      score = 0;
      playerSwap();
    } else {
      score += x;
      score += y;
    }
    document.getElementById("dice1").innerHTML = x + " die 1";
    document.getElementById("dice2").innerHTML = y + " die 2";
    document.getElementById("turnScore").innerHTML = score + " turn score";
    document.getElementById("whoPlaying").innerHTML = playerStr;
    cpuE();
  });

  $("button#hold").click(function buttonHold() {
    if (players === 0) {
      total += score;
      score = 0;
      document.getElementById("turnScore").innerHTML = score;
      document.getElementById("total").innerHTML = total;
    } else {
      total2 += score;
      score = 0;
      document.getElementById("turnScore").innerHTML = score;
      document.getElementById("total2").innerHTML = total2;
    }
    playerSwap();
    document.getElementById("whoPlaying").innerHTML = playerStr;
    win();
    cpuE();

  });




















});
