const CACHE='folkem-v1.0.9';
const ASSETS=['./','./index.html','./manifest.json',
  './assets/bg.jpg','./assets/cardback.png','./assets/otri/otre.png'];
// aggiungo le maschere
const MASKS=['meo','pantalone','brighella','pulcinella','balanzone','arlecchino','colombina','meneghino','capitan'];
for(const m of MASKS) for(let i=0;i<3;i++) ASSETS.push(`./assets/masks/${m}_${i}.png`);
for(const su of ['denari','coppe','spade','bastoni']) for(let r=1;r<=10;r++) ASSETS.push(`./assets/cards/${su}_${r}.png`);
ASSETS.push('./assets/table.jpg');

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{})));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
