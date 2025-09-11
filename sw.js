const CACHE_NAME = 'eavi-system-cache-v2'; // Increment this version for any update
const urlsToCache = [
    './', // This caches the root URL, which is your start_url
    './ADM/index.html',
    './manifest.json',
    './logo.png',
    './images/icon-192x192.png',
    './images/icon-512x512.png',
    'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

// 1. Install the service worker and cache the app shell
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache and caching app shell');
                return cache.addAll(urlsToCache);
            })
    );
});

// 2. Intercept network requests and serve from cache if available
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // If the request is in the cache, return it
                if (response) {
                    return response;
                }
                // Otherwise, fetch it from the network
                return fetch(event.request);
            })
    );
});

// 3. Clean up old caches when a new service worker is activated
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames.map(cacheName => cacheWhitelist.indexOf(cacheName) === -1 ? caches.delete(cacheName) : null)
        ))
    );
    // Take control of open clients
    self.clients.claim();
});

// 4. Listen for a message from the client to skip waiting
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
});