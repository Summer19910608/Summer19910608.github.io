/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "20171231/first-day-of-spring-2016-northern-hemisphere.gif",
    "revision": "6f22be4e029e93d82823665a482806b0"
  },
  {
    "url": "20171231/homeScreen128.png",
    "revision": "c75a9a761637308ec133a3958c66c60a"
  },
  {
    "url": "20171231/homeScreen144.png",
    "revision": "e13f35c03850b3b2b5e9bdcc788ec1d0"
  },
  {
    "url": "20171231/homeScreen48.png",
    "revision": "fb050608ac666852b29a5eac4182c12f"
  },
  {
    "url": "20171231/homeScreen72.png",
    "revision": "cb447a29593a26a8473ac2bbe28f4318"
  },
  {
    "url": "20171231/homeScreen96.png",
    "revision": "f6db37464ab7071440b15f6039d42dde"
  },
  {
    "url": "20171231/logo.png",
    "revision": "e13f35c03850b3b2b5e9bdcc788ec1d0"
  },
  {
    "url": "20171231/summer-solstice-strawberry-moon.gif",
    "revision": "75d8fb9ccbd0995d026ed784a72e486f"
  },
  {
    "url": "20171231/tooth.gif",
    "revision": "1d5b4434920a088ca92202a1019e84fe"
  },
  {
    "url": "404.html",
    "revision": "0028a292cfaba8bfeb5562ab1cdc4737"
  },
  {
    "url": "about.html",
    "revision": "83d222a69785a353798ce2a5dea9ea3c"
  },
  {
    "url": "assets/css/0.styles.3c230d37.css",
    "revision": "d6a8ce70cc79dad5eabe404bd73dcf2d"
  },
  {
    "url": "assets/img/banner.8069aec6.png",
    "revision": "8069aec697a05cbba6d6a4e5b238b7a6"
  },
  {
    "url": "assets/img/default.2e87daf0.png",
    "revision": "2e87daf025709c986aafebc298cd5ef4"
  },
  {
    "url": "assets/img/first-day-of-spring-2016-northern-hemisphere.6f22be4e.gif",
    "revision": "6f22be4e029e93d82823665a482806b0"
  },
  {
    "url": "assets/img/logo.3e6261d0.png",
    "revision": "3e6261d01c1350604547911cfabb17e8"
  },
  {
    "url": "assets/img/NotFound.b5c9b223.jpg",
    "revision": "b5c9b223d7dc40d8f56617c8979d30a2"
  },
  {
    "url": "assets/img/summer-solstice-strawberry-moon.75d8fb9c.gif",
    "revision": "75d8fb9ccbd0995d026ed784a72e486f"
  },
  {
    "url": "assets/js/10.7feefd24.js",
    "revision": "df223aa71e0c7e03bc52f3023d5a3d95"
  },
  {
    "url": "assets/js/11.14800245.js",
    "revision": "efd24d41b16412bc158f86008129308c"
  },
  {
    "url": "assets/js/12.a58636a4.js",
    "revision": "4f467fc0ad0375c034864cb9fe3ca354"
  },
  {
    "url": "assets/js/13.a1f80d5e.js",
    "revision": "c20b0070847883aa7c19c6809711d9a6"
  },
  {
    "url": "assets/js/14.af8efe59.js",
    "revision": "fce69098aa16c75da6b769cb2431e9c8"
  },
  {
    "url": "assets/js/15.3da75d97.js",
    "revision": "d35063ec26c0abfa1831e8135cf90033"
  },
  {
    "url": "assets/js/16.efddeb35.js",
    "revision": "b399ed70806c0c9ff473895660de6144"
  },
  {
    "url": "assets/js/2.489582cd.js",
    "revision": "4b1f222abcfc903e7ae7a81cf95186cb"
  },
  {
    "url": "assets/js/3.db34735e.js",
    "revision": "fdf97162d2aa4aefb9599b94a7cd5a91"
  },
  {
    "url": "assets/js/4.4be2546a.js",
    "revision": "0cf5b59ad0bbef5d335ed562d3a23b64"
  },
  {
    "url": "assets/js/5.6b0f1273.js",
    "revision": "6bb33761f2b85aacdbc983caefc326e3"
  },
  {
    "url": "assets/js/6.0b095502.js",
    "revision": "5c00b59bce8cf699e35d2c7b6791f275"
  },
  {
    "url": "assets/js/7.aaa24f0a.js",
    "revision": "354764f18b914a742748e05c9cffa001"
  },
  {
    "url": "assets/js/8.8c41b803.js",
    "revision": "e8c3de6ab65b1f5c3558e0461026e605"
  },
  {
    "url": "assets/js/9.cd0a81da.js",
    "revision": "9873128bb4a98a435f657a64af40db98"
  },
  {
    "url": "assets/js/app.00bacc3d.js",
    "revision": "74d42fe1e0c857a4461ea57bc3d54fdc"
  },
  {
    "url": "index.html",
    "revision": "6e43e20c0c6499c2484d1476f8955a47"
  },
  {
    "url": "link.html",
    "revision": "e025df32c01c892aa25988615ee4a500"
  },
  {
    "url": "other/docker-an-zhuang-ji-shi-yong.html",
    "revision": "c9d4be840892b276eae321505d81661b"
  },
  {
    "url": "other/git-chang-yong-ming-ling.html",
    "revision": "9192a8b945173f7710f85c3356cab4ea"
  },
  {
    "url": "other/index.html",
    "revision": "1014406a066f0da8728aaa73b6f6ff80"
  },
  {
    "url": "other/laravel-xiang-mu-qi-dong.html",
    "revision": "d36803089d7c3b487783e79f95fdb183"
  },
  {
    "url": "other/mycat-de-shi-yong.html",
    "revision": "23abaefc918ce19280ee67788d7f9812"
  },
  {
    "url": "posts/index.html",
    "revision": "5176f5d935fdb08adea73c065e967d6b"
  },
  {
    "url": "tags/index.html",
    "revision": "eb37dc1b186aed78dcfd080bdb9dba09"
  },
  {
    "url": "timeline.html",
    "revision": "d035ea6350aeb372343da462beaa7aa3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
