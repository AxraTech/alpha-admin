const CHUNK_PUBLIC_PATH = "server/app/[lang]/[...not-found]/page.js";
const runtime = require("../../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_aeb3dd._.js");
runtime.loadChunk("server/chunks/ssr/_8703af._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/[lang]/[...not-found]/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/[lang]/[...not-found]/page { COMPONENT_0 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_1 => \"[project]/src/app/[lang]/layout.jsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_2 => \"[project]/src/app/[lang]/[...not-found]/page.jsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <facade>", CHUNK_PUBLIC_PATH).exports;
