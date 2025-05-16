const CACHE_NAME = 'shivexa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/styles.css',
  '/assets/news-slider.js',
  '/assets/logo.png',
  '/assets/cart-icon.png',
  '/assets/mens-collection.jpg',
  '/assets/womens-sale.jpg',
  '/assets/kids-collection.jpg',
  '/assets/men-books.jpg',
  '/assets/women-books.jpg',
  '/assets/kids-books.jpg',
  '/assets/poem-books.jpg',
  '/assets/story-books.jpg',
  '/assets/facebook.png',
  '/assets/twitter.png',
  '/assets/instagram.png'
];

// Offline fallback page
const offlinePage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shivexa - Offline</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="flex items-center justify-center h-screen bg-gray-100">
    <div class="text-center">
        <h1 class="text-2xl font-bold text-gray-800">You're Offline</h1>
        <p class="text-gray-600">Please check your internet connection and try again.</p>
    </div>
</body>
</html>
`;

// Install event: Cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      );
    })
  );
});

// Fetch event: Serve cached content or offline page
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        return new Response(offlinePage, {
          headers: { 'Content-Type': 'text/html' }
        });
      });
    })
  );
});