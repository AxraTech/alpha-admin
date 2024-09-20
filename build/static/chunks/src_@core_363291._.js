(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_@core_363291._.js", {

"[project]/src/@core/hooks/useObjectCookie.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "useObjectCookie": ()=>useObjectCookie
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useCookie.js [app-client] (ecmascript) <export default as useCookie>");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
;
const useObjectCookie = (key, fallback)=>{
    _s();
    // Hooks
    const [valStr, updateCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"])(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>valStr ? JSON.parse(valStr) : fallback, [
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
_s(useObjectCookie, "HTUxD4pOtPoaDF77HbXMxlPhmR0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"]
    ];
});

})()),
"[project]/src/@core/contexts/settingsContext.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SettingsContext": ()=>SettingsContext,
    "SettingsProvider": ()=>SettingsProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/primaryColorConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useObjectCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useObjectCookie.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const SettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const SettingsProvider = (props)=>{
    _s();
    // Initial Settings
    const initialSettings = {
        mode: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mode,
        skin: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].skin,
        semiDark: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].semiDark,
        layout: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layout,
        navbarContentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].navbar.contentWidth,
        contentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].contentWidth,
        footerContentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].footer.contentWidth,
        primaryColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][0].main
    };
    const updatedInitialSettings = {
        ...initialSettings,
        mode: props.mode || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mode
    };
    // Cookies
    const [settingsCookie, updateSettingsCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useObjectCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useObjectCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].settingsCookieName, JSON.stringify(props.settingsCookie) !== '{}' ? props.settingsCookie : updatedInitialSettings);
    // State
    const [_settingsState, _updateSettingsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(JSON.stringify(settingsCookie) !== '{}' ? settingsCookie : updatedInitialSettings);
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
    const isSettingsChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>JSON.stringify(initialSettings) !== JSON.stringify(_settingsState), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        _settingsState
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContext.Provider, {
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
_s(SettingsProvider, "rSX0DHkUkRc7iaaGoDBGwuDV+dU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useObjectCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useObjectCookie"]
    ];
});
_c = SettingsProvider;
var _c;
__turbopack_refresh__.register(_c, "SettingsProvider");

})()),
"[project]/src/@core/hooks/useSettings.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "useSettings": ()=>useSettings
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$contexts$2f$settingsContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/contexts/settingsContext.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
;
const useSettings = ()=>{
    _s();
    // Hooks
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$contexts$2f$settingsContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsContext"]);
    if (!context) {
        throw new Error('useSettingsContext must be used within a SettingsProvider');
    }
    return context;
};
_s(useSettings, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

})()),
"[project]/src/@core/hooks/useLayoutInit.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useCookie.js [app-client] (ecmascript) <export default as useCookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMedia.js [app-client] (ecmascript) <export default as useMedia>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/styles/CssVarsProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const useLayoutInit = (colorSchemeFallback)=>{
    _s();
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])();
    const { setMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorScheme"])();
    const [_, updateCookieColorPref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"])('colorPref');
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', colorSchemeFallback === 'dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
_s(useLayoutInit, "hSYegBJ4uM4QfflALBvBB99u9rw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$CssVarsProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorScheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"]
    ];
});
const __TURBOPACK__default__export__ = useLayoutInit;

})()),
"[project]/src/@core/theme/overrides/accordion.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
                expandIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
"[project]/src/@core/theme/overrides/alerts.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const alerts = {
    MuiAlert: {
        defaultProps: {
            iconMapping: {
                error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-error-warning-line"
                }, void 0, false, {
                    fileName: "[project]/src/@core/theme/overrides/alerts.jsx",
                    lineNumber: 8,
                    columnNumber: 16
                }, this),
                warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-alert-line"
                }, void 0, false, {
                    fileName: "[project]/src/@core/theme/overrides/alerts.jsx",
                    lineNumber: 9,
                    columnNumber: 18
                }, this),
                info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-information-line"
                }, void 0, false, {
                    fileName: "[project]/src/@core/theme/overrides/alerts.jsx",
                    lineNumber: 10,
                    columnNumber: 15
                }, this),
                success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
"[project]/src/@core/theme/overrides/autocomplete.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
                popupIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
"[project]/src/@core/theme/overrides/avatar.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/backdrop.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/badges.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/breadcrumbs.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/button.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Config Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-client] (ecmascript)");
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
            disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple
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
"[project]/src/@core/theme/overrides/button-group.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Config Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const buttonGroup = {
    MuiButtonGroup: {
        defaultProps: {
            disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple
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
"[project]/src/@core/theme/overrides/card.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/checkbox.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Icon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = Icon;
const IndeterminateIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c1 = IndeterminateIcon;
const CheckedIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c2 = CheckedIcon;
const checkbox = {
    MuiCheckbox: {
        defaultProps: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            indeterminateIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndeterminateIcon, {}, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 41,
                columnNumber: 26
            }, this),
            checkedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckedIcon, {}, void 0, false, {
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
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "Icon");
__turbopack_refresh__.register(_c1, "IndeterminateIcon");
__turbopack_refresh__.register(_c2, "CheckedIcon");

})()),
"[project]/src/@core/theme/overrides/chip.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/dialog.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/drawer.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/fab.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/form-control-label.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/icon-button.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Config Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-client] (ecmascript)");
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
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
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
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
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
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
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
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
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
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
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
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
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
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
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
"[project]/src/@core/theme/overrides/input.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/list.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/menu.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/pagination.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/paper.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/popover.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/progress.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/radio.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const IconChecked = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = IconChecked;
const UncheckedIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c1 = UncheckedIcon;
const radio = {
    MuiRadio: {
        defaultProps: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UncheckedIcon, {}, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/radio.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            checkedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChecked, {}, void 0, false, {
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
var _c, _c1;
__turbopack_refresh__.register(_c, "IconChecked");
__turbopack_refresh__.register(_c1, "UncheckedIcon");

})()),
"[project]/src/@core/theme/overrides/rating.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const rating = {
    MuiRating: {
        defaultProps: {
            emptyIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "ri-star-line"
            }, void 0, false, {
                fileName: "[project]/src/@core/theme/overrides/rating.jsx",
                lineNumber: 4,
                columnNumber: 18
            }, this),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
"[project]/src/@core/theme/overrides/select.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// React Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const SelectIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
        className: "ri-arrow-down-s-line"
    }, void 0, false, {
        fileName: "[project]/src/@core/theme/overrides/select.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
};
_c = SelectIcon;
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
var _c;
__turbopack_refresh__.register(_c, "SelectIcon");

})()),
"[project]/src/@core/theme/overrides/slider.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/snackbar.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/switch.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/table-pagination.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/tabs.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/timeline.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/toggle-button.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/tooltip.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/typography.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/overrides/index.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Override Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/accordion.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$alerts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/alerts.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$autocomplete$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/autocomplete.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$backdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/backdrop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$badges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/badges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/breadcrumbs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2d$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/button-group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$checkbox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/checkbox.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/chip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/drawer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/fab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$form$2d$control$2d$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/form-control-label.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/icon-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/pagination.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/paper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/popover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/progress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$radio$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/radio.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$rating$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/rating.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/select.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/slider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/snackbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/switch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$table$2d$pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/table-pagination.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/tabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$timeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/timeline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$toggle$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/toggle-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/typography.js [app-client] (ecmascript)");
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
    return Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$alerts$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$autocomplete$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$backdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$badges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2d$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$checkbox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$form$2d$control$2d$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$radio$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$rating$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$table$2d$pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$timeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$toggle$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
};
const __TURBOPACK__default__export__ = overrides;

})()),
"[project]/src/@core/theme/colorSchemes.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/spacing.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const spacing = {
    spacing: (factor)=>`${0.25 * factor}rem`
};
const __TURBOPACK__default__export__ = spacing;

})()),
"[project]/src/@core/theme/shadows.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/customShadows.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/typography.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/@core/theme/index.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Next Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aeaa3e0c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/inter_aeaa3e0c.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/overrides/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/colorSchemes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/spacing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$shadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/shadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$customShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/customShadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/theme/typography.js [app-client] (ecmascript)");
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
        components: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$overrides$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(settings.skin),
        colorSchemes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(settings.skin),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
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
        shadows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$shadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode),
        typography: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_aeaa3e0c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].style.fontFamily),
        customShadows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$theme$2f$customShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode),
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
"[project]/src/@core/styles/vertical/menuItemStyles.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// MUI Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@5.16.7_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled@1_htuzuuhilabfjy5zsrakmmdmg4/node_modules/@mui/system/esm/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@menu/utils/menuClasses.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const menuItemStyles = (verticalNavOptions, theme)=>{
    // Vars
    const { isCollapsed, isHovered, collapsedWidth, isPopoutWhenCollapsed, transitionDuration } = verticalNavOptions;
    const popoutCollapsed = isPopoutWhenCollapsed && isCollapsed;
    const popoutExpanded = isPopoutWhenCollapsed && !isCollapsed;
    const collapsedNotHovered = isCollapsed && !isHovered;
    return {
        root: ({ level })=>({
                ...!isPopoutWhenCollapsed || popoutExpanded || popoutCollapsed && level === 0 ? {
                    marginBlockStart: theme.spacing(1.5)
                } : {
                    marginBlockStart: 0
                },
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].subMenuRoot}.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].open} > .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].button}, &.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].subMenuRoot} > .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].button}.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
                    backgroundColor: 'var(--mui-palette-action-selected) !important'
                },
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].disabled} > .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].button}`]: {
                    color: 'var(--mui-palette-text-disabled)',
                    '& *': {
                        color: 'inherit'
                    }
                },
                [`&:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].subMenuRoot}) > .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].button}.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
                    ...popoutCollapsed && level > 0 ? {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                        color: 'var(--mui-palette-primary-main)',
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].icon}`]: {
                            color: 'var(--mui-palette-primary-main)'
                        }
                    } : {
                        color: 'var(--mui-palette-primary-contrastText)',
                        background: theme.direction === 'ltr' ? `linear-gradient(270deg, var(--mui-palette-primary-main), ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lighten"])(theme.palette.primary.main, 0.5)} 100%)` : `linear-gradient(270deg, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lighten"])(theme.palette.primary.main, 0.5)}, var(--mui-palette-primary-main) 100%)`,
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].icon}`]: {
                            color: 'inherit'
                        }
                    }
                }
            }),
        button: ({ level, active })=>({
                paddingBlock: theme.spacing(2),
                ...!(isCollapsed && !isHovered) && {
                    '&:has(.MuiChip-root)': {
                        paddingBlock: theme.spacing(1.75)
                    }
                },
                ...(!isPopoutWhenCollapsed || popoutExpanded || popoutCollapsed && level === 0) && {
                    transition: `padding-inline-start ${transitionDuration}ms ease-in-out`,
                    paddingInlineStart: theme.spacing(collapsedNotHovered ? (collapsedWidth - 25) / 8 : 5.5),
                    paddingInlineEnd: theme.spacing(collapsedNotHovered ? (collapsedWidth - 25) / 8 - 1.25 : 3.5),
                    borderStartEndRadius: 50,
                    borderEndEndRadius: 50
                },
                ...!active && {
                    '&:hover, &:focus-visible': {
                        backgroundColor: 'var(--mui-palette-action-hover)'
                    },
                    '&[aria-expanded="true"]': {
                        backgroundColor: 'var(--mui-palette-action-selected)'
                    }
                }
            }),
        icon: ({ level })=>({
                transition: `margin-inline-end ${transitionDuration}ms ease-in-out`,
                ...level === 0 && {
                    fontSize: '1.375rem'
                },
                ...level > 0 && {
                    fontSize: '0.75rem',
                    color: 'var(--mui-palette-text-secondary)'
                },
                ...level === 0 && {
                    marginInlineEnd: theme.spacing(2)
                },
                ...level > 0 && {
                    marginInlineEnd: theme.spacing(3.5)
                },
                ...level === 1 && !popoutCollapsed && {
                    marginInlineStart: theme.spacing(1.5)
                },
                ...level > 1 && {
                    marginInlineStart: theme.spacing((popoutCollapsed ? 0 : 1.5) + 2.5 * (level - 1))
                },
                ...collapsedNotHovered && {
                    marginInlineEnd: 0
                },
                ...popoutCollapsed && level > 0 && {
                    marginInlineEnd: theme.spacing(2)
                },
                '& > i, & > svg': {
                    fontSize: 'inherit'
                }
            }),
        prefix: {
            marginInlineEnd: theme.spacing(2)
        },
        label: ({ level })=>({
                ...(!isPopoutWhenCollapsed || popoutExpanded || popoutCollapsed && level === 0) && {
                    transition: `opacity ${transitionDuration}ms ease-in-out`,
                    ...collapsedNotHovered && {
                        opacity: 0
                    }
                }
            }),
        suffix: {
            marginInlineStart: theme.spacing(2)
        },
        subMenuExpandIcon: {
            fontSize: '1.375rem',
            marginInlineStart: theme.spacing(2),
            '& i, & svg': {
                fontSize: 'inherit'
            }
        },
        subMenuContent: ({ level })=>({
                zIndex: 'calc(var(--drawer-z-index) + 1)',
                backgroundColor: popoutCollapsed ? 'var(--mui-palette-background-paper)' : 'transparent',
                ...popoutCollapsed && level === 0 && {
                    paddingBlock: theme.spacing(2),
                    boxShadow: 'var(--mui-customShadows-lg)',
                    '[data-skin="bordered"] ~ [data-floating-ui-portal] &': {
                        boxShadow: 'none',
                        border: '1px solid var(--mui-palette-divider)'
                    },
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].button}`]: {
                        paddingInline: theme.spacing(4)
                    }
                }
            })
    };
};
const __TURBOPACK__default__export__ = menuItemStyles;

})()),
"[project]/src/@core/styles/vertical/menuSectionStyles.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Util Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@menu/utils/menuClasses.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const menuSectionStyles = (verticalNavOptions, theme)=>{
    // Vars
    const { isCollapsed, isHovered, collapsedWidth } = verticalNavOptions;
    const collapsedNotHovered = isCollapsed && !isHovered;
    return {
        root: {
            marginBlockStart: theme.spacing(7),
            [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].menuSectionContent}`]: {
                color: 'var(--mui-palette-text-disabled)',
                paddingInline: '0 !important',
                paddingBlock: `${theme.spacing(collapsedNotHovered ? 3.875 : 1.75)} !important`,
                gap: theme.spacing(2.5),
                ...collapsedNotHovered && {
                    paddingInlineStart: `${theme.spacing((collapsedWidth - 22) / 8)} !important`,
                    paddingInlineEnd: `${theme.spacing(((collapsedWidth - 22) / 2 - 5) / 4)} !important`
                },
                '&:before': {
                    content: '""',
                    blockSize: 1,
                    inlineSize: collapsedNotHovered ? '1.3125rem' : '0.875rem',
                    backgroundColor: 'var(--mui-palette-divider)'
                },
                ...!collapsedNotHovered && {
                    '&:after': {
                        content: '""',
                        blockSize: 1,
                        flexGrow: 1,
                        backgroundColor: 'var(--mui-palette-divider)'
                    }
                }
            },
            [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].menuSectionLabel}`]: {
                flexGrow: 0,
                fontSize: '13px',
                lineHeight: 1.38462,
                ...collapsedNotHovered && {
                    display: 'none'
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = menuSectionStyles;

})()),
"[project]/src/@core/svg/Logo.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Logo = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1.2658em",
        height: "1em",
        viewBox: "0 0 100 79",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.92008 0.501904L22.662 11.4573C23.614 12.0451 24.1936 13.0844 24.1936 14.2036V64.2521C24.1936 65.3871 23.5976 66.4387 22.6241 67.0214L4.8822 77.6429C3.35344 78.5581 1.37254 78.0602 0.457741 76.5307C0.158194 76.0299 0 75.4572 0 74.8736V3.24818C0 1.46582 1.44424 0.0209274 3.22581 0.0209274C3.82422 0.0209274 4.41085 0.18746 4.92008 0.501904Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/Logo.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.077704",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 26.1063L24.1936 39.9852V53.5915L0 26.1063Z",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/Logo.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.077704",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 26.1063L24.1936 39.6319V47.9438L0 26.1063Z",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/Logo.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M95.084 0.489601L77.3421 11.4083C76.3878 11.9956 75.8064 13.0362 75.8064 14.1571V64.2526C75.8064 65.3875 76.4024 66.4391 77.3759 67.0219L95.1178 77.6433C96.6466 78.5585 98.6275 78.0606 99.5423 76.5312C99.8418 76.0303 100 75.4576 100 74.874V3.23842C100 1.45605 98.5558 0.0111618 96.7742 0.0111618C96.1774 0.0111618 95.5923 0.176782 95.084 0.489601Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/Logo.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.077704",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M100 26.1063L75.8064 39.956V54.0023L100 26.1063Z",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/Logo.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                opacity: "0.077704",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M100 26.1063L75.8064 39.6199V48.3546L100 26.1063Z",
                fill: "black"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/Logo.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.91149 0.475694L50 28.123V54.7479L0 26.0986V3.22726C0 1.44489 1.44424 0 3.22581 0C3.8208 0 4.4042 0.164633 4.91149 0.475694Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/Logo.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.91149 0.475694L50 28.123V54.7479L0 26.0986V3.22726C0 1.44489 1.44424 0 3.22581 0C3.8208 0 4.4042 0.164633 4.91149 0.475694Z",
                fill: "white",
                fillOpacity: "0.15"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/Logo.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M95.0885 0.475694L50 28.123V54.7479L100 26.0986V3.22726C100 1.44489 98.5558 0 96.7742 0C96.1792 0 95.5958 0.164633 95.0885 0.475694Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/Logo.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M95.0885 0.475694L50 28.123V54.7479L100 26.0986V3.22726C100 1.44489 98.5558 0 96.7742 0C96.1792 0 95.5958 0.164633 95.0885 0.475694Z",
                fill: "white",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/Logo.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/svg/Logo.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = Logo;
const __TURBOPACK__default__export__ = Logo;
var _c;
__turbopack_refresh__.register(_c, "Logo");

})()),
"[project]/src/@core/styles/vertical/navigationCustomStyles.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Util Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@menu/utils/menuClasses.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const navigationCustomStyles = (verticalNavOptions, theme)=>{
    // Vars
    const { isCollapsed, isHovered, collapsedWidth, transitionDuration } = verticalNavOptions;
    const collapsedHovered = isCollapsed && isHovered;
    const collapsedNotHovered = isCollapsed && !isHovered;
    return {
        color: 'var(--mui-palette-text-primary)',
        zIndex: 'var(--drawer-z-index) !important',
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalNavClasses"].header}`]: {
            paddingBlock: theme.spacing(5),
            paddingInline: theme.spacing(5.5, 4),
            ...collapsedNotHovered && {
                paddingInline: theme.spacing((collapsedWidth - 29) / 8),
                '& a': {
                    transform: `translateX(-${22 - (collapsedWidth - 29) / 2}px)`
                }
            },
            '& a': {
                transition: `transform ${transitionDuration}ms ease`
            }
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalNavClasses"].container}`]: {
            transition: theme.transitions.create([
                'inline-size',
                'inset-inline-start',
                'box-shadow'
            ], {
                duration: transitionDuration,
                easing: 'ease-in-out'
            }),
            borderColor: 'transparent',
            ...collapsedHovered && {
                boxShadow: 'var(--mui-customShadows-lg)'
            },
            [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalNavClasses"].toggled}`]: {
                boxShadow: 'var(--mui-customShadows-lg)'
            },
            '[data-skin="bordered"] &': {
                borderColor: 'var(--mui-palette-divider)'
            }
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].root}`]: {
            paddingBlockEnd: theme.spacing(2),
            ...collapsedNotHovered ? {
                paddingInlineEnd: theme.spacing(1.25)
            } : {
                paddingInlineEnd: theme.spacing(4)
            }
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verticalNavClasses"].backdrop}`]: {
            backgroundColor: 'var(--backdrop-color)'
        }
    };
};
const __TURBOPACK__default__export__ = navigationCustomStyles;

})()),
"[project]/src/@core/styles/horizontal/menuRootStyles.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const menuRootStyles = (theme)=>{
    return {
        '& > ul > li:not(:last-of-type)': {
            marginInlineEnd: theme.spacing(2)
        }
    };
};
const __TURBOPACK__default__export__ = menuRootStyles;

})()),
"[project]/src/@core/styles/horizontal/menuItemStyles.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// MUI Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@5.16.7_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled@1_htuzuuhilabfjy5zsrakmmdmg4/node_modules/@mui/system/esm/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@menu/utils/menuClasses.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const menuItemStyles = (theme, iconClass)=>({
        root: ({ level })=>({
                ...level === 0 && {
                    borderRadius: 50
                },
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].open} > .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].button}`]: {
                    backgroundColor: 'var(--mui-palette-action-selected) !important'
                },
                ...level === 0 ? {
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].button}.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
                        color: 'var(--mui-palette-primary-contrastText) !important',
                        background: theme.direction === 'ltr' ? `linear-gradient(270deg, var(--mui-palette-primary-main), ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lighten"])(theme.palette.primary.main, 0.5)} 100%)` : `linear-gradient(270deg, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lighten"])(theme.palette.primary.main, 0.5)}, var(--mui-palette-primary-main) 100%)`
                    }
                } : {
                    [`&:not([aria-expanded]) > .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].button}.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                        color: 'var(--mui-palette-primary-main)'
                    },
                    [`&[aria-expanded] > .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].button}.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
                        backgroundColor: 'var(--mui-palette-action-selected) !important'
                    }
                },
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].disabled} > .${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].button}`]: {
                    color: 'var(--mui-palette-text-disabled)',
                    '& *': {
                        color: 'inherit'
                    }
                }
            }),
        button: {
            paddingInline: theme.spacing(4),
            '&:not(:has(.MuiChip-root))': {
                paddingBlock: theme.spacing(2)
            },
            '&:has(.MuiChip-root)': {
                paddingBlock: theme.spacing(1.75)
            },
            [`&:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].active}):hover, &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].active}):focus-visible, &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].active})[aria-expanded="true"]`]: {
                backgroundColor: 'var(--mui-palette-action-hover)'
            }
        },
        icon: ({ level })=>({
                marginInlineEnd: theme.spacing(2),
                ...level < 2 ? {
                    fontSize: '1.375rem'
                } : {
                    fontSize: '0.75rem',
                    color: 'var(--mui-palette-text-secondary)'
                },
                '& > i, & > svg': {
                    fontSize: 'inherit'
                },
                [`& .${iconClass}`]: {
                    fontSize: '0.75rem',
                    color: 'var(--mui-palette-text-secondary)',
                    ...level === 1 && {
                        marginInline: theme.spacing(1.25)
                    },
                    [`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuClasses"].active} &`]: {
                        color: 'var(--mui-palette-primary-main)'
                    }
                }
            }),
        prefix: {
            marginInlineEnd: theme.spacing(2)
        },
        suffix: {
            marginInlineStart: theme.spacing(2)
        },
        subMenuStyles: {
            zIndex: 'calc(var(--header-z-index) + 1)'
        },
        subMenuExpandIcon: {
            fontSize: '1.375rem',
            marginInlineStart: theme.spacing(2),
            '& i, & svg': {
                fontSize: 'inherit'
            }
        },
        subMenuContent: {
            backgroundColor: 'var(--mui-palette-background-paper)',
            boxShadow: 'var(--mui-customShadows-lg)',
            '[data-skin="bordered"] ~ [data-floating-ui-portal] &': {
                boxShadow: 'none',
                border: '1px solid var(--mui-palette-divider)'
            },
            '& > ul, & > div > ul': {
                paddingBlock: theme.spacing(2)
            }
        }
    });
const __TURBOPACK__default__export__ = menuItemStyles;

})()),
"[project]/src/@core/components/mui/Avatar.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Avatar/Avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@5.16.7_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled@1_htuzuuhilabfjy5zsrakmmdmg4/node_modules/@mui/system/esm/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <export default as styled>");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
const Avatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ skin, color, size, theme })=>{
    return {
        ...color && skin === 'light' && {
            backgroundColor: `var(--mui-palette-${color}-lightOpacity)`,
            color: `var(--mui-palette-${color}-main)`
        },
        ...color && skin === 'light-static' && {
            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lighten"])(theme.palette[color].main, 0.84),
            color: `var(--mui-palette-${color}-main)`
        },
        ...color && skin === 'filled' && {
            backgroundColor: `var(--mui-palette-${color}-main)`,
            color: `var(--mui-palette-${color}-contrastText)`
        },
        ...size && {
            height: size,
            width: size
        }
    };
});
_c = Avatar;
const CustomAvatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = (props, ref)=>{
    // Props
    const { color, skin = 'filled', ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
        color: color,
        skin: skin,
        ref: ref,
        ...rest
    }, void 0, false, {
        fileName: "[project]/src/@core/components/mui/Avatar.jsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
});
_c2 = CustomAvatar;
const __TURBOPACK__default__export__ = CustomAvatar;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "Avatar");
__turbopack_refresh__.register(_c1, "CustomAvatar$forwardRef");
__turbopack_refresh__.register(_c2, "CustomAvatar");

})()),
"[project]/src/@core/svg/SkinDefault.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SkinDefault = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "104",
        height: "66",
        viewBox: "0 0 104 66",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "104",
                height: "66",
                rx: "4",
                fill: "currentColor",
                fillOpacity: "0.02"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 4C0 1.79086 1.79086 0 4 0H27.4717V66H4C1.79086 66 0 64.2091 0 62V4Z",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "23.8839",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8.83008",
                y: "5.88135",
                width: "9.81132",
                height: "9.70588",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "34.4381",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "44.9923",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "55.5462",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "34.1152",
                y: "4.67166",
                width: "64.7547",
                height: "8.8",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "37.0391",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "80.21",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "86.0957",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "91.9824",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "58.4844",
                y: "19.6134",
                width: "40.2264",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "34.1152",
                y: "19.6134",
                width: "19.0455",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "34.1152",
                y: "42.4545",
                width: "64.7547",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinDefault.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/svg/SkinDefault.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = SkinDefault;
const __TURBOPACK__default__export__ = SkinDefault;
var _c;
__turbopack_refresh__.register(_c, "SkinDefault");

})()),
"[project]/src/@core/svg/SkinBordered.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SkinDefault = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "104",
        height: "66",
        viewBox: "0 0 104 66",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "104",
                height: "66",
                rx: "4",
                fill: "currentColor",
                fillOpacity: "0.02"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "23.8839",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8.83008",
                y: "5.88135",
                width: "9.81132",
                height: "9.70588",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "34.4381",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "44.9923",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "55.5462",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "34.6152",
                y: "5.17166",
                width: "63.7547",
                height: "7.8",
                rx: "1.5",
                stroke: "currentColor",
                strokeOpacity: "0.12"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "37.0391",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "80.21",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "86.0957",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "91.002",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "58.9844",
                y: "20.1134",
                width: "39.2264",
                height: "16.6",
                rx: "1.5",
                stroke: "currentColor",
                strokeOpacity: "0.12"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "34.6152",
                y: "20.1134",
                width: "18.0455",
                height: "16.6",
                rx: "1.5",
                stroke: "currentColor",
                strokeOpacity: "0.12"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "34.6152",
                y: "42.9545",
                width: "63.7547",
                height: "16.6",
                rx: "1.5",
                stroke: "currentColor",
                strokeOpacity: "0.12"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/SkinBordered.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/svg/SkinBordered.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = SkinDefault;
const __TURBOPACK__default__export__ = SkinDefault;
var _c;
__turbopack_refresh__.register(_c, "SkinDefault");

})()),
"[project]/src/@core/svg/LayoutVertical.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const LayoutVertical = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "104",
        height: "66",
        viewBox: "0 0 104 66",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "104",
                height: "66",
                rx: "4",
                fill: "currentColor",
                fillOpacity: "0.02"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 4C0 1.79086 1.79086 0 4 0H27.4717V66H4C1.79086 66 0 64.2091 0 62V4Z",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "23.8839",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8.83008",
                y: "5.88135",
                width: "9.81132",
                height: "9.70588",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "34.4382",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "44.9923",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.90625",
                y: "55.5463",
                width: "17.6604",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "32.1523",
                y: "4.67169",
                width: "64.7547",
                height: "8.8",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "35.0781",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "78.248",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "84.1348",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "90.0215",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "57.0859",
                y: "19.6134",
                width: "40.2264",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "32.1523",
                y: "19.6134",
                width: "19.0455",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "32.1523",
                y: "42.4545",
                width: "65.1591",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/svg/LayoutVertical.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = LayoutVertical;
const __TURBOPACK__default__export__ = LayoutVertical;
var _c;
__turbopack_refresh__.register(_c, "LayoutVertical");

})()),
"[project]/src/@core/svg/LayoutCollapsed.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const LayoutCollapsed = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "104",
        height: "66",
        viewBox: "0 0 104 66",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "104",
                height: "66",
                rx: "4",
                fill: "currentColor",
                fillOpacity: "0.02"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 4C0 1.79086 1.79086 0 4 0H13.7359V66H4C1.79086 66 0 64.2091 0 62V4Z",
                fill: "currentColor",
                fillOpacity: "0.04"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2.94336",
                y: "23.8839",
                width: "7.84906",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3.43359",
                y: "5.88135",
                width: "6.86793",
                height: "6.79412",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2.94336",
                y: "34.4382",
                width: "7.84906",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2.94336",
                y: "44.9923",
                width: "7.84906",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2.94336",
                y: "55.5463",
                width: "7.84906",
                height: "2.78946",
                rx: "1.39473",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "21.4717",
                y: "4.67169",
                width: "75.437",
                height: "8.8",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "25.6172",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "78.248",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "84.1348",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "90.0215",
                y: "6.87158",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "50.4912",
                y: "19.6134",
                width: "46.8212",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "21.4717",
                y: "19.6134",
                width: "22.1679",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "21.4717",
                y: "42.4545",
                width: "75.8413",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/svg/LayoutCollapsed.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = LayoutCollapsed;
const __TURBOPACK__default__export__ = LayoutCollapsed;
var _c;
__turbopack_refresh__.register(_c, "LayoutCollapsed");

})()),
"[project]/src/@core/svg/LayoutHorizontal.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const LayoutHorizontal = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "104",
        height: "66",
        viewBox: "0 0 104 66",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "104",
                height: "66",
                rx: "4",
                fill: "currentColor",
                fillOpacity: "0.02"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "44.0068",
                y: "19.6136",
                width: "46.8212",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14.9854",
                y: "19.6136",
                width: "22.1679",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14.9854",
                y: "42.4547",
                width: "75.8413",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14.9248",
                y: "4.68896",
                width: "74.1506",
                height: "9.00999",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "20.0264",
                y: "6.50403",
                width: "6.00327",
                height: "5.38019",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "33.877",
                y: "7.96356",
                width: "6.6372",
                height: "2.46129",
                rx: "1.23064",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "48.3652",
                y: "7.96356",
                width: "6.6372",
                height: "2.46129",
                rx: "1.23064",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "62.8506",
                y: "7.96356",
                width: "6.6372",
                height: "2.46129",
                rx: "1.23064",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "77.3379",
                y: "7.96356",
                width: "6.6372",
                height: "2.46129",
                rx: "1.23064",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/svg/LayoutHorizontal.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = LayoutHorizontal;
const __TURBOPACK__default__export__ = LayoutHorizontal;
var _c;
__turbopack_refresh__.register(_c, "LayoutHorizontal");

})()),
"[project]/src/@core/svg/ContentCompact.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ContentCompact = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "104",
        height: "66",
        viewBox: "0 0 104 66",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "104",
                height: "66",
                rx: "4",
                fill: "currentColor",
                fillOpacity: "0.02"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentCompact.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "19.4209",
                y: "4.67169",
                width: "64.7547",
                height: "8.8",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentCompact.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "22.3447",
                y: "6.87164",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentCompact.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "65.5146",
                y: "6.87164",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentCompact.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "71.4014",
                y: "6.87164",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentCompact.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "77.2881",
                y: "6.87164",
                width: "3.92453",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentCompact.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "44.3525",
                y: "19.6135",
                width: "40.2264",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentCompact.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "19.4209",
                y: "19.6135",
                width: "19.0455",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentCompact.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "19.4209",
                y: "42.4545",
                width: "65.1591",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentCompact.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/svg/ContentCompact.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = ContentCompact;
const __TURBOPACK__default__export__ = ContentCompact;
var _c;
__turbopack_refresh__.register(_c, "ContentCompact");

})()),
"[project]/src/@core/svg/ContentWide.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ContentWide = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "104",
        height: "66",
        viewBox: "0 0 104 66",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "104",
                height: "66",
                rx: "4",
                fill: "currentColor",
                fillOpacity: "0.02"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentWide.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6.6875",
                y: "4.67169",
                width: "90.6244",
                height: "8.8",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentWide.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10.165",
                y: "6.87164",
                width: "4.90566",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentWide.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "75.2002",
                y: "6.87164",
                width: "4.90566",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentWide.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "82.0674",
                y: "6.87164",
                width: "4.90566",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentWide.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "88.9346",
                y: "6.87164",
                width: "4.90566",
                height: "4.4",
                rx: "1",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentWide.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "41.3652",
                y: "19.6135",
                width: "55.9476",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentWide.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6.6875",
                y: "19.6135",
                width: "26.4888",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentWide.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6.6875",
                y: "42.4545",
                width: "90.6244",
                height: "17.6",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/ContentWide.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/svg/ContentWide.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = ContentWide;
const __TURBOPACK__default__export__ = ContentWide;
var _c;
__turbopack_refresh__.register(_c, "ContentWide");

})()),
"[project]/src/@core/svg/DirectionLtr.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const DirectionLtr = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "104",
        height: "66",
        viewBox: "0 0 104 66",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "104",
                height: "66",
                rx: "4",
                fill: "currentColor",
                fillOpacity: "0.02"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5.20215",
                y: "4.12146",
                width: "24.0976",
                height: "57.5885",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10.3232",
                y: "16.8697",
                width: "13.8545",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10.3232",
                y: "25.5618",
                width: "9.87943",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10.3232",
                y: "34.2538",
                width: "12.3826",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10.3232",
                y: "42.946",
                width: "6.08818",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10.3232",
                y: "51.6384",
                width: "8.09094",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "35.5137",
                y: "4.12134",
                width: "62.3885",
                height: "57.5885",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "43.7578",
                y: "14.1833",
                width: "13.8545",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "43.7578",
                y: "22.8753",
                width: "32.8013",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "43.7578",
                y: "31.5674",
                width: "41.2076",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "43.7578",
                y: "40.2593",
                width: "32.8013",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "43.7578",
                y: "48.9517",
                width: "5.77482",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/svg/DirectionLtr.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = DirectionLtr;
const __TURBOPACK__default__export__ = DirectionLtr;
var _c;
__turbopack_refresh__.register(_c, "DirectionLtr");

})()),
"[project]/src/@core/svg/DirectionRtl.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const DirectionRtl = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "104",
        height: "66",
        viewBox: "0 0 104 66",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "104",
                height: "66",
                rx: "4",
                fill: "currentColor",
                fillOpacity: "0.02"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "73.4756",
                y: "4.12134",
                width: "24.0976",
                height: "57.5885",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "78.5986",
                y: "16.8697",
                width: "13.8545",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "82.5713",
                y: "25.5618",
                width: "9.87943",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "80.0693",
                y: "34.2537",
                width: "12.3826",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "86.3633",
                y: "42.9459",
                width: "6.08818",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "84.3613",
                y: "51.6382",
                width: "8.09094",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5.20215",
                y: "4.12146",
                width: "62.3885",
                height: "57.5885",
                rx: "2",
                fill: "currentColor",
                fillOpacity: "0.08"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "45.709",
                y: "14.1833",
                width: "13.8545",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "26.7617",
                y: "22.8754",
                width: "32.8013",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "18.3555",
                y: "31.5674",
                width: "41.2076",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "26.7617",
                y: "40.2594",
                width: "32.8013",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "53.7881",
                y: "48.9517",
                width: "5.77482",
                height: "2.0921",
                rx: "1.04605",
                fill: "currentColor",
                fillOpacity: "0.3"
            }, void 0, false, {
                fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/@core/svg/DirectionRtl.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
};
_c = DirectionRtl;
const __TURBOPACK__default__export__ = DirectionRtl;
var _c;
__turbopack_refresh__.register(_c, "DirectionRtl");

})()),
"[project]/src/@core/components/customizer/styles.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "active": "styles-module__zI3dnq__active",
  "colorInput": "styles-module__zI3dnq__colorInput",
  "colorPopup": "styles-module__zI3dnq__colorPopup",
  "customizer": "styles-module__zI3dnq__customizer",
  "customizerBody": "styles-module__zI3dnq__customizerBody",
  "customizerSubtitle": "styles-module__zI3dnq__customizerSubtitle",
  "customizerTitle": "styles-module__zI3dnq__customizerTitle",
  "dotStyles": "styles-module__zI3dnq__dotStyles",
  "header": "styles-module__zI3dnq__header",
  "hr": "styles-module__zI3dnq__hr",
  "itemLabel": "styles-module__zI3dnq__itemLabel",
  "itemWrapper": "styles-module__zI3dnq__itemWrapper",
  "modeWrapper": "styles-module__zI3dnq__modeWrapper",
  "primaryColor": "styles-module__zI3dnq__primaryColor",
  "primaryColorWrapper": "styles-module__zI3dnq__primaryColorWrapper",
  "show": "styles-module__zI3dnq__show",
  "smallScreen": "styles-module__zI3dnq__smallScreen",
  "toggler": "styles-module__zI3dnq__toggler",
});

})()),
"[project]/src/@core/components/customizer/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Chip/Chip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Fade$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Fade/Fade.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Paper/Paper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Popper/Popper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$ClickAwayListener$2f$ClickAwayListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ClickAwayListener__as__default$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/ClickAwayListener/ClickAwayListener.js [app-client] (ecmascript) <export ClickAwayListener as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Switch/Switch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDebounce$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useDebounce.js [app-client] (ecmascript) <export default as useDebounce>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/esm/useMedia.js [app-client] (ecmascript) <export default as useMedia>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$colorful$40$5$2e$6$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$colorful$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-colorful@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-colorful/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$perfect$2d$scrollbar$40$1$2e$5$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$perfect$2d$scrollbar$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-perfect-scrollbar@1.5.8_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-perfect-scrollbar/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$SkinDefault$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/svg/SkinDefault.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$SkinBordered$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/svg/SkinBordered.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$LayoutVertical$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/svg/LayoutVertical.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$LayoutCollapsed$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/svg/LayoutCollapsed.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$LayoutHorizontal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/svg/LayoutHorizontal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$ContentCompact$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/svg/ContentCompact.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$ContentWide$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/svg/ContentWide.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$DirectionLtr$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/svg/DirectionLtr.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$DirectionRtl$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/svg/DirectionRtl.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/primaryColorConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/hooks/useSettings.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/@core/components/customizer/styles.module.css [app-client] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
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
const getLocalePath = (pathName, locale)=>{
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
};
const DebouncedColorPicker = (props)=>{
    _s();
    // Props
    const { settings, isColorFromPrimaryConfig, handleChange } = props;
    // States
    const [debouncedColor, setDebouncedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.primaryColor ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][0].main);
    // Hooks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDebounce$3e$__["useDebounce"])(()=>handleChange('primaryColor', debouncedColor), 200, [
        debouncedColor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$colorful$40$5$2e$6$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$colorful$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexColorPicker"], {
                color: !isColorFromPrimaryConfig ? settings.primaryColor ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][0].main : '#eee',
                onChange: setDebouncedColor
            }, void 0, false, {
                fileName: "[project]/src/@core/components/customizer/index.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$colorful$40$5$2e$6$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$colorful$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexColorInput"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorInput,
                color: !isColorFromPrimaryConfig ? settings.primaryColor ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][0].main : '#eee',
                onChange: setDebouncedColor,
                prefixed: true,
                placeholder: "Type a color"
            }, void 0, false, {
                fileName: "[project]/src/@core/components/customizer/index.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(DebouncedColorPicker, "hCiIm0O1jFgqJQOYf5uAW+FtAZk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useDebounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useDebounce$3e$__["useDebounce"]
    ];
});
_c = DebouncedColorPicker;
const Customizer = ({ breakpoint = 'lg', dir = 'ltr', disableDirection = false })=>{
    _s1();
    // States
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dir);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs
    const anchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const pathName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { settings, updateSettings, resetSettings, isSettingsChanged } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])();
    const isSystemDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', false);
    // Vars
    let breakpointValue;
    switch(breakpoint){
        case 'xxl':
            breakpointValue = '1920px';
            break;
        case 'xl':
            breakpointValue = `${theme.breakpoints.values.xl}px`;
            break;
        case 'lg':
            breakpointValue = `${theme.breakpoints.values.lg}px`;
            break;
        case 'md':
            breakpointValue = `${theme.breakpoints.values.md}px`;
            break;
        case 'sm':
            breakpointValue = `${theme.breakpoints.values.sm}px`;
            break;
        case 'xs':
            breakpointValue = `${theme.breakpoints.values.xs}px`;
            break;
        default:
            breakpointValue = breakpoint;
    }
    const breakpointReached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])(`(max-width: ${breakpointValue})`, false);
    const isMobileScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(max-width: 600px)', false);
    const isBelowLgScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(max-width: 1200px)', false);
    const isColorFromPrimaryConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].find((item)=>item.main === settings.primaryColor);
    const ScrollWrapper = isBelowLgScreen ? 'div' : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$perfect$2d$scrollbar$40$1$2e$5$2e$8_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$perfect$2d$scrollbar$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const handleToggle = ()=>{
        setIsOpen(!isOpen);
    };
    // Update Settings
    const handleChange = (field, value)=>{
        // Update direction state
        if (field === 'direction') {
            setDirection(value);
        } else {
            // Update settings in cookie
            updateSettings({
                [field]: value
            });
        }
    };
    const handleMenuClose = (event)=>{
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setIsMenuOpen(false);
    };
    return !breakpointReached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('customizer', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customizer, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].show]: isOpen,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].smallScreen]: isMobileScreen
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollWrapper, {
            ...isBelowLgScreen ? {
                className: 'bs-full overflow-y-auto overflow-x-hidden'
            } : {
                options: {
                    wheelPropagation: false,
                    suppressScrollX: true
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customizerBody,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Theming",
                            size: "small",
                            color: "primary",
                            variant: "tonal",
                            className: "self-start rounded-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                            lineNumber: 182,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium",
                                    children: "Primary Color"
                                }, void 0, false, {
                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryColorWrapper, {
                                                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active]: settings.primaryColor === item.main
                                                }),
                                                onClick: ()=>handleChange('primaryColor', item.main),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryColor,
                                                    style: {
                                                        backgroundColor: item.main
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 194,
                                                    columnNumber: 23
                                                }, this)
                                            }, item.main, false, {
                                                fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                lineNumber: 187,
                                                columnNumber: 21
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: anchorRef,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryColorWrapper, {
                                                [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active]: !isColorFromPrimaryConfig
                                            }),
                                            onClick: ()=>setIsMenuOpen((prev)=>!prev),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryColor, 'flex items-center justify-center'),
                                                style: {
                                                    backgroundColor: !isColorFromPrimaryConfig ? settings.primaryColor : 'var(--mui-palette-action-selected)',
                                                    color: isColorFromPrimaryConfig ? 'var(--mui-palette-text-primary)' : 'var(--mui-palette-primary-contrastText)'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "ri-palette-line text-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                lineNumber: 204,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Popper$2f$Popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            transition: true,
                                            open: isMenuOpen,
                                            disablePortal: true,
                                            anchorEl: anchorRef.current,
                                            placement: "bottom-end",
                                            className: "z-[1]",
                                            children: ({ TransitionProps })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Fade$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    ...TransitionProps,
                                                    style: {
                                                        transformOrigin: 'right top'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        elevation: 6,
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorPopup,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$ClickAwayListener$2f$ClickAwayListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ClickAwayListener__as__default$3e$__["default"], {
                                                            onClickAway: handleMenuClose,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DebouncedColorPicker, {
                                                                    settings: settings,
                                                                    isColorFromPrimaryConfig: isColorFromPrimaryConfig,
                                                                    handleChange: handleChange
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                                lineNumber: 230,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                            lineNumber: 229,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                        lineNumber: 228,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 227,
                                                    columnNumber: 23
                                                }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                            lineNumber: 183,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium",
                                    children: "Mode"
                                }, void 0, false, {
                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemWrapper, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modeWrapper, {
                                                        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active]: settings.mode === 'light'
                                                    }),
                                                    onClick: ()=>handleChange('mode', 'light'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "ri-sun-line text-[30px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                        lineNumber: 254,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemLabel,
                                                    onClick: ()=>handleChange('mode', 'light'),
                                                    children: "Light"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 256,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemWrapper, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modeWrapper, {
                                                        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active]: settings.mode === 'dark'
                                                    }),
                                                    onClick: ()=>handleChange('mode', 'dark'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "ri-moon-clear-line text-[30px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                        lineNumber: 267,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 261,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemLabel,
                                                    onClick: ()=>handleChange('mode', 'dark'),
                                                    children: "Dark"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 269,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                                            lineNumber: 260,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemWrapper, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modeWrapper, {
                                                        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active]: settings.mode === 'system'
                                                    }),
                                                    onClick: ()=>handleChange('mode', 'system'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "ri-computer-line text-[30px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                        lineNumber: 280,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 274,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemLabel,
                                                    onClick: ()=>handleChange('mode', 'system'),
                                                    children: "System"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                                            lineNumber: 273,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                            lineNumber: 244,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-medium",
                                    children: "Skin"
                                }, void 0, false, {
                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                    lineNumber: 289,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemWrapper, {
                                                        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active]: settings.skin === 'default'
                                                    }),
                                                    onClick: ()=>handleChange('skin', 'default'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$SkinDefault$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                        lineNumber: 296,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemLabel,
                                                    onClick: ()=>handleChange('skin', 'default'),
                                                    children: "Default"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemWrapper, {
                                                        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active]: settings.skin === 'bordered'
                                                    }),
                                                    onClick: ()=>handleChange('skin', 'bordered'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$svg$2f$SkinBordered$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                        lineNumber: 307,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 303,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$customizer$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemLabel,
                                                    onClick: ()=>handleChange('skin', 'bordered'),
                                                    children: "Bordered"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                                    lineNumber: 309,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                    lineNumber: 290,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                            lineNumber: 288,
                            columnNumber: 15
                        }, this),
                        settings.mode === 'dark' || settings.mode === 'system' && isSystemDark || settings.layout === 'horizontal' ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "font-medium cursor-pointer",
                                    htmlFor: "customizer-semi-dark",
                                    children: "Semi Dark"
                                }, void 0, false, {
                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                    lineNumber: 319,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "customizer-semi-dark",
                                    checked: settings.semiDark === true,
                                    onChange: ()=>handleChange('semiDark', !settings.semiDark)
                                }, void 0, false, {
                                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                                    lineNumber: 322,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/@core/components/customizer/index.jsx",
                            lineNumber: 318,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/@core/components/customizer/index.jsx",
                    lineNumber: 181,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/@core/components/customizer/index.jsx",
                lineNumber: 180,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/@core/components/customizer/index.jsx",
            lineNumber: 175,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/@core/components/customizer/index.jsx",
        lineNumber: 153,
        columnNumber: 7
    }, this);
};
_s1(Customizer, "hKSGEhUkX6ZnkALgXY/ZujvKXyk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$use$40$17$2e$5$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"]
    ];
});
_c1 = Customizer;
const __TURBOPACK__default__export__ = Customizer;
var _c, _c1;
__turbopack_refresh__.register(_c, "DebouncedColorPicker");
__turbopack_refresh__.register(_c1, "Customizer");

})()),
"[project]/src/@core/components/scroll-to-top/index.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Zoom$2f$Zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Zoom/Zoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const ScrollToTopStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])('div')(({ theme })=>({
        zIndex: 'var(--mui-zIndex-fab)',
        position: 'fixed',
        insetInlineEnd: theme.spacing(10),
        insetBlockEnd: theme.spacing(14)
    }));
_c = ScrollToTopStyled;
const ScrollToTop = (props)=>{
    _s();
    // Props
    const { children, className } = props;
    // Hooks
    // init trigger
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        threshold: 400,
        disableHysteresis: true
    });
    const handleClick = ()=>{
        const anchor = document.querySelector('body');
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Zoom$2f$Zoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        in: trigger,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollToTopStyled, {
            className: className,
            onClick: handleClick,
            role: "presentation",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/@core/components/scroll-to-top/index.jsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/@core/components/scroll-to-top/index.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
_s(ScrollToTop, "EC2GbbZl9x3XKoXLVx1H89cOBi0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = ScrollToTop;
const __TURBOPACK__default__export__ = ScrollToTop;
var _c, _c1;
__turbopack_refresh__.register(_c, "ScrollToTopStyled");
__turbopack_refresh__.register(_c1, "ScrollToTop");

})()),
}]);

//# sourceMappingURL=src_%40core_363291._.js.map