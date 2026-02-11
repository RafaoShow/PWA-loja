self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("loja-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js"
      ]);
    })
  );
});