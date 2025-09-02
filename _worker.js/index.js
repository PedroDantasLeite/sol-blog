globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers_CXrKcxpX.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_bGYJisQP.mjs';
import { manifest } from './manifest_G1uKCU0m.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/authors/_entry_.astro.mjs');
const _page3 = () => import('./pages/authors.astro.mjs');
const _page4 = () => import('./pages/blog/categories/_category_.astro.mjs');
const _page5 = () => import('./pages/blog/categories.astro.mjs');
const _page6 = () => import('./pages/blog/page/_slug_.astro.mjs');
const _page7 = () => import('./pages/blog/tags/_tag_.astro.mjs');
const _page8 = () => import('./pages/blog/tags.astro.mjs');
const _page9 = () => import('./pages/blog/_entry_.astro.mjs');
const _page10 = () => import('./pages/blog.astro.mjs');
const _page11 = () => import('./pages/docs.astro.mjs');
const _page12 = () => import('./pages/docs/_---id_.astro.mjs');
const _page13 = () => import('./pages/index-cards.astro.mjs');
const _page14 = () => import('./pages/poetry/_entry_.astro.mjs');
const _page15 = () => import('./pages/poetry.astro.mjs');
const _page16 = () => import('./pages/portfolio.astro.mjs');
const _page17 = () => import('./pages/recipes/page/_slug_.astro.mjs');
const _page18 = () => import('./pages/recipes/_entry_.astro.mjs');
const _page19 = () => import('./pages/recipes.astro.mjs');
const _page20 = () => import('./pages/search.astro.mjs');
const _page21 = () => import('./pages/terms.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/authors/[entry].astro", _page2],
    ["src/pages/authors/index.astro", _page3],
    ["src/pages/blog/categories/[category].astro", _page4],
    ["src/pages/blog/categories/index.astro", _page5],
    ["src/pages/blog/page/[slug].astro", _page6],
    ["src/pages/blog/tags/[tag].astro", _page7],
    ["src/pages/blog/tags/index.astro", _page8],
    ["src/pages/blog/[entry].astro", _page9],
    ["src/pages/blog/index.astro", _page10],
    ["src/pages/docs/index.astro", _page11],
    ["src/pages/docs/[...id].astro", _page12],
    ["src/pages/index-cards.astro", _page13],
    ["src/pages/poetry/[entry].astro", _page14],
    ["src/pages/poetry/index.astro", _page15],
    ["src/pages/portfolio.astro", _page16],
    ["src/pages/recipes/page/[slug].astro", _page17],
    ["src/pages/recipes/[entry].astro", _page18],
    ["src/pages/recipes/index.astro", _page19],
    ["src/pages/search.astro", _page20],
    ["src/pages/terms.astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
