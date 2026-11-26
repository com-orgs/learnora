/* Learnora random quiz engine — shared, dependency-free, same-origin.
   Loaded with `defer` after a lesson's question bank
   (window.LEARNORA_QUIZ_BANK). No server, no fetch, no cookies, no
   accounts. Nothing leaves the browser: the current draw is kept in
   memory and, for a mid-quiz reload only, in sessionStorage.
   Plain ES2019, no modules, no eval — safe for the site audit. */
(function () {
  "use strict";

  /* ---------- seeded random numbers ---------- */

  function hashString(text) {
    var hash = 2166136261;
    for (var i = 0; i < text.length; i++) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function mulberry32(seed) {
    var state = seed >>> 0;
    return function () {
      state = (state + 0x6D2B79F5) >>> 0;
      var t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleCopy(items, rng) {
    var arr = items.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function cloneItem(item) {
    return JSON.parse(JSON.stringify(item));
  }

  /* ---------- selection: 10 questions, 3 easy / 4 medium / 3 hard ---------- */

  function drawQuestions(bank, options) {
    options = options || {};
    var rng = mulberry32(options.seed === undefined ? 1 : options.seed);
    var excluded = {};
    (options.excludeIds || []).forEach(function (id) { excluded[id] = true; });
    var byDifficulty = { 1: [], 2: [], 3: [] };
    bank.items.forEach(function (item) {
      if (!excluded[item.id] && byDifficulty[item.difficulty]) {
        byDifficulty[item.difficulty].push(item);
      }
    });
    var mix = options.mix || { 1: 3, 2: 4, 3: 3 };
    var picked = [];
    [1, 2, 3].forEach(function (level) {
      var pool = shuffleCopy(byDifficulty[level], rng);
      var take = Math.min(mix[level] || 0, pool.length);
      for (var i = 0; i < take; i++) picked.push(pool[i]);
    });
    if (picked.length < 10) {
      var rest = [];
      [1, 2, 3].forEach(function (level) {
        byDifficulty[level].forEach(function (item) {
          if (picked.indexOf(item) === -1) rest.push(item);
        });
      });
      rest = shuffleCopy(rest, rng);
      while (picked.length < 10 && rest.length) picked.push(rest.shift());
    }
    picked = shuffleCopy(picked, rng);
    return picked.map(function (item) {
      var copy = cloneItem(item);
      if (copy.options) {
        var correctText = copy.options[copy.correct];
        copy.options = shuffleCopy(copy.options, rng);
        copy.correct = copy.options.indexOf(correctText);
      }
      if (copy.pairs) {
        copy.rightOptions = shuffleCopy(copy.pairs.map(function (pair) {
          return pair[1];
        }), rng);
      }
      return copy;
    });
  }

  function todaySeed(slug) {
    var now = new Date();
    var day = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
    return hashString(slug + ":" + day);
  }

  /* ---------- browser UI (only runs in a browser) ---------- */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function injectStyles() {
    if (document.getElementById("rq-styles")) return;
    var style = document.createElement("style");
    style.id = "rq-styles";
    style.textContent =
      ".rq-controls{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:14px 0}" +
      ".rq-controls input{font:inherit;padding:9px 12px;border:1px solid #c8d3de;border-radius:8px;max-width:180px}" +
      ".rq-controls button,.rq-check,.rq-new,.rq-retake{font:inherit;font-weight:700;border:0;border-radius:8px;padding:11px 17px;background:#117454;color:#fff;cursor:pointer}" +
      ".rq-controls button.secondary,.rq-retake{background:#e7f2ef;color:#263445}" +
      ".rq-question{border:0;border-top:1px solid #e1e8f0;padding:16px 0;margin:0}" +
      ".rq-question legend{font-weight:700;padding:0 0 8px}" +
      ".rq-option{display:block;padding:6px 0}.rq-option input{margin-right:8px}" +
      ".rq-numeric{font:inherit;padding:9px 12px;border:1px solid #c8d3de;border-radius:8px;max-width:220px}" +
      ".rq-select{font:inherit;padding:7px 9px;border:1px solid #c8d3de;border-radius:8px;margin:4px 0}" +
      ".rq-match-row,.rq-order-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:8px 0}" +
      ".rq-feedback{margin-top:10px;padding:11px 13px;border-radius:8px;font-size:14px}" +
      ".rq-feedback.correct{background:#e8f6ed;color:#126239}" +
      ".rq-feedback.incorrect{background:#fff0f0;color:#a32828}" +
      ".rq-feedback.unanswered{background:#fff8e9;color:#79551b}" +
      ".rq-solution{margin-top:10px;padding:12px 14px;border-radius:8px;background:#f1f6fb;border-left:4px solid #3765a8}" +
      ".rq-score{font-weight:800;font-size:18px;margin:14px 0}" +
      ".rq-steps{margin:8px 0}.rq-steps li{margin:6px 0}" +
      "button:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid #78aef0;outline-offset:3px}";
    document.head.appendChild(style);
  }

  function checkMcq(item, fieldset) {
    var selected = fieldset.querySelector("input:checked");
    if (!selected) return { answered: false };
    var chosen = Number(selected.value);
    var ok = chosen === item.correct;
    return {
      answered: true,
      correct: ok,
      message: ok
        ? "Correct! " + item.explanation
        : "Not quite. Correct answer: " + item.options[item.correct] + ". " + item.explanation
    };
  }

  function checkNumeric(item, fieldset) {
    var input = fieldset.querySelector("input.rq-numeric");
    var raw = input ? input.value.replace(/[\s,]/g, "") : "";
    if (raw === "") return { answered: false };
    var given = Number(raw);
    if (isNaN(given)) {
      return { answered: true, correct: false, message: "That is not a number. The correct value is " + item.correctValue + ". " + item.explanation };
    }
    var tolerance = item.tolerance === undefined ? 0 : item.tolerance;
    var ok = Math.abs(given - item.correctValue) <= tolerance;
    return {
      answered: true,
      correct: ok,
      message: ok
        ? "Correct! " + item.explanation
        : "Not quite. The correct value is " + item.correctValue + ". " + item.explanation
    };
  }

  function checkOrdering(item, fieldset) {
    var selects = fieldset.querySelectorAll("select.rq-select");
    var chosen = [];
    for (var i = 0; i < selects.length; i++) {
      if (!selects[i].value) return { answered: false };
      chosen.push(Number(selects[i].value));
    }
    var seen = {};
    for (var j = 0; j < chosen.length; j++) {
      if (seen[chosen[j]]) {
        return { answered: true, correct: false, message: "Each position (1st, 2nd, 3rd, 4th) can be used only once. Try again." };
      }
      seen[chosen[j]] = true;
    }
    var ordered = [];
    for (var k = 0; k < chosen.length; k++) ordered[chosen[k] - 1] = item.correctOrder[k];
    var right = 0;
    for (var m = 0; m < ordered.length; m++) {
      if (ordered[m] === item.correctOrder[m]) right++;
    }
    var ok = right === item.correctOrder.length;
    return {
      answered: true,
      correct: ok,
      message: ok
        ? "Correct! The order is: " + item.correctOrder.join(" → ") + ". " + item.explanation
        : right + " of " + item.correctOrder.length + " in the right place. Correct order: " + item.correctOrder.join(" → ") + ". " + item.explanation
    };
  }

  function checkMatching(item, fieldset) {
    var selects = fieldset.querySelectorAll("select.rq-select");
    var wrong = [];
    var right = 0;
    for (var i = 0; i < selects.length; i++) {
      if (!selects[i].value) return { answered: false };
      if (selects[i].value === item.pairs[i][1]) right++;
      else wrong.push(item.pairs[i][0]);
    }
    var ok = right === item.pairs.length;
    return {
      answered: true,
      correct: ok,
      message: ok
        ? "Correct! Every match is right. " + item.explanation
        : right + " of " + item.pairs.length + " matches are right. Check: " + wrong.join(", ") + ". " + item.explanation
    };
  }

  function renderQuestion(container, item, number, state) {
    var fieldset = el("fieldset", "rq-question");
    var legend = el("legend", null, number + ". " + item.prompt);
    fieldset.appendChild(legend);

    if (item.type === "errorspot" && item.steps) {
      var list = el("ol", "rq-steps");
      item.steps.forEach(function (step) {
        list.appendChild(el("li", null, step));
      });
      fieldset.appendChild(list);
    }

    if (item.type === "mcq" || item.type === "truefalse" || item.type === "errorspot") {
      item.options.forEach(function (option, index) {
        var label = el("label", "rq-option");
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "rq-" + state.drawId + "-" + item.id;
        input.value = String(index);
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + option));
        fieldset.appendChild(label);
      });
    } else if (item.type === "numeric") {
      var wrap = el("div", null);
      var input = document.createElement("input");
      input.type = "text";
      input.inputMode = "decimal";
      input.className = "rq-numeric";
      input.setAttribute("aria-label", "Your answer");
      wrap.appendChild(input);
      if (item.unitHint) wrap.appendChild(document.createTextNode(" " + item.unitHint));
      fieldset.appendChild(wrap);
    } else if (item.type === "ordering") {
      item.correctOrder.forEach(function (stepText, index) {
        var row = el("div", "rq-order-row");
        row.appendChild(el("span", null, stepText));
        var select = document.createElement("select");
        select.className = "rq-select";
        select.setAttribute("aria-label", "Position of: " + stepText);
        var blank = document.createElement("option");
        blank.value = "";
        blank.textContent = "Choose position…";
        select.appendChild(blank);
        for (var p = 1; p <= item.correctOrder.length; p++) {
          var opt = document.createElement("option");
          opt.value = String(p);
          opt.textContent = p === 1 ? "1st" : p === 2 ? "2nd" : p === 3 ? "3rd" : p + "th";
          select.appendChild(opt);
        }
        row.appendChild(select);
        fieldset.appendChild(row);
      });
    } else if (item.type === "matching") {
      item.pairs.forEach(function (pair) {
        var row = el("div", "rq-match-row");
        row.appendChild(el("span", null, pair[0] + " — matches:"));
        var select = document.createElement("select");
        select.className = "rq-select";
        select.setAttribute("aria-label", "Match for " + pair[0]);
        var blank = document.createElement("option");
        blank.value = "";
        blank.textContent = "Choose…";
        select.appendChild(blank);
        item.rightOptions.forEach(function (choice) {
          var opt = document.createElement("option");
          opt.value = choice;
          opt.textContent = choice;
          select.appendChild(opt);
        });
        row.appendChild(select);
        fieldset.appendChild(row);
      });
    }

    var feedback = el("div", "rq-feedback");
    feedback.hidden = true;
    feedback.setAttribute("aria-live", "polite");
    fieldset.appendChild(feedback);

    var solution = el("div", "rq-solution");
    solution.hidden = true;
    var solutionTitle = el("strong", null, "Worked solution: ");
    solution.appendChild(solutionTitle);
    solution.appendChild(document.createTextNode(item.workedSolution));
    fieldset.appendChild(solution);

    var checkButton = el("button", "rq-check", "Check this question");
    checkButton.type = "button";
    checkButton.addEventListener("click", function () {
      var result;
      if (item.type === "numeric") result = checkNumeric(item, fieldset);
      else if (item.type === "ordering") result = checkOrdering(item, fieldset);
      else if (item.type === "matching") result = checkMatching(item, fieldset);
      else result = checkMcq(item, fieldset);
      if (!result.answered) {
        feedback.hidden = false;
        feedback.className = "rq-feedback unanswered";
        feedback.textContent = "Not answered yet. Choose an answer first, then press Check.";
        return;
      }
      if (state.checked[item.id]) return;
      state.checked[item.id] = true;
      state.answered++;
      if (result.correct) state.correctCount++;
      feedback.hidden = false;
      feedback.className = "rq-feedback " + (result.correct ? "correct" : "incorrect");
      feedback.textContent = result.message;
      solution.hidden = false;
      checkButton.disabled = true;
      fieldset.querySelectorAll("input, select").forEach(function (control) {
        control.disabled = true;
      });
      updateScore(state);
    });
    fieldset.appendChild(checkButton);
    container.appendChild(fieldset);
  }

  function updateScore(state) {
    var score = document.getElementById("rq-score");
    if (!score) return;
    score.textContent = "Score: " + state.correctCount + " / " + state.draw.length +
      " · " + state.answered + " of " + state.draw.length + " answered.";
    var final = document.getElementById("rq-final");
    if (final && state.answered === state.draw.length) {
      var percent = Math.round(state.correctCount / state.draw.length * 100);
      final.hidden = false;
      final.textContent = percent === 100
        ? "Excellent! A perfect score — " + state.correctCount + " out of " + state.draw.length + "."
        : percent >= 70
          ? "Great work! " + state.correctCount + " out of " + state.draw.length + " correct. Read any worked solution you missed, then try a new set."
          : percent >= 50
            ? "Good effort! " + state.correctCount + " out of " + state.draw.length + " correct. Re-read the worked solutions, then try a new set."
            : "Keep practising! " + state.correctCount + " out of " + state.draw.length + " correct. Work through the lesson examples again, then try a new set.";
    }
  }

  function saveDraw(state) {
    try {
      window.sessionStorage.setItem("learnora-random-quiz:" + state.slug, JSON.stringify({
        seed: state.seed,
        seedLabel: state.seedLabel,
        ids: state.draw.map(function (item) { return item.id; })
      }));
    } catch (e) {
      /* sessionStorage unavailable (private mode) — the quiz still works in memory. */
    }
  }

  function loadSavedDraw(slug) {
    try {
      var raw = window.sessionStorage.getItem("learnora-random-quiz:" + slug);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function init() {
    if (typeof document === "undefined") return;
    var section = document.getElementById("random-quiz");
    if (!section) return;
    var slug = section.getAttribute("data-slug") || "lesson";
    var bank = window.LEARNORA_QUIZ_BANK;
    var note = section.querySelector(".rq-note");
    var questionsBox = document.getElementById("rq-questions");
    var scoreBox = document.getElementById("rq-score");
    var finalBox = document.getElementById("rq-final");
    if (!bank || !bank.items || bank.items.length < 10) {
      if (note) note.textContent = "The question bank did not load. Please reload the page and try again.";
      return;
    }
    injectStyles();
    if (note) note.remove();

    var state = {
      slug: slug,
      bank: bank,
      draw: [],
      drawId: 0,
      checked: {},
      answered: 0,
      correctCount: 0,
      seed: todaySeed(slug),
      seedLabel: "today"
    };

    var printButton = document.getElementById("rq-print-quiz");
    if (printButton) {
      printButton.addEventListener("click", function () { window.print(); });
    }

    var controls = el("div", "rq-controls");
    var seedLabel = el("label", null, "Teacher seed (optional): ");
    seedLabel.setAttribute("for", "rq-seed");
    var seedInput = document.createElement("input");
    seedInput.id = "rq-seed";
    seedInput.type = "text";
    seedInput.placeholder = "e.g. 7B";
    seedInput.setAttribute("aria-label", "Teacher seed for the whole class");
    var applySeed = el("button", "", "Use this seed");
    applySeed.type = "button";
    var newButton = el("button", "rq-new", "New questions");
    newButton.type = "button";
    var retakeButton = el("button", "rq-retake secondary", "Retake this quiz");
    retakeButton.type = "button";
    controls.appendChild(seedLabel);
    controls.appendChild(seedInput);
    controls.appendChild(applySeed);
    controls.appendChild(newButton);
    controls.appendChild(retakeButton);
    questionsBox.parentNode.insertBefore(controls, questionsBox);

    function startDraw(seed, seedLabel, excludeIds) {
      state.draw = drawQuestions(bank, { seed: seed, excludeIds: excludeIds || [] });
      state.drawId++;
      state.checked = {};
      state.answered = 0;
      state.correctCount = 0;
      state.seed = seed;
      state.seedLabel = seedLabel;
      questionsBox.textContent = "";
      if (finalBox) { finalBox.hidden = true; finalBox.textContent = ""; }
      state.draw.forEach(function (item, index) {
        renderQuestion(questionsBox, item, index + 1, state);
      });
      if (scoreBox) scoreBox.textContent = "Score: 0 / " + state.draw.length + " · 0 of " + state.draw.length + " answered.";
      saveDraw(state);
    }

    applySeed.addEventListener("click", function () {
      var value = seedInput.value.trim();
      if (!value) {
        startDraw(todaySeed(slug), "today", []);
        return;
      }
      startDraw(hashString(slug + ":" + value), "seed " + value, []);
    });
    newButton.addEventListener("click", function () {
      var previousIds = state.draw.map(function (item) { return item.id; });
      var fresh = drawQuestions(bank, { seed: (Date.now() % 2147483647), excludeIds: previousIds });
      if (fresh.length < 10) {
        startDraw(Date.now() % 2147483647, "new set", []);
      } else {
        state.draw = fresh;
        state.drawId++;
        state.checked = {};
        state.answered = 0;
        state.correctCount = 0;
        state.seed = Date.now() % 2147483647;
        state.seedLabel = "new set";
        questionsBox.textContent = "";
        if (finalBox) { finalBox.hidden = true; finalBox.textContent = ""; }
        state.draw.forEach(function (item, index) {
          renderQuestion(questionsBox, item, index + 1, state);
        });
        if (scoreBox) scoreBox.textContent = "Score: 0 / " + state.draw.length + " · 0 of " + state.draw.length + " answered.";
        saveDraw(state);
      }
    });
    retakeButton.addEventListener("click", function () {
      startDraw(state.seed, state.seedLabel, []);
    });

    var saved = loadSavedDraw(slug);
    if (saved && saved.seed !== undefined && saved.ids && saved.ids.length === 10) {
      var restored = drawQuestions(bank, { seed: saved.seed });
      var restoredIds = restored.map(function (item) { return item.id; });
      var sameSet = saved.ids.every(function (id) { return restoredIds.indexOf(id) !== -1; });
      if (sameSet) {
        state.draw = restored;
        state.drawId++;
        state.seed = saved.seed;
        state.seedLabel = saved.seedLabel || "today";
        state.draw.forEach(function (item, index) {
          renderQuestion(questionsBox, item, index + 1, state);
        });
        if (scoreBox) scoreBox.textContent = "Score: 0 / " + state.draw.length + " · 0 of " + state.draw.length + " answered.";
        return;
      }
    }
    startDraw(state.seed, state.seedLabel, []);
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      hashString: hashString,
      mulberry32: mulberry32,
      shuffleCopy: shuffleCopy,
      drawQuestions: drawQuestions,
      todaySeed: todaySeed
    };
  }
})();
