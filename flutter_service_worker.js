'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5ef592c891f9cad3199a421eaf80cbbb",
".git/config": "f382a342c596b710ef8f41cd6d437ab4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9107a36cfd3c780bf290ee68da9c20e9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33ba89413f282d8601b20156aa6de531",
".git/logs/refs/heads/main": "856dd72e730daae4100c8bdd780a2851",
".git/logs/refs/remotes/origin/main": "ac88e6e97e5ca16cdefb41bf3df58747",
".git/objects/01/53e7c965591c0507e64279554a63d9bf23e246": "3e1cba4531b65d44276b98385230e066",
".git/objects/02/d103027aebc5f0a2e454df274662d5b4937d1e": "958385fffc17bc6e13a61e35a8893438",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/0c/11df551066df9ab53dbe8600b939a6866deee6": "0c1ec776e5a5bbbe8f64273135dbcb03",
".git/objects/12/272cec8e62de7c3b5f8668339084a3cd7518c2": "4d55c1b91a9f78b3b2a8ee2ab642dcbd",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/36/c67455177c02a0b7bbb03fb07c901bbfba96ec": "613abc4b76f2bd3b25240dd43d37751b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3e/665ffe67be08d3d64e795ae512222ecaf6720b": "cf11977acc2f2286ea866ca5ffb94ba5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/47826d6f6a473aca9152687815ceefd324b5f2": "282744e274d44ef4701ca51759a1546b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/54912ad2ed704c522e2d2465069188bcc78113": "faf1545d54e7e6019d3706039542db90",
".git/objects/4f/9b4b703178e9e44001c49f8f89365a8fd519f1": "36fc8f10eea3266ab7b3ed3e608f9557",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5f/709db796d37b64ce115c6451d2984a3578d04c": "d37eb6be145317505e0040577f890a1b",
".git/objects/60/e7852832c521bd80bb05b914a231d94ba4bf51": "ed79c1d8461dde9814b31f88b73961e1",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/dfcb062abfcc7ddbc761040234cf0b1403d161": "4d0509344b646570a0d6c864472772b2",
".git/objects/73/2cd5b3032a62ee099b6083ad9b40cff2a84cf7": "960e75283a61187537624e6618739fff",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/0e18d8d93b58d608c99ea77506582598812832": "12b7c99604bbac4ce1fba66c1423201c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/cce6c486903ceab3058b8196b42a127c1996a3": "619dd1910146b312744feedf59e037c5",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/723296e71625499f7e71d83561490b605c90fc": "10b9327284699c8e4f0a645a967d2f12",
".git/objects/98/802eb308fa08679fa12a7928609a429c852e59": "be46bc45a5f5e566aa88b8ac5102e762",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6bf963602e20d11ce1cd8605434c9d3f01a5d8": "ea9f6404993a9436dde1673b30a996d1",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/309bfa2963a86e684a3382c6aeb768f771671b": "e470e1115382ddd8219f9a08ee01d6bc",
".git/objects/ad/427e575f27d44f2ac1cd3c7bdc940d5822c967": "165c61e7fed05b41f531917b4e49a68d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7b9bfcfd18581125b330087fbbc802ae799c70": "98bcd060ace7cef53507102a45094918",
".git/objects/cb/0815e7b4133cd1956b8eed8eda1d90b0a97e57": "55bba3b8588ac510531aecc713ddf5cb",
".git/objects/ce/437ccba22cd4b73b83e61dd76e65efc5ddb9fb": "aef79b3f97ae94c43b3e78f26d669dc7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/17007fd7105fb0fff2ca7c07067a3a0f17abd4": "5ff1cbe9f1208fc27907bc1eddcb77f1",
".git/objects/de/19d669eab7314c7b1365363e08488b48a453f5": "9dfdf00b7164ff89a82d594862b34590",
".git/objects/e2/7198ae5963df781da1b7c5e41019e4f8172cd7": "ae65d1db183097e703b92d30c03f86db",
".git/objects/e3/df5d03c183f772f4b38586e336cfc6073924e4": "3f7b02944edb97488c7326a730f8c93d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/b5139779910ec2d8973068669fa2a88f8db807": "f0f95de1db706a8aac1f1c3d9e49ecba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "545e12621445ccbd9e6b4aa82159b807",
".git/refs/remotes/origin/main": "545e12621445ccbd9e6b4aa82159b807",
"assets/AssetManifest.json": "edb2a3545e46545a03b10bda8fa8c80c",
"assets/assets/scanner_animation.riv": "91f87876376483e773531e1bc74ac834",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d7f4995d248a77a11f3bedbd384b45d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ed0fe6683e16bcc9ba46f889b947c6a4",
"/": "ed0fe6683e16bcc9ba46f889b947c6a4",
"main.dart.js": "b78075f4d1fd4326498163ed9aa6ca76",
"manifest.json": "0c52551218addb971a50f8d874cbffa3",
"README.md": "0b51d588508167653d0fab976ba6da63",
"version.json": "fdfc9f7cc5b2bd0bcca76d34d005d9ad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
