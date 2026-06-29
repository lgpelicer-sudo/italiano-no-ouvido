/* ============================================
   WAKE LOCK MANAGER
   Combines Screen Wake Lock API + silent audio
   loop + Media Session to keep audio alive when
   the screen dims or the tab goes to background.

   Limitation (documented honestly in Profile screen):
   iOS Safari and some Android builds still suspend
   speechSynthesis when the screen locks, even with
   all three techniques active. This is a platform
   restriction; pre-generated MP3s would be required
   for a fully reliable solution.
   ============================================ */

export class WakeLockManager {
  constructor() {
    this.supported = 'wakeLock' in navigator;
    this._wakeLock  = null;
    this._audio     = null;
    this._active    = false;
    document.addEventListener('visibilitychange', () => this._onVisibilityChange());
  }

  async request() {
    this._active = true;
    if (this.supported) {
      try {
        this._wakeLock = await navigator.wakeLock.request('screen');
        this._wakeLock.addEventListener('release', () => { this._wakeLock = null; });
      } catch (err) {
        console.warn('Wake Lock indisponível:', err.message);
      }
    }
    this._startSilentAudio();
  }

  async release() {
    this._active = false;
    if (this._wakeLock) {
      await this._wakeLock.release().catch(() => {});
      this._wakeLock = null;
    }
    this._stopSilentAudio();
  }

  _buildSilentAudioURL() {
    // Generate a 1-second silent WAV programmatically — no external file needed.
    const sampleRate = 8000;
    const numSamples = sampleRate; // 1 second
    const buf = new ArrayBuffer(44 + numSamples * 2);
    const v   = new DataView(buf);
    const str = (off, s) => { for (let i = 0; i < s.length; i++) v.setUint8(off + i, s.charCodeAt(i)); };
    str(0, 'RIFF');
    v.setUint32(4,  36 + numSamples * 2, true);
    str(8, 'WAVE');
    str(12, 'fmt ');
    v.setUint32(16, 16, true);
    v.setUint16(20, 1,  true);  // PCM
    v.setUint16(22, 1,  true);  // mono
    v.setUint32(24, sampleRate, true);
    v.setUint32(28, sampleRate * 2, true);
    v.setUint16(32, 2,  true);
    v.setUint16(34, 16, true);
    str(36, 'data');
    v.setUint32(40, numSamples * 2, true);
    // Data bytes remain 0 (silence)
    return URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
  }

  _startSilentAudio() {
    if (this._audio) return;
    try {
      const url = this._buildSilentAudioURL();
      const audio = new Audio(url);
      audio.loop   = true;
      audio.volume = 0.001; // effectively silent, but not muted (muted may be paused by browser)
      audio.play().catch(() => {}); // requires prior user gesture — graceful no-op if denied
      this._audio = audio;
    } catch (_) {}
  }

  _stopSilentAudio() {
    if (!this._audio) return;
    this._audio.pause();
    this._audio = null;
  }

  async _onVisibilityChange() {
    if (document.visibilityState === 'visible' && this._active) {
      if (!this._wakeLock) await this.request();
      // speechSynthesis stops when screen locks; notify player to resume
      document.dispatchEvent(new CustomEvent('app-resume'));
    }
  }

  setupMediaSession(moduleNome, exercicioIt, handlers) {
    if (!('mediaSession' in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title:  exercicioIt ?? 'Italiano no Ouvido',
      artist: moduleNome  ?? 'Italiano no Ouvido',
      album:  'Italiano no Ouvido',
      artwork: [
        { src: './icons/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: './icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
    });
    const { onPlay, onPause, onNext, onPrev } = handlers;
    if (onPlay)  navigator.mediaSession.setActionHandler('play',          onPlay);
    if (onPause) navigator.mediaSession.setActionHandler('pause',         onPause);
    if (onNext)  navigator.mediaSession.setActionHandler('nexttrack',     onNext);
    if (onPrev)  navigator.mediaSession.setActionHandler('previoustrack', onPrev);
  }
}
