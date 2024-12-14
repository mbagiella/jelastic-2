
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/fr/',
  locale: "fr",
  routes: undefined,
  assets: {
    'index.csr.html': {size: 75279, hash: '66d53c86bf36e0627f57d5ab773f6103d89b13778c7330d1c49d9f5723323af3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3209, hash: 'aee6f54cce942e9759e719f1dfc3ef82a8ea7a6c15802c7b09e6799ebd63dd7e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-D5753YSB.css': {size: 230764, hash: '93lVlAplBsU', text: () => import('./assets-chunks/styles-D5753YSB_css.mjs').then(m => m.default)}
  },
};
