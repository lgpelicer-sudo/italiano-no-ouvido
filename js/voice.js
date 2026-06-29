/* ============================================
   VOICE ENGINE
   Handles all TTS: Web Speech API (primary) +
   Google Cloud TTS Neural2 (natural Italian/Portuguese).

   Background audio strategy:
   - Uses <audio> element instead of Web Audio API so the OS
     grants background playback privileges (screen-off).
   - MediaSession API registers the app as a media player on
     the lock screen (play/pause controls appear there).
   - Cache stores blob URLs per phrase so each sentence is only
     fetched once per session.
   ============================================ */

export class VoiceEngine {
  constructor() {
    this.engine = 'browser'; // 'browser' | 'google' | 'responsivevoice' | 'texto'
    this.rate = 0.85;
    this._gen = 0;
    this._voicesReady = this._waitForVoices();

    // Google TTS
    this._googleApiKey = '';
    this._audioCache   = new Map(); // "lang::text" → Promise<string> (blob URL)

    // Single persistent <audio> element — the OS tracks it for background privileges
    this._audio         = new Audio();
    this._audio.preload = 'auto';
  }

  /* ── Web Speech helpers ── */

  _waitForVoices() {
    return new Promise(resolve => {
      if (!window.speechSynthesis) return resolve([]);
      const existing = speechSynthesis.getVoices();
      if (existing.length) return resolve(existing);
      const onChange = () => {
        const voices = speechSynthesis.getVoices();
        if (voices.length) {
          speechSynthesis.removeEventListener('voiceschanged', onChange);
          resolve(voices);
        }
      };
      speechSynthesis.addEventListener('voiceschanged', onChange);
      // Firefox may never fire 'voiceschanged' — don't leave the Promise hanging
      setTimeout(() => resolve(speechSynthesis.getVoices()), 2000);
    });
  }

  async _findVoice(lang) {
    const voices = await this._voicesReady;
    const lc = lang.toLowerCase();
    const exact = voices.find(v => v.lang.toLowerCase() === lc);
    if (exact) return exact;
    const prefix = lc.split('-')[0];
    return voices.find(v => v.lang.toLowerCase().startsWith(prefix)) || null;
  }

  /* ── Google Cloud TTS helpers ── */

  setGoogleApiKey(key) {
    this._googleApiKey = key;
    // Revoke existing blob URLs and clear cache when key changes
    this._audioCache.forEach(p => p.then(url => URL.revokeObjectURL(url)).catch(() => {}));
    this._audioCache.clear();
  }

  _fetchGoogleAudio(text, lang) {
    const cacheKey = `${lang}::${text}`;
    if (this._audioCache.has(cacheKey)) return this._audioCache.get(cacheKey);

    const languageCode = lang.startsWith('it') ? 'it-IT' : 'pt-BR';
    const voiceName    = lang.startsWith('it') ? 'it-IT-Neural2-C' : 'pt-BR-Neural2-C';

    const promise = fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${encodeURIComponent(this._googleApiKey)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode, name: voiceName },
          audioConfig: { audioEncoding: 'MP3', speakingRate: this.rate },
        }),
      }
    )
    .then(r => {
      if (!r.ok) return r.json().then(e => Promise.reject(
        new Error(e.error?.message || `Google TTS HTTP ${r.status}`)
      ));
      return r.json();
    })
    .then(data => {
      const bytes = Uint8Array.from(atob(data.audioContent), c => c.charCodeAt(0));
      const blob  = new Blob([bytes], { type: 'audio/mp3' });
      return URL.createObjectURL(blob);
    })
    .catch(err => {
      this._audioCache.delete(cacheKey); // allow retry on failure
      return Promise.reject(err);
    });

    this._audioCache.set(cacheKey, promise);
    return promise;
  }

  async _speakGoogle(text, lang, callback) {
    const myGen = this._gen;
    const stale = () => myGen !== this._gen;

    try {
      const url = await this._fetchGoogleAudio(text, lang);
      if (stale()) return;

      // Reset the element before assigning new source
      this._audio.pause();
      this._audio.onended = null;
      this._audio.onerror = null;
      this._audio.src     = url;

      this._audio.onended = () => { if (!stale()) callback(); };
      this._audio.onerror = () => {
        if (!stale()) {
          console.warn('Google TTS: playback error');
          callback();
        }
      };

      await this._audio.play();
    } catch (err) {
      console.warn('Google TTS:', err.message);
      if (!stale()) {
        document.dispatchEvent(new CustomEvent('google-tts-error', { detail: { message: err.message } }));
        setTimeout(() => { if (!stale()) callback(); }, 800);
      }
    }
  }

  /* ── ResponsiveVoice loader ── */

  loadResponsiveVoice(apiKey) {
    return new Promise((resolve, reject) => {
      if (window.responsiveVoice) return resolve();
      if (!apiKey) return reject(new Error('API key não configurada'));
      const script = document.createElement('script');
      script.src = `https://code.responsivevoice.org/responsivevoice.js?key=${encodeURIComponent(apiKey)}`;
      script.onload  = () => resolve();
      script.onerror = () => reject(new Error('Falha ao carregar ResponsiveVoice'));
      document.head.appendChild(script);
    });
  }

  /* ── Main speak ── */

  async speak(text, lang, callback) {
    const myGen = this._gen;
    const stale = () => myGen !== this._gen;

    if (this.engine === 'texto') {
      setTimeout(() => { if (!stale()) callback(); }, 800);
      return;
    }

    if (this.engine === 'google') {
      if (!this._googleApiKey) {
        const wasEngine = this.engine;
        this.engine = 'browser';
        await this.speak(text, lang, callback);
        this.engine = wasEngine;
        return;
      }
      // Both Italian (Neural2-C) and Portuguese (Neural2-C) go through Google
      return this._speakGoogle(text, lang, callback);
    }

    if (this.engine === 'responsivevoice') {
      if (!window.responsiveVoice) {
        this.engine = 'browser';
        return this.speak(text, lang, callback);
      }
      const voice = lang.startsWith('it') ? 'Italian Female' : 'Brazilian Portuguese Female';
      responsiveVoice.speak(text, voice, {
        rate: this.rate,
        onend:   () => { if (!stale()) callback(); },
        onerror: () => { if (!stale()) callback(); },
      });
      return;
    }

    // Web Speech API path
    if (!window.speechSynthesis) {
      setTimeout(() => { if (!stale()) callback(); }, 800);
      return;
    }
    speechSynthesis.cancel();

    const voice = await this._findVoice(lang);

    // Never speak Italian with a non-Italian voice — fall back to text mode
    if (lang.startsWith('it') && !voice) {
      document.dispatchEvent(new CustomEvent('voice-unavailable', { detail: { lang } }));
      setTimeout(() => { if (!stale()) callback(); }, 800);
      return;
    }

    const u = new SpeechSynthesisUtterance(text);
    u.lang  = lang;
    u.rate  = this.rate;
    if (voice) u.voice = voice;
    u.onend   = () => { if (!stale()) callback(); };
    u.onerror = () => { if (!stale()) callback(); };
    speechSynthesis.speak(u);
  }

  /* Standard exercise sequence: IT → pause → PT → pause → IT */
  speakExercise(italiano, portugues, onComplete) {
    const myGen = this._gen;
    const stale = () => myGen !== this._gen;

    this.speak(italiano, 'it-IT', () => {
      if (stale()) return;
      setTimeout(() => {
        if (stale()) return;
        this.speak(portugues, 'pt-BR', () => {
          if (stale()) return;
          setTimeout(() => {
            if (stale()) return;
            this.speak(italiano, 'it-IT', onComplete);
          }, 600);
        });
      }, 500);
    });
  }

  /* Cancel current speech AND invalidate all pending callbacks. */
  cancel() {
    this._gen++;
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (window.responsiveVoice)  responsiveVoice.cancel();
    this._audio.pause();
    this._audio.onended = null;
    this._audio.onerror = null;
  }

  setRate(rate) { this.rate = rate; }

  setEngine(engine) { this.engine = engine; }

  get generation() { return this._gen; }
}
