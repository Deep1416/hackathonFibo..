"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _utils_parseDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/parseDocument */ \"(app-pages-browser)/./src/utils/parseDocument.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_DraggableStructure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DraggableStructure */ \"(app-pages-browser)/./src/components/DraggableStructure.tsx\");\n/* harmony import */ var _mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/CloudUpload */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/CloudUpload.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/core/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd-html5-backend */ \"(app-pages-browser)/./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [fileContent, setFileContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto mt-16 flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                component: \"label\",\n                role: undefined,\n                variant: \"contained\",\n                tabIndex: -1,\n                startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 20\n                }, void 0),\n                sx: {\n                    backgroundColor: \"lightGreen\",\n                    color: \"white\",\n                    \"&:hover\": {\n                        backgroundColor: \"primary.dark\"\n                    }\n                },\n                children: [\n                    \"Upload file\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        className: \"hidden\",\n                        onChange: (e)=>{\n                            var _e_target_files;\n                            const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n                            if (file) {\n                                const reader = new FileReader();\n                                reader.onload = (e)=>{\n                                    var _e_target;\n                                    const content = (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.result;\n                                    setFileContent((0,_utils_parseDocument__WEBPACK_IMPORTED_MODULE_1__.parseDocument)(content)); // Update state with parsed content\n                                };\n                                reader.readAsText(file);\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            fileContent ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://images.gtag.xyz/images/sections/upload.svg\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 10\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_6__.DndProvider, {\n                backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_7__.HTML5Backend,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DraggableStructure__WEBPACK_IMPORTED_MODULE_3__.DraggableStructure, {\n                    structure: fileContent\n                }, void 0, false, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"GJMYl6cPq2OsCfjojeFkak6+Fj8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ3lCO0FBQy9CO0FBQ3FDO0FBQ1I7QUFDdEI7QUFDZTtBQUV4QyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFZLEVBQUU7SUFFNUQscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWCxrRkFBTUE7Z0JBQ0xZLFdBQVU7Z0JBQ1ZDLE1BQU1DO2dCQUNOQyxTQUFRO2dCQUNSQyxVQUFVLENBQUM7Z0JBQ1hDLHlCQUFXLDhEQUFDYix1RUFBZUE7Ozs7O2dCQUMzQmMsSUFBSTtvQkFDRkMsaUJBQWlCO29CQUNqQkMsT0FBTztvQkFDUCxXQUFXO3dCQUNURCxpQkFBaUI7b0JBQ25CO2dCQUNGOztvQkFDRDtrQ0FFQyw4REFBQ0U7d0JBQ0NDLE1BQUs7d0JBQ0xYLFdBQVU7d0JBQ1ZZLFVBQVUsQ0FBQ0M7Z0NBQ0lBOzRCQUFiLE1BQU1DLFFBQU9ELGtCQUFBQSxFQUFFRSxNQUFNLENBQUNDLEtBQUssY0FBZEgsc0NBQUFBLGVBQWdCLENBQUMsRUFBRTs0QkFDaEMsSUFBSUMsTUFBTTtnQ0FDUixNQUFNRyxTQUFTLElBQUlDO2dDQUNuQkQsT0FBT0UsTUFBTSxHQUFHLENBQUNOO3dDQUNDQTtvQ0FBaEIsTUFBTU8sV0FBVVAsWUFBQUEsRUFBRUUsTUFBTSxjQUFSRixnQ0FBQUEsVUFBVVEsTUFBTTtvQ0FDaEN2QixlQUFlUixtRUFBYUEsQ0FBQzhCLFdBQVcsbUNBQW1DO2dDQUM3RTtnQ0FDQUgsT0FBT0ssVUFBVSxDQUFDUjs0QkFDcEI7d0JBQ0Y7Ozs7Ozs7Ozs7OztZQUlIakIsNEJBQ0M7MEJBQ0EsNEVBQUNFO29CQUFJQyxXQUFVOzhCQUVkLDRFQUFDdUI7d0JBQ0NDLEtBQUk7d0JBQ0pDLEtBQUk7Ozs7Ozs7Ozs7OzhDQU1QLDhEQUFDL0Isa0RBQVdBO2dCQUFDZ0MsU0FBUy9CLGlFQUFZQTswQkFDaEMsNEVBQUNILDhFQUFrQkE7b0JBQUNtQyxXQUFXOUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pDO0dBdkR3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgSGVhZGluZywgcGFyc2VEb2N1bWVudCB9IGZyb20gXCIuLi91dGlscy9wYXJzZURvY3VtZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRHJhZ2dhYmxlU3RydWN0dXJlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRHJhZ2dhYmxlU3RydWN0dXJlXCI7XG5pbXBvcnQgQ2xvdWRVcGxvYWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3VkVXBsb2FkXCI7XG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1kbmRcIjtcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZmlsZUNvbnRlbnQsIHNldEZpbGVDb250ZW50XSA9IHVzZVN0YXRlPEhlYWRpbmdbXT4oW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtdC0xNiBmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICBzdGFydEljb249ezxDbG91ZFVwbG9hZEljb24gLz59XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImxpZ2h0R3JlZW5cIiwgLy8gQ3VzdG9taXplIGJhY2tncm91bmQgY29sb3JcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLCAvLyBDdXN0b21pemUgdGV4dCBjb2xvclxuICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicHJpbWFyeS5kYXJrXCIsIC8vIEN1c3RvbWl6ZSBob3ZlciBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFVwbG9hZCBmaWxlXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07XG4gICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXQ/LnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgc2V0RmlsZUNvbnRlbnQocGFyc2VEb2N1bWVudChjb250ZW50KSk7IC8vIFVwZGF0ZSBzdGF0ZSB3aXRoIHBhcnNlZCBjb250ZW50XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cblxuICAgICAge2ZpbGVDb250ZW50ID8gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICBcbiAgICAgICAgIDxpbWdcbiAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMuZ3RhZy54eXovaW1hZ2VzL3NlY3Rpb25zL3VwbG9hZC5zdmdcIlxuICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgLz5cbiAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgIFxuICAgICAgKSA6IChcbiAgICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XG4gICAgICAgICAgPERyYWdnYWJsZVN0cnVjdHVyZSBzdHJ1Y3R1cmU9e2ZpbGVDb250ZW50fSAvPlxuICAgICAgICA8L0RuZFByb3ZpZGVyPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJwYXJzZURvY3VtZW50IiwidXNlU3RhdGUiLCJEcmFnZ2FibGVTdHJ1Y3R1cmUiLCJDbG91ZFVwbG9hZEljb24iLCJEbmRQcm92aWRlciIsIkhUTUw1QmFja2VuZCIsIkhvbWUiLCJmaWxlQ29udGVudCIsInNldEZpbGVDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29tcG9uZW50Iiwicm9sZSIsInVuZGVmaW5lZCIsInZhcmlhbnQiLCJ0YWJJbmRleCIsInN0YXJ0SWNvbiIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiY29udGVudCIsInJlc3VsdCIsInJlYWRBc1RleHQiLCJpbWciLCJzcmMiLCJhbHQiLCJiYWNrZW5kIiwic3RydWN0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});