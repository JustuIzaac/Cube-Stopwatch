let notStopwatchElements = document.querySelectorAll(".not-stopwatch");
let stopwatchElement = document.querySelector(".stopwatch");
let mainLabel = document.querySelector(".main-label");
let subLabel = document.querySelector(".sub-label");

let dSec = 0;
let sec = 0;
let min = 0;
let h = 0;

let stopwatchInterval;

export function whenStopwatchNotReady() {
  stopwatchElement.style.color = "red";
}

export function whenStopwatchReady() {
  for (let i = 0; i < notStopwatchElements.length; i++) {
    notStopwatchElements[i].style.display = "none";
  }

  stopwatchElement.style.color = "#00ff15";
  stopwatchElement.classList.add("center-absolute");
}

export function runStopwatch() {
  stopwatchInterval = setInterval(stopwatch, 100);
  
  stopwatchElement.style.color = "black";
}

export function stopStopwatch() {
  for (let i = 0; i < notStopwatchElements.length; i++) {
    notStopwatchElements[i].style.display = "block";
  }

  stopwatchElement.classList.remove("center-absolute");
  stopwatchElement.style.color = "black";

  clearInterval(stopwatchInterval);
}

export function resetStopwatch() {
  dSec = 0;
  sec = 0;
  min = 0;
  h = 0;

  updateStopwatch(dSec, sec, min, h);
}

function stopwatch() {
  dSec++;

  if (dSec >= 10) {
    dSec = 0;
    sec++;
  }

  if (sec >= 60) {
    sec = 0;
    min++;
  }

  if (min >= 60) {
    min = 0;
    h++;
  }

  updateStopwatch(dSec, sec, min, h);
}

function updateStopwatch(dSec, sec, min, h) {
  if (h > 0) {
    mainLabel.textContent = `${h}:${min}:${sec}`;
    subLabel.textContent = `${dSec}`;
  } else if (min > 0) {
    mainLabel.textContent = `${min}:${sec}`;
    subLabel.textContent = `${dSec}`;
  } else {
    mainLabel.textContent = `${sec}`;
    subLabel.textContent = `${dSec}`;
  }
}