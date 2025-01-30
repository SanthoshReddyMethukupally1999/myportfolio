
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 513, hash: '23c28912f6e557018fe98cf8cd7a55e4b91f24c5d7d9be3853a54d7ee95c7a71', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: '61f6aea409fe4b02dbea9a04c3e83755d3a3663e5889502276b9eaa1e0304791', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30155, hash: 'b425d032117f3c93aa3f8eeb5bfb445c52b7a715e78af5a60837cd3d6be9b329', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
