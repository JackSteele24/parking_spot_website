'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "137cf560189d1452fe903aee5a760ff6",
"/": "137cf560189d1452fe903aee5a760ff6",
"CNAME": "5c846ab998ed2d99e434b2fe8bb773dd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "f7da4b2b25d760f85f12e17787085c5a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "9141f4987ccbe4dfed3ecfaed17158f3",
"main.dart.js": "6d44873931e0e5316d51cb20f59d4669",
"favicon.ico": "71c5fc7f2498c767dbc5d93195ecf1b3",
"README.md": "608aa66360c0bb2cdc476f0233285d06",
".git/refs/remotes/origin/main": "604db53319183725b7dde9d5c1d548d5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "604db53319183725b7dde9d5c1d548d5",
".git/FETCH_HEAD": "170eb67d6c263e6fc65d0196d600f643",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/packed-refs": "8e11a1658f381106ddcca0f9fdc25352",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "cd647000a16764632ed08062efe30167",
".git/logs/refs/remotes/origin/HEAD": "45bd715e5fb00a11f8d056708ac1066e",
".git/logs/refs/heads/main": "ca2237b46b844fbda0ba5abad4146802",
".git/logs/HEAD": "ca2237b46b844fbda0ba5abad4146802",
".git/config": "0f3d15e29becface6063eda2e301ccba",
".git/index": "9c24c44dad1ace26b776bd3191c57677",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "17940a3febf652e4ff13c926ac5d06e4",
".git/objects/10/5aa049e1947696b80d8defd5bf1b48e2ae89d7": "0552d13bea6204c6c418bc65dc74b96d",
".git/objects/f2/50a635be8aede7a25f5e21836cfcdc4121ba59": "b9a0070d428bbd4c256289f95ade5fe2",
".git/objects/1a/56d98c53746d9809897d394bd405bfeb179295": "0f7046f4c2d9c7eaf651d0d4afe4a90f",
".git/objects/c8/e2b18d7c7eeed75b065efb04369a5c094734a4": "65188490dd06f647690c90489abed6e6",
".git/objects/f3/b9c673d830155e900b0209f9167eae3f321391": "7f0ebdf62dbcd9fe9562e9dd3182ba4a",
".git/objects/f3/113eed23668d1ed97a63bbc090898afff0a333": "d75e17840c24756c590172e9447d5c6a",
".git/objects/pack/pack-bc8500d6d008056388b1791f4b79ea6649cb6948.idx": "f05c14b9897b0eec2db281f3da803237",
".git/objects/pack/pack-bc8500d6d008056388b1791f4b79ea6649cb6948.pack": "d84071d52d5769e2f6aea52c6989b037",
".git/objects/e6/ea8393e7fd8f27f96233f96e3533c378a0fcd2": "7b710d82c4add2ff631f486a0978029b",
".git/objects/40/3ba245554bbbe339631d895edf436499bf3d86": "063d60fdae2884b259823884d3c2961a",
".git/objects/12/a47c65ef620e022461e60c420307452e0f5a3f": "fc9e50ae9031aaa897ba9ef02ba6dcee",
".git/objects/44/054a2bc7db3f366ae600ce146c7d9a7c4d597e": "6868a9c4caa3d30ad4268163138afe95",
".git/objects/e0/1a001e014907ab67dbade21fb4b74f5137798f": "ab093f48bacdeccd24e8bfb56cdb7325",
".git/objects/bf/efbc0a12049cae0b3792deff9c064a5779ed29": "b1865b0451e9aebc72c725bfff8da93c",
".git/objects/32/089905313c0d746af2f8c89db827c31b15f3b8": "271e41c2c5116266246fb8bdd9355fc3",
".git/objects/14/9376d34b08f51beab2a0acf8b32352b920e933": "b5bd05675190349ebcd9697184e04211",
".git/objects/14/6d73cea9b75973fca8fca968a3b3ed55dffce2": "d4d3896799175572c068fcc49116a77a",
".git/objects/30/84c090e964f1f9944a9b5f67173c6b6f92404a": "12f0051796ddafc917a3795c4a62a6a7",
".git/objects/d5/fce7bc0c983cf5a0eecdd7ca2f140299677e78": "809db16d75a3832908b63a5915a472c7",
".git/objects/46/862b3ed2a8a86140ba874bb209b0f0a78a9e1c": "cede69e24135c34579776a1f40a14f73",
".git/objects/c4/507675b2f1aad1f432ddeb59d3b5ceb6a5a7ed": "b35d91225e3fe8be62bfbeb9e5944e4b",
".git/objects/43/e836403be4cb6277b19318d4bbd20b96d63c32": "cb605e7d1e59c8dec99a963d88d79d78",
".git/objects/2c/c20ee2c2a9bdd8ce21e0dc1c8d6bac2c4f7a5e": "1c55464847a94a6d99b129975fd61149",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "e2196c06ae480e6c5092faa91e1e996e",
"assets/assets/background/background5.jpg": "39d260bd62ac82b06cb4be40d4b253c7",
"assets/assets/background/background4.jpg": "ad912db0b8a4173590b8db9f6b7cc06d",
"assets/assets/background/background3.jpg": "9005e8efe2a4feffa51ed782cfd4e778",
"assets/assets/background/background2.jpg": "e5aa5c3be2272a7f2b06e4ee7da5b905",
"assets/assets/background/background1.jpg": "31ca32cb5c5cd05fdc7c3bcc21f5bae4",
"assets/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/AssetManifest.json": "d7861754827baaf9b7ab75af629bd7ff",
"assets/AssetManifest.json": "8ccab0e2c80dbecbdb4328d600d322e4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
