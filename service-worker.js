if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const r=e=>a(e,d),c={module:{uri:d},exports:f,require:r};i[d]=Promise.all(s.map((e=>c[e]||r(e)))).then((e=>(n(...e),f)))}}define(["./workbox-6c3e5c38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa-v2"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7109765a0a8b3b3ffd3e336ce9a02f87"},{url:"abo/index.html",revision:"64eb4f4a6ed57eb7f83ae95d895419bc"},{url:"about/index.html",revision:"24b0e715016894cbae600a0ff17ad3c9"},{url:"archive/index.html",revision:"8af0c49cb7fb0ac807f530735ac673fc"},{url:"blog/alienromulus/index.html",revision:"316042a5cafb8aa7934f02029f46edbb"},{url:"blog/friendlyfire/index.html",revision:"4723c7613a2ab851ba0e7b5bb1c4b6d1"},{url:"blog/lonelyislandpod/index.html",revision:"043c4a4c51217c359b9314447423deb5"},{url:"blog/megalopolis/index.html",revision:"6f08f9834c390c500fac1bd4af5b2908"},{url:"blog/trap/index.html",revision:"b60e22761f3e655983ae5c2ff0ab7333"},{url:"contact/index.html",revision:"24a8074afbd5dd81b885a245c9bbb8e8"},{url:"css/index.css",revision:"29647118bda9d1bb3fbf00fc8bae130d"},{url:"css/main.css",revision:"ca0af2ad9ddd9a8cdf7d55f6f9aa1203"},{url:"css/message-box.css",revision:"1ba762670598a339c6290c0bb4a250cf"},{url:"css/prism-diff.css",revision:"9eb6ba0ad1d217d8dd3625b6b3431b62"},{url:"css/styling.css",revision:"879632d18781ee24786f38828fa629d3"},{url:"dist/rJ3_G-2ArF.js",revision:"ac88ab69bb3da47bc2ca3372082b724b"},{url:"img/logo.svg",revision:"375ab7ad0715c57f555277486245f432"},{url:"index.html",revision:"b23f1df35a7b416687858a6609803efc"},{url:"logo.svg",revision:"542038e596e2083196b23c1c29aed0f6"},{url:"manifest.json",revision:"420d8868655ad540c187399e67fb7580"},{url:"pagefind/pagefind-entry.json",revision:"2db36c76f9a2d81c24778127a1e51849"},{url:"pagefind/pagefind-highlight.js",revision:"9884f0f1d546e073cc0aff4442619b05"},{url:"pagefind/pagefind-modular-ui.css",revision:"8ba82b0fc3b73d70717347223422b193"},{url:"pagefind/pagefind-modular-ui.js",revision:"b79d9423fdf7ec284d9d2e8aa22c2b3e"},{url:"pagefind/pagefind-ui.css",revision:"f3a0c2b7836ea429ca865b4807d76e60"},{url:"pagefind/pagefind-ui.js",revision:"93ae1267ee78acdabb687964c7cb4ff7"},{url:"pagefind/pagefind.js",revision:"9b2d30c9eb69d0cc9e16d4dca81e1a2e"},{url:"search/index.html",revision:"e0bafb283a4a5ae23509f22bb333b338"},{url:"tags/index.html",revision:"b1d99ff2470572291c9350d9e360ecbb"}],{}),e.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
