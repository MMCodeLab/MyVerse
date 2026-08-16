const CACHE_NAME = "MyVerse-cache-v1";

const urlsToCache = [
  "/",
  "index.html",

  "css/style.css",
  "css/glass.css",
  "css/themes.css",
  "css/settings.css",
  "css/animations.css",
  "css/responsive.css",

  "js/i18n.js",
  "js/storage.js",
  "js/icons.js",
  "js/folders.js",
  "js/suggestions.js",
  "js/stars.js",
  "js/sort.js",
  "js/settings.js",
  "js/backup.js",
  "js/ui.js",
  "js/modal.js",
  "js/api.js",
  "js/legal.js",
  "js/contact.js",
  "js/genres.js",
  "js/stats.js",
  "js/share.js",
  "js/app.js",
  "js/devconsole.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  // Lascia passare normalmente le richieste di OneSignal
  // e le richieste esterne/API.
  if (
    event.request.url.includes("onesignal.com") ||
    event.request.url.includes("googlesyndication.com") ||
    event.request.url.includes("googleapis.com") ||
    event.request.url.includes("image.tmdb.org")
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});