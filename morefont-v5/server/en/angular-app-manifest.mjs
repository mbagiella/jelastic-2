
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/en/',
  locale: "en",
  routes: undefined,
  assets: {
    'index.csr.html': {size: 75279, hash: '4eedfdc4e2c7a8ac8305a5dc5c3f477fb30eb0bf78d9615fe85baa74fa6d8488', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3209, hash: '8453b24da2d284dbf2d5073384573cd547db9470c829cf5bbf71963c63361724', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-D5753YSB.css': {size: 230764, hash: '93lVlAplBsU', text: () => import('./assets-chunks/styles-D5753YSB_css.mjs').then(m => m.default)}
  },
};
