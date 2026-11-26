/* Learnora equation solver — one-step and two-step equations.
   Solves ax + b = c and x ÷ a + b = c, showing each inverse operation.
   No eval, no innerHTML. */
(function () {
  "use strict";

  function round(n) {
    return Math.round(n * 1000000) / 1000000;
  }

  function fmt(n) { return String(round(n)); }

  /* form: "axb" for ax + b = c, "div" for x ÷ a + b = c */
  function solve(a, b, c, form) {
    if (!isFinite(a) || !isFinite(b) || !isFinite(c)) {
      return { ok: false, error: "Enter numbers for a, b and c." };
    }
    if (a === 0) {
      return { ok: false, error: "a cannot be 0 — then there is no x term to solve for." };
    }
    var steps = [];
    var x;
    if (form === "div") {
      steps.push("Equation: x ÷ " + fmt(a) + " + " + fmt(b) + " = " + fmt(c) + ".");
      steps.push("Step 1: subtract " + fmt(b) + " from both sides: x ÷ " + fmt(a) + " = " + fmt(c) + " − " + fmt(b) + " = " + fmt(c - b) + ".");
      x = round((c - b) * a);
      steps.push("Step 2: multiply both sides by " + fmt(a) + ": x = " + fmt(c - b) + " × " + fmt(a) + " = " + fmt(x) + ".");
      steps.push("Check: " + fmt(x) + " ÷ " + fmt(a) + " + " + fmt(b) + " = " + fmt(x / a) + " + " + fmt(b) + " = " + fmt(x / a + b) + ".");
    } else {
      steps.push("Equation: " + fmt(a) + "x + " + fmt(b) + " = " + fmt(c) + ".");
      steps.push("Step 1: subtract " + fmt(b) + " from both sides: " + fmt(a) + "x = " + fmt(c) + " − " + fmt(b) + " = " + fmt(c - b) + ".");
      x = round((c - b) / a);
      steps.push("Step 2: divide both sides by " + fmt(a) + ": x = " + fmt(c - b) + " ÷ " + fmt(a) + " = " + fmt(x) + ".");
      steps.push("Check: " + fmt(a) + " × " + fmt(x) + " + " + fmt(b) + " = " + fmt(a * x) + " + " + fmt(b) + " = " + fmt(a * x + b) + ".");
    }
    return { ok: true, x: x, steps: steps };
  }

  var api = { solve: solve };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; }

  if (typeof document === "undefined") { return; }

  function el(id) { return document.getElementById(id); }

  function run() {
    var a = parseFloat(el("eq-a").value);
    var b = parseFloat(el("eq-b").value);
    var c = parseFloat(el("eq-c").value);
    var form = el("eq-form").value;
    var out = el("eq-result");
    var stepsEl = el("eq-steps");
    out.textContent = "";
    while (stepsEl.firstChild) { stepsEl.removeChild(stepsEl.firstChild); }
    var r = solve(a, b, c, form);
    if (!r.ok) { out.textContent = r.error; return; }
    out.textContent = "x = " + fmt(r.x);
    r.steps.forEach(function (s) {
      var li = document.createElement("li");
      li.textContent = s;
      stepsEl.appendChild(li);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    el("eq-form").addEventListener("change", function () {
      el("eq-form-label").textContent = el("eq-form").value === "div"
        ? "Solve x ÷ a + b = c" : "Solve ax + b = c";
    });
    el("eq-form-el").addEventListener("submit", function (e) {
      e.preventDefault();
      run();
    });
    el("eq-try").addEventListener("click", function () {
      el("eq-form").value = "axb";
      el("eq-a").value = "2"; el("eq-b").value = "5"; el("eq-c").value = "20"; run();
    });
  });
})();
