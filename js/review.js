/* ============================================
   REVIEW MANAGER
   Manages spaced-repetition review sessions.
   Scheduling logic lives in ProgressManager.scheduleReview (SM-2).
   ============================================ */

export class ReviewManager {
  constructor(progress, voice) {
    this.progress = progress;
    this.voice    = voice;
    this._queue   = [];
    this._idx     = 0;
    this._revealed = false;
  }

  /* ── Render the review screen ── */
  render(container, badgeEl, onDone) {
    this._queue    = this.progress.getDueReviewItems(10);
    this._idx      = 0;
    this._revealed = false;
    this._container = container;
    this._onDone    = onDone;

    if (badgeEl) {
      const count = this._queue.length;
      badgeEl.textContent = `${count} para hoje`;
      const navBadge = document.getElementById('review-nav-badge');
      if (navBadge) {
        if (count > 0) {
          navBadge.textContent = count;
          navBadge.classList.remove('hidden');
        } else {
          navBadge.classList.add('hidden');
        }
      }
    }

    this._renderCurrent();
  }

  _renderCurrent() {
    const container = this._container;
    if (!container) return;

    if (this._queue.length === 0) {
      container.innerHTML = `
        <div class="review-empty">
          <div class="review-empty-icon">🎉</div>
          <h3>Nada para revisar hoje!</h3>
          <p>Volte amanhã para continuar praticando.</p>
        </div>`;
      return;
    }

    if (this._idx >= this._queue.length) {
      const navBadge = document.getElementById('review-nav-badge');
      if (navBadge) navBadge.classList.add('hidden');
      const xpGanho = this._queue.length * 3;
      this.progress.addXP(xpGanho);
      container.innerHTML = `
        <div class="review-done">
          <div class="review-done-icon">✅</div>
          <h3>Revisão concluída!</h3>
          <p>+${xpGanho} XP ganhos</p>
          <button class="btn btn-primary" id="btn-review-again">Revisar mais</button>
        </div>`;
      const btn = container.querySelector('#btn-review-again');
      if (btn) btn.addEventListener('click', () => {
        this._queue = this.progress.getDueReviewItems(10);
        this._idx   = 0;
        this._renderCurrent();
      });
      if (this._onDone) this._onDone();
      return;
    }

    const item = this._queue[this._idx];
    this._revealed = false;

    container.innerHTML = `
      <p class="review-progress-text">${this._idx + 1} / ${this._queue.length}</p>
      <div class="review-card" id="review-card">
        <p class="review-word-it" lang="it">${item.it}</p>
        <p class="review-word-pt" id="review-pt" style="visibility:hidden">${item.pt}</p>
        <div class="review-actions" id="review-actions">
          <button class="btn btn-outline" id="btn-reveal">👁 Revelar</button>
          <button class="btn btn-primary" id="btn-play-review" aria-label="Ouvir pronúncia">🔊 Ouvir</button>
        </div>
      </div>`;

    container.querySelector('#btn-play-review').addEventListener('click', () => {
      this.voice.cancel();
      this.voice.speakExercise(item.it, item.pt, () => {});
    });

    container.querySelector('#btn-reveal').addEventListener('click', () => {
      this._reveal(item);
    });
  }

  _reveal(item) {
    if (this._revealed) return;
    this._revealed = true;

    const ptEl      = this._container.querySelector('#review-pt');
    const actionsEl = this._container.querySelector('#review-actions');
    if (ptEl)      ptEl.style.visibility = 'visible';
    if (actionsEl) actionsEl.innerHTML = `
      <button class="btn btn-outline btn-danger" id="btn-errei">❌ Errei</button>
      <button class="btn btn-primary" id="btn-acertei">✅ Acertei</button>`;

    this._container.querySelector('#btn-errei').addEventListener('click', () => {
      this._answer(item, false);
    });
    this._container.querySelector('#btn-acertei').addEventListener('click', () => {
      this._answer(item, true);
    });
  }

  _answer(item, acertou) {
    this.voice.cancel();
    const updated = this.progress.scheduleReview(item, acertou);
    this.progress.addPalavra(updated);
    this._idx++;
    this._renderCurrent();
  }
}
