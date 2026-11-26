/* Learnora percentage calculator — same-origin, dependency-free.
   Pure functions are exported for Node testing; the browser wiring
   below only runs when document exists. No eval, no innerHTML. */
(function () {
  "use strict";

  function round2(n) {
    return Math.round(n * 100) / 100;
  }

  function format(n) {
    var r = round2(n);
    return String(r);
  }

  /* mode: "of" | "increase" | "decrease" */
  function calculate(amount, pct, mode) {
    if (!isFinite(amount) || !isFinite(pct)) {
      return { ok: false, error: "Enter numbers for the amount and the percentage." };
    }
    var part = round2(amount * pct / 100);
    var result, steps;
    if (mode === "increase") {
      result = round2(amount + part);
      steps = [
        "Step 1: find " + pct + "% of " + amount + ": " + amount + " × " + pct + " ÷ 100 = " + format(part) + ".",
        "Step 2: add it on: " + amount + " + " + format(part) + " = " + format(result) + "."
      ];
    } else if (mode === "decrease") {
      result = round2(amount - part);
      steps = [
        "Step 1: find " + pct + "% of " + amount + ": " + amount + " × " + pct + " ÷ 100 = " + format(part) + ".",
        "Step 2: take it away: " + amount + " − " + format(part) + " = " + format(result) + "."
      ];
    } else {
      result = part;
      steps = [
        "Step 1: " + pct + "% means " + pct + " out of every 100.",
        "Step 2: " + amount + " × " + pct + " ÷ 100 = " + format(result) + "."
      ];
    }
    return { ok: true, result: result, part: part, steps: steps };
  }

  var api = { round2: round2, format: format, calculate: calculate };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; }

  if (typeof document === "undefined") { return; }

  function el(id) { return document.getElementById(id); }

  function run() {
    var amount = parseFloat(el("pct-amount").value);
    var pct = parseFloat(el("pct-percent").value);
    var mode = el("pct-mode").value;
    var out = el("pct-result");
    var stepsEl = el("pct-steps");
    out.textContent = "";
    while (stepsEl.firstChild) { stepsEl.removeChild(stepsEl.firstChild); }
    var r = calculate(amount, pct, mode);
    if (!r.ok) {
      out.textContent = r.error;
      return;
    }
    var label = mode === "of" ? pct + "% of " + amount + " = " + format(r.result)
      : mode === "increase" ? "After a " + pct + "% increase: " + format(r.result)
      : "After a " + pct + "% decrease: " + format(r.result);
    out.textContent = label;
    r.steps.forEach(function (s) {
      var li = document.createElement("li");
      li.textContent = s;
      stepsEl.appendChild(li);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    el("pct-form").addEventListener("submit", function (e) {
      e.preventDefault();
      run();
    });
    el("pct-try-1").addEventListener("click", function () {
      el("pct-amount").value = "80"; el("pct-percent").value = "25"; el("pct-mode").value = "of"; run();
    });
    el("pct-try-2").addEventListener("click", function () {
      el("pct-amount").value = "200"; el("pct-percent").value = "15"; el("pct-mode").value = "increase"; run();
    });
  });
})();
