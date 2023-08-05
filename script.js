let timer = document.querySelector("#timer");
let startBtn = document.querySelector("#start");
let pauseBtn = document.querySelector("#pause");
let breakBtn = document.querySelector("#break");

let seconds = 0;
let minutes = 25;

startBtn.addEventListener("click", () => {
  console.log("started");
  startBtn.classList.remove("active");
  pauseBtn.classList.add("active");

  let interval = setInterval(timerFunc, 1000);

  pauseBtn.addEventListener("click", () => {
    console.log("paused");
    startBtn.textContent = "Resume";
    startBtn.classList.add("active");
    pauseBtn.classList.remove("active");

    clearInterval(interval);
  });
});

reportTime();

function timerFunc() {
  if (seconds == 0 && minutes == 0) {
    return
  }
  updateTime();
  reportTime();
}

function updateTime() {
  if (seconds == 0) {
    seconds = 60;
    minutes--;
  }

  seconds--

  if (minutes >= 24) {
    console.log(`${minutes}:${seconds}`);
  }
}

function reportTime() {
  let displaySec = seconds < 10 ? "0" + seconds : seconds;
  let displayMin = minutes < 10 ? "0" + minutes : minutes;
  timer.textContent = displayMin + ":" + displaySec;
}
