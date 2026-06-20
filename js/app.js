/* ============================================
   APP — Main controller
   Initializes all modules, handles routing,
   onboarding, and screen lifecycle.
   ============================================ */

import { VoiceEngine }      from './voice.js';
import { WakeLockManager }  from './wakelock.js';
import { ProgressManager }  from './progress.js';
import { Player }           from './player.js';
import { ReviewManager }    from './review.js';
import { A0_MODULES }       from '../data/A0.js';
import { A1_MODULES }       from '../data/A1.js';
import { A2_MODULES }       from '../data/A2.js';
import { B1_MODULES }       from '../data/B1.js';
import { B2_MODULES }       from '../data/B2.js';
import { PRATICA }          from './pratica-data.js';

/* ── Globals ── */
const ALL_MODULES = [...A0_MODULES, ...A1_MODULES, ...A2_MODULES, ...B1_MODULES, ...B2_MODULES];

// Inject 'pratica' exercises into each module before its first quiz
for (const mod of ALL_MODULES) {
  if (!PRATICA[mod.id]) continue;
  if (mod.exercicios.some(ex => ex.tipo === 'pratica')) continue;
  const insertAt = mod.exercicios.findIndex(ex => ex.tipo === 'quiz' || ex.tipo === 'quiz_oral');
  mod.exercicios.splice(insertAt >= 0 ? insertAt : mod.exercicios.length, 0, {
    tipo: 'pratica', frases: PRATICA[mod.id], xp: 10,
    ptFirst: mod.id === 'a0-m00',
  });
}

const AVATARES = {
  mario:     { emoji: '🍄', nome: 'Mario' },
  luigi:     { emoji: '🌿', nome: 'Luigi' },
  nonna:     { emoji: '👵', nome: 'Nonna Sofia' },
  chef:      { emoji: '👨‍🍳', nome: 'Chef Marco' },
  leonardo:  { emoji: '🎨', nome: 'Leonardo' },
  giulietta: { emoji: '💌', nome: 'Giulietta' },
};
const voice    = new VoiceEngine();
const wakelock = new WakeLockManager();
const progress = new ProgressManager();
const player   = new Player({ voice, wakelock, progress });
const review   = new ReviewManager(progress, voice);

let _currentScreen = 'splash';

/* ════════════════════════════════════════════
   ROUTING
   ════════════════════════════════════════════ */
function navigate(screenId) {
  const old = document.getElementById(`screen-${_currentScreen}`);
  const nxt = document.getElementById(`screen-${screenId}`);
  if (!nxt) return;

  if (old) old.classList.remove('active');
  nxt.classList.add('active');
  _currentScreen = screenId;

  const showNav = !['splash', 'onboarding', 'player'].includes(screenId);
  document.getElementById('bottom-nav').style.display = showNav ? 'flex' : 'none';

  document.querySelectorAll('.nav-item').forEach(item => {
    const isActive = item.dataset.screen === screenId;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-current', isActive ? 'page' : 'false');
  });

  if (screenId === 'home')       refreshHome();
  if (screenId === 'modules')    renderModules();
  if (screenId === 'vocabulary') renderVocabulary();
  if (screenId === 'review')     renderReview();
  if (screenId === 'stats')      renderStats();
  if (screenId === 'profile')    renderProfile();
}

/* ════════════════════════════════════════════
   TOAST
   ════════════════════════════════════════════ */
function toast(msg, type = '', duration = 3000) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = `toast${type ? ` toast-${type}` : ''}`;
  el.classList.remove('hidden');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.add('hidden'), duration);
}

/* ════════════════════════════════════════════
   MODULE HELPERS
   ════════════════════════════════════════════ */
function getModuleById(id) {
  return ALL_MODULES.find(m => m.id === id);
}

function resolveModuleStatuses() {
  /* Unlock logic:
     - A0-M00 is always available
     - Each subsequent module unlocks when the previous is 'concluido'
  */
  let prevDone = true;
  ALL_MODULES.forEach(mod => {
    const s = progress.getModuleStatus(mod.id);
    if (s.status === 'concluido') { prevDone = true; return; }
    if (s.status === 'atual')     { prevDone = false; return; }
    if (prevDone && s.status !== 'atual') {
      const cur = progress.getModuleStatus(mod.id);
      if (cur.status === 'bloqueado') {
        progress.setModuleStatus(mod.id, { status: 'disponivel' });
      }
      prevDone = false;
    } else {
      if (s.status === 'disponivel') prevDone = false;
    }
  });
}

function findCurrentModule() {
  // First 'atual' module, or first 'disponivel', or first module of all
  return (
    ALL_MODULES.find(m => progress.getModuleStatus(m.id).status === 'atual') ||
    ALL_MODULES.find(m => progress.getModuleStatus(m.id).status === 'disponivel') ||
    ALL_MODULES[0]
  );
}

function openModule(mod) {
  if (!mod || !mod.exercicios?.length) {
    toast('Este módulo ainda não tem conteúdo completo.', 'warn');
    return;
  }

  const s = progress.getModuleStatus(mod.id);
  if (s.status === 'bloqueado') {
    toast('Complete os módulos anteriores primeiro!', 'warn');
    return;
  }

  // Mark as 'atual' if not already done
  if (s.status !== 'concluido' && s.status !== 'atual') {
    progress.setModuleStatus(mod.id, { status: 'atual' });
  }

  const startIdx = Math.min(s.exercicioAtual || 0, (mod.exercicios?.length || 1) - 1);

  player.loadModule(mod, startIdx);
  navigate('player');
  player.play();
}

/* ════════════════════════════════════════════
   HOME
   ════════════════════════════════════════════ */
function refreshHome() {
  progress.touchDaily();

  const { nome, streak, xpHoje, statsHoje } = progress.state;

  setText('home-nome',    nome || 'Estudante');
  setText('home-streak',  `🔥 ${streak} ${streak === 1 ? 'dia' : 'dias'}`);
  const homeAvatar = document.querySelector('#screen-home .avatar');
  if (homeAvatar) homeAvatar.textContent = AVATARES[progress.state.avatar]?.emoji || '🇮🇹';
  setText('stat-xp',      xpHoje);
  setText('stat-palavras', statsHoje?.palavras || 0);
  setText('stat-minutos', statsHoje?.minutos  || 0);

  const mod = findCurrentModule();
  if (mod) {
    const s     = progress.getModuleStatus(mod.id);
    const total = mod.exercicios?.length || 1;
    const done  = Math.min(s.exercicioAtual || 0, total);
    const pct   = Math.round((done / total) * 100);

    setText('cc-module-name',   mod.nome);
    setText('cc-level',         mod.nivel);
    setText('cc-progress-text', `${pct}% concluído`);

    const fill = document.getElementById('cc-progress');
    if (fill) fill.style.width = `${pct}%`;

    const bar = fill?.parentElement;
    if (bar) { bar.setAttribute('aria-valuenow', pct); }
  }

  renderTrail();
}

function renderTrail() {
  const container = document.getElementById('trail-container');
  if (!container) return;

  resolveModuleStatuses();

  // Show first 12 modules in the trail (to avoid overwhelming scroll)
  const visible = ALL_MODULES.slice(0, 12);

  container.innerHTML = visible.map(mod => {
    const s = progress.getModuleStatus(mod.id);
    const statusIcon = { concluido: '✅', atual: '🔵', disponivel: '⭕', bloqueado: '🔒' }[s.status] || '🔒';
    const disabled = s.status === 'bloqueado' ? 'disabled' : '';
    const hasContent = mod.exercicios?.length > 0;
    return `
      <button class="trail-module status-${s.status}" data-id="${mod.id}" ${disabled}
              aria-label="${mod.nome} — ${s.status}">
        <span class="trail-status-icon" aria-hidden="true">${statusIcon}</span>
        <div class="trail-info">
          <p class="trail-module-name">${mod.emoji || ''} ${mod.nome}</p>
          <p class="trail-module-desc">${mod.descricao || ''}</p>
        </div>
        <span class="trail-xp">${mod.xpTotal || 0} XP</span>
      </button>`;
  }).join('') + (ALL_MODULES.length > 12 ? `
    <p style="text-align:center;color:var(--cinza-texto);font-size:.82rem;padding:var(--sp-md)">
      + ${ALL_MODULES.length - 12} módulos desbloqueados conforme você avança
    </p>` : '');

  container.querySelectorAll('.trail-module:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => openModule(getModuleById(btn.dataset.id)));
  });
}

/* ════════════════════════════════════════════
   MODULES SCREEN
   ════════════════════════════════════════════ */
function renderModules() {
  const container = document.getElementById('modules-list');
  if (!container) return;

  resolveModuleStatuses();

  const levels = [...new Set(ALL_MODULES.map(m => m.nivel))];
  container.innerHTML = levels.map(nivel => {
    const mods = ALL_MODULES.filter(m => m.nivel === nivel);
    return `
      <p class="modules-level-header">${nivel}</p>
      ${mods.map(mod => {
        const s = progress.getModuleStatus(mod.id);
        const statusIcon = { concluido: '✅', atual: '🔵', disponivel: '⭕', bloqueado: '🔒' }[s.status] || '🔒';
        const disabled = s.status === 'bloqueado' ? 'disabled' : '';
        return `
          <button class="trail-module status-${s.status}" data-id="${mod.id}" ${disabled}
                  aria-label="${mod.nome}">
            <span class="trail-status-icon">${statusIcon}</span>
            <div class="trail-info">
              <p class="trail-module-name">${mod.emoji || ''} ${mod.nome}</p>
              <p class="trail-module-desc">${mod.descricao || ''}</p>
            </div>
            <span class="trail-xp">${mod.xpTotal || 0} XP</span>
          </button>`;
      }).join('')}`;
  }).join('');

  container.querySelectorAll('.trail-module:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => openModule(getModuleById(btn.dataset.id)));
  });
}

/* ════════════════════════════════════════════
   VOCABULARY
   ════════════════════════════════════════════ */
function renderVocabulary() {
  const container = document.getElementById('vocab-list');
  const badge     = document.getElementById('vocab-count');
  if (!container) return;

  const words = progress.state.palavrasAprendidas;
  if (badge) badge.textContent = `${words.length} palavra${words.length !== 1 ? 's' : ''}`;

  if (words.length === 0) {
    container.innerHTML = '<p class="vocab-empty">Nenhuma palavra aprendida ainda.<br>Complete módulos para adicionar vocabulário aqui.</p>';
    return;
  }

  container.innerHTML = [...words].reverse().map(w => `
    <div class="vocab-item">
      <div>
        <p class="vocab-it" lang="it">${w.it}</p>
        <p class="vocab-pt">${w.pt}</p>
      </div>
      <span class="vocab-xp">📅 ${w.proximaRevisao ? new Date(w.proximaRevisao).toLocaleDateString('pt-BR') : 'Nova'}</span>
    </div>`).join('');
}

/* ════════════════════════════════════════════
   REVIEW
   ════════════════════════════════════════════ */
function renderReview() {
  const container = document.getElementById('review-main');
  const badge     = document.getElementById('review-count');
  if (!container) return;
  review.render(container, badge, () => refreshHome());
}

/* ════════════════════════════════════════════
   STATS
   ════════════════════════════════════════════ */
function renderStats() {
  const main = document.getElementById('stats-main');
  if (!main) return;

  const s = progress.state;
  const totalModulos = ALL_MODULES.length;
  const concluidos = Object.values(s.modulosStatus || {}).filter(m => m.status === 'concluido').length;
  const palavras   = s.palavrasAprendidas?.length || 0;
  const minHoje    = s.statsHoje?.minutos || 0;
  const palHoje    = s.statsHoje?.palavras || 0;

  // Contagem por nível
  const nivelMap = { A0: [], A1: [], A2: [], B1: [], B2: [] };
  ALL_MODULES.forEach(m => { if (nivelMap[m.nivel]) nivelMap[m.nivel].push(m.id); });

  const levelBars = Object.entries(nivelMap).map(([nivel, ids]) => {
    const done = ids.filter(id => (s.modulosStatus?.[id]?.status === 'concluido')).length;
    const pct  = ids.length ? Math.round((done / ids.length) * 100) : 0;
    return `
      <div class="level-bar-row">
        <span class="level-bar-label">${nivel}</span>
        <div class="level-bar-track"><div class="level-bar-fill" style="width:${pct}%"></div></div>
        <span class="level-bar-pct">${done}/${ids.length}</span>
      </div>`;
  }).join('');

  main.innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">🏆</div>
        <div class="stat-value">${s.xpTotal || 0}</div>
        <div class="stat-label">XP Total</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🔥</div>
        <div class="stat-value">${s.streak || 0}</div>
        <div class="stat-label">Dias seguidos</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📚</div>
        <div class="stat-value">${concluidos}<span style="font-size:.6em;opacity:.7"> / ${totalModulos}</span></div>
        <div class="stat-label">Módulos concluídos</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div class="stat-value">${palavras}</div>
        <div class="stat-label">Palavras aprendidas</div>
      </div>
    </div>

    <div class="stats-section">
      <p class="stats-section-title">Progresso por nível</p>
      ${levelBars}
    </div>

    <div class="stats-today">
      Hoje: <strong>${s.xpHoje || 0} XP</strong> · <strong>${palHoje} palavras</strong> · <strong>${minHoje} min</strong>
    </div>`;
}

/* ════════════════════════════════════════════
   PROFILE
   ════════════════════════════════════════════ */
function renderProfile() {
  const { nome, vozEngine, responsiveVoiceKey, modoPadrao, metaDiaria, avatar } = progress.state;

  const nameInput = document.getElementById('profile-nome');
  if (nameInput) nameInput.value = nome || '';

  // Avatar grid
  document.querySelectorAll('#profile-avatar-grid .avatar-card').forEach(btn => {
    const isActive = btn.dataset.avatar === (avatar || 'mario');
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
    btn.onclick = () => {
      progress.state.avatar = btn.dataset.avatar;
      progress.save();
      renderProfile();
      const homeAvatar = document.querySelector('#screen-home .avatar');
      if (homeAvatar) homeAvatar.textContent = AVATARES[btn.dataset.avatar]?.emoji || '🇮🇹';
    };
  });

  const rvKeyInput = document.getElementById('profile-rv-key');
  if (rvKeyInput) rvKeyInput.value = responsiveVoiceKey || '';

  // Wake lock status
  const wakeSel  = document.getElementById('wakelock-status-text');
  if (wakeSel) {
    if (wakelock.supported) {
      wakeSel.textContent = '✅ Wake Lock suportado neste dispositivo.';
      wakeSel.className = 'wakelock-status supported';
    } else {
      wakeSel.textContent = '⚠️ Wake Lock não suportado. Evite bloquear a tela durante o estudo para não perder o áudio.';
      wakeSel.className = 'wakelock-status unsupported';
    }
  }

  // Voice options
  const voiceOpts = document.getElementById('profile-voice-options');
  if (voiceOpts) {
    voiceOpts.innerHTML = [
      { engine: 'browser',        icon: '🌐', label: 'Voz do Navegador', sub: 'Gratuita, offline' },
      { engine: 'google',         icon: '✨', label: 'Google Neural2',   sub: 'Voz italiana natural (API key)' },
      { engine: 'responsivevoice',icon: '☁️', label: 'ResponsiveVoice',  sub: 'Online, qualidade razoável' },
      { engine: 'texto',          icon: '📖', label: 'Só Texto',         sub: 'Sem áudio' },
    ].map(o => `
      <button class="voice-option ${vozEngine === o.engine ? 'active' : ''}"
              data-engine="${o.engine}" aria-pressed="${vozEngine === o.engine}">
        <span class="vo-icon">${o.icon}</span>
        <div class="vo-info"><strong>${o.label}</strong><span>${o.sub}</span></div>
        <span class="vo-check">✓</span>
      </button>`).join('');

    voiceOpts.querySelectorAll('.voice-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const eng = btn.dataset.engine;
        progress.state.vozEngine = eng;
        voice.setEngine(eng);
        progress.save();
        renderProfile();
        document.getElementById('profile-google-key-group')?.classList.toggle('hidden', eng !== 'google');
        document.getElementById('profile-rv-key-group')?.classList.toggle('hidden', eng !== 'responsivevoice');
      });
    });
  }

  const googleKeyGroup = document.getElementById('profile-google-key-group');
  googleKeyGroup?.classList.toggle('hidden', vozEngine !== 'google');
  const profileGoogleKey = document.getElementById('profile-google-key');
  if (profileGoogleKey) profileGoogleKey.value = progress.state.googleApiKey || '';

  const rvGroup = document.getElementById('profile-rv-key-group');
  rvGroup?.classList.toggle('hidden', vozEngine !== 'responsivevoice');

  // Meta diaria
  const metaOpts = document.getElementById('profile-meta-options');
  if (metaOpts) {
    metaOpts.innerHTML = [
      { min: 5,  icon: '🐢', label: '5 min — Casual' },
      { min: 15, icon: '🚶', label: '15 min — Regular' },
      { min: 30, icon: '🏃', label: '30 min — Intensivo' },
    ].map(o => `
      <button class="goal-option ${metaDiaria === o.min ? 'active' : ''}" data-min="${o.min}"
              aria-pressed="${metaDiaria === o.min}">
        <span class="go-icon">${o.icon}</span>
        <div class="go-info"><strong>${o.label}</strong></div>
      </button>`).join('');
    metaOpts.querySelectorAll('.goal-option').forEach(btn => {
      btn.addEventListener('click', () => {
        progress.state.metaDiaria = parseInt(btn.dataset.min, 10);
        progress.save();
        renderProfile();
      });
    });
  }

  // Mode options
  const modeOpts = document.getElementById('profile-mode-options');
  if (modeOpts) {
    modeOpts.innerHTML = [
      { modo: 'manual', icon: '👆', label: 'Manual' },
      { modo: 'auto',   icon: '🔄', label: 'Automático' },
    ].map(o => `
      <button class="mode-option ${modoPadrao === o.modo ? 'active' : ''}" data-modo="${o.modo}"
              aria-pressed="${modoPadrao === o.modo}">
        <span class="mo-icon">${o.icon}</span>
        <div class="mo-info"><strong>${o.label}</strong></div>
      </button>`).join('');
    modeOpts.querySelectorAll('.mode-option').forEach(btn => {
      btn.addEventListener('click', () => {
        progress.state.modoPadrao = btn.dataset.modo;
        progress.save();
        renderProfile();
      });
    });
  }
}

/* ════════════════════════════════════════════
   ONBOARDING
   ════════════════════════════════════════════ */
function initOnboarding() {
  /* Step 1 — Name */
  const nameInput = document.getElementById('input-nome');
  const btnNome   = document.getElementById('btn-ob-nome');

  nameInput?.addEventListener('input', () => {
    btnNome.disabled = nameInput.value.trim().length < 2;
  });

  btnNome?.addEventListener('click', () => {
    progress.state.nome = nameInput.value.trim();
    progress.save();
    goToObStep('ob-step-avatar');
  });

  /* Step Avatar */
  const btnAvatar = document.getElementById('btn-ob-avatar');
  document.querySelectorAll('#ob-avatar-grid .avatar-card').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#ob-avatar-grid .avatar-card').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      progress.state.avatar = btn.dataset.avatar;
      if (btnAvatar) btnAvatar.disabled = false;
    });
  });
  btnAvatar?.addEventListener('click', () => {
    progress.save();
    goToObStep(2);
  });

  /* Step 2 — Voice */
  document.querySelectorAll('.voice-option').forEach(btn => {
    if (!btn.closest('#ob-step-2')) return;
    btn.addEventListener('click', () => {
      document.querySelectorAll('#ob-step-2 .voice-option').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      progress.state.vozEngine = btn.dataset.engine;
      voice.setEngine(btn.dataset.engine);

      const eng = btn.dataset.engine;
      document.getElementById('google-key-group')?.classList.toggle('hidden', eng !== 'google');
      document.getElementById('rv-key-group')?.classList.toggle('hidden', eng !== 'responsivevoice');
    });
  });

  document.getElementById('btn-test-voice')?.addEventListener('click', () => {
    voice.speak('Ciao! Sono pronto per insegnarti l\'italiano!', 'it-IT', () => {});
  });

  document.getElementById('btn-ob-voice')?.addEventListener('click', () => {
    const googleKey = document.getElementById('input-google-key')?.value?.trim();
    if (progress.state.vozEngine === 'google' && googleKey) {
      progress.state.googleApiKey = googleKey;
      voice.setGoogleApiKey(googleKey);
    }
    const rvKey = document.getElementById('input-rv-key')?.value?.trim();
    if (progress.state.vozEngine === 'responsivevoice' && rvKey) {
      progress.state.responsiveVoiceKey = rvKey;
    }
    progress.save();
    goToObStep(3);
  });

  /* Step 3 — Goal */
  document.querySelectorAll('.goal-option').forEach(btn => {
    if (!btn.closest('#ob-step-3')) return;
    btn.addEventListener('click', () => {
      document.querySelectorAll('#ob-step-3 .goal-option').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      progress.state.metaDiaria = parseInt(btn.dataset.minutos, 10);

      const previews = { '5': 'No ritmo casual, você alcança B2 em ~3 anos', '15': 'No ritmo regular, você alcança B2 em ~18 meses', '30': 'No ritmo intensivo, você alcança B2 em ~9 meses' };
      setText('meta-preview', previews[btn.dataset.minutos] || '');
    });
  });

  document.getElementById('btn-ob-meta')?.addEventListener('click', () => {
    progress.save();
    goToObStep(4);
  });

  /* Step 4 — Mode */
  document.querySelectorAll('.mode-option').forEach(btn => {
    if (!btn.closest('#ob-step-4')) return;
    btn.addEventListener('click', () => {
      document.querySelectorAll('#ob-step-4 .mode-option').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      progress.state.modoPadrao = btn.dataset.modo;

      const warn = document.getElementById('wakelock-warning');
      if (btn.dataset.modo === 'auto' && !wakelock.supported) {
        warn?.classList.remove('hidden');
      } else {
        warn?.classList.add('hidden');
      }
    });
  });

  document.getElementById('btn-ob-modo')?.addEventListener('click', () => {
    progress.state.onboardingDone = true;

    // Unlock first module
    const first = ALL_MODULES[0];
    if (first) progress.setModuleStatus(first.id, { status: 'atual', exercicioAtual: 0 });

    progress.save();
    voice.cancel();
    navigate('home');
  });
}

function goToObStep(n) {
  document.querySelectorAll('.onboarding-step').forEach(el => el.classList.remove('active'));
  const id = typeof n === 'string' ? n : `ob-step-${n}`;
  document.getElementById(id)?.classList.add('active');
}

/* ════════════════════════════════════════════
   BOTTOM NAV + BACK BUTTONS
   ════════════════════════════════════════════ */
function initNav() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      if (player.isPlaying) player.pause();
      navigate(btn.dataset.screen);
    });
  });

  document.getElementById('btn-player-back')?.addEventListener('click', () => {
    if (player.isPlaying) player.pause();
    navigate('home');
  });

  document.getElementById('btn-modules-back')?.addEventListener('click', () => navigate('home'));
  document.getElementById('btn-profile-back')?.addEventListener('click', () => navigate('home'));

  document.getElementById('btn-continue')?.addEventListener('click', () => {
    openModule(findCurrentModule());
  });

  document.getElementById('btn-profile')?.addEventListener('click', () => navigate('profile'));

  // Profile: save name on blur
  document.getElementById('profile-nome')?.addEventListener('change', e => {
    progress.state.nome = e.target.value.trim();
    progress.save();
    toast('Nome salvo', 'success', 1500);
  });

  // Profile: save Google key on blur
  document.getElementById('profile-google-key')?.addEventListener('change', e => {
    progress.state.googleApiKey = e.target.value.trim();
    voice.setGoogleApiKey(progress.state.googleApiKey);
    progress.save();
    toast('API key salva', 'success', 1500);
  });

  // Profile: save RV key on blur
  document.getElementById('profile-rv-key')?.addEventListener('change', e => {
    progress.state.responsiveVoiceKey = e.target.value.trim();
    progress.save();
    toast('API key salva', 'success', 1500);
  });

  // Profile: reset
  document.getElementById('btn-reset-progress')?.addEventListener('click', () => {
    if (confirm('Resetar todo o progresso? Esta ação não pode ser desfeita.')) {
      voice.cancel();
      progress.reset();
      navigate('splash');
      setTimeout(boot, 800);
    }
  });
}

/* ════════════════════════════════════════════
   MODULE COMPLETE EVENT
   ════════════════════════════════════════════ */
document.addEventListener('module-complete', e => {
  const { moduleId } = e.detail;
  toast('Módulo concluído! 🎉', 'success', 3000);

  // Unlock next module
  const idx  = ALL_MODULES.findIndex(m => m.id === moduleId);
  const next = ALL_MODULES[idx + 1];
  if (next) {
    const ns = progress.getModuleStatus(next.id);
    if (ns.status === 'bloqueado' || ns.status === 'disponivel') {
      progress.setModuleStatus(next.id, { status: 'disponivel' });
    }
  }

  setTimeout(() => navigate('home'), 1500);
});

/* ════════════════════════════════════════════
   GOOGLE TTS ERROR
   ════════════════════════════════════════════ */
document.addEventListener('google-tts-error', e => {
  toast(`Google TTS: ${e.detail.message}. Verifique sua API key em Perfil.`, 'error', 5000);
});

/* ════════════════════════════════════════════
   STORAGE ERROR
   ════════════════════════════════════════════ */
document.addEventListener('storage-error', () => {
  toast('Não foi possível salvar o progresso (armazenamento cheio ou modo privado).', 'error', 5000);
});

/* ════════════════════════════════════════════
   UTILS
   ════════════════════════════════════════════ */
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

/* ════════════════════════════════════════════
   BOOT
   ════════════════════════════════════════════ */
function boot() {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.warn('SW registration failed:', err);
    });
  }

  // Wire player UI before any navigation
  player.bindUI();
  initNav();
  initOnboarding();

  // Apply saved voice engine and keys
  voice.setEngine(progress.state.vozEngine || 'browser');
  if (progress.state.googleApiKey) {
    voice.setGoogleApiKey(progress.state.googleApiKey);
  }

  setTimeout(() => {
    if (!progress.state.onboardingDone) {
      navigate('onboarding');
    } else {
      navigate('home');
    }
  }, 1200); // show splash briefly
}

document.addEventListener('DOMContentLoaded', boot);
