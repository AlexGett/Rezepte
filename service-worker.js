const CACHE_NAME = 'kochbuch-cache-v1.2';
const urlsToCache = [
	'./',
	'index.html',
	'manifest.json',
	'favicon.ico', // Hier angepasst
	'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(cache => {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});
