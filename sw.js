/**
 * WreckSploration VR - Service Worker
 * Progressive Web App for historic Australian shipwreck exploration
 * 
 * Copyright (c) 2025 Patrick Morrison & WreckSploration
 * Built with BelowJS - https://belowjs.com
 */

const CACHE_NAME = 'wrecksploration-v4';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './below/belowjs.js',
  './below/belowjs.css',
  './below/three.module.js',
  './below/three.core.js',
  './wrecksplorationvr_icon.jpg',
  './Screenshot.jpeg',
  // Model files
  './models/01 Junee.glb',
  './models/02 Otway.glb',
  './models/03 Clipper.glb',
  './models/04 Koz VII.glb',
  './models/05 Sesa.glb',
  './models/06 Commiles.glb',
  './models/07 AFrameBarge.glb',
  './models/08 Knowsley.glb',
  './models/09 Eucla.glb',
  './models/10 Gunga.glb',
  './models/11 Tamerlane.glb',
  './models/12 Thornliebank.glb',
  './models/13 HNLMSKXI.glb',
  './models/14 Caithness.glb',
  './models/15 Timaru.glb',
  // Audio files
  './sound/dpv.ogg',
  './sound/dpvhigh.ogg',
  './sound/vrambience.ogg'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .catch(() => {
        // Cache failed - app will still work without offline features
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).then((fetchResponse) => {
          // Don't cache non-successful responses
          if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
            return fetchResponse;
          }

          // Clone the response for caching
          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return fetchResponse;
        });
      })
      .catch(() => {
        // Offline fallback for HTML requests
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
        // Fallback for other requests
        if (event.request.destination === 'image') {
          return caches.match('./wrecksplorationvr_icon.jpg');
        }
      })
  );
});