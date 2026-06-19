/* ============================================
   PROGRESS MANAGER
   All state read/write goes through here.
   Never access localStorage directly from other
   modules — this isolates quota/private-mode errors.
   ============================================ */

const STORAGE_KEY = 'italiano-estado';

export const DEFAULT_STATE = {
  nome: '',
  vozEngine: 'browser',        // 'browser' | 'responsivevoice' | 'texto'
  responsiveVoiceKey: '',
  modoPadrao: 'auto',           // 'auto' | 'manual'
  metaDiaria: 15,               // minutes/day
  xpTotal: 0,
  xpHoje: 0,
  streak: 0,
  ultimoEstudo: null,           // ISO date string
  modulosStatus: {},
  // { 'a1-m01': { status: 'concluido'|'atual'|'disponivel'|'bloqueado',
  //               xp: 0, exercicioAtual: 0, dataConc: null } }
  palavrasAprendidas: [],       // [{ it, pt, moduleId, ... SM-2 fields }]
  statsHoje: { palavras: 0, minutos: 0 },
  onboardingDone: false,
};

export class ProgressManager {
  constructor() {
    this.state = this._load();
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const parsed = JSON.parse(raw);
      // Merge with defaults so new fields from updates don't break old saves
      return { ...DEFAULT_STATE, ...parsed };
    } catch (err) {
      console.warn('Estado corrompido, iniciando do zero:', err.message);
      return { ...DEFAULT_STATE };
    }
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      return true;
    } catch (err) {
      console.warn('Não foi possível salvar:', err.message);
      document.dispatchEvent(new CustomEvent('storage-error', { detail: { err } }));
      return false;
    }
  }

  reset() {
    this.state = { ...DEFAULT_STATE };
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
  }

  /* ── Streak & daily stats ── */
  touchDaily() {
    const today = new Date().toISOString().slice(0, 10);
    const last  = this.state.ultimoEstudo;

    if (last === today) return; // already touched today

    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (last === yesterday) {
      this.state.streak += 1;
    } else if (last !== today) {
      this.state.streak = 1;
    }

    if (last !== today) {
      this.state.xpHoje = 0;
      this.state.statsHoje = { palavras: 0, minutos: 0 };
    }

    this.state.ultimoEstudo = today;
    this.save();
  }

  addXP(amount) {
    this.state.xpTotal += amount;
    this.state.xpHoje  += amount;
    this.save();
  }

  addMinutes(m) {
    this.state.statsHoje.minutos = (this.state.statsHoje.minutos || 0) + m;
    this.save();
  }

  addPalavra(palavraObj) {
    // Upsert by 'it' key
    const idx = this.state.palavrasAprendidas.findIndex(p => p.it === palavraObj.it);
    if (idx === -1) {
      this.state.palavrasAprendidas.push(palavraObj);
      this.state.statsHoje.palavras = (this.state.statsHoje.palavras || 0) + 1;
    } else {
      this.state.palavrasAprendidas[idx] = { ...this.state.palavrasAprendidas[idx], ...palavraObj };
    }
    this.save();
  }

  /* ── Module status ── */
  getModuleStatus(moduleId) {
    return this.state.modulosStatus[moduleId] ?? { status: 'bloqueado', xp: 0, exercicioAtual: 0 };
  }

  setModuleStatus(moduleId, patch) {
    const cur = this.getModuleStatus(moduleId);
    this.state.modulosStatus[moduleId] = { ...cur, ...patch };
    this.save();
  }

  completeExercise(moduleId, exercicioIndex, xpGanho) {
    const s = this.getModuleStatus(moduleId);
    const newIndex = Math.max(s.exercicioAtual || 0, exercicioIndex + 1);
    this.setModuleStatus(moduleId, { exercicioAtual: newIndex });
    if (xpGanho > 0) this.addXP(xpGanho);
    this.save();
  }

  completeModule(moduleId, xpTotal) {
    this.setModuleStatus(moduleId, {
      status:    'concluido',
      xp:        xpTotal,
      dataConc:  new Date().toISOString().slice(0, 10),
      exercicioAtual: 9999,
    });
    this.save();
  }

  /* Returns the first module that is 'atual' or 'disponivel' */
  getCurrentModuleId() {
    const entries = Object.entries(this.state.modulosStatus);
    const atual = entries.find(([, v]) => v.status === 'atual');
    if (atual) return atual[0];
    return null;
  }

  /* SM-2 scheduling for review items */
  scheduleReview(item, acertou) {
    if (item.fatorFacilidade == null) item.fatorFacilidade = 2.5;
    if (item.repeticoes      == null) item.repeticoes      = 0;
    if (item.intervaloDias   == null) item.intervaloDias   = 0;

    if (acertou) {
      if      (item.repeticoes === 0) item.intervaloDias = 1;
      else if (item.repeticoes === 1) item.intervaloDias = 6;
      else    item.intervaloDias = Math.round(item.intervaloDias * item.fatorFacilidade);
      item.repeticoes    += 1;
      item.fatorFacilidade = Math.max(1.3, item.fatorFacilidade + 0.1);
    } else {
      item.repeticoes    = 0;
      item.intervaloDias = 1;
      item.fatorFacilidade = Math.max(1.3, item.fatorFacilidade - 0.2);
    }

    const d = new Date();
    d.setDate(d.getDate() + item.intervaloDias);
    item.proximaRevisao = d.toISOString();
    return item;
  }

  getDueReviewItems(limite = 10) {
    const now = new Date().toISOString();
    return this.state.palavrasAprendidas
      .filter(i => !i.proximaRevisao || i.proximaRevisao <= now)
      .sort((a, b) => (a.proximaRevisao || '').localeCompare(b.proximaRevisao || ''))
      .slice(0, limite);
  }
}
