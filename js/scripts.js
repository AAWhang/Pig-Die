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

function reset() {
  total = 0;
  total2 = 0;
  score = 0;
  x = 0;
  y = 0;
  document.getElementById("turnScore").innerHTML = score;
  document.getElementById("total").innerHTML = total;
  document.getElementById("total2").innerHTML = total2;
  document.getElementById("dice1").innerHTML = x + " die 1";
  document.getElementById("dice2").innerHTML = y + " die 2";
}
function win() {
  if (total >= 100) {
    alert("P1 Win! Score: " + total);
    reset();
  } else if (total2 >= 100) {
    alert("P2 Win! Score: " + total2);
    reset();
  }
}

function cpuE() {
  var cpuTurns;
      if (players === 1) {
        for (var i = 0; i <= 2; i++) {
          if (players === 1) {
            buttonRoll();
          }
        }
        if (players === 1) {
          buttonHold();
        }
  }
}

function cpuH() {
  var cpuTurns;
        while (score < 20 && players === 1 && score + total2 < 100) {
            buttonRoll();
        }
        if (players === 1) {
          buttonHold();
        }
}

function modeselect() {
  var mode = 0;
  if (document.getElementById('game2').checked) {
    cpuE();
  } else if (document.getElementById('game3').checked)  {
    cpuH();
  }

}
function dieOut(die) {
  return "<img src='img/die" + die + ".png'>";
}

function buttonRoll()
{
  var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);
  if (x === 1 || y === 1) {
    score = 0;
    playerSwap();
  } else {
    score += x;
    score += y;
  }
  document.getElementById("dice1").innerHTML = dieOut(x);
  document.getElementById("dice2").innerHTML = dieOut(y);
  document.getElementById("turnScore").innerHTML = score + " turn score";
  document.getElementById("whoPlaying").innerHTML = playerStr;
}

function buttonHold() {
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

}

  $("button#roll").click(function() {
    buttonRoll();
    modeselect();
  });

  $("button#hold").click(function() {
    buttonHold();
    modeselect();
  });

  $("button#reset").click(function() {
    reset();
  });


















});
