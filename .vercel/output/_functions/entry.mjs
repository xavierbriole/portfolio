import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_7GLw1-Zd.mjs';
import { manifest } from './manifest_BoQZiZ5C.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/github-stars.json.astro.mjs');
const _page4 = () => import('./pages/apps/_slug_/faq.astro.mjs');
const _page5 = () => import('./pages/apps/_slug_/privacy.astro.mjs');
const _page6 = () => import('./pages/apps/_slug_.astro.mjs');
const _page7 = () => import('./pages/apps.astro.mjs');
const _page8 = () => import('./pages/blog/complete-uninstall-vscode-macos.astro.mjs');
const _page9 = () => import('./pages/blog/mojave-dark-mode-support.astro.mjs');
const _page10 = () => import('./pages/blog.astro.mjs');
const _page11 = () => import('./pages/contact.astro.mjs');
const _page12 = () => import('./pages/packages/_slug_.astro.mjs');
const _page13 = () => import('./pages/packages.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.md", _page2],
    ["src/pages/api/github-stars.json.ts", _page3],
    ["src/pages/apps/[slug]/faq.astro", _page4],
    ["src/pages/apps/[slug]/privacy.astro", _page5],
    ["src/pages/apps/[slug]/index.astro", _page6],
    ["src/pages/apps.astro", _page7],
    ["src/pages/blog/complete-uninstall-vscode-macos.md", _page8],
    ["src/pages/blog/mojave-dark-mode-support.md", _page9],
    ["src/pages/blog.astro", _page10],
    ["src/pages/contact.md", _page11],
    ["src/pages/packages/[slug].astro", _page12],
    ["src/pages/packages.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c7c30003-199f-4d0e-9a15-d0570d4ae362",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
