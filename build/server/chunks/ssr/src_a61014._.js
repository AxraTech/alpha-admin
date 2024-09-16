module.exports = {

"[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/*
 * If you change the following items in the config object, you will not see any effect in the local development server
 * as these are stored in the cookie (cookie has the highest priority over the themeConfig):
 * 1. mode
 * 2. skin
 * 3. semiDark
 * 4. layout
 * 5. navbar.contentWidth
 * 6. contentWidth
 * 7. footer.contentWidth
 *
 * To see the effect of the above items, you can click on the reset button from the Customizer
 * which is on the top-right corner of the customizer besides the close button.
 * This will reset the cookie to the values provided in the config object below.
 *
 * Another way is to clear the cookie from the browser's Application/Storage tab and then reload the page.
 */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const themeConfig = {
    templateName: 'ALPHA',
    homePageUrl: '/user/list',
    settingsCookieName: 'Alpha',
    mode: 'system',
    skin: 'default',
    semiDark: false,
    layout: 'vertical',
    layoutPadding: 24,
    compactContentWidth: 1440,
    navbar: {
        type: 'fixed',
        contentWidth: 'compact',
        floating: false,
        detached: true,
        blur: true // true, false
    },
    contentWidth: 'compact',
    footer: {
        type: 'static',
        contentWidth: 'compact',
        detached: true //! true, false (This will not work in the Horizontal Layout)
    },
    disableRipple: false,
    toastPosition: 'top-right' // 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'
};
const __TURBOPACK__default__export__ = themeConfig;

})()),
"[project]/src/configs/primaryColorConfig.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Primary color config object
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const primaryColorConfig = [
    {
        name: 'primary-1',
        light: '#A379FF',
        main: '#8C57FF',
        dark: '#7E4EE6'
    },
    {
        name: 'primary-2',
        light: '#4EB0B1',
        main: '#0D9394',
        dark: '#096B6C'
    },
    {
        name: 'primary-3',
        light: '#F0718D',
        main: '#EB3D63',
        dark: '#AC2D48'
    },
    {
        name: 'primary-4',
        light: '#FFC25A',
        main: '#FFAB1D',
        dark: '#BA7D15'
    },
    {
        name: 'primary-5',
        light: '#5CAFF1',
        main: '#2092EC',
        dark: '#176BAC'
    }
];
const __TURBOPACK__default__export__ = primaryColorConfig;

})()),
"[project]/src/@layouts/LayoutWrapper.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useLayoutInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useLayoutInit.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const LayoutWrapper = (props)=>{
    // Props
    const { systemMode, verticalLayout, horizontalLayout } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useLayoutInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(systemMode);
    // Return the layout based on the layout context
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-auto",
        "data-skin": settings.skin,
        children: settings.layout === 'horizontal' ? horizontalLayout : verticalLayout
    }, void 0, false, {
        fileName: "[project]/src/@layouts/LayoutWrapper.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LayoutWrapper;

})()),
"[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Classes for vertical layout
__turbopack_esm__({
    "blankLayoutClasses": ()=>blankLayoutClasses,
    "commonLayoutClasses": ()=>commonLayoutClasses,
    "frontLayoutClasses": ()=>frontLayoutClasses,
    "horizontalLayoutClasses": ()=>horizontalLayoutClasses,
    "verticalLayoutClasses": ()=>verticalLayoutClasses
});
const verticalLayoutClasses = {
    root: 'ts-vertical-layout',
    contentWrapper: 'ts-vertical-layout-content-wrapper',
    header: 'ts-vertical-layout-header',
    headerFixed: 'ts-vertical-layout-header-fixed',
    headerStatic: 'ts-vertical-layout-header-static',
    headerFloating: 'ts-vertical-layout-header-floating',
    headerDetached: 'ts-vertical-layout-header-detached',
    headerAttached: 'ts-vertical-layout-header-attached',
    headerContentCompact: 'ts-vertical-layout-header-content-compact',
    headerContentWide: 'ts-vertical-layout-header-content-wide',
    headerBlur: 'ts-vertical-layout-header-blur',
    navbar: 'ts-vertical-layout-navbar',
    navbarContent: 'ts-vertical-layout-navbar-content',
    content: 'ts-vertical-layout-content',
    contentCompact: 'ts-vertical-layout-content-compact',
    contentWide: 'ts-vertical-layout-content-wide',
    footer: 'ts-vertical-layout-footer',
    footerStatic: 'ts-vertical-layout-footer-static',
    footerFixed: 'ts-vertical-layout-footer-fixed',
    footerDetached: 'ts-vertical-layout-footer-detached',
    footerAttached: 'ts-vertical-layout-footer-attached',
    footerContentWrapper: 'ts-vertical-layout-footer-content-wrapper',
    footerContent: 'ts-vertical-layout-footer-content',
    footerContentCompact: 'ts-vertical-layout-footer-content-compact',
    footerContentWide: 'ts-vertical-layout-footer-content-wide'
};
const horizontalLayoutClasses = {
    root: 'ts-horizontal-layout',
    contentWrapper: 'ts-horizontal-layout-content-wrapper',
    header: 'ts-horizontal-layout-header',
    headerFixed: 'ts-horizontal-layout-header-fixed',
    headerStatic: 'ts-horizontal-layout-header-static',
    headerContentCompact: 'ts-horizontal-layout-header-content-compact',
    headerContentWide: 'ts-horizontal-layout-header-content-wide',
    headerBlur: 'ts-horizontal-layout-header-blur',
    navbar: 'ts-horizontal-layout-navbar',
    navbarContent: 'ts-horizontal-layout-navbar-content',
    navigation: 'ts-horizontal-layout-navigation',
    navigationContentWrapper: 'ts-horizontal-layout-navigation-content-wrapper',
    content: 'ts-horizontal-layout-content',
    contentCompact: 'ts-horizontal-layout-content-compact',
    contentWide: 'ts-horizontal-layout-content-wide',
    footer: 'ts-horizontal-layout-footer',
    footerStatic: 'ts-horizontal-layout-footer-static',
    footerFixed: 'ts-horizontal-layout-footer-fixed',
    footerContentWrapper: 'ts-horizontal-layout-footer-content-wrapper',
    footerContent: 'ts-horizontal-layout-footer-content',
    footerContentCompact: 'ts-horizontal-layout-footer-content-compact',
    footerContentWide: 'ts-horizontal-layout-footer-content-wide'
};
const blankLayoutClasses = {
    root: 'ts-blank-layout'
};
const frontLayoutClasses = {
    root: 'ts-front-layout-root',
    header: 'ts-front-layout-header',
    navbar: 'ts-front-layout-navbar',
    navbarContent: 'ts-front-layout-navbar-content',
    footer: 'ts-front-layout-footer'
};
const commonLayoutClasses = {
    contentHeightFixed: 'ts-layout-content-height-fixed'
};

})()),
"[project]/src/@layouts/styles/shared/StyledMain.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const StyledMain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].main`
  padding: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
  ${({ isContentCompact })=>isContentCompact && `
    margin-inline: auto;
    max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
  `}

  &:has(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonLayoutClasses"].contentHeightFixed}) {
    display: flex;
    overflow: hidden;
  }
`;
const __TURBOPACK__default__export__ = StyledMain;

})()),
"[project]/src/@layouts/components/vertical/LayoutContent.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$shared$2f$StyledMain$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/styles/shared/StyledMain.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
const LayoutContent = ({ children })=>{
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    // Vars
    const contentCompact = settings.contentWidth === 'compact';
    const contentWide = settings.contentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$shared$2f$StyledMain$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        isContentCompact: contentCompact,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].content, 'flex-auto', {
            [`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].contentCompact} is-full`]: contentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].contentWide]: contentWide
        }),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/@layouts/components/vertical/LayoutContent.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LayoutContent;

})()),
"[project]/src/@layouts/styles/vertical/StyledContentWrapper.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
const StyledContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  &:has(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].content}>.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonLayoutClasses"].contentHeightFixed}) {
    max-block-size: 100dvh;
  }
`;
const __TURBOPACK__default__export__ = StyledContentWrapper;

})()),
"[project]/src/@layouts/components/horizontal/LayoutContent.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$shared$2f$StyledMain$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/styles/shared/StyledMain.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
const LayoutContent = ({ children })=>{
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    // Vars
    const contentCompact = settings.contentWidth === 'compact';
    const contentWide = settings.contentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$shared$2f$StyledMain$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        isContentCompact: contentCompact,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].content, 'flex-auto', {
            [`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].contentCompact} is-full`]: contentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].contentWide]: contentWide
        }),
        style: {
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/@layouts/components/horizontal/LayoutContent.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LayoutContent;

})()),
"[project]/src/@layouts/styles/horizontal/StyledContentWrapper.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
const StyledContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  &:has(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].content}>.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonLayoutClasses"].contentHeightFixed}) {
    max-block-size: 100dvh;
  }
`;
const __TURBOPACK__default__export__ = StyledContentWrapper;

})()),
"[project]/src/@layouts/components/horizontal/Navbar.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Navbar = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].navbar, 'flex items-center justify-between is-full'),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/@layouts/components/horizontal/Navbar.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Navbar;

})()),
"[project]/src/@layouts/styles/horizontal/StyledHeader.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const StyledHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].header`
  box-shadow: 0 4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

  [data-skin='bordered'] & {
    box-shadow: none;
    border-block-end: 1px solid var(--border-color);
  }

  &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerBlur}) {
    background-color: var(--mui-palette-background-paper);
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerBlur} {
    backdrop-filter: blur(9px);
    background-color: rgb(var(--mui-palette-background-paperChannel) / 0.85);
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerFixed} {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--header-z-index);
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerContentCompact} .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].navbar} {
    margin-inline: auto;
    max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
  }

  .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].navbar} {
    position: relative;
    min-block-size: var(--header-height);
    ${({ theme })=>`padding-block: ${theme.spacing(3)};`}
    padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
  }

  ${({ overrideStyles })=>overrideStyles}
`;
const __TURBOPACK__default__export__ = StyledHeader;

})()),
"[project]/src/@layouts/components/horizontal/Header.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// MUI Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$horizontal$2f$StyledHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/styles/horizontal/StyledHeader.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const Header = (props)=>{
    // Props
    const { children, overrideStyles } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    // Vars
    const { navbarContentWidth } = settings;
    const headerFixed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.type === 'fixed';
    const headerStatic = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.type === 'static';
    const headerBlur = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.blur === true;
    const headerContentCompact = navbarContentWidth === 'compact';
    const headerContentWide = navbarContentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$horizontal$2f$StyledHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        theme: theme,
        overrideStyles: overrideStyles,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].header, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerFixed]: headerFixed,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerStatic]: headerStatic,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerBlur]: headerBlur,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerContentCompact]: headerContentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerContentWide]: headerContentWide
        }),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/@layouts/components/horizontal/Header.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Header;

})()),
"[project]/src/@layouts/styles/vertical/StyledHeader.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const StyledHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].header`
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
  flex-shrink: 0;
  min-block-size: var(--header-height);

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerContentCompact} {
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
      &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
      &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      margin-inline: auto;
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
      &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFixed}.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      max-inline-size: calc(${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px - ${2 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px);
    }

    .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
    }
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFixed} {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--header-z-index);

    &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerBlur}).scrolled.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached},
      &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerBlur}).scrolled.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      background-color: var(--mui-palette-background-paper);
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}.scrolled .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      box-shadow: 0 4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

      [data-skin='bordered'] & {
        box-shadow: none;
        border-inline: 1px solid var(--border-color);
        border-block-end: 1px solid var(--border-color);
      }
    }
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached} .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      border-end-start-radius: var(--border-radius);
      border-end-end-radius: var(--border-radius);
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}, &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating} {
      pointer-events: none;

      & .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
        pointer-events: auto;
      }
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerBlur} {
      &.scrolled.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached},
        &.scrolled.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
        .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
        &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}
        .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
        backdrop-filter: blur(9px);
        background-color: rgb(var(--mui-palette-background-paperChannel) / 0.85);
      }

      &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating} {
        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          inset-block-start: 0;
          inset-inline: 0;
          block-size: 100%;
          background: linear-gradient(
            180deg,
            rgb(var(--mui-palette-background-defaultChannel) / 0.7) 44%,
            rgb(var(--mui-palette-background-defaultChannel) / 0.43) 73%,
            rgb(var(--mui-palette-background-defaultChannel) / 0)
          );
          backdrop-filter: blur(10px);
          mask: linear-gradient(
            var(--mui-palette-background-default),
            var(--mui-palette-background-default) 18%,
            transparent 100%
          );
        }
      }
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached}.scrolled {
      box-shadow: 0 4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

      [data-skin='bordered'] & {
        box-shadow: none;
        border-block-end: 1px solid var(--border-color);
      }
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
      &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}).${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached},
      &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}).${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      ${({ theme })=>`transition: ${theme.transitions.create([
        'box-shadow',
        'border-width',
        'padding-inline',
        'backdrop-filter'
    ])}`};
    }
    &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}).${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
      &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}).${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}.scrolled
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
    }
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating} {
    padding-block-start: 16px;

    .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      background-color: var(--mui-palette-background-paper);
      border-radius: var(--border-radius);
      padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
      box-shadow: 0 4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

      [data-skin='bordered'] & {
        box-shadow: none;
        border: 1px solid var(--border-color);
      }
    }
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}
    .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFixed}.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
    .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
    inline-size: calc(100% - ${2 * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px);
  }

  &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}).${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerStatic}
    .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
    padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
  }

  .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
    position: relative;
    padding-block: 10px;
    inline-size: 100%;
  }

  ${({ overrideStyles })=>overrideStyles}
`;
const __TURBOPACK__default__export__ = StyledHeader;

})()),
"[project]/src/@layouts/components/vertical/Navbar.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$vertical$2f$StyledHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/styles/vertical/StyledHeader.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
;
const Navbar = (props)=>{
    // Props
    const { children, overrideStyles } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        threshold: 0,
        disableHysteresis: true
    });
    // Vars
    const { navbarContentWidth } = settings;
    const headerFixed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.type === 'fixed';
    const headerStatic = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.type === 'static';
    const headerFloating = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.floating === true;
    const headerDetached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.detached === true;
    const headerAttached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.detached === false;
    const headerBlur = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.blur === true;
    const headerContentCompact = navbarContentWidth === 'compact';
    const headerContentWide = navbarContentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$vertical$2f$StyledHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        theme: theme,
        overrideStyles: overrideStyles,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].header, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFixed]: headerFixed,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerStatic]: headerStatic,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating]: headerFloating,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached]: !headerFloating && headerDetached,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached]: !headerFloating && headerAttached,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerBlur]: headerBlur,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerContentCompact]: headerContentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerContentWide]: headerContentWide,
            scrolled: trigger
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar, 'flex bs-full'),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/@layouts/components/vertical/Navbar.jsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/@layouts/components/vertical/Navbar.jsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Navbar;

})()),
"[project]/src/@layouts/styles/vertical/StyledFooter.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const StyledFooter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer`
  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentCompact} {
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerDetached} {
      margin-inline: auto;
      max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerAttached} .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWrapper} {
      margin-inline: auto;
      max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
    }
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerFixed} {
    position: sticky;
    inset-block-end: 0;
    z-index: var(--footer-z-index);

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerAttached},
      &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerDetached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWrapper} {
      background-color: var(--mui-palette-background-paper);
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerDetached} {
      pointer-events: none;
      padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;

      & .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWrapper} {
        pointer-events: auto;
        box-shadow: 0 -4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);
        border-start-start-radius: var(--border-radius);
        border-start-end-radius: var(--border-radius);

        [data-skin='bordered'] & {
          box-shadow: none;
          border-inline: 1px solid var(--border-color);
          border-block-start: 1px solid var(--border-color);
        }
      }
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerAttached} {
      box-shadow: 0 -4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

      [data-skin='bordered'] & {
        box-shadow: none;
        border-block-start: 1px solid var(--border-color);
      }
    }
  }

  & .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWrapper} {
    padding-block: 15px;
    padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
  }

  ${({ overrideStyles })=>overrideStyles}
`;
const __TURBOPACK__default__export__ = StyledFooter;

})()),
"[project]/src/@layouts/components/vertical/Footer.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$vertical$2f$StyledFooter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/styles/vertical/StyledFooter.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
const Footer = (props)=>{
    // Props
    const { children, overrideStyles } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    // Vars
    const { footerContentWidth } = settings;
    const footerDetached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.detached === true;
    const footerAttached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.detached === false;
    const footerStatic = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.type === 'static';
    const footerFixed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.type === 'fixed';
    const footerContentCompact = footerContentWidth === 'compact';
    const footerContentWide = footerContentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$vertical$2f$StyledFooter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        theme: theme,
        overrideStyles: overrideStyles,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footer, 'is-full', {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerDetached]: footerDetached,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerAttached]: footerAttached,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerStatic]: footerStatic,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerFixed]: footerFixed,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentCompact]: footerContentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWide]: footerContentWide
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWrapper,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/@layouts/components/vertical/Footer.jsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/@layouts/components/vertical/Footer.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Footer;

})()),
"[project]/src/@layouts/styles/horizontal/StyledFooter.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const StyledFooter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer`
  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerFixed} {
    position: sticky;
    inset-block-end: 0;
    z-index: var(--footer-z-index);
    background-color: var(--mui-palette-background-paper);
    box-shadow: 0 -4px 8px -4px rgb(var(--mui-mainColorChannels-shadow) / 0.42);

    [data-skin='bordered'] & {
      box-shadow: none;
      border-block-start: 1px solid var(--border-color);
    }
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentCompact} .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentWrapper} {
    margin-inline: auto;
    max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
  }

  .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentWrapper} {
    padding-block: 15px;
    padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
  }

  ${({ overrideStyles })=>overrideStyles}
`;
const __TURBOPACK__default__export__ = StyledFooter;

})()),
"[project]/src/@layouts/components/horizontal/Footer.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$horizontal$2f$StyledFooter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/styles/horizontal/StyledFooter.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
const Footer = (props)=>{
    // Props
    const { children, overrideStyles } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    // Vars
    const { footerContentWidth } = settings;
    const footerStatic = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.type === 'static';
    const footerFixed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.type === 'fixed';
    const footerContentCompact = footerContentWidth === 'compact';
    const footerContentWide = footerContentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$styles$2f$horizontal$2f$StyledFooter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        theme: theme,
        overrideStyles: overrideStyles,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footer, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerStatic]: footerStatic,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerFixed]: footerFixed,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentCompact]: footerContentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentWide]: footerContentWide
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentWrapper,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/@layouts/components/horizontal/Footer.jsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/@layouts/components/horizontal/Footer.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Footer;

})()),
"[project]/src/fake-db/apps/chat.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "db": ()=>db
});
const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2);
const db = {
    profileUser: {
        id: 1,
        avatar: '/images/avatars/1.png',
        fullName: 'John Doe',
        role: 'Admin',
        about: 'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
        status: 'online',
        settings: {
            isTwoStepAuthVerificationEnabled: true,
            isNotificationsOn: false
        }
    },
    contacts: [
        {
            id: 2,
            fullName: 'Felecia Rower',
            role: 'Frontend Developer',
            about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
            avatar: '/images/avatars/2.png',
            status: 'offline'
        },
        {
            id: 3,
            fullName: 'Adalberto Granzin',
            role: 'UI/UX Designer',
            avatarColor: 'primary',
            about: 'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
            status: 'busy'
        },
        {
            id: 4,
            fullName: 'Joaquina Weisenborn',
            role: 'Town planner',
            about: 'Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.',
            avatar: '/images/avatars/8.png',
            status: 'busy'
        },
        {
            id: 5,
            fullName: 'Margot Henschke',
            role: 'Dietitian',
            avatarColor: 'success',
            about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
            status: 'busy'
        },
        {
            id: 6,
            avatarColor: 'warning',
            fullName: 'Bridgett Omohundro',
            role: 'Designer, television/film set',
            about: 'Gummies gummi bears I love candy icing apple pie I love marzipan bear claw. I love tart biscuit I love candy canes pudding chupa chups liquorice croissant.',
            status: 'offline'
        },
        {
            id: 7,
            fullName: 'Sal Piggee',
            role: 'Marketing executive',
            about: 'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
            avatarColor: 'info',
            status: 'online'
        },
        {
            id: 8,
            fullName: 'Miguel Guelff',
            role: 'Special educational needs teacher',
            about: 'Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.',
            avatar: '/images/avatars/7.png',
            status: 'online'
        },
        {
            id: 9,
            fullName: 'Mauro Elenbaas',
            role: 'Advertising copywriter',
            about: 'Bear claw ice cream lollipop gingerbread carrot cake. Brownie gummi bears chocolate muffin croissant jelly I love marzipan wafer.',
            avatarColor: 'success',
            status: 'away'
        },
        {
            id: 10,
            avatarColor: 'error',
            fullName: 'Zenia Jacobs',
            role: 'Building surveyor',
            about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
            status: 'away'
        },
        {
            id: 11,
            fullName: 'Ramonita Veras',
            role: 'CEO',
            about: 'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
            avatar: '/images/avatars/4.png',
            status: 'online'
        },
        {
            id: 12,
            fullName: 'Lashawna Gotschall',
            role: 'Therapist, sports',
            about: 'Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.',
            avatarColor: 'info',
            status: 'online'
        },
        {
            id: 13,
            fullName: 'Rosalva Uyetake',
            role: 'Engineer, civil (consulting)',
            about: 'Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.',
            avatar: '/images/avatars/6.png',
            status: 'offline'
        },
        {
            id: 14,
            fullName: 'Cecilia Shockey',
            role: 'Database administrator',
            about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
            avatarColor: 'secondary',
            status: 'busy'
        },
        {
            id: 15,
            fullName: 'Harriett Duropan',
            role: 'Therapist, sports',
            about: 'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
            avatar: '/images/avatars/5.png',
            status: 'online'
        },
        {
            id: 16,
            fullName: 'Lauran Starner',
            role: 'AI specialist',
            about: 'Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.',
            avatarColor: 'warning',
            status: 'online'
        },
        {
            id: 17,
            fullName: 'Verla Morgano',
            role: 'Data scientist',
            about: 'Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.',
            avatar: '/images/avatars/3.png',
            status: 'online'
        }
    ],
    chats: [
        {
            id: 1,
            userId: 2,
            unseenMsgs: 1,
            chat: [
                {
                    message: "How can we help? We're here for you!",
                    time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
                    senderId: 1,
                    msgStatus: {
                        isSent: true,
                        isDelivered: true,
                        isSeen: true
                    }
                },
                {
                    message: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?',
                    time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
                    senderId: 2
                },
                {
                    message: 'It should be MUI v5 compatible.',
                    time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
                    senderId: 2,
                    msgStatus: {
                        isSent: true,
                        isDelivered: true,
                        isSeen: true
                    }
                },
                {
                    message: 'Absolutely!',
                    time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
                    senderId: 1,
                    msgStatus: {
                        isSent: true,
                        isDelivered: true,
                        isSeen: true
                    }
                },
                {
                    message: 'This admin template is built with MUI!',
                    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
                    senderId: 1,
                    msgStatus: {
                        isSent: true,
                        isDelivered: true,
                        isSeen: true
                    }
                },
                {
                    message: 'Looks clean and fresh UI. 😍',
                    time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
                    senderId: 2
                },
                {
                    message: "It's perfect for my next project.",
                    time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
                    senderId: 2
                },
                {
                    message: 'How can I purchase it?',
                    time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
                    senderId: 2
                },
                {
                    message: 'Thanks, From our official site  😇',
                    time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
                    senderId: 1,
                    msgStatus: {
                        isSent: true,
                        isDelivered: true,
                        isSeen: true
                    }
                },
                {
                    message: 'I will purchase it for sure. 👍',
                    time: previousDay,
                    senderId: 2
                }
            ]
        },
        {
            id: 2,
            userId: 3,
            unseenMsgs: 0,
            chat: [
                {
                    message: 'Hi',
                    time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
                    senderId: 1,
                    msgStatus: {
                        isSent: true,
                        isDelivered: true,
                        isSeen: true
                    }
                },
                {
                    message: 'Hello. How can I help You?',
                    time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
                    senderId: 3
                },
                {
                    message: 'Can I get details of my last transaction I made last month? 🤔',
                    time: 'Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)',
                    senderId: 1,
                    msgStatus: {
                        isSent: true,
                        isDelivered: true,
                        isSeen: true
                    }
                },
                {
                    message: 'We need to check if we can provide you such information.',
                    time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
                    senderId: 3
                },
                {
                    message: 'I will inform you as I get update on this.',
                    time: 'Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)',
                    senderId: 3
                },
                {
                    message: 'If it takes long you can mail me at my mail address.',
                    time: dayBeforePreviousDay,
                    senderId: 1,
                    msgStatus: {
                        isSent: true,
                        isDelivered: false,
                        isSeen: false
                    }
                }
            ]
        },
        {
            id: 3,
            userId: 10,
            unseenMsgs: 0,
            chat: [
                {
                    message: 'Hello, I am a building surveyor and I would like to schedule a survey for your building.',
                    time: 'Mon Dec 13 2021 11:00:00 GMT+0000 (GMT)',
                    senderId: 10
                },
                {
                    message: 'Sure, could you please provide more details about the survey?',
                    time: 'Mon Dec 13 2021 11:01:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'The survey will include a thorough inspection of the building to assess its condition and identify any potential issues.',
                    time: 'Mon Dec 13 2021 11:02:00 GMT+0000 (GMT)',
                    senderId: 10
                },
                {
                    message: 'Okay, when do you plan to conduct the survey?',
                    time: 'Mon Dec 13 2021 11:03:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'I am available to conduct the survey next week. Does that work for you?',
                    time: 'Mon Dec 13 2021 11:04:00 GMT+0000 (GMT)',
                    senderId: 10
                },
                {
                    message: "Yes, that works for me. Let's schedule it for next Wednesday.",
                    time: 'Mon Dec 13 2021 11:05:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'Great. I will send you a confirmation email with the details.',
                    time: 'Mon Dec 13 2021 11:06:00 GMT+0000 (GMT)',
                    senderId: 10
                },
                {
                    message: 'Thank you, looking forward to it.',
                    time: 'Mon Dec 13 2021 11:07:00 GMT+0000 (GMT)',
                    senderId: 1
                }
            ]
        },
        {
            id: 4,
            userId: 8,
            unseenMsgs: 0,
            chat: [
                {
                    message: 'Hello, I would like to arrange a professional meeting.',
                    time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
                    senderId: 1,
                    msgStatus: {
                        isSent: true,
                        isDelivered: true,
                        isSeen: true
                    }
                },
                {
                    message: 'Sure, could you please provide more details about the meeting?',
                    time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
                    senderId: 8
                },
                {
                    message: 'The meeting is about our next project plan.',
                    time: 'Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)',
                    senderId: 1,
                    msgStatus: {
                        isSent: true,
                        isDelivered: true,
                        isSeen: true
                    }
                },
                {
                    message: 'Okay, I will prepare the necessary documents for the meeting.',
                    time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
                    senderId: 8
                },
                {
                    message: 'Thank you, looking forward to it.',
                    time: 'Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)',
                    senderId: 1
                }
            ]
        },
        {
            id: 5,
            userId: 16,
            unseenMsgs: 0,
            chat: [
                {
                    message: 'Hey, have you heard about the new AI model GPT-4?',
                    time: 'Mon Dec 13 2021 09:00:00 GMT+0000 (GMT)',
                    senderId: 16
                },
                {
                    message: "No, I haven't. What's new about it?",
                    time: 'Mon Dec 13 2021 09:01:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: "It's supposed to be even more powerful and accurate than GPT-3. It can generate even more realistic text.",
                    time: 'Mon Dec 13 2021 09:02:00 GMT+0000 (GMT)',
                    senderId: 16
                },
                {
                    message: "That sounds interesting. I'll have to check it out.",
                    time: 'Mon Dec 13 2021 09:03:00 GMT+0000 (GMT)',
                    senderId: 1
                }
            ]
        },
        {
            id: 6,
            userId: 11,
            unseenMsgs: 1,
            chat: [
                {
                    message: "Hey, have you thought about our company's future plans?",
                    time: 'Mon Dec 13 2021 10:00:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'Yes, I have been thinking about it. We need to focus on AI and machine learning.',
                    time: 'Mon Dec 13 2021 10:01:00 GMT+0000 (GMT)',
                    senderId: 11
                },
                {
                    message: 'I agree. These technologies are the future. We should also consider investing in cloud computing.',
                    time: 'Mon Dec 13 2021 10:02:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'Absolutely. Cloud computing will give us the flexibility and scalability we need.',
                    time: 'Mon Dec 13 2021 10:03:00 GMT+0000 (GMT)',
                    senderId: 11
                },
                {
                    message: 'We should also think about expanding our team. We will need more talent to achieve our goals.',
                    time: 'Mon Dec 13 2021 10:04:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'Yes, hiring the right people is crucial. We should start looking for candidates as soon as possible.',
                    time: 'Mon Dec 13 2021 10:05:00 GMT+0000 (GMT)',
                    senderId: 11
                },
                {
                    message: "Great. Let's start working on a plan then.",
                    time: 'Mon Dec 13 2021 10:06:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: "Sounds good. Let's do it.",
                    time: 'Mon Dec 13 2021 10:07:00 GMT+0000 (GMT)',
                    senderId: 11
                }
            ]
        },
        {
            id: 7,
            userId: 17,
            unseenMsgs: 0,
            chat: [
                {
                    message: 'Hello, as a data scientist, I have been analyzing our user data and found some interesting patterns.',
                    time: 'Mon Dec 13 2021 12:00:00 GMT+0000 (GMT)',
                    senderId: 17
                },
                {
                    message: 'That sounds interesting. Could you please share more details?',
                    time: 'Mon Dec 13 2021 12:01:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'Sure, our users are most active during the evening hours and they mostly use our app on weekends.',
                    time: 'Mon Dec 13 2021 12:02:00 GMT+0000 (GMT)',
                    senderId: 17
                },
                {
                    message: "That's valuable information. We can use this to schedule our app updates and maintenance work.",
                    time: 'Mon Dec 13 2021 12:03:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'Exactly. We can also use this information to target our marketing campaigns.',
                    time: 'Mon Dec 13 2021 12:04:00 GMT+0000 (GMT)',
                    senderId: 17
                },
                {
                    message: 'Great work. Keep it up.',
                    time: 'Mon Dec 13 2021 12:05:00 GMT+0000 (GMT)',
                    senderId: 1
                }
            ]
        },
        {
            id: 8,
            userId: 14,
            unseenMsgs: 1,
            chat: [
                {
                    message: 'Hello, as a database administrator, I have been monitoring our databases and I noticed a significant increase in the load.',
                    time: 'Mon Dec 13 2021 13:00:00 GMT+0000 (GMT)',
                    senderId: 14
                },
                {
                    message: "That's concerning. Do you have any idea what might be causing this?",
                    time: 'Mon Dec 13 2021 13:01:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'I suspect it might be due to the recent increase in user registrations. I will investigate further and optimize our databases accordingly.',
                    time: 'Mon Dec 13 2021 13:02:00 GMT+0000 (GMT)',
                    senderId: 14
                },
                {
                    message: 'That sounds like a good plan. Let me know if you need any help.',
                    time: 'Mon Dec 13 2021 13:03:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'Will do. I will keep you updated on the progress.',
                    time: 'Mon Dec 13 2021 13:04:00 GMT+0000 (GMT)',
                    senderId: 14
                },
                {
                    message: 'Thank you, I appreciate your efforts.',
                    time: 'Mon Dec 13 2021 13:05:00 GMT+0000 (GMT)',
                    senderId: 1
                },
                {
                    message: 'Your Welcome!😊',
                    time: 'Mon Dec 13 2021 13:06:00 GMT+0000 (GMT)',
                    senderId: 14
                }
            ]
        }
    ]
};

})()),
"[project]/src/fake-db/apps/calendar.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Vars
__turbopack_esm__({
    "events": ()=>events
});
const date = new Date();
const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
const nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1);
const prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1);
const events = [
    {
        id: '1',
        url: '',
        title: 'Design Review',
        start: date,
        end: nextDay,
        allDay: false,
        extendedProps: {
            calendar: 'Business'
        }
    },
    {
        id: '2',
        url: '',
        title: 'Meeting With Client',
        start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
        allDay: true,
        extendedProps: {
            calendar: 'Business'
        }
    },
    {
        id: '3',
        url: '',
        title: 'Family Trip',
        allDay: true,
        start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
        extendedProps: {
            calendar: 'Holiday'
        }
    },
    {
        id: '4',
        url: '',
        title: "Doctor's Appointment",
        start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
        allDay: true,
        extendedProps: {
            calendar: 'Personal'
        }
    },
    {
        id: '5',
        url: '',
        title: 'Dart Game?',
        start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
        allDay: true,
        extendedProps: {
            calendar: 'ETC'
        }
    },
    {
        id: '6',
        url: '',
        title: 'Meditation',
        start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
        allDay: true,
        extendedProps: {
            calendar: 'Personal'
        }
    },
    {
        id: '7',
        url: '',
        title: 'Dinner',
        start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
        allDay: true,
        extendedProps: {
            calendar: 'Family'
        }
    },
    {
        id: '8',
        url: '',
        title: 'Product Review',
        start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
        allDay: true,
        extendedProps: {
            calendar: 'Business'
        }
    },
    {
        id: '9',
        url: '',
        title: 'Monthly Meeting',
        start: nextMonth,
        end: nextMonth,
        allDay: true,
        extendedProps: {
            calendar: 'Business'
        }
    },
    {
        id: '10',
        url: '',
        title: 'Monthly Checkup',
        start: prevMonth,
        end: prevMonth,
        allDay: true,
        extendedProps: {
            calendar: 'Personal'
        }
    }
];

})()),
"[project]/src/fake-db/apps/kanban.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "db": ()=>db
});
const db = {
    columns: [
        {
            id: 1,
            title: 'In Progress',
            taskIds: [
                1,
                2
            ]
        },
        {
            id: 2,
            title: 'In Review',
            taskIds: [
                3,
                4
            ]
        },
        {
            id: 3,
            title: 'Done',
            taskIds: [
                5,
                6
            ]
        }
    ],
    tasks: [
        {
            id: 1,
            title: 'Research FAQ page UX',
            badgeText: [
                'UX'
            ],
            attachments: 4,
            comments: 12,
            assigned: [
                {
                    src: '/images/avatars/1.png',
                    name: 'John Doe'
                },
                {
                    src: '/images/avatars/5.png',
                    name: 'Tom Smith'
                },
                {
                    src: '/images/avatars/4.png',
                    name: 'Emily Davis'
                }
            ],
            dueDate: new Date(new Date().getFullYear(), 11, 30)
        },
        {
            id: 2,
            title: 'Review Javascript code',
            badgeText: [
                'Code Review'
            ],
            attachments: 2,
            comments: 8,
            assigned: [
                {
                    src: '/images/avatars/3.png',
                    name: 'Tom Smith'
                },
                {
                    src: '/images/avatars/2.png',
                    name: 'Emily Davis'
                }
            ],
            dueDate: new Date(new Date().getFullYear(), 5, 30)
        },
        {
            id: 3,
            title: 'Review completed Apps',
            badgeText: [
                'Dashboard'
            ],
            attachments: 8,
            comments: 17,
            assigned: [
                {
                    src: '/images/avatars/8.png',
                    name: 'Jane Smith'
                },
                {
                    src: '/images/avatars/7.png',
                    name: 'David Smith'
                }
            ],
            dueDate: new Date(new Date().getFullYear(), 8, 15)
        },
        {
            id: 4,
            title: 'Find new images for pages',
            badgeText: [
                'Images'
            ],
            attachments: 10,
            comments: 18,
            assigned: [
                {
                    src: '/images/avatars/1.png',
                    name: 'John Doe'
                },
                {
                    src: '/images/avatars/2.png',
                    name: 'Emily Davis'
                },
                {
                    src: '/images/avatars/3.png',
                    name: 'Tom Smith'
                },
                {
                    src: '/images/avatars/6.png',
                    name: 'David Smith'
                }
            ],
            image: '/images/apps/kanban/plant.png',
            dueDate: new Date(new Date().getFullYear(), 9, 20)
        },
        {
            id: 5,
            title: 'Forms & tables section',
            badgeText: [
                'App'
            ],
            attachments: 5,
            comments: 14,
            assigned: [
                {
                    src: '/images/avatars/8.png',
                    name: 'Jane Smith'
                },
                {
                    src: '/images/avatars/3.png',
                    name: 'Tom Smith'
                },
                {
                    src: '/images/avatars/2.png',
                    name: 'Emily Davis'
                }
            ],
            dueDate: new Date(new Date().getFullYear(), 10, 10)
        },
        {
            id: 6,
            title: 'Complete charts & maps',
            badgeText: [
                'Charts & Map'
            ],
            attachments: 6,
            comments: 21,
            assigned: [
                {
                    src: '/images/avatars/4.png',
                    name: 'Emily Davis'
                }
            ],
            dueDate: new Date(new Date().getFullYear(), 11, 5)
        }
    ]
};

})()),
"[project]/src/fake-db/apps/email.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "db": ()=>db
});
const db = {
    emails: [
        {
            id: 1,
            from: {
                email: 'tommys@mail.com',
                name: 'Tommy Sicilia',
                avatar: '/images/avatars/1.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@mail.com'
                }
            ],
            subject: 'How to Succeed with Your Shopify Store',
            cc: [],
            bcc: [],
            message: '<p>Hi John,</p><p>How to Choose the Perfect Shopify Theme and Build Your Online Store Fast! (keywords: how to create a shopify store, how to start selling on shopify)</p><p>Shopify Tutorials That Will Save You 5 Hours of Time and $150 A Month!</p><p>Can I Start My Own ECommerce Business Without Knowing How To Code?</p><p>The One Thing All Shopify Entrepreneurs Have in Common</p><p>Regrads,</p><p>Tommy Sicilia</p>',
            attachments: [
                {
                    fileName: 'log.txt',
                    thumbnail: '/images/icons/txt.png',
                    url: '',
                    size: '5mb'
                },
                {
                    fileName: 'performance.xls',
                    thumbnail: '/images/icons/xls.png',
                    url: '',
                    size: '10mb'
                }
            ],
            isStarred: false,
            labels: [
                'private'
            ],
            time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
            replies: [],
            folder: 'inbox',
            isRead: true
        },
        {
            id: 2,
            from: {
                email: 'tressag@mail.com',
                name: 'Tressa Gass',
                avatar: '/images/avatars/6.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@mail.com'
                }
            ],
            subject: 'Please find attached the latest Company Report',
            cc: [],
            bcc: [
                'menka@mail.com'
            ],
            message: ' <p>Hello John,</p><p>I hope you are doing well.</p><p> I am sending over a company report for company. It is a PDF file.</p><p>Please let me know if you want to schedule a call or any other questions.</p><p>Regrads</p><p>Tressa Gass</p>',
            attachments: [
                {
                    fileName: 'company-report.pdf',
                    thumbnail: '/images/icons/pdf.png',
                    url: '',
                    size: '32mb'
                }
            ],
            isStarred: true,
            labels: [
                'company',
                'private'
            ],
            time: 'Mon Dec 10 2018 07:55:00 GMT+0000 (GMT)',
            replies: [],
            folder: 'inbox',
            isRead: true
        },
        {
            id: 3,
            from: {
                email: 'hettiem@mail.com',
                name: 'Hettie Mcerlean',
                avatar: '/images/avatars/3.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@mail.com'
                }
            ],
            subject: 'Your order has been delivered',
            cc: [],
            bcc: [],
            message: '<p>Hello John,</p><p>Your order has just been delivered. Here is the delivery confirmation number: #569443</p><p>Regrads</p><p>If you have any questions, please feel free to reach out to our customer service team at customerService@email.com</p><p>Hettie Mcerlean</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'company'
            ],
            time: 'Mon Dec 10 2018 08:35:00 GMT+0000 (GMT)',
            replies: [],
            folder: 'spam',
            isRead: true
        },
        {
            id: 4,
            from: {
                email: 'louettae@mail.com',
                name: 'Louetta Esses',
                avatar: '/images/avatars/4.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@mail.com'
                }
            ],
            subject: 'Update Can Change Your Personal Life',
            cc: [],
            bcc: [],
            message: '<p>Hi John,</p><p>5 Biggest Ways in Which the Latest iOS Update Can Change Your Personal Life</p><p>1.Group FaceTime</p><p>2. Memoji & Animoji </p><p>3. Person to Person Payments</p><p>4. Screen Time </p><p>5. Shortcuts App on Macs </p><p>Regrads,</p><p>Louetta Esses</p>',
            attachments: [
                {
                    fileName: 'update.doc',
                    thumbnail: '/images/icons/doc.png',
                    url: '',
                    size: '32mb'
                }
            ],
            isStarred: false,
            labels: [
                'important'
            ],
            time: 'Mon Dec 11 2018 09:04:10 GMT+0000 (GMT)',
            replies: [],
            folder: 'inbox',
            isRead: true
        },
        {
            id: 5,
            from: {
                email: 'bposvner0@zdnet.com',
                name: 'Bobbie Posvner',
                avatar: '/images/avatars/8.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@dot.gov'
                }
            ],
            subject: 'Your opinion matters to us. Tell us how you feel!',
            cc: [],
            bcc: [],
            message: "<p>Hello John,</p><p>Recently you shopped with us and we know your order has been delivered to you.</p><p>Would you please write a review? It's really important to us.</p><p>Regards,</p><p>Bobbie Posvner</p>",
            attachments: [],
            isStarred: true,
            labels: [
                'private'
            ],
            time: 'Tue Dec 12 2018 11:55:00 GMT+0000 (GMT)',
            replies: [],
            folder: 'spam',
            isRead: true
        },
        {
            id: 6,
            from: {
                email: 'rgilder1@illinois.edu',
                name: 'Rebecca Gilder',
                avatar: '/images/avatars/6.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@google.co.uk'
                }
            ],
            subject: 'World Tourism Day Event Invitation',
            cc: [],
            bcc: [],
            message: '<p>Hello John, </p><p>You have been invited to the World Tourism Day event on this weekend.</p><p>The event starts at 10:00 AM and ends at 5:00PM.</p><p>Regards</p><p>Rebecca Gilder</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'personal'
            ],
            time: 'Thu Dec 13 2018 08:25:00 GMT+0000 (GMT)',
            replies: [],
            folder: 'trash',
            isRead: true
        },
        {
            id: 7,
            from: {
                email: 'swilby2@yandex.ru',
                name: 'Shawn Wilby',
                avatar: '/images/avatars/1.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@altervista.org'
                }
            ],
            subject: 'Delivery Note',
            cc: [],
            bcc: [],
            message: '<p>Hello John, </p><p>Shipping Details:</p><p>Order Number: 82080</p><p>Delivered-to: <strong>John Doe</strong></p><p>Email: <strong>johndoe@altervista.org</strong></p><p>Address: <strong>99 El ABCD San Francisco, CA. United States </strong></p><p>Thank You for being with Us!</p><p>Regards</p><p>Shawn Wilby</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'company'
            ],
            time: 'Fri Dec 14 2018 04:49:23 GMT+0000 (GMT)',
            replies: [],
            folder: 'draft',
            isRead: true
        },
        {
            id: 8,
            from: {
                email: 'wmannering3@mozilla.org',
                name: 'Waldemar Mannering',
                avatar: '/images/avatars/5.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@sciencedaily.com'
                }
            ],
            subject: 'Refer friends. Get rewards.',
            cc: [],
            bcc: [],
            message: '<p>Hi John, </p><p>At Auto Sales, we understand that our customers are our greatest resource, and the only real way that an automotive dealership can grow is through word of mouth.</p><p>If you had a wonderful experience with us, the greatest thanks you can give is to pass along your praise and positive experience with Auto Sales to your family, friends, and colleagues.</p><p>As a reward for promoting us, we will pay you $200 for every referral you send our way who purchases a pre-owned vehicle of under $15,000. For every purchase over $15,000, we will pay you a referral of $300.</p><p>Regards</p><p>Waldemar Mannering</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'private'
            ],
            time: 'Tue Dec 15 2018 11:02:28 GMT+0000 (GMT)',
            replies: [],
            folder: 'inbox',
            isRead: false
        },
        {
            id: 9,
            from: {
                email: 'hfrostdyke4@scientificamerican.com',
                name: 'Heath Frostdyke',
                avatar: '/images/avatars/1.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@weibo.com'
                }
            ],
            subject: 'Good Hair Day!',
            cc: [],
            bcc: [],
            message: '<p>Hello John, </p><p>Good Hair Day is all about recognizing the significance a good hair day can have on your confidence, self-esteem, and overall happiness. A good hair day is different for everyone and this year we want to help you achieve your best hair!</p><p>Book with our stylist today to get 10% discount.</p><p>Regards</p><p>Heath Frostdyke</p>',
            attachments: [],
            isStarred: true,
            labels: [
                'personal'
            ],
            time: 'Tue Jan 01 2018 18:31:19 GMT+0000 (GMT)',
            replies: [],
            folder: 'trash',
            isRead: false
        },
        {
            id: 10,
            from: {
                email: 'pjentzsch5@tamu.edu',
                name: 'Paulita Jentzsch',
                avatar: '/images/avatars/7.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@skype.com'
                }
            ],
            subject: 'Travel to Europe',
            cc: [],
            bcc: [],
            message: '<p>Hello John, </p><p>Use code WILD_TRAVELER to get 25% off on flight bookings to Europe.</p><p>Offer only valid till the weekends.</p><p>Regards</p><p>Paulita Jentzsch</p>',
            attachments: [],
            isStarred: true,
            labels: [
                'important'
            ],
            time: 'Tue Jan 03 2018 08:05:33 GMT+0000 (GMT)',
            replies: [],
            folder: 'draft',
            isRead: false
        },
        {
            id: 11,
            from: {
                email: 'lminghetti6@yale.edu',
                name: 'Lowell Minghetti',
                avatar: '/images/avatars/4.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@fda.gov'
                }
            ],
            subject: 'Cyber Monday Sale!',
            cc: [],
            bcc: [],
            message: '<p>Hi John, </p><p>Take 30% Off Your Entire Purchase!</p><p>This monday you can take 30% off your entire purchase! Simply enter the promo code HGASNC18 during your checkout to activate your savings! </p><p>Regards</p><p>Lowell Minghetti</p>',
            attachments: [
                {
                    fileName: 'ElementumLigula.js',
                    thumbnail: '/images/icons/js.png',
                    url: '',
                    size: '29mb'
                }
            ],
            isStarred: false,
            labels: [
                'company'
            ],
            time: 'Tue Jan 03 2018 01:05:20 GMT+0000 (GMT)',
            replies: [],
            folder: 'trash',
            isRead: true
        },
        {
            id: 12,
            from: {
                email: 'efinessy7@sbwire.com',
                name: 'Eugenie Finessy',
                avatar: '/images/avatars/2.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@odnoklassniki.ru'
                }
            ],
            subject: "BOOK LOVER'S DAY",
            cc: [],
            bcc: [],
            message: '<p>Hello John, </p><p>Whenever you read a good book, you are making efforts to open a new door to let more light come in.</p><p>May you are blessed with more and more books. Happy National Book Lover’s Day to you.</p><p>Regards</p><p>Eugenie Finessy</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'personal'
            ],
            time: 'Tue Jan 04 2018 21:26:54 GMT+0000 (GMT)',
            replies: [],
            folder: 'sent',
            isRead: true
        },
        {
            id: 13,
            from: {
                email: 'tmckeurton8@163.com',
                name: 'Tadio McKeurton',
                avatar: '/images/avatars/3.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@nifty.com'
                }
            ],
            subject: 'Handmade Goods',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>Painted wood blocks, stackable wood blocks</p> <p>Fall is almost here and these little blocks are the perfect décor to begin your fall decorating! These stacked blocks say Count Your Blessings and are in beautiful fall colors.</p><p>Regards</p><p>Tadio McKeurton</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'important'
            ],
            time: 'Tue Jan 05 2018 19:00:00 GMT+0000 (GMT)',
            replies: [],
            folder: 'draft',
            isRead: true
        },
        {
            id: 14,
            from: {
                email: 'ebegg9@wikia.com',
                name: 'Eb Begg',
                avatar: '/images/avatars/8.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@51.la'
                }
            ],
            subject: 'App Update',
            cc: [],
            bcc: [],
            message: '<p>Hello John, </p><p>We have released the update 8.6.1 for the app</p><p>Update your application. Don’t miss our new Feature</p><p>Regards</p><p>Eb Begg</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'company'
            ],
            time: 'Tue Jan 06 2018 23:12:13 GMT+0000 (GMT)',
            replies: [],
            folder: 'inbox',
            isRead: true
        },
        {
            id: 15,
            from: {
                email: 'mspata@sina.com.cn',
                name: 'Modestine Spat',
                avatar: '/images/avatars/3.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@oracle.com'
                }
            ],
            subject: 'Password Reset',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>I just wanted to let you know that your password has been changed. You can safely ignore this email if you requested this change.</p><p>Otherwise, please do let us know and we will be here to help. </p><p>Regards</p><p>Modestine Spat</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'company'
            ],
            time: 'Tue Jan 07 2018 12:25:03 GMT+0000 (GMT)',
            replies: [],
            folder: 'inbox',
            isRead: false
        },
        {
            id: 16,
            from: {
                email: 'cprandob@rambler.ru',
                name: 'Chase Prando',
                avatar: '/images/avatars/4.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@vistaprint.com'
                }
            ],
            subject: 'Course Update',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>You have completed more than 68% of the course</p><p>We noticed that you have not attended or advanced the course for over a week.</p><p>It is very important for us that you finish your studies, as regular classes are a guarantee of knowledge and successful completion!</p><p>For help, we have allocated a free opportunity to contact the course teacher within 2 days</p><p>Regards</p><p>Chase Prando</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'company'
            ],
            time: 'Tue Jan 08 2018 00:36:40 GMT+0000 (GMT)',
            replies: [],
            folder: 'sent',
            isRead: true
        },
        {
            id: 17,
            from: {
                email: 'nbartlesc@merriam-webster.com',
                name: 'Normand Bartles',
                avatar: '/images/avatars/8.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@si.edu'
                }
            ],
            subject: 'Earth Hour',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>Earth Hour has always drawn its power from the people - and this year was no exception. We showed that despite the physical distance, we were still able to unite digitally to speak up for nature louder than ever.</p><p>You can still take part in the earth hour virtual spotlight.</p><p>Regards</p><p>Normand Bartles</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'personal'
            ],
            time: 'Tue Jan 09 2018 22:06:50 GMT+0000 (GMT)',
            replies: [],
            folder: 'spam',
            isRead: true
        },
        {
            id: 18,
            from: {
                email: 'rgennd@dedecms.com',
                name: 'Robin Genn',
                avatar: '/images/avatars/6.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@about.com'
                }
            ],
            subject: "Happy Teacher's Day!",
            cc: [],
            bcc: [],
            message: "<p>Happy Teacher's Day John, </p><p>Teachers have to lead by example, and you have always been an excellent example to follow. As a student, I feel very grateful to have such a great mentor in my life. Happy Teacher’s Day!</p><p>Especially for Teacher's Day, we held a postcard competition for students. We invite you to enjoy this creativity. The kids tried very hard!</p><p>Regards</p><p>Robin Genn</p>",
            attachments: [],
            isStarred: true,
            labels: [
                'personal'
            ],
            time: 'Tue Jan 10 2018 01:51:24 GMT+0000 (GMT)',
            replies: [],
            folder: 'spam',
            isRead: true
        },
        {
            id: 19,
            from: {
                email: 'eramelote@webeden.co.uk',
                name: 'Emmalynn Ramelot',
                avatar: '/images/avatars/8.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@tinypic.com'
                }
            ],
            subject: 'Newly Improved Product',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>The Newly Improved Product is Here!</p><p>What is New in Finance?</p><p>1. Dual Authentication</p><p>2. Transparent System</p><p>3. Beta Test </p><p>Regards</p><p>Emmalynn Ramelot</p>',
            attachments: [],
            isStarred: true,
            labels: [
                'personal'
            ],
            time: 'Tue Jan 11 2018 14:25:46 GMT+0000 (GMT)',
            replies: [],
            folder: 'spam',
            isRead: false
        },
        {
            id: 20,
            from: {
                email: 'pcuzenf@mediafire.com',
                name: 'Penni Cuzen',
                avatar: '/images/avatars/8.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@google.es'
                }
            ],
            subject: 'Meet your new banker.',
            cc: [],
            bcc: [],
            message: "<p>Hey John, </p><p>Having a direct human contact that understands the finance industry can take your project to the next level.</p><p>Amelia is that person for you. She's happy to help with any of your project needs.</p><p>Regards</p><p>Penni Cuzen</p>",
            attachments: [
                {
                    fileName: 'bank-statement.pdf',
                    thumbnail: '/images/icons/pdf.png',
                    url: '',
                    size: '4mb'
                }
            ],
            isStarred: false,
            labels: [
                'private'
            ],
            time: 'Tue Jan 12 2018 04:16:10 GMT+0000 (GMT)',
            replies: [
                {
                    id: 101,
                    from: {
                        email: 'johndoe@mail.com',
                        name: 'John Doe',
                        avatar: '/images/avatars/6.png'
                    },
                    to: [
                        {
                            name: 'me',
                            email: 'hettiem@mail.com'
                        }
                    ],
                    subject: 'It was the best sandcastle he had ever seen.',
                    cc: [],
                    bcc: [],
                    message: '<p>Hello Hettie,</p><p>Marshmallow cookie jelly liquorice. Powder macaroon cake pastry biscuit. Cotton candy cotton candy jelly chocolate bar. Sesame snaps candy gummi bears cake cookie jujubes. Sweet I love sweet roll. Sesame snaps I love marzipan. Jelly powder tootsie roll. Marshmallow pudding cookie fruitcake liquorice powder. I love I love cookie chupa chups fruitcake ice cream I love biscuit I love. Tiramisu apple pie candy canes cookie gummies. Donut toffee bear claw topping jelly-o. Cupcake icing muffin. Cookie brownie wafer pie sweet. Icing sesame snaps halvah toffee marshmallow lemon drops jelly.</p><p>Tiramisu candy canes powder. Powder chocolate bar halvah liquorice cake I love danish. Cake wafer apple pie. Bear claw fruitcake I love marzipan dessert marzipan lollipop. Halvah gingerbread jelly chupa chups tiramisu I love wafer gummi bears. Candy powder caramels candy gummies. Tart tart cupcake brownie. Bear claw gummies toffee. Tiramisu donut cake chocolate bar. Halvah chocolate bar donut jelly-o. Icing candy brownie chocolate. Pastry bear claw halvah gummies chocolate bar chocolate. Apple pie danish wafer I love biscuit.</p><p>Regrads,</p><p>John Doe</p>',
                    attachments: [],
                    isStarred: false,
                    labels: [],
                    time: 'Mon Dec 15 2018 10:56:00 GMT+0000 (GMT)',
                    replies: [],
                    folder: 'inbox',
                    isRead: false
                },
                {
                    id: 102,
                    from: {
                        email: 'hettiem@mail.com',
                        name: 'Hettie Mcerlean',
                        avatar: '/images/avatars/1.png'
                    },
                    to: [
                        {
                            name: 'me',
                            email: 'johndoe@mail.com'
                        }
                    ],
                    subject: 'I’m a living furnace.',
                    cc: [],
                    bcc: [],
                    message: '<p>Oat cake tart danish jelly beans brownie I love. Liquorice I love lollipop chocolate cake carrot cake toffee. Tart muffin candy canes croissant sugar plum lollipop. Macaroon cheesecake marshmallow powder sweet roll bonbon candy apple pie candy canes.</p><p>Regrads,</p><p>Hettie Mcerlean</p>',
                    attachments: [],
                    isStarred: false,
                    labels: [],
                    time: 'Mon Dec 16 2018 11:25:00 GMT+0000 (GMT)',
                    replies: [],
                    folder: 'inbox',
                    isRead: false
                }
            ],
            folder: 'spam',
            isRead: false
        },
        {
            id: 21,
            from: {
                email: 'abaldersong@utexas.edu',
                name: 'Ardis Balderson',
                avatar: '/images/avatars/2.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@ow.ly'
                }
            ],
            subject: 'Bank transfer initiated.',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>Bank transfers initiated before 7 PM ET on business days will typically be available in your bank account the next business day. Business days are Mon-Fri, excluding bank holidays.</p><p>Transfers are reviewed which may result in delays or funds being frozen or removed from your account. Learn more</p><p>Regards</p><p>Ardis Balderson</p>',
            attachments: [],
            isStarred: true,
            labels: [
                'company'
            ],
            time: new Date(new Date().getTime() - 7 * 60 * 60 * 1000),
            replies: [],
            folder: 'inbox',
            isRead: false
        },
        {
            id: 22,
            from: {
                email: 'dmallallh@ask.com',
                name: 'Dagmar Mallall',
                avatar: '/images/avatars/8.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@furl.net'
                }
            ],
            subject: 'Accounting software',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>Take on the market with our powerful platforms.</p><p>Log in online anytime, anywhere on your Mac, PC, tablet or phone and see up-to-date financials. Accounting software with all the time-saving tools you need to grow your business.</p><p>Regards</p><p>Dagmar Mallall</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'company'
            ],
            time: new Date(new Date().getTime() - 5 * 20 * 60 * 1000),
            replies: [],
            folder: 'draft',
            isRead: false
        },
        {
            id: 23,
            from: {
                email: 'nmacgaughyi@aol.com',
                name: 'Nada MacGaughy',
                avatar: '/images/avatars/3.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@cnet.com'
                }
            ],
            subject: 'Labor Day Sale',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>There is a time for business and a time for pleasure. There is a time to work and a time to rest. Labor Day is your time for pleasure and rest. Enjoy!</p><p>Sale starting today! Save up to 25% off for all lessons.</p><p>Regards</p><p>Nada MacGaughy</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'private'
            ],
            time: new Date(new Date().getTime() - 2 * 60 * 60 * 1000),
            replies: [],
            folder: 'trash',
            isRead: false
        },
        {
            id: 24,
            from: {
                email: 'douldcottj@yellowpages.com',
                name: 'Dalila Ouldcott',
                avatar: '/images/avatars/1.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@github.io'
                }
            ],
            subject: 'Order Feedback',
            cc: [],
            bcc: [],
            message: "<p>Hey John, </p><p>What did you think o your recent purchase?</p><p> We'd love to hear your feedback on your recent order. Please share your experience in a review to help other pet parents just like you.</p><p>Regards</p><p>Dalila Ouldcott</p>",
            attachments: [
                {
                    fileName: 'example.doc',
                    thumbnail: '/images/icons/doc.png',
                    url: '',
                    size: '21mb'
                }
            ],
            isStarred: false,
            labels: [
                'personal'
            ],
            time: new Date(new Date().getTime() - 1 * 30 * 60 * 1000),
            replies: [
                {
                    id: 103,
                    from: {
                        email: 'johndoe@mail.com',
                        name: 'John Doe',
                        avatar: '/images/avatars/1.png'
                    },
                    to: [
                        {
                            name: 'me',
                            email: 'hettiem@mail.com'
                        }
                    ],
                    subject: '🎯 Focused impactful open system',
                    cc: [],
                    bcc: [],
                    message: '<p>Hello Hettie,</p><p>Marshmallow cookie jelly liquorice. Powder macaroon cake pastry biscuit. Cotton candy cotton candy jelly chocolate bar. Sesame snaps candy gummi bears cake cookie jujubes. Sweet I love sweet roll. Sesame snaps I love marzipan. Jelly powder tootsie roll. Marshmallow pudding cookie fruitcake liquorice powder. I love I love cookie chupa chups fruitcake ice cream I love biscuit I love. Tiramisu apple pie candy canes cookie gummies. Donut toffee bear claw topping jelly-o. Cupcake icing muffin. Cookie brownie wafer pie sweet. Icing sesame snaps halvah toffee marshmallow lemon drops jelly.</p><p>Tiramisu candy canes powder. Powder chocolate bar halvah liquorice cake I love danish. Cake wafer apple pie. Bear claw fruitcake I love marzipan dessert marzipan lollipop. Halvah gingerbread jelly chupa chups tiramisu I love wafer gummi bears. Candy powder caramels candy gummies. Tart tart cupcake brownie. Bear claw gummies toffee. Tiramisu donut cake chocolate bar. Halvah chocolate bar donut jelly-o. Icing candy brownie chocolate. Pastry bear claw halvah gummies chocolate bar chocolate. Apple pie danish wafer I love biscuit.</p><p>Regrads,</p><p>John Doe</p>',
                    attachments: [],
                    isStarred: false,
                    labels: [],
                    time: 'Mon Dec 10 2018 10:56:00 GMT+0000 (GMT)',
                    replies: [],
                    folder: 'inbox',
                    isRead: false
                },
                {
                    id: 104,
                    from: {
                        email: 'hettiem@mail.com',
                        name: 'Hettie Mcerlean',
                        avatar: '/images/avatars/3.png'
                    },
                    to: [
                        {
                            name: 'me',
                            email: 'johndoe@mail.com'
                        }
                    ],
                    subject: 'Profound systemic alliance 🎉 🎊',
                    cc: [],
                    bcc: [],
                    message: '<p>Oat cake tart danish jelly beans brownie I love. Liquorice I love lollipop chocolate cake carrot cake toffee. Tart muffin candy canes croissant sugar plum lollipop. Macaroon cheesecake marshmallow powder sweet roll bonbon candy apple pie candy canes.</p><p>Regrads,</p><p>Hettie Mcerlean</p>',
                    attachments: [],
                    isStarred: false,
                    labels: [],
                    time: 'Mon Dec 10 2018 11:25:00 GMT+0000 (GMT)',
                    replies: [],
                    folder: 'inbox',
                    isRead: false
                }
            ],
            folder: 'inbox',
            isRead: true
        },
        {
            id: 25,
            from: {
                email: 'lkubicek0@cdbaby.com',
                name: 'Lockwood Kubicek',
                avatar: '/images/avatars/2.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@github.io'
                }
            ],
            subject: 'Finally Start Running',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>How TO Finally Start Running</p><p>Order an individual training and nutrition program from our specialists! Only now there is a 20% discount! </p><p>Regards</p><p>Lockwood Kubicek</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'private'
            ],
            time: new Date(new Date().getTime() - 1 * 30 * 60 * 1000),
            replies: [],
            folder: 'inbox',
            isRead: true
        },
        {
            id: 26,
            from: {
                email: 'mosgarby1@accuweather.com',
                name: 'Milena Osgarby',
                avatar: '/images/avatars/3.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@github.io'
                }
            ],
            subject: 'Eco Food',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>Hey! We replenish our assortment with healthy eco food. On this occasion, we really want to play the same game with you! Can you guess what category of new products we are adding?🍯🍓🍵</p><p>Test your intuition, answer the letter!🔮 All members will receive a discount 20% on purchases in the next email!💌</p><p>Regards</p><p>Milena Osgarby</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'important'
            ],
            time: new Date(new Date().getTime() - 1 * 30 * 60 * 1000),
            replies: [
                {
                    id: 105,
                    from: {
                        email: 'johndoe@mail.com',
                        name: 'John Doe',
                        avatar: '/images/avatars/6.png'
                    },
                    to: [
                        {
                            name: 'me',
                            email: 'hettiem@mail.com'
                        }
                    ],
                    subject: 'It was the best sandcastle he had ever seen.',
                    cc: [],
                    bcc: [],
                    message: '<p>Hello Hettie,</p><p>Marshmallow cookie jelly liquorice. Powder macaroon cake pastry biscuit. Cotton candy cotton candy jelly chocolate bar. Sesame snaps candy gummi bears cake cookie jujubes. Sweet I love sweet roll. Sesame snaps I love marzipan. Jelly powder tootsie roll. Marshmallow pudding cookie fruitcake liquorice powder. I love I love cookie chupa chups fruitcake ice cream I love biscuit I love. Tiramisu apple pie candy canes cookie gummies. Donut toffee bear claw topping jelly-o. Cupcake icing muffin. Cookie brownie wafer pie sweet. Icing sesame snaps halvah toffee marshmallow lemon drops jelly.</p><p>Tiramisu candy canes powder. Powder chocolate bar halvah liquorice cake I love danish. Cake wafer apple pie. Bear claw fruitcake I love marzipan dessert marzipan lollipop. Halvah gingerbread jelly chupa chups tiramisu I love wafer gummi bears. Candy powder caramels candy gummies. Tart tart cupcake brownie. Bear claw gummies toffee. Tiramisu donut cake chocolate bar. Halvah chocolate bar donut jelly-o. Icing candy brownie chocolate. Pastry bear claw halvah gummies chocolate bar chocolate. Apple pie danish wafer I love biscuit.</p><p>Regrads,</p><p>John Doe</p>',
                    attachments: [],
                    isStarred: false,
                    labels: [],
                    time: 'Mon Dec 15 2018 10:56:00 GMT+0000 (GMT)',
                    replies: [],
                    folder: 'inbox',
                    isRead: false
                },
                {
                    id: 106,
                    from: {
                        email: 'hettiem@mail.com',
                        name: 'Hettie Mcerlean',
                        avatar: '/images/avatars/1.png'
                    },
                    to: [
                        {
                            name: 'me',
                            email: 'johndoe@mail.com'
                        }
                    ],
                    subject: 'I’m a living furnace.',
                    cc: [],
                    bcc: [],
                    message: '<p>Oat cake tart danish jelly beans brownie I love. Liquorice I love lollipop chocolate cake carrot cake toffee. Tart muffin candy canes croissant sugar plum lollipop. Macaroon cheesecake marshmallow powder sweet roll bonbon candy apple pie candy canes.</p><p>Regrads,</p><p>Hettie Mcerlean</p>',
                    attachments: [],
                    isStarred: false,
                    labels: [],
                    time: 'Mon Dec 16 2018 11:25:00 GMT+0000 (GMT)',
                    replies: [],
                    folder: 'inbox',
                    isRead: false
                }
            ],
            folder: 'inbox',
            isRead: true
        },
        {
            id: 27,
            from: {
                email: 'pBuffay@email.com',
                name: 'Pheoebe Buffay',
                avatar: '/images/avatars/6.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@github.io'
                }
            ],
            subject: 'Personal Insurance',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>Your personal insurance agent</p><p>If you have any problems with questions about your insurance, you can contact your personal agent.</p><p>Regards</p><p>Pheoebe Buffay</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'personal'
            ],
            time: new Date(new Date().getTime() - 1 * 30 * 60 * 1000),
            replies: [],
            folder: 'inbox',
            isRead: true
        },
        {
            id: 28,
            from: {
                email: 'gabramow2@elegantthemes.com',
                name: 'Gabriel Abramow',
                avatar: '/images/avatars/4.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@github.io'
                }
            ],
            subject: 'Forgot your password?',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>There was a request to change your password!</p><p>If did not make this request, just ignore this email. Otherwise, please click the button below to change your password:</p><p>Regards</p><p>Gabriel Abramow</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'company'
            ],
            time: new Date(new Date().getTime() - 1 * 30 * 60 * 1000),
            replies: [],
            folder: 'inbox',
            isRead: true
        },
        {
            id: 29,
            from: {
                email: 'tolrenshaw3@twitpic.com',
                name: 'Temple Olrenshaw',
                avatar: '/images/avatars/5.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@github.io'
                }
            ],
            subject: 'April Fools Day Movies',
            cc: [],
            bcc: [],
            message: '<p>Hey John, </p><p>The Best Movies on April Fool’s Day</p><p>Finding any genuine April Fool’s moments in movies is kind of like trying to peek through a wheat field to find individual stalks, but at the very least there are a few movies that seem to have the spirit of April Fool’s Day down when it comes to their sense of humor.</p><p>So instead of finding individual scenes about the day in question it seems like more fun to go ahead and treat the reader to a few films that might be great to watch this coming Sunday when the day of fools is upon us.</p><p>Regards</p><p>Temple Olrenshaw</p>',
            attachments: [],
            isStarred: false,
            labels: [
                'company'
            ],
            time: new Date(new Date().getTime() - 1 * 30 * 60 * 1000),
            replies: [
                {
                    id: 107,
                    from: {
                        email: 'johndoe@mail.com',
                        name: 'John Doe',
                        avatar: '/images/avatars/1.png'
                    },
                    to: [
                        {
                            name: 'me',
                            email: 'hettiem@mail.com'
                        }
                    ],
                    subject: 'The underground bunker was filled with chips and candy.',
                    cc: [],
                    bcc: [],
                    message: '<p>Hello Hettie,</p><p>Marshmallow cookie jelly liquorice. Powder macaroon cake pastry biscuit. Cotton candy cotton candy jelly chocolate bar. Sesame snaps candy gummi bears cake cookie jujubes. Sweet I love sweet roll. Sesame snaps I love marzipan. Jelly powder tootsie roll. Marshmallow pudding cookie fruitcake liquorice powder. I love I love cookie chupa chups fruitcake ice cream I love biscuit I love. Tiramisu apple pie candy canes cookie gummies. Donut toffee bear claw topping jelly-o. Cupcake icing muffin. Cookie brownie wafer pie sweet. Icing sesame snaps halvah toffee marshmallow lemon drops jelly.</p><p>Tiramisu candy canes powder. Powder chocolate bar halvah liquorice cake I love danish. Cake wafer apple pie. Bear claw fruitcake I love marzipan dessert marzipan lollipop. Halvah gingerbread jelly chupa chups tiramisu I love wafer gummi bears. Candy powder caramels candy gummies. Tart tart cupcake brownie. Bear claw gummies toffee. Tiramisu donut cake chocolate bar. Halvah chocolate bar donut jelly-o. Icing candy brownie chocolate. Pastry bear claw halvah gummies chocolate bar chocolate. Apple pie danish wafer I love biscuit.</p><p>Regrads,</p><p>John Doe</p>',
                    attachments: [],
                    isStarred: false,
                    labels: [],
                    time: 'Mon Jan 5 2019 10:56:00 GMT+0000 (GMT)',
                    replies: [],
                    folder: 'inbox',
                    isRead: false
                },
                {
                    id: 108,
                    from: {
                        email: 'hettiem@mail.com',
                        name: 'Hettie Mcerlean',
                        avatar: '/images/avatars/1.png'
                    },
                    to: [
                        {
                            name: 'me',
                            email: 'johndoe@mail.com'
                        }
                    ],
                    subject: 'The truth is that you pay for your lifestyle in hours.',
                    cc: [],
                    bcc: [],
                    message: '<p>Oat cake tart danish jelly beans brownie I love. Liquorice I love lollipop chocolate cake carrot cake toffee. Tart muffin candy canes croissant sugar plum lollipop. Macaroon cheesecake marshmallow powder sweet roll bonbon candy apple pie candy canes.</p><p>Regrads,</p><p>Hettie Mcerlean</p>',
                    attachments: [],
                    isStarred: false,
                    labels: [],
                    time: 'Mon Jan 8 2019 11:25:00 GMT+0000 (GMT)',
                    replies: [],
                    folder: 'inbox',
                    isRead: false
                }
            ],
            folder: 'inbox',
            isRead: true
        },
        {
            id: 30,
            from: {
                email: 'peterwill@mail.com',
                name: 'Peter Williamson',
                avatar: '/images/avatars/1.png'
            },
            to: [
                {
                    name: 'me',
                    email: 'johndoe@mail.com'
                }
            ],
            subject: 'Meeting with the client',
            cc: [],
            bcc: [],
            message: '<p>Hi John,</p><p>Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p>Regrads,</p><p>Kristeen Sicilia</p>',
            attachments: [],
            isStarred: true,
            labels: [
                'private'
            ],
            time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
            replies: [],
            folder: 'inbox',
            isRead: true
        }
    ]
};

})()),
"[project]/src/redux-store/slices/chat.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "addNewChat": ()=>addNewChat,
    "chatSlice": ()=>chatSlice,
    "default": ()=>__TURBOPACK__default__export__,
    "getActiveUserData": ()=>getActiveUserData,
    "sendMsg": ()=>sendMsg,
    "setUserStatus": ()=>setUserStatus
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fake$2d$db$2f$apps$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/fake-db/apps/chat.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const chatSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'chat',
    initialState: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fake$2d$db$2f$apps$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"],
    reducers: {
        getActiveUserData: (state, action)=>{
            const activeUser = state.contacts.find((user)=>user.id === action.payload);
            const chat = state.chats.find((chat)=>chat.userId === action.payload);
            if (chat && chat.unseenMsgs > 0) {
                chat.unseenMsgs = 0;
            }
            if (activeUser) {
                state.activeUser = activeUser;
            }
        },
        addNewChat: (state, action)=>{
            const { id } = action.payload;
            state.contacts.find((contact)=>{
                if (contact.id === id && !state.chats.find((chat)=>chat.userId === contact.id)) {
                    state.chats.unshift({
                        id: state.chats.length + 1,
                        userId: contact.id,
                        unseenMsgs: 0,
                        chat: []
                    });
                }
            });
        },
        setUserStatus: (state, action)=>{
            state.profileUser = {
                ...state.profileUser,
                status: action.payload.status
            };
        },
        sendMsg: (state, action)=>{
            const { msg } = action.payload;
            const existingChat = state.chats.find((chat)=>chat.userId === state.activeUser?.id);
            if (existingChat) {
                existingChat.chat.push({
                    message: msg,
                    time: new Date(),
                    senderId: state.profileUser.id,
                    msgStatus: {
                        isSent: true,
                        isDelivered: false,
                        isSeen: false
                    }
                });
                // Remove the chat from its current position
                state.chats = state.chats.filter((chat)=>chat.userId !== state.activeUser?.id);
                // Add the chat back to the beginning of the array
                state.chats.unshift(existingChat);
            }
        }
    }
});
const { getActiveUserData, addNewChat, setUserStatus, sendMsg } = chatSlice.actions;
const __TURBOPACK__default__export__ = chatSlice.reducer;

})()),
"[project]/src/redux-store/slices/calendar.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "addEvent": ()=>addEvent,
    "calendarSlice": ()=>calendarSlice,
    "default": ()=>__TURBOPACK__default__export__,
    "deleteEvent": ()=>deleteEvent,
    "filterAllCalendarLabels": ()=>filterAllCalendarLabels,
    "filterCalendarLabel": ()=>filterCalendarLabel,
    "filterEvents": ()=>filterEvents,
    "selectedEvent": ()=>selectedEvent,
    "updateEvent": ()=>updateEvent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fake$2d$db$2f$apps$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/fake-db/apps/calendar.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const initialState = {
    events: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fake$2d$db$2f$apps$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["events"],
    filteredEvents: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fake$2d$db$2f$apps$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["events"],
    selectedEvent: null,
    selectedCalendars: [
        'Personal',
        'Business',
        'Family',
        'Holiday',
        'ETC'
    ]
};
const filterEventsUsingCheckbox = (events, selectedCalendars)=>{
    return events.filter((event)=>selectedCalendars.includes(event.extendedProps?.calendar));
};
const calendarSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'calendar',
    initialState: initialState,
    reducers: {
        filterEvents: (state)=>{
            state.filteredEvents = state.events;
        },
        addEvent: (state, action)=>{
            const newEvent = {
                ...action.payload,
                id: `${parseInt(state.events[state.events.length - 1]?.id ?? '') + 1}`
            };
            state.events.push(newEvent);
        },
        updateEvent: (state, action)=>{
            state.events = state.events.map((event)=>{
                if (action.payload._def && event.id === action.payload._def.publicId) {
                    return {
                        id: event.id,
                        url: action.payload._def.url,
                        title: action.payload._def.title,
                        allDay: action.payload._def.allDay,
                        end: action.payload._instance.range.end,
                        start: action.payload._instance.range.start,
                        extendedProps: action.payload._def.extendedProps
                    };
                } else if (event.id === action.payload.id) {
                    return action.payload;
                } else {
                    return event;
                }
            });
        },
        deleteEvent: (state, action)=>{
            state.events = state.events.filter((event)=>event.id !== action.payload);
        },
        selectedEvent: (state, action)=>{
            state.selectedEvent = action.payload;
        },
        filterCalendarLabel: (state, action)=>{
            const index = state.selectedCalendars.indexOf(action.payload);
            if (index !== -1) {
                state.selectedCalendars.splice(index, 1);
            } else {
                state.selectedCalendars.push(action.payload);
            }
            state.events = filterEventsUsingCheckbox(state.filteredEvents, state.selectedCalendars);
        },
        filterAllCalendarLabels: (state, action)=>{
            state.selectedCalendars = action.payload ? [
                'Personal',
                'Business',
                'Family',
                'Holiday',
                'ETC'
            ] : [];
            state.events = filterEventsUsingCheckbox(state.filteredEvents, state.selectedCalendars);
        }
    }
});
const { filterEvents, addEvent, updateEvent, deleteEvent, selectedEvent, filterCalendarLabel, filterAllCalendarLabels } = calendarSlice.actions;
const __TURBOPACK__default__export__ = calendarSlice.reducer;

})()),
"[project]/src/redux-store/slices/kanban.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "addColumn": ()=>addColumn,
    "addTask": ()=>addTask,
    "default": ()=>__TURBOPACK__default__export__,
    "deleteColumn": ()=>deleteColumn,
    "deleteTask": ()=>deleteTask,
    "editColumn": ()=>editColumn,
    "editTask": ()=>editTask,
    "getCurrentTask": ()=>getCurrentTask,
    "kanbanSlice": ()=>kanbanSlice,
    "updateColumnTaskIds": ()=>updateColumnTaskIds,
    "updateColumns": ()=>updateColumns
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fake$2d$db$2f$apps$2f$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/fake-db/apps/kanban.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const kanbanSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'kanban',
    initialState: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fake$2d$db$2f$apps$2f$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"],
    reducers: {
        addColumn: (state, action)=>{
            const maxId = Math.max(...state.columns.map((column)=>column.id));
            const newColumn = {
                id: maxId + 1,
                title: action.payload,
                taskIds: []
            };
            state.columns.push(newColumn);
        },
        editColumn: (state, action)=>{
            const { id, title } = action.payload;
            const column = state.columns.find((column)=>column.id === id);
            if (column) {
                column.title = title;
            }
        },
        deleteColumn: (state, action)=>{
            const { columnId } = action.payload;
            const column = state.columns.find((column)=>column.id === columnId);
            state.columns = state.columns.filter((column)=>column.id !== columnId);
            if (column) {
                state.tasks = state.tasks.filter((task)=>!column.taskIds.includes(task.id));
            }
        },
        updateColumns: (state, action)=>{
            state.columns = action.payload;
        },
        updateColumnTaskIds: (state, action)=>{
            const { id, tasksList } = action.payload;
            state.columns = state.columns.map((column)=>{
                if (column.id === id) {
                    return {
                        ...column,
                        taskIds: tasksList.map((task)=>task.id)
                    };
                }
                return column;
            });
        },
        addTask: (state, action)=>{
            const { columnId, title } = action.payload;
            const newTask = {
                id: state.tasks[state.tasks.length - 1].id + 1,
                title
            };
            const column = state.columns.find((column)=>column.id === columnId);
            if (column) {
                column.taskIds.push(newTask.id);
            }
            state.tasks.push(newTask);
            return state;
        },
        editTask: (state, action)=>{
            const { id, title, badgeText, dueDate } = action.payload;
            const task = state.tasks.find((task)=>task.id === id);
            if (task) {
                task.title = title;
                task.badgeText = badgeText;
                task.dueDate = dueDate;
            }
        },
        deleteTask: (state, action)=>{
            const taskId = action.payload;
            state.tasks = state.tasks.filter((task)=>task.id !== taskId);
            state.columns = state.columns.map((column)=>{
                return {
                    ...column,
                    taskIds: column.taskIds.filter((id)=>id !== taskId)
                };
            });
        },
        getCurrentTask: (state, action)=>{
            state.currentTaskId = action.payload;
        }
    }
});
const { addColumn, editColumn, deleteColumn, updateColumns, updateColumnTaskIds, addTask, editTask, deleteTask, getCurrentTask } = kanbanSlice.actions;
const __TURBOPACK__default__export__ = kanbanSlice.reducer;

})()),
"[project]/src/redux-store/slices/email.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "deleteTrashEmails": ()=>deleteTrashEmails,
    "emailSlice": ()=>emailSlice,
    "filterEmails": ()=>filterEmails,
    "getCurrentEmail": ()=>getCurrentEmail,
    "moveEmailsToFolder": ()=>moveEmailsToFolder,
    "navigateEmails": ()=>navigateEmails,
    "toggleLabel": ()=>toggleLabel,
    "toggleReadEmails": ()=>toggleReadEmails,
    "toggleStarEmail": ()=>toggleStarEmail
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fake$2d$db$2f$apps$2f$email$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/fake-db/apps/email.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
// Constants
const initialState = {
    emails: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$fake$2d$db$2f$apps$2f$email$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].emails,
    filteredEmails: []
};
const emailSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'email',
    initialState,
    reducers: {
        // Filter all emails based on folder and label
        filterEmails: (state, action)=>{
            const { emails, folder, label, uniqueLabels } = action.payload;
            state.filteredEmails = emails.filter((email)=>{
                if (folder === 'starred' && email.folder !== 'trash') {
                    return email.isStarred;
                } else if (uniqueLabels.includes(label) && email.folder !== 'trash') {
                    return email.labels.includes(label);
                } else {
                    return email.folder === folder;
                }
            });
        },
        // Move all selected emails to folder
        moveEmailsToFolder: (state, action)=>{
            const { emailIds, folder } = action.payload;
            state.emails = state.emails.map((email)=>{
                return emailIds.includes(email.id) ? {
                    ...email,
                    folder
                } : email;
            });
        },
        // Delete all selected emails from trash
        deleteTrashEmails: (state, action)=>{
            const { emailIds } = action.payload;
            state.emails = state.emails.filter((email)=>!emailIds.includes(email.id));
        },
        // Toggle read/unread status of all selected emails
        toggleReadEmails: (state, action)=>{
            const { emailIds } = action.payload;
            const doesContainUnread = state.filteredEmails.filter((email)=>emailIds.includes(email.id)).some((email)=>!email.isRead);
            const areAllUnread = state.filteredEmails.filter((email)=>emailIds.includes(email.id)).every((email)=>!email.isRead);
            const areAllRead = state.filteredEmails.filter((email)=>emailIds.includes(email.id)).every((email)=>email.isRead);
            state.emails = state.emails.map((email)=>{
                if (emailIds.includes(email.id) && (doesContainUnread || areAllUnread)) {
                    return {
                        ...email,
                        isRead: true
                    };
                } else if (emailIds.includes(email.id) && areAllRead) {
                    return {
                        ...email,
                        isRead: false
                    };
                }
                return email;
            });
        },
        // Toggle label to all selected emails
        toggleLabel: (state, action)=>{
            const { emailIds, label } = action.payload;
            state.emails = state.emails.map((email)=>{
                if (emailIds.includes(email.id)) {
                    return email.labels.includes(label) ? {
                        ...email,
                        labels: email.labels.filter((l)=>l !== label)
                    } : {
                        ...email,
                        labels: [
                            ...email.labels,
                            label
                        ]
                    };
                }
                return email;
            });
        },
        // Toggle starred status of email
        toggleStarEmail: (state, action)=>{
            const { emailId } = action.payload;
            state.emails = state.emails.map((email)=>{
                return email.id === emailId ? {
                    ...email,
                    isStarred: !email.isStarred
                } : email;
            });
        },
        // Get current email and mark it as read
        getCurrentEmail: (state, action)=>{
            state.currentEmailId = action.payload;
            state.emails = state.emails.map((email)=>{
                return email.id === action.payload && !email.isRead ? {
                    ...email,
                    isRead: true
                } : email;
            });
        },
        // Navigate to next or previous email
        navigateEmails: (state, action)=>{
            const { type, emails: filteredEmails, currentEmailId } = action.payload;
            const currentIndex = filteredEmails.findIndex((email)=>email.id === currentEmailId);
            if (type === 'next' && currentIndex < filteredEmails.length - 1) {
                state.currentEmailId = filteredEmails[currentIndex + 1].id;
            } else if (type === 'prev' && currentIndex > 0) {
                state.currentEmailId = filteredEmails[currentIndex - 1].id;
            }
            // Mark email as read on navigation
            if (state.currentEmailId) {
                state.emails.filter((email)=>email.id === state.currentEmailId)[0].isRead = true;
            }
        }
    }
});
const { filterEmails, moveEmailsToFolder, deleteTrashEmails, toggleReadEmails, toggleLabel, toggleStarEmail, getCurrentEmail, navigateEmails } = emailSlice.actions;
const __TURBOPACK__default__export__ = emailSlice.reducer;

})()),
"[project]/src/redux-store/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Third-party Imports
__turbopack_esm__({
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2d$store$2f$slices$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux-store/slices/chat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2d$store$2f$slices$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux-store/slices/calendar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2d$store$2f$slices$2f$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux-store/slices/kanban.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2d$store$2f$slices$2f$email$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux-store/slices/email.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        chatReducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2d$store$2f$slices$2f$chat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        calendarReducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2d$store$2f$slices$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        kanbanReducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2d$store$2f$slices$2f$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        emailReducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2d$store$2f$slices$2f$email$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});

})()),
"[project]/src/redux-store/ReduxProvider.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2d$store$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux-store/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const ReduxProvider = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2d$store$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/redux-store/ReduxProvider.jsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = ReduxProvider;

})()),
"[project]/src/libs/styles/AppReactToastify.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/styled.js [app-ssr] (ecmascript) <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
// Styled Components
const ToastifyWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ theme })=>{
    // Hooks
    const isSmallScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((theme)=>theme.breakpoints.down(480));
    return {
        ...isSmallScreen && {
            '& .Toastify__toast-container': {
                marginBlockStart: theme.spacing(3),
                marginInline: theme.spacing(3),
                width: 'calc(100dvw - 1.5rem)'
            }
        },
        '& .Toastify__toast': {
            minBlockSize: 46,
            borderRadius: 'var(--mui-shape-borderRadius)',
            padding: theme.spacing(1.5, 2.5),
            backgroundColor: 'var(--mui-palette-background-paper)',
            boxShadow: 'var(--mui-customShadows-md)',
            '[data-skin="bordered"] &': {
                boxShadow: 'none',
                border: '1px solid var(--mui-palette-divider)'
            },
            ...isSmallScreen && {
                marginBlockEnd: theme.spacing(4)
            },
            '&:not(.custom-toast)': {
                '& .Toastify__toast-body': {
                    color: 'var(--mui-palette-text-primary)'
                },
                '&.Toastify__toast--success': {
                    '& .Toastify__toast-icon svg': {
                        fill: 'var(--mui-palette-success-main)'
                    }
                },
                '&.Toastify__toast--error': {
                    '& .Toastify__toast-icon svg': {
                        fill: 'var(--mui-palette-error-main)'
                    }
                },
                '&.Toastify__toast--warning': {
                    '& .Toastify__toast-icon svg': {
                        fill: 'var(--mui-palette-warning-main)'
                    }
                },
                '&.Toastify__toast--info': {
                    '& .Toastify__toast-icon svg': {
                        fill: 'var(--mui-palette-info-main)'
                    }
                }
            }
        },
        '& .Toastify__toast-body': {
            margin: 0,
            lineHeight: 1.467,
            fontSize: theme.typography.body1.fontSize
        },
        '& .Toastify__toast-icon': {
            marginRight: theme.spacing(3),
            height: 20,
            width: 20,
            '& .Toastify__spinner': {
                margin: 3,
                height: 14,
                width: 14
            }
        },
        '& .Toastify__close-button': {
            color: 'var(--mui-palette-text-primary)'
        }
    };
});
const AppReactToastify = (props)=>{
    const { boxProps, direction = 'ltr', ...rest } = props;
    const positionMap = {
        'top-right': 'top-left',
        'top-left': 'top-right',
        'bottom-left': 'bottom-right',
        'bottom-right': 'bottom-left',
        'top-center': 'top-center',
        'bottom-center': 'bottom-center'
    };
    const position = direction === 'rtl' ? positionMap[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].toastPosition] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].toastPosition;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastifyWrapper, {
        ...boxProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {
            rtl: direction === 'rtl',
            position: position,
            ...rest
        }, void 0, false, {
            fileName: "[project]/src/libs/styles/AppReactToastify.jsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/libs/styles/AppReactToastify.jsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AppReactToastify;

})()),
"[project]/src/utils/string.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ensurePrefix": ()=>ensurePrefix,
    "withoutPrefix": ()=>withoutPrefix,
    "withoutSuffix": ()=>withoutSuffix
});
const ensurePrefix = (str, prefix)=>str.startsWith(prefix) ? str : `${prefix}${str}`;
const withoutSuffix = (str, suffix)=>str.endsWith(suffix) ? str.slice(0, -suffix.length) : str;
const withoutPrefix = (str, prefix)=>str.startsWith(prefix) ? str.slice(prefix.length) : str;

})()),
"[project]/src/utils/i18n.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Config Imports
__turbopack_esm__({
    "getLocalizedUrl": ()=>getLocalizedUrl,
    "isUrlMissingLocale": ()=>isUrlMissingLocale
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$i18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/i18n.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/string.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const isUrlMissingLocale = (url)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$i18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i18n"].locales.every((locale)=>!(url.startsWith(`/${locale}/`) || url === `/${locale}`));
};
const getLocalizedUrl = (url, languageCode)=>{
    if (!url || !languageCode) throw new Error("URL or Language Code can't be empty");
    return isUrlMissingLocale(url) ? `/${languageCode}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensurePrefix"])(url, '/')}` : url;
};

})()),
"[project]/src/utils/getInitials.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Returns initials from string
__turbopack_esm__({
    "getInitials": ()=>getInitials
});
const getInitials = (string)=>string.split(/\s/).reduce((response, word)=>response += word.slice(0, 1), '');

})()),
"[project]/src/assets/logo.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/logo.584abf2b.jpg");
})()),
"[project]/src/assets/logo.jpg.mjs { IMAGE => \"[project]/src/assets/logo.jpg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/logo.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$logo$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 400,
    height: 400,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1lxdHUY3UyCBRtZMDB9+v0oA//9k=",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/src/data/searchData.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const data = [
    {
        id: '1',
        name: 'CRM',
        url: '/dashboards/crm',
        icon: 'ri-pie-chart-2-line',
        section: 'Dashboards'
    },
    {
        id: '2',
        name: 'Analytics Dashboard',
        url: '/dashboards/analytics',
        icon: 'ri-bar-chart-line',
        section: 'Dashboards'
    },
    {
        id: '3',
        name: 'eCommerce Dashboard',
        url: '/dashboards/ecommerce',
        icon: 'ri-shopping-cart-2-line',
        section: 'Dashboards'
    },
    {
        id: '4',
        name: 'Academy Dashboard',
        url: '/dashboards/academy',
        icon: 'ri-book-open-line',
        section: 'Dashboards'
    },
    {
        id: '5',
        name: 'Logistics Dashboard',
        url: '/dashboards/logistics',
        icon: 'ri-truck-line',
        section: 'Dashboards'
    },
    {
        id: '6',
        name: 'Landing Front',
        url: '/front-pages/landing-page',
        excludeLang: true,
        icon: 'ri-article-line',
        section: 'Front Pages'
    },
    {
        id: '7',
        name: 'Pricing Front',
        url: '/front-pages/pricing',
        excludeLang: true,
        icon: 'ri-money-dollar-circle-line',
        section: 'Front Pages'
    },
    {
        id: '8',
        name: 'Payment Front',
        url: '/front-pages/payment',
        excludeLang: true,
        icon: 'ri-bank-card-line',
        section: 'Front Pages'
    },
    {
        id: '9',
        name: 'Checkout Front',
        url: '/front-pages/checkout',
        excludeLang: true,
        icon: 'ri-shopping-cart-2-line',
        section: 'Front Pages'
    },
    {
        id: '10',
        name: 'Help Center Front',
        url: '/front-pages/help-center',
        excludeLang: true,
        icon: 'ri-question-line',
        section: 'Front Pages'
    },
    {
        id: '11',
        name: 'eCommerce - Dashboard',
        url: '/apps/ecommerce/dashboard',
        icon: 'ri-shopping-cart-2-line',
        section: 'Apps'
    },
    {
        id: '12',
        name: 'eCommerce - Product List',
        url: '/apps/ecommerce/products/list',
        icon: 'ri-file-list-line',
        section: 'Apps'
    },
    {
        id: '13',
        name: 'eCommerce - Add New Product',
        url: '/apps/ecommerce/products/add',
        icon: 'ri-add-line',
        section: 'Apps'
    },
    {
        id: '14',
        name: 'eCommerce - Product Category',
        url: '/apps/ecommerce/products/category',
        icon: 'ri-list-unordered',
        section: 'Apps'
    },
    {
        id: '15',
        name: 'eCommerce - Order List',
        url: '/apps/ecommerce/orders/list',
        icon: 'ri-list-unordered',
        section: 'Apps'
    },
    {
        id: '16',
        name: 'eCommerce - Order Details',
        url: '/apps/ecommerce/orders/details/5434',
        icon: 'ri-play-list-line',
        section: 'Apps'
    },
    {
        id: '21',
        name: 'eCommerce - Settings',
        url: '/apps/ecommerce/settings',
        icon: 'ri-settings-2-line',
        section: 'Apps'
    },
    {
        id: '22',
        name: 'Academy - Dashboard',
        url: '/apps/academy/dashboard',
        icon: 'ri-book-open-line',
        section: 'Apps'
    },
    {
        id: '28',
        name: 'Chat',
        url: '/apps/chat',
        icon: 'ri-wechat-line',
        section: 'Apps'
    },
    {
        id: '31',
        name: 'Invoice List',
        url: '/apps/invoice/list',
        icon: 'ri-file-list-3-line',
        section: 'Apps'
    },
    {
        id: '32',
        name: 'Invoice Preview',
        url: '/invoice/preview/4987',
        icon: 'ri-file-list-line',
        section: 'Apps'
    },
    {
        id: '33',
        name: 'Invoice Edit',
        url: '/invoice/edit/4987',
        icon: 'ri-file-edit-line',
        section: 'Apps'
    },
    {
        id: '34',
        name: 'Invoice Add',
        url: '/invoice/add',
        icon: 'ri-file-add-line',
        section: 'Apps'
    },
    {
        id: '35',
        name: 'User List',
        url: '/user/list',
        icon: 'ri-file-user-line',
        section: 'Apps'
    },
    {
        id: '36',
        name: 'User View',
        url: '/user/view',
        icon: 'ri-file-list-2-line',
        section: 'Apps'
    },
    {
        id: '39',
        name: 'User Profile',
        url: '/pages/user-profile',
        icon: 'ri-user-3-line',
        section: 'Pages'
    },
    {
        id: '40',
        name: 'Account Settings',
        url: '/pages/account-settings',
        icon: 'ri-user-settings-line',
        section: 'Pages'
    },
    {
        id: '44',
        name: 'Under Maintenance',
        url: '/pages/misc/under-maintenance',
        icon: 'ri-settings-2-line',
        section: 'Pages'
    },
    {
        id: '45',
        name: 'Page Not Found - 404',
        url: '/pages/misc/404-not-found',
        icon: 'ri-error-warning-line',
        section: 'Pages'
    },
    {
        id: '46',
        name: 'Not Authorized - 401',
        url: '/pages/misc/401-not-authorized',
        icon: 'ri-user-forbid-line',
        section: 'Pages'
    },
    {
        id: '47',
        name: 'Login V1',
        url: '/pages/auth/login-v1',
        icon: 'ri-login-box-line',
        section: 'Pages'
    },
    {
        id: '48',
        name: 'Login V2',
        url: '/pages/auth/login-v2',
        icon: 'ri-login-box-line',
        section: 'Pages'
    },
    {
        id: '49',
        name: 'Register V1',
        url: '/pages/auth/register-v1',
        icon: 'ri-user-add-line',
        section: 'Pages'
    },
    {
        id: '50',
        name: 'Register V2',
        url: '/pages/auth/register-v2',
        icon: 'ri-user-add-line',
        section: 'Pages'
    },
    {
        id: '51',
        name: 'Register Multi-Steps',
        url: '/pages/auth/register-multi-steps',
        icon: 'ri-user-add-line',
        section: 'Pages'
    },
    {
        id: '52',
        name: 'Forgot Password V1',
        url: '/pages/auth/forgot-password-v1',
        icon: 'ri-lock-password-line',
        section: 'Pages'
    },
    {
        id: '53',
        name: 'Forgot Password V2',
        url: '/pages/auth/forgot-password-v2',
        icon: 'ri-lock-password-line',
        section: 'Pages'
    },
    {
        id: '54',
        name: 'Reset Password V1',
        url: '/pages/auth/reset-password-v1',
        icon: 'ri-loop-right-line',
        section: 'Pages'
    },
    {
        id: '55',
        name: 'Reset Password V2',
        url: '/pages/auth/reset-password-v2',
        icon: 'ri-loop-right-line',
        section: 'Pages'
    },
    {
        id: '56',
        name: 'Verify Email V1',
        url: '/pages/auth/verify-email-v1',
        icon: 'ri-mail-check-line',
        section: 'Pages'
    },
    {
        id: '57',
        name: 'Verify Email V2',
        url: '/pages/auth/verify-email-v2',
        icon: 'ri-mail-check-line',
        section: 'Pages'
    },
    {
        id: '58',
        name: 'Two Steps V1',
        url: '/pages/auth/two-steps-v1',
        icon: 'ri-device-line',
        section: 'Pages'
    },
    {
        id: '59',
        name: 'Two Steps V2',
        url: '/pages/auth/two-steps-v2',
        icon: 'ri-device-line',
        section: 'Pages'
    },
    {
        id: '60',
        name: 'Wizard - Checkout',
        url: '/pages/wizard-examples/checkout',
        icon: 'ri-shopping-cart-2-line',
        section: 'Pages'
    },
    {
        id: '61',
        name: 'Wizard - Property Listing',
        url: '/pages/wizard-examples/property-listing',
        icon: 'ri-building-4-line',
        section: 'Pages'
    },
    {
        id: '62',
        name: 'Wizard - Create Deal',
        url: '/pages/wizard-examples/create-deal',
        icon: 'ri-gift-line',
        section: 'Pages'
    },
    {
        id: '63',
        name: 'Dialog Examples',
        url: '/pages/dialog-examples',
        icon: 'ri-tv-2-line',
        section: 'Pages'
    },
    {
        id: '64',
        name: 'Widget - Basic',
        url: '/pages/widget-examples/basic',
        icon: 'ri-square-line',
        section: 'Pages'
    },
    {
        id: '65',
        name: 'Widget - Advanced',
        url: '/pages/widget-examples/advanced',
        icon: 'ri-article-line',
        section: 'Pages'
    },
    {
        id: '66',
        name: 'Widget - Statistics',
        url: '/pages/widget-examples/statistics',
        icon: 'ri-bar-chart-box-line',
        section: 'Pages'
    },
    {
        id: '67',
        name: 'Widget - Charts',
        url: '/pages/widget-examples/charts',
        icon: 'ri-bar-chart-grouped-line',
        section: 'Pages'
    },
    {
        id: '68',
        name: 'Widget - Gamification',
        url: '/pages/widget-examples/gamification',
        icon: 'ri-file-image-line',
        section: 'Pages'
    },
    {
        id: '69',
        name: 'Widget - Actions',
        url: '/pages/widget-examples/actions',
        icon: 'ri-add-box-line',
        section: 'Pages'
    },
    {
        id: '70',
        name: 'Form Layouts',
        url: '/forms/form-layouts',
        icon: 'ri-file-text-line',
        section: 'Forms & Tables'
    },
    {
        id: '71',
        name: 'Form Validation',
        url: '/forms/form-validation',
        icon: 'ri-checkbox-multiple-line',
        section: 'Forms & Tables'
    },
    {
        id: '72',
        name: 'Form Wizard',
        url: '/forms/form-wizard',
        icon: 'ri-equalizer-line',
        section: 'Forms & Tables'
    },
    {
        id: '73',
        name: 'React Table',
        url: '/react-table',
        icon: 'ri-table-alt-line',
        section: 'Forms & Tables'
    },
    {
        id: '74',
        name: 'Apex Charts',
        url: '/charts/apex-charts',
        icon: 'ri-line-chart-line',
        section: 'Charts'
    },
    {
        id: '75',
        name: 'Recharts',
        url: '/charts/recharts',
        icon: 'ri-bar-chart-line',
        section: 'Charts'
    },
    {
        id: '76',
        name: 'Menu Examples',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`,
        icon: 'ri-menu-add-line',
        section: 'Others'
    },
    {
        id: '77',
        name: 'Typography',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/typography`,
        icon: 'ri-text',
        section: 'Foundation'
    },
    {
        id: '78',
        name: 'Colors',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/colors`,
        icon: 'ri-palette-line',
        section: 'Foundation'
    },
    {
        id: '79',
        name: 'Shadows',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/shadows`,
        icon: 'ri-remixicon-line',
        section: 'Foundation'
    },
    {
        id: '80',
        name: 'Icons',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/icons`,
        icon: 'ri-remixicon-line',
        section: 'Foundation'
    },
    {
        id: '81',
        name: 'Accordion',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/accordion`,
        icon: 'ri-fullscreen-exit-line',
        section: 'Components'
    },
    {
        id: '82',
        name: 'Alerts',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/alerts`,
        icon: 'ri-alert-line',
        section: 'Components'
    },
    {
        id: '83',
        name: 'Avatars',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/avatars`,
        icon: 'ri-account-circle-line',
        section: 'Components'
    },
    {
        id: '84',
        name: 'Badges',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/badges`,
        icon: 'ri-notification-badge-line',
        section: 'Components'
    },
    {
        id: '85',
        name: 'Buttons',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/buttons`,
        icon: 'ri-download-2-line',
        section: 'Components'
    },
    {
        id: '86',
        name: 'Button Group',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/button-group`,
        icon: 'ri-file-copy-line',
        section: 'Components'
    },
    {
        id: '87',
        name: 'Chips',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/chips`,
        icon: 'ri-text-snippet',
        section: 'Components'
    },
    {
        id: '88',
        name: 'Dialogs',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/dialogs`,
        icon: 'ri-tv-2-line',
        section: 'Components'
    },
    {
        id: '89',
        name: 'List',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/list`,
        icon: 'ri-list-ordered',
        section: 'Components'
    },
    {
        id: '90',
        name: 'Menu',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/menu`,
        icon: 'ri-menu-line',
        section: 'Components'
    },
    {
        id: '91',
        name: 'Pagination',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/pagination`,
        icon: 'ri-skip-right-line',
        section: 'Components'
    },
    {
        id: '92',
        name: 'Progress',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/progress`,
        icon: 'ri-progress-3-line',
        section: 'Components'
    },
    {
        id: '93',
        name: 'Ratings',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/ratings`,
        icon: 'ri-star-line',
        section: 'Components'
    },
    {
        id: '94',
        name: 'Snackbar',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/snackbar`,
        icon: 'ri-message-3-line',
        section: 'Components'
    },
    {
        id: '95',
        name: 'Swiper',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/swiper`,
        icon: 'ri-slideshow-4-line',
        section: 'Components'
    },
    {
        id: '96',
        name: 'Tabs',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/tabs`,
        icon: 'ri-tv-2-line',
        section: 'Components'
    },
    {
        id: '97',
        name: 'Timeline',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/timeline`,
        icon: 'ri-timeline-view',
        section: 'Components'
    },
    {
        id: '98',
        name: 'Toasts',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/toasts`,
        icon: 'ri-notification-2-line',
        section: 'Components'
    },
    {
        id: '99',
        name: 'More Components',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/more`,
        icon: 'ri-layout-grid-line',
        section: 'Components'
    },
    {
        id: '100',
        name: 'Text Field',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/text-field`,
        icon: 'ri-input-field',
        section: 'Forms & Tables'
    },
    {
        id: '101',
        name: 'Select',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/select`,
        icon: 'ri-list-check',
        section: 'Forms & Tables'
    },
    {
        id: '102',
        name: 'Checkbox',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/checkbox`,
        icon: 'ri-checkbox-line',
        section: 'Forms & Tables'
    },
    {
        id: '103',
        name: 'Radio',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/radio`,
        icon: 'ri-radio-button-line',
        section: 'Forms & Tables'
    },
    {
        id: '104',
        name: 'Custom Inputs',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/custom-inputs`,
        icon: 'ri-list-radio',
        section: 'Forms & Tables'
    },
    {
        id: '105',
        name: 'Textarea',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/textarea`,
        icon: 'ri-rectangle-line',
        section: 'Forms & Tables'
    },
    {
        id: '106',
        name: 'Autocomplete',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/autocomplete`,
        icon: 'ri-list-check',
        section: 'Forms & Tables'
    },
    {
        id: '107',
        name: 'Date & Time Pickers',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/pickers`,
        icon: 'ri-calendar-check-line',
        section: 'Forms & Tables'
    },
    {
        id: '108',
        name: 'Switch',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/switch`,
        icon: 'ri-toggle-line',
        section: 'Forms & Tables'
    },
    {
        id: '109',
        name: 'File Uploader',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/file-uploader`,
        icon: 'ri-file-upload-line',
        section: 'Forms & Tables'
    },
    {
        id: '110',
        name: 'Editor',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/editor`,
        icon: 'ri-ai-generate',
        section: 'Forms & Tables'
    },
    {
        id: '111',
        name: 'Slider',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/slider`,
        icon: 'ri-equalizer-2-line',
        section: 'Forms & Tables'
    },
    {
        id: '112',
        name: 'MUI Tables',
        url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`,
        icon: 'ri-table-2',
        section: 'Forms & Tables'
    }
];
const __TURBOPACK__default__export__ = data;

})()),
"[project]/src/graphql/fragments.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PRODUCT_BASE_FIELDS": ()=>PRODUCT_BASE_FIELDS
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/graphql-tag/lib/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const PRODUCT_BASE_FIELDS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
fragment productBaseFields on products {
  id
  title
  price
  product_medias(order_by: {updated_at: desc}, limit: 1) {
    id
    media_url
  }
  product_discounts(limit: 1, order_by: {discounted_value: desc}) {
    id
    discount_type
    discounted_value
  }
}
`;

})()),
"[project]/src/graphql/queries.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ADMIN_BY_PK": ()=>ADMIN_BY_PK,
    "ADMIN_ROLES": ()=>ADMIN_ROLES,
    "ADMIN_ROLES_AGGREGATE": ()=>ADMIN_ROLES_AGGREGATE,
    "DEALERS_BY_ID": ()=>DEALERS_BY_ID,
    "GET_ALL_ADMINS": ()=>GET_ALL_ADMINS,
    "GET_ALL_DEALERS": ()=>GET_ALL_DEALERS,
    "GET_ALL_INVOICES": ()=>GET_ALL_INVOICES,
    "GET_ALL_ORDERS": ()=>GET_ALL_ORDERS,
    "GET_ALL_PRODUCT_DISCOUNT": ()=>GET_ALL_PRODUCT_DISCOUNT,
    "GET_ALL_QUOTATIONS": ()=>GET_ALL_QUOTATIONS,
    "GET_ALL_SERVICE_CENTERS": ()=>GET_ALL_SERVICE_CENTERS,
    "GET_ALL_SERVICE_TOKENS": ()=>GET_ALL_SERVICE_TOKENS,
    "GET_BRANDS": ()=>GET_BRANDS,
    "GET_NEWS": ()=>GET_NEWS,
    "GET_NEWS_CATS": ()=>GET_NEWS_CATS,
    "GET_PAYMENT_METHODS": ()=>GET_PAYMENT_METHODS,
    "GET_PRODUCTS": ()=>GET_PRODUCTS,
    "GET_PRODUCT_CATEGORIES": ()=>GET_PRODUCT_CATEGORIES,
    "GET_USERS": ()=>GET_USERS,
    "GET_USER_BY_ID": ()=>GET_USER_BY_ID,
    "INVOICE_AGGREGATE": ()=>INVOICE_AGGREGATE,
    "INVOICE_BY_ID": ()=>INVOICE_BY_ID,
    "INVOICE_STATUS": ()=>INVOICE_STATUS,
    "INVOICE_TABS": ()=>INVOICE_TABS,
    "NEWS_AGGREGATE": ()=>NEWS_AGGREGATE,
    "NEWS_CATS": ()=>NEWS_CATS,
    "NEWS_RELATED_PRODUCTS": ()=>NEWS_RELATED_PRODUCTS,
    "NEW_BY_ID": ()=>NEW_BY_ID,
    "NEW_CAT_BY_ID": ()=>NEW_CAT_BY_ID,
    "ORDERS_AGGREGATE": ()=>ORDERS_AGGREGATE,
    "ORDERS_BY_ID": ()=>ORDERS_BY_ID,
    "ORDERS_TABS": ()=>ORDERS_TABS,
    "ORDER_STATUS": ()=>ORDER_STATUS,
    "PAYMENT_BY_INVOICE_ID": ()=>PAYMENT_BY_INVOICE_ID,
    "PRODCUT_DISCOUNT_BY_ID": ()=>PRODCUT_DISCOUNT_BY_ID,
    "PRODUCTS_BY_ID": ()=>PRODUCTS_BY_ID,
    "PRODUCT_AGGREGATE": ()=>PRODUCT_AGGREGATE,
    "PRODUCT_BRANDs": ()=>PRODUCT_BRANDs,
    "PRODUCT_CATS": ()=>PRODUCT_CATS,
    "PRODUCT_SELECT": ()=>PRODUCT_SELECT,
    "QUOTATION_AGGREGATE": ()=>QUOTATION_AGGREGATE,
    "QUOTATION_BY_ID": ()=>QUOTATION_BY_ID,
    "QUOTATION_STATUS": ()=>QUOTATION_STATUS,
    "QUOTATION_TABS": ()=>QUOTATION_TABS,
    "SERVICE_AGGREGATE": ()=>SERVICE_AGGREGATE,
    "SERVICE_STATUS": ()=>SERVICE_STATUS,
    "SERVICE_TOKEN_BY_ID": ()=>SERVICE_TOKEN_BY_ID,
    "SERVICE_TOKEN_TABS": ()=>SERVICE_TOKEN_TABS,
    "USERS_ROLE_AGGREGATES": ()=>USERS_ROLE_AGGREGATES,
    "USER_INVOICE_AGGREGATE": ()=>USER_INVOICE_AGGREGATE,
    "USER_QUOTATION_AGGREGATE": ()=>USER_QUOTATION_AGGREGATE,
    "USER_ROLES": ()=>USER_ROLES,
    "USER_SERVICE_AGGREGATE": ()=>USER_SERVICE_AGGREGATE,
    "USER_STATUS_AGGREGATE": ()=>USER_STATUS_AGGREGATE
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/graphql-tag/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$fragments$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/fragments.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const GET_USERS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query getUsers {
    users {
      id
      name
      phone
      profile_picture_url
      role
      status
      email
      delivery_name
      delivery_phone
      delivery_address
      created_at
      updated_at
      dealer {
        id
        name
        phone
        address
        city_name
        township_name
      }
    }
  }
`;
const GET_USER_BY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query getUsers($userId: uuid!) {
    users_by_pk(id: $userId) {
      id
      name
      phone
      profile_picture_url
      role
      status
      delivery_name
      delivery_phone
      delivery_address
      dealer {
        id
        name
        phone
        address
        city_name
        township_name
      }
    }
  }
`;
const GET_PRODUCT_CATEGORIES = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query getProductCategories {
    product_categories(order_by: { updated_at: desc }) {
      id
      title
      image_url
      created_at
      updated_at
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
const GET_PRODUCTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query getProducts {
    products(order_by: { updated_at: desc }) {
      id
      title
      created_at
      updated_at
      description_html
      serial_number
      product_medias(order_by: { updated_at: desc }, limit: 1) {
        id
        media_url
      }
      product_category {
        id
        title
        image_url
      }
      brand {
        id
        title
        image_url
      }
      price
      sku
      disabled
    }
  }
`;
const PRODUCTS_BY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query productById($id: uuid!) {
    products_by_pk(id: $id) {
      id
      title
      serial_number
      description_html
      product_medias(order_by: { updated_at: desc }, limit: 1) {
        id
        media_url
      }
      product_category {
        id
        title
        image_url
      }
      product_discounts {
        id
        min_order
        discounted_value
      }
      brand {
        id
        title
        image_url
      }
      price
      sku
      disabled
    }
  }
`;
const PRODUCT_BRANDs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query productBrand {
    brands {
      id
      title
    }
  }
`;
const PRODUCT_CATS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query productCat {
    product_categories {
      id
      title
    }
  }
`;
const GET_BRANDS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query brands {
    brands(order_by: { updated_at: desc }) {
      id
      title
      image_url
      created_at
      updated_at
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
const GET_NEWS_CATS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query newCategorys {
    news_categories {
      id
      title
      created_at
      updated_at
      news_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
const NEW_CAT_BY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query newCatById($id: uuid!) {
    news_categories_by_pk(id: $id) {
      id
      title
    }
  }
`;
const GET_NEWS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query news {
    news(order_by: { updated_at: desc }) {
      id
      title
      body_html
      image_url
      disabled
      updated_at
      created_at
      news_category_id
      news_category {
        id
        title
      }
    }
  }
`;
const NEW_BY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query newId($id: uuid!) {
    news_by_pk(id: $id) {
      id
      title
      image_url
      news_category {
        id
        title
      }
      news_related_products {
        product {
          id
        }
      }
    }
  }
`;
const NEWS_CATS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query newCats {
    news_categories {
      id
      title
    }
  }
`;
const GET_ALL_INVOICES = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query getAllInvoices {
    invoices(order_by: { updated_at: desc }) {
      id
      invoice_number
      status
      balance
      created_at
      total
      discount
      invoice_status {
        id
        name
      }
      user {
        id
        name
        profile_picture_url
      }
      created_at
      updated_at

      invoice_file_url
    }
  }
`;
const INVOICE_TABS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query invoiceTabs($user_id: uuid!) {
    invoices(where: { user_id: { _eq: $user_id } }) {
      id
      invoice_number
      status
      balance
      total
      discount
      invoice_status {
        id
        name
      }
      user {
        id
        name
        profile_picture_url
      }
      created_at
      updated_at

      invoice_file_url
    }
  }
`;
const INVOICE_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query invoiceStatus {
    invoice_status {
      id
      name
    }
  }
`;
const INVOICE_BY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query invoiceById($id: uuid!) {
    invoices_by_pk(id: $id) {
      id
      balance
      invoice_number
      status
      note
      total
      created_at
      updated_at
      user {
        id
        name
        email
        phone
      }
      order {
        id
        items_total
        order_items {
          product {
            title
            id
            price
            brand {
              id
              title
            }
          }

          quantity
          total
        }
        receiver_name
        receiver_phone
        receiver_address
      }
    }
  }
`;
const PAYMENT_BY_INVOICE_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query payments($invoice_id: uuid!) {
    payments(where: { invoice_id: { _eq: $invoice_id } }) {
      id
      amount
      payment_date
      payment_method
      updated_at
      created_at
      invoice_id
    }
  }
`;
const NEWS_RELATED_PRODUCTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query newProduct($news_id: uuid!) {
    news_related_products(where: { news_id: { _eq: $news_id } }) {
      id
      news_id
      product_id
    }
  }
`;
const PRODUCT_SELECT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query productSelect {
    products {
      id
      title
    }
  }
`;
const GET_ALL_QUOTATIONS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query getAllQuotations {
    quotations(order_by: { updated_at: desc }) {
      id
      dealer_remark
      created_at
      updated_at
      status
      quotation_status {
        id
        name
      }
      user {
        id
        name
        profile_picture_url
      }
      quotation_file_url
      quotation_number
      total_amount
    }
  }
`;
const QUOTATION_TABS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query quotationTabs($user_id: uuid!) {
    quotations(where: { user_id: { _eq: $user_id } }) {
      id
      dealer_remark
      created_at
      updated_at
      status
      quotation_status {
        id
        name
      }
      user {
        id
        name
        profile_picture_url
      }
      quotation_file_url
      quotation_number
      total_amount
    }
  }
`;
const GET_ALL_SERVICE_CENTERS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query serviceCenters {
    service_centers(order_by: { updated_at: desc }) {
      id
      name
      address
      phone
      created_at
      updated_at
    }
  }
`;
const QUOTATION_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query aa {
    quotation_status {
      id
      name
    }
  }
`;
const QUOTATION_BY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query quotationById($id: uuid!) {
    quotations_by_pk(id: $id) {
      id
      created_at
      updated_at
      dealer_remark
      total_amount
      quotation_number
      status
      user {
        id
        name
        phone
        orders {
          receiver_address
          receiver_name
          receiver_phone
        }
      }
      quotation_items {
        id
        quantity
        product {
          price
          title

          brand {
            id
            title
          }
        }
      }
    }
  }
`;
const GET_ALL_SERVICE_TOKENS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query getAllServiceTokens {
    service_tokens(order_by: { updated_at: desc }) {
      id
      completed_at
      created_at
      description
      delivering_at
      document_photo_url
      is_warranty_valid
      issue_media_type
      issue_media_url
      picking_up_at
      product
      processing_at
      service_fee
      service_status {
        name
      }
      status
      token_number
      updated_at
      user {
        name
        id
        profile_picture_url
      }
    }
  }
`;
const SERVICE_TOKEN_TABS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query serviceTokenTabs($user_id: uuid!) {
    service_tokens(where: { user_id: { _eq: $user_id } }) {
      id
      completed_at
      created_at
      description
      delivering_at
      document_photo_url
      is_warranty_valid
      issue_media_type
      issue_media_url
      picking_up_at
      product
      processing_at
      service_fee
      service_status {
        name
      }
      status
      token_number
      updated_at
      user {
        name
        id
        profile_picture_url
      }
    }
  }
`;
const SERVICE_TOKEN_BY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query serviceTokensById($id: uuid!) {
    service_tokens_by_pk(id: $id) {
      id
      completed_at
      created_at
      description
      delivering_at
      document_photo_url
      is_warranty_valid
      issue_media_type
      issue_media_url
      picking_up_at
      product
      processing_at
      received_at
      service_fee
      service_status {
        name
      }
      status
      token_number
      updated_at
      user {
        name
        id
        phone
        email
      }
    }
  }
`;
const ORDER_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query OrderStatus {
    order_status {
      id
      name
    }
  }
`;
const GET_ALL_ORDERS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query getAllOrders {
    orders(order_by: { updated_at: desc }) {
      id
      order_number
      completion_photo_url
      completed_at
      created_at
      delivering_at
      delivery_fee
      discount
      items_total
      order_status {
        name
        id
      }
      ordered_at
      preparing_at
      receiver_address
      receiver_name
      receiver_phone
      remark
      status
      total
      updated_at
      order_items {
        quantity
        product {
          price
          title
          brand {
            title
          }
          product_category {
            title
          }
        }
      }
      user {
        id
        name
        profile_picture_url
        user_role {
          role_name
        }
      }
      user_id
    }
  }
`;
const ORDERS_TABS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query orderTabs($user_id: uuid!) {
    orders(where: { user_id: { _eq: $user_id } }) {
      id
      order_number
      completion_photo_url
      completed_at
      created_at
      delivering_at
      delivery_fee
      discount
      items_total
      order_status {
        name
        id
      }
      ordered_at
      preparing_at
      receiver_address
      receiver_name
      receiver_phone
      remark
      status
      total
      updated_at
      user {
        id
        name
        profile_picture_url
        user_role {
          role_name
        }
      }
      user_id
    }
  }
`;
const ORDERS_BY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query ordersById($id: uuid!) {
    orders_by_pk(id: $id) {
      id
      order_number
      completion_photo_url
      completed_at
      created_at
      delivering_at
      delivery_fee
      discount
      items_total
      order_status {
        name
        id
      }
      ordered_at
      preparing_at
      receiver_address
      receiver_name
      receiver_phone
      remark
      status
      total
      updated_at
      receiver_name
      receiver_phone
      order_items {
        id
        quantity
        total
        unit_price
        product {
          id
          title
          brand {
            id
            title
          }
        }
      }
      user {
        id
        name
        phone
        email
        profile_picture_url
        user_role {
          role_name
        }
      }
      user_id
    }
  }
`;
const ORDERS_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query orderAggregate {
    activeOrder: orders_aggregate(
      where: {
        _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }, { status: { _neq: "refunded" } }]
      }
    ) {
      aggregate {
        count
      }
    }
    completeOrder: orders_aggregate(where: { status: { _eq: "completed" } }) {
      aggregate {
        count
      }
    }
    refundedOrder: orders_aggregate(where: { status: { _eq: "refunded" } }) {
      aggregate {
        count
      }
    }
    canceledOrder: orders_aggregate(where: { status: { _eq: "canceled" } }) {
      aggregate {
        count
      }
    }
  }
`;
const PRODUCT_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query productAggregate {
    brandProduct: products_aggregate(distinct_on: brand_id) {
      aggregate {
        count
      }
    }
    categoryProduct: products_aggregate(distinct_on: category_id) {
      aggregate {
        count
      }
    }
    disableProduct: products_aggregate(where: { disabled: { _eq: true } }) {
      aggregate {
        count
      }
    }
    activeProduct: products_aggregate(where: { disabled: { _eq: false } }) {
      aggregate {
        count
      }
    }
  }
`;
const NEWS_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query productAggregate {
    totalNews: news_aggregate {
      aggregate {
        count
      }
    }
    categoryNews: news_aggregate(distinct_on: news_category_id) {
      aggregate {
        count
      }
    }
    disableNews: news_aggregate(where: { disabled: { _eq: true } }) {
      aggregate {
        count
      }
    }
    activeNews: news_aggregate(where: { disabled: { _eq: false } }) {
      aggregate {
        count
      }
    }
  }
`;
const GET_ALL_DEALERS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query getAllDealers {
    dealers {
      id
      address
      city_name
      name
      phone
      township_name
      user {
        id
        name
      }
    }
  }
`;
const GET_ALL_ADMINS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query admins {
    admins(order_by: { updated_at: desc }) {
      id
      name
      email
      role
      password
      created_at
      updated_at
    }
  }
`;
const USER_ROLES = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query userRoles {
    user_roles {
      id
      role_name
    }
  }
`;
const GET_PAYMENT_METHODS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query paymentMethods {
    payment_methods {
      id
      name
    }
  }
`;
const ADMIN_BY_PK = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query adminById($id: uuid!) {
    admins_by_pk(id: $id) {
      id
      name
    }
  }
`;
const ADMIN_ROLES = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query adminRoles {
    admin_roles {
      id
      role_name
    }
  }
`;
const ADMIN_ROLES_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query orderAggregate {
    saleRole: admin_roles_aggregate(where: { role_name: { _eq: "sale" } }) {
      aggregate {
        count
      }
    }
    financeRole: admin_roles_aggregate(where: { role_name: { _eq: "finance" } }) {
      aggregate {
        count
      }
    }
    serviceRole: admin_roles_aggregate(where: { role_name: { _eq: "service" } }) {
      aggregate {
        count
      }
    }
    adminRole: admin_roles_aggregate(where: { role_name: { _eq: "admin" } }) {
      aggregate {
        count
      }
    }

    managerRole: admin_roles_aggregate(where: { role_name: { _eq: "manager" } }) {
      aggregate {
        count
      }
    }

    deliveryRole: admin_roles_aggregate(where: { role_name: { _eq: "delivery" } }) {
      aggregate {
        count
      }
    }
  }
`;
const DEALERS_BY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query dealerById($id: uuid!) {
    dealers_by_pk(id: $id) {
      id
      address
      city_name
      name
      phone
      township_name
      user {
        id
        name
      }
    }
  }
`;
const USER_STATUS_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query userAggregate {
    activeUser: users_aggregate(where: { status: { _eq: "active" } }) {
      aggregate {
        count
      }
    }
    pendingUser: users_aggregate(where: { status: { _eq: "pending" } }) {
      aggregate {
        count
      }
    }
    disabelUser: users_aggregate(where: { status: { _eq: "disabled" } }) {
      aggregate {
        count
      }
    }
  }
`;
const USERS_ROLE_AGGREGATES = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query userAggregate {
    consumerUser: users_aggregate(where: { role: { _eq: "consumer" } }) {
      aggregate {
        count
      }
    }
    dealerUser: users_aggregate(where: { role: { _eq: "dealer" } }) {
      aggregate {
        count
      }
    }
  }
`;
const SERVICE_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query userAggregate {
    completedService: service_tokens_aggregate(where: { status: { _eq: "complete" } }) {
      aggregate {
        count
      }
    }
    activeService: service_tokens_aggregate(
      where: { _and: [{ status: { _neq: "completed" } }, { status: { _neq: "canceled" } }] }
    ) {
      aggregate {
        count
      }
    }
    canceledService: service_tokens_aggregate(where: { status: { _eq: "canceled" } }) {
      aggregate {
        count
      }
    }
    pickService: service_tokens_aggregate(where: { status: { _eq: "picking up" } }) {
      aggregate {
        count
      }
    }
    receivedService: service_tokens_aggregate(where: { status: { _eq: "received token" } }) {
      aggregate {
        count
      }
    }
    processingService: service_tokens_aggregate(where: { status: { _eq: "processing" } }) {
      aggregate {
        count
      }
    }
    deliverService: service_tokens_aggregate(where: { status: { _eq: "delivering" } }) {
      aggregate {
        count
      }
    }
  }
`;
const USER_SERVICE_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query userServiceAggregate {
    users_aggregate(where: { service_tokens: { id: { _is_null: false } } }) {
      aggregate {
        count
      }
    }
  }
`;
const USER_INVOICE_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query userServiceAggregate {
    users_aggregate(where: { invoices: { id: { _is_null: false } } }) {
      aggregate {
        count
      }
    }
  }
`;
const USER_QUOTATION_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query userServiceAggregate {
    users_aggregate(where: { quotations: { id: { _is_null: false } } }) {
      aggregate {
        count
      }
    }
  }
`;
const INVOICE_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query userAggregate {
    paidInvoice: invoices_aggregate(where: { status: { _eq: "paid" } }) {
      aggregate {
        count
      }
    }
    UnPaindInvoice: users_aggregate(where: { status: { _eq: "unpaid" } }) {
      aggregate {
        count
      }
    }
    completeInvoice: users_aggregate(where: { status: { _eq: "completed" } }) {
      aggregate {
        count
      }
    }
    pendingInvoice: users_aggregate(where: { status: { _eq: "pending" } }) {
      aggregate {
        count
      }
    }
    partiallPaidInvoice: users_aggregate(where: { status: { _eq: "partially paid" } }) {
      aggregate {
        count
      }
    }
  }
`;
const QUOTATION_AGGREGATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query quotationAggregate {
    pendingQuotation: quotations_aggregate(where: { status: { _eq: "pending" } }) {
      aggregate {
        count
      }
    }
    acceptedQuotation: quotations_aggregate(where: { status: { _eq: "accepted" } }) {
      aggregate {
        count
      }
    }
    rejectedQuotation: quotations_aggregate(where: { status: { _eq: "rejected" } }) {
      aggregate {
        count
      }
    }
    completedQuotation: quotations_aggregate(where: { status: { _eq: "completed" } }) {
      aggregate {
        count
      }
    }
  }
`;
const SERVICE_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query serviceStatus {
    service_status {
      id
      name
    }
  }
`;
const GET_ALL_PRODUCT_DISCOUNT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query produtDiscount($product_id: uuid!) {
    product_discounts(order_by: { updated_at: desc }, where: { product_id: { _eq: $product_id } }) {
      id
      customer_type
      product_id
      discount_type
      created_at
      updated_at
      discounted_value
      min_order
      product {
        title
        brand {
          id
          title
        }
      }
    }
  }
`;
const PRODCUT_DISCOUNT_BY_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["gql"]`
  query productDiscountById($id: uuid!) {
    product_discounts_by_pk(id: $id) {
      id
      customer_type
      discount_type
      created_at
      updated_at
      discounted_value

      min_order
      user_role {
        role_name
      }
      product {
        brand {
          id
          title
        }
      }
    }
  }
`;

})()),
"[project]/src/app/[lang]/(dashboard)/layout.jsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=src_a61014._.js.map