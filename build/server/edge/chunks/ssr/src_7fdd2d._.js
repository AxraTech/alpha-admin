(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_7fdd2d._.js", {

"[project]/src/utils/routes.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "adminRoutes": ()=>adminRoutes,
    "deliveryRoutes": ()=>deliveryRoutes,
    "financeRoutes": ()=>financeRoutes,
    "managerRoutes": ()=>managerRoutes,
    "saleRoutes": ()=>saleRoutes,
    "serviceRoutes": ()=>serviceRoutes
});
const adminRoutes = [
    '/en/dashboards',
    '/en/products',
    '/en/user',
    '/en/orders',
    '/en/news',
    '/en/services',
    '/en/invoice',
    '/en/quotations',
    '/en/service_token',
    '/en/admin',
    '/en/service_center'
];
const managerRoutes = [
    '/en/products',
    '/en/news'
];
const saleRoutes = [
    '/en/orders',
    '/en/invoice',
    '/en/quotations'
];
const serviceRoutes = [
    '/en/service_token'
];
const deliveryRoutes = [
    ''
];
const financeRoutes = [
    '/en/orders',
    '/en/invoice'
];

})()),
"[project]/src/middleware.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "config": ()=>config,
    "middleware": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jwt-decode/build/esm/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/routes.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function middleware(req) {
    const token = req.cookies.get('token')?.value;
    let role = null;
    if (token) {
        role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["jwtDecode"])(token).role;
    }
    const { pathname } = req.nextUrl;
    if (pathname.startsWith('/en/login') || pathname.startsWith('/en/pages/misc/401-not-authorized')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (!role) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/en/login', req.url));
    } else if (role === 'admin' && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["adminRoutes"].some((route)=>pathname.startsWith(route))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    } else if (role === 'manager' && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["managerRoutes"].some((route)=>pathname.startsWith(route))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    } else if (role === 'service' && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["serviceRoutes"].some((route)=>pathname.startsWith(route))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    } else if (role === 'sale' && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["saleRoutes"].some((route)=>pathname.startsWith(route))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    } else if (role === 'delivery' && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["deliveryRoutes"].some((route)=>pathname.startsWith(route))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    } else if (role === 'finance' && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["financeRoutes"].some((route)=>pathname.startsWith(route))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    } else {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/en/pages/misc/401-not-authorized', req.url));
    }
}
const config = {
    matcher: '/en/:path*'
};

})()),
}]);

//# sourceMappingURL=src_7fdd2d._.js.map