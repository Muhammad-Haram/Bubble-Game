var timeval = 30;
var score = 0;
var hitrn = "";
let wrong = new Audio("wrongs.mp3");

let createBubbles = () => {
  var bubble = "";

  for (let f = 1; f <= 102; f++) {
    var rn = Math.floor(Math.random() * 10);
    bubble += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".btm-panel").innerHTML = bubble;
};

var runTime = () => {
  setInterval(() => {
    if (timeval > 0) {
      timeval--;
      document.querySelector("#timer").innerHTML = timeval;
    } else {
        
      document.querySelector(".btm-panel").innerHTML = `<h1>Game Over</h1>`;
      clearInterval(timeval);
    }
  }, 1000);
};

var generateHitval = () => {
  hitrn = Math.floor(Math.random() * 10);

  document.querySelector("#hitval").innerHTML = hitrn;
};

let setScore = () => {
  score += 10;
  document.querySelector("#scoreval").innerHTML = score;
};

document.querySelector(".btm-panel").addEventListener("click", (details) => {
  var clickedNum = Number(details.target.innerHTML);
  if (clickedNum === hitrn) {
    setScore();
    createBubbles();
    generateHitval();
  } else {
    wrong.play();
  }
});

runTime();
createBubbles();
generateHitval();
