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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _utils_parseDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/parseDocument */ \"(app-pages-browser)/./src/utils/parseDocument.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_DraggableStructure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DraggableStructure */ \"(app-pages-browser)/./src/components/DraggableStructure.tsx\");\n/* harmony import */ var _mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/CloudUpload */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/CloudUpload.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/core/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd-html5-backend */ \"(app-pages-browser)/./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [fileContent, setFileContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    console.log(fileContent);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto mt-16 flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                component: \"label\",\n                role: undefined,\n                variant: \"contained\",\n                tabIndex: -1,\n                startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 20\n                }, void 0),\n                sx: {\n                    backgroundColor: \"primary.dark\",\n                    color: \"white\",\n                    \"&:hover\": {\n                        backgroundColor: \"lightGreen\"\n                    }\n                },\n                children: [\n                    \"Upload file\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        className: \"hidden\",\n                        onChange: (e)=>{\n                            var _e_target_files;\n                            const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n                            if (file) {\n                                const reader = new FileReader();\n                                reader.onload = (e)=>{\n                                    var _e_target;\n                                    const content = (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.result;\n                                    setFileContent((0,_utils_parseDocument__WEBPACK_IMPORTED_MODULE_1__.parseDocument)(content)); // Update state with parsed content\n                                };\n                                reader.readAsText(file);\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_6__.DndProvider, {\n                backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_7__.HTML5Backend,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DraggableStructure__WEBPACK_IMPORTED_MODULE_3__.DraggableStructure, {\n                    structure: fileContent\n                }, void 0, false, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            \")}\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"GJMYl6cPq2OsCfjojeFkak6+Fj8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ3lCO0FBQy9CO0FBQ3FDO0FBQ1I7QUFDdEI7QUFDZTtBQUV4QyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFZLEVBQUU7SUFDNURRLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNiLGtGQUFNQTtnQkFDTGMsV0FBVTtnQkFDVkMsTUFBTUM7Z0JBQ05DLFNBQVE7Z0JBQ1JDLFVBQVUsQ0FBQztnQkFDWEMseUJBQVcsOERBQUNmLHVFQUFlQTs7Ozs7Z0JBQzNCZ0IsSUFBSTtvQkFDRkMsaUJBQWlCO29CQUNqQkMsT0FBTztvQkFDUCxXQUFXO3dCQUNURCxpQkFBaUI7b0JBQ25CO2dCQUNGOztvQkFDRDtrQ0FFQyw4REFBQ0U7d0JBQ0NDLE1BQUs7d0JBQ0xYLFdBQVU7d0JBQ1ZZLFVBQVUsQ0FBQ0M7Z0NBQ0lBOzRCQUFiLE1BQU1DLFFBQU9ELGtCQUFBQSxFQUFFRSxNQUFNLENBQUNDLEtBQUssY0FBZEgsc0NBQUFBLGVBQWdCLENBQUMsRUFBRTs0QkFDaEMsSUFBSUMsTUFBTTtnQ0FDUixNQUFNRyxTQUFTLElBQUlDO2dDQUNuQkQsT0FBT0UsTUFBTSxHQUFHLENBQUNOO3dDQUNDQTtvQ0FBaEIsTUFBTU8sV0FBVVAsWUFBQUEsRUFBRUUsTUFBTSxjQUFSRixnQ0FBQUEsVUFBVVEsTUFBTTtvQ0FDaEN6QixlQUFlUixtRUFBYUEsQ0FBQ2dDLFdBQVcsbUNBQW1DO2dDQUM3RTtnQ0FDQUgsT0FBT0ssVUFBVSxDQUFDUjs0QkFDcEI7d0JBQ0Y7Ozs7Ozs7Ozs7OzswQkFrQkYsOERBQUN0QixrREFBV0E7Z0JBQUMrQixTQUFTOUIsaUVBQVlBOzBCQUNoQyw0RUFBQ0gsOEVBQWtCQTtvQkFBQ2tDLFdBQVc3Qjs7Ozs7Ozs7Ozs7WUFDbkI7Ozs7Ozs7QUFJdEI7R0ExRHdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBIZWFkaW5nLCBwYXJzZURvY3VtZW50IH0gZnJvbSBcIi4uL3V0aWxzL3BhcnNlRG9jdW1lbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEcmFnZ2FibGVTdHJ1Y3R1cmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9EcmFnZ2FibGVTdHJ1Y3R1cmVcIjtcbmltcG9ydCBDbG91ZFVwbG9hZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvdWRVcGxvYWRcIjtcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWRuZFwiO1xuaW1wb3J0IHsgSFRNTDVCYWNrZW5kIH0gZnJvbSBcInJlYWN0LWRuZC1odG1sNS1iYWNrZW5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtmaWxlQ29udGVudCwgc2V0RmlsZUNvbnRlbnRdID0gdXNlU3RhdGU8SGVhZGluZ1tdPihbXSk7XG4gIGNvbnNvbGUubG9nKGZpbGVDb250ZW50KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbXQtMTYgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjb21wb25lbnQ9XCJsYWJlbFwiXG4gICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgc3RhcnRJY29uPXs8Q2xvdWRVcGxvYWRJY29uIC8+fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwcmltYXJ5LmRhcmtcIiwgLy8gQ3VzdG9taXplIGJhY2tncm91bmQgY29sb3JcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLCAvLyBDdXN0b21pemUgdGV4dCBjb2xvclxuICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRHcmVlblwiLCAvLyBDdXN0b21pemUgaG92ZXIgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBVcGxvYWQgZmlsZVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcz8uWzBdO1xuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0Py5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgICAgICAgICAgIHNldEZpbGVDb250ZW50KHBhcnNlRG9jdW1lbnQoY29udGVudCkpOyAvLyBVcGRhdGUgc3RhdGUgd2l0aCBwYXJzZWQgY29udGVudFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9CdXR0b24+XG57LyogXG4gICAgICB7ZmlsZUNvbnRlbnQubGVuZ3RoID09IDAgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIFVwbG9hZCBhIFRleHQgRmlsZSB0byBHZXQgU3RhcnRlZFxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLmd0YWcueHl6L2ltYWdlcy9zZWN0aW9ucy91cGxvYWQuc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6ICggKi99XG4gICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxuICAgICAgICAgIDxEcmFnZ2FibGVTdHJ1Y3R1cmUgc3RydWN0dXJlPXtmaWxlQ29udGVudH0gLz5cbiAgICAgICAgPC9EbmRQcm92aWRlcj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwicGFyc2VEb2N1bWVudCIsInVzZVN0YXRlIiwiRHJhZ2dhYmxlU3RydWN0dXJlIiwiQ2xvdWRVcGxvYWRJY29uIiwiRG5kUHJvdmlkZXIiLCJIVE1MNUJhY2tlbmQiLCJIb21lIiwiZmlsZUNvbnRlbnQiLCJzZXRGaWxlQ29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb21wb25lbnQiLCJyb2xlIiwidW5kZWZpbmVkIiwidmFyaWFudCIsInRhYkluZGV4Iiwic3RhcnRJY29uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb250ZW50IiwicmVzdWx0IiwicmVhZEFzVGV4dCIsImJhY2tlbmQiLCJzdHJ1Y3R1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});