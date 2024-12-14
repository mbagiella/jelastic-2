
export default {
  basePath: '/',
  entryPoints: {
    'en': () => import('./en/main.server.mjs'),
    'fr': () => import('./fr/main.server.mjs')
  },
};
