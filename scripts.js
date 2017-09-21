// document.getElementById("userNum").innerHTML = userNum;
//
// document.getElementById("blueCrystal").addEventListener("click", blueCrystalFunc);
console.log("hi");
//variables
var q1a = "";
var q1c = "Kanto";
var q2a = "";
var q2c = "Birch";
var q3a = "";
var q3c = "Generation 3";
var timer = 30;
var timeoutID;
var correct = 0;
var incorrect = 0;

//functions
function q1a1Func() {
  document.getElementById("q1a1").style.background = "lightpink";
  document.getElementById("q1a2").style.background = "lightyellow";
  document.getElementById("q1a3").style.background = "lightyellow";
  q1a = "Hoenn";
  console.log(q1a);
};

function q1a2Func() {
  document.getElementById("q1a1").style.background = "lightyellow";
  document.getElementById("q1a2").style.background = "lightpink";
  document.getElementById("q1a3").style.background = "lightyellow";
  q1a = "Kanto";
  console.log(q1a);
};

function q1a3Func() {
  document.getElementById("q1a1").style.background = "lightyellow";
  document.getElementById("q1a2").style.background = "lightyellow";
  document.getElementById("q1a3").style.background = "lightpink";
  q1a = "Jhoto";
  console.log(q1a);
};

function q2a1Func() {
  document.getElementById("q2a1").style.background = "lightpink";
  document.getElementById("q2a2").style.background = "lightyellow";
  document.getElementById("q2a3").style.background = "lightyellow";
  q2a = "Oak";
  console.log(q2a);
};

function q2a2Func() {
  document.getElementById("q2a1").style.background = "lightyellow";
  document.getElementById("q2a2").style.background = "lightpink";
  document.getElementById("q2a3").style.background = "lightyellow";
  q2a = "Birch";
  console.log(q2a);
};

function q2a3Func() {
  document.getElementById("q2a1").style.background = "lightyellow";
  document.getElementById("q2a2").style.background = "lightyellow";
  document.getElementById("q2a3").style.background = "lightpink";
  q2a = "Elm";
  console.log(q2a);
};

function q3a1Func() {
  document.getElementById("q3a1").style.background = "lightpink";
  document.getElementById("q3a2").style.background = "lightyellow";
  document.getElementById("q3a3").style.background = "lightyellow";
  q3a = "Generation 1";
  console.log(q3a);
};

function q3a2Func() {
  document.getElementById("q3a1").style.background = "lightyellow";
  document.getElementById("q3a2").style.background = "lightpink";
  document.getElementById("q3a3").style.background = "lightyellow";
  q3a = "Generation 2";
  console.log(q3a);
};

function q3a3Func() {
  document.getElementById("q3a1").style.background = "lightyellow";
  document.getElementById("q3a2").style.background = "lightyellow";
  document.getElementById("q3a3").style.background = "lightpink";
  q3a = "Generation 3";
  console.log(q3a);
};

function startTimer() {
  if (timer === 0) {
    console.log("Time's Up!");
    alert("Time's Up!");
    if (q1a === q1c) {
      alert("Correct! Your answer for question 1 was " + q1a);
      correct++;
    } else {
      alert("Darn, you got the 1st question wrong, the correct answer was " + q1c);
      incorrect--;
    };
    if (q2a === q2c) {
      alert("Correct! Your answer for question 2 was " + q2c);
      correct++;
    } else {
      alert("Darn, you got the 2nd question wrong, the correct answer was " + q2c)
      incorrect--;
    };
    if (q3a === q3c) {
      alert("Correct! Your answer for question 3 was " + q3c);
      correct++;
    } else {
      alert("Darn, you got the 3rd question wrong, the correct answer was " + q3c);
      incorrect--;
    };

    alert("Overall, you got " + correct + " answers correct! You missed a total of " + incorrect + " questions!");
    return;
    //DISPLAY RESULTS
  }
  timer--;
  console.log(timer);
  document.getElementById("timer").innerHTML = timer;
  timeoutID = window.setTimeout(startTimer, 1000);
};

//execution
document.getElementById("q1a1").addEventListener("click", q1a1Func);
document.getElementById("q1a2").addEventListener("click", q1a2Func);
document.getElementById("q1a3").addEventListener("click", q1a3Func);

document.getElementById("q2a1").addEventListener("click", q2a1Func);
document.getElementById("q2a2").addEventListener("click", q2a2Func);
document.getElementById("q2a3").addEventListener("click", q2a3Func);

document.getElementById("q3a1").addEventListener("click", q3a1Func);
document.getElementById("q3a2").addEventListener("click", q3a2Func);
document.getElementById("q3a3").addEventListener("click", q3a3Func);

startTimer();
