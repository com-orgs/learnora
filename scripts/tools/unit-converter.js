/* Learnora unit converter — same-origin, dependency-free.
   Conversions go through a base unit (metres, grams, millilitres),
   so every step can be shown. No eval, no innerHTML. */
(function () {
  "use strict";

  var UNITS = {
    length: {
      label: "Length",
      base: "m",
      units: {
        mm: { name: "millimetres (mm)", toBase: 0.001 },
        cm: { name: "centimetres (cm)", toBase: 0.01 },
        m: { name: "metres (m)", toBase: 1 },
        km: { name: "kilometres (km)", toBase: 1000 },
        in: { name: "inches (in)", toBase: 0.0254 },
        ft: { name: "feet (ft)", toBase: 0.3048 },
        yd: { name: "yards (yd)", toBase: 0.9144 },
        mi: { name: "miles (mi)", toBase: 1609.344 }
      }
    },
    mass: {
      label: "Mass",
      base: "g",
      units: {
        mg: { name: "milligrams (mg)", toBase: 0.001 },
        g: { name: "grams (g)", toBase: 1 },
        kg: { name: "kilograms (kg)", toBase: 1000 },
        t: { name: "tonnes (t)", toBase: 1000000 },
        oz: { name: "ounces (oz)", toBase: 28.349523125 },
        lb: { name: "pounds (lb)", toBase: 453.59237 }
      }
    },
    capacity: {
      label: "Capacity",
      base: "ml",
      units: {
        ml: { name: "millilitres (ml)", toBase: 1 },
        l: { name: "litres (L)", toBase: 1000 },
        tsp: { name: "teaspoons (tsp)", toBase: 4.92892159375 },
        tbsp: { name: "tablespoons (tbsp)", toBase: 14.78676478125 },
        cup: { name: "cups (US cup)", toBase: 236.5882365 },
        floz: { name: "fluid ounces (fl oz)", toBase: 29.5735295625 },
        gal: { name: "gallons (US gal)", toBase: 3785.411784 }
      }
    }
  };

  function round(n) {
    return Math.round(n * 1000000) / 1000000;
  }

  function convert(value, category, from, to) {
    var cat = UNITS[category];
    if (!cat || !cat.units[from] || !cat.units[to] || !isFinite(value)) {
      return { ok: false, error: "Choose a category and two units, and enter a number." };
    }
    var baseValue = value * cat.units[from].toBase;
    var result = round(baseValue / cat.units[to].toBase);
    var steps = [
      "Step 1: convert to " + cat.base + ": " + value + " " + from + " × " + cat.units[from].toBase + " = " + round(baseValue) + " " + cat.base + ".",
      "Step 2: convert to " + to + ": " + round(baseValue) + " ÷ " + cat.units[to].toBase + " = " + result + " " + to + "."
    ];
    return { ok: true, result: result, steps: steps };
  }

  var api = { UNITS: UNITS, convert: convert };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; }

  if (typeof document === "undefined") { return; }

  function el(id) { return document.getElementById(id); }

  function fillUnits() {
    var cat = el("uc-category").value;
    var from = el("uc-from");
    var to = el("uc-to");
    [from, to].forEach(function (sel) {
      while (sel.firstChild) { sel.removeChild(sel.firstChild); }
      Object.keys(UNITS[cat].units).forEach(function (key) {
        var opt = document.createElement("option");
        opt.value = key;
        opt.textContent = UNITS[cat].units[key].name;
        sel.appendChild(opt);
      });
    });
    from.value = cat === "length" ? "km" : cat === "mass" ? "kg" : "l";
    to.value = cat === "length" ? "m" : cat === "mass" ? "g" : "ml";
  }

  function run() {
    var value = parseFloat(el("uc-value").value);
    var r = convert(value, el("uc-category").value, el("uc-from").value, el("uc-to").value);
    var out = el("uc-result");
    var stepsEl = el("uc-steps");
    out.textContent = "";
    while (stepsEl.firstChild) { stepsEl.removeChild(stepsEl.firstChild); }
    if (!r.ok) { out.textContent = r.error; return; }
    out.textContent = value + " " + el("uc-from").value + " = " + r.result + " " + el("uc-to").value;
    r.steps.forEach(function (s) {
      var li = document.createElement("li");
      li.textContent = s;
      stepsEl.appendChild(li);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    fillUnits();
    el("uc-category").addEventListener("change", fillUnits);
    el("uc-form").addEventListener("submit", function (e) {
      e.preventDefault();
      run();
    });
    el("uc-try").addEventListener("click", function () {
      el("uc-category").value = "length"; fillUnits();
      el("uc-value").value = "2.5"; el("uc-from").value = "km"; el("uc-to").value = "m"; run();
    });
  });
})();
