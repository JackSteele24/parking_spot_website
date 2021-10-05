'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "805e1fb886e915f8f6217d7bb35f04b8",
"/": "805e1fb886e915f8f6217d7bb35f04b8",
"CNAME": "5c846ab998ed2d99e434b2fe8bb773dd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "f7da4b2b25d760f85f12e17787085c5a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "9141f4987ccbe4dfed3ecfaed17158f3",
"main.dart.js": "d79d93499cc6461ff7d89c7c2c067477",
"favicon.ico": "71c5fc7f2498c767dbc5d93195ecf1b3",
"README.md": "608aa66360c0bb2cdc476f0233285d06",
".git/refs/remotes/origin/main": "465b554aa9de95c22249a1eda9c04720",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "465b554aa9de95c22249a1eda9c04720",
".git/FETCH_HEAD": "6ce5bc4ec1f6957a4bbf59d2532308d6",
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
".git/ORIG_HEAD": "13890695ff597664ea3720cd0ebeb50a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/packed-refs": "1fff0d6a3d0a786095c1621170f4bd5d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "7885f7c780d62ed7153f126a3e7a9909",
".git/logs/refs/remotes/origin/HEAD": "83b2a80fd741502ec1064dcfe1a26196",
".git/logs/refs/heads/main": "afe58bb03f60977c146c62124de5da52",
".git/logs/HEAD": "afe58bb03f60977c146c62124de5da52",
".git/config": "0f3d15e29becface6063eda2e301ccba",
".git/index": "d3485adcde253a5afd34c33df24c3117",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "4ff94f2dab7bd8f696761e33b15f86cd",
".git/objects/96/3246f64ee565d68d36060407af96a8185fc427": "fcf69aa4d87a2f9b7f9dcc18feabbbfa",
".git/objects/96/bb64791827466c1c58798d476c728ef60eaf9d": "078f0f78296e4c58b0ccb3f9928ef461",
".git/objects/98/7947b84517eb5851187ce96e31dbf66eea51a7": "5b3a508934d9f61fa0677837a01aa53e",
".git/objects/1c/caae5c6c78e0fb01b3a8afb85a2d18d2ad02c7": "065a280d0824354bbd5c6f032621b09d",
".git/objects/7f/5302f3b6079a57b5962decb20e24e11255b14d": "328102c5ecc76c0c0f0ba779e2b5165d",
".git/objects/7f/fb5552c51f1588ed59de72e2082dd61c91e774": "f22a3c5de82a63bbb359a8b94f7fa4fe",
".git/objects/3c/4cd9a5df78b61f1d9fc64a9745d1f13e229520": "2b43b1ffa7b9417987bf22bca07b2b83",
".git/objects/26/deaf6ccb9a4eb5af6e3d8615aba5fbba0555aa": "008207a508d8da7acb4784ff45f61427",
".git/objects/d6/fbf5dac93b28427c6eaec86793612a8e5381c8": "71a09cf89623640f4feba5105e21d7f9",
".git/objects/90/be70fb1aada8d68f4eb98a46cddc54315eff78": "e446775bbbfe14c221475f9ee1e67fdd",
".git/objects/f2/36db47b1265164a6ab5c66aee76a6c7962b6a0": "7b2cd2e1efdc05261de372d1a8f74928",
".git/objects/0d/905d51d2ead45a2eeac5487cf2863ef656bd5d": "7992e1e4444dea7ae009d3530d874e95",
".git/objects/8d/5738071633976b7be1786fdd9810de3eb3dfae": "a6db747ff843d963b8b203138687cfd8",
".git/objects/1a/496629f0f1606051fa0ae5c36c5bf65f9d1707": "190632f4d48ec84fa598c31bdad49236",
".git/objects/e8/b1287a275095e6d3ac1733ea54462a7c769ad7": "d520eead14410f3cc6cb05c3894efe42",
".git/objects/c8/0e50f16917a4fdf3948807f5c8922a8e8aafd4": "3cbea41e211baf634d63b8dfaead9dd8",
".git/objects/d4/b9007e2e49728709012c74ee3b5447736c8728": "3378b97a06d526aaa0748af7b40b6b43",
".git/objects/a6/95da25aff5c569cbf08dc29b54227d0456c4d0": "34d4440c84a2cd200592427e027f4d50",
".git/objects/f3/bf2522ca01721ae65314360369880e437f088e": "d7e22f2f56bb3bf7868de1cd91ffebec",
".git/objects/pack/pack-872efec6fb3ca5121156a2d9b7762a89b242b9e7.pack": "588314d583296a410152dd693f520c2b",
".git/objects/pack/pack-872efec6fb3ca5121156a2d9b7762a89b242b9e7.idx": "7d2ceb9febd528cfb5911cd16003c302",
".git/objects/04/e2aa556152a53131dc94297d893412f8ae1fda": "343c75445c968528455c88b21f092d2d",
".git/objects/7b/5547881f9095dbf00d0f782db65cee200ae9ef": "d00b1d152d8eddc2b74a34f814f8b727",
".git/objects/6e/935d2cd21f41bbabef0d8ccf2948627e9afbed": "830fa2c41fcb39cee689c41290a939db",
".git/objects/6e/4c1d182721ab177b478cbc6bd83960c44adc5f": "270a0024570ba4f439a95dde3f6c5e5b",
".git/objects/c1/cfcddefc6f9782af46f8997b87c9552648d354": "57d8d685e087fab49dd5286ed52d549a",
".git/objects/c1/5a6d89ab4377d44e753971a400e643869b8907": "bc6b84fc32fce4e2f125cc18930ec34e",
".git/objects/12/7b88ab9d9076610e19d6024ddb81ed723a4720": "0c58d6a4a1975605186180d61d99b25f",
".git/objects/44/5fce7515798690e0317bc7205a033e328199c8": "5ff143fca5d35bf12e750e92d9087580",
".git/objects/d7/5f7381450a14c17d2f694193fac502325eac3a": "92d6909aaf590748d76154ca8b3e211c",
".git/objects/d7/ebd0b339c74941d7b5b79f42bd96bd054fe41d": "6dda5d67707451013617d636de360d14",
".git/objects/f5/f9518a3f33653fac9a0f505f17065036a0f023": "1b7a6aed6bad32db2a193b260ef7cb7b",
".git/objects/00/a052ac7bd766f55b1fce157bf3d91822ff46c3": "b9984bc9d7efb8e9ed6ce6a3edf94398",
".git/objects/85/c1214ef18ae0985a4664ecf6a322cdac588f9c": "f07b8e99dd4d96adffb9f9217c119cd7",
".git/objects/ff/930e57e5918044bbb7cb52dee6e5ad59668f29": "6d2d938d3dba705d47ea15611b2ae6d7",
".git/objects/0b/48e31221112764eda585895d558a2088e67cd5": "c39c4fe251b4a3066ea0f6b8596cd65d",
".git/objects/ab/f28093228650b6450723bf28ff858892c238d9": "13819b8f3fcbaae3cec4baeb8c0d3feb",
".git/objects/47/e745e2bccdf2f1bd046aa5afcc4c03559655d2": "2604ce09d217b26e856ea9dc8719a9a9",
".git/objects/b8/7186ce845a596d2b02eb8faf7814a72bee0796": "ec9441680e6dda7bd7e7f8c9a83900ee",
".git/objects/50/2665a862828b5ad1dbc702301d2daa312f83f7": "e36af983efbe574bf040d99c0e1869a4",
".git/objects/22/6986fb01d80013aa779d14a6715ccf2fb9c5d6": "c73f82880332cce6b49e0debb3a8d37a",
".git/objects/0c/3504f90471ae43eecbc4071a80e9249ca52b89": "0408a8a3510bb9fea117167faccc44e0",
".git/objects/a2/7ad1e2f075a791705d375fbc556119f1e8d8e1": "cc37b6238740ea5b2583b7a6240c325f",
".git/objects/ec/ec5bd32a583fc998c4caa1b0a54274c6a93a7f": "19072c0ee2e56c8f02e1512b9771b8a8",
".git/objects/a4/05ba35a3dcdca7a61cb8a38bbaa2190f5a9569": "892747136fa921ad479675a264d26c65",
".git/objects/5e/6dbdef81920766d776cfac6e6e58c3c059a5f2": "6b94db3c33e9ea7331bc9c3c3f53cff5",
".git/objects/5e/dcbea902390ed9310c231bee84ad67e8208b10": "3ba954961701c152919218ea79077aa4",
".git/objects/5e/d134313c99e71cbb299f9aa9bfa4eda1e658b5": "da91ffe52850b6e862b1aa977737b41a",
".git/objects/c6/c7d1a36cf1b48ed4c5b9d9cbd43c57b4ed3862": "48b8fe95be0228b6c3d2a6fa99cca2ad",
".git/objects/38/1e5d0dcd6bcc7f7ea9e22f0faaad98da5aa213": "9f7f6534836d214c5dec6dc5ace6239e",
".git/objects/20/c9e629d376d553fbb8b687486bf4382455ef3d": "2f8654361c38ba5c58b5a51241e7945b",
".git/objects/62/6146e2e14587f21f0a111c065ae66f3472633c": "1096c6f2ae5c6effdecbcb78aa12ca73",
".git/objects/ca/5645605165a80a445af48f86ee3941b8d2a205": "3fe8c3a2e9ec4659452a91c87322dbac",
".git/objects/0e/0c02417119535a6669b67e47d3e10c7ddb3ba1": "322291f76fcd65bd1456a64da05f00b2",
".git/objects/5d/c9579953248b3670b9a98f1b534983ddc40bdb": "4731a76bc193acefdace4591b810d1a2",
".git/objects/14/809aec0e612e384260aa6f59aa8ebc8c15fb37": "26facf46badc115118e4f469228b15f2",
".git/objects/3b/4f8f62922365202442163aa36b8012620955e6": "5bd74caae2b57dd7a61770c64100165b",
".git/objects/b3/3b54a24722c1f5186a9a76c5667cbc8943dd1f": "6191d5ad2309347d4372499676d4ca75",
".git/objects/b3/d075170cefc238986b53787f7e8c7e8d0d36e7": "09beefb36cf7c02787ccc7347e599228",
".git/objects/b0/9f1d52c220d5d2b30e4c740e0bcce390b38802": "11593258150e631388a459179bb26e4b",
".git/objects/e3/d165b48e0843c0533ca65e31b63ab6fcf88116": "bc124e2c3c41c7ce83bbde3043552558",
".git/objects/ac/9bcf6bd70a2d44867ba77d97f1793292a3c199": "561351c7d5abe14aa9095b4482e818da",
".git/objects/29/d381477ebff6cc3e36e404696affe675c82971": "c0c062fe26372031403ea087d298493e",
".git/objects/f6/ddd1c7f6cabd9ebab014acf930d15201b8d27b": "980bc2142c766a3619aa4e954560f5c6",
".git/objects/93/ff5f7f0da806f9ef88b99bd538e73e4cb1201f": "a80af2397ae4a0444451ebe80d329834",
".git/objects/41/50a4a9bac8a409f037a976ee74b2dc768d6b53": "7a1383920f76c15fac92e70e9c364568",
".git/objects/46/a3a28dbe8d250df2645b0574b0e1b428db2871": "14ae3b28210d8df764af23c73c29262a",
".git/objects/da/746e93f3dc159a5049b8b0af3dc39475cc2b98": "8c740062017ebf24cf5a662e6899f90e",
".git/objects/bc/79579beb1fcc920940fd8d637f62456b1a0292": "c30b339808af47dad8a133a1728f6299",
".git/objects/b4/d2242b439e7f9896d8eaa37a6382488c5b2ea8": "abaef7eda66f538096bebebd35986b0b",
".git/objects/8c/82a418fbd6099d7ecf768d7ba64e823f499f58": "24036faddd3bccc3848030c4807b551c",
".git/objects/8c/f0e0bfe20a5758221758d0ff3ab2502e8f08d1": "6e8736de7fccc023afc230d558c748e2",
".git/objects/fc/c4f9601eea7e27e2184d2cf858031e35c34559": "e9a4c7d88175ad85c6f22837879f74ba",
".git/objects/75/787c631e928dceea25fe29d5effd7638a19272": "5fce5be0c2e037d1e24cdd017ef68a8e",
".git/objects/0a/bfa01ccf7310eb78266c184eab968c2531fde4": "69c519a8bb341d49dc76b324337302de",
".git/objects/d9/e97eb525e939c3648965c6e445714b0d5164ce": "7d409dcbf381b24934d19cf7c81c6ba5",
".git/objects/bd/81b5ff95265f0f440ef4b0eb16d3866e81183a": "359f1f953df093453d5307a2eea7b32b",
".git/objects/f7/fe4ecbd5507815c57ab799ec8cef7cee02d377": "51a04a038f9ef394f3b00d74fcb31b56",
".git/objects/97/4786aab48d0b57325f707292c467125528370d": "7f355659d7802e907b2e0e90fdd1fc45",
".git/objects/71/c6ad79d2b33ea867349da42800a81d86e4f49a": "3ec3058cdf66fbd3948930a7b54316ab",
".git/objects/7d/755ad474d4b3bd76d32f607e79e79f39509775": "8183c50faa47dc63f89e13411aed10a0",
".git/objects/99/bbc37ef43991e7e272e5eb742506dfb8bb6ed5": "80e8d839e3d0e35877b0f8e436aa6ffd",
".git/objects/7a/39de0f6b1e55a343f8033d56e719c8381183a1": "3541e83cf4d100c3247bbc8fa17b79be",
".git/objects/9d/77d5cb82609bbf937efca21fab9b450d94bdbf": "248484065f0b9a3beb30ee8f56289611",
".git/objects/a5/3b3f94284c43e984b2bd852da8b7f04339569d": "f6ca078c55bbc6bd1c4e514d0074206a",
".git/objects/ad/ce35a2c64ca97bbc79dc6961ff024c1d9e4733": "3bccc399bb260daf662f501f6eaee80d",
".git/objects/d0/053139413f076b14391a6566185d0443eac188": "2723d517617ddd2c9299a307932ef471",
".git/objects/66/80e0032a280b4e51d6c02613ebda4491a2d1d9": "6939878c34b54dc25a1bdc5f8af8c0a6",
".git/objects/87/638d4ce9f88b2826e19e34819f664bddc82f8c": "b7ca617368fdb36b83e7e53614d7d928",
".git/objects/e9/d8c1e66579e8bb0a83889a6beac55365b1005b": "097b7b6134e4fb655e91418defc036fb",
".git/objects/2c/1bd3a122b4091cd4afcd1e83be0e40c8608f6e": "aba86c697912ededab7ec5fa4c98f4ee",
".git/objects/25/f51501e99beaa7113f9c6efc556a23bc92b69e": "e2131948698ff791d3a5c21080742166",
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
