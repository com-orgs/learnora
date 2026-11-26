/* Learnora study timer — 25-minute study / 5-minute break cycles.
   Nothing is stored on a server and no sound plays unless the
   "sound" box is ticked (the beep is made only after the learner
   pressed Start, so there is no autoplay). No eval, no innerHTML. */
(function () {
  "use strict";

  var STUDY_SECONDS = 25 * 60;
  var BREAK_SECONDS = 5 * 60;

  function formatTime(totalSeconds) {
    var s = Math.max(0, Math.floor(totalSeconds));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return (m < 10 ? "0" + m : String(m)) + ":" + (r < 10 ? "0" + r : String(r));
  }

  function nextMode(mode, completedStudy) {
    if (mode === "study") {
      return { mode: "break", seconds: BREAK_SECONDS, completedStudy: completedStudy + 1 };
    }
    return { mode: "study", seconds: STUDY_SECONDS, completedStudy: completedStudy };
  }

  var api = { STUDY_SECONDS: STUDY_SECONDS, BREAK_SECONDS: BREAK_SECONDS, formatTime: formatTime, nextMode: nextMode };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; }

  if (typeof document === "undefined") { return; }

  function el(id) { return document.getElementById(id); }

  var mode = "study";
  var remaining = STUDY_SECONDS;
  var completedStudy = 0;
  var timerId = null;
  var audioCtx = null;

  function beep() {
    if (!el("st-sound").checked) { return; }
    try {
      if (!audioCtx) { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.frequency.value = 880;
      gain.gain.value = 0.08;
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) { /* sound is optional; the timer still works without it */ }
  }

  function render() {
    el("st-time").textContent = formatTime(remaining);
    el("st-mode").textContent = mode === "study" ? "Study time — focus on one thing" : "Break time — stretch, drink water, rest your eyes";
    el("st-count").textContent = "Study sessions finished: " + completedStudy;
    el("st-start").textContent = timerId ? "Pause" : "Start";
  }

  function tick() {
    remaining -= 1;
    if (remaining <= 0) {
      var next = nextMode(mode, completedStudy);
      mode = next.mode;
      remaining = next.seconds;
      completedStudy = next.completedStudy;
      beep();
    }
    render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    render();
    el("st-start").addEventListener("click", function () {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      } else {
        timerId = setInterval(tick, 1000);
      }
      render();
    });
    el("st-reset").addEventListener("click", function () {
      if (timerId) { clearInterval(timerId); timerId = null; }
      mode = "study";
      remaining = STUDY_SECONDS;
      completedStudy = 0;
      render();
    });
    el("st-switch").addEventListener("click", function () {
      var next = nextMode(mode, completedStudy);
      mode = next.mode;
      remaining = next.seconds;
      completedStudy = next.completedStudy;
      render();
    });
  });
})();
