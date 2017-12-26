/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json',
    './assets/imgs/background.jpeg',
    './assets/imgs/ready.webp',
    './assets/imgs/wrapper.png',
    './assets/imgs/setA/A01.png',
    './assets/imgs/setA/A02.png',
    './assets/imgs/setA/A03.png',
    './assets/imgs/setA/A04.png',
    './assets/imgs/setA/A05.png',
    './assets/imgs/setA/A06.png',
    './assets/imgs/setA/A07.png',
    './assets/imgs/setA/A08.png',
    './assets/imgs/setA/A09.png',
    './assets/imgs/setA/A10.png',
    './assets/imgs/setA/A11.png',
    './assets/imgs/setA/A12.png',
    './assets/imgs/setA/A13.png',
    './assets/imgs/setA/A14.png',
    './assets/imgs/setA/A15.png',
    './assets/imgs/setA/A16.png',
    './assets/imgs/setA/A17.png',
    './assets/imgs/setA/A18.png',
    './assets/imgs/setA/A19.png',
    './assets/imgs/setA/A20.png',
    './assets/imgs/setA/A21.png',
    './assets/imgs/setA/A22.png',
    './assets/imgs/setA/A23.png',
    './assets/imgs/setA/A24.png',
    './assets/imgs/setA/A25.png',
    './assets/imgs/setA/A26.png',
    './assets/imgs/setA/A27.png',
    './assets/imgs/setA/A28.png',
    './assets/imgs/setA/A29.png',
    './assets/imgs/setA/A30.png',
    './assets/imgs/setC/C01.png',
    './assets/imgs/setC/C02.png',
    './assets/imgs/setC/C03.png',
    './assets/imgs/setC/C04.png',
    './assets/imgs/setC/C05.png',
    './assets/imgs/setC/C06.png',
    './assets/imgs/setC/C07.png',
    './assets/imgs/setC/C08.png',
    './assets/imgs/setC/C09.png',
    './assets/imgs/setC/C10.png',
    './assets/imgs/setC/C11.png',
    './assets/imgs/setC/C12.png',
    './assets/imgs/setC/C13.png',
    './assets/imgs/setC/C14.png',
    './assets/imgs/setC/C15.png',
    './assets/imgs/setC/C16.png',
    './assets/imgs/setC/C17.png',
    './assets/imgs/setC/C18.png',
    './assets/imgs/setC/C19.png',
    './assets/imgs/setC/C20.png',
    './assets/imgs/setC/C21.png',
    './assets/imgs/setC/C22.png',
    './assets/imgs/setC/C23.png',
    './assets/imgs/setC/C24.png',
    './assets/imgs/setC/C25.png',
    './assets/imgs/setD/D01.png',
    './assets/imgs/setD/D02.png',
    './assets/imgs/setD/D03.png',
    './assets/imgs/setD/D04.png',
    './assets/imgs/setD/D05.png',
    './assets/imgs/setD/D06.png',
    './assets/imgs/setD/D07.png',
    './assets/imgs/setD/D08.png',
    './assets/imgs/setD/D09.png',
    './assets/imgs/setD/D10.png',
    './assets/imgs/setD/D11.png',
    './assets/imgs/setD/D12.png',
    './assets/imgs/setD/D13.png',
    './assets/imgs/setD/D14.png',
    './assets/imgs/setD/D15.png',
    './assets/imgs/setD/D16.png',
    './assets/imgs/setD/D17.png',
    './assets/imgs/setD/D18.png',
    './assets/imgs/setD/D19.png',
    './assets/imgs/setD/D20.png',
    './assets/imgs/setD/D21.png',
    './assets/imgs/setD/D22.png',
    './assets/imgs/setD/D23.png',
    './assets/imgs/setD/D24.png',
    './assets/imgs/setD/D25.png'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
