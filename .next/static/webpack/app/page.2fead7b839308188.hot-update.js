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

/***/ "(app-pages-browser)/./src/components/DraggableStructure.tsx":
/*!***********************************************!*\
  !*** ./src/components/DraggableStructure.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DraggableStructure: function() { return /* binding */ DraggableStructure; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_parseDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/parseDocument */ \"(app-pages-browser)/./src/utils/parseDocument.ts\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid2,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Grid2/Grid2.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid2,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Grid2,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _SortableAccordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SortableAccordion */ \"(app-pages-browser)/./src/components/SortableAccordion.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst DraggableStructure = (param)=>{\n    let { structure } = param;\n    _s();\n    const [restructured, setRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedOg, setExpandedOg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedRestructured, setExpandedRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    item: true,\n                    xs: 12,\n                    sm: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"h4\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontWeight: \"bold\"\n                            },\n                            children: \"Table of Contents\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        structure.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_3__.SortableAccordion, {\n                                heading: heading,\n                                expanded: expandedOg,\n                                isDraggable: true,\n                                setExpanded: setExpandedOg,\n                                setAllHeadings: setRestructured,\n                                isDroppable: false\n                            }, index, false, {\n                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    item: true,\n                    xs: 12,\n                    sm: 8,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"h6\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontStyle: \"italic\"\n                            },\n                            children: \"Drag and drop headings here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            sx: {\n                                border: \"2px dashed #ccc\",\n                                padding: \"16px\",\n                                borderRadius: \"8px\"\n                            },\n                            children: [\n                                restructured.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_3__.SortableAccordion, {\n                                                heading: heading,\n                                                expanded: expandedRestructured,\n                                                isDraggable: true,\n                                                setExpanded: setExpandedRestructured,\n                                                setAllHeadings: setRestructured,\n                                                isDroppable: true\n                                            }, index, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                                setAllHeadings: setRestructured,\n                                                showInfo: restructured.length === 0,\n                                                allHeadings: restructured,\n                                                short: true,\n                                                dropIndex: index + 1\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true)),\n                                restructured.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                    setAllHeadings: setRestructured,\n                                    showInfo: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DraggableStructure, \"c3PxwuBQ++k/50MG709aYSdQbDs=\");\n_c = DraggableStructure;\nconst DroppableContainer = (param)=>{\n    let { setAllHeadings, showInfo, allHeadings, short, dropIndex } = param;\n    _s1();\n    const [{ isOver }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_7__.useDrop)({\n        accept: \"HEADING\",\n        drop: (draggedItem)=>{\n            setAllHeadings((prev)=>{\n                if (showInfo || !(allHeadings === null || allHeadings === void 0 ? void 0 : allHeadings.find((h)=>h.randomKey === draggedItem.randomKey))) {\n                    const newHeadings = [\n                        ...prev,\n                        draggedItem\n                    ];\n                    return newHeadings;\n                } else {\n                    const newHeadings = [\n                        ...prev\n                    ];\n                    const draggedIndex = newHeadings.findIndex((h)=>h.randomKey === draggedItem.randomKey);\n                    newHeadings.splice(draggedIndex, 1);\n                    if (dropIndex !== undefined) {\n                        newHeadings.splice(dropIndex, 0, draggedItem);\n                    } else {\n                        newHeadings.push(draggedItem);\n                    }\n                    return newHeadings;\n                }\n            });\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    const dropRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    drop(dropRef);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        ref: dropRef,\n        sx: {\n            height: short ? \"10px\" : \"100px\",\n            backgroundColor: isOver ? \"lightGreen\" : \"white\",\n            borderRadius: \"8px\",\n            marginTop: \"8px\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            transition: \"background-color 0.3s\",\n            boxShadow: isOver ? \"0px 4px 8px rgba(0,0,0,0.2)\" : \"none\"\n        },\n        children: !showInfo ? undefined : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Grid2_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            variant: \"body2\",\n            sx: {\n                color: \"gray\"\n            },\n            children: \"Drop here to start rearranging\"\n        }, void 0, false, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 158,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 143,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(DroppableContainer, \"kptFXlWE+TpNM97QpVqNJoqGO08=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_7__.useDrop\n    ];\n});\n_c1 = DroppableContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"DraggableStructure\");\n$RefreshReg$(_c1, \"DroppableContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZVN0cnVjdHVyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNFO0FBUXRDO0FBQ3NCO0FBQ25CO0FBQ29CO0FBY2hELE1BQU1PLHFCQUFtRDtRQUFDLEVBQy9EQyxTQUFTLEVBQ1Y7O0lBQ0MsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQVksRUFBRTtJQUM5RCxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQVcsRUFBRTtJQUN6RCxNQUFNLENBQUNZLHNCQUFzQkMsd0JBQXdCLEdBQUdiLCtDQUFRQSxDQUFXLEVBQUU7SUFHN0UscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDYixnR0FBS0E7b0JBQUNjLElBQUk7b0JBQUNDLElBQUk7b0JBQUlDLElBQUk7O3NDQUN0Qiw4REFBQ2YsZ0dBQVVBOzRCQUFDZ0IsU0FBUTs0QkFBS0MsSUFBSTtnQ0FBRUMsV0FBVztnQ0FBVUMsWUFBWTs0QkFBTztzQ0FBRzs7Ozs7O3dCQUd6RWYsVUFBVWdCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdkIsOERBQUNwQixpRUFBaUJBO2dDQUVoQm1CLFNBQVNBO2dDQUNURSxVQUFVaEI7Z0NBQ1ZpQixXQUFXO2dDQUNYQyxhQUFhakI7Z0NBQ2JrQixnQkFBZ0JwQjtnQ0FDaEJxQixhQUFhOytCQU5STDs7Ozs7Ozs7Ozs7OEJBVVgsOERBQUN2QixnR0FBS0E7b0JBQUNjLElBQUk7b0JBQUNDLElBQUk7b0JBQUlDLElBQUk7O3NDQUN0Qiw4REFBQ2YsZ0dBQVVBOzRCQUFDZ0IsU0FBUTs0QkFBS0MsSUFBSTtnQ0FBRUMsV0FBVztnQ0FBVVUsV0FBVzs0QkFBUztzQ0FBRzs7Ozs7O3NDQUszRSw4REFBQzlCLGdHQUFHQTs0QkFBQ21CLElBQUk7Z0NBQUVZLFFBQVE7Z0NBQW1CQyxTQUFTO2dDQUFRQyxjQUFjOzRCQUFNOztnQ0FDeEUxQixhQUFhZSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQzFCOzswREFDRSw4REFBQ3BCLGlFQUFpQkE7Z0RBRWhCbUIsU0FBU0E7Z0RBQ1RFLFVBQVVkO2dEQUNWZSxhQUFhO2dEQUNiQyxhQUFhZjtnREFDYmdCLGdCQUFnQnBCO2dEQUNoQnFCLGFBQWE7K0NBTlJMOzs7OzswREFRUCw4REFBQ1U7Z0RBQ0NOLGdCQUFnQnBCO2dEQUNoQjJCLFVBQVU1QixhQUFhNkIsTUFBTSxLQUFLO2dEQUNsQ0MsYUFBYTlCO2dEQUNiK0IsS0FBSztnREFDTEMsV0FBV2YsUUFBUTs7Ozs7Ozs7Z0NBTXhCakIsYUFBYTZCLE1BQU0sS0FBSyxrQkFDdkIsOERBQUNGO29DQUFtQk4sZ0JBQWdCcEI7b0NBQWlCMkIsUUFBUTs7Ozs7Z0RBQzNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEIsRUFBQztHQWpFWTlCO0tBQUFBO0FBb0ViLE1BQU02QixxQkFNRDtRQUFDLEVBQUVOLGNBQWMsRUFBRU8sUUFBUSxFQUFFRSxXQUFXLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFOztJQUMvRCxNQUFNLENBQUMsRUFBRUMsTUFBTSxFQUFFLEVBQUVDLEtBQUssR0FBR3RDLGtEQUFPQSxDQUFDO1FBQ2pDdUMsUUFBUTtRQUNSRCxNQUFNLENBQUNFO1lBQ0xmLGVBQWUsQ0FBQ2dCO2dCQUNkLElBQ0VULFlBQ0EsRUFBQ0Usd0JBQUFBLGtDQUFBQSxZQUFhUSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsU0FBUyxLQUFLSixZQUFZSSxTQUFTLElBQy9EO29CQUNBLE1BQU1DLGNBQWM7MkJBQUlKO3dCQUFNRDtxQkFBWTtvQkFDMUMsT0FBT0s7Z0JBQ1QsT0FBTztvQkFDTCxNQUFNQSxjQUFjOzJCQUFJSjtxQkFBSztvQkFDN0IsTUFBTUssZUFBZUQsWUFBWUUsU0FBUyxDQUN4QyxDQUFDSixJQUFNQSxFQUFFQyxTQUFTLEtBQUtKLFlBQVlJLFNBQVM7b0JBSTlDQyxZQUFZRyxNQUFNLENBQUNGLGNBQWM7b0JBQ2pDLElBQUlWLGNBQWNhLFdBQVc7d0JBQzNCSixZQUFZRyxNQUFNLENBQUNaLFdBQVcsR0FBR0k7b0JBQ25DLE9BQU87d0JBQ0xLLFlBQVlLLElBQUksQ0FBQ1Y7b0JBQ25CO29CQUdBLE9BQU9LO2dCQUNUO1lBQ0Y7UUFDRjtRQUNBTSxTQUFTLENBQUNDLFVBQWE7Z0JBQ3JCZixRQUFRZSxRQUFRZixNQUFNO1lBQ3hCO0lBQ0Y7SUFHQSxNQUFNZ0IsVUFBVTFELDZDQUFNQSxDQUFDO0lBR3ZCMkMsS0FBS2U7SUFHTCxxQkFDRSw4REFBQ3hELGdHQUFHQTtRQUNGeUQsS0FBS0Q7UUFDTHJDLElBQUk7WUFDRnVDLFFBQVFwQixRQUFRLFNBQVM7WUFDekJxQixpQkFBaUJuQixTQUFTLGVBQWU7WUFDekNQLGNBQWM7WUFDZDJCLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsWUFBWTtZQUNaQyxXQUFXekIsU0FBUyxnQ0FBZ0M7UUFDdEQ7a0JBRUMsQ0FBQ0wsV0FBV2lCLDBCQUNYLDhEQUFDbEQsZ0dBQVVBO1lBQUNnQixTQUFRO1lBQVFDLElBQUk7Z0JBQUUrQyxPQUFPO1lBQU87c0JBQUc7Ozs7Ozs7Ozs7O0FBTTNEO0lBdEVNaEM7O1FBT3VCL0IsOENBQU9BOzs7TUFQOUIrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EcmFnZ2FibGVTdHJ1Y3R1cmUudHN4PzQ5MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzcGF0Y2gsIEZDLCBTZXRTdGF0ZUFjdGlvbiwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBcbiAgXG5cblxuXG5cbiAgXG4gfSBmcm9tIFwiLi4vdXRpbHMvcGFyc2VEb2N1bWVudFwiXG5pbXBvcnQgeyBCb3gsIEdyaWQyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxuaW1wb3J0IHsgdXNlRHJvcCB9IGZyb20gXCJyZWFjdC1kbmRcIlxuaW1wb3J0IHsgU29ydGFibGVBY2NvcmRpb24gfSBmcm9tIFwiLi9Tb3J0YWJsZUFjY29yZGlvblwiXG5cblxuZXhwb3J0IGludGVyZmFjZSBEcmFnZ2FibGVcblxuXG5cblxuXG5leHRlbmRzIEhlYWRpbmcge1xuICBwYXJlbnQ/OiBzdHJpbmcgfCBudWxsIC8vIFRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudCBoZWFkaW5nIGZvciBuZXN0ZWQgc3RydWN0dXJlc1xufVxuXG5cbmV4cG9ydCBjb25zdCBEcmFnZ2FibGVTdHJ1Y3R1cmU6IEZDPHsgc3RydWN0dXJlOiBIZWFkaW5nW10gfT4gPSAoe1xuICBzdHJ1Y3R1cmUsXG59KSA9PiB7XG4gIGNvbnN0IFtyZXN0cnVjdHVyZWQsIHNldFJlc3RydWN0dXJlZF0gPSB1c2VTdGF0ZTxIZWFkaW5nW10+KFtdKVxuICBjb25zdCBbZXhwYW5kZWRPZywgc2V0RXhwYW5kZWRPZ10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtleHBhbmRlZFJlc3RydWN0dXJlZCwgc2V0RXhwYW5kZWRSZXN0cnVjdHVyZWRdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBcIiA+XG4gICAgICBcbiAgICAgICAgPEdyaWQyIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgc3g9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cbiAgICAgICAgICAgIFRhYmxlIG9mIENvbnRlbnRzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIHtzdHJ1Y3R1cmUubWFwKChoZWFkaW5nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFNvcnRhYmxlQWNjb3JkaW9uXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGhlYWRpbmc9e2hlYWRpbmd9XG4gICAgICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZE9nfVxuICAgICAgICAgICAgICBpc0RyYWdnYWJsZVxuICAgICAgICAgICAgICBzZXRFeHBhbmRlZD17c2V0RXhwYW5kZWRPZ31cbiAgICAgICAgICAgICAgc2V0QWxsSGVhZGluZ3M9e3NldFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgaXNEcm9wcGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkMj5cbiAgICAgICAgPEdyaWQyIGl0ZW0geHM9ezEyfSBzbT17OH0gID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9fT5cbiAgICAgICAgICAgIERyYWcgYW5kIGRyb3AgaGVhZGluZ3MgaGVyZVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuXG4gICAgICAgICAgPEJveCBzeD17eyBib3JkZXI6IFwiMnB4IGRhc2hlZCAjY2NjXCIsIHBhZGRpbmc6IFwiMTZweFwiLCBib3JkZXJSYWRpdXM6IFwiOHB4XCIgfX0+XG4gICAgICAgICAgICB7cmVzdHJ1Y3R1cmVkLm1hcCgoaGVhZGluZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8U29ydGFibGVBY2NvcmRpb25cbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBoZWFkaW5nPXtoZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkUmVzdHJ1Y3R1cmVkfVxuICAgICAgICAgICAgICAgICAgaXNEcmFnZ2FibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICBzZXRFeHBhbmRlZD17c2V0RXhwYW5kZWRSZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgICAgICBzZXRBbGxIZWFkaW5ncz17c2V0UmVzdHJ1Y3R1cmVkfVxuICAgICAgICAgICAgICAgICAgaXNEcm9wcGFibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RHJvcHBhYmxlQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICBzZXRBbGxIZWFkaW5ncz17c2V0UmVzdHJ1Y3R1cmVkfVxuICAgICAgICAgICAgICAgICAgc2hvd0luZm89e3Jlc3RydWN0dXJlZC5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgICAgICBhbGxIZWFkaW5ncz17cmVzdHJ1Y3R1cmVkfVxuICAgICAgICAgICAgICAgICAgc2hvcnRcbiAgICAgICAgICAgICAgICAgIGRyb3BJbmRleD17aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSl9XG5cblxuICAgICAgICAgICAge3Jlc3RydWN0dXJlZC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxEcm9wcGFibGVDb250YWluZXIgc2V0QWxsSGVhZGluZ3M9e3NldFJlc3RydWN0dXJlZH0gc2hvd0luZm8gLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWQyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBEcm9wcGFibGVDb250YWluZXI6IEZDPHtcbiAgc2V0QWxsSGVhZGluZ3M6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPERyYWdnYWJsZUhlYWRpbmdbXT4+XG4gIHNob3dJbmZvOiBib29sZWFuXG4gIGFsbEhlYWRpbmdzPzogRHJhZ2dhYmxlSGVhZGluZ1tdXG4gIHNob3J0PzogYm9vbGVhblxuICBkcm9wSW5kZXg/OiBudW1iZXJcbn0+ID0gKHsgc2V0QWxsSGVhZGluZ3MsIHNob3dJbmZvLCBhbGxIZWFkaW5ncywgc2hvcnQsIGRyb3BJbmRleCB9KSA9PiB7XG4gIGNvbnN0IFt7IGlzT3ZlciB9LCBkcm9wXSA9IHVzZURyb3Aoe1xuICAgIGFjY2VwdDogXCJIRUFESU5HXCIsXG4gICAgZHJvcDogKGRyYWdnZWRJdGVtOiBEcmFnZ2FibGVIZWFkaW5nKSA9PiB7XG4gICAgICBzZXRBbGxIZWFkaW5ncygocHJldikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2hvd0luZm8gfHxcbiAgICAgICAgICAhYWxsSGVhZGluZ3M/LmZpbmQoKGgpID0+IGgucmFuZG9tS2V5ID09PSBkcmFnZ2VkSXRlbS5yYW5kb21LZXkpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmdzID0gWy4uLnByZXYsIGRyYWdnZWRJdGVtXVxuICAgICAgICAgIHJldHVybiBuZXdIZWFkaW5nc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmdzID0gWy4uLnByZXZdXG4gICAgICAgICAgY29uc3QgZHJhZ2dlZEluZGV4ID0gbmV3SGVhZGluZ3MuZmluZEluZGV4KFxuICAgICAgICAgICAgKGgpID0+IGgucmFuZG9tS2V5ID09PSBkcmFnZ2VkSXRlbS5yYW5kb21LZXlcbiAgICAgICAgICApXG5cblxuICAgICAgICAgIG5ld0hlYWRpbmdzLnNwbGljZShkcmFnZ2VkSW5kZXgsIDEpXG4gICAgICAgICAgaWYgKGRyb3BJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdIZWFkaW5ncy5zcGxpY2UoZHJvcEluZGV4LCAwLCBkcmFnZ2VkSXRlbSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SGVhZGluZ3MucHVzaChkcmFnZ2VkSXRlbSlcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIHJldHVybiBuZXdIZWFkaW5nc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XG4gICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXG4gICAgfSksXG4gIH0pXG5cblxuICBjb25zdCBkcm9wUmVmID0gdXNlUmVmKG51bGwpXG5cblxuICBkcm9wKGRyb3BSZWYpXG5cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHJlZj17ZHJvcFJlZn1cbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogc2hvcnQgPyBcIjEwcHhcIiA6IFwiMTAwcHhcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc092ZXIgPyBcImxpZ2h0R3JlZW5cIiA6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiOHB4XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDAuM3NcIixcbiAgICAgICAgYm94U2hhZG93OiBpc092ZXIgPyBcIjBweCA0cHggOHB4IHJnYmEoMCwwLDAsMC4yKVwiIDogXCJub25lXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHshc2hvd0luZm8gPyB1bmRlZmluZWQgOiAoXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IGNvbG9yOiBcImdyYXlcIiB9fT5cbiAgICAgICAgICBEcm9wIGhlcmUgdG8gc3RhcnQgcmVhcnJhbmdpbmdcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiQm94IiwiR3JpZDIiLCJUeXBvZ3JhcGh5IiwidXNlRHJvcCIsIlNvcnRhYmxlQWNjb3JkaW9uIiwiRHJhZ2dhYmxlU3RydWN0dXJlIiwic3RydWN0dXJlIiwicmVzdHJ1Y3R1cmVkIiwic2V0UmVzdHJ1Y3R1cmVkIiwiZXhwYW5kZWRPZyIsInNldEV4cGFuZGVkT2ciLCJleHBhbmRlZFJlc3RydWN0dXJlZCIsInNldEV4cGFuZGVkUmVzdHJ1Y3R1cmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXRlbSIsInhzIiwic20iLCJ2YXJpYW50Iiwic3giLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwibWFwIiwiaGVhZGluZyIsImluZGV4IiwiZXhwYW5kZWQiLCJpc0RyYWdnYWJsZSIsInNldEV4cGFuZGVkIiwic2V0QWxsSGVhZGluZ3MiLCJpc0Ryb3BwYWJsZSIsImZvbnRTdHlsZSIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJEcm9wcGFibGVDb250YWluZXIiLCJzaG93SW5mbyIsImxlbmd0aCIsImFsbEhlYWRpbmdzIiwic2hvcnQiLCJkcm9wSW5kZXgiLCJpc092ZXIiLCJkcm9wIiwiYWNjZXB0IiwiZHJhZ2dlZEl0ZW0iLCJwcmV2IiwiZmluZCIsImgiLCJyYW5kb21LZXkiLCJuZXdIZWFkaW5ncyIsImRyYWdnZWRJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInVuZGVmaW5lZCIsInB1c2giLCJjb2xsZWN0IiwibW9uaXRvciIsImRyb3BSZWYiLCJyZWYiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DraggableStructure.tsx\n"));

/***/ })

});