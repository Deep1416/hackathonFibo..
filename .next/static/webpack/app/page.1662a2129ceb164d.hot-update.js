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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DraggableStructure: function() { return /* binding */ DraggableStructure; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _SortableAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortableAccordion */ \"(app-pages-browser)/./src/components/SortableAccordion.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst DraggableStructure = (param)=>{\n    let { structure } = param;\n    _s();\n    const [restructured, setRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedOg, setExpandedOg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedRestructured, setExpandedRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            variant: \"h4\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontWeight: \"bold\"\n                            },\n                            children: \"Table of Contents\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        structure.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_2__.SortableAccordion, {\n                                heading: heading,\n                                expanded: expandedOg,\n                                isDraggable: true,\n                                setExpanded: setExpandedOg,\n                                setAllHeadings: setRestructured,\n                                isDroppable: false\n                            }, index, false, {\n                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[65%] \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            variant: \"h6\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontStyle: \"italic\"\n                            },\n                            children: \"Drag and drop headings here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                border: \"2px dashed #ccc\",\n                                padding: \"16px\",\n                                borderRadius: \"8px\",\n                                paddingTop: \"10px\"\n                            },\n                            children: [\n                                restructured.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_2__.SortableAccordion, {\n                                                heading: heading,\n                                                expanded: expandedRestructured,\n                                                isDraggable: true,\n                                                setExpanded: setExpandedRestructured,\n                                                setAllHeadings: setRestructured,\n                                                isDroppable: true\n                                            }, index, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                                setAllHeadings: setRestructured,\n                                                showInfo: restructured.length === 0,\n                                                allHeadings: restructured,\n                                                short: true,\n                                                dropIndex: index + 1\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true)),\n                                restructured.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                    setAllHeadings: setRestructured,\n                                    showInfo: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DraggableStructure, \"c3PxwuBQ++k/50MG709aYSdQbDs=\");\n_c = DraggableStructure;\nconst DroppableContainer = (param)=>{\n    let { setAllHeadings, showInfo, allHeadings, short, dropIndex } = param;\n    _s1();\n    const [{ isOver }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop)({\n        accept: \"HEADING\",\n        drop: (draggedItem)=>{\n            setAllHeadings((prev)=>{\n                if (showInfo || !(allHeadings === null || allHeadings === void 0 ? void 0 : allHeadings.find((h)=>h.randomKey === draggedItem.randomKey))) {\n                    const newHeadings = [\n                        ...prev,\n                        draggedItem\n                    ];\n                    return newHeadings;\n                } else {\n                    const newHeadings = [\n                        ...prev\n                    ];\n                    const draggedIndex = newHeadings.findIndex((h)=>h.randomKey === draggedItem.randomKey);\n                    newHeadings.splice(draggedIndex, 1);\n                    if (dropIndex !== undefined) {\n                        newHeadings.splice(dropIndex, 0, draggedItem);\n                    } else {\n                        newHeadings.push(draggedItem);\n                    }\n                    return newHeadings;\n                }\n            });\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    const dropRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    drop(dropRef);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        ref: dropRef,\n        sx: {\n            height: short ? \"10px\" : \"100px\",\n            backgroundColor: isOver ? \"lightGreen\" : \"white\",\n            borderRadius: \"8px\",\n            marginTop: \"8px\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            transition: \"background-color 0.3s\",\n            boxShadow: isOver ? \"0px 4px 8px rgba(0,0,0,0.2)\" : \"none\"\n        },\n        children: !showInfo ? undefined : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            variant: \"body2\",\n            sx: {\n                color: \"gray\"\n            },\n            children: \"Drop here to start rearranging\"\n        }, void 0, false, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 145,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(DroppableContainer, \"kptFXlWE+TpNM97QpVqNJoqGO08=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop\n    ];\n});\n_c1 = DroppableContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"DraggableStructure\");\n$RefreshReg$(_c1, \"DroppableContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZVN0cnVjdHVyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUVoQjtBQUNuQjtBQUNvQjtBQVFoRCxNQUFNTSxxQkFBbUQ7UUFBQyxFQUMvREMsU0FBUyxFQUNWOztJQUNDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFZLEVBQUU7SUFDOUQsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFXLEVBQUU7SUFDekQsTUFBTSxDQUFDVyxzQkFBc0JDLHdCQUF3QixHQUFHWiwrQ0FBUUEsQ0FBVyxFQUFFO0lBRzdFLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWiwwRkFBVUE7NEJBQUNhLFNBQVE7NEJBQUtDLElBQUk7Z0NBQUVDLFdBQVc7Z0NBQVVDLFlBQVk7NEJBQU87c0NBQUc7Ozs7Ozt3QkFHekVaLFVBQVVhLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdkIsOERBQUNqQixpRUFBaUJBO2dDQUVoQmdCLFNBQVNBO2dDQUNURSxVQUFVYjtnQ0FDVmMsV0FBVztnQ0FDWEMsYUFBYWQ7Z0NBQ2JlLGdCQUFnQmpCO2dDQUNoQmtCLGFBQWE7K0JBTlJMOzs7Ozs7Ozs7Ozs4QkFVWCw4REFBQ1I7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWiwwRkFBVUE7NEJBQUNhLFNBQVE7NEJBQUtDLElBQUk7Z0NBQUVDLFdBQVc7Z0NBQVVVLFdBQVc7NEJBQVM7c0NBQUc7Ozs7OztzQ0FLM0UsOERBQUMxQiwwRkFBR0E7NEJBQUNlLElBQUk7Z0NBQUVZLFFBQVE7Z0NBQW1CQyxTQUFTO2dDQUFRQyxjQUFjO2dDQUFRQyxZQUFXOzRCQUFPOztnQ0FDNUZ4QixhQUFhWSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQzFCOzswREFDRSw4REFBQ2pCLGlFQUFpQkE7Z0RBRWhCZ0IsU0FBU0E7Z0RBQ1RFLFVBQVVYO2dEQUNWWSxhQUFhO2dEQUNiQyxhQUFhWjtnREFDYmEsZ0JBQWdCakI7Z0RBQ2hCa0IsYUFBYTsrQ0FOUkw7Ozs7OzBEQVFQLDhEQUFDVztnREFDQ1AsZ0JBQWdCakI7Z0RBQ2hCeUIsVUFBVTFCLGFBQWEyQixNQUFNLEtBQUs7Z0RBQ2xDQyxhQUFhNUI7Z0RBQ2I2QixLQUFLO2dEQUNMQyxXQUFXaEIsUUFBUTs7Ozs7Ozs7Z0NBTXhCZCxhQUFhMkIsTUFBTSxLQUFLLGtCQUN2Qiw4REFBQ0Y7b0NBQW1CUCxnQkFBZ0JqQjtvQ0FBaUJ5QixRQUFROzs7OztnREFDM0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQixFQUFDO0dBakVZNUI7S0FBQUE7QUFvRWIsTUFBTTJCLHFCQU1EO1FBQUMsRUFBRVAsY0FBYyxFQUFFUSxRQUFRLEVBQUVFLFdBQVcsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUU7O0lBQy9ELE1BQU0sQ0FBQyxFQUFFQyxNQUFNLEVBQUUsRUFBRUMsS0FBSyxHQUFHcEMsa0RBQU9BLENBQUM7UUFDakNxQyxRQUFRO1FBQ1JELE1BQU0sQ0FBQ0U7WUFDTGhCLGVBQWUsQ0FBQ2lCO2dCQUNkLElBQ0VULFlBQ0EsRUFBQ0Usd0JBQUFBLGtDQUFBQSxZQUFhUSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsU0FBUyxLQUFLSixZQUFZSSxTQUFTLElBQy9EO29CQUNBLE1BQU1DLGNBQWM7MkJBQUlKO3dCQUFNRDtxQkFBWTtvQkFDMUMsT0FBT0s7Z0JBQ1QsT0FBTztvQkFDTCxNQUFNQSxjQUFjOzJCQUFJSjtxQkFBSztvQkFDN0IsTUFBTUssZUFBZUQsWUFBWUUsU0FBUyxDQUN4QyxDQUFDSixJQUFNQSxFQUFFQyxTQUFTLEtBQUtKLFlBQVlJLFNBQVM7b0JBSTlDQyxZQUFZRyxNQUFNLENBQUNGLGNBQWM7b0JBQ2pDLElBQUlWLGNBQWNhLFdBQVc7d0JBQzNCSixZQUFZRyxNQUFNLENBQUNaLFdBQVcsR0FBR0k7b0JBQ25DLE9BQU87d0JBQ0xLLFlBQVlLLElBQUksQ0FBQ1Y7b0JBQ25CO29CQUdBLE9BQU9LO2dCQUNUO1lBQ0Y7UUFDRjtRQUNBTSxTQUFTLENBQUNDLFVBQWE7Z0JBQ3JCZixRQUFRZSxRQUFRZixNQUFNO1lBQ3hCO0lBQ0Y7SUFHQSxNQUFNZ0IsVUFBVXZELDZDQUFNQSxDQUFDO0lBR3ZCd0MsS0FBS2U7SUFHTCxxQkFDRSw4REFBQ3JELDBGQUFHQTtRQUNGc0QsS0FBS0Q7UUFDTHRDLElBQUk7WUFDRndDLFFBQVFwQixRQUFRLFNBQVM7WUFDekJxQixpQkFBaUJuQixTQUFTLGVBQWU7WUFDekNSLGNBQWM7WUFDZDRCLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsWUFBWTtZQUNaQyxXQUFXekIsU0FBUyxnQ0FBZ0M7UUFDdEQ7a0JBRUMsQ0FBQ0wsV0FBV2lCLDBCQUNYLDhEQUFDaEQsMEZBQVVBO1lBQUNhLFNBQVE7WUFBUUMsSUFBSTtnQkFBRWdELE9BQU87WUFBTztzQkFBRzs7Ozs7Ozs7Ozs7QUFNM0Q7SUF0RU1oQzs7UUFPdUI3Qiw4Q0FBT0E7OztNQVA5QjZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZVN0cnVjdHVyZS50c3g/NDkxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgRkMsIFNldFN0YXRlQWN0aW9uLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tIFwiLi4vdXRpbHMvcGFyc2VEb2N1bWVudFwiXG5pbXBvcnQgeyBCb3gsIEdyaWQyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxuaW1wb3J0IHsgdXNlRHJvcCB9IGZyb20gXCJyZWFjdC1kbmRcIlxuaW1wb3J0IHsgU29ydGFibGVBY2NvcmRpb24gfSBmcm9tIFwiLi9Tb3J0YWJsZUFjY29yZGlvblwiXG5cblxuZXhwb3J0IGludGVyZmFjZSBEcmFnZ2FibGVIZWFkaW5nIGV4dGVuZHMgSGVhZGluZyB7XG4gIHBhcmVudD86IHN0cmluZyB8IG51bGwgLy8gVG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50IGhlYWRpbmcgZm9yIG5lc3RlZCBzdHJ1Y3R1cmVzXG59XG5cblxuZXhwb3J0IGNvbnN0IERyYWdnYWJsZVN0cnVjdHVyZTogRkM8eyBzdHJ1Y3R1cmU6IEhlYWRpbmdbXSB9PiA9ICh7XG4gIHN0cnVjdHVyZSxcbn0pID0+IHtcbiAgY29uc3QgW3Jlc3RydWN0dXJlZCwgc2V0UmVzdHJ1Y3R1cmVkXSA9IHVzZVN0YXRlPEhlYWRpbmdbXT4oW10pXG4gIGNvbnN0IFtleHBhbmRlZE9nLCBzZXRFeHBhbmRlZE9nXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW2V4cGFuZGVkUmVzdHJ1Y3R1cmVkLCBzZXRFeHBhbmRlZFJlc3RydWN0dXJlZF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIFwiID5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHN4PXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XG4gICAgICAgICAgICBUYWJsZSBvZiBDb250ZW50c1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICB7c3RydWN0dXJlLm1hcCgoaGVhZGluZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTb3J0YWJsZUFjY29yZGlvblxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBoZWFkaW5nPXtoZWFkaW5nfVxuICAgICAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWRPZ31cbiAgICAgICAgICAgICAgaXNEcmFnZ2FibGVcbiAgICAgICAgICAgICAgc2V0RXhwYW5kZWQ9e3NldEV4cGFuZGVkT2d9XG4gICAgICAgICAgICAgIHNldEFsbEhlYWRpbmdzPXtzZXRSZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgIGlzRHJvcHBhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzY1JV0gXCIgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBzeD17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9fT5cbiAgICAgICAgICAgIERyYWcgYW5kIGRyb3AgaGVhZGluZ3MgaGVyZVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuXG4gICAgICAgICAgPEJveCBzeD17eyBib3JkZXI6IFwiMnB4IGRhc2hlZCAjY2NjXCIsIHBhZGRpbmc6IFwiMTZweFwiLCBib3JkZXJSYWRpdXM6IFwiOHB4XCIgLCBwYWRkaW5nVG9wOlwiMTBweFwiIH19PlxuICAgICAgICAgICAge3Jlc3RydWN0dXJlZC5tYXAoKGhlYWRpbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFNvcnRhYmxlQWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgaGVhZGluZz17aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIGlzRHJhZ2dhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgc2V0RXhwYW5kZWQ9e3NldEV4cGFuZGVkUmVzdHJ1Y3R1cmVkfVxuICAgICAgICAgICAgICAgICAgc2V0QWxsSGVhZGluZ3M9e3NldFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIGlzRHJvcHBhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPERyb3BwYWJsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgc2V0QWxsSGVhZGluZ3M9e3NldFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIHNob3dJbmZvPXtyZXN0cnVjdHVyZWQubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICAgICAgYWxsSGVhZGluZ3M9e3Jlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIHNob3J0XG4gICAgICAgICAgICAgICAgICBkcm9wSW5kZXg9e2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuXG5cbiAgICAgICAgICAgIHtyZXN0cnVjdHVyZWQubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8RHJvcHBhYmxlQ29udGFpbmVyIHNldEFsbEhlYWRpbmdzPXtzZXRSZXN0cnVjdHVyZWR9IHNob3dJbmZvIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IERyb3BwYWJsZUNvbnRhaW5lcjogRkM8e1xuICBzZXRBbGxIZWFkaW5nczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RHJhZ2dhYmxlSGVhZGluZ1tdPj5cbiAgc2hvd0luZm86IGJvb2xlYW5cbiAgYWxsSGVhZGluZ3M/OiBEcmFnZ2FibGVIZWFkaW5nW11cbiAgc2hvcnQ/OiBib29sZWFuXG4gIGRyb3BJbmRleD86IG51bWJlclxufT4gPSAoeyBzZXRBbGxIZWFkaW5ncywgc2hvd0luZm8sIGFsbEhlYWRpbmdzLCBzaG9ydCwgZHJvcEluZGV4IH0pID0+IHtcbiAgY29uc3QgW3sgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCh7XG4gICAgYWNjZXB0OiBcIkhFQURJTkdcIixcbiAgICBkcm9wOiAoZHJhZ2dlZEl0ZW06IERyYWdnYWJsZUhlYWRpbmcpID0+IHtcbiAgICAgIHNldEFsbEhlYWRpbmdzKChwcmV2KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzaG93SW5mbyB8fFxuICAgICAgICAgICFhbGxIZWFkaW5ncz8uZmluZCgoaCkgPT4gaC5yYW5kb21LZXkgPT09IGRyYWdnZWRJdGVtLnJhbmRvbUtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3SGVhZGluZ3MgPSBbLi4ucHJldiwgZHJhZ2dlZEl0ZW1dXG4gICAgICAgICAgcmV0dXJuIG5ld0hlYWRpbmdzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3SGVhZGluZ3MgPSBbLi4ucHJldl1cbiAgICAgICAgICBjb25zdCBkcmFnZ2VkSW5kZXggPSBuZXdIZWFkaW5ncy5maW5kSW5kZXgoXG4gICAgICAgICAgICAoaCkgPT4gaC5yYW5kb21LZXkgPT09IGRyYWdnZWRJdGVtLnJhbmRvbUtleVxuICAgICAgICAgIClcblxuXG4gICAgICAgICAgbmV3SGVhZGluZ3Muc3BsaWNlKGRyYWdnZWRJbmRleCwgMSlcbiAgICAgICAgICBpZiAoZHJvcEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0hlYWRpbmdzLnNwbGljZShkcm9wSW5kZXgsIDAsIGRyYWdnZWRJdGVtKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdIZWFkaW5ncy5wdXNoKGRyYWdnZWRJdGVtKVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgcmV0dXJuIG5ld0hlYWRpbmdzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcbiAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcbiAgICB9KSxcbiAgfSlcblxuXG4gIGNvbnN0IGRyb3BSZWYgPSB1c2VSZWYobnVsbClcblxuXG4gIGRyb3AoZHJvcFJlZilcblxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcmVmPXtkcm9wUmVmfVxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBzaG9ydCA/IFwiMTBweFwiIDogXCIxMDBweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzT3ZlciA/IFwibGlnaHRHcmVlblwiIDogXCJ3aGl0ZVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCI4cHhcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMC4zc1wiLFxuICAgICAgICBib3hTaGFkb3c6IGlzT3ZlciA/IFwiMHB4IDRweCA4cHggcmdiYSgwLDAsMCwwLjIpXCIgOiBcIm5vbmVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyFzaG93SW5mbyA/IHVuZGVmaW5lZCA6IChcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgY29sb3I6IFwiZ3JheVwiIH19PlxuICAgICAgICAgIERyb3AgaGVyZSB0byBzdGFydCByZWFycmFuZ2luZ1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJCb3giLCJUeXBvZ3JhcGh5IiwidXNlRHJvcCIsIlNvcnRhYmxlQWNjb3JkaW9uIiwiRHJhZ2dhYmxlU3RydWN0dXJlIiwic3RydWN0dXJlIiwicmVzdHJ1Y3R1cmVkIiwic2V0UmVzdHJ1Y3R1cmVkIiwiZXhwYW5kZWRPZyIsInNldEV4cGFuZGVkT2ciLCJleHBhbmRlZFJlc3RydWN0dXJlZCIsInNldEV4cGFuZGVkUmVzdHJ1Y3R1cmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudCIsInN4IiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsIm1hcCIsImhlYWRpbmciLCJpbmRleCIsImV4cGFuZGVkIiwiaXNEcmFnZ2FibGUiLCJzZXRFeHBhbmRlZCIsInNldEFsbEhlYWRpbmdzIiwiaXNEcm9wcGFibGUiLCJmb250U3R5bGUiLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ1RvcCIsIkRyb3BwYWJsZUNvbnRhaW5lciIsInNob3dJbmZvIiwibGVuZ3RoIiwiYWxsSGVhZGluZ3MiLCJzaG9ydCIsImRyb3BJbmRleCIsImlzT3ZlciIsImRyb3AiLCJhY2NlcHQiLCJkcmFnZ2VkSXRlbSIsInByZXYiLCJmaW5kIiwiaCIsInJhbmRvbUtleSIsIm5ld0hlYWRpbmdzIiwiZHJhZ2dlZEluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwidW5kZWZpbmVkIiwicHVzaCIsImNvbGxlY3QiLCJtb25pdG9yIiwiZHJvcFJlZiIsInJlZiIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DraggableStructure.tsx\n"));

/***/ })

});