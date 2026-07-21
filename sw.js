const CACHE='folkem-v1.2.4';
const ASSETS=['./','./index.html','./manifest.json',
  './assets/bg.jpg','./assets/cardback.png','./assets/otri/otre.svg',
  './assets/icon-192.png','./assets/icon-512.png','./assets/ujack.svg','./assets/itflag.svg','./assets/victorian.woff2','./assets/isenheim.woff2'];
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
  const url=new URL(e.request.url);
  const isHTML = e.request.mode==='navigate' || url.pathname.endsWith('index.html') || url.pathname.endsWith('/');
  if(isHTML){
    // NETWORK-FIRST per l'HTML: prendi sempre l'ultima versione, fallback alla cache offline
    e.respondWith(
      fetch(e.request).then(r=>{
        const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy));
        return r;
      }).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html')))
    );
  } else {
    // CACHE-FIRST per gli asset (immagini): veloci e offline
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }
});
self.addEventListener('message',e=>{ if(e.data==='skipWaiting') self.skipWaiting(); });
