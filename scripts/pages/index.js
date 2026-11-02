// Current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Resource search and subject filters
    const searchInput = document.getElementById("resource-search");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const resourceCards = document.querySelectorAll(".resource-card");
    const noResults = document.getElementById("no-results");

    let activeFilter = "all";

    function filterResources() {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      resourceCards.forEach((card) => {
        const subject = card.dataset.subject || "";
        const searchableText = card.textContent.toLowerCase();
        const matchesSubject = activeFilter === "all" || subject === activeFilter;
        const matchesSearch = searchableText.includes(query);
        const shouldShow = matchesSubject && matchesSearch;

        card.hidden = !shouldShow;

        if (shouldShow) visibleCount++;
      });

      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }

    searchInput.addEventListener("input", filterResources);

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;

        filterButtons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });

        filterResources();
      });
    });

    // Three-question interactive quiz
    const questions = [
      {
        question: "What is 3/4 of 20?",
        options: ["10", "15", "12", "18"],
        answer: 1,
        explanation: "First divide 20 by 4 to get 5. Then multiply 5 by 3. The answer is 15."
      },
      {
        question: "Which fraction is equal to 1/2?",
        options: ["2/3", "2/4", "3/5", "1/3"],
        answer: 1,
        explanation: "2/4 simplifies to 1/2 because both the numerator and denominator can be divided by 2."
      },
      {
        question: "What is 25% of 80?",
        options: ["10", "15", "20", "25"],
        answer: 2,
        explanation: "25% means one quarter. Divide 80 by 4 to get 20."
      }
    ];

    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    const quizContent = document.getElementById("quiz-content");
    const quizQuestion = document.getElementById("quiz-question");
    const quizOptions = document.getElementById("quiz-options");
    const quizFeedback = document.getElementById("quiz-feedback");
    const quizCount = document.getElementById("quiz-count");
    const quizScore = document.getElementById("quiz-score");
    const nextButton = document.getElementById("next-question");
    const progressFill = document.getElementById("progress-fill");
    const progressBar = document.getElementById("quiz-progress");
    const quizResult = document.getElementById("quiz-result");
    const resultScore = document.getElementById("result-score");
    const resultMessage = document.getElementById("result-message");
    const restartButton = document.getElementById("restart-quiz");

    function loadQuestion() {
      const question = questions[currentQuestion];
      answered = false;

      quizCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
      quizQuestion.textContent = question.question;
      quizFeedback.textContent = "";
      quizFeedback.classList.remove("show");
      quizScore.textContent = `Score: ${score}`;
      nextButton.disabled = true;
      nextButton.textContent = currentQuestion === questions.length - 1
        ? "See my result →"
        : "Next question →";

      progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
      progressBar.setAttribute("aria-valuenow", String(currentQuestion));

      quizOptions.replaceChildren();

      question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "quiz-option";
        button.textContent = option;
        button.addEventListener("click", () => chooseAnswer(index));
        quizOptions.appendChild(button);
      });
    }

    function chooseAnswer(selectedIndex) {
      if (answered) return;

      answered = true;
      const question = questions[currentQuestion];
      const optionButtons = quizOptions.querySelectorAll(".quiz-option");
      const isCorrect = selectedIndex === question.answer;

      if (isCorrect) score++;

      optionButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.answer) {
          button.classList.add("correct");
        } else if (index === selectedIndex) {
          button.classList.add("incorrect");
        }
      });

      quizFeedback.textContent = (isCorrect ? "Correct! " : "Not quite. ")
        + question.explanation;
      quizFeedback.classList.add("show");
      quizScore.textContent = `Score: ${score}`;
      nextButton.disabled = false;
      progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
      progressBar.setAttribute("aria-valuenow", String(currentQuestion + 1));
    }

    function showResult() {
      quizContent.style.display = "none";
      quizResult.classList.add("show");
      resultScore.textContent = `${score} / ${questions.length}`;

      if (score === 3) {
        resultMessage.textContent = "Excellent work! You answered every question correctly.";
      } else if (score === 2) {
        resultMessage.textContent = "Great effort! Review the explanation and keep practising.";
      } else if (score === 1) {
        resultMessage.textContent = "Good start! A little more practice will help you improve.";
      } else {
        resultMessage.textContent = "Thanks for trying! Read the explanations and give it another go.";
      }

      progressFill.style.width = "100%";
      progressBar.setAttribute("aria-valuenow", String(questions.length));
      quizCount.textContent = "Quiz complete";
    }

    nextButton.addEventListener("click", () => {
      if (!answered) return;

      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
      } else {
        showResult();
      }
    });

    restartButton.addEventListener("click", () => {
      currentQuestion = 0;
      score = 0;
      quizResult.classList.remove("show");
      quizContent.style.display = "block";
      loadQuestion();
    });

    loadQuestion();
