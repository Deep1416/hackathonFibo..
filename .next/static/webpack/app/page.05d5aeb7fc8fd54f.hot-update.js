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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DraggableStructure: function() { return /* binding */ DraggableStructure; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _SortableAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortableAccordion */ \"(app-pages-browser)/./src/components/SortableAccordion.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst DraggableStructure = (param)=>{\n    let { structure } = param;\n    _s();\n    const [restructured, setRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedOg, setExpandedOg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedRestructured, setExpandedRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            variant: \"h4\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontWeight: \"bold\",\n                                paddingTop: \"12px\"\n                            },\n                            children: \"Table of Contents\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" p\",\n                            children: structure.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_2__.SortableAccordion, {\n                                    heading: heading,\n                                    expanded: expandedOg,\n                                    isDraggable: true,\n                                    setExpanded: setExpandedOg,\n                                    setAllHeadings: setRestructured,\n                                    isDroppable: false\n                                }, index, false, {\n                                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[65%] \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            variant: \"h5\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontStyle: \"italic\",\n                                paddingBottom: \"16px\",\n                                paddingTop: \"4px\"\n                            },\n                            children: \"Drag and drop headings here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                border: \"2px dashed #ccc\",\n                                padding: \"16px\",\n                                borderRadius: \"8px\",\n                                paddingTop: \"16px\"\n                            },\n                            children: [\n                                restructured.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_2__.SortableAccordion, {\n                                                heading: heading,\n                                                expanded: expandedRestructured,\n                                                isDraggable: true,\n                                                setExpanded: setExpandedRestructured,\n                                                setAllHeadings: setRestructured,\n                                                isDroppable: true\n                                            }, index, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                                setAllHeadings: setRestructured,\n                                                showInfo: restructured.length === 0,\n                                                allHeadings: restructured,\n                                                short: true,\n                                                dropIndex: index + 1\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true)),\n                                restructured.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                    setAllHeadings: setRestructured,\n                                    showInfo: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, undefined) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DraggableStructure, \"c3PxwuBQ++k/50MG709aYSdQbDs=\");\n_c = DraggableStructure;\nconst DroppableContainer = (param)=>{\n    let { setAllHeadings, showInfo, allHeadings, short, dropIndex } = param;\n    _s1();\n    const [{ isOver }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop)({\n        accept: \"HEADING\",\n        drop: (draggedItem)=>{\n            setAllHeadings((prev)=>{\n                if (showInfo || !(allHeadings === null || allHeadings === void 0 ? void 0 : allHeadings.find((h)=>h.randomKey === draggedItem.randomKey))) {\n                    const newHeadings = [\n                        ...prev,\n                        draggedItem\n                    ];\n                    return newHeadings;\n                } else {\n                    const newHeadings = [\n                        ...prev\n                    ];\n                    const draggedIndex = newHeadings.findIndex((h)=>h.randomKey === draggedItem.randomKey);\n                    newHeadings.splice(draggedIndex, 1);\n                    if (dropIndex !== undefined) {\n                        newHeadings.splice(dropIndex, 0, draggedItem);\n                    } else {\n                        newHeadings.push(draggedItem);\n                    }\n                    return newHeadings;\n                }\n            });\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    const dropRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    drop(dropRef);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        ref: dropRef,\n        sx: {\n            height: short ? \"10px\" : \"100px\",\n            backgroundColor: isOver ? \"lightGreen\" : \"white\",\n            borderRadius: \"8px\",\n            marginTop: \"8px\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            transition: \"background-color 0.3s\",\n            boxShadow: isOver ? \"0px 4px 8px rgba(0,0,0,0.2)\" : \"none\"\n        },\n        children: !showInfo ? undefined : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            variant: \"body2\",\n            sx: {\n                color: \"gray\"\n            },\n            children: \"Drop here to start rearranging\"\n        }, void 0, false, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 147,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(DroppableContainer, \"kptFXlWE+TpNM97QpVqNJoqGO08=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop\n    ];\n});\n_c1 = DroppableContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"DraggableStructure\");\n$RefreshReg$(_c1, \"DroppableContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZVN0cnVjdHVyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUVoQjtBQUNuQjtBQUNvQjtBQVFoRCxNQUFNTSxxQkFBbUQ7UUFBQyxFQUMvREMsU0FBUyxFQUNWOztJQUNDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFZLEVBQUU7SUFDOUQsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFXLEVBQUU7SUFDekQsTUFBTSxDQUFDVyxzQkFBc0JDLHdCQUF3QixHQUFHWiwrQ0FBUUEsQ0FBVyxFQUFFO0lBRzdFLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWiwwRkFBVUE7NEJBQUNhLFNBQVE7NEJBQUtDLElBQUk7Z0NBQUVDLFdBQVc7Z0NBQVVDLFlBQVk7Z0NBQVFDLFlBQVc7NEJBQU87c0NBQUc7Ozs7OztzQ0FHN0YsOERBQUNOOzRCQUFJQyxXQUFVO3NDQUNkUixVQUFVYyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3ZCLDhEQUFDbEIsaUVBQWlCQTtvQ0FFaEJpQixTQUFTQTtvQ0FDVEUsVUFBVWQ7b0NBQ1ZlLFdBQVc7b0NBQ1hDLGFBQWFmO29DQUNiZ0IsZ0JBQWdCbEI7b0NBQ2hCbUIsYUFBYTttQ0FOUkw7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBV1gsOERBQUNUO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1osMEZBQVVBOzRCQUFDYSxTQUFROzRCQUFLQyxJQUFJO2dDQUFFQyxXQUFXO2dDQUFVVyxXQUFXO2dDQUFVQyxlQUFjO2dDQUFTVixZQUFXOzRCQUFNO3NDQUFHOzs7Ozs7c0NBS3BILDhEQUFDbEIsMEZBQUdBOzRCQUFDZSxJQUFJO2dDQUFFYyxRQUFRO2dDQUFtQkMsU0FBUztnQ0FBUUMsY0FBYztnQ0FBUWIsWUFBVzs0QkFBTzs7Z0NBQzVGWixhQUFhYSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQzFCOzswREFDRSw4REFBQ2xCLGlFQUFpQkE7Z0RBRWhCaUIsU0FBU0E7Z0RBQ1RFLFVBQVVaO2dEQUNWYSxhQUFhO2dEQUNiQyxhQUFhYjtnREFDYmMsZ0JBQWdCbEI7Z0RBQ2hCbUIsYUFBYTsrQ0FOUkw7Ozs7OzBEQVFQLDhEQUFDVztnREFDQ1AsZ0JBQWdCbEI7Z0RBQ2hCMEIsVUFBVTNCLGFBQWE0QixNQUFNLEtBQUs7Z0RBQ2xDQyxhQUFhN0I7Z0RBQ2I4QixLQUFLO2dEQUNMQyxXQUFXaEIsUUFBUTs7Ozs7Ozs7Z0NBTXhCZixhQUFhNEIsTUFBTSxLQUFLLGtCQUN2Qiw4REFBQ0Y7b0NBQW1CUCxnQkFBZ0JsQjtvQ0FBaUIwQixRQUFROzs7OztnREFDM0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQixFQUFDO0dBbkVZN0I7S0FBQUE7QUFzRWIsTUFBTTRCLHFCQU1EO1FBQUMsRUFBRVAsY0FBYyxFQUFFUSxRQUFRLEVBQUVFLFdBQVcsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUU7O0lBQy9ELE1BQU0sQ0FBQyxFQUFFQyxNQUFNLEVBQUUsRUFBRUMsS0FBSyxHQUFHckMsa0RBQU9BLENBQUM7UUFDakNzQyxRQUFRO1FBQ1JELE1BQU0sQ0FBQ0U7WUFDTGhCLGVBQWUsQ0FBQ2lCO2dCQUNkLElBQ0VULFlBQ0EsRUFBQ0Usd0JBQUFBLGtDQUFBQSxZQUFhUSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsU0FBUyxLQUFLSixZQUFZSSxTQUFTLElBQy9EO29CQUNBLE1BQU1DLGNBQWM7MkJBQUlKO3dCQUFNRDtxQkFBWTtvQkFDMUMsT0FBT0s7Z0JBQ1QsT0FBTztvQkFDTCxNQUFNQSxjQUFjOzJCQUFJSjtxQkFBSztvQkFDN0IsTUFBTUssZUFBZUQsWUFBWUUsU0FBUyxDQUN4QyxDQUFDSixJQUFNQSxFQUFFQyxTQUFTLEtBQUtKLFlBQVlJLFNBQVM7b0JBSTlDQyxZQUFZRyxNQUFNLENBQUNGLGNBQWM7b0JBQ2pDLElBQUlWLGNBQWNhLFdBQVc7d0JBQzNCSixZQUFZRyxNQUFNLENBQUNaLFdBQVcsR0FBR0k7b0JBQ25DLE9BQU87d0JBQ0xLLFlBQVlLLElBQUksQ0FBQ1Y7b0JBQ25CO29CQUdBLE9BQU9LO2dCQUNUO1lBQ0Y7UUFDRjtRQUNBTSxTQUFTLENBQUNDLFVBQWE7Z0JBQ3JCZixRQUFRZSxRQUFRZixNQUFNO1lBQ3hCO0lBQ0Y7SUFHQSxNQUFNZ0IsVUFBVXhELDZDQUFNQSxDQUFDO0lBR3ZCeUMsS0FBS2U7SUFHTCxxQkFDRSw4REFBQ3RELDBGQUFHQTtRQUNGdUQsS0FBS0Q7UUFDTHZDLElBQUk7WUFDRnlDLFFBQVFwQixRQUFRLFNBQVM7WUFDekJxQixpQkFBaUJuQixTQUFTLGVBQWU7WUFDekNQLGNBQWM7WUFDZDJCLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsWUFBWTtZQUNaQyxXQUFXekIsU0FBUyxnQ0FBZ0M7UUFDdEQ7a0JBRUMsQ0FBQ0wsV0FBV2lCLDBCQUNYLDhEQUFDakQsMEZBQVVBO1lBQUNhLFNBQVE7WUFBUUMsSUFBSTtnQkFBRWlELE9BQU87WUFBTztzQkFBRzs7Ozs7Ozs7Ozs7QUFNM0Q7SUF0RU1oQzs7UUFPdUI5Qiw4Q0FBT0E7OztNQVA5QjhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZVN0cnVjdHVyZS50c3g/NDkxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgRkMsIFNldFN0YXRlQWN0aW9uLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tIFwiLi4vdXRpbHMvcGFyc2VEb2N1bWVudFwiXG5pbXBvcnQgeyBCb3gsIEdyaWQyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxuaW1wb3J0IHsgdXNlRHJvcCB9IGZyb20gXCJyZWFjdC1kbmRcIlxuaW1wb3J0IHsgU29ydGFibGVBY2NvcmRpb24gfSBmcm9tIFwiLi9Tb3J0YWJsZUFjY29yZGlvblwiXG5cblxuZXhwb3J0IGludGVyZmFjZSBEcmFnZ2FibGVIZWFkaW5nIGV4dGVuZHMgSGVhZGluZyB7XG4gIHBhcmVudD86IHN0cmluZyB8IG51bGwgLy8gVG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50IGhlYWRpbmcgZm9yIG5lc3RlZCBzdHJ1Y3R1cmVzXG59XG5cblxuZXhwb3J0IGNvbnN0IERyYWdnYWJsZVN0cnVjdHVyZTogRkM8eyBzdHJ1Y3R1cmU6IEhlYWRpbmdbXSB9PiA9ICh7XG4gIHN0cnVjdHVyZSxcbn0pID0+IHtcbiAgY29uc3QgW3Jlc3RydWN0dXJlZCwgc2V0UmVzdHJ1Y3R1cmVkXSA9IHVzZVN0YXRlPEhlYWRpbmdbXT4oW10pXG4gIGNvbnN0IFtleHBhbmRlZE9nLCBzZXRFeHBhbmRlZE9nXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgY29uc3QgW2V4cGFuZGVkUmVzdHJ1Y3R1cmVkLCBzZXRFeHBhbmRlZFJlc3RydWN0dXJlZF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIFwiID5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHN4PXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIHBhZGRpbmdUb3A6XCIxMnB4XCIgfX0+XG4gICAgICAgICAgICBUYWJsZSBvZiBDb250ZW50c1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwXCI+XG4gICAgICAgICAge3N0cnVjdHVyZS5tYXAoKGhlYWRpbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U29ydGFibGVBY2NvcmRpb25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaGVhZGluZz17aGVhZGluZ31cbiAgICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkT2d9XG4gICAgICAgICAgICAgIGlzRHJhZ2dhYmxlXG4gICAgICAgICAgICAgIHNldEV4cGFuZGVkPXtzZXRFeHBhbmRlZE9nfVxuICAgICAgICAgICAgICBzZXRBbGxIZWFkaW5ncz17c2V0UmVzdHJ1Y3R1cmVkfVxuICAgICAgICAgICAgICBpc0Ryb3BwYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs2NSVdIFwiICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgc3g9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIsIHBhZGRpbmdCb3R0b206XCIxNnB4XCIgLCBwYWRkaW5nVG9wOlwiNHB4XCIgfX0+XG4gICAgICAgICAgICBEcmFnIGFuZCBkcm9wIGhlYWRpbmdzIGhlcmVcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cblxuICAgICAgICAgIDxCb3ggc3g9e3sgYm9yZGVyOiBcIjJweCBkYXNoZWQgI2NjY1wiLCBwYWRkaW5nOiBcIjE2cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjhweFwiICwgcGFkZGluZ1RvcDpcIjE2cHhcIiB9fT5cbiAgICAgICAgICAgIHtyZXN0cnVjdHVyZWQubWFwKChoZWFkaW5nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUFjY29yZGlvblxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e2hlYWRpbmd9XG4gICAgICAgICAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWRSZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgICAgICBpc0RyYWdnYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkPXtzZXRFeHBhbmRlZFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIHNldEFsbEhlYWRpbmdzPXtzZXRSZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgICAgICBpc0Ryb3BwYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxEcm9wcGFibGVDb250YWluZXJcbiAgICAgICAgICAgICAgICAgIHNldEFsbEhlYWRpbmdzPXtzZXRSZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgICAgICBzaG93SW5mbz17cmVzdHJ1Y3R1cmVkLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgIGFsbEhlYWRpbmdzPXtyZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgICAgICBzaG9ydFxuICAgICAgICAgICAgICAgICAgZHJvcEluZGV4PXtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApKX1cblxuXG4gICAgICAgICAgICB7cmVzdHJ1Y3R1cmVkLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPERyb3BwYWJsZUNvbnRhaW5lciBzZXRBbGxIZWFkaW5ncz17c2V0UmVzdHJ1Y3R1cmVkfSBzaG93SW5mbyAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBEcm9wcGFibGVDb250YWluZXI6IEZDPHtcbiAgc2V0QWxsSGVhZGluZ3M6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPERyYWdnYWJsZUhlYWRpbmdbXT4+XG4gIHNob3dJbmZvOiBib29sZWFuXG4gIGFsbEhlYWRpbmdzPzogRHJhZ2dhYmxlSGVhZGluZ1tdXG4gIHNob3J0PzogYm9vbGVhblxuICBkcm9wSW5kZXg/OiBudW1iZXJcbn0+ID0gKHsgc2V0QWxsSGVhZGluZ3MsIHNob3dJbmZvLCBhbGxIZWFkaW5ncywgc2hvcnQsIGRyb3BJbmRleCB9KSA9PiB7XG4gIGNvbnN0IFt7IGlzT3ZlciB9LCBkcm9wXSA9IHVzZURyb3Aoe1xuICAgIGFjY2VwdDogXCJIRUFESU5HXCIsXG4gICAgZHJvcDogKGRyYWdnZWRJdGVtOiBEcmFnZ2FibGVIZWFkaW5nKSA9PiB7XG4gICAgICBzZXRBbGxIZWFkaW5ncygocHJldikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2hvd0luZm8gfHxcbiAgICAgICAgICAhYWxsSGVhZGluZ3M/LmZpbmQoKGgpID0+IGgucmFuZG9tS2V5ID09PSBkcmFnZ2VkSXRlbS5yYW5kb21LZXkpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmdzID0gWy4uLnByZXYsIGRyYWdnZWRJdGVtXVxuICAgICAgICAgIHJldHVybiBuZXdIZWFkaW5nc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmdzID0gWy4uLnByZXZdXG4gICAgICAgICAgY29uc3QgZHJhZ2dlZEluZGV4ID0gbmV3SGVhZGluZ3MuZmluZEluZGV4KFxuICAgICAgICAgICAgKGgpID0+IGgucmFuZG9tS2V5ID09PSBkcmFnZ2VkSXRlbS5yYW5kb21LZXlcbiAgICAgICAgICApXG5cblxuICAgICAgICAgIG5ld0hlYWRpbmdzLnNwbGljZShkcmFnZ2VkSW5kZXgsIDEpXG4gICAgICAgICAgaWYgKGRyb3BJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdIZWFkaW5ncy5zcGxpY2UoZHJvcEluZGV4LCAwLCBkcmFnZ2VkSXRlbSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SGVhZGluZ3MucHVzaChkcmFnZ2VkSXRlbSlcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIHJldHVybiBuZXdIZWFkaW5nc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XG4gICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXG4gICAgfSksXG4gIH0pXG5cblxuICBjb25zdCBkcm9wUmVmID0gdXNlUmVmKG51bGwpXG5cblxuICBkcm9wKGRyb3BSZWYpXG5cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHJlZj17ZHJvcFJlZn1cbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogc2hvcnQgPyBcIjEwcHhcIiA6IFwiMTAwcHhcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc092ZXIgPyBcImxpZ2h0R3JlZW5cIiA6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiOHB4XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDAuM3NcIixcbiAgICAgICAgYm94U2hhZG93OiBpc092ZXIgPyBcIjBweCA0cHggOHB4IHJnYmEoMCwwLDAsMC4yKVwiIDogXCJub25lXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHshc2hvd0luZm8gPyB1bmRlZmluZWQgOiAoXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IGNvbG9yOiBcImdyYXlcIiB9fT5cbiAgICAgICAgICBEcm9wIGhlcmUgdG8gc3RhcnQgcmVhcnJhbmdpbmdcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiQm94IiwiVHlwb2dyYXBoeSIsInVzZURyb3AiLCJTb3J0YWJsZUFjY29yZGlvbiIsIkRyYWdnYWJsZVN0cnVjdHVyZSIsInN0cnVjdHVyZSIsInJlc3RydWN0dXJlZCIsInNldFJlc3RydWN0dXJlZCIsImV4cGFuZGVkT2ciLCJzZXRFeHBhbmRlZE9nIiwiZXhwYW5kZWRSZXN0cnVjdHVyZWQiLCJzZXRFeHBhbmRlZFJlc3RydWN0dXJlZCIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnQiLCJzeCIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJwYWRkaW5nVG9wIiwibWFwIiwiaGVhZGluZyIsImluZGV4IiwiZXhwYW5kZWQiLCJpc0RyYWdnYWJsZSIsInNldEV4cGFuZGVkIiwic2V0QWxsSGVhZGluZ3MiLCJpc0Ryb3BwYWJsZSIsImZvbnRTdHlsZSIsInBhZGRpbmdCb3R0b20iLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiRHJvcHBhYmxlQ29udGFpbmVyIiwic2hvd0luZm8iLCJsZW5ndGgiLCJhbGxIZWFkaW5ncyIsInNob3J0IiwiZHJvcEluZGV4IiwiaXNPdmVyIiwiZHJvcCIsImFjY2VwdCIsImRyYWdnZWRJdGVtIiwicHJldiIsImZpbmQiLCJoIiwicmFuZG9tS2V5IiwibmV3SGVhZGluZ3MiLCJkcmFnZ2VkSW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY29sbGVjdCIsIm1vbml0b3IiLCJkcm9wUmVmIiwicmVmIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DraggableStructure.tsx\n"));

/***/ })

});