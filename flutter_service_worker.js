// 'use strict';
// const MANIFEST = 'flutter-app-manifest';
// const TEMP = 'flutter-temp-cache';
// const CACHE_NAME = 'flutter-app-cache';
// const RESOURCES = {
//   "index.html": "41e2ddafccbd2f52263ef28d81b4e3b1",
// "/": "41e2ddafccbd2f52263ef28d81b4e3b1",
// "favicon.png": "5dcef449791fa27946b3d35ad8803796",
// "version.json": "f7da4b2b25d760f85f12e17787085c5a",
// "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
// "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
// "manifest.json": "9141f4987ccbe4dfed3ecfaed17158f3",
// "main.dart.js": "64b8c26015fe3cd8c0d08554fb8f6ea7",
// "favicon.ico": "71c5fc7f2498c767dbc5d93195ecf1b3",
// "README.md": "608aa66360c0bb2cdc476f0233285d06",
// ".git/refs/remotes/origin/main": "8191a5e37921626e18941bf1c7e07977",
// ".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
// ".git/refs/heads/main": "8191a5e37921626e18941bf1c7e07977",
// ".git/FETCH_HEAD": "50ea6dd537e81fb74a923f49b4c6dfee",
// ".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
// ".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
// ".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
// ".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
// ".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
// ".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
// ".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
// ".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
// ".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
// ".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
// ".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
// ".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
// ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
// ".git/packed-refs": "1fff0d6a3d0a786095c1621170f4bd5d",
// ".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
// ".git/logs/refs/remotes/origin/main": "83dd9194179ad4059ba94ebfd831516f",
// ".git/logs/refs/remotes/origin/HEAD": "83b2a80fd741502ec1064dcfe1a26196",
// ".git/logs/refs/heads/main": "3972fd195650abe597958f1808714cb6",
// ".git/logs/HEAD": "3972fd195650abe597958f1808714cb6",
// ".git/config": "0f3d15e29becface6063eda2e301ccba",
// ".git/index": "0dc481dc0432142f6e68ee0ea783524c",
// ".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
// ".git/COMMIT_EDITMSG": "bbe4244cfc89e24129042b34da8dd1b6",
// ".git/objects/96/3246f64ee565d68d36060407af96a8185fc427": "fcf69aa4d87a2f9b7f9dcc18feabbbfa",
// ".git/objects/pack/pack-872efec6fb3ca5121156a2d9b7762a89b242b9e7.pack": "588314d583296a410152dd693f520c2b",
// ".git/objects/pack/pack-872efec6fb3ca5121156a2d9b7762a89b242b9e7.idx": "7d2ceb9febd528cfb5911cd16003c302",
// ".git/objects/b8/7186ce845a596d2b02eb8faf7814a72bee0796": "ec9441680e6dda7bd7e7f8c9a83900ee",
// ".git/objects/5e/d134313c99e71cbb299f9aa9bfa4eda1e658b5": "da91ffe52850b6e862b1aa977737b41a",
// ".git/objects/b3/d075170cefc238986b53787f7e8c7e8d0d36e7": "09beefb36cf7c02787ccc7347e599228",
// ".git/objects/46/a3a28dbe8d250df2645b0574b0e1b428db2871": "14ae3b28210d8df764af23c73c29262a",
// ".git/objects/8c/82a418fbd6099d7ecf768d7ba64e823f499f58": "24036faddd3bccc3848030c4807b551c",
// ".git/objects/d9/e97eb525e939c3648965c6e445714b0d5164ce": "7d409dcbf381b24934d19cf7c81c6ba5",
// ".git/objects/7d/755ad474d4b3bd76d32f607e79e79f39509775": "8183c50faa47dc63f89e13411aed10a0",
// ".git/objects/99/bbc37ef43991e7e272e5eb742506dfb8bb6ed5": "80e8d839e3d0e35877b0f8e436aa6ffd",
// "assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
// "assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
// "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
// "assets/NOTICES": "e2196c06ae480e6c5092faa91e1e996e",
// "assets/assets/background5.jpg": "65757eb39eedeb9e4a70b077425fd0cd",
// "assets/assets/test.jpeg": "f72b86395965659d611578f0b08f1ee7",
// "assets/assets/background4.jpg": "b9fc359fd9c96aa54985d75ab2c1e211",
// "assets/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
// "assets/assets/background3.jpg": "6d2237ce15afe823fece9035f00c871a",
// "assets/assets/backgroundpng.png": "4239544d5e704767df37397877e05a1a",
// "assets/assets/background2.jpg": "3b1a9a50808040de06f8bf6fecd40f03",
// "assets/assets/background1.jpg": "2d764394e04452d209244d00c5768284",
// "assets/assets/tiger_paw.png": "559039e2220217e1ebdf5c807a4f5669",
// "assets/assets/AssetManifest.json": "d7861754827baaf9b7ab75af629bd7ff",
// "assets/assets/tigerpaw.png": "559039e2220217e1ebdf5c807a4f5669",
// "assets/AssetManifest.json": "8ccab0e2c80dbecbdb4328d600d322e4"
// };

// // The application shell files that are downloaded before a service worker can
// // start.
// const CORE = [
//   "/",
// "main.dart.js",
// "index.html",
// "assets/NOTICES",
// "assets/AssetManifest.json",
// "assets/FontManifest.json"];
// // During install, the TEMP cache is populated with the application shell files.
// self.addEventListener("install", (event) => {
//   self.skipWaiting();
//   return event.waitUntil(
//     caches.open(TEMP).then((cache) => {
//       return cache.addAll(
//         CORE.map((value) => new Request(value, {'cache': 'reload'})));
//     })
//   );
// });

// // During activate, the cache is populated with the temp files downloaded in
// // install. If this service worker is upgrading from one with a saved
// // MANIFEST, then use this to retain unchanged resource files.
// self.addEventListener("activate", function(event) {
//   return event.waitUntil(async function() {
//     try {
//       var contentCache = await caches.open(CACHE_NAME);
//       var tempCache = await caches.open(TEMP);
//       var manifestCache = await caches.open(MANIFEST);
//       var manifest = await manifestCache.match('manifest');
//       // When there is no prior manifest, clear the entire cache.
//       if (!manifest) {
//         await caches.delete(CACHE_NAME);
//         contentCache = await caches.open(CACHE_NAME);
//         for (var request of await tempCache.keys()) {
//           var response = await tempCache.match(request);
//           await contentCache.put(request, response);
//         }
//         await caches.delete(TEMP);
//         // Save the manifest to make future upgrades efficient.
//         await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
//         return;
//       }
//       var oldManifest = await manifest.json();
//       var origin = self.location.origin;
//       for (var request of await contentCache.keys()) {
//         var key = request.url.substring(origin.length + 1);
//         if (key == "") {
//           key = "/";
//         }
//         // If a resource from the old manifest is not in the new cache, or if
//         // the MD5 sum has changed, delete it. Otherwise the resource is left
//         // in the cache and can be reused by the new service worker.
//         if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
//           await contentCache.delete(request);
//         }
//       }
//       // Populate the cache with the app shell TEMP files, potentially overwriting
//       // cache files preserved above.
//       for (var request of await tempCache.keys()) {
//         var response = await tempCache.match(request);
//         await contentCache.put(request, response);
//       }
//       await caches.delete(TEMP);
//       // Save the manifest to make future upgrades efficient.
//       await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
//       return;
//     } catch (err) {
//       // On an unhandled exception the state of the cache cannot be guaranteed.
//       console.error('Failed to upgrade service worker: ' + err);
//       await caches.delete(CACHE_NAME);
//       await caches.delete(TEMP);
//       await caches.delete(MANIFEST);
//     }
//   }());
// });

// // The fetch handler redirects requests for RESOURCE files to the service
// // worker cache.
// self.addEventListener("fetch", (event) => {
//   if (event.request.method !== 'GET') {
//     return;
//   }
//   var origin = self.location.origin;
//   var key = event.request.url.substring(origin.length + 1);
//   // Redirect URLs to the index.html
//   if (key.indexOf('?v=') != -1) {
//     key = key.split('?v=')[0];
//   }
//   if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
//     key = '/';
//   }
//   // If the URL is not the RESOURCE list then return to signal that the
//   // browser should take over.
//   if (!RESOURCES[key]) {
//     return;
//   }
//   // If the URL is the index.html, perform an online-first request.
//   if (key == '/') {
//     return onlineFirst(event);
//   }
//   event.respondWith(caches.open(CACHE_NAME)
//     .then((cache) =>  {
//       return cache.match(event.request).then((response) => {
//         // Either respond with the cached resource, or perform a fetch and
//         // lazily populate the cache.
//         return response || fetch(event.request).then((response) => {
//           cache.put(event.request, response.clone());
//           return response;
//         });
//       })
//     })
//   );
// });

// self.addEventListener('message', (event) => {
//   // SkipWaiting can be used to immediately activate a waiting service worker.
//   // This will also require a page refresh triggered by the main worker.
//   if (event.data === 'skipWaiting') {
//     self.skipWaiting();
//     return;
//   }
//   if (event.data === 'downloadOffline') {
//     downloadOffline();
//     return;
//   }
// });

// // Download offline will check the RESOURCES for all files not in the cache
// // and populate them.
// async function downloadOffline() {
//   var resources = [];
//   var contentCache = await caches.open(CACHE_NAME);
//   var currentContent = {};
//   for (var request of await contentCache.keys()) {
//     var key = request.url.substring(origin.length + 1);
//     if (key == "") {
//       key = "/";
//     }
//     currentContent[key] = true;
//   }
//   for (var resourceKey of Object.keys(RESOURCES)) {
//     if (!currentContent[resourceKey]) {
//       resources.push(resourceKey);
//     }
//   }
//   return contentCache.addAll(resources);
// }

// // Attempt to download the resource online before falling back to
// // the offline cache.
// function onlineFirst(event) {
//   return event.respondWith(
//     fetch(event.request).then((response) => {
//       return caches.open(CACHE_NAME).then((cache) => {
//         cache.put(event.request, response.clone());
//         return response;
//       });
//     }).catch((error) => {
//       return caches.open(CACHE_NAME).then((cache) => {
//         return cache.match(event.request).then((response) => {
//           if (response != null) {
//             return response;
//           }
//           throw error;
//         });
//       });
//     })
//   );
// }
