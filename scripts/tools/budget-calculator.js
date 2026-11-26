/* Learnora budget calculator — fictional amounts for practice only.
   Splits monthly money into needs / wants / savings, compares with
   the 50 / 30 / 20 guide, and shows what is left. This is an
   educational example, not financial advice. No eval, no innerHTML. */
(function () {
  "use strict";

  function round2(n) { return Math.round(n * 100) / 100; }

  function pctOf(part, whole) {
    if (!whole) { return 0; }
    return round2(part / whole * 100);
  }

  function calculate(income, needs, wants, savings) {
    var vals = [income, needs, wants, savings];
    for (var i = 0; i < vals.length; i++) {
      if (!isFinite(vals[i]) || vals[i] < 0) {
        return { ok: false, error: "Enter amounts of $0 or more for income, needs, wants and savings." };
      }
    }
    if (income <= 0) {
      return { ok: false, error: "Enter a monthly income greater than $0." };
    }
    var total = round2(needs + wants + savings);
    var remaining = round2(income - total);
    return {
      ok: true,
      total: total,
      remaining: remaining,
      needsPct: pctOf(needs, income),
      wantsPct: pctOf(wants, income),
      savingsPct: pctOf(savings, income),
      guide: {
        needs: round2(income * 0.5),
        wants: round2(income * 0.3),
        savings: round2(income * 0.2)
      },
      over: remaining < 0
    };
  }

  var api = { calculate: calculate, pctOf: pctOf };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; }

  if (typeof document === "undefined") { return; }

  function el(id) { return document.getElementById(id); }

  function money(n) { return "$" + (Math.round(n * 100) / 100); }

  function setBar(id, pct) {
    var bar = el(id);
    bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
    bar.textContent = pct + "%";
  }

  function run() {
    var income = parseFloat(el("bd-income").value);
    var needs = parseFloat(el("bd-needs").value);
    var wants = parseFloat(el("bd-wants").value);
    var savings = parseFloat(el("bd-savings").value);
    var out = el("bd-result");
    var note = el("bd-note");
    var r = calculate(income, needs, wants, savings);
    if (!r.ok) { out.textContent = r.error; note.textContent = ""; return; }
    out.textContent = "Planned spending: " + money(r.total) + " of " + money(income) +
      ". Money left: " + money(r.remaining) + ".";
    note.textContent = r.over
      ? "This plan spends more than the income. Try lowering wants first, then check needs."
      : "The 50 / 30 / 20 guide suggests needs " + money(r.guide.needs) +
        ", wants " + money(r.guide.wants) + " and savings " + money(r.guide.savings) +
        " for this income. It is a guide, not a rule — every family is different.";
    setBar("bd-bar-needs", r.needsPct);
    setBar("bd-bar-wants", r.wantsPct);
    setBar("bd-bar-savings", r.savingsPct);
    el("bd-pct-needs").textContent = r.needsPct + "% of income";
    el("bd-pct-wants").textContent = r.wantsPct + "% of income";
    el("bd-pct-savings").textContent = r.savingsPct + "% of income";
  }

  document.addEventListener("DOMContentLoaded", function () {
    el("bd-form").addEventListener("submit", function (e) {
      e.preventDefault();
      run();
    });
    el("bd-try").addEventListener("click", function () {
      el("bd-income").value = "1000"; el("bd-needs").value = "500";
      el("bd-wants").value = "300"; el("bd-savings").value = "200"; run();
    });
  });
})();
