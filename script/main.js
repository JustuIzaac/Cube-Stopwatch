import { resetScramble } from "./cubeScramble.js";
import {
  whenStopwatchNotReady,
  whenStopwatchReady,
  runStopwatch,
  stopStopwatch,
  resetStopwatch,
} from "./stopwatch.js";

window.onload = function () {
  let cubeDimensionSelect = document.querySelector(".cube-dimension");
  let resetButton = document.querySelector(".reset-button");

  let fired = false;
  let stopwatchReady = false;
  let stopwatchRun = false;

  let preDelay;

  resetScramble(getDimension());

  cubeDimensionSelect.onchange = function(){resetScramble(getDimension())};

  resetButton.onclick = function(){resetScramble(getDimension())};

  document.body.onkeydown = function (e) {
    if (!fired) {
      fired = true;
      if (!stopwatchRun) {
        if (e.key == " ") {
          e.preventDefault();
          indicateStopwatchNotReady();

          preDelay = setTimeout(indicateStopwatchReady, 500);
        }
      } else {
        stopStopwatch();

        stopwatchRun = false;
        stopwatchReady = false;
      }
    }
  };

  document.body.onkeyup = function (e) {
    fired = false;

    if (e.key == " ") {
      if (stopwatchReady) {
        runStopwatch();

        stopwatchRun = true;

        resetScramble(getDimension());
      } else {
        stopStopwatch();

        clearTimeout(preDelay);

        stopwatchRun = false;
        stopwatchReady = false;
      }
    }
  };

  function getDimension(){
    let cubeDimension = parseInt(cubeDimensionSelect.value)
    console.log(cubeDimension);

    return cubeDimension;
}

  function indicateStopwatchNotReady() {
    whenStopwatchNotReady();
  }

  function indicateStopwatchReady() {
    whenStopwatchReady();

    stopwatchReady = true;

    resetStopwatch();
  }
};
