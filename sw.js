// Bump CACHE_VERSION whenever static files or module data change
// to force cache replacement on user devices.
const CACHE_VERSION = 'v10';
const CACHE_NAME = `italiano-no-ouvido-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './css/base.css',
  './css/components.css',
  './css/player.css',
  './css/screens.css',
  './js/app.js',
  './js/pratica-data.js',
  './js/player.js',
  './js/progress.js',
  './js/quiz.js',
  './js/voice.js',
  './js/review.js',
  './js/wakelock.js',
  './data/A0.js',
  './data/A1.js',
  './data/A2.js',
  './data/B1.js',
  './data/B2.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(
        names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Only cache same-origin GET requests
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request)
        .then(response => {
          if (response && response.status === 200 && response.type !== 'opaque') {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);
    })
  );
});
