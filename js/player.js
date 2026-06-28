/* ============================================
   PLAYER
   Controls exercise playback for a module.
   Wires together VoiceEngine, WakeLockManager,
   ProgressManager and QuizRenderer.
   ============================================ */

import { QuizRenderer } from './quiz.js';

/* Speed presets per level */
const SPEED_PRESETS = {
  A0: { rate: 0.70, pauseAfterIt: 3000, reps: 3 },
  A1: { rate: 0.70, pauseAfterIt: 3000, reps: 3 },
  A2: { rate: 0.85, pauseAfterIt: 2000, reps: 2 },
  B1: { rate: 1.00, pauseAfterIt: 1000, reps: 1 },
  B2: { rate: 1.10, pauseAfterIt: 0,    reps: 0 },
};

const TYPE_ICONS = {
  intro:              '🎙',
  vocab:              '📝',
  frase:              '💬',
  pratica:            '🗣',
  dialogo:            '🎭',
  quiz:               '❓',
  quiz_oral:          '🗣',
  formal_vs_informal: '🎩',
};

const TYPE_LABELS = {
  intro:              'Introdução',
  vocab:              'Vocabulário',
  frase:              'Frase',
  pratica:            'Frases em uso',
  dialogo:            'Diálogo',
  quiz:               'Quiz',
  quiz_oral:          'Quiz oral',
  formal_vs_informal: 'Formal × Informal',
};

export class Player {
  constructor({ voice, wakelock, progress }) {
    this.voice    = voice;
    this.wakelock = wakelock;
    this.progress = progress;
    this.quiz     = new QuizRenderer();

    this._module      = null;
    this._exercises   = [];
    this._idx         = 0;
    this._playing     = false;
    this._repeat      = false;
    this._autoMode    = false;
    this._textMode    = false;  // true when no Italian voice available
    this._startTime   = null;

    this._audioOnly = false;

    // DOM refs (set by bindUI)
    this._els = {};
  }

  /* ── UI binding ── */
  bindUI() {
    const $ = id => document.getElementById(id);
    this._els = {
      wave:         $('player-wave'),
      exDisplay:    $('exercise-display'),
      exTypeBadge:  $('ex-type-badge'),
      exIt:         $('ex-it'),
      exPt:         $('ex-pt'),
      exCtx:        $('ex-ctx'),
      exCtxText:    $('ex-ctx-text'),
      textMode:     $('text-mode-indicator'),
      btnPlay:      $('btn-play'),
      btnPrev:      $('btn-prev'),
      btnNext:      $('btn-next'),
      btnRepeat:    $('btn-repeat'),
      btnSpeed:     $('btn-speed'),
      btnToggleMode:$('btn-toggle-mode'),
      progressFill: $('player-progress-fill'),
      progressText: $('player-progress-text'),
      exerciseList: $('exercise-list'),
      levelBadge:   $('player-level'),
      moduleName:   $('player-module-name'),
      btnAudioOnly: $('btn-audio-only'),
    };

    this._els.btnPlay.addEventListener('click',      () => this._playing ? this.pause() : this.play());
    this._els.btnPrev.addEventListener('click',      () => this.prev());
    this._els.btnNext.addEventListener('click',      () => this.next());
    this._els.btnRepeat.addEventListener('click',    () => this.toggleRepeat());
    this._els.btnSpeed.addEventListener('click',     () => this.cycleSpeed());
    this._els.btnToggleMode?.addEventListener('click',    () => this.toggleAutoMode());
    this._els.btnAudioOnly?.addEventListener('click',     () => this.toggleAudioOnly());

    // Listen for voice-unavailable events from VoiceEngine
    document.addEventListener('voice-unavailable', () => {
      this._textMode = true;
      this._els.textMode?.classList.remove('hidden');
    });
  }

  /* ── Load a module ── */
  loadModule(mod, startIndex = 0) {
    this.voice.cancel();
    this._module    = mod;
    this._exercises = mod.exercicios || [];
    this._idx       = startIndex;
    this._playing   = false;
    this._textMode  = false;
    this._startTime = null;

    const nivel = mod.nivel || 'A1';
    const preset = SPEED_PRESETS[nivel] || SPEED_PRESETS.A1;
    const savedRate = parseFloat(localStorage.getItem('speech_rate'));
    this.voice.setRate(!isNaN(savedRate) ? savedRate : preset.rate);
    this._updateSpeedBtn();

    if (this._els.levelBadge) this._els.levelBadge.textContent = nivel;
    if (this._els.moduleName)  this._els.moduleName.textContent  = mod.nome;
    if (this._els.textMode)    this._els.textMode.classList.add('hidden');

    this._autoMode = this.progress.state.modoPadrao === 'auto';
    this._updateToggleModeBtn();

    this._renderExerciseList();
    this._renderCurrentExercise();
    this._updateProgress();
    this._updatePlayBtn();

    if (this._autoMode) {
      setTimeout(() => this.play(), 800);
    }
  }

  /* ── Playback controls ── */
  play() {
    if (this._exercises.length === 0) return;
    this._playing = true;
    this._updatePlayBtn();
    this._setWavePlaying(true);

    if (!this._startTime) this._startTime = Date.now();
    this.wakelock.request();

    this._playCurrentExercise();
  }

  pause() {
    this.voice.cancel();
    this._playing = false;
    this._updatePlayBtn();
    this._setWavePlaying(false);
    this._trackTime();
  }

  next() {
    this._trackTime();
    this.voice.cancel();
    if (this._idx < this._exercises.length - 1) {
      this._idx++;
      this._renderCurrentExercise();
      this._renderExerciseList();
      this._updateProgress();
      if (this._playing) this._playCurrentExercise();
    } else {
      this._onModuleComplete();
    }
  }

  prev() {
    this.voice.cancel();
    if (this._idx > 0) {
      this._idx--;
      this._renderCurrentExercise();
      this._renderExerciseList();
      this._updateProgress();
      if (this._playing) this._playCurrentExercise();
    }
  }

  goTo(idx) {
    this.voice.cancel();
    this._idx = idx;
    this._renderCurrentExercise();
    this._renderExerciseList();
    this._updateProgress();
    if (this._playing) this._playCurrentExercise();
  }

  toggleRepeat() {
    this._repeat = !this._repeat;
    if (this._els.btnRepeat) {
      this._els.btnRepeat.setAttribute('aria-pressed', String(this._repeat));
    }
  }

  toggleAutoMode() {
    this._autoMode = !this._autoMode;
    this.progress.state.modoPadrao = this._autoMode ? 'auto' : 'manual';
    this.progress.save();
    this._updateToggleModeBtn();
    if (this._autoMode && !this._playing) this.play();
  }

  cycleSpeed() {
    const rates  = [0.7, 0.85, 1.0, 1.15, 1.3];
    const curIdx = rates.findIndex(r => Math.abs(r - this.voice.rate) < 0.05);
    const nextIdx = (curIdx + 1) % rates.length;
    this.voice.setRate(rates[nextIdx]);
    localStorage.setItem('speech_rate', rates[nextIdx]);
    this._updateSpeedBtn();
  }

  _updateSpeedBtn() {
    const rates  = [0.7, 0.85, 1.0, 1.15, 1.3];
    const labels = ['🐢 0.7×', '🚶 0.85×', '🏃 1×', '⚡ 1.15×', '🚀 1.3×'];
    const idx = rates.findIndex(r => Math.abs(r - this.voice.rate) < 0.05);
    if (this._els.btnSpeed) this._els.btnSpeed.textContent = labels[idx >= 0 ? idx : 2];
  }

  toggleAudioOnly() {
    this._audioOnly = !this._audioOnly;
    this._els.exDisplay?.classList.toggle('audio-only', this._audioOnly);
    if (this._els.btnAudioOnly) {
      this._els.btnAudioOnly.setAttribute('aria-pressed', String(this._audioOnly));
      this._els.btnAudioOnly.title = this._audioOnly ? 'Modo: Só Áudio ativo' : 'Modo: Só Áudio';
      this._els.btnAudioOnly.style.opacity = this._audioOnly ? '1' : '0.45';
    }
  }

  /* ── Exercise playback ── */
  _playCurrentExercise() {
    const ex = this._exercises[this._idx];
    if (!ex) return;

    const onDone = (xp = 0) => {
      if (xp > 0) {
        this.progress.completeExercise(this._module.id, this._idx, xp);
        if (['vocab', 'frase'].includes(ex.tipo) && ex.it) {
          this.progress.addPalavra({ it: ex.it, pt: ex.pt, moduleId: this._module.id });
        }
      }
      this._markExerciseDone(this._idx);

      if (this._repeat) {
        this._playCurrentExercise();
      } else if (this._autoMode) {
        setTimeout(() => {
          if (this._playing) this.next();
        }, 600);
      } else {
        this._playing = false;
        this._updatePlayBtn();
        this._setWavePlaying(false);
      }
    };

    const tipo = ex.tipo;

    if (tipo === 'intro') {
      this.voice.speak(ex.audio_pt || ex.pt || '', 'pt-BR', () => onDone(0));

    } else if (tipo === 'vocab' || tipo === 'frase') {
      this._updateExerciseDisplay(ex);
      this.voice.speakExercise(ex.it, ex.pt, () => onDone(ex.xp || 5));

    } else if (tipo === 'dialogo') {
      this._renderDialogo(ex);
      this._playDialogoLines(ex.linhas, 0, () => onDone(ex.xp || 20));

    } else if (tipo === 'quiz') {
      const dispEl = this._els.exDisplay;
      if (!dispEl) return;
      if (this._autoMode) {
        // Auto mode: speak question → pause → speak correct answer → advance
        const correta = ex.opcoes?.[ex.correta] || ex.it || '';
        this.voice.speak(ex.pergunta_pt, 'pt-BR', () => {
          setTimeout(() => {
            this.voice.speak(correta, 'it-IT', () => {
              if (ex.pt) {
                setTimeout(() => this.voice.speak(ex.pt, 'pt-BR', () => onDone(ex.xp || 10)), 300);
              } else {
                onDone(ex.xp || 10);
              }
            });
          }, 3000);
        });
      } else {
        dispEl.innerHTML = '';
        this.quiz.renderQuiz(ex, dispEl, {
          onCorrect: (xp) => onDone(xp),
          onWrong:   ()   => onDone(0),
        });
      }

    } else if (tipo === 'quiz_oral') {
      const dispEl = this._els.exDisplay;
      if (!dispEl) return;
      dispEl.innerHTML = '';
      this.quiz.renderQuizOral(ex, dispEl, this.voice, {
        onComplete: (xp) => onDone(xp),
      });

    } else if (tipo === 'pratica') {
      this._renderPratica(ex);
      this._playPraticaFrases(ex.frases || [], 0, () => onDone(ex.xp || 10), ex.ptFirst || false);

    } else if (tipo === 'formal_vs_informal') {
      this._renderFormalVsInformal(ex);
      const lines = [];
      if (ex.situacao) lines.push({ text: ex.situacao, lang: 'pt-BR' });
      if (ex.informal?.it) lines.push({ text: ex.informal.it, lang: 'it-IT' });
      if (ex.formal?.it)   lines.push({ text: ex.formal.it,   lang: 'it-IT' });
      this._playLineSequence(lines, 0, () => onDone(ex.xp || 15));

    } else {
      // Unknown type — just advance
      onDone(0);
    }
  }

  _playDialogoLines(linhas, idx, onComplete) {
    if (idx >= linhas.length) { onComplete(); return; }
    const linha = linhas[idx];
    this._highlightDialogoLine(idx);
    this.voice.speak(linha.it, 'it-IT', () => {
      setTimeout(() => {
        this.voice.speak(linha.pt, 'pt-BR', () => {
          setTimeout(() => this._playDialogoLines(linhas, idx + 1, onComplete), 400);
        });
      }, 300);
    });
  }

  _playLineSequence(lines, idx, onComplete) {
    if (idx >= lines.length) { onComplete(); return; }
    const { text, lang } = lines[idx];
    this.voice.speak(text, lang, () => {
      setTimeout(() => this._playLineSequence(lines, idx + 1, onComplete), 400);
    });
  }

  /* ── Rendering helpers ── */
  _updateExerciseDisplay(ex) {
    const els = this._els;
    if (!els.exDisplay) return;

    // Reset to standard layout
    els.exDisplay.innerHTML = `
      <div class="exercise-type-badge" id="ex-type-badge"></div>
      <p class="exercise-it" id="ex-it" lang="it"></p>
      <p class="exercise-pt" id="ex-pt"></p>
      <div class="exercise-ctx" id="ex-ctx">
        <span class="ctx-icon" aria-hidden="true">💡</span>
        <span id="ex-ctx-text"></span>
      </div>
      <div class="text-mode-indicator ${this._textMode ? '' : 'hidden'}" id="text-mode-indicator">
        📖 Modo texto — áudio indisponível
      </div>`;

    // Re-grab refs
    const badge = els.exDisplay.querySelector('#ex-type-badge');
    const it    = els.exDisplay.querySelector('#ex-it');
    const pt    = els.exDisplay.querySelector('#ex-pt');
    const ctx   = els.exDisplay.querySelector('#ex-ctx');

    badge.textContent = `${TYPE_ICONS[ex.tipo] || '📝'} ${TYPE_LABELS[ex.tipo] || ex.tipo}`;
    it.textContent    = ex.it || '';
    pt.textContent    = ex.pt || '';

    if (ex.ctx) {
      ctx.querySelector('#ex-ctx-text').textContent = ex.ctx;
    } else {
      ctx.style.display = 'none';
    }
  }

  _renderCurrentExercise() {
    const ex = this._exercises[this._idx];
    if (!ex || !this._els.exDisplay) return;

    const tipo = ex.tipo;

    if (tipo === 'intro') {
      this._els.exDisplay.innerHTML = `
        <div class="exercise-type-badge">🎙 Introdução</div>
        <p class="exercise-pt" style="font-size:1rem;line-height:1.6;">${ex.audio_pt || ''}</p>`;

    } else if (tipo === 'vocab' || tipo === 'frase') {
      this._updateExerciseDisplay(ex);

    } else if (tipo === 'dialogo') {
      this._renderDialogo(ex);

    } else if (tipo === 'quiz') {
      this._els.exDisplay.innerHTML = `<div class="exercise-type-badge">❓ Quiz</div>
        <p class="quiz-pergunta">${ex.pergunta_pt}</p>
        <p style="color:var(--cinza-texto);font-size:.85rem">${this._autoMode ? '🎧 Ouça a pergunta e a resposta' : 'Pressione ▶ para iniciar'}</p>`;

    } else if (tipo === 'quiz_oral') {
      this._els.exDisplay.innerHTML = `<div class="exercise-type-badge">🗣 Quiz oral</div>
        <p class="quiz-pergunta">${ex.pergunta_pt}</p>
        <p style="color:var(--cinza-texto);font-size:.85rem">Pressione ▶ para ouvir</p>`;

    } else if (tipo === 'pratica') {
      this._renderPratica(ex);

    } else if (tipo === 'formal_vs_informal') {
      this._renderFormalVsInformal(ex);
    }

    // Update media session for lock screen
    this.wakelock.setupMediaSession(this._module?.nome, ex.it || ex.pergunta_pt || '', {
      onPlay:  () => this.play(),
      onPause: () => this.pause(),
      onNext:  () => this.next(),
      onPrev:  () => this.prev(),
    });
  }

  _renderDialogo(ex) {
    if (!this._els.exDisplay) return;
    this._els.exDisplay.innerHTML = `
      <div class="exercise-type-badge">🎭 ${ex.titulo || 'Diálogo'}</div>
      <div class="dialogo-container">
        ${(ex.linhas || []).map((l, i) => `
          <div class="dialogo-linha" id="dialogo-linha-${i}">
            <div class="dialogo-personagem">${l.personagem}</div>
            <div class="dialogo-texto">
              <p class="dialogo-it" lang="it">${l.it}</p>
              <p class="dialogo-pt">${l.pt}</p>
            </div>
          </div>`).join('')}
      </div>`;
  }

  _highlightDialogoLine(idx) {
    const container = this._els.exDisplay;
    if (!container) return;
    container.querySelectorAll('.dialogo-linha').forEach((el, i) => {
      el.classList.toggle('dialogo-active', i === idx);
    });
  }

  _renderPratica(ex) {
    if (!this._els.exDisplay) return;
    const ptFirst = ex.ptFirst || false;
    this._els.exDisplay.innerHTML = `
      <div class="exercise-type-badge">🗣 Frases em uso</div>
      <div class="pratica-lista">
        ${(ex.frases || []).map((f, i) => `
          <div class="pratica-item" id="pratica-item-${i}">
            ${ptFirst
              ? `<p class="pratica-pt">${f.pt}</p><p class="pratica-it" lang="it">${f.it}</p>`
              : `<p class="pratica-it" lang="it">${f.it}</p><p class="pratica-pt">${f.pt}</p>`
            }
          </div>`).join('')}
      </div>`;
  }

  _playPraticaFrases(frases, idx, onComplete, ptFirst = false) {
    if (idx >= frases.length) { onComplete(); return; }
    const container = this._els.exDisplay;
    if (container) {
      container.querySelectorAll('.pratica-item').forEach((el, i) => {
        el.classList.toggle('pratica-active', i === idx);
      });
      const active = container.querySelector(`#pratica-item-${idx}`);
      active?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    const frase = frases[idx];
    const next = () => setTimeout(() => this._playPraticaFrases(frases, idx + 1, onComplete, ptFirst), 500);
    if (ptFirst) {
      this.voice.speak(frase.pt, 'pt-BR', () => {
        setTimeout(() => this.voice.speak(frase.it, 'it-IT', next), 350);
      });
    } else {
      this.voice.speak(frase.it, 'it-IT', () => {
        setTimeout(() => this.voice.speak(frase.pt, 'pt-BR', next), 350);
      });
    }
  }

  _renderFormalVsInformal(ex) {
    if (!this._els.exDisplay) return;
    this._els.exDisplay.innerHTML = `
      <div class="exercise-type-badge">🎩 Formal × Informal</div>
      ${ex.situacao ? `<p class="fvi-situacao">${ex.situacao}</p>` : ''}
      <div class="fvi-grid">
        <div class="fvi-card fvi-card--informal">
          <p class="fvi-label">Informal</p>
          <p class="fvi-it" lang="it">${ex.informal?.it || ''}</p>
          <p class="fvi-pt">${ex.informal?.pt || ''}</p>
        </div>
        <div class="fvi-card fvi-card--formal">
          <p class="fvi-label">Formal (Lei)</p>
          <p class="fvi-it" lang="it">${ex.formal?.it || ''}</p>
          <p class="fvi-pt">${ex.formal?.pt || ''}</p>
        </div>
      </div>
      ${ex.regra ? `<p class="fvi-rule">📌 ${ex.regra}</p>` : ''}`;
  }

  _renderExerciseList() {
    const list = this._els.exerciseList;
    if (!list) return;

    const savedIdx = this.progress.getModuleStatus(this._module?.id)?.exercicioAtual || 0;

    list.innerHTML = this._exercises.map((ex, i) => {
      const done   = i < savedIdx;
      const active = i === this._idx;
      const icon   = TYPE_ICONS[ex.tipo] || '📝';
      const label  = TYPE_LABELS[ex.tipo] || ex.tipo;
      const title  = ex.it || ex.pergunta_pt || ex.titulo || ex.audio_pt || label;
      const xp     = ex.xp ? `+${ex.xp}` : '';
      return `
        <button class="exercise-item ${active ? 'active' : ''} ${done ? 'done' : ''}"
                data-idx="${i}"
                aria-label="${label}: ${title}${done ? ' (concluído)' : ''}">
          <div class="ex-item-num">${done ? '✓' : i + 1}</div>
          <div class="ex-item-info">
            <p class="ex-item-text">${title}</p>
            <p class="ex-item-type">${icon} ${label}</p>
          </div>
          ${xp ? `<span class="ex-item-xp">${xp} XP</span>` : ''}
        </button>`;
    }).join('');

    list.querySelectorAll('.exercise-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        this.goTo(idx);
        if (!this._playing) this.play();
      });
    });

    // Scroll active item into view
    const activeEl = list.querySelector('.exercise-item.active');
    activeEl?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  _markExerciseDone(idx) {
    const list = this._els.exerciseList;
    if (!list) return;
    const btn = list.querySelector(`[data-idx="${idx}"]`);
    if (btn) {
      btn.classList.add('done');
      btn.querySelector('.ex-item-num').textContent = '✓';
    }
  }

  _updateProgress() {
    const total   = this._exercises.length;
    const pct     = total > 0 ? Math.round((this._idx / total) * 100) : 0;
    if (this._els.progressFill) this._els.progressFill.style.width = `${pct}%`;
    if (this._els.progressText) this._els.progressText.textContent = `${this._idx + 1} / ${total}`;
  }

  _updatePlayBtn() {
    const btn = this._els.btnPlay;
    if (!btn) return;
    btn.textContent    = this._playing ? '⏸' : '▶';
    btn.setAttribute('aria-label', this._playing ? 'Pausar' : 'Reproduzir');
  }

  _setWavePlaying(on) {
    this._els.wave?.classList.toggle('playing', on);
  }

  _updateToggleModeBtn() {
    const btn = this._els.btnToggleMode;
    if (!btn) return;
    btn.title         = this._autoMode ? 'Modo: Automático' : 'Modo: Manual';
    btn.style.opacity = this._autoMode ? '1' : '0.45';
    btn.setAttribute('aria-pressed', String(this._autoMode));
  }

  _trackTime() {
    if (!this._startTime) return;
    const mins = Math.round((Date.now() - this._startTime) / 60000);
    if (mins > 0) this.progress.addMinutes(mins);
    this._startTime = Date.now();
  }

  _onModuleComplete() {
    this._playing = false;
    this._updatePlayBtn();
    this._setWavePlaying(false);
    this.wakelock.release();
    this._trackTime();

    if (this._module) {
      this.progress.completeModule(this._module.id, this._module.xpTotal || 0);
    }

    document.dispatchEvent(new CustomEvent('module-complete', {
      detail: { moduleId: this._module?.id },
    }));
  }

  get currentModule()    { return this._module; }
  get currentIndex()     { return this._idx; }
  get isPlaying()        { return this._playing; }
}
