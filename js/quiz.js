/* ============================================
   QUIZ RENDERER
   Renders quiz and quiz_oral exercises inside
   the player's exercise-display card.
   ============================================ */

export class QuizRenderer {
  /* Multiple-choice quiz.
     Calls onCorrect(xp) or onWrong() then auto-advances after delay. */
  renderQuiz(exercise, container, { onCorrect, onWrong }) {
    const { pergunta_pt, opcoes, correta, xp = 10 } = exercise;

    container.innerHTML = `
      <p class="quiz-pergunta">${pergunta_pt}</p>
      <div class="quiz-options" role="group" aria-label="Opções de resposta">
        ${opcoes.map((op, i) => `
          <button class="quiz-option" data-idx="${i}" aria-label="${op}">
            ${op}
          </button>`).join('')}
      </div>`;

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = parseInt(btn.dataset.idx, 10);
        container.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);

        if (chosen === correta) {
          btn.classList.add('correct');
          setTimeout(() => onCorrect(xp), 900);
        } else {
          btn.classList.add('wrong');
          container.querySelectorAll('.quiz-option')[correta]?.classList.add('correct');
          setTimeout(() => onWrong(), 1200);
        }
      });
    });
  }

  /* Oral quiz: reads question, shows countdown, reveals answer.
     Calls onComplete() when done. */
  renderQuizOral(exercise, container, voice, { onComplete }) {
    const { pergunta_pt, resposta_it, resposta_pt, pausa_segundos = 3, xp = 8 } = exercise;

    container.innerHTML = `
      <p class="quiz-pergunta">${pergunta_pt}</p>
      <div class="quiz-oral-countdown" id="oral-countdown" aria-live="polite">…</div>
      <p class="quiz-oral-hint" id="oral-hint"></p>`;

    const countdown = container.querySelector('#oral-countdown');
    const hint      = container.querySelector('#oral-hint');

    // Phase 1: speak the question in PT
    voice.speak(pergunta_pt, 'pt-BR', () => {
      // Phase 2: countdown
      hint.textContent = 'Responda em voz alta…';
      let secs = pausa_segundos;
      countdown.textContent = secs;
      const iv = setInterval(() => {
        secs--;
        if (secs <= 0) {
          clearInterval(iv);
          countdown.textContent = '';
          hint.textContent = '';
          // Phase 3: reveal answer
          container.innerHTML = `
            <p class="quiz-pergunta">${pergunta_pt}</p>
            <p class="exercise-it" lang="it">${resposta_it}</p>
            <p class="exercise-pt">${resposta_pt}</p>`;
          voice.speakExercise(resposta_it, resposta_pt, () => onComplete(xp));
        } else {
          countdown.textContent = secs;
        }
      }, 1000);
    });
  }
}
