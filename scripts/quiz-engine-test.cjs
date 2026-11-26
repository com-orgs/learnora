/* Learnora random-quiz draw test — run with: node scripts/quiz-engine-test.cjs
   Not loaded by any page. For each pilot bank, draws 50 quizzes and asserts:
   always 10 questions, always the 3/4/3 difficulty mix, no duplicate ids in
   a draw, every bank item appears at least once, option shuffling never
   loses the correct option, and the same seed always gives the same draw. */
const engine = require("./quiz-engine.js");
const banks = [
  require("./quiz-banks/math-grade-8-exponents-powers-and-scientific-notation-bank.js"),
  require("./quiz-banks/math-grade-7-two-step-equations-bank.js"),
  require("./quiz-banks/english-grade-6-8-parts-of-speech-bank.js")
];

let failures = 0;
function check(condition, message) {
  if (!condition) {
    failures++;
    console.error("FAIL: " + message);
  }
}

for (const bank of banks) {
  const seen = {};
  const originalById = {};
  bank.items.forEach(function (item) { originalById[item.id] = item; });
  check(bank.items.length >= 20, bank.slug + ": bank has fewer than 20 items (" + bank.items.length + ")");
  const types = {};
  bank.items.forEach(function (item) { types[item.type] = (types[item.type] || 0) + 1; });
  check(Object.keys(types).length >= 3, bank.slug + ": bank has fewer than 3 quiz types");
  [1, 2, 3].forEach(function (level) {
    const count = bank.items.filter(function (item) { return item.difficulty === level; }).length;
    check(count >= 3, bank.slug + ": difficulty " + level + " has only " + count + " items");
  });

  for (let draw = 0; draw < 50; draw++) {
    const seed = 1000 + draw;
    const result = engine.drawQuestions(bank, { seed: seed });
    check(result.length === 10, bank.slug + " draw " + draw + ": expected 10 questions, got " + result.length);
    const mix = { 1: 0, 2: 0, 3: 0 };
    const ids = {};
    result.forEach(function (item) {
      mix[item.difficulty]++;
      check(!ids[item.id], bank.slug + " draw " + draw + ": duplicate id " + item.id);
      ids[item.id] = true;
      seen[item.id] = true;
      if (item.options) {
        const original = originalById[item.id];
        const correctText = original.options[original.correct];
        check(item.options[item.correct] === correctText,
          bank.slug + " draw " + draw + ": option shuffle lost the correct option for " + item.id);
        check(item.options.length === original.options.length,
          bank.slug + " draw " + draw + ": option count changed for " + item.id);
      }
      if (item.pairs) {
        check(item.rightOptions && item.rightOptions.length === item.pairs.length,
          bank.slug + " draw " + draw + ": matching right options missing for " + item.id);
      }
    });
    check(mix[1] === 3 && mix[2] === 4 && mix[3] === 3,
      bank.slug + " draw " + draw + ": expected 3/4/3 mix, got " + mix[1] + "/" + mix[2] + "/" + mix[3]);
  }

  bank.items.forEach(function (item) {
    check(seen[item.id], bank.slug + ": item " + item.id + " never appeared in 50 draws");
  });

  const first = engine.drawQuestions(bank, { seed: 42 }).map(function (item) { return item.id; });
  const second = engine.drawQuestions(bank, { seed: 42 }).map(function (item) { return item.id; });
  check(JSON.stringify(first) === JSON.stringify(second), bank.slug + ": same seed gave different draws");

  const previous = engine.drawQuestions(bank, { seed: 7 });
  const fresh = engine.drawQuestions(bank, { seed: 8, excludeIds: previous.map(function (item) { return item.id; }) });
  const overlap = fresh.filter(function (item) {
    return previous.some(function (old) { return old.id === item.id; });
  });
  check(overlap.length === 0, bank.slug + ": excludeIds did not exclude the previous draw (" + overlap.length + " overlap)");

  console.log("OK: " + bank.slug + " — " + bank.items.length + " items, types " + JSON.stringify(types) + ", 50 draws passed");
}

if (failures) {
  console.error("DRAW TEST FAILED with " + failures + " failure(s).");
  process.exitCode = 1;
} else {
  console.log("DRAW TEST PASSED for all " + banks.length + " banks.");
}
