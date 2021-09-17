// 'use strict';
// const MANIFEST = 'flutter-app-manifest';
// const TEMP = 'flutter-temp-cache';
// const CACHE_NAME = 'flutter-app-cache';
// const RESOURCES = {
//   "index.html": "14e7c3383632175e714c840b5f689b99",
// "/": "14e7c3383632175e714c840b5f689b99",
// "favicon.png": "5dcef449791fa27946b3d35ad8803796",
// "version.json": "f7da4b2b25d760f85f12e17787085c5a",
// "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
// "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
// "manifest.json": "9141f4987ccbe4dfed3ecfaed17158f3",
// "main.dart.js": "225ba974d20cb4fe2adb7022482b6398",
// "favicon.ico": "71c5fc7f2498c767dbc5d93195ecf1b3",
// "README.md": "608aa66360c0bb2cdc476f0233285d06",
// ".git/refs/remotes/origin/main": "455e21ca41b4967ac9d434d3202cc392",
// ".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
// ".git/refs/heads/main": "455e21ca41b4967ac9d434d3202cc392",
// ".git/FETCH_HEAD": "358f1496b0dc0a68a1539441de407fdc",
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
// ".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
// ".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
// ".git/ORIG_HEAD": "ba1a5c84934277b368f1ff522dd8690e",
// ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
// ".git/packed-refs": "4573d245f633f9af7546e2fa0e2cbc01",
// ".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
// ".git/logs/refs/remotes/origin/main": "7031403ac43abfc84284b319e056e655",
// ".git/logs/refs/remotes/origin/HEAD": "2b2331a6d41c09900a36acfbc392f492",
// ".git/logs/refs/heads/main": "39095875a5bacea5c4a7331e2de236d9",
// ".git/logs/HEAD": "39095875a5bacea5c4a7331e2de236d9",
// ".git/config": "6ba8ae64555d08dcf59dc8a4a77b83cc",
// ".git/index": "a176947169c7ae9547a95504a2acce98",
// ".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
// ".git/COMMIT_EDITMSG": "848ca580989125560d6b1219e878f6dd",
// ".git/objects/e1/d439cd3ca24c68aa27d7b882492d4c2b9bd440": "7111d964cd1560a2fac1022d1b509817",
// ".git/objects/7f/7b2a81889de6b08878da4a838cd338564055a8": "34347a9dd43fe2196b3c1c6795888051",
// ".git/objects/26/322207a5f20ffd71eca91b8e9f01a9ccb7db45": "bf79d535ec8aa65ab9693b0965fa3c71",
// ".git/objects/55/ff725d59ca505832c16a68a0d4459334f295fa": "549c4ea76a24dedff07277b4917ccb14",
// ".git/objects/pack/pack-fdd89de8989eae619edcc017c0e497bfaa0eed0d.pack": "6ada0f9cb6c2f4ce0f654a49f268d196",
// ".git/objects/pack/pack-fdd89de8989eae619edcc017c0e497bfaa0eed0d.idx": "eaf281421c8432e44feee4551d4c00af",
// ".git/objects/c9/14b79cd5357e2d1a3ca6815cf5640e753b7eb0": "7e8cf25ef2e386132521a4f4391e3601",
// ".git/objects/fe/6358db99ea2ad6ba1270c7c47801cfdfa2fd43": "d3afc0da58e3f68b5cd4ed01f36129a5",
// ".git/objects/aa/52a1a06f04bea5c13b44bbf18b8cf35407251d": "0bf0cd5b5ac3b0d362628603fa3efbc1",
// ".git/objects/0f/c0c3d79248382986d6c05f9fdfd96f4e7c8307": "9654e5bbefd951c1ab9d66f3963ce430",
// ".git/objects/32/b0ae2035a1e98ed20a7078ad75d560deb34b10": "febb12917e2bf7df35e514973b24f27b",
// ".git/objects/4f/a27225d006a66229f0734cd2c885764e662ef3": "06cce4569900b7255296345489979896",
// ".git/objects/a7/0fc8a0ed7c95229543abcff16a91f630e7ebe6": "cd8a17696631f80122b4930315b39f78",
// ".git/objects/54/713bc029f7a4eff743a1bebcf8552f97e95ec7": "e85c0bb51ca0ff58eaf1832f6d8219a1",
// ".git/objects/0c/9ce91421e08652e1be80655357154e81708b35": "1bcfacfd27a7c888e3f73e53de261c87",
// ".git/objects/ec/09d5e6a7178a8eaad23ad00d1961fda53dba81": "c5433e0e4ed11b7e405b9c971320163c",
// ".git/objects/0e/084b355b77f9eda0f09c42022f4f03ab361b48": "3772ab0c89dbd1443f99601d59195e14",
// ".git/objects/5d/d9bda927dc7797ab77ae08e9dd4cf61e9025d5": "6db6f7b7693b5e72273a81e1c5509c47",
// ".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
// ".git/objects/34/8bc9f89521d441e14999955c82f2e9626e5e2a": "d70dbe0869ac54b8fab55802aba8f9d3",
// ".git/objects/e2/4722b0a1683ae1e70c68a23fbb3062c21952a7": "e6599993b0289eb9fcf739114b780df1",
// ".git/objects/60/80aad3078ef9d82c9bb9e5e9a4efc3c334b035": "aec9757e4040662f616dcb997f317dc1",
// ".git/objects/60/ba25e388bf4e2f1e915bb15fc029d02b2b009f": "306c57751984ec1306d611f7acb851c0",
// ".git/objects/c4/d3b766cf229c37bed640ac8380ee547ea07ca5": "82fff56cf9492320152568d3ed6e5d08",
// ".git/objects/91/30f994448b60dbd92f8925127403bc40c8e5d7": "67b64eecdd748e89c2fcce2349e91984",
// ".git/objects/7d/c09a6d845e431bc6f282ce2ccc901e5848b1fb": "f99bc4d449fc65c47ce5cb9c42d52543",
// ".git/objects/21/22d041dc0b0635e0b0d7bf92918d252981da53": "441aef0711965b11e59b7519237ee785",
// "assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
// "assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
// "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
// "assets/NOTICES": "e2196c06ae480e6c5092faa91e1e996e",
// "assets/assets/tiger_paw.png": "559039e2220217e1ebdf5c807a4f5669",
// "assets/AssetManifest.json": "8b26ebe8ef4b0fd276eebc0788a208d6"
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
