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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _utils_parseDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/parseDocument */ \"(app-pages-browser)/./src/utils/parseDocument.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_DraggableStructure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DraggableStructure */ \"(app-pages-browser)/./src/components/DraggableStructure.tsx\");\n/* harmony import */ var _mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/CloudUpload */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/CloudUpload.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/core/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd-html5-backend */ \"(app-pages-browser)/./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [fileContent, setFileContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleFileUpload = (e)=>{\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (file) {\n            const reader = new FileReader();\n            reader.onload = (e)=>{\n                var _e_target;\n                const content = (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.result;\n                setFileContent((0,_utils_parseDocument__WEBPACK_IMPORTED_MODULE_1__.parseDocument)(content)); // Update state with parsed content\n            };\n            reader.readAsText(file);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto mt-16 flex flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-2xl font-semibold\",\n                children: \"Upload a Text File\"\n            }, void 0, false, {\n                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://images.gtag.xyz/images/sections/upload.svg\",\n                        alt: \"Upload icon\",\n                        className: \"w-16 h-16\"\n                    }, void 0, false, {\n                        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center text-gray-500\",\n                        children: \"Drag and drop or select a text file to upload\"\n                    }, void 0, false, {\n                        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        component: \"label\",\n                        role: undefined,\n                        variant: \"contained\",\n                        startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 22\n                        }, void 0),\n                        sx: {\n                            backgroundColor: \"lightGreen\",\n                            color: \"white\",\n                            \"&:hover\": {\n                                backgroundColor: \"primary.dark\"\n                            }\n                        },\n                        children: [\n                            \"Upload File\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                className: \"hidden\",\n                                onChange: handleFileUpload,\n                                accept: \".txt\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    fileContent.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold text-center\",\n                                children: \"File Contents\"\n                            }, void 0, false, {\n                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_6__.DndProvider, {\n                                    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_7__.HTML5Backend,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DraggableStructure__WEBPACK_IMPORTED_MODULE_3__.DraggableStructure, {\n                                        content: fileContent\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/app/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"GJMYl6cPq2OsCfjojeFkak6+Fj8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ3lCO0FBQy9CO0FBQ3FDO0FBQ1I7QUFDdEI7QUFDZTtBQUV4QyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFZLEVBQUU7SUFFNUQsTUFBTVEsbUJBQW1CLENBQUNDO1lBQ1hBO1FBQWIsTUFBTUMsUUFBT0Qsa0JBQUFBLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxjQUFkSCxzQ0FBQUEsZUFBZ0IsQ0FBQyxFQUFFO1FBQ2hDLElBQUlDLE1BQU07WUFDUixNQUFNRyxTQUFTLElBQUlDO1lBQ25CRCxPQUFPRSxNQUFNLEdBQUcsQ0FBQ047b0JBQ0NBO2dCQUFoQixNQUFNTyxXQUFVUCxZQUFBQSxFQUFFRSxNQUFNLGNBQVJGLGdDQUFBQSxVQUFVUSxNQUFNO2dCQUNoQ1YsZUFBZVIsbUVBQWFBLENBQUNpQixXQUFXLG1DQUFtQztZQUM3RTtZQUNBSCxPQUFPSyxVQUFVLENBQUNSO1FBQ3BCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxQzs7Ozs7OzBCQUluRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFDQ0MsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkosV0FBVTs7Ozs7O2tDQUVaLDhEQUFDSzt3QkFBRUwsV0FBVTtrQ0FBNEI7Ozs7OztrQ0FJekMsOERBQUN0QixrRkFBTUE7d0JBQ0w0QixXQUFVO3dCQUNWQyxNQUFNQzt3QkFDTkMsU0FBUTt3QkFDUkMseUJBQVcsOERBQUM1Qix1RUFBZUE7Ozs7O3dCQUMzQjZCLElBQUk7NEJBQ0ZDLGlCQUFpQjs0QkFDakJDLE9BQU87NEJBQ1AsV0FBVztnQ0FDVEQsaUJBQWlCOzRCQUNuQjt3QkFDRjs7NEJBQ0Q7MENBRUMsOERBQUNFO2dDQUNDQyxNQUFLO2dDQUNMZixXQUFVO2dDQUNWZ0IsVUFBVTVCO2dDQUNWNkIsUUFBTzs7Ozs7Ozs7Ozs7O29CQUtWL0IsWUFBWWdDLE1BQU0sR0FBRyxtQkFDcEIsOERBQUNuQjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNtQjtnQ0FBR25CLFdBQVU7MENBQW9DOzs7Ozs7MENBQ2xELDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ2pCLGtEQUFXQTtvQ0FBQ3FDLFNBQVNwQyxpRUFBWUE7OENBQ2hDLDRFQUFDSCw4RUFBa0JBO3dDQUFDZSxTQUFTVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3QztHQW5Fd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEhlYWRpbmcsIHBhcnNlRG9jdW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvcGFyc2VEb2N1bWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyYWdnYWJsZVN0cnVjdHVyZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RyYWdnYWJsZVN0cnVjdHVyZVwiO1xuaW1wb3J0IENsb3VkVXBsb2FkSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DbG91ZFVwbG9hZFwiO1xuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtZG5kXCI7XG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tIFwicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ZpbGVDb250ZW50LCBzZXRGaWxlQ29udGVudF0gPSB1c2VTdGF0ZTxIZWFkaW5nW10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVGaWxlVXBsb2FkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0Py5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgICBzZXRGaWxlQ29udGVudChwYXJzZURvY3VtZW50KGNvbnRlbnQpKTsgLy8gVXBkYXRlIHN0YXRlIHdpdGggcGFyc2VkIGNvbnRlbnRcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG10LTE2IGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIFVwbG9hZCBhIFRleHQgRmlsZVxuICAgICAgPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTRcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLmd0YWcueHl6L2ltYWdlcy9zZWN0aW9ucy91cGxvYWQuc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJVcGxvYWQgaWNvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgIERyYWcgYW5kIGRyb3Agb3Igc2VsZWN0IGEgdGV4dCBmaWxlIHRvIHVwbG9hZFxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbXBvbmVudD1cImxhYmVsXCJcbiAgICAgICAgICByb2xlPXt1bmRlZmluZWR9XG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgc3RhcnRJY29uPXs8Q2xvdWRVcGxvYWRJY29uIC8+fVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwibGlnaHRHcmVlblwiLCAvLyBDdXN0b21pemUgYmFja2dyb3VuZCBjb2xvclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIiwgLy8gQ3VzdG9taXplIHRleHQgY29sb3JcbiAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwcmltYXJ5LmRhcmtcIiwgLy8gQ3VzdG9taXplIGhvdmVyIGNvbG9yXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBVcGxvYWQgRmlsZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlVXBsb2FkfVxuICAgICAgICAgICAgYWNjZXB0PVwiLnR4dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgey8qIFNob3cgZmlsZSBjb250ZW50IGlmIGF2YWlsYWJsZSAqL31cbiAgICAgICAge2ZpbGVDb250ZW50Lmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LThcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXJcIj5GaWxlIENvbnRlbnRzPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XG4gICAgICAgICAgICAgICAgPERyYWdnYWJsZVN0cnVjdHVyZSBjb250ZW50PXtmaWxlQ29udGVudH0gLz5cbiAgICAgICAgICAgICAgPC9EbmRQcm92aWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwicGFyc2VEb2N1bWVudCIsInVzZVN0YXRlIiwiRHJhZ2dhYmxlU3RydWN0dXJlIiwiQ2xvdWRVcGxvYWRJY29uIiwiRG5kUHJvdmlkZXIiLCJIVE1MNUJhY2tlbmQiLCJIb21lIiwiZmlsZUNvbnRlbnQiLCJzZXRGaWxlQ29udGVudCIsImhhbmRsZUZpbGVVcGxvYWQiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImNvbnRlbnQiLCJyZXN1bHQiLCJyZWFkQXNUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiY29tcG9uZW50Iiwicm9sZSIsInVuZGVmaW5lZCIsInZhcmlhbnQiLCJzdGFydEljb24iLCJzeCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJhY2NlcHQiLCJsZW5ndGgiLCJoMiIsImJhY2tlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});