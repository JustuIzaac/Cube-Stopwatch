import { resetScramble } from "./cubeScramble.js";
import {
  whenStopwatchNotReady,
  whenStopwatchReady,
  runStopwatch,
  stopStopwatch,
  resetStopwatch,
} from "./stopwatch.js";

window.onload = function () {
  let fired = false;
  let stopwatchReady = false;
  let stopwatchRun = false;

  let preDelay;

  resetScramble();

  document.body.onkeydown = function (e) {
    if (e.key == " ") {
      if (!fired) {
        fired = true;

        if (!stopwatchRun) {
          indicateStopwatchNotReady();

          preDelay = setTimeout(indicateStopwatchReady, 500);
        } else {
          stopStopwatch();

          stopwatchRun = false;
          stopwatchReady = false;
        }
      }
    }
  };

  document.body.onkeyup = function (e) {
    if (e.key == " ") {
      fired = false;

      if (stopwatchReady) {
        runStopwatch();

        stopwatchRun = true;

        resetScramble();
      } else {
        stopStopwatch();

        clearTimeout(preDelay);

        stopwatchRun = false;
        stopwatchReady = false;
      }
    }
  };

  function indicateStopwatchNotReady() {
    whenStopwatchNotReady();
  }

  function indicateStopwatchReady() {
    whenStopwatchReady();

    stopwatchReady = true;

    resetStopwatch();
  }
};
