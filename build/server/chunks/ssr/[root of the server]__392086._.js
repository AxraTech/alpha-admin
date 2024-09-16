module.exports = {

"[project]/src/@menu/contexts/verticalNavContext.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "VerticalNavProvider": ()=>VerticalNavProvider,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
const VerticalNavContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const VerticalNavProvider = ({ children })=>{
    // States
    const [verticalNavState, setVerticalNavState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    // Hooks
    const updateVerticalNavState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((values)=>{
        setVerticalNavState((prevState)=>({
                ...prevState,
                ...values,
                collapsing: values.isCollapsed === true,
                expanding: values.isCollapsed === false
            }));
    }, []);
    const collapseVerticalNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        setVerticalNavState((prevState)=>({
                ...prevState,
                isHovered: value !== undefined && false,
                isCollapsed: value !== undefined ? Boolean(value) : !Boolean(prevState?.isCollapsed),
                collapsing: value === true,
                expanding: value !== true
            }));
    }, []);
    const hoverVerticalNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        setVerticalNavState((prevState)=>({
                ...prevState,
                isHovered: value !== undefined ? Boolean(value) : !Boolean(prevState?.isHovered)
            }));
    }, []);
    const toggleVerticalNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        setVerticalNavState((prevState)=>({
                ...prevState,
                isToggled: value !== undefined ? Boolean(value) : !Boolean(prevState?.isToggled)
            }));
    }, []);
    const verticalNavProviderValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...verticalNavState,
            updateVerticalNavState,
            collapseVerticalNav,
            hoverVerticalNav,
            toggleVerticalNav
        }), [
        verticalNavState,
        updateVerticalNavState,
        collapseVerticalNav,
        hoverVerticalNav,
        toggleVerticalNav
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VerticalNavContext.Provider, {
        value: verticalNavProviderValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/@menu/contexts/verticalNavContext.jsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = VerticalNavContext;

})()),
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
"[project]/src/@core/hooks/useObjectCookie.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "useObjectCookie": ()=>useObjectCookie
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__ = __turbopack_import__("[project]/node_modules/react-use/esm/useCookie.js [app-ssr] (ecmascript) <export default as useCookie>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const useObjectCookie = (key, fallback)=>{
    // Hooks
    const [valStr, updateCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"])(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>valStr ? JSON.parse(valStr) : fallback, [
        valStr
    ]);
    const updateValue = (newVal)=>{
        updateCookie(JSON.stringify(newVal));
    };
    return [
        value,
        updateValue
    ];
};

})()),
"[project]/src/@core/contexts/settingsContext.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SettingsContext": ()=>SettingsContext,
    "SettingsProvider": ()=>SettingsProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/primaryColorConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useObjectCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useObjectCookie.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
const SettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const SettingsProvider = (props)=>{
    // Initial Settings
    const initialSettings = {
        mode: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].mode,
        skin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].skin,
        semiDark: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].semiDark,
        layout: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layout,
        navbarContentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.contentWidth,
        contentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].contentWidth,
        footerContentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.contentWidth,
        primaryColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][0].main
    };
    const updatedInitialSettings = {
        ...initialSettings,
        mode: props.mode || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].mode
    };
    // Cookies
    const [settingsCookie, updateSettingsCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useObjectCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useObjectCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].settingsCookieName, JSON.stringify(props.settingsCookie) !== '{}' ? props.settingsCookie : updatedInitialSettings);
    // State
    const [_settingsState, _updateSettingsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(JSON.stringify(settingsCookie) !== '{}' ? settingsCookie : updatedInitialSettings);
    const updateSettings = (settings, options)=>{
        const { updateCookie = true } = options || {};
        _updateSettingsState((prev)=>{
            const newSettings = {
                ...prev,
                ...settings
            };
            // Update cookie if needed
            if (updateCookie) updateSettingsCookie(newSettings);
            return newSettings;
        });
    };
    /**
   * Updates the settings for page with the provided settings object.
   * Updated settings won't be saved to cookie hence will be reverted once navigating away from the page.
   *
   * @param settings - The partial settings object containing the properties to update.
   * @returns A function to reset the page settings.
   *
   * @example
   * useEffect(() => {
   *     return updatePageSettings({ theme: 'dark' });
   * }, []);
   */ const updatePageSettings = (settings)=>{
        updateSettings(settings, {
            updateCookie: false
        });
        // Returns a function to reset the page settings
        return ()=>updateSettings(settingsCookie, {
                updateCookie: false
            });
    };
    const resetSettings = ()=>{
        updateSettings(initialSettings);
    };
    const isSettingsChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>JSON.stringify(initialSettings) !== JSON.stringify(_settingsState), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        _settingsState
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContext.Provider, {
        value: {
            settings: _settingsState,
            updateSettings,
            isSettingsChanged,
            resetSettings,
            updatePageSettings
        },
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/@core/contexts/settingsContext.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
};

})()),
"[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "useSettings": ()=>useSettings
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$contexts$2f$settingsContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/contexts/settingsContext.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const useSettings = ()=>{
    // Hooks
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$contexts$2f$settingsContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SettingsContext"]);
    if (!context) {
        throw new Error('useSettingsContext must be used within a SettingsProvider');
    }
    return context;
};

})()),
"[project]/src/components/theme/ModeChanger.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/CssVarsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_import__("[project]/node_modules/react-use/esm/useMedia.js [app-ssr] (ecmascript) <export default as useMedia>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const ModeChanger = ({ systemMode })=>{
    // Hooks
    const { setMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useColorScheme"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', systemMode === 'dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (settings.mode) {
            if (settings.mode === 'system') {
                setMode(isDark ? 'dark' : 'light');
            } else {
                setMode(settings.mode);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        settings.mode
    ]);
    return null;
};
const __TURBOPACK__default__export__ = ModeChanger;

})()),
"[next]/internal/font/google/inter_aeaa3e0c.module.css [app-ssr] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "className": "inter_aeaa3e0c-module__HssBEW__className",
});

})()),
"[next]/internal/font/google/inter_aeaa3e0c.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aeaa3e0c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/inter_aeaa3e0c.module.css [app-ssr] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aeaa3e0c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'__Inter_aeaa3e', '__Inter_Fallback_aeaa3e'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aeaa3e0c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aeaa3e0c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;

})()),
"[project]/src/@core/theme/overrides/accordion.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const accordion = (skin)=>({
        MuiAccordion: {
            defaultProps: {
                ...skin === 'bordered' && {
                    variant: 'outlined'
                }
            },
            styleOverrides: {
                root: ({ theme })=>({
                        transition: theme.transitions.create([
                            'margin',
                            'border-radius',
                            'box-shadow'
                        ]),
                        ...skin !== 'bordered' ? {
                            boxShadow: 'var(--mui-customShadows-xs)'
                        } : {
                            '&:not(.Mui-expanded) + &:not(.Mui-expanded)': {
                                borderBlockStart: 0
                            },
                            '&:not(.Mui-expanded):has(+ &:not(.Mui-expanded))': {
                                borderBlockEnd: 0
                            }
                        },
                        '&:not(.Mui-expanded):has(+ .Mui-expanded)': {
                            borderBottomLeftRadius: 'var(--mui-shape-borderRadius)',
                            borderBottomRightRadius: 'var(--mui-shape-borderRadius)'
                        },
                        '&.Mui-expanded': {
                            borderRadius: 'var(--mui-shape-borderRadius)',
                            ...skin !== 'bordered' && {
                                boxShadow: 'var(--mui-customShadows-md)'
                            },
                            margin: theme.spacing(2, 0),
                            '& + .MuiAccordion-root': {
                                borderTopLeftRadius: 'var(--mui-shape-borderRadius)',
                                borderTopRightRadius: 'var(--mui-shape-borderRadius)',
                                '&:before': {
                                    opacity: 0
                                }
                            }
                        }
                    })
            }
        },
        MuiAccordionSummary: {
            defaultProps: {
                expandIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-arrow-down-s-line"
                }, void 0, false, {
                    fileName: "[project]/src/@core/theme/overrides/accordion.jsx",
                    lineNumber: 46,
                    columnNumber: 19
                }, this)
            },
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(3, 5),
                        color: 'var(--mui-palette-text-primary)',
                        '&.Mui-expanded': {
                            minHeight: 48
                        },
                        '& .MuiTypography-root': {
                            color: 'inherit',
                            fontWeight: theme.typography.fontWeightMedium
                        }
                    }),
                content: {
                    margin: '0 !important'
                },
                expandIconWrapper: {
                    color: 'var(--mui-palette-text-primary)',
                    fontSize: '1.25rem',
                    '& i, & svg': {
                        fontSize: 'inherit'
                    }
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(0, 5, 5),
                        '& .MuiTypography-root': {
                            color: 'var(--mui-palette-text-secondary)'
                        }
                    })
            }
        }
    });
const __TURBOPACK__default__export__ = accordion;

})()),
"[project]/src/@core/theme/overrides/alerts.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const alerts = {
    MuiAlert: {
        defaultProps: {
            iconMapping: {
                error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-error-warning-line"
                }, void 0, false, {
                    fileName: "[project]/src/@core/theme/overrides/alerts.jsx",
                    lineNumber: 8,
                    columnNumber: 16
                }, this),
                warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-alert-line"
                }, void 0, false, {
                    fileName: "[project]/src/@core/theme/overrides/alerts.jsx",
                    lineNumber: 9,
                    columnNumber: 18
                }, this),
                info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-information-line"
                }, void 0, false, {
                    fileName: "[project]/src/@core/theme/overrides/alerts.jsx",
                    lineNumber: 10,
                    columnNumber: 15
                }, this),
                success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-checkbox-circle-line"
                }, void 0, false, {
                    fileName: "[project]/src/@core/theme/overrides/alerts.jsx",
                    lineNumber: 11,
                    columnNumber: 18
                }, this)
            }
        },
        styleOverrides: {
            root: ({ theme })=>({
                    padding: theme.spacing(4),
                    gap: theme.spacing(4),
                    ...theme.typography.body1,
                    '&:not(:has(.MuiAlertTitle-root))': {
                        '& .MuiAlert-icon + .MuiAlert-message': {
                            alignSelf: 'center'
                        },
                        '&:has(.MuiAlert-action) .MuiAlert-icon': {
                            marginBlockStart: 2
                        }
                    }
                }),
            icon: {
                padding: 0,
                margin: 0,
                minWidth: 30,
                height: 30,
                borderRadius: 'var(--mui-shape-borderRadius)',
                alignItems: 'center',
                justifyContent: 'center',
                '& i, & svg': {
                    fontSize: 'inherit'
                }
            },
            message: {
                padding: 0
            },
            action: {
                padding: 0,
                marginRight: 0
            }
        },
        variants: [
            {
                props: {
                    variant: 'standard',
                    severity: 'error'
                },
                style: {
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-error-main)',
                        color: 'var(--mui-palette-error-contrastText)'
                    }
                }
            },
            {
                props: {
                    variant: 'standard',
                    severity: 'warning'
                },
                style: {
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-warning-main)',
                        color: 'var(--mui-palette-warning-contrastText)'
                    }
                }
            },
            {
                props: {
                    variant: 'standard',
                    severity: 'info'
                },
                style: {
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-info-main)',
                        color: 'var(--mui-palette-info-contrastText)'
                    }
                }
            },
            {
                props: {
                    variant: 'standard',
                    severity: 'success'
                },
                style: {
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-success-main)',
                        color: 'var(--mui-palette-success-contrastText)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    severity: 'error'
                },
                style: {
                    borderColor: 'var(--mui-palette-error-main)',
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-error-mainOpacity)',
                        color: 'var(--mui-palette-error-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    severity: 'warning'
                },
                style: {
                    borderColor: 'var(--mui-palette-warning-main)',
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-warning-mainOpacity)',
                        color: 'var(--mui-palette-warning-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    severity: 'info'
                },
                style: {
                    borderColor: 'var(--mui-palette-info-main)',
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-info-mainOpacity)',
                        color: 'var(--mui-palette-info-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    severity: 'success'
                },
                style: {
                    borderColor: 'var(--mui-palette-success-main)',
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-success-mainOpacity)',
                        color: 'var(--mui-palette-success-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'filled',
                    severity: 'error'
                },
                style: {
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-common-white)',
                        color: 'var(--mui-palette-error-main)',
                        boxShadow: 'var(--mui-customShadows-xs)'
                    }
                }
            },
            {
                props: {
                    variant: 'filled',
                    severity: 'warning'
                },
                style: {
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-common-white)',
                        color: 'var(--mui-palette-warning-main)',
                        boxShadow: 'var(--mui-customShadows-xs)'
                    }
                }
            },
            {
                props: {
                    variant: 'filled',
                    severity: 'info'
                },
                style: {
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-common-white)',
                        color: 'var(--mui-palette-info-main)',
                        boxShadow: 'var(--mui-customShadows-xs)'
                    }
                }
            },
            {
                props: {
                    variant: 'filled',
                    severity: 'success'
                },
                style: {
                    '& .MuiAlert-icon': {
                        backgroundColor: 'var(--mui-palette-common-white)',
                        color: 'var(--mui-palette-success-main)',
                        boxShadow: 'var(--mui-customShadows-xs)'
                    }
                }
            }
        ]
    },
    MuiAlertTitle: {
        styleOverrides: {
            root: ({ theme })=>({
                    ...theme.typography.h5,
                    marginTop: 0,
                    marginBottom: theme.spacing(1),
                    color: 'inherit'
                })
        }
    }
};
const __TURBOPACK__default__export__ = alerts;

})()),
"[project]/src/@core/theme/overrides/autocomplete.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const autocomplete = (skin)=>({
        MuiAutocomplete: {
            defaultProps: {
                ...skin === 'bordered' && {
                    slotProps: {
                        paper: {
                            variant: 'outlined'
                        }
                    }
                },
                ChipProps: {
                    size: 'small'
                },
                popupIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-arrow-down-s-line"
                }, void 0, false, {
                    fileName: "[project]/src/@core/theme/overrides/autocomplete.jsx",
                    lineNumber: 17,
                    columnNumber: 18
                }, this)
            },
            styleOverrides: {
                root: {
                    '& .MuiButtonBase-root.Mui-disabled i, & .MuiButtonBase-root.Mui-disabled svg': {
                        color: 'var(--mui-palette-action-disabled)'
                    },
                    '& .MuiOutlinedInput-input': {
                        height: '1.4375em'
                    }
                },
                input: {
                    '& + .MuiAutocomplete-endAdornment': {
                        right: '1rem',
                        '& i, & svg': {
                            fontSize: '1.5rem',
                            color: 'var(--mui-palette-text-primary)'
                        },
                        '& .MuiAutocomplete-clearIndicator': {
                            padding: 2
                        }
                    },
                    '&.MuiInputBase-inputSizeSmall + .MuiAutocomplete-endAdornment': {
                        '& i, & svg': {
                            fontSize: '1.375rem'
                        }
                    }
                },
                paper: {
                    ...skin !== 'bordered' && {
                        boxShadow: 'var(--mui-customShadows-lg)',
                        marginBlockStart: '0.125rem'
                    }
                },
                listbox: ({ theme })=>({
                        '& .MuiAutocomplete-option': {
                            padding: theme.spacing(2, 5),
                            '&[aria-selected="true"]': {
                                backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                                color: 'var(--mui-palette-primary-main)',
                                '&.Mui-focused, &.Mui-focusVisible': {
                                    backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                                }
                            }
                        },
                        '& .MuiAutocomplete-option.Mui-focusVisible': {
                            backgroundColor: 'var(--mui-palette-action-hover)'
                        }
                    })
            }
        }
    });
const __TURBOPACK__default__export__ = autocomplete;

})()),
"[project]/src/@core/theme/overrides/avatar.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const avatar = {
    MuiAvatarGroup: {
        styleOverrides: {
            root: ({ theme })=>({
                    justifyContent: 'flex-end',
                    '& .MuiAvatar-root': {
                        borderColor: 'var(--mui-palette-background-paper)'
                    },
                    '&.pull-up .MuiAvatar-root': {
                        cursor: 'pointer',
                        transition: theme.transitions.create([
                            'box-shadow',
                            'transform'
                        ], {
                            easing: 'ease',
                            duration: theme.transitions.duration.shorter
                        }),
                        '&:hover': {
                            zIndex: 2,
                            boxShadow: 'var(--mui-customShadows-md)',
                            transform: 'translateY(-5px)'
                        }
                    }
                })
        }
    },
    MuiAvatar: {
        styleOverrides: {
            root: ({ theme })=>({
                    color: 'var(--mui-palette-text-primary)',
                    fontSize: theme.typography.body1.fontSize,
                    lineHeight: 1.2
                })
        }
    }
};
const __TURBOPACK__default__export__ = avatar;

})()),
"[project]/src/@core/theme/overrides/backdrop.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const backdrop = {
    MuiBackdrop: {
        styleOverrides: {
            root: {
                '&:not(.MuiBackdrop-invisible)': {
                    backgroundColor: 'var(--backdrop-color)'
                }
            }
        }
    }
};
const __TURBOPACK__default__export__ = backdrop;

})()),
"[project]/src/@core/theme/overrides/badges.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const badges = {
    MuiBadge: {
        styleOverrides: {
            standard: ({ theme })=>({
                    height: 22,
                    minWidth: 22,
                    borderRadius: 20,
                    fontSize: theme.typography.subtitle2.fontSize,
                    lineHeight: 1.07,
                    padding: theme.spacing(1, 2)
                })
        }
    }
};
const __TURBOPACK__default__export__ = badges;

})()),
"[project]/src/@core/theme/overrides/breadcrumbs.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const breadcrumbs = {
    MuiBreadcrumbs: {
        styleOverrides: {
            root: {
                '& svg, & i': {
                    fontSize: '1.25rem'
                },
                '& a': {
                    textDecoration: 'none',
                    color: 'var(--mui-palette-text-secondary)',
                    '&:hover': {
                        color: 'var(--mui-palette-text-primary)'
                    }
                }
            },
            li: ({ theme })=>({
                    lineHeight: theme.typography.body1.lineHeight,
                    '& > *:not(a)': {
                        color: 'var(--mui-palette-text-primary)'
                    }
                })
        }
    }
};
const __TURBOPACK__default__export__ = breadcrumbs;

})()),
"[project]/src/@core/theme/overrides/button.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Config Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const iconStyles = (size)=>({
        '& > *:nth-of-type(1)': {
            ...size === 'small' ? {
                fontSize: '14px'
            } : {
                ...size === 'medium' ? {
                    fontSize: '16px'
                } : {
                    fontSize: '20px'
                }
            }
        }
    });
const button = {
    MuiButtonBase: {
        defaultProps: {
            disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple
        }
    },
    MuiButton: {
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    ...ownerState.variant === 'text' ? {
                        ...ownerState.size === 'small' && {
                            padding: theme.spacing(2, 2.5)
                        },
                        ...ownerState.size === 'medium' && {
                            padding: theme.spacing(2, 3.5)
                        },
                        ...ownerState.size === 'large' && {
                            padding: theme.spacing(2, 4.5)
                        }
                    } : {
                        ...ownerState.variant === 'outlined' ? {
                            ...ownerState.size === 'small' && {
                                padding: theme.spacing(1.75, 3.25)
                            },
                            ...ownerState.size === 'medium' && {
                                padding: theme.spacing(1.75, 4.25)
                            },
                            ...ownerState.size === 'large' && {
                                padding: theme.spacing(1.75, 5.25)
                            }
                        } : {
                            ...ownerState.size === 'small' && {
                                padding: theme.spacing(2, 3.5)
                            },
                            ...ownerState.size === 'medium' && {
                                padding: theme.spacing(2, 4.5)
                            },
                            ...ownerState.size === 'large' && {
                                padding: theme.spacing(2, 5.5)
                            }
                        }
                    }
                }),
            contained: ({ ownerState })=>({
                    boxShadow: 'var(--mui-customShadows-xs)',
                    ...!ownerState.disabled && {
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: 'var(--mui-customShadows-xs)'
                        },
                        '&:active': {
                            boxShadow: 'none'
                        }
                    }
                }),
            sizeSmall: ({ theme })=>({
                    lineHeight: 1.38462,
                    fontSize: theme.typography.body2.fontSize,
                    borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                }),
            sizeLarge: {
                fontSize: '1.0625rem',
                lineHeight: 1.529412,
                borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
            },
            startIcon: ({ theme, ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        marginInlineEnd: theme.spacing(1.5)
                    } : {
                        ...ownerState.size === 'medium' ? {
                            marginInlineEnd: theme.spacing(2)
                        } : {
                            marginInlineEnd: theme.spacing(2.5)
                        }
                    },
                    ...iconStyles(ownerState.size)
                }),
            endIcon: ({ theme, ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        marginInlineStart: theme.spacing(1.5)
                    } : {
                        ...ownerState.size === 'medium' ? {
                            marginInlineStart: theme.spacing(2)
                        } : {
                            marginInlineStart: theme.spacing(2.5)
                        }
                    },
                    ...iconStyles(ownerState.size)
                })
        },
        variants: [
            {
                props: {
                    variant: 'text',
                    color: 'primary'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-primary-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'secondary'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-secondary-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'error'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-error-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'warning'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-warning-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'info'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-info-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'success'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-success-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    color: 'primary'
                },
                style: {
                    borderColor: 'var(--mui-palette-primary-main)',
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-primary-main)',
                        borderColor: 'var(--mui-palette-primary-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    color: 'secondary'
                },
                style: {
                    borderColor: 'var(--mui-palette-secondary-main)',
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-secondary-main)',
                        borderColor: 'var(--mui-palette-secondary-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    color: 'error'
                },
                style: {
                    borderColor: 'var(--mui-palette-error-main)',
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-error-main)',
                        borderColor: 'var(--mui-palette-error-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    color: 'warning'
                },
                style: {
                    borderColor: 'var(--mui-palette-warning-main)',
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-warning-main)',
                        borderColor: 'var(--mui-palette-warning-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    color: 'info'
                },
                style: {
                    borderColor: 'var(--mui-palette-info-main)',
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-info-main)',
                        borderColor: 'var(--mui-palette-info-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    color: 'success'
                },
                style: {
                    borderColor: 'var(--mui-palette-success-main)',
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-success-main)',
                        borderColor: 'var(--mui-palette-success-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'contained',
                    color: 'primary'
                },
                style: {
                    '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-primary-dark)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-primary-contrastText)',
                        backgroundColor: 'var(--mui-palette-primary-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'contained',
                    color: 'secondary'
                },
                style: {
                    '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-secondary-dark)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-secondary-contrastText)',
                        backgroundColor: 'var(--mui-palette-secondary-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'contained',
                    color: 'error'
                },
                style: {
                    '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-error-dark)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-error-contrastText)',
                        backgroundColor: 'var(--mui-palette-error-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'contained',
                    color: 'warning'
                },
                style: {
                    '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-warning-dark)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-warning-contrastText)',
                        backgroundColor: 'var(--mui-palette-warning-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'contained',
                    color: 'info'
                },
                style: {
                    '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-info-dark)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-info-contrastText)',
                        backgroundColor: 'var(--mui-palette-info-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'contained',
                    color: 'success'
                },
                style: {
                    '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-success-dark)'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-success-contrastText)',
                        backgroundColor: 'var(--mui-palette-success-main)'
                    }
                }
            }
        ]
    }
};
const __TURBOPACK__default__export__ = button;

})()),
"[project]/src/@core/theme/overrides/button-group.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Config Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const buttonGroup = {
    MuiButtonGroup: {
        defaultProps: {
            disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple
        },
        styleOverrides: {
            contained: ({ ownerState })=>({
                    boxShadow: 'var(--mui-customShadows-xs)',
                    ...ownerState.disabled && {
                        boxShadow: 'none'
                    }
                })
        },
        variants: [
            {
                props: {
                    variant: 'text',
                    color: 'primary'
                },
                style: {
                    '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                        borderColor: 'var(--mui-palette-primary-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'secondary'
                },
                style: {
                    '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                        borderColor: 'var(--mui-palette-secondary-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'error'
                },
                style: {
                    '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                        borderColor: 'var(--mui-palette-error-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'warning'
                },
                style: {
                    '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                        borderColor: 'var(--mui-palette-warning-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'info'
                },
                style: {
                    '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                        borderColor: 'var(--mui-palette-info-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'success'
                },
                style: {
                    '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                        borderColor: 'var(--mui-palette-success-main)'
                    }
                }
            }
        ]
    }
};
const __TURBOPACK__default__export__ = buttonGroup;

})()),
"[project]/src/@core/theme/overrides/card.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const card = (skin)=>{
    return {
        MuiCard: {
            defaultProps: {
                ...skin === 'bordered' && {
                    variant: 'outlined'
                }
            },
            styleOverrides: {
                root: ({ ownerState })=>({
                        ...ownerState.variant !== 'outlined' && {
                            boxShadow: 'var(--mui-customShadows-md)'
                        }
                    })
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(5),
                        '& + .MuiCardContent-root, & + .MuiCardActions-root': {
                            paddingBlockStart: 0
                        },
                        '& + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child': {
                            paddingBlockStart: 0
                        }
                    }),
                subheader: ({ theme })=>({
                        ...theme.typography.subtitle1,
                        color: 'rgb(var(--mui-palette-text-primaryChannel) / 0.55)'
                    }),
                action: ({ theme })=>({
                        ...theme.typography.body1,
                        color: 'var(--mui-palette-text-disabled)',
                        marginBlock: 0,
                        marginInlineEnd: 0,
                        '& .MuiIconButton-root': {
                            color: 'inherit'
                        }
                    })
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(5),
                        color: 'var(--mui-palette-text-secondary)',
                        '&:last-child': {
                            paddingBlockEnd: theme.spacing(5)
                        },
                        '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
                            paddingBlockStart: 0
                        },
                        '& + .MuiCollapse-root .MuiCardHeader-root:first-child, & + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child': {
                            paddingBlockStart: 0
                        }
                    })
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(5),
                        '&:where(.card-actions-dense)': {
                            padding: theme.spacing(2.5),
                            '& .MuiButton-text': {
                                paddingInline: theme.spacing(2.5)
                            }
                        },
                        '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
                            paddingBlockStart: 0
                        },
                        '& + .MuiCollapse-root .MuiCardHeader-root:first-child, & + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child': {
                            paddingBlockStart: 0
                        }
                    })
            }
        }
    };
};
const __TURBOPACK__default__export__ = card;

})()),
"[project]/src/@core/theme/overrides/checkbox.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Icon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z",
            stroke: "var(--mui-palette-text-secondary)",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const IndeterminateIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 11.5h7v1h-7v-1Z",
                fill: "var(--mui-palette-common-white)"
            }, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const CheckedIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m11 13.586 4.596-4.597.707.707L11 15l-3.182-3.182.707-.707L11 13.586Z",
                fill: "var(--mui-palette-common-white)"
            }, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
const checkbox = {
    MuiCheckbox: {
        defaultProps: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            indeterminateIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IndeterminateIcon, {}, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 41,
                columnNumber: 26
            }, this),
            checkedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckedIcon, {}, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 42,
                columnNumber: 20
            }, this)
        },
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        padding: theme.spacing(1),
                        '& svg': {
                            fontSize: '1.25rem'
                        }
                    } : {
                        padding: theme.spacing(1.5),
                        '& svg': {
                            fontSize: '1.5rem'
                        }
                    },
                    '&.Mui-checked:not(.Mui-disabled) svg': {
                        filter: 'drop-shadow(var(--mui-customShadows-xs))'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        '&:not(.Mui-checked)': {
                            color: 'var(--mui-palette-text-secondary)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorPrimary': {
                            color: 'var(--mui-palette-primary-main)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorSecondary': {
                            color: 'var(--mui-palette-secondary-main)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorError': {
                            color: 'var(--mui-palette-error-main)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorWarning': {
                            color: 'var(--mui-palette-warning-main)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorInfo': {
                            color: 'var(--mui-palette-info-main)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorSuccess': {
                            color: 'var(--mui-palette-success-main)'
                        }
                    }
                })
        }
    }
};
const __TURBOPACK__default__export__ = checkbox;

})()),
"[project]/src/@core/theme/overrides/chip.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const chip = {
    MuiChip: {
        variants: [
            {
                props: {
                    variant: 'tonal',
                    color: 'primary'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                    color: 'var(--mui-palette-primary-main)',
                    '&.Mui-focusVisible': {
                        backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                    },
                    '& .MuiChip-deleteIcon': {
                        color: 'rgb(var(--mui-palette-primary-mainChannel) / 0.7)',
                        '&:hover': {
                            color: 'var(--mui-palette-primary-main)'
                        }
                    },
                    '&.MuiChip-clickable:hover': {
                        backgroundColor: 'var(--mui-palette-primary-main)',
                        color: 'var(--mui-palette-common-white)'
                    }
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'secondary'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
                    color: 'var(--mui-palette-secondary-main)',
                    '&.Mui-focusVisible': {
                        backgroundColor: 'var(--mui-palette-secondary-mainOpacity)'
                    },
                    '& .MuiChip-deleteIcon': {
                        color: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.7)',
                        '&:hover': {
                            color: 'var(--mui-palette-secondary-main)'
                        }
                    },
                    '&.MuiChip-clickable:hover': {
                        backgroundColor: 'var(--mui-palette-secondary-main)',
                        color: 'var(--mui-palette-common-white)'
                    }
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'error'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-error-lightOpacity)',
                    color: 'var(--mui-palette-error-main)',
                    '&.Mui-focusVisible': {
                        backgroundColor: 'var(--mui-palette-error-mainOpacity)'
                    },
                    '& .MuiChip-deleteIcon': {
                        color: 'rgb(var(--mui-palette-error-mainChannel) / 0.7)',
                        '&:hover': {
                            color: 'var(--mui-palette-error-main)'
                        }
                    },
                    '&.MuiChip-clickable:hover': {
                        backgroundColor: 'var(--mui-palette-error-main)',
                        color: 'var(--mui-palette-common-white)'
                    }
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'warning'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
                    color: 'var(--mui-palette-warning-main)',
                    '&.Mui-focusVisible': {
                        backgroundColor: 'var(--mui-palette-warning-mainOpacity)'
                    },
                    '& .MuiChip-deleteIcon': {
                        color: 'rgb(var(--mui-palette-warning-mainChannel) / 0.7)',
                        '&:hover': {
                            color: 'var(--mui-palette-warning-main)'
                        }
                    },
                    '&.MuiChip-clickable:hover': {
                        backgroundColor: 'var(--mui-palette-warning-main)',
                        color: 'var(--mui-palette-common-white)'
                    }
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'info'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-info-lightOpacity)',
                    color: 'var(--mui-palette-info-main)',
                    '&.Mui-focusVisible': {
                        backgroundColor: 'var(--mui-palette-info-mainOpacity)'
                    },
                    '& .MuiChip-deleteIcon': {
                        color: 'rgb(var(--mui-palette-info-mainChannel) / 0.7)',
                        '&:hover': {
                            color: 'var(--mui-palette-info-main)'
                        }
                    },
                    '&.MuiChip-clickable:hover': {
                        backgroundColor: 'var(--mui-palette-info-main)',
                        color: 'var(--mui-palette-common-white)'
                    }
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'success'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-success-lightOpacity)',
                    color: 'var(--mui-palette-success-main)',
                    '&.Mui-focusVisible': {
                        backgroundColor: 'var(--mui-palette-success-mainOpacity)'
                    },
                    '& .MuiChip-deleteIcon': {
                        color: 'rgb(var(--mui-palette-success-mainChannel) / 0.7)',
                        '&:hover': {
                            color: 'var(--mui-palette-success-main)'
                        }
                    },
                    '&.MuiChip-clickable:hover': {
                        backgroundColor: 'var(--mui-palette-success-main)',
                        color: 'var(--mui-palette-common-white)'
                    }
                }
            }
        ],
        styleOverrides: {
            root: ({ ownerState, theme })=>({
                    ...theme.typography.body2,
                    fontWeight: theme.typography.fontWeightMedium,
                    '& .MuiChip-deleteIcon': {
                        ...ownerState.size === 'small' ? {
                            fontSize: '1rem',
                            marginInlineEnd: theme.spacing(1),
                            marginInlineStart: theme.spacing(-2)
                        } : {
                            fontSize: '1.25rem',
                            marginInlineEnd: theme.spacing(2),
                            marginInlineStart: theme.spacing(-3)
                        }
                    },
                    '& .MuiChip-avatar, & .MuiChip-icon': {
                        '& i, & svg': {
                            ...ownerState.size === 'small' ? {
                                fontSize: 13
                            } : {
                                fontSize: 15
                            }
                        },
                        ...ownerState.size === 'small' ? {
                            height: 16,
                            width: 16,
                            marginInlineStart: theme.spacing(1),
                            marginInlineEnd: theme.spacing(-2)
                        } : {
                            height: 20,
                            width: 20,
                            marginInlineStart: theme.spacing(2),
                            marginInlineEnd: theme.spacing(-3)
                        }
                    }
                }),
            label: ({ ownerState, theme })=>({
                    ...ownerState.size === 'small' ? {
                        paddingInline: theme.spacing(3)
                    } : {
                        paddingInline: theme.spacing(4)
                    }
                }),
            iconMedium: {
                fontSize: '1.25rem'
            },
            iconSmall: {
                fontSize: '1rem'
            }
        }
    }
};
const __TURBOPACK__default__export__ = chip;

})()),
"[project]/src/@core/theme/overrides/dialog.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const dialog = (skin)=>({
        MuiDialog: {
            styleOverrides: {
                paper: ({ theme })=>({
                        ...skin !== 'bordered' ? {
                            boxShadow: 'var(--mui-customShadows-xl)'
                        } : {
                            boxShadow: 'none'
                        },
                        [theme.breakpoints.down('sm')]: {
                            '&:not(.MuiDialog-paperFullScreen)': {
                                margin: theme.spacing(6)
                            }
                        }
                    })
            }
        },
        MuiDialogTitle: {
            defaultProps: {
                variant: 'h5'
            },
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(5),
                        '& + .MuiDialogActions-root': {
                            paddingTop: 0
                        }
                    })
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(5),
                        '& + .MuiDialogContent-root, & + .MuiDialogActions-root': {
                            paddingTop: 0
                        }
                    })
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(5),
                        '& .MuiButtonBase-root:not(:first-of-type)': {
                            marginInlineStart: theme.spacing(4)
                        },
                        '&:where(.dialog-actions-dense)': {
                            padding: theme.spacing(2.5),
                            '& .MuiButton-text': {
                                paddingInline: theme.spacing(2.5)
                            }
                        }
                    })
            }
        }
    });
const __TURBOPACK__default__export__ = dialog;

})()),
"[project]/src/@core/theme/overrides/drawer.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const drawer = (skin)=>({
        MuiDrawer: {
            defaultProps: {
                ...skin === 'bordered' && {
                    PaperProps: {
                        elevation: 0
                    }
                }
            },
            styleOverrides: {
                paper: {
                    ...skin !== 'bordered' && {
                        boxShadow: 'var(--mui-customShadows-lg)'
                    }
                }
            }
        }
    });
const __TURBOPACK__default__export__ = drawer;

})()),
"[project]/src/@core/theme/overrides/fab.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const fab = {
    MuiFab: {
        variants: [
            {
                props: {
                    color: 'default'
                },
                style: {
                    color: 'rgb(var(--mui-mainColorChannels-light) / 0.9)',
                    '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-grey-A100)'
                    }
                }
            },
            {
                props: {
                    color: 'primary'
                },
                style: {
                    '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-primary-dark)'
                    }
                }
            },
            {
                props: {
                    color: 'secondary'
                },
                style: {
                    '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-secondary-dark)'
                    }
                }
            },
            {
                props: {
                    color: 'error'
                },
                style: {
                    '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-error-dark)'
                    }
                }
            },
            {
                props: {
                    color: 'warning'
                },
                style: {
                    '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-warning-dark)'
                    }
                }
            },
            {
                props: {
                    color: 'info'
                },
                style: {
                    '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-info-dark)'
                    }
                }
            },
            {
                props: {
                    color: 'success'
                },
                style: {
                    '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'var(--mui-palette-success-dark)'
                    }
                }
            }
        ]
    }
};
const __TURBOPACK__default__export__ = fab;

})()),
"[project]/src/@core/theme/overrides/form-control-label.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const formControlLabel = {
    MuiFormControlLabel: {
        styleOverrides: {
            root: ({ theme })=>({
                    marginInlineStart: theme.spacing(-2)
                }),
            label: {
                '&, &.Mui-disabled': {
                    color: 'var(--mui-palette-text-primary)'
                },
                '&.Mui-disabled': {
                    opacity: 0.45
                }
            }
        }
    }
};
const __TURBOPACK__default__export__ = formControlLabel;

})()),
"[project]/src/@core/theme/overrides/icon-button.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Config Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const iconButton = {
    MuiIconButton: {
        styleOverrides: {
            root: {
                '& .MuiSvgIcon-root, & i, & svg': {
                    fontSize: 'inherit'
                }
            },
            sizeSmall: ({ theme })=>({
                    padding: theme.spacing(1.75),
                    fontSize: '1.25rem'
                }),
            sizeMedium: ({ theme })=>({
                    padding: theme.spacing(2),
                    fontSize: '1.375rem'
                }),
            sizeLarge: ({ theme })=>({
                    padding: theme.spacing(2.25),
                    fontSize: '1.5rem'
                })
        },
        variants: [
            {
                props: {
                    color: 'default'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                        backgroundColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.08)'
                    },
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                        '&.Mui-focusVisible:not(.Mui-disabled)': {
                            backgroundColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.08)'
                        }
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-action-active)'
                    }
                }
            },
            {
                props: {
                    color: 'primary'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                        backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                    },
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                        '&.Mui-focusVisible:not(.Mui-disabled)': {
                            backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                        }
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-primary-main)'
                    }
                }
            },
            {
                props: {
                    color: 'secondary'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                        backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                    },
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                        '&.Mui-focusVisible:not(.Mui-disabled)': {
                            backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                        }
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-secondary-main)'
                    }
                }
            },
            {
                props: {
                    color: 'error'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                        backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                    },
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                        '&.Mui-focusVisible:not(.Mui-disabled)': {
                            backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                        }
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-error-main)'
                    }
                }
            },
            {
                props: {
                    color: 'warning'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                        backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                    },
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                        '&.Mui-focusVisible:not(.Mui-disabled)': {
                            backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                        }
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-warning-main)'
                    }
                }
            },
            {
                props: {
                    color: 'info'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                        backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                    },
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                        '&.Mui-focusVisible:not(.Mui-disabled)': {
                            backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                        }
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-info-main)'
                    }
                }
            },
            {
                props: {
                    color: 'success'
                },
                style: {
                    '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                        backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                    },
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                        '&.Mui-focusVisible:not(.Mui-disabled)': {
                            backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                        }
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: 'var(--mui-palette-success-main)'
                    }
                }
            }
        ]
    }
};
const __TURBOPACK__default__export__ = iconButton;

})()),
"[project]/src/@core/theme/overrides/input.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const input = {
    MuiFormControl: {
        styleOverrides: {
            root: {
                '&:has(.MuiRadio-root) .MuiFormHelperText-root, &:has(.MuiCheckbox-root) .MuiFormHelperText-root, &:has(.MuiSwitch-root) .MuiFormHelperText-root': {
                    marginInline: 0
                }
            }
        }
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
                lineHeight: 1.6,
                '&.MuiInput-underline': {
                    '&:before': {
                        borderColor: 'var(--mui-palette-customColors-inputBorder)'
                    },
                    '&:not(.Mui-disabled, .Mui-error):hover:before': {
                        borderColor: 'var(--mui-palette-action-active)'
                    }
                },
                '&.Mui-disabled .MuiInputAdornment-root, &.Mui-disabled .MuiInputAdornment-root > *': {
                    color: 'var(--mui-palette-action-disabled)'
                }
            }
        }
    },
    MuiFilledInput: {
        styleOverrides: {
            root: {
                '&:before': {
                    borderBottom: '1px solid var(--mui-palette-text-secondary)'
                },
                '&.Mui-disabled:before': {
                    borderBottomStyle: 'solid'
                }
            }
        }
    },
    MuiInputLabel: {
        styleOverrides: {
            shrink: ({ ownerState })=>({
                    ...ownerState.variant === 'outlined' && {
                        color: 'var(--mui-palette-text-secondary)',
                        transform: 'translate(14px, -8px) scale(0.867)'
                    },
                    ...ownerState.variant === 'filled' && {
                        transform: 'translate(12px, 7px) scale(0.867)'
                    },
                    ...ownerState.variant === 'standard' && {
                        transform: 'translate(0, -1.5px) scale(0.867)'
                    }
                })
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                '&:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--mui-palette-action-active)'
                },
                '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--mui-palette-action-disabledBackground)'
                }
            },
            input: ({ theme, ownerState })=>({
                    ...ownerState?.size === 'medium' && {
                        '&:not(.MuiInputBase-inputMultiline, .MuiInputBase-inputAdornedStart)': {
                            paddingBlock: theme.spacing(4)
                        },
                        height: '1.5em'
                    },
                    '& ~ .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-customColors-inputBorder)'
                    }
                }),
            notchedOutline: {
                '& legend': {
                    fontSize: '0.867em'
                }
            }
        }
    },
    MuiInputAdornment: {
        styleOverrides: {
            root: {
                color: 'var(--mui-palette-text-primary)',
                '& i, & svg': {
                    fontSize: '1.25rem'
                },
                '& *': {
                    color: 'inherit !important'
                }
            }
        }
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                lineHeight: 1,
                letterSpacing: 'unset'
            }
        }
    }
};
const __TURBOPACK__default__export__ = input;

})()),
"[project]/src/@core/theme/overrides/list.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const list = {
    MuiListItem: {
        styleOverrides: {
            root: ({ theme })=>({
                    gap: theme.spacing(4)
                }),
            padding: ({ theme, ownerState })=>({
                    ...!ownerState.dense && {
                        paddingBlock: theme.spacing(2),
                        paddingInlineStart: theme.spacing(5)
                    }
                })
        }
    },
    MuiListItemAvatar: {
        styleOverrides: {
            root: {
                minWidth: 'unset'
            }
        }
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: 0,
                color: 'var(--mui-palette-text-primary)',
                fontSize: '1.375rem',
                '& > svg, & > i': {
                    fontSize: 'inherit'
                }
            }
        }
    },
    MuiListItemButton: {
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    gap: theme.spacing(4),
                    ...!ownerState.dense && {
                        paddingBlock: theme.spacing(2)
                    },
                    paddingInlineStart: theme.spacing(5),
                    '&.Mui-selected': {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                        '&:hover, &.Mui-focused, &.Mui-focusVisible': {
                            backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                        },
                        '& .MuiTypography-root': {
                            color: 'var(--mui-palette-primary-main)'
                        },
                        '& + .MuiListItemSecondaryAction-root .MuiIconButton-root': {
                            color: 'var(--mui-palette-primary-main)'
                        }
                    }
                })
        }
    },
    MuiListItemText: {
        styleOverrides: {
            root: {
                margin: 0
            },
            primary: {
                color: 'var(--mui-palette-text-primary)'
            }
        }
    },
    MuiListSubheader: {
        styleOverrides: {
            root: ({ theme })=>({
                    ...theme.typography.subtitle2,
                    paddingBlock: 10,
                    paddingInline: theme.spacing(5)
                })
        }
    }
};
const __TURBOPACK__default__export__ = list;

})()),
"[project]/src/@core/theme/overrides/menu.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const menu = (skin)=>({
        MuiMenu: {
            defaultProps: {
                ...skin === 'bordered' && {
                    slotProps: {
                        paper: {
                            elevation: 0
                        }
                    }
                }
            },
            styleOverrides: {
                paper: ({ theme })=>({
                        marginBlockStart: theme.spacing(0.5),
                        ...skin !== 'bordered' && {
                            boxShadow: 'var(--mui-customShadows-lg)'
                        }
                    })
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: ({ theme })=>({
                        paddingBlock: theme.spacing(2),
                        color: 'var(--mui-palette-text-primary)',
                        '& i, & svg': {
                            fontSize: '1.375rem'
                        },
                        '& .MuiListItemIcon-root': {
                            minInlineSize: 0
                        },
                        '&.Mui-selected': {
                            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                            color: 'var(--mui-palette-primary-main)',
                            '& .MuiListItemIcon-root': {
                                color: 'var(--mui-palette-primary-main)'
                            },
                            '&:hover, &.Mui-focused, &.Mui-focusVisible': {
                                backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                            }
                        },
                        '&.Mui-disabled': {
                            color: 'var(--mui-palette-text-disabled)',
                            opacity: 1
                        }
                    })
            }
        }
    });
const __TURBOPACK__default__export__ = menu;

})()),
"[project]/src/@core/theme/overrides/pagination.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const pagination = {
    MuiPagination: {
        styleOverrides: {
            ul: {
                rowGap: 6
            }
        },
        variants: [
            {
                props: {
                    variant: 'text',
                    color: 'primary'
                },
                style: {
                    '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                        backgroundColor: 'var(--mui-palette-primary-main)',
                        color: 'var(--mui-palette-primary-contrastText)'
                    }
                }
            },
            {
                props: {
                    variant: 'text',
                    color: 'secondary'
                },
                style: {
                    '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                        backgroundColor: 'var(--mui-palette-secondary-main)',
                        color: 'var(--mui-palette-secondary-contrastText)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    color: 'standard'
                },
                style: {
                    '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                        borderColor: 'var(--mui-palette-action-selected)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    color: 'primary'
                },
                style: {
                    '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                        color: 'var(--mui-palette-primary-main)',
                        backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-activatedOpacity))',
                        borderColor: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)'
                    }
                }
            },
            {
                props: {
                    variant: 'outlined',
                    color: 'secondary'
                },
                style: {
                    '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                        color: 'var(--mui-palette-secondary-main)',
                        backgroundColor: 'rgb(var(--mui-palette-secondary-mainChannel) / var(--mui-palette-action-activatedOpacity))',
                        borderColor: 'rgba(var(--mui-palette-secondary-mainChannel) / 0.5)'
                    }
                }
            },
            {
                props: {
                    variant: 'tonal'
                },
                style: {
                    '& .MuiPaginationItem-root:not(.MuiPaginationItem-ellipsis)': {
                        backgroundColor: 'var(--mui-palette-action-selected)'
                    }
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'standard'
                },
                style: {
                    '& .MuiPaginationItem-root.Mui-selected': {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                        color: 'var(--mui-palette-primary-main)',
                        '&:hover': {
                            backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                        }
                    },
                    '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
                        backgroundColor: 'var(--mui-palette-action-focus)'
                    },
                    '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                        color: 'var(--mui-palette-primary-main)'
                    }
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'primary'
                },
                style: {
                    '& .MuiPaginationItem-root.Mui-selected': {
                        backgroundColor: 'var(--mui-palette-primary-main)',
                        color: 'var(--mui-palette-primary-contrastText)',
                        '&:not(.Mui-disabled)': {
                            boxShadow: 'var(--mui-customShadows-xs)'
                        },
                        '&:hover': {
                            backgroundColor: 'var(--mui-palette-primary-dark)'
                        }
                    },
                    '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                        color: 'var(--mui-palette-primary-main)'
                    },
                    '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                        backgroundColor: 'var(--mui-palette-primary-main)',
                        color: 'var(--mui-palette-primary-contrastText)'
                    }
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'secondary'
                },
                style: {
                    '& .MuiPaginationItem-root.Mui-selected': {
                        backgroundColor: 'var(--mui-palette-secondary-main)',
                        color: 'var(--mui-palette-secondary-contrastText)',
                        '&:not(.Mui-disabled)': {
                            boxShadow: 'var(--mui-customShadows-xs)'
                        },
                        '&:hover': {
                            backgroundColor: 'var(--mui-palette-secondary-dark)'
                        }
                    },
                    '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
                        backgroundColor: 'var(--mui-palette-secondary-mainOpacity)',
                        color: 'var(--mui-palette-secondary-main)'
                    },
                    '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                        backgroundColor: 'var(--mui-palette-secondary-main)',
                        color: 'var(--mui-palette-secondary-contrastText)'
                    }
                }
            }
        ]
    },
    MuiPaginationItem: {
        styleOverrides: {
            root: ({ ownerState })=>({
                    ...ownerState.size === 'medium' && {
                        height: '2.375rem',
                        minWidth: '2.375rem'
                    },
                    ...ownerState.shape !== 'rounded' && {
                        borderRadius: '50px'
                    },
                    '&.Mui-selected.Mui-disabled': {
                        color: 'var(--mui-palette-text-primary)',
                        opacity: 0.45
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45
                    },
                    ...ownerState.shape === 'rounded' && ownerState.size === 'small' && {
                        borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                    },
                    ...ownerState.shape === 'rounded' && ownerState.size === 'large' && {
                        borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
                    }
                }),
            sizeSmall: {
                height: '2.125rem',
                minWidth: '2.125rem'
            },
            sizeLarge: {
                height: '2.625rem',
                minWidth: '2.625rem'
            }
        }
    }
};
const __TURBOPACK__default__export__ = pagination;

})()),
"[project]/src/@core/theme/overrides/paper.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const paper = {
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: 'none'
            }
        }
    }
};
const __TURBOPACK__default__export__ = paper;

})()),
"[project]/src/@core/theme/overrides/popover.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const popover = (skin)=>({
        MuiPopover: {
            styleOverrides: {
                paper: {
                    ...skin === 'bordered' ? {
                        boxShadow: 'none',
                        border: '1px solid var(--mui-palette-divider)'
                    } : {
                        boxShadow: 'var(--mui-customShadows-sm)'
                    }
                }
            }
        }
    });
const __TURBOPACK__default__export__ = popover;

})()),
"[project]/src/@core/theme/overrides/progress.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const progress = {
    MuiLinearProgress: {
        styleOverrides: {
            root: {
                height: 6,
                borderRadius: 'var(--mui-shape-borderRadius)',
                '& .MuiLinearProgress-bar': {
                    borderRadius: 'var(--mui-shape-borderRadius)'
                }
            }
        }
    }
};
const __TURBOPACK__default__export__ = progress;

})()),
"[project]/src/@core/theme/overrides/radio.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const IconChecked = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z",
            fill: "var(--mui-palette-common-white)",
            stroke: "currentColor",
            strokeWidth: "5"
        }, void 0, false, {
            fileName: "[project]/src/@core/theme/overrides/radio.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/@core/theme/overrides/radio.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const UncheckedIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z",
            stroke: "var(--mui-palette-text-secondary)",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/src/@core/theme/overrides/radio.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/@core/theme/overrides/radio.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
const radio = {
    MuiRadio: {
        defaultProps: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UncheckedIcon, {}, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/radio.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            checkedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChecked, {}, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/radio.jsx",
                lineNumber: 29,
                columnNumber: 20
            }, this)
        },
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        padding: theme.spacing(1),
                        '& svg': {
                            fontSize: '1.25rem'
                        }
                    } : {
                        padding: theme.spacing(1.5),
                        '& svg': {
                            fontSize: '1.5rem'
                        }
                    },
                    '&.Mui-checked:not(.Mui-disabled) svg': {
                        filter: 'drop-shadow(var(--mui-customShadows-xs))'
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        '&:not(.Mui-checked)': {
                            color: 'var(--mui-palette-text-secondary)'
                        },
                        '&.Mui-checked.MuiRadio-colorPrimary': {
                            color: 'var(--mui-palette-primary-main)'
                        },
                        '&.Mui-checked.MuiRadio-colorSecondary': {
                            color: 'var(--mui-palette-secondary-main)'
                        },
                        '&.Mui-checked.MuiRadio-colorError': {
                            color: 'var(--mui-palette-error-main)'
                        },
                        '&.Mui-checked.MuiRadio-colorWarning': {
                            color: 'var(--mui-palette-warning-main)'
                        },
                        '&.Mui-checked.MuiRadio-colorInfo': {
                            color: 'var(--mui-palette-info-main)'
                        },
                        '&.Mui-checked.MuiRadio-colorSuccess': {
                            color: 'var(--mui-palette-success-main)'
                        }
                    }
                })
        }
    }
};
const __TURBOPACK__default__export__ = radio;

})()),
"[project]/src/@core/theme/overrides/rating.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const rating = {
    MuiRating: {
        defaultProps: {
            emptyIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "ri-star-line"
            }, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/rating.jsx",
                lineNumber: 4,
                columnNumber: 18
            }, this),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "ri-star-fill"
            }, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/rating.jsx",
                lineNumber: 5,
                columnNumber: 13
            }, this)
        },
        styleOverrides: {
            root: {
                gap: '2px',
                color: 'var(--mui-palette-warning-main)',
                '& i, & svg': {
                    flexShrink: 0
                },
                '& .MuiRating-decimal > label:first-of-type, & .MuiRating-decimal > span:first-of-type': {
                    zIndex: 1
                }
            },
            sizeSmall: {
                '& .MuiRating-icon i, & .MuiRating-icon svg': {
                    fontSize: '1.25rem'
                }
            },
            sizeLarge: {
                '& .MuiRating-icon i, & .MuiRating-icon svg': {
                    fontSize: '1.75rem'
                }
            }
        }
    }
};
const __TURBOPACK__default__export__ = rating;

})()),
"[project]/src/@core/theme/overrides/select.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const SelectIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
        className: "ri-arrow-down-s-line"
    }, void 0, false, {
        fileName: "[project]/src/@core/theme/overrides/select.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
};
const iconStyles = (theme)=>({
        userSelect: 'none',
        display: 'inline-block',
        fill: 'currentColor',
        flexShrink: 0,
        transition: theme.transitions.create('fill', {
            duration: theme.transitions.duration.shorter
        }),
        fontSize: '1.25rem',
        position: 'absolute',
        right: '1rem',
        top: 'calc(50% - 0.5em)',
        pointerEvents: 'none'
    });
const select = {
    MuiSelect: {
        defaultProps: {
            IconComponent: SelectIcon
        },
        styleOverrides: {
            select: ({ theme, ownerState })=>({
                    ...ownerState.variant === 'outlined' && {
                        minHeight: '1.5em'
                    },
                    '&[aria-expanded="true"] ~ i, &[aria-expanded="true"] ~ svg': {
                        transform: 'rotate(180deg)'
                    },
                    '& ~ i, & ~ svg': iconStyles(theme),
                    '&.MuiInputBase-inputSizeSmall': {
                        '& ~ i, & ~ svg': {
                            height: '1.375rem',
                            width: '1.375rem'
                        }
                    },
                    '&:not(aria-label="Without label") ~ .MuiOutlinedInput-notchedOutline > legend > span': {
                        paddingInline: '5px'
                    }
                })
        }
    },
    MuiNativeSelect: {
        styleOverrides: {
            select: ({ theme })=>({
                    '& + i, & + svg': iconStyles(theme)
                })
        }
    }
};
const __TURBOPACK__default__export__ = select;

})()),
"[project]/src/@core/theme/overrides/slider.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const slider = {
    MuiSlider: {
        styleOverrides: {
            root: ({ ownerState })=>({
                    boxSizing: 'border-box',
                    ...ownerState.orientation === 'horizontal' ? ownerState.size !== 'small' ? {
                        height: 6
                    } : {
                        height: 4
                    } : ownerState.size !== 'small' ? {
                        width: 6
                    } : {
                        width: 4
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: `var(--mui-palette-${ownerState.color}-main)`
                    }
                }),
            thumb: ({ ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        height: 14,
                        width: 14,
                        border: '2px solid currentColor',
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: `0 0 0 7px var(--mui-palette-${ownerState.color}-lightOpacity)`
                        },
                        '&.Mui-active.Mui-focusVisible': {
                            boxShadow: `0 0 0 10px var(--mui-palette-${ownerState.color}-lightOpacity)`
                        }
                    } : {
                        height: 22,
                        width: 22,
                        border: '4px solid currentColor'
                    },
                    backgroundColor: 'var(--mui-palette-common-white)',
                    ...!ownerState.disabled && {
                        boxShadow: 'var(--mui-customShadows-sm)'
                    },
                    '&:before': {
                        boxShadow: 'none'
                    },
                    '&:after': {
                        ...ownerState.size === 'small' ? {
                            height: 28,
                            width: 28
                        } : {
                            height: 38,
                            width: 38
                        }
                    },
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: `0 0 0 8px var(--mui-palette-${ownerState.color}-lightOpacity)`
                    },
                    '&.Mui-active.Mui-focusVisible': {
                        boxShadow: `0 0 0 13px var(--mui-palette-${ownerState.color}-lightOpacity)`
                    }
                }),
            rail: ({ ownerState })=>({
                    opacity: 1,
                    color: `var(--mui-palette-${ownerState.color}-lightOpacity)`,
                    ...ownerState.track === 'inverted' && {
                        backgroundColor: `var(--mui-palette-${ownerState.color}-main)`
                    }
                }),
            valueLabel: ({ theme, ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        ...theme.typography.caption,
                        borderRadius: 'var(--mui-shape-customBorderRadius-sm)',
                        padding: theme.spacing(1, 2)
                    } : {
                        ...theme.typography.body2,
                        fontWeight: theme.typography.fontWeightMedium,
                        borderRadius: 'var(--mui-shape-borderRadius)',
                        padding: theme.spacing(1, 2.5)
                    },
                    color: 'var(--mui-palette-customColors-tooltipText)',
                    backgroundColor: 'var(--mui-palette-Tooltip-bg)',
                    '&:before': {
                        display: 'none'
                    }
                }),
            track: ({ theme, ownerState })=>({
                    ...ownerState.track === 'inverted' && {
                        backgroundColor: `color-mix(in srgb, ${theme.palette[ownerState.color || 'primary'].main} 16%, var(--mui-palette-background-paper))`,
                        borderColor: `color-mix(in srgb, ${theme.palette[ownerState.color || 'primary'].main} 16%, var(--mui-palette-background-paper))`
                    }
                })
        }
    }
};
const __TURBOPACK__default__export__ = slider;

})()),
"[project]/src/@core/theme/overrides/snackbar.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const snackbar = (skin)=>({
        MuiSnackbarContent: {
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(0, 4),
                        ...skin !== 'bordered' ? {
                            boxShadow: 'var(--mui-customShadows-xs)'
                        } : {
                            boxShadow: 'none'
                        },
                        '& .MuiSnackbarContent-message': {
                            paddingBlock: theme.spacing(3)
                        }
                    })
            }
        }
    });
const __TURBOPACK__default__export__ = snackbar;

})()),
"[project]/src/@core/theme/overrides/switch.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const switchOverrides = {
    MuiSwitch: {
        defaultProps: {
            disableRipple: true
        },
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    '&:has(.Mui-disabled)': {
                        opacity: 0.45
                    },
                    ...ownerState.size !== 'small' ? {
                        width: 46,
                        height: 36,
                        padding: theme.spacing(2.25, 2)
                    } : {
                        width: 42,
                        height: 30,
                        padding: theme.spacing(1.75, 2),
                        '& .MuiSwitch-thumb': {
                            width: 12,
                            height: 12
                        },
                        '& .MuiSwitch-switchBase': {
                            padding: 7,
                            left: 3,
                            '&.Mui-checked': {
                                left: -3
                            }
                        }
                    }
                }),
            switchBase: {
                top: 2,
                left: 1,
                '&.Mui-checked': {
                    left: -7,
                    color: 'var(--mui-palette-common-white)',
                    '& + .MuiSwitch-track': {
                        opacity: 1
                    }
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 1
                },
                '&:hover:not(:has(span.MuiTouchRipple-root))': {
                    backgroundColor: 'transparent'
                }
            },
            thumb: {
                width: 14,
                height: 14,
                boxShadow: 'var(--mui-customShadows-xs)'
            },
            track: {
                opacity: 1,
                borderRadius: 10,
                backgroundColor: 'var(--mui-palette-action-focus)',
                boxShadow: '0 0 4px rgb(0 0 0 / 0.16) inset'
            }
        }
    }
};
const __TURBOPACK__default__export__ = switchOverrides;

})()),
"[project]/src/@core/theme/overrides/table-pagination.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const tablePagination = {
    MuiTablePagination: {
        styleOverrides: {
            toolbar: ({ theme })=>({
                    paddingInlineEnd: `${theme.spacing(3)} !important`
                }),
            select: ({ theme })=>({
                    ...theme.typography.body1,
                    paddingInlineStart: 0,
                    '& ~ i, & ~ svg': {
                        fontSize: 20,
                        right: '2px !important',
                        color: 'var(--mui-palette-action-active)'
                    }
                }),
            selectLabel: ({ theme })=>({
                    ...theme.typography.body1,
                    color: 'var(--mui-palette-text-secondary)'
                }),
            input: ({ theme })=>({
                    marginInlineEnd: theme.spacing(6)
                }),
            displayedRows: ({ theme })=>({
                    ...theme.typography.body1
                }),
            actions: ({ theme })=>({
                    marginInlineStart: theme.spacing(6),
                    '& .Mui-disabled': {
                        color: 'var(--mui-palette-action-active)'
                    },
                    '& .MuiIconButton-root:last-of-type': {
                        marginInlineStart: theme.spacing(2)
                    }
                })
        }
    }
};
const __TURBOPACK__default__export__ = tablePagination;

})()),
"[project]/src/@core/theme/overrides/tabs.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const tabs = {
    MuiTabs: {
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    minBlockSize: 38,
                    ...ownerState.orientation === 'horizontal' ? {
                        borderBlockEnd: '1px solid var(--mui-palette-divider)'
                    } : {
                        borderInlineEnd: '1px solid var(--mui-palette-divider)'
                    },
                    '& .MuiTab-root:hover': {
                        ...ownerState.orientation === 'horizontal' ? {
                            paddingBlockEnd: theme.spacing(1.5),
                            ...ownerState.textColor === 'secondary' ? {
                                color: 'var(--mui-palette-secondary-main)',
                                borderBlockEnd: '2px solid var(--mui-palette-secondary-lightOpacity)'
                            } : {
                                color: 'var(--mui-palette-primary-main)',
                                borderBlockEnd: '2px solid var(--mui-palette-primary-lightOpacity)'
                            }
                        } : {
                            paddingInlineEnd: theme.spacing(5),
                            ...ownerState.textColor === 'secondary' ? {
                                color: 'var(--mui-palette-secondary-main)',
                                borderInlineEnd: '2px solid var(--mui-palette-secondary-mainOpacity)'
                            } : {
                                color: 'var(--mui-palette-primary-main)',
                                borderInlineEnd: '2px solid var(--mui-palette-primary-mainOpacity)'
                            }
                        },
                        '& .MuiTabScrollButton-root': {
                            borderRadius: 'var(--mui-shape-borderRadius)'
                        }
                    },
                    '& ~ .MuiTabPanel-root': {
                        ...ownerState.orientation === 'horizontal' ? {
                            paddingBlockStart: theme.spacing(5)
                        } : {
                            paddingInlineStart: theme.spacing(5)
                        }
                    }
                }),
            vertical: {
                minWidth: 131,
                '& .MuiTab-root': {
                    minWidth: 130
                }
            }
        }
    },
    MuiTab: {
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    lineHeight: 1.4667,
                    padding: theme.spacing(2, 5.5),
                    minBlockSize: 38,
                    color: 'var(--mui-palette-text-primary)',
                    '& > .MuiTab-iconWrapper': {
                        fontSize: '1.125rem',
                        ...ownerState.iconPosition === 'start' && {
                            marginInlineEnd: theme.spacing(1.5)
                        },
                        ...ownerState.iconPosition === 'end' && {
                            marginInlineStart: theme.spacing(1.5)
                        }
                    }
                })
        }
    },
    MuiTabPanel: {
        styleOverrides: {
            root: {
                padding: 0
            }
        }
    }
};
const __TURBOPACK__default__export__ = tabs;

})()),
"[project]/src/@core/theme/overrides/timeline.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const timeline = {
    MuiTimeline: {
        styleOverrides: {
            root: {
                padding: 0
            }
        }
    },
    MuiTimelineDot: {
        styleOverrides: {
            root: ({ theme })=>({
                    margin: theme.spacing(3, 0),
                    boxShadow: 'none',
                    '&:has(> i), &:has(> svg)': {
                        padding: 6
                    },
                    '& > svg, & > i': {
                        fontSize: '1.25rem'
                    },
                    '&:has(svg)': {
                        width: 32,
                        height: 32,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }
                })
        },
        variants: [
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    padding: 5,
                    '& + .MuiTimelineConnector-root': {
                        backgroundColor: 'transparent',
                        borderInlineStart: '1px dashed var(--mui-palette-divider)'
                    },
                    '&:has(+ .MuiTimelineConnector-root)': {
                        marginBlock: '0.625rem'
                    }
                }
            },
            {
                props: {
                    variant: 'filled',
                    color: 'grey'
                },
                style: {
                    boxShadow: '0 0 0 3px rgb(var(--mui-mainColorChannels-light) / 0.04)'
                }
            },
            {
                props: {
                    variant: 'filled',
                    color: 'primary'
                },
                style: {
                    boxShadow: '0 0 0 3px var(--mui-palette-primary-lightOpacity)'
                }
            },
            {
                props: {
                    variant: 'filled',
                    color: 'secondary'
                },
                style: {
                    boxShadow: '0 0 0 3px var(--mui-palette-secondary-lightOpacity)'
                }
            },
            {
                props: {
                    variant: 'filled',
                    color: 'error'
                },
                style: {
                    boxShadow: '0 0 0 3px var(--mui-palette-error-lightOpacity)'
                }
            },
            {
                props: {
                    variant: 'filled',
                    color: 'warning'
                },
                style: {
                    boxShadow: '0 0 0 3px var(--mui-palette-warning-lightOpacity)'
                }
            },
            {
                props: {
                    variant: 'filled',
                    color: 'info'
                },
                style: {
                    boxShadow: '0 0 0 3px var(--mui-palette-info-lightOpacity)'
                }
            },
            {
                props: {
                    variant: 'filled',
                    color: 'success'
                },
                style: {
                    boxShadow: '0 0 0 3px var(--mui-palette-success-lightOpacity)'
                }
            },
            {
                props: {
                    variant: 'tonal'
                },
                style: {
                    border: 0
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'grey'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-action-selected)',
                    color: 'var(--mui-palette-text-primary)'
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'primary'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                    color: 'var(--mui-palette-primary-main)'
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'secondary'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
                    color: 'var(--mui-palette-secondary-main)'
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'error'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-error-lightOpacity)',
                    color: 'var(--mui-palette-error-main)'
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'warning'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
                    color: 'var(--mui-palette-warning-main)'
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'info'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-info-lightOpacity)',
                    color: 'var(--mui-palette-info-main)'
                }
            },
            {
                props: {
                    variant: 'tonal',
                    color: 'success'
                },
                style: {
                    backgroundColor: 'var(--mui-palette-success-lightOpacity)',
                    color: 'var(--mui-palette-success-main)'
                }
            }
        ]
    },
    MuiTimelineConnector: {
        styleOverrides: {
            root: {
                width: 1,
                backgroundColor: 'var(--mui-palette-divider)'
            }
        }
    },
    MuiTimelineContent: {
        styleOverrides: {
            root: {
                paddingBottom: '1rem'
            }
        }
    }
};
const __TURBOPACK__default__export__ = timeline;

})()),
"[project]/src/@core/theme/overrides/toggle-button.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const toggleButton = {
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: ({ ownerState })=>({
                    ...ownerState.size === 'small' && {
                        borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                    },
                    ...ownerState.size === 'large' && {
                        borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
                    }
                })
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                '&:not(.Mui-selected):not(.Mui-disabled)': {
                    color: 'var(--mui-palette-text-secondary)'
                }
            },
            sizeSmall: {
                borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
            },
            sizeLarge: {
                borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
            }
        }
    }
};
const __TURBOPACK__default__export__ = toggleButton;

})()),
"[project]/src/@core/theme/overrides/tooltip.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const tooltip = {
    MuiTooltip: {
        styleOverrides: {
            popper: {
                '&[data-popper-placement*="bottom"] .MuiTooltip-tooltip': {
                    marginTop: '6px !important'
                },
                '&[data-popper-placement*="top"] .MuiTooltip-tooltip': {
                    marginBottom: '6px !important'
                },
                '&[data-popper-placement*="left"] .MuiTooltip-tooltip': {
                    marginRight: '6px !important'
                },
                '&[data-popper-placement*="right"] .MuiTooltip-tooltip': {
                    marginLeft: '6px !important'
                }
            },
            tooltip: ({ theme })=>({
                    borderRadius: 'var(--mui-shape-customBorderRadius-sm)',
                    fontSize: theme.typography.subtitle2.fontSize,
                    lineHeight: 1.539,
                    color: 'var(--mui-palette-customColors-tooltipText)',
                    paddingInline: theme.spacing(3)
                })
        }
    }
};
const __TURBOPACK__default__export__ = tooltip;

})()),
"[project]/src/@core/theme/overrides/typography.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const typography = {
    MuiTypography: {
        styleOverrides: {
            gutterBottom: ({ theme })=>({
                    marginBottom: theme.spacing(2)
                })
        },
        variants: [
            {
                props: {
                    variant: 'h1'
                },
                style: {
                    color: 'var(--mui-palette-text-primary)'
                }
            },
            {
                props: {
                    variant: 'h2'
                },
                style: {
                    color: 'var(--mui-palette-text-primary)'
                }
            },
            {
                props: {
                    variant: 'h3'
                },
                style: {
                    color: 'var(--mui-palette-text-primary)'
                }
            },
            {
                props: {
                    variant: 'h4'
                },
                style: {
                    color: 'var(--mui-palette-text-primary)'
                }
            },
            {
                props: {
                    variant: 'h5'
                },
                style: {
                    color: 'var(--mui-palette-text-primary)'
                }
            },
            {
                props: {
                    variant: 'h6'
                },
                style: {
                    color: 'var(--mui-palette-text-primary)'
                }
            },
            {
                props: {
                    variant: 'subtitle1'
                },
                style: {
                    color: 'rgb(var(--mui-palette-text-primaryChannel) / 0.55)'
                }
            },
            {
                props: {
                    variant: 'subtitle2'
                },
                style: {
                    color: 'rgb(var(--mui-palette-text-primaryChannel) / 0.55)'
                }
            },
            {
                props: {
                    variant: 'body1'
                },
                style: {
                    color: 'var(--mui-palette-text-secondary)'
                }
            },
            {
                props: {
                    variant: 'body2'
                },
                style: {
                    color: 'var(--mui-palette-text-secondary)'
                }
            },
            {
                props: {
                    variant: 'button'
                },
                style: {
                    color: 'var(--mui-palette-text-primary)'
                }
            },
            {
                props: {
                    variant: 'caption'
                },
                style: {
                    color: 'var(--mui-palette-text-disabled)',
                    display: 'inline-block'
                }
            },
            {
                props: {
                    variant: 'overline'
                },
                style: {
                    color: 'var(--mui-palette-text-primary)',
                    display: 'inline-block'
                }
            }
        ]
    }
};
const __TURBOPACK__default__export__ = typography;

})()),
"[project]/src/@core/theme/overrides/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Override Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/accordion.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$alerts$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/alerts.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$autocomplete$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/autocomplete.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$backdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/backdrop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$badges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/badges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/breadcrumbs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2d$group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/button-group.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$checkbox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/checkbox.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/chip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/drawer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$fab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/fab.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$form$2d$control$2d$label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/form-control-label.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$icon$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/icon-button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/menu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$pagination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/pagination.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/paper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/popover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$progress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/progress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$radio$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/radio.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$rating$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/rating.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/select.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$slider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/slider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/snackbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$switch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/switch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$table$2d$pagination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/table-pagination.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/tabs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$timeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/timeline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$toggle$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/toggle-button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/typography.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const overrides = (skin)=>{
    return Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$alerts$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$autocomplete$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$backdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$badges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2d$group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$checkbox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$fab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$form$2d$control$2d$label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$icon$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$pagination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$progress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$radio$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$rating$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$slider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$switch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$table$2d$pagination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$timeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$toggle$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
};
const __TURBOPACK__default__export__ = overrides;

})()),
"[project]/src/@core/theme/colorSchemes.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const colorSchemes = (skin)=>{
    return {
        light: {
            palette: {
                primary: {
                    main: '#8C57FF',
                    light: '#A379FF',
                    dark: '#7E4EE6',
                    lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
                },
                secondary: {
                    main: '#8A8D93',
                    light: '#A1A4A9',
                    dark: '#7C7F84',
                    contrastText: '#fff',
                    lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
                },
                error: {
                    main: '#FF4C51',
                    light: '#FF7074',
                    dark: '#E64449',
                    contrastText: '#fff',
                    lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
                },
                warning: {
                    main: '#FFB400',
                    light: '#FFC333',
                    dark: '#E6A200',
                    contrastText: '#fff',
                    lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
                },
                info: {
                    main: '#16B1FF',
                    light: '#45C1FF',
                    dark: '#149FE6',
                    contrastText: '#fff',
                    lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
                },
                success: {
                    main: '#56CA00',
                    light: '#78D533',
                    dark: '#4DB600',
                    contrastText: '#fff',
                    lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
                },
                text: {
                    primary: `rgb(var(--mui-mainColorChannels-light) / 0.9)`,
                    secondary: `rgb(var(--mui-mainColorChannels-light) / 0.7)`,
                    disabled: `rgb(var(--mui-mainColorChannels-light) / 0.4)`,
                    primaryChannel: 'var(--mui-mainColorChannels-light)',
                    secondaryChannel: 'var(--mui-mainColorChannels-light)'
                },
                divider: `rgb(var(--mui-mainColorChannels-light) / 0.12)`,
                dividerChannel: 'var(--mui-mainColorChannels-light)',
                background: {
                    default: skin === 'bordered' ? '#FFFFFF' : '#F4F5FA',
                    paper: '#FFFFFF'
                },
                action: {
                    active: `rgb(var(--mui-mainColorChannels-light) / 0.6)`,
                    hover: `rgb(var(--mui-mainColorChannels-light) / 0.04)`,
                    selected: `rgb(var(--mui-mainColorChannels-light) / 0.08)`,
                    disabled: `rgb(var(--mui-mainColorChannels-light) / 0.3)`,
                    disabledBackground: `rgb(var(--mui-mainColorChannels-light) / 0.12)`,
                    focus: `rgb(var(--mui-mainColorChannels-light) / 0.1)`,
                    focusOpacity: 0.1,
                    activeChannel: 'var(--mui-mainColorChannels-light)',
                    selectedChannel: 'var(--mui-mainColorChannels-light)'
                },
                Alert: {
                    errorColor: 'var(--mui-palette-error-main)',
                    warningColor: 'var(--mui-palette-warning-main)',
                    infoColor: 'var(--mui-palette-info-main)',
                    successColor: 'var(--mui-palette-success-main)',
                    errorStandardBg: 'var(--mui-palette-error-lightOpacity)',
                    warningStandardBg: 'var(--mui-palette-warning-lightOpacity)',
                    infoStandardBg: 'var(--mui-palette-info-lightOpacity)',
                    successStandardBg: 'var(--mui-palette-success-lightOpacity)',
                    errorFilledColor: 'var(--mui-palette-error-contrastText)',
                    warningFilledColor: 'var(--mui-palette-warning-contrastText)',
                    infoFilledColor: 'var(--mui-palette-info-contrastText)',
                    successFilledColor: 'var(--mui-palette-success-contrastText)',
                    errorFilledBg: 'var(--mui-palette-error-main)',
                    warningFilledBg: 'var(--mui-palette-warning-main)',
                    infoFilledBg: 'var(--mui-palette-info-main)',
                    successFilledBg: 'var(--mui-palette-success-main)'
                },
                Avatar: {
                    defaultBg: '#F0EFF0'
                },
                Chip: {
                    defaultBorder: 'var(--mui-palette-divider)'
                },
                FilledInput: {
                    bg: `rgb(var(--mui-mainColorChannels-light) / 0.06)`,
                    hoverBg: `rgb(var(--mui-mainColorChannels-light) / 0.08)`,
                    disabledBg: `rgb(var(--mui-mainColorChannels-light) / 0.06)`
                },
                LinearProgress: {
                    primaryBg: 'var(--mui-palette-primary-mainOpacity)',
                    secondaryBg: 'var(--mui-palette-secondary-mainOpacity)',
                    errorBg: 'var(--mui-palette-error-mainOpacity)',
                    warningBg: 'var(--mui-palette-warning-mainOpacity)',
                    infoBg: 'var(--mui-palette-info-mainOpacity)',
                    successBg: 'var(--mui-palette-success-mainOpacity)'
                },
                SnackbarContent: {
                    bg: '#1A0E33',
                    color: 'var(--mui-palette-background-paper)'
                },
                Switch: {
                    defaultColor: 'var(--mui-palette-common-white)',
                    defaultDisabledColor: 'var(--mui-palette-common-white)',
                    primaryDisabledColor: 'var(--mui-palette-common-white)',
                    secondaryDisabledColor: 'var(--mui-palette-common-white)',
                    errorDisabledColor: 'var(--mui-palette-common-white)',
                    warningDisabledColor: 'var(--mui-palette-common-white)',
                    infoDisabledColor: 'var(--mui-palette-common-white)',
                    successDisabledColor: 'var(--mui-palette-common-white)'
                },
                Tooltip: {
                    bg: '#1A0E33'
                },
                TableCell: {
                    border: 'var(--mui-palette-divider)'
                },
                customColors: {
                    bodyBg: '#F4F5FA',
                    chatBg: '#F7F6FA',
                    greyLightBg: '#FAFAFA',
                    inputBorder: `rgb(var(--mui-mainColorChannels-light) / 0.22)`,
                    tableHeaderBg: '#F6F7FB',
                    tooltipText: '#FFFFFF',
                    trackBg: '#F0F2F8'
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    main: '#8C57FF',
                    light: '#A379FF',
                    dark: '#7E4EE6',
                    lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
                },
                secondary: {
                    main: '#8A8D93',
                    light: '#A1A4A9',
                    dark: '#7C7F84',
                    contrastText: '#fff',
                    lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
                },
                error: {
                    main: '#FF4C51',
                    light: '#FF7074',
                    dark: '#E64449',
                    contrastText: '#fff',
                    lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
                },
                warning: {
                    main: '#FFB400',
                    light: '#FFC333',
                    dark: '#E6A200',
                    contrastText: '#fff',
                    lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
                },
                info: {
                    main: '#16B1FF',
                    light: '#45C1FF',
                    dark: '#149FE6',
                    contrastText: '#fff',
                    lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
                },
                success: {
                    main: '#56CA00',
                    light: '#78D533',
                    dark: '#4DB600',
                    contrastText: '#fff',
                    lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
                },
                text: {
                    primary: `rgb(var(--mui-mainColorChannels-dark) / 0.9)`,
                    secondary: `rgb(var(--mui-mainColorChannels-dark) / 0.7)`,
                    disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.4)`,
                    primaryChannel: 'var(--mui-mainColorChannels-dark)',
                    secondaryChannel: 'var(--mui-mainColorChannels-dark)'
                },
                divider: `rgb(var(--mui-mainColorChannels-dark) / 0.12)`,
                dividerChannel: 'var(--mui-mainColorChannels-dark)',
                background: {
                    default: skin === 'bordered' ? '#312D4B' : '#28243D',
                    paper: '#312D4B'
                },
                action: {
                    active: `rgb(var(--mui-mainColorChannels-dark) / 0.6)`,
                    hover: `rgb(var(--mui-mainColorChannels-dark) / 0.04)`,
                    selected: `rgb(var(--mui-mainColorChannels-dark) / 0.08)`,
                    disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.3)`,
                    disabledBackground: `rgb(var(--mui-mainColorChannels-dark) / 0.12)`,
                    focus: `rgb(var(--mui-mainColorChannels-dark) / 0.1)`,
                    focusOpacity: 0.1,
                    activeChannel: 'var(--mui-mainColorChannels-dark)',
                    selectedChannel: 'var(--mui-mainColorChannels-dark)'
                },
                Alert: {
                    errorColor: 'var(--mui-palette-error-main)',
                    warningColor: 'var(--mui-palette-warning-main)',
                    infoColor: 'var(--mui-palette-info-main)',
                    successColor: 'var(--mui-palette-success-main)',
                    errorStandardBg: 'var(--mui-palette-error-lightOpacity)',
                    warningStandardBg: 'var(--mui-palette-warning-lightOpacity)',
                    infoStandardBg: 'var(--mui-palette-info-lightOpacity)',
                    successStandardBg: 'var(--mui-palette-success-lightOpacity)',
                    errorFilledColor: 'var(--mui-palette-error-contrastText)',
                    warningFilledColor: 'var(--mui-palette-warning-contrastText)',
                    infoFilledColor: 'var(--mui-palette-info-contrastText)',
                    successFilledColor: 'var(--mui-palette-success-contrastText)',
                    errorFilledBg: 'var(--mui-palette-error-main)',
                    warningFilledBg: 'var(--mui-palette-warning-main)',
                    infoFilledBg: 'var(--mui-palette-info-main)',
                    successFilledBg: 'var(--mui-palette-success-main)'
                },
                Avatar: {
                    defaultBg: '#3F3B59'
                },
                Chip: {
                    defaultBorder: 'var(--mui-palette-divider)'
                },
                FilledInput: {
                    bg: `rgb(var(--mui-mainColorChannels-dark) / 0.06)`,
                    hoverBg: `rgb(var(--mui-mainColorChannels-dark) / 0.08)`,
                    disabledBg: `rgb(var(--mui-mainColorChannels-dark) / 0.06)`
                },
                LinearProgress: {
                    primaryBg: 'var(--mui-palette-primary-mainOpacity)',
                    secondaryBg: 'var(--mui-palette-secondary-mainOpacity)',
                    errorBg: 'var(--mui-palette-error-mainOpacity)',
                    warningBg: 'var(--mui-palette-warning-mainOpacity)',
                    infoBg: 'var(--mui-palette-info-mainOpacity)',
                    successBg: 'var(--mui-palette-success-mainOpacity)'
                },
                SnackbarContent: {
                    bg: '#F7F4FF',
                    color: 'var(--mui-palette-background-paper)'
                },
                Switch: {
                    defaultColor: 'var(--mui-palette-common-white)',
                    defaultDisabledColor: 'var(--mui-palette-common-white)',
                    primaryDisabledColor: 'var(--mui-palette-common-white)',
                    secondaryDisabledColor: 'var(--mui-palette-common-white)',
                    errorDisabledColor: 'var(--mui-palette-common-white)',
                    warningDisabledColor: 'var(--mui-palette-common-white)',
                    infoDisabledColor: 'var(--mui-palette-common-white)',
                    successDisabledColor: 'var(--mui-palette-common-white)'
                },
                Tooltip: {
                    bg: '#F7F4FF'
                },
                TableCell: {
                    border: 'var(--mui-palette-divider)'
                },
                customColors: {
                    bodyBg: '#28243D',
                    chatBg: '#373452',
                    greyLightBg: '#373350',
                    inputBorder: `rgb(var(--mui-mainColorChannels-dark) / 0.22)`,
                    tableHeaderBg: '#3D3759',
                    tooltipText: '#312D4B',
                    trackBg: '#474360'
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = colorSchemes;

})()),
"[project]/src/@core/theme/spacing.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const spacing = {
    spacing: (factor)=>`${0.25 * factor}rem`
};
const __TURBOPACK__default__export__ = spacing;

})()),
"[project]/src/@core/theme/shadows.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const shadows = (mode)=>{
    const color = `var(--mui-mainColorChannels-${mode}Shadow)`;
    return [
        'none',
        `0px 2px 1px -1px rgb(${color} / 0.2),0px 1px 1px 0px rgb(${color} / 0.14),0px 1px 3px 0px rgb(${color} / 0.12)`,
        `0px 3px 1px -2px rgb(${color} / 0.2),0px 2px 2px 0px rgb(${color} / 0.14),0px 1px 5px 0px rgb(${color} / 0.12)`,
        `0px 3px 3px -2px rgb(${color} / 0.2),0px 3px 4px 0px rgb(${color} / 0.14),0px 1px 8px 0px rgb(${color} / 0.12)`,
        `0px 2px 4px -1px rgb(${color} / 0.2),0px 4px 5px 0px rgb(${color} / 0.14),0px 1px 10px 0px rgb(${color} / 0.12)`,
        `0px 3px 5px -1px rgb(${color} / 0.2),0px 5px 8px 0px rgb(${color} / 0.14),0px 1px 14px 0px rgb(${color} / 0.12)`,
        `0px 3px 5px -1px rgb(${color} / 0.2),0px 6px 10px 0px rgb(${color} / 0.14),0px 1px 18px 0px rgb(${color} / 0.12)`,
        `0px 4px 5px -2px rgb(${color} / 0.2),0px 7px 10px 1px rgb(${color} / 0.14),0px 2px 16px 1px rgb(${color} / 0.12)`,
        `0px 5px 5px -3px rgb(${color} / 0.2),0px 8px 10px 1px rgb(${color} / 0.14),0px 3px 14px 2px rgb(${color} / 0.12)`,
        `0px 5px 6px -3px rgb(${color} / 0.2),0px 9px 12px 1px rgb(${color} / 0.14),0px 3px 16px 2px rgb(${color} / 0.12)`,
        `0px 6px 6px -3px rgb(${color} / 0.2),0px 10px 14px 1px rgb(${color} / 0.14),0px 4px 18px 3px rgb(${color} / 0.12)`,
        `0px 6px 7px -4px rgb(${color} / 0.2),0px 11px 15px 1px rgb(${color} / 0.14),0px 4px 20px 3px rgb(${color} / 0.12)`,
        `0px 7px 8px -4px rgb(${color} / 0.2),0px 12px 17px 2px rgb(${color} / 0.14),0px 5px 22px 4px rgb(${color} / 0.12)`,
        `0px 7px 8px -4px rgb(${color} / 0.2),0px 13px 19px 2px rgb(${color} / 0.14),0px 5px 24px 4px rgb(${color} / 0.12)`,
        `0px 7px 9px -4px rgb(${color} / 0.2),0px 14px 21px 2px rgb(${color} / 0.14),0px 5px 26px 4px rgb(${color} / 0.12)`,
        `0px 8px 9px -5px rgb(${color} / 0.2),0px 15px 22px 2px rgb(${color} / 0.14),0px 6px 28px 5px rgb(${color} / 0.12)`,
        `0px 8px 10px -5px rgb(${color} / 0.2),0px 16px 24px 2px rgb(${color} / 0.14),0px 6px 30px 5px rgb(${color} / 0.12)`,
        `0px 8px 11px -5px rgb(${color} / 0.2),0px 17px 26px 2px rgb(${color} / 0.14),0px 6px 32px 5px rgb(${color} / 0.12)`,
        `0px 9px 11px -5px rgb(${color} / 0.2),0px 18px 28px 2px rgb(${color} / 0.14),0px 7px 34px 6px rgb(${color} / 0.12)`,
        `0px 9px 12px -6px rgb(${color} / 0.2),0px 19px 29px 2px rgb(${color} / 0.14),0px 7px 36px 6px rgb(${color} / 0.12)`,
        `0px 10px 13px -6px rgb(${color} / 0.2),0px 20px 31px 3px rgb(${color} / 0.14),0px 8px 38px 7px rgb(${color} / 0.12)`,
        `0px 10px 13px -6px rgb(${color} / 0.2),0px 21px 33px 3px rgb(${color} / 0.14),0px 8px 40px 7px rgb(${color} / 0.12)`,
        `0px 10px 14px -6px rgb(${color} / 0.2),0px 22px 35px 3px rgb(${color} / 0.14),0px 8px 42px 7px rgb(${color} / 0.12)`,
        `0px 11px 14px -7px rgb(${color} / 0.2),0px 23px 36px 3px rgb(${color} / 0.14),0px 9px 44px 8px rgb(${color} / 0.12)`,
        `0px 11px 15px -7px rgb(${color} / 0.2),0px 24px 38px 3px rgb(${color} / 0.14),0px 9px 46px 8px rgb(${color} / 0.12)`
    ];
};
const __TURBOPACK__default__export__ = shadows;

})()),
"[project]/src/@core/theme/customShadows.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const customShadows = (mode)=>{
    return {
        xs: `0px 2px 4px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.16 : 0.2})`,
        sm: `0px 3px 6px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.18 : 0.22})`,
        md: `0px 4px 10px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.2 : 0.24})`,
        lg: `0px 6px 16px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.22 : 0.26})`,
        xl: `0px 8px 28px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.24 : 0.28})`
    };
};
const __TURBOPACK__default__export__ = customShadows;

})()),
"[project]/src/@core/theme/typography.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const typography = (fontFamily)=>({
        fontFamily: typeof fontFamily === 'undefined' || fontFamily === '' ? [
            'Inter',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(',') : fontFamily,
        fontSize: 13.125,
        h1: {
            fontSize: '2.875rem',
            fontWeight: 500,
            lineHeight: 1.478261
        },
        h2: {
            fontSize: '2.375rem',
            fontWeight: 500,
            lineHeight: 1.47368421
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
            lineHeight: 1.5
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: 1.58334
        },
        h5: {
            fontSize: '1.125rem',
            fontWeight: 500,
            lineHeight: 1.5556
        },
        h6: {
            fontSize: '0.9375rem',
            fontWeight: 500,
            lineHeight: 1.46667
        },
        subtitle1: {
            fontSize: '0.9375rem',
            lineHeight: 1.46667
        },
        subtitle2: {
            fontSize: '0.8125rem',
            fontWeight: 400,
            lineHeight: 1.53846154
        },
        body1: {
            fontSize: '0.9375rem',
            lineHeight: 1.46667
        },
        body2: {
            fontSize: '0.8125rem',
            lineHeight: 1.53846154
        },
        button: {
            fontSize: '0.9375rem',
            lineHeight: 1.46667,
            textTransform: 'none'
        },
        caption: {
            fontSize: '0.8125rem',
            lineHeight: 1.38462,
            letterSpacing: '0.4px'
        },
        overline: {
            fontSize: '0.75rem',
            lineHeight: 1.16667,
            letterSpacing: '0.8px'
        }
    });
const __TURBOPACK__default__export__ = typography;

})()),
"[project]/src/@core/theme/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// Next Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aeaa3e0c$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/inter_aeaa3e0c.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/colorSchemes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$spacing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/spacing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$shadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/shadows.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$customShadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/customShadows.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/typography.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const theme = (settings, mode, direction)=>{
    return {
        direction,
        components: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(settings.skin),
        colorSchemes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(settings.skin),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$spacing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        shape: {
            borderRadius: 6,
            customBorderRadius: {
                xs: 2,
                sm: 4,
                md: 6,
                lg: 8,
                xl: 10
            }
        },
        shadows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$shadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mode),
        typography: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aeaa3e0c$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].style.fontFamily),
        customShadows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$customShadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mode),
        mainColorChannels: {
            light: '46 38 61',
            dark: '231 227 252',
            lightShadow: '46 38 61',
            darkShadow: '19 17 32'
        }
    };
};
const __TURBOPACK__default__export__ = theme;

})()),
"[project]/src/components/theme/index.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__deepmerge$3e$__ = __turbopack_import__("[project]/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript) <export default as deepmerge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/CssVarsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$experimental_extendTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__experimental_extendTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/experimental_extendTheme.js [app-ssr] (ecmascript) <export default as experimental_extendTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/colorManipulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.js [app-ssr] (ecmascript) <export default as AppRouterCacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_import__("[project]/node_modules/react-use/esm/useMedia.js [app-ssr] (ecmascript) <export default as useMedia>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis-plugin-rtl/dist/stylis-rtl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2f$ModeChanger$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/theme/ModeChanger.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/index.js [app-ssr] (ecmascript)");
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
;
;
;
;
const ThemeProvider = (props)=>{
    // Props
    const { children, direction, systemMode } = props;
    // Vars
    const isServer = typeof window === 'undefined';
    let currentMode;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', systemMode === 'dark');
    if (isServer) {
        currentMode = systemMode;
    } else {
        if (settings.mode === 'system') {
            currentMode = isDark ? 'dark' : 'light';
        } else {
            currentMode = settings.mode;
        }
    }
    // Merge the primary color scheme override with the core theme
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const newColorScheme = {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: settings.primaryColor,
                            light: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lighten"])(settings.primaryColor, 0.2),
                            dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["darken"])(settings.primaryColor, 0.1)
                        }
                    }
                },
                dark: {
                    palette: {
                        primary: {
                            main: settings.primaryColor,
                            light: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lighten"])(settings.primaryColor, 0.2),
                            dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["darken"])(settings.primaryColor, 0.1)
                        }
                    }
                }
            }
        };
        const coreTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__deepmerge$3e$__["deepmerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(settings, currentMode, direction), newColorScheme);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$experimental_extendTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__experimental_extendTheme$3e$__["experimental_extendTheme"])(coreTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        settings.primaryColor,
        settings.skin,
        currentMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__["AppRouterCacheProvider"], {
        options: {
            prepend: true,
            ...direction === 'rtl' && {
                key: 'rtl',
                stylisPlugins: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
                ]
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Experimental_CssVarsProvider"], {
            theme: theme,
            defaultMode: systemMode,
            modeStorageKey: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].templateName.toLowerCase().split(' ').join('-')}-mui-template-mode`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2f$ModeChanger$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        systemMode: systemMode
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme/index.jsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/theme/index.jsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/src/components/theme/index.jsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/theme/index.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ThemeProvider;

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
"[project]/src/@core/hooks/useLayoutInit.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__ = __turbopack_import__("[project]/node_modules/react-use/esm/useCookie.js [app-ssr] (ecmascript) <export default as useCookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_import__("[project]/node_modules/react-use/esm/useMedia.js [app-ssr] (ecmascript) <export default as useMedia>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/CssVarsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
const useLayoutInit = (colorSchemeFallback)=>{
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const { setMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useColorScheme"])();
    const [_, updateCookieColorPref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"])('colorPref');
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', colorSchemeFallback === 'dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const appMode = isDark ? 'dark' : 'light';
        updateCookieColorPref(appMode);
        if (settings.mode === 'system') {
            // We need to change the mode in settings context to apply the mode change to MUI components
            setMode(appMode);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDark
    ]);
// This hook does not return anything as it is only used to initialize color preference cookie and settings context on first load
};
const __TURBOPACK__default__export__ = useLayoutInit;

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
"[project]/src/@layouts/BlankLayout.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useLayoutInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useLayoutInit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
const BlankLayout = (props)=>{
    // Props
    const { children, systemMode } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useLayoutInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(systemMode);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blankLayoutClasses"].root, 'is-full bs-full'),
        "data-skin": settings.skin,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/@layouts/BlankLayout.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = BlankLayout;

})()),
"[project]/src/@core/hooks/useImageVariant.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "useImageVariant": ()=>useImageVariant
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/CssVarsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const useImageVariant = (mode, imgLight, imgDark, imgLightBordered, imgDarkBordered)=>{
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const { mode: muiMode, systemMode: muiSystemMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useColorScheme"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const isServer = typeof window === 'undefined';
        const currentMode = (()=>{
            if (isServer) return mode;
            return muiMode === 'system' ? muiSystemMode : muiMode;
        })();
        const isBordered = settings?.skin === 'bordered';
        const isDarkMode = currentMode === 'dark';
        if (isBordered && imgLightBordered && imgDarkBordered) {
            return isDarkMode ? imgDarkBordered : imgLightBordered;
        }
        return isDarkMode ? imgDark : imgLight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        mode,
        muiMode,
        muiSystemMode
    ]);
};

})()),
"[project]/src/components/Illustrations.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/styled.js [app-ssr] (ecmascript) <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useImageVariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useImageVariant.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
// Styled Components
const MaskImg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])('img')({
    inlineSize: '100%',
    position: 'absolute',
    insetBlockEnd: 0,
    zIndex: -1
});
const Illustrations = (props)=>{
    // Props
    const { image1, image2, maskImg, mode } = props;
    // Vars
    const darkImg = '/images/pages/misc-mask-dark.png';
    const lightImg = '/images/pages/misc-mask-light.png';
    // Hook
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const hidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme.breakpoints.down('md'));
    const maskBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useImageVariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImageVariant"])(mode, lightImg, darkImg);
    function isImageObj(obj) {
        return obj && typeof obj === 'object' && 'src' in obj;
    }
    if (!hidden) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                typeof image1 === 'undefined' || isImageObj(image1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: image1?.alt || 'tree-1',
                    src: image1?.src || '/images/illustrations/objects/tree-1.png',
                    className: image1?.className || 'absolute inline-start-0 block-end-0',
                    width: image1?.width,
                    height: image1?.height || 200
                }, void 0, false, {
                    fileName: "[project]/src/components/Illustrations.jsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this) : image1,
                typeof maskImg === 'undefined' || isImageObj(maskImg) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MaskImg, {
                    alt: maskImg?.alt || 'mask',
                    src: maskImg?.src || maskBackground,
                    className: maskImg?.className,
                    width: maskImg?.width,
                    height: maskImg?.height
                }, void 0, false, {
                    fileName: "[project]/src/components/Illustrations.jsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this) : maskImg,
                typeof image2 === 'undefined' || isImageObj(image2) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: image2?.alt || 'tree-2',
                    src: image2?.src || '/images/illustrations/objects/tree-2.png',
                    className: image2?.className || 'absolute inline-end-0 block-end-0',
                    width: image2?.width,
                    height: image2?.height || 200
                }, void 0, false, {
                    fileName: "[project]/src/components/Illustrations.jsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this) : image2
            ]
        }, void 0, true);
    } else {
        return null;
    }
};
const __TURBOPACK__default__export__ = Illustrations;

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
"[project]/src/views/NotFound.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Illustrations$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Illustrations.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useImageVariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useImageVariant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/i18n.js [app-ssr] (ecmascript)");
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
const NotFound = ({ mode })=>{
    // Vars
    const darkImg = '/images/pages/misc-mask-dark.png';
    const lightImg = '/images/pages/misc-mask-light.png';
    // Hooks
    const { lang: locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const miscBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useImageVariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImageVariant"])(mode, lightImg, darkImg);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center flex-col text-center gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 is-[90vw] sm:is-[unset]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "font-medium text-8xl",
                                color: "text.primary",
                                children: "404"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NotFound.jsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "h4",
                                children: "Page Not Found ⚠️"
                            }, void 0, false, {
                                fileName: "[project]/src/views/NotFound.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: "We couldn't find the page you are looking for."
                            }, void 0, false, {
                                fileName: "[project]/src/views/NotFound.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/NotFound.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        alt: "error-illustration",
                        src: "/images/illustrations/characters/5.png",
                        className: "object-cover bs-[400px] md:bs-[450px] lg:bs-[500px]"
                    }, void 0, false, {
                        fileName: "[project]/src/views/NotFound.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalizedUrl"])('/', locale),
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                        variant: "contained",
                        children: "Back to Home"
                    }, void 0, false, {
                        fileName: "[project]/src/views/NotFound.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/NotFound.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Illustrations$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                maskImg: {
                    src: miscBackground
                }
            }, void 0, false, {
                fileName: "[project]/src/views/NotFound.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/NotFound.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = NotFound;

})()),
"[project]/src/app/[lang]/[...not-found]/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__392086._.js.map