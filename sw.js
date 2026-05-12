const CACHE_NAME = 'freepdfshoot-v1';
const urlsToCache = [
  '/freepdfshoot/',
  '/freepdfshoot/index.html',
  '/freepdfshoot/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
