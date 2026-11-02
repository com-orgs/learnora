(function() {
  "use strict";

  const answers = {
    q1: {
      correct: "b",
      explanation: "The numerator is the top number. In 4/9, it is 4.",
      correctText: "B. 4"
    },
    q2: {
      correct: "c",
      explanation: "2/5 is a proper fraction because its numerator (2) is smaller than its denominator (5).",
      correctText: "C. 2/5"
    },
    q3: {
      correct: "a",
      explanation: "The denominator tells us how many equal parts make the whole.",
      correctText: "A. Total equal parts in the whole"
    },
    q4: {
      correct: "c",
      explanation: "7/4 is an improper fraction because its numerator (7) is greater than its denominator (4).",
      correctText: "C. 7/4"
    },
    q5: {
      correct: "b",
      explanation: "Six selected pieces out of ten equal pieces gives 6/10.",
      correctText: "B. 6/10"
    }
  };

  const form = document.getElementById("quiz-form");
  const result = document.getElementById("quiz-result");
  const scoreNumber = document.getElementById("score-number");
  const scoreMessage = document.getElementById("score-message");
  const scoreDetail = document.getElementById("score-detail");
  const progressFill = document.getElementById("progress-fill");
  const retakeButton = document.getElementById("retake-quiz");

  // Stop safely if required quiz elements are missing.
  if (
    !form ||
    !result ||
    !scoreNumber ||
    !scoreMessage ||
    !scoreDetail ||
    !progressFill ||
    !retakeButton
  ) {
    console.error("Quiz error: One or more required HTML elements are missing.");
    return;
  }

  // Check answers.
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    let answered = 0;

    Object.keys(answers).forEach(function(questionName) {
      const question = answers[questionName];

      const questionElement = form.querySelector(
        '[data-question="' + questionName + '"]'
      );

      if (!questionElement) {
        console.error("Missing question element:", questionName);
        return;
      }

      const selected = form.querySelector(
        'input[name="' + questionName + '"]:checked'
      );

      const feedback = questionElement.querySelector(".quiz-feedback");

      if (!feedback) {
        console.error("Missing feedback element:", questionName);
        return;
      }

      feedback.hidden = false;
      feedback.className = "quiz-feedback";

      if (!selected) {
        feedback.classList.add("unanswered");
        feedback.textContent =
          "Not answered. Correct answer: " +
          question.correctText + ". " +
          question.explanation;

        return;
      }

      answered++;

      if (selected.value === question.correct) {
        score++;

        feedback.classList.add("correct");
        feedback.textContent =
          "Correct! " + question.explanation;

      } else {
        feedback.classList.add("incorrect");
        feedback.textContent =
          "Incorrect. Correct answer: " +
          question.correctText + ". " +
          question.explanation;
      }
    });

    const totalQuestions = Object.keys(answers).length;
    const percentage = Math.round((score / totalQuestions) * 100);

    // Update score.
    scoreNumber.textContent = score + " / " + totalQuestions;

    scoreDetail.textContent =
      percentage + "% correct · " +
      answered + " of " + totalQuestions +
      " questions answered.";

    progressFill.style.width = percentage + "%";

    // Display performance message.
    if (score === totalQuestions) {
      scoreMessage.textContent =
        "Excellent! Perfect score. Keep it up!";
    } else if (score >= 4) {
      scoreMessage.textContent =
        "Great work! You understand fractions very well.";
    } else if (score >= 3) {
      scoreMessage.textContent =
        "Good effort! Review the explanations and try again.";
    } else {
      scoreMessage.textContent =
        "Keep practising! Review the lesson and try again.";
    }

    // Show result without automatically scrolling the page.
    result.style.display = "block";
  });

  // Retake quiz.
  retakeButton.addEventListener("click", function() {
    form.reset();

    form.querySelectorAll(".quiz-feedback").forEach(function(feedback) {
      feedback.hidden = true;
      feedback.textContent = "";
      feedback.className = "quiz-feedback";
    });

    scoreNumber.textContent = "0 / 5";
    scoreMessage.textContent = "";
    scoreDetail.textContent = "0% correct · 0 of 5 questions answered.";

    progressFill.style.width = "0%";
    result.style.display = "none";
  });

})();

document.addEventListener('click', function (event) { const button = event.target.closest('[data-print-worksheet]'); if (button) window.print(); });
