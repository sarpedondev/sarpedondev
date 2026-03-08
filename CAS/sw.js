const CACHE_NAME = "cas-app-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  // Add paths to your SVG files here later, e.g., './icons/plus.svg'
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
