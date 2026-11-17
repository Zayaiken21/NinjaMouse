// Ninja Mouse service worker: saves the game on the phone so solo runs work with no service, and makes it installable.
// Bump CACHE when you change the game so phones pick up the new version.
const CACHE = 'ninja-mouse-v7';
const CORE = ['./', './index.html', './join.html', './manifest.webmanifest', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/favicon-32.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  const lib = u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com' || u.hostname === 'cdn.jsdelivr.net';
  if (u.origin !== location.origin && !lib) return;   // multiplayer relays go straight to the network
  if (lib) {   // fonts and the multiplayer library: keep a copy once loaded
    e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; })));
    return;
  }
  // the game itself: open instantly from the saved copy, and fetch a newer one in the background when online
  e.respondWith(caches.open(CACHE).then(c => c.match(r, { ignoreSearch: true }).then(hit => {
    const net = fetch(r, { cache: 'no-cache' }).then(res => { if (res && res.ok) c.put(r, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    return net.then(res => res || c.match('./index.html'));
  })));
});
