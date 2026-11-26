/* Learnora fraction visualiser — shade parts of a bar to see a
   fraction, with its decimal, percentage and simplest form.
   The bar is built from DOM nodes, never innerHTML. */
(function () {
  "use strict";

  function gcd(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b) { var t = b; b = a % b; a = t; }
    return a || 1;
  }

  function simplify(num, den) {
    var g = gcd(num, den);
    return { num: num / g, den: den / g };
  }

  function describe(num, den) {
    if (!isFinite(num) || !isFinite(den) || den < 1) {
      return { ok: false, error: "Choose a denominator of 1 or more." };
    }
    num = Math.floor(num); den = Math.floor(den);
    if (num < 0 || num > den) {
      return { ok: false, error: "The numerator must be between 0 and the denominator." };
    }
    var s = simplify(num, den);
    var decimal = den === 0 ? 0 : num / den;
    return {
      ok: true, num: num, den: den,
      decimal: Math.round(decimal * 1000) / 1000,
      percent: Math.round(decimal * 1000) / 10,
      simpleNum: s.num, simpleDen: s.den,
      words: num + " out of " + den + " equal parts are shaded."
    };
  }

  var api = { gcd: gcd, simplify: simplify, describe: describe };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; }

  if (typeof document === "undefined") { return; }

  function el(id) { return document.getElementById(id); }

  function render() {
    var num = parseInt(el("fv-num").value, 10);
    var den = parseInt(el("fv-den").value, 10);
    var bar = el("fv-bar");
    var out = el("fv-result");
    while (bar.firstChild) { bar.removeChild(bar.firstChild); }
    var r = describe(num, den);
    if (!r.ok) { out.textContent = r.error; return; }
    for (var i = 0; i < r.den; i++) {
      var seg = document.createElement("div");
      seg.className = "fv-seg" + (i < r.num ? " fv-shaded" : "");
      seg.style.width = (100 / r.den) + "%";
      seg.setAttribute("aria-hidden", "true");
      bar.appendChild(seg);
    }
    var simple = r.simpleNum === r.num && r.simpleDen === r.den
      ? "This fraction is already in its simplest form."
      : "In its simplest form: " + r.simpleNum + "/" + r.simpleDen + ".";
    out.textContent = r.words + " That is " + r.num + "/" + r.den + " = " + r.decimal +
      " = " + r.percent + "%. " + simple;
    el("fv-num-label").textContent = "Numerator (shaded parts): " + r.num;
    el("fv-den-label").textContent = "Denominator (equal parts): " + r.den;
  }

  document.addEventListener("DOMContentLoaded", function () {
    el("fv-num").addEventListener("input", render);
    el("fv-den").addEventListener("input", render);
    el("fv-try").addEventListener("click", function () {
      el("fv-num").value = "3"; el("fv-den").value = "4"; render();
    });
    render();
  });
})();
