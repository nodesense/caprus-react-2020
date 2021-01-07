console.log("SW running")

//useful to clear old cache if applicable
var CACHE_NAME = 'shoppingcart.example.com-cache-v2';

// pre-cache/eager cache
var urlsToCache = [
  '/',
  '/index.html',
  '/assets/logo.png',
];


// called on new/update versions
self.addEventListener('install', function(event) {
    console.log('sw Installed called');
    // pull the webpage content js/css/images/json//
    // cache
    event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            // download all url content and cache into application cache
            return cache.addAll(urlsToCache);
          })
      );
})



// activated
self.addEventListener('activate', function(event) {
    // delete the old versions..
    console.log('sw activated ')
    var cacheAllowlist = [CACHE_NAME];

    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheAllowlist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
})

self.addEventListener('fetch', function (event){
    console.log("fetch callback in sw")

    event.respondWith(
        caches.match(event.request)
          .then(function(response) {
            // Cache hit - return response
            console.log("request " + event.request.url + " alrady in cache")
            if (response) {
                console.log("Serving from cache")
              return response;
            }

            // send the request to server
            console.log("not cached, requesting server for resource")
            return fetch(event.request);
          }
        )
      );

})