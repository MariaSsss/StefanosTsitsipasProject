const staticDevTsitispas = "dev-tsitsipas-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/Tsitsipas1.jpg",
  "/images/Tsitsipas2.jpg",
  "/images/Tsitsipas3.jpg",
  "/images/Tsitsipas4.jpg",
  "/images/Tsitsipas5.jpg",
  "/images/Tsitsipas6.jpg",
  "/images/Tsitsipas7.jpg",
  "/images/Tsitsipas8.jpg",
  "/images/Tsitsipas9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
