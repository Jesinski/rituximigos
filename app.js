(function () {
  // State
  let allQuestions = [];
  let currentExam = null;
  let current = 0;
  let answers = {};

  function storageKey() {
    return currentExam ? currentExam.id : null;
  }

  function save() {
    const key = storageKey();
    if (key) localStorage.setItem(key, JSON.stringify({ answers, current }));
  }

  function loadSaved() {
    const key = storageKey();
    if (!key) return;
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        const s = JSON.parse(saved);
        Object.assign(answers, s.answers || {});
        current = s.current || 0;
      } catch {}
    }
  }

  // Elements
  const pickerScreen = document.getElementById("picker-screen");
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultsScreen = document.getElementById("results-screen");

  function showScreen(screen) {
    [pickerScreen, startScreen, quizScreen, resultsScreen].forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
  }

  // -- Exam Picker --
  async function loadCatalog() {
    const resp = await fetch("exams/index.json");
    return resp.json();
  }

  function renderPicker(catalog) {
    const list = document.getElementById("exam-list");
    list.innerHTML = "";
    catalog.forEach(exam => {
      const card = document.createElement("button");
      card.className = "exam-card";

      const saved = localStorage.getItem(exam.id);
      let badge = "";
      if (saved) {
        try {
          const s = JSON.parse(saved);
          const answeredCount = Object.keys(s.answers || {}).length;
          if (answeredCount > 0) {
            badge = `<span class="exam-badge">${answeredCount}/${exam.questions} respondidas</span>`;
          }
        } catch {}
      }

      card.innerHTML = `
        <div class="exam-card-title">${exam.title}</div>
        <div class="exam-card-meta">${exam.questions} questões &middot; ${exam.date}</div>
        ${badge}
      `;

      card.onclick = () => selectExam(exam);
      list.appendChild(card);
    });
  }

  async function selectExam(exam) {
    currentExam = exam;
    current = 0;
    answers = {};

    // Populate start screen
    document.getElementById("exam-title").textContent = exam.title;
    document.getElementById("exam-subtitle").textContent = exam.subtitle;
    document.getElementById("exam-count").textContent = exam.questions;
    document.getElementById("exam-date").textContent = exam.date;

    // Check for saved progress
    loadSaved();
    const btnReview = document.getElementById("btn-review");
    btnReview.style.display = Object.keys(answers).length > 0 ? "inline-block" : "none";

    showScreen(startScreen);
  }

  // Back to picker
  document.getElementById("btn-back-picker").onclick = () => {
    showScreen(pickerScreen);
    loadCatalog().then(renderPicker);
  };

  // -- Start --
  document.getElementById("btn-start").onclick = async () => {
    current = 0;
    answers = {};
    save();
    await loadQuestions();
    showScreen(quizScreen);
    render();
  };

  document.getElementById("btn-review").onclick = async () => {
    await loadQuestions();
    showScreen(quizScreen);
    render();
  };

  async function loadQuestions() {
    const resp = await fetch(currentExam.file);
    allQuestions = await resp.json();
  }

  // -- Quiz --
  const qCounter = document.getElementById("q-counter");
  const progressFill = document.getElementById("progress-fill");
  const scoreDisplay = document.getElementById("score-display");
  const qAnulado = document.getElementById("q-anulado");
  const qEnunciado = document.getElementById("q-enunciado");
  const qOpcoes = document.getElementById("q-opcoes");
  const qFeedback = document.getElementById("q-feedback");
  const feedbackResult = document.getElementById("feedback-result");
  const feedbackExplicacao = document.getElementById("feedback-explicacao");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const navDots = document.getElementById("nav-dots");

  function getScore() {
    let correct = 0;
    for (const pos in answers) {
      const q = allQuestions.find(qq => qq.pos === +pos);
      if (q && !q.anulado && answers[pos] === q.correta) correct++;
    }
    return correct;
  }

  function getAnsweredCount() {
    return Object.keys(answers).filter(pos => {
      const q = allQuestions.find(qq => qq.pos === +pos);
      return q && !q.anulado;
    }).length;
  }

  function getNonVoidedCount() {
    return allQuestions.filter(q => !q.anulado).length;
  }

  function renderDots() {
    navDots.innerHTML = "";
    allQuestions.forEach((q, i) => {
      const dot = document.createElement("button");
      dot.className = "nav-dot";
      if (i === current) dot.classList.add("current");

      const pos = q.pos;
      if (q.anulado) {
        dot.classList.add("answered");
      } else if (answers[pos] !== undefined) {
        dot.classList.add(answers[pos] === q.correta ? "dot-correct" : "dot-wrong");
      }

      dot.onclick = () => { current = i; render(); };
      navDots.appendChild(dot);
    });
  }

  function markdownBold(text) {
    return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function formatExplicacao(text) {
    if (!text) return "";
    const lines = text.split("\n");
    let html = "";
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) { html += "<br>"; continue; }
      if (trimmed.startsWith("- ")) {
        html += "<div style='margin-left:12px;margin-bottom:4px'>" + markdownBold(trimmed) + "</div>";
      } else {
        html += "<div style='margin-bottom:4px'>" + markdownBold(trimmed) + "</div>";
      }
    }
    return html;
  }

  function render() {
    const q = allQuestions[current];
    const pos = q.pos;
    const answered = answers[pos] !== undefined;

    // Header
    qCounter.textContent = `${current + 1} / ${allQuestions.length}`;
    progressFill.style.width = `${(getAnsweredCount() / getNonVoidedCount()) * 100}%`;
    scoreDisplay.textContent = `${getScore()} ✓`;

    // Anulado
    if (q.anulado) {
      qAnulado.style.display = "block";
      qEnunciado.textContent = "";
      qOpcoes.innerHTML = "";
      qFeedback.style.display = "none";
    } else {
      qAnulado.style.display = "none";
      qEnunciado.textContent = q.enunciado;

      // Render images if present
      if (q.imagens && q.imagens.length > 0) {
        const imgContainer = document.createElement("div");
        imgContainer.className = "enunciado-images";
        q.imagens.forEach(src => {
          const img = document.createElement("img");
          img.src = "exams/" + src;
          img.alt = "Imagem da questão";
          img.className = "question-image";
          img.onclick = () => openLightbox(img.src);
          imgContainer.appendChild(img);
        });
        qEnunciado.appendChild(imgContainer);
      }

      // Options
      qOpcoes.innerHTML = "";
      const letters = ["A", "B", "C", "D"];
      letters.forEach(letter => {
        if (!q.opcoes[letter]) return;
        const btn = document.createElement("button");
        btn.className = "option-btn";

        if (answered) {
          btn.classList.add("disabled");
          if (letter === q.correta) btn.classList.add("correct");
          if (letter === answers[pos] && letter !== q.correta) btn.classList.add("wrong");
        }

        btn.innerHTML = `
          <span class="option-letter">${letter}</span>
          <span class="option-text">${q.opcoes[letter]}</span>
        `;

        if (!answered) {
          btn.onclick = () => choose(pos, letter);
        }

        qOpcoes.appendChild(btn);
      });

      // Feedback
      if (answered) {
        qFeedback.style.display = "block";
        const isCorrect = answers[pos] === q.correta;
        feedbackResult.textContent = isCorrect ? "Resposta correta!" : `Incorreta — a resposta certa é ${q.correta}.`;
        feedbackResult.className = "feedback-result " + (isCorrect ? "is-correct" : "is-wrong");
        feedbackExplicacao.innerHTML = formatExplicacao(q.explicacao);
      } else {
        qFeedback.style.display = "none";
      }
    }

    // Navigation
    btnPrev.disabled = current === 0;
    btnNext.textContent = current === allQuestions.length - 1 ? "Encerrar" : "Próxima →";

    renderDots();
    save();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function choose(pos, letter) {
    answers[pos] = letter;
    render();
  }

  // -- Lightbox --
  function openLightbox(src) {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = `<img src="${src}" class="lightbox-img" />`;
    overlay.onclick = () => overlay.remove();
    document.body.appendChild(overlay);
  }

  btnPrev.onclick = () => { if (current > 0) { current--; render(); } };
  btnNext.onclick = () => {
    if (current < allQuestions.length - 1) { current++; render(); }
    else showResults();
  };

  document.getElementById("btn-finish").onclick = showResults;

  // Keyboard nav
  document.addEventListener("keydown", (e) => {
    if (!quizScreen.classList.contains("active")) return;
    const q = allQuestions[current];
    if (!q || q.anulado) {
      if (e.key === "ArrowRight") { btnNext.click(); }
      if (e.key === "ArrowLeft") { btnPrev.click(); }
      return;
    }
    const answered = answers[q.pos] !== undefined;
    if (!answered) {
      const map = { "1": "A", "2": "B", "3": "C", "4": "D", a: "A", b: "B", c: "C", d: "D" };
      if (map[e.key.toLowerCase()]) choose(q.pos, map[e.key.toLowerCase()]);
    }
    if (e.key === "ArrowRight") btnNext.click();
    if (e.key === "ArrowLeft") btnPrev.click();
  });

  // -- Results --
  function showResults() {
    showScreen(resultsScreen);

    const total = getNonVoidedCount();
    const answeredCount = getAnsweredCount();
    const score = getScore();
    const wrong = answeredCount - score;
    const skipped = total - answeredCount;
    const pct = Math.round((score / total) * 100);

    document.getElementById("results-score").textContent = `${score} / ${total}`;
    document.getElementById("results-score").style.color = pct >= 60 ? "var(--correct)" : "var(--wrong)";

    const barFill = document.getElementById("results-bar-fill");
    barFill.style.width = "0%";
    barFill.style.background = pct >= 60
      ? "linear-gradient(90deg, var(--correct), #6ee7b7)"
      : "linear-gradient(90deg, var(--wrong), #fca5a5)";
    requestAnimationFrame(() => { barFill.style.width = pct + "%"; });

    document.getElementById("results-stats").innerHTML = `
      <span style="color:var(--correct)">✓ ${score} corretas</span>
      <span style="color:var(--wrong)">✗ ${wrong} erradas</span>
      <span>${skipped} não respondidas</span>
      <span><strong>${pct}%</strong></span>
    `;

    const grid = document.getElementById("results-grid");
    grid.innerHTML = "";
    allQuestions.forEach((q, i) => {
      const cell = document.createElement("div");
      cell.className = "results-cell";
      cell.textContent = q.pos;

      if (q.anulado) {
        cell.classList.add("rc-anulado");
        cell.title = `Q${q.pos} — Anulada`;
      } else if (answers[q.pos] === undefined) {
        cell.classList.add("rc-skipped");
        cell.title = `Q${q.pos} — Não respondida`;
      } else if (answers[q.pos] === q.correta) {
        cell.classList.add("rc-correct");
        cell.title = `Q${q.pos} — Correta (${q.correta})`;
      } else {
        cell.classList.add("rc-wrong");
        cell.title = `Q${q.pos} — Errada (você: ${answers[q.pos]}, correta: ${q.correta})`;
      }

      cell.onclick = () => { current = i; showScreen(quizScreen); render(); };
      grid.appendChild(cell);
    });
  }

  document.getElementById("btn-review-results").onclick = () => {
    current = 0;
    showScreen(quizScreen);
    render();
  };

  document.getElementById("btn-restart").onclick = () => {
    answers = {};
    current = 0;
    save();
    showScreen(startScreen);
    document.getElementById("btn-review").style.display = "none";
  };

  // -- Init --
  loadCatalog().then(renderPicker);
})();
