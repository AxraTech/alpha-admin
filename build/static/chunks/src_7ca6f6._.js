(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_7ca6f6._.js", {

"[project]/src/@core/components/mui/IconButton.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/configs/themeConfig.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const CustomIconButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ color, size, theme, variant })=>{
    return {
        minInlineSize: 0,
        ...size === 'small' ? {
            fontSize: '20px',
            padding: theme.spacing(variant === 'outlined' ? 1.5 : 1.75),
            '& i, & svg': {
                fontSize: 'inherit'
            }
        } : {
            ...size === 'large' ? {
                fontSize: '24px',
                padding: theme.spacing(variant === 'outlined' ? 2 : 2.25),
                '& i, & svg': {
                    fontSize: 'inherit'
                }
            } : {
                fontSize: '22px',
                padding: theme.spacing(variant === 'outlined' ? 1.75 : 2),
                '& i, & svg': {
                    fontSize: 'inherit'
                }
            }
        },
        ...!color && {
            color: 'var(--mui-palette-action-active)',
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
            },
            ...variant === 'outlined' && {
                border: 'none !important',
                ...size === 'small' ? {
                    padding: theme.spacing(1.75)
                } : {
                    ...size === 'large' ? {
                        padding: theme.spacing(2.25)
                    } : {
                        padding: theme.spacing(2)
                    }
                }
            },
            ...variant === 'contained' && {
                boxShadow: 'none !important',
                backgroundColor: 'transparent'
            }
        }
    };
});
const __TURBOPACK__default__export__ = CustomIconButton;

})()),
"[project]/src/views/news/add/NewsInformation.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Grid/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardHeader/CardHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$react$40$2$2e$7$2e$2_$40$tiptap$2b$core$40$2$2e$7$2e$2_$40$tiptap$2b$pm$40$2$2e$7$2e$2_$5f40$tiptap$2b$pm$40$2$2e$7$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tiptap+react@2.7.2_@tiptap+core@2.7.2_@tiptap+pm@2.7.2__@tiptap+pm@2.7.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$starter$2d$kit$40$2$2e$7$2e$2$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tiptap+starter-kit@2.7.2/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$underline$40$2$2e$7$2e$2_$40$tiptap$2b$core$40$2$2e$7$2e$2_$40$tiptap$2b$pm$40$2$2e$7$2e$2_$2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tiptap+extension-underline@2.7.2_@tiptap+core@2.7.2_@tiptap+pm@2.7.2_/node_modules/@tiptap/extension-underline/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$placeholder$40$2$2e$7$2e$2_$40$tiptap$2b$core$40$2$2e$7$2e$2_$40$tiptap$2b$pm$40$2$2e$7$2e$2_$5f40$tiptap$2b$pm$40$2$2e$7$2e$2$2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tiptap+extension-placeholder@2.7.2_@tiptap+core@2.7.2_@tiptap+pm@2.7.2__@tiptap+pm@2.7.2/node_modules/@tiptap/extension-placeholder/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$text$2d$align$40$2$2e$7$2e$2_$40$tiptap$2b$core$40$2$2e$7$2e$2_$40$tiptap$2b$pm$40$2$2e$7$2e$2_$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tiptap+extension-text-align@2.7.2_@tiptap+core@2.7.2_@tiptap+pm@2.7.2_/node_modules/@tiptap/extension-text-align/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/components/mui/IconButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$colorful$40$5$2e$6$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$colorful$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-colorful@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-colorful/dist/index.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
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
const EditorToolbar = ({ editor })=>{
    if (!editor) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-x-3 gap-y-1 pbs-5 pbe-4 pli-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...editor.isActive('bold') && {
                    color: 'primary'
                },
                variant: "outlined",
                size: "small",
                onClick: ()=>editor.chain().focus().toggleBold().run(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ri-bold', {
                        'text-textSecondary': !editor.isActive('bold')
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...editor.isActive('underline') && {
                    color: 'primary'
                },
                variant: "outlined",
                size: "small",
                onClick: ()=>editor.chain().focus().toggleUnderline().run(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ri-underline', {
                        'text-textSecondary': !editor.isActive('underline')
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...editor.isActive('italic') && {
                    color: 'primary'
                },
                variant: "outlined",
                size: "small",
                onClick: ()=>editor.chain().focus().toggleItalic().run(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ri-italic', {
                        'text-textSecondary': !editor.isActive('italic')
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...editor.isActive('strike') && {
                    color: 'primary'
                },
                variant: "outlined",
                size: "small",
                onClick: ()=>editor.chain().focus().toggleStrike().run(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ri-strikethrough', {
                        'text-textSecondary': !editor.isActive('strike')
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...editor.isActive('bulletList') && {
                    color: 'primary'
                },
                variant: "outlined",
                size: "small",
                onClick: ()=>editor.chain().focus().toggleBulletList().run(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ri-list-unordered', {
                        'text-textSecondary': !editor.isActive('bulletList')
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...editor.isActive({
                    textAlign: 'left'
                }) && {
                    color: 'primary'
                },
                variant: "outlined",
                size: "small",
                onClick: ()=>editor.chain().focus().setTextAlign('left').run(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ri-align-left', {
                        'text-textSecondary': !editor.isActive({
                            textAlign: 'left'
                        })
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...editor.isActive({
                    textAlign: 'center'
                }) && {
                    color: 'primary'
                },
                variant: "outlined",
                size: "small",
                onClick: ()=>editor.chain().focus().setTextAlign('center').run(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ri-align-center', {
                        'text-textSecondary': !editor.isActive({
                            textAlign: 'center'
                        })
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...editor.isActive({
                    textAlign: 'right'
                }) && {
                    color: 'primary'
                },
                variant: "outlined",
                size: "small",
                onClick: ()=>editor.chain().focus().setTextAlign('right').run(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ri-align-right', {
                        'text-textSecondary': !editor.isActive({
                            textAlign: 'right'
                        })
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...editor.isActive({
                    textAlign: 'justify'
                }) && {
                    color: 'primary'
                },
                variant: "outlined",
                size: "small",
                onClick: ()=>editor.chain().focus().setTextAlign('justify').run(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$classnames$40$2$2e$5$2e$1$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ri-align-justify', {
                        'text-textSecondary': !editor.isActive({
                            textAlign: 'justify'
                        })
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/news/add/NewsInformation.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_c = EditorToolbar;
const NewsInformation = ({ setTitle, title, setDescription, description, errors })=>{
    _s();
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$react$40$2$2e$7$2e$2_$40$tiptap$2b$core$40$2$2e$7$2e$2_$40$tiptap$2b$pm$40$2$2e$7$2e$2_$5f40$tiptap$2b$pm$40$2$2e$7$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$starter$2d$kit$40$2$2e$7$2e$2$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarterKit"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$placeholder$40$2$2e$7$2e$2_$40$tiptap$2b$core$40$2$2e$7$2e$2_$40$tiptap$2b$pm$40$2$2e$7$2e$2_$5f40$tiptap$2b$pm$40$2$2e$7$2e$2$2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Placeholder"].configure({
                placeholder: 'Write something here...'
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$text$2d$align$40$2$2e$7$2e$2_$40$tiptap$2b$core$40$2$2e$7$2e$2_$40$tiptap$2b$pm$40$2$2e$7$2e$2_$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$align$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAlign"].configure({
                types: [
                    'heading',
                    'paragraph'
                ]
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$extension$2d$underline$40$2$2e$7$2e$2_$40$tiptap$2b$core$40$2$2e$7$2e$2_$40$tiptap$2b$pm$40$2$2e$7$2e$2_$2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Underline"]
        ],
        content: description,
        onUpdate: ({ editor })=>{
            setDescription(editor.getHTML());
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Post Information"
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        container: true,
                        spacing: 5,
                        className: "mbe-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                fullWidth: true,
                                label: "Post Name",
                                placeholder: "Enter Post Name",
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                error: errors?.title ? true : false,
                                helperText: errors?.title
                            }, void 0, false, {
                                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "mbe-1",
                        children: "Description (Optional)"
                    }, void 0, false, {
                        fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "p-0 border shadow-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "p-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorToolbar, {
                                    editor: editor
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "mli-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$react$40$2$2e$7$2e$2_$40$tiptap$2b$core$40$2$2e$7$2e$2_$40$tiptap$2b$pm$40$2$2e$7$2e$2_$5f40$tiptap$2b$pm$40$2$2e$7$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                                    editor: editor,
                                    className: "bs-[135px] overflow-y-auto flex ",
                                    value: description,
                                    onChange: (e)=>setDescription(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/news/add/NewsInformation.jsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/news/add/NewsInformation.jsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
};
_s(NewsInformation, "t0rsU/t1p+LiVrRpHUSgNnV9Lz4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tiptap$2b$react$40$2$2e$7$2e$2_$40$tiptap$2b$core$40$2$2e$7$2e$2_$40$tiptap$2b$pm$40$2$2e$7$2e$2_$5f40$tiptap$2b$pm$40$2$2e$7$2e$2_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c1 = NewsInformation;
const __TURBOPACK__default__export__ = NewsInformation;
var _c, _c1;
__turbopack_refresh__.register(_c, "EditorToolbar");
__turbopack_refresh__.register(_c1, "NewsInformation");

})()),
"[project]/src/views/news/add/NewsAddHeader.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const NewsAddHeader = ({ handleDiscardProduct, handleaddNews })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap sm:items-center justify-between max-sm:flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    variant: "h4",
                    className: "mbe-1",
                    children: "Add a New Post"
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsAddHeader.jsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsAddHeader.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap max-sm:flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outlined",
                        color: "error",
                        onClick: handleDiscardProduct,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/views/news/add/NewsAddHeader.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "contained",
                        onClick: handleaddNews,
                        children: "Publish News"
                    }, void 0, false, {
                        fileName: "[project]/src/views/news/add/NewsAddHeader.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/news/add/NewsAddHeader.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/news/add/NewsAddHeader.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_c = NewsAddHeader;
const __TURBOPACK__default__export__ = NewsAddHeader;
var _c;
__turbopack_refresh__.register(_c, "NewsAddHeader");

})()),
"[project]/src/components/Link.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/link.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
const Link = (props, ref)=>{
    // Props
    const { href, onClick, ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        ...rest,
        href: href || '/',
        onClick: onClick ? (e)=>onClick(e) : !href ? (e)=>e.preventDefault() : undefined
    }, void 0, false, {
        fileName: "[project]/src/components/Link.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = Link;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(Link);
var _c, _c1;
__turbopack_refresh__.register(_c, "Link");
__turbopack_refresh__.register(_c1, "%default%");

})()),
"[project]/src/libs/styles/AppReactDropzone.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <export default as styled>");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
// Styled Components
const AppReactDropzone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        '& .dropzone': {
            minHeight: 300,
            display: 'flex',
            flexWrap: 'wrap',
            cursor: 'pointer',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(4),
            borderRadius: 'var(--mui-shape-borderRadius)',
            border: '2px dashed var(--mui-palette-divider)',
            [theme.breakpoints.down('xs')]: {
                textAlign: 'center'
            },
            '&:focus': {
                outline: 'none'
            },
            '& + .MuiList-root': {
                padding: 0,
                marginTop: theme.spacing(6.25),
                '& .MuiListItem-root': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: 'var(--mui-shape-borderRadius)',
                    padding: theme.spacing(2.5, 2.4, 2.5, 6),
                    border: '1px solid var(--mui-palette-divider)',
                    '& .file-details': {
                        display: 'flex',
                        alignItems: 'center'
                    },
                    '& .file-preview': {
                        display: 'flex',
                        marginRight: theme.spacing(3.75),
                        '& svg': {
                            fontSize: '2rem'
                        }
                    },
                    '& img': {
                        width: 38,
                        height: 38,
                        padding: theme.spacing(0.75),
                        borderRadius: 'var(--mui-shape-borderRadius)',
                        border: '1px solid var(--mui-palette-divider)'
                    },
                    '& .file-name': {
                        fontWeight: 600
                    },
                    '& + .MuiListItem-root': {
                        marginTop: theme.spacing(3.5)
                    }
                },
                '& + .buttons': {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: theme.spacing(6.25),
                    '& > :first-of-type': {
                        marginRight: theme.spacing(3.5)
                    }
                }
            },
            '& img.single-file-image': {
                objectFit: 'cover',
                position: 'absolute',
                width: 'calc(100% - 1rem)',
                height: 'calc(100% - 1rem)',
                borderRadius: 'var(--mui-shape-borderRadius)'
            }
        }
    }));
const __TURBOPACK__default__export__ = AppReactDropzone;

})()),
"[project]/src/graphql/mutations.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ACCEPT_SERVICE_TOKEN": ()=>ACCEPT_SERVICE_TOKEN,
    "ADD_ADMIN": ()=>ADD_ADMIN,
    "ADD_BRAND": ()=>ADD_BRAND,
    "ADD_CATEGORY": ()=>ADD_CATEGORY,
    "ADD_DEALERS": ()=>ADD_DEALERS,
    "ADD_DISCOUNT": ()=>ADD_DISCOUNT,
    "ADD_NEWS": ()=>ADD_NEWS,
    "ADD_NEWS_CAT": ()=>ADD_NEWS_CAT,
    "ADD_NEWS_PRODUCTS": ()=>ADD_NEWS_PRODUCTS,
    "ADD_PARYMENT": ()=>ADD_PARYMENT,
    "ADD_PRODUCT": ()=>ADD_PRODUCT,
    "ADD_SERVICE_CENTER": ()=>ADD_SERVICE_CENTER,
    "ADD_USER": ()=>ADD_USER,
    "ADMIN_SIGN_IN": ()=>ADMIN_SIGN_IN,
    "CHANGE_INVOICE_STATUS": ()=>CHANGE_INVOICE_STATUS,
    "CHANGE_ORDER_STATUS": ()=>CHANGE_ORDER_STATUS,
    "CHANGE_QUOTATION_STATUS": ()=>CHANGE_QUOTATION_STATUS,
    "CHANGE_SERVICE_STATUS": ()=>CHANGE_SERVICE_STATUS,
    "CHANGE_USER_ACTIVATE": ()=>CHANGE_USER_ACTIVATE,
    "CHANGE_USER_STATUS": ()=>CHANGE_USER_STATUS,
    "DELETE_ADMIN": ()=>DELETE_ADMIN,
    "DELETE_DEALER": ()=>DELETE_DEALER,
    "DELETE_INVOICE": ()=>DELETE_INVOICE,
    "DELETE_NEWS": ()=>DELETE_NEWS,
    "DELETE_NEW_CAT": ()=>DELETE_NEW_CAT,
    "DELETE_NEW_RELATED_PRODUCTS": ()=>DELETE_NEW_RELATED_PRODUCTS,
    "DELETE_ORDERS": ()=>DELETE_ORDERS,
    "DELETE_PRODUCT": ()=>DELETE_PRODUCT,
    "DELETE_PRODUCT_BRAND": ()=>DELETE_PRODUCT_BRAND,
    "DELETE_PRODUCT_CAT": ()=>DELETE_PRODUCT_CAT,
    "DELETE_PRODUCT_DISCOUNT": ()=>DELETE_PRODUCT_DISCOUNT,
    "DELETE_PRODUCT_IMAGE": ()=>DELETE_PRODUCT_IMAGE,
    "DELETE_SERVICE_CENTER": ()=>DELETE_SERVICE_CENTER,
    "EDIT_ADMIN": ()=>EDIT_ADMIN,
    "EDIT_BRAND": ()=>EDIT_BRAND,
    "EDIT_DISCOUNT": ()=>EDIT_DISCOUNT,
    "EDIT_NEWS": ()=>EDIT_NEWS,
    "EDIT_PRODUCT_CATEGORY": ()=>EDIT_PRODUCT_CATEGORY,
    "EDIT_RPODUCTS": ()=>EDIT_RPODUCTS,
    "EDIT_SERVICE_CENTER": ()=>EDIT_SERVICE_CENTER,
    "EDIt_NEWS_CAT": ()=>EDIt_NEWS_CAT,
    "IMGAE_UPLOAD": ()=>IMGAE_UPLOAD,
    "IS_WARRANTY_VALID": ()=>IS_WARRANTY_VALID,
    "ORDER_COMPLETE": ()=>ORDER_COMPLETE,
    "PRODUCT_IMAGE_UPLOAD": ()=>PRODUCT_IMAGE_UPLOAD,
    "REJECT_SERVICE_TOKEN": ()=>REJECT_SERVICE_TOKEN,
    "SEND_INVOICE_FILE": ()=>SEND_INVOICE_FILE,
    "SEND_QUOTATION_FILE": ()=>SEND_QUOTATION_FILE,
    "SEND_Q_INVOICE_FILE": ()=>SEND_Q_INVOICE_FILE
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql-tag@2.12.6_graphql@16.9.0/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ADMIN_SIGN_IN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation adminSignIn($email: String!, $password: String!) {
    AdminSignIn(email: $email, password: $password) {
      token
      message
    }
  }
`;
const ADD_CATEGORY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addCategory($data: product_categories_insert_input!) {
    insert_product_categories_one(object: $data) {
      id
      title
      image_url
      created_at
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
const ADD_BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addCategory($data: brands_insert_input!) {
    insert_brands_one(object: $data) {
      id
      title
      image_url
      created_at
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
const ADD_PRODUCT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addProduct(
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String!
    $price: numeric!
  ) {
    insert_products_one(
      object: {
        title: $title
        description_html: $description_html
        brand_id: $brand_id
        category_id: $category_id
        serial_number: $serial_number
        price: $price
      }
    ) {
      id
    }
  }
`;
const EDIT_RPODUCTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editProduct(
    $id: uuid!
    $title: String!
    $description_html: String!
    $brand_id: uuid!
    $category_id: uuid!
    $serial_number: String!
    $price: numeric!
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: {
        title: $title
        description_html: $description_html
        brand_id: $brand_id
        category_id: $category_id
        serial_number: $serial_number
        price: $price
      }
    ) {
      id
    }
  }
`;
const ADD_NEWS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addNews($data: news_insert_input!) {
    insert_news_one(object: $data) {
      id
      image_url
      body_html
      created_at
      news_category {
        title
        id
      }
      disabled
      news_category_id
      title
      updated_at
    }
  }
`;
const DELETE_PRODUCT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_PRODUCT_BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteBrand($id: uuid!) {
    delete_brands_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_PRODUCT_CAT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteProductCat($id: uuid!) {
    delete_product_categories_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_NEW_CAT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteNewCat($id: uuid!) {
    delete_news_categories_by_pk(id: $id) {
      id
    }
  }
`;
const ADD_NEWS_CAT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addNewCat($title: String!) {
    insert_news_categories_one(object: { title: $title }) {
      id
    }
  }
`;
const DELETE_NEWS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_INVOICE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteInvoice($id: uuid!) {
    delete_invoices_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_ORDERS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation aa($id: uuid!) {
    delete_orders_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_DEALER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteDealer($id: uuid!) {
    delete_dealers_by_pk(id: $id) {
      id
    }
  }
`;
const ADD_DEALERS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addDealer($data: dealers_insert_input!) {
    insert_dealers_one(object: $data) {
      id
    }
  }
`;
const ADD_NEWS_PRODUCTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addNewProducts($data: news_related_products_insert_input!) {
    insert_news_related_products_one(object: $data) {
      id
    }
  }
`;
const EDIT_NEWS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editNewProducts($id: uuid!, $data: news_set_input!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      image_url
      body_html
      created_at
      news_category {
        title
        id
      }
      disabled
      news_category_id
      title
      updated_at
    }
  }
`;
const DELETE_NEW_RELATED_PRODUCTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation aa($news_id: uuid!) {
    delete_news_related_products(where: { news_id: { _eq: $news_id } }) {
      returning {
        id
      }
    }
  }
`;
const IMGAE_UPLOAD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation aa($content_type: String!, $folder: String!) {
    getFileUploadUrl(content_type: $content_type, folder: $folder) {
      error
      message
      fileName
      fileUploadUrl
    }
  }
`;
const CHANGE_ORDER_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation orderStatus($order_id: uuid!, $status: String!) {
    updateOrderStatus(order_id: $order_id, status: $status) {
      message
    }
  }
`;
const CHANGE_SERVICE_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateServiceStatus($service_token_id: uuid!, $status: String!) {
    updateServiceStatus(service_token_id: $service_token_id, status: $status) {
      message
    }
  }
`;
const ACCEPT_SERVICE_TOKEN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateServiceStatus($is_warranty_valid: Boolean!, $service_fee: numeric!, $service_token_id: uuid!) {
    acceptServiceToken(
      is_warranty_valid: $is_warranty_valid
      service_fee: $service_fee
      service_token_id: $service_token_id
    ) {
      message
    }
  }
`;
const REJECT_SERVICE_TOKEN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation rejectServiceToken($rejected_reason: String!, $service_token_id: uuid!) {
    rejectServiceToken(rejected_reason: $rejected_reason, service_token_id: $service_token_id) {
      message
    }
  }
`;
const CHANGE_USER_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation changeUserStatus($id: uuid!, $data: users_set_input!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      role
      status
    }
  }
`;
const CHANGE_USER_ACTIVATE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation userStatus($user_id: uuid!, $is_verified: Boolean!) {
    updateUserStatus(user_id: $user_id, is_verified: $is_verified) {
      message
    }
  }
`;
const CHANGE_QUOTATION_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateQuotationStatus($quotation_id: uuid!, $status: String!) {
    updateQuotationStatus(quotation_id: $quotation_id, status: $status) {
      message
    }
  }
`;
const CHANGE_INVOICE_STATUS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateInvoiceStatus {
    updateInvoiceStatus(invoice_id: "", status: "") {
      message
    }
  }
`;
const SEND_QUOTATION_FILE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateQuotationStatus($quotation_file_url: String!, $quotation_id: uuid!) {
    sendQuotationFIle(quotation_file_url: $quotation_file_url, quotation_id: $quotation_id) {
      message
    }
  }
`;
const ADD_PARYMENT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addPayment($amount: numeric!, $invoice_id: uuid!, $payment_date: timestamp!, $payment_method: String!) {
    addInvoicePayment(
      amount: $amount
      invoice_id: $invoice_id
      payment_date: $payment_date
      payment_method: $payment_method
    ) {
      message
    }
  }
`;
const SEND_Q_INVOICE_FILE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation sendQInvoice($quotation_id: uuid!) {
    sendInvoice(quotation_id: $quotation_id) {
      message
    }
  }
`;
const SEND_INVOICE_FILE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation sendQuotationPdf($id: uuid!, $invoice_file_url: String!) {
    update_invoices_by_pk(pk_columns: { id: $id }, _set: { invoice_file_url: $invoice_file_url }) {
      id
    }
  }
`;
const DELETE_ADMIN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteAdmin($id: uuid!) {
    delete_admins_by_pk(id: $id) {
      id
    }
  }
`;
const DELETE_SERVICE_CENTER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteServiceCenter($id: uuid!) {
    delete_service_centers_by_pk(id: $id) {
      id
    }
  }
`;
const ADD_ADMIN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation aa($email: String!, $password: String!, $name: String!, $role: String!) {
    AdminSignUp(email: $email, password: $password, name: $name, role: $role) {
      message
      token
    }
  }
`;
const EDIT_ADMIN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateAdmin($id: uuid!, $data: admins_set_input!) {
    update_admins_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      email
      role
    }
  }
`;
const ADD_USER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation aa($name: String!, $password: String!, $role: String!, $phone: String!) {
    UserSignUp(name: $name, password: $password, role: $role, phone: $phone) {
      message
      token
    }
  }
`;
const ADD_SERVICE_CENTER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addSeriveCenter($data: service_centers_insert_input!) {
    insert_service_centers_one(object: $data) {
      id
      name
      phone
      address
      created_at
      updated_at
    }
  }
`;
const IS_WARRANTY_VALID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editService($id: uuid!, $data: service_tokens_set_input!) {
    update_service_tokens_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      service_fee
    }
  }
`;
const EDIT_SERVICE_CENTER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editServiceCenter($id: uuid!, $data: service_centers_set_input!) {
    update_service_centers_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      name
      phone
      address
    }
  }
`;
const DELETE_PRODUCT_DISCOUNT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteProductDiscount($id: uuid!) {
    delete_product_discounts_by_pk(id: $id) {
      id
    }
  }
`;
const ORDER_COMPLETE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation orderComplete($id: uuid!, $completion_photo_url: String!, $remark: String!) {
    update_orders_by_pk(
      pk_columns: { id: $id }
      _set: { completion_photo_url: $completion_photo_url, remark: $remark }
    ) {
      id
      completion_photo_url
      remark
    }
  }
`;
const ADD_DISCOUNT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation addDiscount($data: product_discounts_insert_input!) {
    insert_product_discounts_one(object: $data) {
      id
      min_order
      product_id
      discount_type
      discounted_value
      customer_type
      created_at
      updated_at
    }
  }
`;
const EDIT_DISCOUNT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation updateProductDiscount($id: uuid!, $data: product_discounts_set_input!) {
    update_product_discounts_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      min_order
      discount_type
      customer_type
      discounted_value
      created_at
      updated_at
    }
  }
`;
const EDIT_PRODUCT_CATEGORY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editCategory($id: uuid!, $data: product_categories_set_input!) {
    update_product_categories_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`;
const EDIT_BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation eidtBrand($id: uuid!, $data: brands_set_input!) {
    update_brands_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
      title
      image_url
    }
  }
`;
const EDIt_NEWS_CAT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation editNewCat($id: uuid!, $title: String!) {
    update_news_categories_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`;
const PRODUCT_IMAGE_UPLOAD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation imageUpload($data: product_medias_insert_input!) {
    insert_product_medias_one(object: $data) {
      id
      product_id
      media_url
      media_type
    }
  }
`;
const DELETE_PRODUCT_IMAGE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$tag$40$2$2e$12$2e$6_graphql$40$16$2e$9$2e$0$2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation deleteProductImage($id: uuid!) {
    delete_product_medias_by_pk(id: $id) {
      id
      media_url
      media_type
    }
  }
`;

})()),
"[project]/src/views/news/add/NewsImage.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardHeader/CardHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/List/List.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/ListItem/ListItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$2$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-dropzone@14.2.3_react@18.3.1/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Link.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$Avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/components/mui/Avatar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$styles$2f$AppReactDropzone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/libs/styles/AppReactDropzone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/react/hooks/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/mutations.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
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
// Styled Dropzone Component
const Dropzone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$styles$2f$AppReactDropzone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        '& .dropzone': {
            minHeight: 'unset',
            padding: theme.spacing(12),
            [theme.breakpoints.down('sm')]: {
                paddingInline: theme.spacing(5)
            },
            '&+.MuiList-root .MuiListItem-root .file-name': {
                fontWeight: theme.typography.body1.fontWeight
            }
        }
    }));
_c = Dropzone;
const NewImage = ({ files, setFiles })=>{
    _s();
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Hooks
    const { getRootProps, getInputProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$2$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        multiple: true,
        onDrop: (acceptedFiles)=>{
            const imageFiles = acceptedFiles.filter((file)=>file.type.startsWith('image'));
            if (imageFiles.length !== acceptedFiles.length) {
                setErrorMessage('Only image files are allowed.');
            } else {
                setErrorMessage('');
            }
            setFiles(imageFiles.map((file)=>Object.assign(file)));
        }
    });
    const renderFilePreview = (file)=>{
        console.log('file ', file);
        if (file.type.startsWith('image')) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                width: 38,
                height: 38,
                alt: file.name,
                src: URL.createObjectURL(file)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsImage.jsx",
                lineNumber: 64,
                columnNumber: 14
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "ri-file-text-line"
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsImage.jsx",
                lineNumber: 66,
                columnNumber: 14
            }, this);
        }
    };
    const handleRemoveFile = (file)=>{
        const uploadedFiles = files;
        const filtered = uploadedFiles.filter((i)=>i.name !== file.name);
        setFiles([
            ...filtered
        ]);
    };
    const fileList = files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "pis-4 plb-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "file-details",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "file-preview",
                            children: renderFilePreview(file)
                        }, void 0, false, {
                            fileName: "[project]/src/views/news/add/NewsImage.jsx",
                            lineNumber: 80,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "file-name font-medium",
                                    color: "text.primary",
                                    children: file.name
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                    lineNumber: 82,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "file-size",
                                    variant: "body2",
                                    children: Math.round(file.size / 100) / 10 > 1000 ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb` : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                    lineNumber: 85,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/news/add/NewsImage.jsx",
                            lineNumber: 81,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/news/add/NewsImage.jsx",
                    lineNumber: 79,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onClick: ()=>handleRemoveFile(file),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-close-line text-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/views/news/add/NewsImage.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsImage.jsx",
                    lineNumber: 92,
                    columnNumber: 7
                }, this)
            ]
        }, file.name, true, {
            fileName: "[project]/src/views/news/add/NewsImage.jsx",
            lineNumber: 78,
            columnNumber: 5
        }, this));
    const handleRemoveAllFiles = ()=>{
        setFiles([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dropzone, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Product Image",
                    // action={
                    //   <Typography component={Link} color='primary' className='font-medium'>
                    //     Add media from URL
                    //   </Typography>
                    // }
                    sx: {
                        '& .MuiCardHeader-action': {
                            alignSelf: 'center'
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsImage.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ...getRootProps({
                                className: 'dropzone'
                            }),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ...getInputProps()
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center flex-col gap-2 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$Avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "rounded",
                                            skin: "light",
                                            color: "secondary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ri-upload-2-line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "h4",
                                            children: "Drag and Drop Your Image Here."
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            color: "text.disabled",
                                            children: "or"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "outlined",
                                            size: "small",
                                            children: "Browse Image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/news/add/NewsImage.jsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            color: "error",
                            variant: "body2",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/views/news/add/NewsImage.jsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        files.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: fileList
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "buttons",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        color: "error",
                                        variant: "outlined",
                                        onClick: handleRemoveAllFiles,
                                        children: "Remove All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsImage.jsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/news/add/NewsImage.jsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/views/news/add/NewsImage.jsx",
            lineNumber: 104,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/views/news/add/NewsImage.jsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
};
_s(NewImage, "a6iKAnS4OajBJcX2ANh4upK991k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$2$2e$3_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"]
    ];
});
_c1 = NewImage;
const __TURBOPACK__default__export__ = NewImage;
var _c, _c1;
__turbopack_refresh__.register(_c, "Dropzone");
__turbopack_refresh__.register(_c1, "NewImage");

})()),
"[project]/src/views/news/add/NewsVariants.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Grid/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardHeader/CardHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/FormControl/FormControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/InputLabel/InputLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/MenuItem/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Select/Select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/components/mui/IconButton.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
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
const ProductVariants = ()=>{
    _s();
    // States
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const deleteForm = (e)=>{
        e.preventDefault();
        // @ts-ignore
        e.target.closest('.repeater-item').remove();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Product Variants"
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    container: true,
                    spacing: 5,
                    children: [
                        Array.from(Array(count).keys()).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                item: true,
                                xs: 12,
                                className: "repeater-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    container: true,
                                    spacing: 5,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            item: true,
                                            xs: 12,
                                            sm: 4,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                fullWidth: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        children: "Select Variant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        label: "Select Variant",
                                                        defaultValue: "Size",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: "Size",
                                                                children: "Size"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                                lineNumber: 44,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: "Color",
                                                                children: "Color"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                                lineNumber: 45,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: "Weight",
                                                                children: "Weight"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                                lineNumber: 46,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: "Smell",
                                                                children: "Smell"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                                lineNumber: 47,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                        lineNumber: 43,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            item: true,
                                            xs: 12,
                                            sm: 8,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        fullWidth: true,
                                                        label: "Variant Value",
                                                        placeholder: "Enter Variant Value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: deleteForm,
                                                        className: "min-is-fit",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "ri-close-line"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                            lineNumber: 55,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                        lineNumber: 54,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "contained",
                                onClick: ()=>setCount(count + 1),
                                startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ri-add-line"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                    lineNumber: 63,
                                    columnNumber: 88
                                }, void 0),
                                children: "Add Another Option"
                            }, void 0, false, {
                                fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsVariants.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/news/add/NewsVariants.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(ProductVariants, "2zt0xIm16ZAkTfzs1tD1YE/ZHbE=");
_c = ProductVariants;
const __TURBOPACK__default__export__ = ProductVariants;
var _c;
__turbopack_refresh__.register(_c, "ProductVariants");

})()),
"[project]/src/@core/components/mui/TabList.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// MUI Imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$TabList$2f$TabList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+lab@5.0.0-alpha.172_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+st_gocggnyd3t4rtzbhqu23ohyol4/node_modules/@mui/lab/TabList/TabList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <export default as styled>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const TabList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$TabList$2f$TabList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ color, pill, theme, orientation })=>({
        ...pill === 'true' && {
            minHeight: 38,
            ...orientation === 'vertical' ? {
                borderInlineEnd: 0
            } : {
                borderBlockEnd: 0
            },
            '&, & .MuiTabs-scroller': {
                ...orientation === 'vertical' && {
                    boxSizing: 'content-box'
                },
                margin: `${theme.spacing(-1, -1, -1.5, -1)} !important`,
                padding: theme.spacing(1, 1, 1.5, 1)
            },
            '& .MuiTabs-indicator': {
                display: 'none'
            },
            '& .MuiTabs-flexContainer': {
                gap: theme.spacing(1)
            },
            '& .Mui-selected': {
                backgroundColor: `var(--mui-palette-${color}-main) !important`,
                color: `var(--mui-palette-${color}-contrastText) !important`,
                boxShadow: 'var(--mui-customShadows-xs)'
            },
            '& .MuiTab-root': {
                minHeight: 38,
                padding: theme.spacing(2, 5.5),
                borderRadius: 'var(--mui-shape-borderRadius)',
                '&:hover': {
                    border: 0,
                    backgroundColor: `var(--mui-palette-${color}-lightOpacity)`,
                    color: `var(--mui-palette-${color}-main)`,
                    ...orientation === 'vertical' ? {
                        paddingInlineEnd: theme.spacing(5.5)
                    } : {
                        paddingBlockEnd: theme.spacing(2)
                    }
                }
            }
        }
    }));
_c = TabList;
const CustomTabList = (props)=>{
    // Props
    const { color = 'primary', ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabList, {
        color: color,
        ...rest
    }, void 0, false, {
        fileName: "[project]/src/@core/components/mui/TabList.jsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
};
_c1 = CustomTabList;
const __TURBOPACK__default__export__ = CustomTabList;
var _c, _c1;
__turbopack_refresh__.register(_c, "TabList");
__turbopack_refresh__.register(_c1, "CustomTabList");

})()),
"[project]/src/libs/styles/AppReactDatepicker.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$datepicker$40$7$2e$3$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$react$2d$datepicker$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-datepicker@7.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-datepicker/dist/react-datepicker.min.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
// Styled Components
const StyledReactDatePicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(({ theme })=>{
    return {
        '& .react-datepicker-popper': {
            zIndex: 20,
            paddingTop: `${theme.spacing(0.5)} !important`
        },
        '& .react-datepicker-wrapper': {
            width: '100%'
        },
        '& .react-datepicker__triangle': {
            display: 'none'
        },
        '& .react-datepicker': {
            color: 'var(--mui-palette-text-primary)',
            borderRadius: 'var(--mui-shape-borderRadius)',
            fontFamily: theme.typography.fontFamily,
            backgroundColor: 'var(--mui-palette-background-paper)',
            boxShadow: 'var(--mui-customShadows-md)',
            border: 'none',
            '& .react-datepicker__header': {
                padding: 0,
                border: 'none',
                fontWeight: 'normal',
                backgroundColor: 'var(--mui-palette-background-paper)',
                '&:not(.react-datepicker-year-header)': {
                    '& + .react-datepicker__month, & + .react-datepicker__year': {
                        margin: theme.spacing(2),
                        marginTop: theme.spacing(4.5)
                    }
                },
                '&.react-datepicker-year-header': {
                    '& + .react-datepicker__month, & + .react-datepicker__year': {
                        margin: theme.spacing(2),
                        marginTop: theme.spacing(0)
                    }
                }
            },
            '& > .react-datepicker__navigation': {
                top: 13,
                '&.react-datepicker__navigation--previous': {
                    width: 24,
                    height: 24,
                    border: 'none',
                    top: 12,
                    left: 15,
                    ...theme.direction === 'ltr' ? {
                        backgroundImage: `${"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /%3E%3C/svg%3E\")".replace('currentColor', theme.palette.mode === 'dark' ? 'rgb(231 227 252 / 0.7)' : 'rgb(46 38 61 / 0.7)')}`
                    } : {
                        backgroundImage: `${"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E\")".replace('currentColor', theme.palette.mode === 'dark' ? 'rgb(231 227 252 / 0.7)' : 'rgb(46 38 61 / 0.7)')}`
                    },
                    '& .react-datepicker__navigation-icon': {
                        display: 'none'
                    }
                },
                '&.react-datepicker__navigation--next': {
                    width: 24,
                    height: 24,
                    border: 'none',
                    top: 12,
                    left: 'auto',
                    right: 15,
                    ...theme.direction === 'ltr' ? {
                        backgroundImage: `${"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E\")".replace('currentColor', theme.palette.mode === 'dark' ? 'rgb(231 227 252 / 0.7)' : 'rgb(46 38 61 / 0.7)')}`
                    } : {
                        backgroundImage: `${"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' style='width:24px;height:24px' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /%3E%3C/svg%3E\")".replace('currentColor', theme.palette.mode === 'dark' ? 'rgb(231 227 252 / 0.7)' : 'rgb(46 38 61 / 0.7)')}`
                    },
                    '& .react-datepicker__navigation-icon': {
                        display: 'none'
                    }
                },
                '&.react-datepicker__navigation--next--with-time': theme.direction === 'ltr' ? {
                    right: 127
                } : {
                    left: 127
                },
                '&:focus, &:active': {
                    outline: 0
                }
            },
            '& .react-datepicker__current-month, & .react-datepicker-year-header': {
                ...theme.typography.subtitle1,
                padding: theme.spacing(3),
                paddingBottom: theme.spacing(4.5),
                color: 'var(--mui-palette-text-primary)'
            },
            '& .react-datepicker__day-name': {
                margin: 0,
                width: '2.25rem',
                ...theme.typography.subtitle2,
                color: 'var(--mui-palette-text-primary)'
            },
            '& .react-datepicker__day-names': {
                marginBottom: 0
            },
            '& .react-datepicker__day': {
                margin: 0,
                width: '2.25rem',
                borderRadius: '50%',
                lineHeight: '2.25rem',
                color: 'var(--mui-palette-text-primary)',
                fontSize: theme.typography.body1.fontSize,
                '&.react-datepicker__day--selected.react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start, &.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range, &.react-datepicker__day--range-start': {
                    borderRadius: '18px 0px 0px 18px;',
                    color: 'var(--mui-palette-common-white) !important',
                    backgroundColor: 'var(--mui-palette-primary-main) !important'
                },
                '&.react-datepicker__day--range-end.react-datepicker__day--in-range': {
                    borderRadius: '0px 18px 18px 0px',
                    color: 'var(--mui-palette-common-white) !important',
                    backgroundColor: 'var(--mui-palette-primary-main) !important'
                },
                '&:focus, &:active': {
                    outline: 0
                },
                '&.react-datepicker__day--outside-month, &.react-datepicker__day--disabled:not(.react-datepicker__day--selected)': {
                    color: 'var(--mui-palette-text-disabled)',
                    '&:hover': {
                        backgroundColor: 'transparent'
                    }
                },
                '&.react-datepicker__day--highlighted, &.react-datepicker__day--highlighted:hover': {
                    color: 'var(--mui-palette-success-main)',
                    backgroundColor: 'var(--mui-palette-success-lightOpacity)',
                    '&.react-datepicker__day--selected': {
                        backgroundColor: 'var(--mui-palette-primary-main) !important'
                    }
                }
            },
            '& .react-datepicker__day--in-range, & .react-datepicker__day--in-selecting-range': {
                borderRadius: 0,
                color: 'var(--mui-palette-primary-main) !important',
                backgroundColor: 'var(--mui-palette-primary-lightOpacity) !important'
            },
            '& .react-datepicker__day--today': {
                fontWeight: 'normal',
                '&:not(.react-datepicker__day--selected):not(:empty)': {
                    color: 'var(--mui-palette-primary-main)',
                    backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                    '&:hover': {
                        backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                    },
                    '&.react-datepicker__day--keyboard-selected': {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                        '&:hover': {
                            backgroundColor: 'var(--mui-palette-primary-lightOpacity)'
                        }
                    }
                }
            },
            '& .react-datepicker__month-text--today': {
                fontWeight: 'normal',
                '&:not(.react-datepicker__month-text--selected)': {
                    lineHeight: '2.125rem',
                    color: 'var(--mui-palette-primary-main)',
                    border: '1px solid var(--mui-palette-primary-main)',
                    '&:hover': {
                        backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.04)'
                    }
                }
            },
            '& .react-datepicker__year-text--today': {
                fontWeight: 'normal',
                '&:not(.react-datepicker__year-text--selected)': {
                    lineHeight: '2.125rem',
                    color: 'var(--mui-palette-primary-main)',
                    border: '1px solid var(--mui-palette-primary-main)',
                    '&:hover': {
                        backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.04)'
                    },
                    '&.react-datepicker__year-text--keyboard-selected': {
                        color: 'var(--mui-palette-primary-main)',
                        backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.06)',
                        '&:hover': {
                            color: 'var(--mui-palette-primary-main)',
                            backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.06)'
                        }
                    }
                }
            },
            '& .react-datepicker__day--keyboard-selected': {
                '&:not(.react-datepicker__day--in-range)': {
                    color: 'var(--mui-palette-primary-main)',
                    backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
                    '&:hover': {
                        backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)'
                    }
                },
                '&.react-datepicker__day--in-range:not(.react-datepicker__day--range-end)': {
                    backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.12) !important',
                    '&:hover': {
                        backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.12) !important'
                    }
                }
            },
            '& .react-datepicker__month-text--keyboard-selected': {
                '&:not(.react-datepicker__month--in-range)': {
                    color: 'var(--mui-palette-primary-main)',
                    backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
                    '&:hover': {
                        backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)'
                    }
                }
            },
            '& .react-datepicker__year-text--keyboard-selected, & .react-datepicker__quarter-text--keyboard-selected': {
                color: 'var(--mui-palette-primary-main)',
                backgroundColor: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)'
            },
            '& .react-datepicker__day--selected, & .react-datepicker__month-text--selected, & .react-datepicker__year-text--selected, & .react-datepicker__quarter-text--selected': {
                color: 'var(--mui-palette-common-white) !important',
                backgroundColor: 'var(--mui-palette-primary-main) !important',
                boxShadow: 'var(--mui-customShadows-xs)',
                '&:hover': {
                    backgroundColor: 'var(--mui-palette-primary-dark) !important'
                }
            },
            '& .react-datepicker__header__dropdown': {
                '& .react-datepicker__month-dropdown-container:not(:last-child)': {
                    marginRight: theme.spacing(8)
                },
                '& .react-datepicker__month-dropdown-container, & .react-datepicker__year-dropdown-container': {
                    marginBottom: theme.spacing(4)
                },
                '& .react-datepicker__month-read-view--selected-month, & .react-datepicker__year-read-view--selected-year': {
                    fontSize: '0.875rem',
                    marginRight: theme.spacing(1),
                    color: 'var(--mui-palette-text-primary)'
                },
                '& .react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow': {
                    borderColor: 'var(--mui-palette-text-primary)'
                },
                '& .react-datepicker__month-read-view--down-arrow, & .react-datepicker__year-read-view--down-arrow': {
                    top: 4,
                    borderColor: 'var(--mui-palette-text-secondary)'
                },
                '& .react-datepicker__month-dropdown, & .react-datepicker__year-dropdown': {
                    paddingTop: theme.spacing(2),
                    paddingBottom: theme.spacing(2),
                    border: 'none',
                    borderRadius: 'var(--mui-shape-borderRadius)',
                    backgroundColor: 'var(--mui-palette-background-paper)',
                    boxShadow: 'var(--mui-customShadows-lg)',
                    '[data-skin="bordered"] &': {
                        boxShadow: 'none',
                        border: `1px solid var(--mui-palette-divider)`
                    }
                },
                '& .react-datepicker__month-option, & .react-datepicker__year-option': {
                    ...theme.typography.body1,
                    padding: theme.spacing(1.5, 4),
                    '&:first-of-type, &:last-of-type': {
                        borderRadius: 0
                    },
                    '&:hover': {
                        backgroundColor: 'var(--mui-palette-action-hover)'
                    }
                },
                '& .react-datepicker__month-option.react-datepicker__month-option--selected_month': {
                    color: 'var(--mui-palette-primary-main)',
                    backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                    '&:hover': {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)'
                    },
                    '& .react-datepicker__month-option--selected': {
                        display: 'none'
                    }
                },
                '& .react-datepicker__year-option.react-datepicker__year-option--selected_year': {
                    color: 'var(--mui-palette-primary-main)',
                    backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                    '&:hover': {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)'
                    },
                    '& .react-datepicker__year-option--selected': {
                        display: 'none'
                    }
                },
                '& .react-datepicker__year-option': {
                    // TODO: Remove some of the following styles for arrow in Year dropdown when react-datepicker give arrows in Year dropdown
                    '& .react-datepicker__navigation--years-upcoming': {
                        width: 9,
                        height: 9,
                        borderStyle: 'solid',
                        borderWidth: '3px 3px 0 0',
                        transform: 'rotate(-45deg)',
                        borderTopColor: 'var(--mui-palette-text-secondary)',
                        borderRightColor: 'var(--mui-palette-text-secondary)',
                        margin: `${theme.spacing(2.75)} auto ${theme.spacing(0)}`
                    },
                    '&:hover .react-datepicker__navigation--years-upcoming': {
                        borderTopColor: 'var(--mui-palette-text-primary)',
                        borderRightColor: 'var(--mui-palette-text-primary)'
                    },
                    '& .react-datepicker__navigation--years-previous': {
                        width: 9,
                        height: 9,
                        borderStyle: 'solid',
                        borderWidth: '0 0 3px 3px',
                        transform: 'rotate(-45deg)',
                        borderLeftColor: 'var(--mui-palette-text-secondary)',
                        borderBottomColor: 'var(--mui-palette-text-secondary)',
                        margin: `${theme.spacing(0)} auto ${theme.spacing(2.75)}`
                    },
                    '&:hover .react-datepicker__navigation--years-previous': {
                        borderLeftColor: 'var(--mui-palette-text-primary)',
                        borderBottomColor: 'var(--mui-palette-text-primary)'
                    }
                }
            },
            '& .react-datepicker__week-number': {
                margin: 0,
                fontWeight: 500,
                width: '2.25rem',
                lineHeight: '2.25rem',
                fontSize: theme.typography.body2.fontSize,
                color: 'var(--mui-palette-text-primary)'
            },
            '& .react-datepicker__month-text, & .react-datepicker__year-text, & .react-datepicker__quarter-text': {
                margin: 0,
                alignItems: 'center',
                fontSize: theme.typography.body1.fontSize,
                lineHeight: '2rem',
                display: 'inline-flex',
                justifyContent: 'center',
                borderRadius: 'var(--mui-shape-borderRadius)',
                '&:focus, &:active': {
                    outline: 0
                }
            },
            '& .react-datepicker__year-wrapper': {
                maxWidth: 205,
                justifyContent: 'center'
            },
            '& .react-datepicker__input-time-container': {
                display: 'flex',
                alignItems: 'center',
                ...theme.direction === 'rtl' ? {
                    flexDirection: 'row-reverse'
                } : {}
            },
            '& .react-datepicker__today-button': {
                borderTop: 0,
                borderRadius: '1rem',
                margin: theme.spacing(0, 4, 4),
                color: 'var(--mui-palette-common-white)',
                backgroundColor: 'var(--mui-palette-primary-main)'
            },
            // Time Picker
            '&:not(.react-datepicker--time-only)': {
                '& .react-datepicker__time-container': {
                    borderLeftColor: 'var(--mui-palette-divider)',
                    [theme.breakpoints.down('sm')]: {
                        width: '5.5rem'
                    },
                    [theme.breakpoints.up('sm')]: {
                        width: '7.4375rem'
                    }
                }
            },
            '&.react-datepicker--time-only': {
                width: '7.4375rem',
                '& .react-datepicker__time-container': {
                    width: '7.4375rem'
                }
            },
            '& .react-datepicker__time-container': {
                padding: theme.spacing(0.75, 0),
                '& .react-datepicker-time__header': {
                    ...theme.typography.subtitle2,
                    marginBottom: theme.spacing(3),
                    marginTop: theme.spacing(3),
                    color: 'var(--mui-palette-text-primary)'
                },
                '& .react-datepicker__time': {
                    background: 'var(--mui-palette-background-paper)',
                    '& .react-datepicker__time-box .react-datepicker__time-list-item--disabled': {
                        pointerEvents: 'none',
                        color: 'var(--mui-palette-text-disabled)',
                        '&.react-datepicker__time-list-item--selected': {
                            fontWeight: 'normal',
                            backgroundColor: 'var(--mui-palette-action-disabledBackground)'
                        }
                    }
                },
                '& .react-datepicker__time-list-item': {
                    height: 'auto !important',
                    padding: `${theme.spacing(1.75, 0)} !important`,
                    marginLeft: theme.spacing(4.25),
                    marginRight: theme.spacing(2.2),
                    ...theme.typography.body1,
                    color: 'var(--mui-palette-text-primary)',
                    borderRadius: 'var(--mui-shape-borderRadius)',
                    '&:focus, &:active': {
                        outline: 0
                    },
                    '&:hover': {
                        backgroundColor: 'var(--mui-palette-action-hover) !important'
                    },
                    '&.react-datepicker__time-list-item--selected:not(.react-datepicker__time-list-item--disabled)': {
                        fontWeight: 'normal',
                        color: 'var(--mui-palette-common-white) !important',
                        backgroundColor: 'var(--mui-palette-primary-main) !important',
                        boxShadow: 'var(--mui-customShadows-xs)'
                    }
                },
                '& .react-datepicker__time-box': {
                    width: '100%'
                },
                '& .react-datepicker__time-list': {
                    '&::-webkit-scrollbar': {
                        width: 8
                    },
                    /* Track */ '&::-webkit-scrollbar-track': {
                        background: 'var(--mui-palette-background-paper)'
                    },
                    /* Handle */ '&::-webkit-scrollbar-thumb': {
                        borderRadius: 10,
                        background: '#aaa'
                    },
                    /* Handle on hover */ '&::-webkit-scrollbar-thumb:hover': {
                        background: '#999'
                    }
                }
            },
            '& .react-datepicker__day:hover, & .react-datepicker__month-text:hover, & .react-datepicker__quarter-text:hover, & .react-datepicker__year-text:hover': {
                backgroundColor: 'var(--mui-palette-action-hover)'
            },
            '[data-skin="bordered"] &': {
                boxShadow: 'none',
                border: `1px solid var(--mui-palette-divider)`
            }
        },
        '& .react-datepicker__close-icon': {
            paddingRight: theme.spacing(4),
            ...theme.direction === 'rtl' ? {
                right: 0,
                left: 'auto'
            } : {},
            '&:after': {
                width: 'unset',
                height: 'unset',
                fontSize: '1.5rem',
                color: 'var(--mui-palette-text-primary)',
                backgroundColor: 'transparent !important'
            }
        }
    };
});
_c = StyledReactDatePicker;
const AppReactDatepicker = (props)=>{
    // Props
    const { boxProps, ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledReactDatePicker, {
        ...boxProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$datepicker$40$7$2e$3$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$react$2d$datepicker$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            popperPlacement: "bottom-start",
            ...rest
        }, void 0, false, {
            fileName: "[project]/src/libs/styles/AppReactDatepicker.jsx",
            lineNumber: 475,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/libs/styles/AppReactDatepicker.jsx",
        lineNumber: 474,
        columnNumber: 5
    }, this);
};
_c1 = AppReactDatepicker;
const __TURBOPACK__default__export__ = AppReactDatepicker;
var _c, _c1;
__turbopack_refresh__.register(_c, "StyledReactDatePicker");
__turbopack_refresh__.register(_c1, "AppReactDatepicker");

})()),
"[project]/src/views/news/add/NewsInventory.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Grid/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardHeader/CardHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Checkbox/Checkbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/FormControl/FormControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/FormControlLabel/FormControlLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormGroup$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/FormGroup/FormGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/InputLabel/InputLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/MenuItem/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Radio$2f$Radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Radio/Radio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$RadioGroup$2f$RadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/RadioGroup/RadioGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Select/Select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Tab/Tab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$TabContext$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+lab@5.0.0-alpha.172_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+st_gocggnyd3t4rtzbhqu23ohyol4/node_modules/@mui/lab/TabContext/TabContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+lab@5.0.0-alpha.172_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+st_gocggnyd3t4rtzbhqu23ohyol4/node_modules/@mui/lab/TabPanel/TabPanel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+system@5.16.7_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled@1_htuzuuhilabfjy5zsrakmmdmg4/node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Link.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$TabList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/components/mui/TabList.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$styles$2f$AppReactDatepicker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/libs/styles/AppReactDatepicker.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
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
const ProductInventory = ()=>{
    _s();
    // States
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('restock');
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Hooks
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const isBelowMdScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(theme.breakpoints.down('md'));
    const handleChange = (event, value)=>{
        setActiveTab(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Inventory"
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$TabContext$2f$TabContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    value: activeTab,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex max-md:flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:is-4/12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$TabList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    orientation: "vertical",
                                    onChange: handleChange,
                                    pill: "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: "restock",
                                            label: "Restock",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ri-add-line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                lineNumber: 61,
                                                columnNumber: 25
                                            }, void 0),
                                            iconPosition: "start",
                                            className: "flex-row justify-start min-is-full text-start"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: "shipping",
                                            label: "Shipping",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ri-car-line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                lineNumber: 68,
                                                columnNumber: 25
                                            }, void 0),
                                            iconPosition: "start",
                                            className: "flex-row justify-start min-is-full text-start"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: "global-delivery",
                                            label: "Global Delivery",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ri-global-line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                lineNumber: 75,
                                                columnNumber: 25
                                            }, void 0),
                                            iconPosition: "start",
                                            className: "flex-row justify-start min-is-full text-start"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: "attributes",
                                            label: "Attributes",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ri-link-m"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                lineNumber: 82,
                                                columnNumber: 25
                                            }, void 0),
                                            iconPosition: "start",
                                            className: "flex-row justify-start min-is-full text-start"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: "advanced",
                                            label: "Advanced",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "ri-lock-unlock-line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                lineNumber: 89,
                                                columnNumber: 25
                                            }, void 0),
                                            iconPosition: "start",
                                            className: "flex-row justify-start min-is-full text-start"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                orientation: isBelowMdScreen ? 'horizontal' : 'vertical',
                                flexItem: true
                            }, void 0, false, {
                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:is-8/12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "restock",
                                        className: "flex flex-col gap-4 is-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "font-medium",
                                                children: "Options"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        label: "Add to stock",
                                                        placeholder: "100",
                                                        size: "small",
                                                        className: "flex-auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        variant: "contained",
                                                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "ri-check-line"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                            lineNumber: 101,
                                                            columnNumber: 58
                                                        }, void 0),
                                                        children: "Confirm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        color: "text.primary",
                                                        children: "Product in stock now: 54"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        color: "text.primary",
                                                        children: "Product in transit: 390"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        color: "text.primary",
                                                        children: "Last time restocked: 24th June, 2022"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        color: "text.primary",
                                                        children: "Total stock over lifetime: 2,430"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "shipping",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "font-medium",
                                                    children: "Shipping Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$RadioGroup$2f$RadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    name: "radio-buttons-group",
                                                    defaultValue: "seller",
                                                    className: "items-start gap-4",
                                                    "aria-labelledby": "shipping-type-radio-buttons-group-label",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            value: "seller",
                                                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Radio$2f$Radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "self-start"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 123,
                                                                columnNumber: 32
                                                            }, void 0),
                                                            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "font-medium",
                                                                        color: "text.primary",
                                                                        children: "Fulfilled by Seller"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        variant: "body2",
                                                                        children: "You'll be responsible for product delivery. Any damage or delay during shipping may cost you a Damage fee"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            value: "company",
                                                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Radio$2f$Radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "self-start"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 138,
                                                                columnNumber: 32
                                                            }, void 0),
                                                            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "font-medium",
                                                                        color: "text.primary",
                                                                        children: "Fulfilled by Company name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        variant: "body2",
                                                                        children: "Your product, Our responsibility.For a measly fee, we will handle the delivery process for you."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "global-delivery",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "font-medium",
                                                    children: "Global Delivery"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$RadioGroup$2f$RadioGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    name: "radio-buttons-group",
                                                    defaultValue: "worldwide",
                                                    className: "items-start gap-4",
                                                    "aria-labelledby": "global-delivery-radio-buttons-group-label",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            value: "worldwide",
                                                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Radio$2f$Radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "self-start"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 32
                                                            }, void 0),
                                                            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "font-medium",
                                                                        color: "text.primary",
                                                                        children: "Worldwide delivery"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        variant: "body2",
                                                                        children: [
                                                                            "Only available with Shipping method:",
                                                                            ' ',
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                className: "text-primary",
                                                                                children: "Fulfilled by Company name"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                                lineNumber: 173,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            value: "selected",
                                                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Radio$2f$Radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "self-start"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 180,
                                                                columnNumber: 32
                                                            }, void 0),
                                                            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "font-medium",
                                                                        color: "text.primary",
                                                                        children: "Selected Countries"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        placeholder: "USA",
                                                                        size: "small"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            value: "local",
                                                            control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Radio$2f$Radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "self-start"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 192,
                                                                columnNumber: 32
                                                            }, void 0),
                                                            label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: "font-medium",
                                                                        color: "text.primary",
                                                                        children: "Local delivery"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 195,
                                                                        columnNumber: 27
                                                                    }, void 0),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        variant: "body2",
                                                                        children: [
                                                                            "Deliver to your country of residence",
                                                                            ' ',
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Link$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                className: "text-primary",
                                                                                children: "Change profile address"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                                lineNumber: 200,
                                                                                columnNumber: 29
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 27
                                                                    }, void 0)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "attributes",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormGroup$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "font-medium mbe-2",
                                                    children: "Attributes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 212,
                                                        columnNumber: 30
                                                    }, void 0),
                                                    label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "font-medium",
                                                        color: "text.primary",
                                                        children: "Fragile Product"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 214,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 220,
                                                        columnNumber: 30
                                                    }, void 0),
                                                    className: "mbe-2",
                                                    label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "font-medium",
                                                        color: "text.primary",
                                                        children: "Biodegradable"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 223,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 229,
                                                        columnNumber: 30
                                                    }, void 0),
                                                    className: "mbe-4",
                                                    label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "font-medium",
                                                                color: "text.primary",
                                                                children: "Frozen Product"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 233,
                                                                columnNumber: 25
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                placeholder: "40 C",
                                                                size: "small"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 236,
                                                                columnNumber: 25
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                        lineNumber: 241,
                                                        columnNumber: 30
                                                    }, void 0),
                                                    label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "font-medium",
                                                                color: "text.primary",
                                                                children: "Expiry Date of Product"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 244,
                                                                columnNumber: 25
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$styles$2f$AppReactDatepicker$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                selected: date,
                                                                onChange: (date)=>setDate(date),
                                                                placeholderText: "MM/DD/YYYY",
                                                                customInput: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    fullWidth: true,
                                                                    size: "small"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 40
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 247,
                                                                columnNumber: 25
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$lab$40$5$2e$0$2e$0$2d$alpha$2e$172_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$st_gocggnyd3t4rtzbhqu23ohyol4$2f$node_modules$2f40$mui$2f$lab$2f$TabPanel$2f$TabPanel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: "advanced",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormGroup$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "flex flex-col gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "font-medium",
                                                    children: "Advanced"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    container: true,
                                                    spacing: 4,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 6,
                                                            md: 7,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                fullWidth: true,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        size: "small",
                                                                        children: "Product ID Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        size: "small",
                                                                        label: "Product ID Type",
                                                                        defaultValue: "ISBN",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                value: "ISBN",
                                                                                children: "ISBN"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                                lineNumber: 266,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                value: "UPC",
                                                                                children: "UPC"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                                lineNumber: 267,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                value: "EAN",
                                                                                children: "EAN"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                                lineNumber: 268,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                value: "JAN",
                                                                                children: "JAN"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                                lineNumber: 269,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 263,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            item: true,
                                                            xs: 12,
                                                            sm: 6,
                                                            md: 5,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                fullWidth: true,
                                                                label: "Product ID",
                                                                placeholder: "100023",
                                                                size: "small"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                                lineNumber: 274,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                            lineNumber: 273,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsInventory.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/news/add/NewsInventory.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
_s(ProductInventory, "bwpacYvzYUBhBNf8v0MMffDJbTI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$system$40$5$2e$16$2e$7_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled$40$1_htuzuuhilabfjy5zsrakmmdmg4$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ProductInventory;
const __TURBOPACK__default__export__ = ProductInventory;
var _c;
__turbopack_refresh__.register(_c, "ProductInventory");

})()),
"[project]/src/components/Form.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
const FormComponent = (props)=>{
    // Props
    const { onSubmit, ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ...rest,
        onSubmit: onSubmit ? (e)=>onSubmit(e) : (e)=>e.preventDefault()
    }, void 0, false, {
        fileName: "[project]/src/components/Form.jsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
};
_c = FormComponent;
const __TURBOPACK__default__export__ = FormComponent;
var _c;
__turbopack_refresh__.register(_c, "FormComponent");

})()),
"[project]/src/views/news/add/NewsPricing.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardHeader/CardHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Checkbox/Checkbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Divider/Divider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/FormControlLabel/FormControlLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Switch/Switch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Form.jsx [app-client] (ecmascript)");
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
const ProductPricing = ({ price, setPrice, errors })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Pricing"
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsPricing.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        fullWidth: true,
                        label: "Base Price",
                        placeholder: "Enter Base Price",
                        className: "mbe-5",
                        value: price,
                        onChange: (e)=>setPrice(e.target.value),
                        error: errors?.price ? true : false,
                        helpertext: errors?.price
                    }, void 0, false, {
                        fileName: "[project]/src/views/news/add/NewsPricing.jsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/views/news/add/NewsPricing.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsPricing.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/news/add/NewsPricing.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_c = ProductPricing;
const __TURBOPACK__default__export__ = ProductPricing;
var _c;
__turbopack_refresh__.register(_c, "ProductPricing");

})()),
"[project]/src/views/news/add/NewsOrganize.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// 'use client'
// // React Imports
// import { useState } from 'react'
// // MUI Imports
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import FormControl from '@mui/material/FormControl'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import Select from '@mui/material/Select'
// import TextField from '@mui/material/TextField'
// // Component Imports
// import CustomIconButton from '@core/components/mui/IconButton'
// import { useSuspenseQuery } from '@apollo/client'
// import { NEWS_CATS, PRODUCT_SELECT } from '@/graphql/queries'
// import {
//   Checkbox,
//   CheckBoxIcon,
//   CheckBoxOutlineBlankIcon,
//   FormHelperText,
//   ListItemText,
//   OutlinedInput
// } from '@mui/material'
// import Autocomplete from '@mui/material/Autocomplete'
// const icon = <CheckBoxOutlineBlankIcon fontSize='small' />
// const checkedIcon = <CheckBoxIcon fontSize='small' />
// const NewsOrganize = ({ productId, setProductId, catId, setCatId, errors }) => {
//   const MenuProps = {
//     PaperProps: {
//       style: {
//         width: 250,
//         maxHeight: '80vh'
//       }
//     }
//   }
//   const { data: cats } = useSuspenseQuery(NEWS_CATS)
//   const { data: products } = useSuspenseQuery(PRODUCT_SELECT)
//   const handleChangesMuscleType = event => {
//     const {
//       target: { value }
//     } = event
//     // setSubType(typeof value === "string" ? value.split(",") : value);
//     setProductId(prevSubType => {
//       const newValue = typeof value === 'string' ? value.split(',') : value
//       return newValue
//     })
//   }
//   const getSubtypeNameById = uuid => {
//     const subtype = products?.products.find(subtype => subtype.id === uuid)
//     return subtype ? subtype.title : ''
//   }
//   return (
//     <Card>
//       <CardHeader title='Organize' />
//       <CardContent>
//         <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
//           {/* <FormControl fullWidth>
//             <InputLabel>Select Product Brand</InputLabel>
//             <Select
//               label='Select Vendor'
//               value={brandId}
//               onChange={e => setBrandId(e.target.value)}
//               error={errors?.brandId ? true : false}
//               helperText={errors?.brandId}
//             >
//               {brands?.brands?.map((brand, index) => (
//                 <MenuItem value={brand?.id} key={index}>
//                   {brand?.title}
//                 </MenuItem>
//               ))}
//             </Select>
//             <FormHelperText sx={{ color: 'red' }}>{errors?.brandId}</FormHelperText>
//           </FormControl> */}
//           <div className='flex items-center gap-4'>
//             <FormControl fullWidth>
//               <InputLabel>Select News Category</InputLabel>
//               <Select
//                 label='Select Category'
//                 value={catId}
//                 onChange={e => setCatId(e.target.value)}
//                 error={errors?.catId ? true : false}
//               >
//                 {cats?.news_categories?.map((cat, index) => (
//                   <MenuItem value={cat?.id} key={index}>
//                     {cat?.title}
//                   </MenuItem>
//                 ))}
//               </Select>
//               <FormHelperText sx={{ color: 'red' }}>{errors?.catId}</FormHelperText>
//             </FormControl>
//             {/* <CustomIconButton size='large' variant='outlined' color='primary' className='min-is-fit'>
//               <i className='ri-add-line' />
//             </CustomIconButton> */}
//           </div>
//           {/* productId */}
//           <Autocomplete
//             multiple
//             id='checkboxes-tags-demo'
//             options={products?.products}
//             disableCloseOnSelect
//             getOptionLabel={productId => productId.title}
//             renderOption={(props, option, { selected }) => {
//               const { key, ...optionProps } = props
//               return (
//                 <li key={key} {...optionProps}>
//                   <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
//                   {option.title}
//                 </li>
//               )
//             }}
//             style={{ width: 500 }}
//             renderInput={params => <TextField {...params} label='Products' placeholder='Favorites' />}
//           />
//         </form>
//       </CardContent>
//     </Card>
//   )
// }
// export default NewsOrganize
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardHeader/CardHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/FormControl/FormControl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/InputLabel/InputLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/MenuItem/MenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Select/Select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Checkbox/Checkbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Autocomplete/Autocomplete.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormHelperText$2f$FormHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/FormHelperText/FormHelperText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f40$core$2f$components$2f$mui$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/@core/components/mui/IconButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/react/hooks/useSuspenseQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/queries.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var _s = __turbopack_refresh__.signature();
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
const NewsOrganize = ({ productId, setProductId, catId, setCatId, errors })=>{
    _s();
    const { data: cats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuspenseQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEWS_CATS"]);
    const { data: products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuspenseQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_SELECT"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Organize"
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (e)=>e.preventDefault(),
                    className: "flex flex-col gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fullWidth: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: "Select News Category"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "Select Category",
                                    value: catId,
                                    onChange: (e)=>setCatId(e.target.value),
                                    error: errors?.catId,
                                    children: cats?.news_categories?.map((cat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            value: cat?.id,
                                            children: cat?.title
                                        }, index, false, {
                                            fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$FormHelperText$2f$FormHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: 'red'
                                    },
                                    children: errors?.catId
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                            multiple: true,
                            value: productId,
                            onChange: (event, newValue)=>{
                                setProductId(newValue);
                            },
                            // inputValue={inputValue}
                            // onInputChange={(event, newInputValue) => {
                            //   setInputValue(newInputValue)
                            // }}
                            className: "overflow-y-auto h-[40vh]",
                            id: "checkboxes-tags-demo",
                            options: products?.products || [],
                            disableCloseOnSelect: true,
                            getOptionLabel: (options)=>options?.title || '',
                            renderOption: (props, option, { selected })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("li", {
                                    ...props,
                                    key: option.id,
                                    __source: {
                                        fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                marginRight: 8
                                            },
                                            checked: selected
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, void 0),
                                        option.title
                                    ]
                                }),
                            renderInput: (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    ...params,
                                    label: "Products",
                                    placeholder: "select products"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                                    lineNumber: 199,
                                    columnNumber: 36
                                }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/news/add/NewsOrganize.jsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
};
_s(NewsOrganize, "HdnbJmVWdjLMShK8rGQlt022ZuQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuspenseQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSuspenseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuspenseQuery"]
    ];
});
_c = NewsOrganize;
const __TURBOPACK__default__export__ = NewsOrganize;
var _c;
__turbopack_refresh__.register(_c, "NewsOrganize");

})()),
"[project]/src/components/helper/Alert.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Snackbar/Snackbar.js [app-client] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ApolloWrapper.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
const Alert = ()=>{
    _s();
    const { globalMsg, setGlobalMsg } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
            anchorOrigin: {
                horizontal: 'center',
                vertical: 'top'
            },
            open: Boolean(globalMsg),
            autoHideDuration: 3000,
            onClose: ()=>setGlobalMsg(null),
            message: globalMsg
        }, void 0, false, {
            fileName: "[project]/src/components/helper/Alert.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/helper/Alert.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_s(Alert, "BRiBwMbwGjABxf9mRxpRr6+T3yI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = Alert;
const __TURBOPACK__default__export__ = Alert;
var _c;
__turbopack_refresh__.register(_c, "Alert");

})()),
"[project]/src/app/[lang]/(dashboard)/news/add/page.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Grid/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsInformation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/news/add/NewsInformation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsAddHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/news/add/NewsAddHeader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/news/add/NewsImage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsVariants$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/news/add/NewsVariants.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsInventory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/news/add/NewsInventory.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsPricing$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/news/add/NewsPricing.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsOrganize$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/views/news/add/NewsOrganize.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@apollo+client@3.11.8_@types+react@18.3.8_graphql@16.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@apollo/client/react/hooks/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/mutations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$helper$2f$Alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/helper/Alert.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/ApolloWrapper.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@5.16.4_@emotion+react@11.13.0_@types+react@18.3.8_react@18.3.1__@emotion+styled_5nc2lau7oqjrez64x3x7bkeqgy/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/graphql/queries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/navigation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
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
const eCommerceProductsAdd = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setGlobalMsg, loading, setLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [catId, setCatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productId, setProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [addNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADD_NEWS"], {
        refetchQueries: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET_NEWS"]
        ]
    });
    const [addNewProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADD_NEWS_PRODUCTS"], {
        refetchQueries: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET_NEWS"]
        ]
    });
    const [getFileUploadUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMGAE_UPLOAD"]);
    const handleaddNews = async ()=>{
        setLoading(true);
        let errObj = {};
        let isErrExit = false;
        if (!title) {
            errObj.title = 'Title field is required';
            isErrExit = true;
        }
        // if (!description) {
        //   errObj.description = 'Body field is required'
        //   isErrExit = true
        // }
        if (!catId) {
            errObj.catId = 'Category field is required';
            isErrExit = true;
        }
        if (!productId) {
            errObj.productId = 'Product field is required';
            isErrExit = true;
        }
        // if (!sNo) {
        //   errObj.sNo = 'Serial Number field is required'
        //   isErrExit = true
        // }
        if (isErrExit) {
            setErrors({
                ...errObj
            });
            setLoading(false);
            return;
        }
        try {
            const fileUploadUrl = await getFileUploadUrl({
                variables: {
                    content_type: 'image',
                    folder: 'news'
                }
            });
            const uploadedFileUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFile"])(image[0], fileUploadUrl.data.getFileUploadUrl.fileUploadUrl, 'image');
            const result = await addNews({
                variables: {
                    data: {
                        title: title,
                        body_html: description,
                        news_category_id: catId,
                        image_url: uploadedFileUrl
                    }
                }
            });
            productId.map(async (p)=>await addNewProduct({
                    variables: {
                        data: {
                            news_id: result?.data?.insert_news_one.id,
                            product_id: p.id
                        }
                    }
                }));
            router.back();
            setLoading(false);
            setTitle('');
            setDescription('');
            setProductId([]);
            setCatId('');
            setGlobalMsg('➕ Add New Post');
        } catch (err) {
            setGlobalMsg('❌ Add News Error');
            console.log(err.response);
        }
    };
    const handleDiscardProduct = ()=>{
        router.back();
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                textAlign: 'center'
            },
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
            lineNumber: 117,
            columnNumber: 12
        }, this);
    }
    // console.log('product id ', productId)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                container: true,
                spacing: 6,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsAddHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleDiscardProduct: handleDiscardProduct,
                            handleaddNews: handleaddNews
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: true,
                        xs: 12,
                        md: 8,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            container: true,
                            spacing: 6,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsInformation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        setTitle: setTitle,
                                        title: title,
                                        setDescription: setDescription,
                                        description: description,
                                        errors: errors
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsImage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        files: image,
                                        setFiles: setImage
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: true,
                        xs: 12,
                        md: 4,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            container: true,
                            spacing: 6,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$5$2e$16$2e$4_$40$emotion$2b$react$40$11$2e$13$2e$0_$40$types$2b$react$40$18$2e$3$2e$8_react$40$18$2e$3$2e$1_$5f40$emotion$2b$styled_5nc2lau7oqjrez64x3x7bkeqgy$2f$node_modules$2f40$mui$2f$material$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$views$2f$news$2f$add$2f$NewsOrganize$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    catId: catId,
                                    setCatId: setCatId,
                                    productId: productId,
                                    setProductId: setProductId,
                                    errors: errors
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$helper$2f$Alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/[lang]/(dashboard)/news/add/page.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(eCommerceProductsAdd, "CXgMMRdau5cMlPwkeM2ftlRhG/w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$5_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ApolloWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$apollo$2b$client$40$3$2e$11$2e$8_$40$types$2b$react$40$18$2e$3$2e$8_graphql$40$16$2e$9$2e$0_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const __TURBOPACK__default__export__ = eCommerceProductsAdd;

})()),
"[project]/src/app/[lang]/(dashboard)/news/add/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_7ca6f6._.js.map