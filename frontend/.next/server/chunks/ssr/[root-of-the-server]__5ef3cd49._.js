module.exports = {

"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/src/layout/dashboarLayout/style.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "HomeContainer": "style-module__jek3sq__HomeContainer",
  "Home_Extra_contianer": "style-module__jek3sq__Home_Extra_contianer",
  "Home_feed_cotainer": "style-module__jek3sq__Home_feed_cotainer",
  "Home_left_container": "style-module__jek3sq__Home_left_container",
  "sideBar": "style-module__jek3sq__sideBar",
});
}),
"[project]/src/layout/dashboarLayout/indexDash.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/layout/dashboarLayout/style.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/redux/reducer/authReducer/index.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const DashboardLout = ({ children })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useDispatch"])();
    const authState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useSelector"])((state)=>state.auth);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (localStorage.getItem("token") === null) {
            router.push("/login");
        }
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setIsTokenThere"])());
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].HomeContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].Home_left_container,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sideBar,
                                onClick: ()=>router.push("/dashboard"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "size-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                        }, void 0, false, {
                                            fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: "Home "
                                    }, void 0, false, {
                                        fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sideBar,
                                onClick: ()=>router.push("/discoverSearch"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "size-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: " Search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sideBar,
                                onClick: ()=>router.push("/myConnections"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        className: "size-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: "My Connections"
                                    }, void 0, false, {
                                        fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].Home_feed_cotainer,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].Home_Extra_contianer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                children: " Top Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            authState.getUserProfileFetch && authState.AllUser.map((profile)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: [
                                            profile.userId.name,
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                        lineNumber: 98,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, profile._id, false, {
                                    fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                                    lineNumber: 97,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/layout/dashboarLayout/indexDash.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = DashboardLout;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/component/navbar/Style.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Style-module__zjqo8a__container",
  "joinButton": "Style-module__zjqo8a__joinButton",
  "joinHome": "Style-module__zjqo8a__joinHome",
  "navbar": "Style-module__zjqo8a__navbar",
});
}),
"[project]/src/component/navbar/NavIndex.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$Style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/navbar/Style.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const NavbarIndex = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const authState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useSelector"])((state)=>state.auth);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$Style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$Style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navbar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$Style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navLeft,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                router.push("/");
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$Style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].joinHome,
                            children: "Pro Connect"
                        }, void 0, false, {
                            fileName: "[project]/src/component/navbar/NavIndex.jsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/component/navbar/NavIndex.jsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$Style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navRight,
                                children: !authState.profileFetch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    onClick: ()=>{
                                        router.push("/login");
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$Style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].joinButton,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: "Be a part"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/navbar/NavIndex.jsx",
                                        lineNumber: 33,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/navbar/NavIndex.jsx",
                                    lineNumber: 27,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/component/navbar/NavIndex.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            authState.profileFetch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                onClick: ()=>{},
                                style: {
                                    display: "flex",
                                    gap: " 1.4rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: [
                                            " Hey, ",
                                            authState.user.userId.name,
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/navbar/NavIndex.jsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        },
                                        children: "Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/navbar/NavIndex.jsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            localStorage.removeItem("token");
                                            router.push("/login");
                                        },
                                        children: "Log Out"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/navbar/NavIndex.jsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/navbar/NavIndex.jsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/navbar/NavIndex.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/navbar/NavIndex.jsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/component/navbar/NavIndex.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = NavbarIndex;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/layout/userLayout/index.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$NavIndex$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/navbar/NavIndex.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$NavIndex$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$NavIndex$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const UserLayout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$navbar$2f$NavIndex$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/layout/userLayout/index.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = UserLayout;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/pages/view_page/style.module.css [ssr] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "backDropContianer": "style-module__5dED4a__backDropContianer",
  "card": "style-module__5dED4a__card",
  "card_ProfileContainer": "style-module__5dED4a__card_ProfileContainer",
  "connectBtn": "style-module__5dED4a__connectBtn",
  "connectedBtn": "style-module__5dED4a__connectedBtn",
  "cotainer": "style-module__5dED4a__cotainer",
  "profileContianer_details": "style-module__5dED4a__profileContianer_details",
});
}),
"[externals]/fs/promises [external] (fs/promises, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[project]/src/pages/view_page/[username].jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "getServerSideProps": ()=>getServerSideProps
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$indexDash$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layout/dashboarLayout/indexDash.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$userLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layout/userLayout/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$view_page$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/view_page/style.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/redux/action/postAction/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/redux/action/authAction/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$turborepo$2d$access$2d$trace$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/turborepo-access-trace/index.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$indexDash$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$userLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$indexDash$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$userLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const ServerSideRendring = ({ response })=>{
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [UserPost, setUserPost] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [Connection, setConnections] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isConnectionNull, setisConnectionNull] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$turborepo$2d$access$2d$trace$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["turborepoTraceAccess"]);
    const authState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useSelector"])((state)=>state.auth);
    const postState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useSelector"])((state)=>state.postReducer);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$29$__["useDispatch"])();
    const getPostUser = async ()=>{
        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllPost"])());
        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getConnectionRequest"])({
            token: localStorage.getItem("token")
        }));
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const post = postState.post.filter((post)=>{
            return post.userId.username === router.query.username;
        });
        setUserPost(post);
    }, [
        postState.post
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (authState.connections.some((user)=>user.connectionId._id === response.userId._id)) setConnections(true);
    }, [
        authState.connections
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        getPostUser();
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$userLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2f$dashboarLayout$2f$indexDash$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$view_page$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].contianer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$view_page$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].backDropContianer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/${response.userId.profilePicture}`,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/src/pages/view_page/[username].jsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/view_page/[username].jsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$view_page$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].profileContianer_details,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "0.7rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: "0.7"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                width: "fit-content",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    children: [
                                                        response.userId.name,
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/view_page/[username].jsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: "gray",
                                                        marginLeft: " 0.5rem"
                                                    },
                                                    children: [
                                                        "@",
                                                        response.userId.username,
                                                        " "
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/view_page/[username].jsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/view_page/[username].jsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        Connection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$view_page$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].connectedBtn,
                                            children: "Connected"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/view_page/[username].jsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: async ()=>{
                                                await dispatch(sendConnectionRequest({
                                                    token: localStorage.getItem("token"),
                                                    user_id
                                                }));
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$view_page$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].connectBtn,
                                            children: "Connect"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/view_page/[username].jsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                children: [
                                                    response.bio,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/view_page/[username].jsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/view_page/[username].jsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/view_page/[username].jsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: "0.3"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                            children: " Recent Activity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/view_page/[username].jsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        UserPost.map((post)=>{
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$view_page$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postCard,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$view_page$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].card,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$view_page$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].card_ProfileContainer,
                                                            children: post.media !== "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/${post.media}`,
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/view_page/[username].jsx",
                                                                lineNumber: 106,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: "3.4rem",
                                                                    height: " 3.4rem"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/view_page/[username].jsx",
                                                                lineNumber: 108,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/view_page/[username].jsx",
                                                            lineNumber: 104,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                post.body,
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/view_page/[username].jsx",
                                                            lineNumber: 111,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/view_page/[username].jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, post._id, false, {
                                                fileName: "[project]/src/pages/view_page/[username].jsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/view_page/[username].jsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/view_page/[username].jsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/view_page/[username].jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/view_page/[username].jsx",
                lineNumber: 55,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/pages/view_page/[username].jsx",
            lineNumber: 54,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/pages/view_page/[username].jsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ServerSideRendring;
const getServerSideProps = async (context)=>{
    try {
        const request = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["clientServer"].get("/getUserProfileByUsername", {
            params: {
                username: context.query.username
            }
        });
        const response = await request.data;
        return {
            props: {
                response: request.data.profile
            }
        };
    } catch (err) {
        return {
            props: {
                response: null
            }
        };
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5ef3cd49._.js.map