module.exports = {

"[project]/src/configs/i18n.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "i18n": ()=>i18n
});
const i18n = {
    defaultLocale: 'en',
    locales: [
        'en',
        'fr',
        'ar'
    ],
    langDirection: {
        en: 'ltr',
        fr: 'ltr',
        ar: 'rtl'
    }
};

})()),
"[project]/src/components/LangRedirect.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$i18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/i18n.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
const LangRedirect = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const redirectUrl = `/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$i18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i18n"].defaultLocale}${pathname}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirect"])(redirectUrl);
};
const __TURBOPACK__default__export__ = LangRedirect;

})()),
"[project]/src/app/ApolloWrapper.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ApolloWrapper": ()=>ApolloWrapper,
    "AppContext": ()=>AppContext,
    "useApp": ()=>useApp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$error$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/link/error/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/link/core/ApolloLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/link/http/HttpLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$experimental$2d$nextjs$2d$app$2d$support$40$0$2e$11$2e$3_$40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_grap_5thbmyl6vtevcsaif7vv5mydbi$2f$node_modules$2f40$apollo$2f$experimental$2d$nextjs$2d$app$2d$support$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+experimental-nextjs-app-support@0.11.3_@apollo+client@3.11.8_@types+react@18.3.8_grap_5thbmyl6vtevcsaif7vv5mydbi/node_modules/@apollo/experimental-nextjs-app-support/dist/index.ssr.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$experimental$2d$nextjs$2d$app$2d$support$40$0$2e$11$2e$3_$40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_grap_5thbmyl6vtevcsaif7vv5mydbi$2f$node_modules$2f40$apollo$2f$experimental$2d$nextjs$2d$app$2d$support$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+experimental-nextjs-app-support@0.11.3_@apollo+client@3.11.8_@types+react@18.3.8_grap_5thbmyl6vtevcsaif7vv5mydbi/node_modules/@apollo/experimental-nextjs-app-support/dist/index.ssr.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$2d$react$2d$streaming$40$0$2e$11$2e$3_$40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$_453yk7vesxpfhzhd3ykbyzauiq$2f$node_modules$2f40$apollo$2f$client$2d$react$2d$streaming$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client-react-streaming@0.11.3_@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9._453yk7vesxpfhzhd3ykbyzauiq/node_modules/@apollo/client-react-streaming/dist/index.ssr.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$context$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/link/context/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
// have a function to create a client for you
function makeClient() {
    const httpLink = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpLink"]({
        // this needs to be an absolute url, as relative urls cannot be used in SSR
        uri: 'https://alpha.axra.app/v1/graphql',
        // you can disable result caching here if you want to
        // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
        fetchOptions: {
            cache: 'no-store'
        }
    });
    const authLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$context$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setContext"])(async (_, { headers })=>{
        try {
            return {
                headers: {
                    ...headers,
                    'x-hasura-admin-secret': 'alphapassword'
                }
            };
        } catch (e) {
            return {
                headers
            };
        }
    });
    // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$experimental$2d$nextjs$2d$app$2d$support$40$0$2e$11$2e$3_$40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_grap_5thbmyl6vtevcsaif7vv5mydbi$2f$node_modules$2f40$apollo$2f$experimental$2d$nextjs$2d$app$2d$support$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApolloClient"]({
        // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
        cache: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$experimental$2d$nextjs$2d$app$2d$support$40$0$2e$11$2e$3_$40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_grap_5thbmyl6vtevcsaif7vv5mydbi$2f$node_modules$2f40$apollo$2f$experimental$2d$nextjs$2d$app$2d$support$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InMemoryCache"](),
        link: errorLink.concat(authLink).concat(httpLink)
    });
}
const errorLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$link$2f$error$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onError"])(({ graphQLErrors, networkError })=>{
    if (graphQLErrors) {
        console.log('graphql', graphQLErrors);
        graphQLErrors.forEach(({ extensions })=>{
            if (extensions.code === 'invalid-headers' || extensions.code === 'invalid-jwt') {
                localStorage.clear();
                window.location.assign(`${window.location.origin}/login`);
            }
        });
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
        alert('network connection problem');
    }
});
const useApp = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
};
function ApolloWrapper({ children }) {
    const [globalMsg, setGlobalMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$experimental$2d$nextjs$2d$app$2d$support$40$0$2e$11$2e$3_$40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_grap_5thbmyl6vtevcsaif7vv5mydbi$2f$node_modules$2f40$apollo$2f$experimental$2d$nextjs$2d$app$2d$support$2f$dist$2f$index$2e$ssr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ApolloNextAppProvider"], {
        makeClient: makeClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
            value: {
                globalMsg,
                setGlobalMsg,
                loading,
                setLoading
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/ApolloWrapper.jsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/ApolloWrapper.jsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/[lang]/layout.jsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=src_284565._.js.map