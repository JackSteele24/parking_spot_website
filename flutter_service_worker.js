'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "876d72b34ddb6a8f14ce9a9bc0277f14",
"/": "876d72b34ddb6a8f14ce9a9bc0277f14",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "f7da4b2b25d760f85f12e17787085c5a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "9141f4987ccbe4dfed3ecfaed17158f3",
"main.dart.js": "7362820898992dea1de88b71ecd83041",
"favicon.ico": "71c5fc7f2498c767dbc5d93195ecf1b3",
"README.md": "608aa66360c0bb2cdc476f0233285d06",
".git/refs/remotes/origin/main": "ae3e93473af9321c3cfda77cf544b2ea",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "ae3e93473af9321c3cfda77cf544b2ea",
".git/FETCH_HEAD": "17c5d1c969138c80badc04b916d84547",
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
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/ORIG_HEAD": "51c24f165370431340ec4d9b163d6de8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/packed-refs": "4573d245f633f9af7546e2fa0e2cbc01",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "3e3b120629480662b8f12f070e4449b0",
".git/logs/refs/remotes/origin/HEAD": "2b2331a6d41c09900a36acfbc392f492",
".git/logs/refs/heads/main": "a52c710c1271c22f6d20a3961afcafba",
".git/logs/HEAD": "a52c710c1271c22f6d20a3961afcafba",
".git/config": "6ba8ae64555d08dcf59dc8a4a77b83cc",
".git/index": "390e02c931835fc4f68e1f5c3db434a9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "90ce1b1c920b76a5c112c8be19936f15",
".git/objects/cf/d8f1590302b2e4b840480498bbd8da4ff7f294": "64bd98e2f0a8c4f56f216e8e10cc2856",
".git/objects/1c/848771a06b4250b25d4f64e37c5a0e001a5932": "cdfcda86e5553a12cf1988740b8910dc",
".git/objects/e1/d439cd3ca24c68aa27d7b882492d4c2b9bd440": "7111d964cd1560a2fac1022d1b509817",
".git/objects/7f/7b2a81889de6b08878da4a838cd338564055a8": "34347a9dd43fe2196b3c1c6795888051",
".git/objects/26/322207a5f20ffd71eca91b8e9f01a9ccb7db45": "bf79d535ec8aa65ab9693b0965fa3c71",
".git/objects/55/ff725d59ca505832c16a68a0d4459334f295fa": "549c4ea76a24dedff07277b4917ccb14",
".git/objects/9b/811d1cd2a435d402d862fd2f80a9422cefc440": "f0ee92011d08392bc515f2ea7c4c21b8",
".git/objects/pack/pack-fdd89de8989eae619edcc017c0e497bfaa0eed0d.pack": "6ada0f9cb6c2f4ce0f654a49f268d196",
".git/objects/pack/pack-fdd89de8989eae619edcc017c0e497bfaa0eed0d.idx": "eaf281421c8432e44feee4551d4c00af",
".git/objects/c9/14b79cd5357e2d1a3ca6815cf5640e753b7eb0": "7e8cf25ef2e386132521a4f4391e3601",
".git/objects/c1/07b530f38d105efed15ea88029d91403cab737": "30b0937b74ad5b46ab5db48560d5a0a3",
".git/objects/52/cb4ba57cda857bca25ce266eda2178908d2082": "9b3fe6a0b1bae9d98aaf9d3f7ba18e4d",
".git/objects/88/d92bb535e182cfd045c42df0fba31cebf622ec": "f553d5a2aa32b43a5df1650f4f38859e",
".git/objects/e5/21181d9101c0cc529fa0a57e3103a30064f3d8": "84bd50de25609164bf20153770c0214c",
".git/objects/e0/78b38a004faf1f32cd5fb05154bec4a8fbe2b2": "1b428a83c1083a36c0913bc3ce5c9e18",
".git/objects/78/c542143afc20bbb079819afbf79c7da3556154": "1b1891e5b016f7d0bc92b8a0ca6aebc9",
".git/objects/fe/6358db99ea2ad6ba1270c7c47801cfdfa2fd43": "d3afc0da58e3f68b5cd4ed01f36129a5",
".git/objects/aa/52a1a06f04bea5c13b44bbf18b8cf35407251d": "0bf0cd5b5ac3b0d362628603fa3efbc1",
".git/objects/0f/c0c3d79248382986d6c05f9fdfd96f4e7c8307": "9654e5bbefd951c1ab9d66f3963ce430",
".git/objects/32/b0ae2035a1e98ed20a7078ad75d560deb34b10": "febb12917e2bf7df35e514973b24f27b",
".git/objects/63/1bb49be4372ed470237a5611ef5c07cbc4c1e8": "a6c3f70121e321d6bb04d35fce857833",
".git/objects/f1/80f7e21a49a106f144f6c77fc8344d5c44ea31": "c194cb6b5dd138623e9fe89dfc6b63aa",
".git/objects/b2/eca7a99869b3703feeda7b51fa6e51c6891309": "7cb21b6ef4d35289a1209926907eb602",
".git/objects/4f/a27225d006a66229f0734cd2c885764e662ef3": "06cce4569900b7255296345489979896",
".git/objects/a7/0fc8a0ed7c95229543abcff16a91f630e7ebe6": "cd8a17696631f80122b4930315b39f78",
".git/objects/54/713bc029f7a4eff743a1bebcf8552f97e95ec7": "e85c0bb51ca0ff58eaf1832f6d8219a1",
".git/objects/0c/9ce91421e08652e1be80655357154e81708b35": "1bcfacfd27a7c888e3f73e53de261c87",
".git/objects/ec/09d5e6a7178a8eaad23ad00d1961fda53dba81": "c5433e0e4ed11b7e405b9c971320163c",
".git/objects/51/c57c56efffea30fa731ba7e4cbdbeb3f0d88e0": "ccce9e784c0a424990ebafceead47396",
".git/objects/fd/228846686309aba44a2b78adff9afd4378e458": "5619e3e406082226cd940212f764c4a4",
".git/objects/0e/084b355b77f9eda0f09c42022f4f03ab361b48": "3772ab0c89dbd1443f99601d59195e14",
".git/objects/5d/d9bda927dc7797ab77ae08e9dd4cf61e9025d5": "6db6f7b7693b5e72273a81e1c5509c47",
".git/objects/14/f8ef4a6a30178f0dcfec2d605ed9ad03fbc8c7": "a63c923e1b0a8ed6c28a9f373a189631",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/3b/88a61e3585cb8e6efd8228ae3b0ae985ef82eb": "3cee7fa41e31e333b1dbb2daa6c60823",
".git/objects/b9/03d60451df8bb655adb3aa7708b22c942b1c30": "94553f808428f2530a1718da91021db6",
".git/objects/a9/7748b1c5889ec532026e666a573144d2652b10": "cc1821ca221f0a21cf8211262285e6d6",
".git/objects/34/8bc9f89521d441e14999955c82f2e9626e5e2a": "d70dbe0869ac54b8fab55802aba8f9d3",
".git/objects/e2/4722b0a1683ae1e70c68a23fbb3062c21952a7": "e6599993b0289eb9fcf739114b780df1",
".git/objects/5a/ffaebc294aaca019bc5f2e5a1f03ca4ea67cd2": "6f8b3e0be1c0183d12154eb1dcb907fd",
".git/objects/60/80aad3078ef9d82c9bb9e5e9a4efc3c334b035": "aec9757e4040662f616dcb997f317dc1",
".git/objects/60/ba25e388bf4e2f1e915bb15fc029d02b2b009f": "306c57751984ec1306d611f7acb851c0",
".git/objects/c4/d3b766cf229c37bed640ac8380ee547ea07ca5": "82fff56cf9492320152568d3ed6e5d08",
".git/objects/91/30f994448b60dbd92f8925127403bc40c8e5d7": "67b64eecdd748e89c2fcce2349e91984",
".git/objects/7d/c09a6d845e431bc6f282ce2ccc901e5848b1fb": "f99bc4d449fc65c47ce5cb9c42d52543",
".git/objects/21/22d041dc0b0635e0b0d7bf92918d252981da53": "441aef0711965b11e59b7519237ee785",
".git/objects/ad/272f372cfd66a140a76747364898878b52de37": "65f6c05c0d30642111f8f545fbc148a1",
".git/objects/15/054f886f36c8fdf398c4a86ae9e0d891aa4251": "2eb3ce75d252e0015c18caa47ffd4f6b",
".git/objects/25/b0c6affa5b739848002cc6869359d69cf2d450": "192df5046435a74b644fad35da77b606",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "e2196c06ae480e6c5092faa91e1e996e",
"assets/assets/background5.jpg": "65757eb39eedeb9e4a70b077425fd0cd",
"assets/assets/test.jpeg": "f72b86395965659d611578f0b08f1ee7",
"assets/assets/background4.jpg": "b9fc359fd9c96aa54985d75ab2c1e211",
"assets/assets/background3.jpg": "6d2237ce15afe823fece9035f00c871a",
"assets/assets/backgroundpng.png": "4239544d5e704767df37397877e05a1a",
"assets/assets/background2.jpg": "3b1a9a50808040de06f8bf6fecd40f03",
"assets/assets/background1.jpg": "2d764394e04452d209244d00c5768284",
"assets/assets/tiger_paw.png": "559039e2220217e1ebdf5c807a4f5669",
"assets/assets/tigerpaw.png": "559039e2220217e1ebdf5c807a4f5669",
"assets/AssetManifest.json": "6627a3b24d1dc58b8008b9e4f77d7f61"
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
