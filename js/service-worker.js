importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

const CACHE_NAME = "MyVerse-cache-v1";

const urlsToCache = [

"/",

"index.html",

"css/style.css",

"css/glass.css",

"css/themes.css",

"css/settings.css",

"css/animations.css",

"css/responsive.css",

"js/storage.js",

"js/stars.js",

"js/ui.js",

"js/app.js",

"js/modal.js",

"js/settings.js",

"js/sort.js",

"js/backup.js"

];



self.addEventListener("install",event=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(urlsToCache);

})

);

});



self.addEventListener("fetch",event=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);

});