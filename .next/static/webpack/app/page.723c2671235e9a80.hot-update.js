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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DraggableStructure: function() { return /* binding */ DraggableStructure; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _SortableAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortableAccordion */ \"(app-pages-browser)/./src/components/SortableAccordion.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst DraggableStructure = (param)=>{\n    let { structure } = param;\n    _s();\n    const [restructured, setRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedOg, setExpandedOg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedRestructured, setExpandedRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            variant: \"h4\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontWeight: \"bold\"\n                            },\n                            children: \"Table of Contents\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        structure.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_2__.SortableAccordion, {\n                                heading: heading,\n                                expanded: expandedOg,\n                                isDraggable: true,\n                                setExpanded: setExpandedOg,\n                                setAllHeadings: setRestructured,\n                                isDroppable: false\n                            }, index, false, {\n                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[65%] \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            variant: \"h6\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontStyle: \"italic\",\n                                padd\n                            },\n                            children: \"Drag and drop headings here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                border: \"2px dashed #ccc\",\n                                padding: \"16px\",\n                                borderRadius: \"8px\",\n                                paddingTop: \"14px\"\n                            },\n                            children: [\n                                restructured.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_2__.SortableAccordion, {\n                                                heading: heading,\n                                                expanded: expandedRestructured,\n                                                isDraggable: true,\n                                                setExpanded: setExpandedRestructured,\n                                                setAllHeadings: setRestructured,\n                                                isDroppable: true\n                                            }, index, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                                setAllHeadings: setRestructured,\n                                                showInfo: restructured.length === 0,\n                                                allHeadings: restructured,\n                                                short: true,\n                                                dropIndex: index + 1\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true)),\n                                restructured.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                    setAllHeadings: setRestructured,\n                                    showInfo: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DraggableStructure, \"c3PxwuBQ++k/50MG709aYSdQbDs=\");\n_c = DraggableStructure;\nconst DroppableContainer = (param)=>{\n    let { setAllHeadings, showInfo, allHeadings, short, dropIndex } = param;\n    _s1();\n    const [{ isOver }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop)({\n        accept: \"HEADING\",\n        drop: (draggedItem)=>{\n            setAllHeadings((prev)=>{\n                if (showInfo || !(allHeadings === null || allHeadings === void 0 ? void 0 : allHeadings.find((h)=>h.randomKey === draggedItem.randomKey))) {\n                    const newHeadings = [\n                        ...prev,\n                        draggedItem\n                    ];\n                    return newHeadings;\n                } else {\n                    const newHeadings = [\n                        ...prev\n                    ];\n                    const draggedIndex = newHeadings.findIndex((h)=>h.randomKey === draggedItem.randomKey);\n                    newHeadings.splice(draggedIndex, 1);\n                    if (dropIndex !== undefined) {\n                        newHeadings.splice(dropIndex, 0, draggedItem);\n                    } else {\n                        newHeadings.push(draggedItem);\n                    }\n                    return newHeadings;\n                }\n            });\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    const dropRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    drop(dropRef);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        ref: dropRef,\n        sx: {\n            height: short ? \"10px\" : \"100px\",\n            backgroundColor: isOver ? \"lightGreen\" : \"white\",\n            borderRadius: \"8px\",\n            marginTop: \"8px\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            transition: \"background-color 0.3s\",\n            boxShadow: isOver ? \"0px 4px 8px rgba(0,0,0,0.2)\" : \"none\"\n        },\n        children: !showInfo ? undefined : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            variant: \"body2\",\n            sx: {\n                color: \"gray\"\n            },\n            children: \"Drop here to start rearranging\"\n        }, void 0, false, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 145,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(DroppableContainer, \"kptFXlWE+TpNM97QpVqNJoqGO08=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop\n    ];\n});\n_c1 = DroppableContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"DraggableStructure\");\n$RefreshReg$(_c1, \"DroppableContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZVN0cnVjdHVyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUVoQjtBQUNuQjtBQUNvQjtBQVFoRCxNQUFNTSxxQkFBbUQ7UUFBQyxFQUMvREMsU0FBUyxFQUNWOztJQUNDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFZLEVBQUU7SUFDOUQsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFXLEVBQUU7SUFDekQsTUFBTSxDQUFDVyxzQkFBc0JDLHdCQUF3QixHQUFHWiwrQ0FBUUEsQ0FBVyxFQUFFO0lBRzdFLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWiwwRkFBVUE7NEJBQUNhLFNBQVE7NEJBQUtDLElBQUk7Z0NBQUVDLFdBQVc7Z0NBQVVDLFlBQVk7NEJBQU87c0NBQUc7Ozs7Ozt3QkFHekVaLFVBQVVhLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdkIsOERBQUNqQixpRUFBaUJBO2dDQUVoQmdCLFNBQVNBO2dDQUNURSxVQUFVYjtnQ0FDVmMsV0FBVztnQ0FDWEMsYUFBYWQ7Z0NBQ2JlLGdCQUFnQmpCO2dDQUNoQmtCLGFBQWE7K0JBTlJMOzs7Ozs7Ozs7Ozs4QkFVWCw4REFBQ1I7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWiwwRkFBVUE7NEJBQUNhLFNBQVE7NEJBQUtDLElBQUk7Z0NBQUVDLFdBQVc7Z0NBQVVVLFdBQVc7Z0NBQVVDOzRCQUFLO3NDQUFHOzs7Ozs7c0NBS2pGLDhEQUFDM0IsMEZBQUdBOzRCQUFDZSxJQUFJO2dDQUFFYSxRQUFRO2dDQUFtQkMsU0FBUztnQ0FBUUMsY0FBYztnQ0FBUUMsWUFBVzs0QkFBTzs7Z0NBQzVGekIsYUFBYVksR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUMxQjs7MERBQ0UsOERBQUNqQixpRUFBaUJBO2dEQUVoQmdCLFNBQVNBO2dEQUNURSxVQUFVWDtnREFDVlksYUFBYTtnREFDYkMsYUFBYVo7Z0RBQ2JhLGdCQUFnQmpCO2dEQUNoQmtCLGFBQWE7K0NBTlJMOzs7OzswREFRUCw4REFBQ1k7Z0RBQ0NSLGdCQUFnQmpCO2dEQUNoQjBCLFVBQVUzQixhQUFhNEIsTUFBTSxLQUFLO2dEQUNsQ0MsYUFBYTdCO2dEQUNiOEIsS0FBSztnREFDTEMsV0FBV2pCLFFBQVE7Ozs7Ozs7O2dDQU14QmQsYUFBYTRCLE1BQU0sS0FBSyxrQkFDdkIsOERBQUNGO29DQUFtQlIsZ0JBQWdCakI7b0NBQWlCMEIsUUFBUTs7Ozs7Z0RBQzNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEIsRUFBQztHQWpFWTdCO0tBQUFBO0FBb0ViLE1BQU00QixxQkFNRDtRQUFDLEVBQUVSLGNBQWMsRUFBRVMsUUFBUSxFQUFFRSxXQUFXLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFOztJQUMvRCxNQUFNLENBQUMsRUFBRUMsTUFBTSxFQUFFLEVBQUVDLEtBQUssR0FBR3JDLGtEQUFPQSxDQUFDO1FBQ2pDc0MsUUFBUTtRQUNSRCxNQUFNLENBQUNFO1lBQ0xqQixlQUFlLENBQUNrQjtnQkFDZCxJQUNFVCxZQUNBLEVBQUNFLHdCQUFBQSxrQ0FBQUEsWUFBYVEsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLFNBQVMsS0FBS0osWUFBWUksU0FBUyxJQUMvRDtvQkFDQSxNQUFNQyxjQUFjOzJCQUFJSjt3QkFBTUQ7cUJBQVk7b0JBQzFDLE9BQU9LO2dCQUNULE9BQU87b0JBQ0wsTUFBTUEsY0FBYzsyQkFBSUo7cUJBQUs7b0JBQzdCLE1BQU1LLGVBQWVELFlBQVlFLFNBQVMsQ0FDeEMsQ0FBQ0osSUFBTUEsRUFBRUMsU0FBUyxLQUFLSixZQUFZSSxTQUFTO29CQUk5Q0MsWUFBWUcsTUFBTSxDQUFDRixjQUFjO29CQUNqQyxJQUFJVixjQUFjYSxXQUFXO3dCQUMzQkosWUFBWUcsTUFBTSxDQUFDWixXQUFXLEdBQUdJO29CQUNuQyxPQUFPO3dCQUNMSyxZQUFZSyxJQUFJLENBQUNWO29CQUNuQjtvQkFHQSxPQUFPSztnQkFDVDtZQUNGO1FBQ0Y7UUFDQU0sU0FBUyxDQUFDQyxVQUFhO2dCQUNyQmYsUUFBUWUsUUFBUWYsTUFBTTtZQUN4QjtJQUNGO0lBR0EsTUFBTWdCLFVBQVV4RCw2Q0FBTUEsQ0FBQztJQUd2QnlDLEtBQUtlO0lBR0wscUJBQ0UsOERBQUN0RCwwRkFBR0E7UUFDRnVELEtBQUtEO1FBQ0x2QyxJQUFJO1lBQ0Z5QyxRQUFRcEIsUUFBUSxTQUFTO1lBQ3pCcUIsaUJBQWlCbkIsU0FBUyxlQUFlO1lBQ3pDUixjQUFjO1lBQ2Q0QixXQUFXO1lBQ1hDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsV0FBV3pCLFNBQVMsZ0NBQWdDO1FBQ3REO2tCQUVDLENBQUNMLFdBQVdpQiwwQkFDWCw4REFBQ2pELDBGQUFVQTtZQUFDYSxTQUFRO1lBQVFDLElBQUk7Z0JBQUVpRCxPQUFPO1lBQU87c0JBQUc7Ozs7Ozs7Ozs7O0FBTTNEO0lBdEVNaEM7O1FBT3VCOUIsOENBQU9BOzs7TUFQOUI4QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EcmFnZ2FibGVTdHJ1Y3R1cmUudHN4PzQ5MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzcGF0Y2gsIEZDLCBTZXRTdGF0ZUFjdGlvbiwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSBcIi4uL3V0aWxzL3BhcnNlRG9jdW1lbnRcIlxuaW1wb3J0IHsgQm94LCBHcmlkMiwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcbmltcG9ydCB7IHVzZURyb3AgfSBmcm9tIFwicmVhY3QtZG5kXCJcbmltcG9ydCB7IFNvcnRhYmxlQWNjb3JkaW9uIH0gZnJvbSBcIi4vU29ydGFibGVBY2NvcmRpb25cIlxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ2dhYmxlSGVhZGluZyBleHRlbmRzIEhlYWRpbmcge1xuICBwYXJlbnQ/OiBzdHJpbmcgfCBudWxsIC8vIFRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudCBoZWFkaW5nIGZvciBuZXN0ZWQgc3RydWN0dXJlc1xufVxuXG5cbmV4cG9ydCBjb25zdCBEcmFnZ2FibGVTdHJ1Y3R1cmU6IEZDPHsgc3RydWN0dXJlOiBIZWFkaW5nW10gfT4gPSAoe1xuICBzdHJ1Y3R1cmUsXG59KSA9PiB7XG4gIGNvbnN0IFtyZXN0cnVjdHVyZWQsIHNldFJlc3RydWN0dXJlZF0gPSB1c2VTdGF0ZTxIZWFkaW5nW10+KFtdKVxuICBjb25zdCBbZXhwYW5kZWRPZywgc2V0RXhwYW5kZWRPZ10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtleHBhbmRlZFJlc3RydWN0dXJlZCwgc2V0RXhwYW5kZWRSZXN0cnVjdHVyZWRdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBcIiA+XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBzeD17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlxuICAgICAgICAgICAgVGFibGUgb2YgQ29udGVudHNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAge3N0cnVjdHVyZS5tYXAoKGhlYWRpbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U29ydGFibGVBY2NvcmRpb25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaGVhZGluZz17aGVhZGluZ31cbiAgICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkT2d9XG4gICAgICAgICAgICAgIGlzRHJhZ2dhYmxlXG4gICAgICAgICAgICAgIHNldEV4cGFuZGVkPXtzZXRFeHBhbmRlZE9nfVxuICAgICAgICAgICAgICBzZXRBbGxIZWFkaW5ncz17c2V0UmVzdHJ1Y3R1cmVkfVxuICAgICAgICAgICAgICBpc0Ryb3BwYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs2NSVdIFwiICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIsIHBhZGQgfX0+XG4gICAgICAgICAgICBEcmFnIGFuZCBkcm9wIGhlYWRpbmdzIGhlcmVcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cblxuICAgICAgICAgIDxCb3ggc3g9e3sgYm9yZGVyOiBcIjJweCBkYXNoZWQgI2NjY1wiLCBwYWRkaW5nOiBcIjE2cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjhweFwiICwgcGFkZGluZ1RvcDpcIjE0cHhcIiB9fT5cbiAgICAgICAgICAgIHtyZXN0cnVjdHVyZWQubWFwKChoZWFkaW5nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxTb3J0YWJsZUFjY29yZGlvblxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e2hlYWRpbmd9XG4gICAgICAgICAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWRSZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgICAgICBpc0RyYWdnYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkPXtzZXRFeHBhbmRlZFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIHNldEFsbEhlYWRpbmdzPXtzZXRSZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgICAgICBpc0Ryb3BwYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxEcm9wcGFibGVDb250YWluZXJcbiAgICAgICAgICAgICAgICAgIHNldEFsbEhlYWRpbmdzPXtzZXRSZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgICAgICBzaG93SW5mbz17cmVzdHJ1Y3R1cmVkLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgIGFsbEhlYWRpbmdzPXtyZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgICAgICBzaG9ydFxuICAgICAgICAgICAgICAgICAgZHJvcEluZGV4PXtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApKX1cblxuXG4gICAgICAgICAgICB7cmVzdHJ1Y3R1cmVkLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPERyb3BwYWJsZUNvbnRhaW5lciBzZXRBbGxIZWFkaW5ncz17c2V0UmVzdHJ1Y3R1cmVkfSBzaG93SW5mbyAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBEcm9wcGFibGVDb250YWluZXI6IEZDPHtcbiAgc2V0QWxsSGVhZGluZ3M6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPERyYWdnYWJsZUhlYWRpbmdbXT4+XG4gIHNob3dJbmZvOiBib29sZWFuXG4gIGFsbEhlYWRpbmdzPzogRHJhZ2dhYmxlSGVhZGluZ1tdXG4gIHNob3J0PzogYm9vbGVhblxuICBkcm9wSW5kZXg/OiBudW1iZXJcbn0+ID0gKHsgc2V0QWxsSGVhZGluZ3MsIHNob3dJbmZvLCBhbGxIZWFkaW5ncywgc2hvcnQsIGRyb3BJbmRleCB9KSA9PiB7XG4gIGNvbnN0IFt7IGlzT3ZlciB9LCBkcm9wXSA9IHVzZURyb3Aoe1xuICAgIGFjY2VwdDogXCJIRUFESU5HXCIsXG4gICAgZHJvcDogKGRyYWdnZWRJdGVtOiBEcmFnZ2FibGVIZWFkaW5nKSA9PiB7XG4gICAgICBzZXRBbGxIZWFkaW5ncygocHJldikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2hvd0luZm8gfHxcbiAgICAgICAgICAhYWxsSGVhZGluZ3M/LmZpbmQoKGgpID0+IGgucmFuZG9tS2V5ID09PSBkcmFnZ2VkSXRlbS5yYW5kb21LZXkpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmdzID0gWy4uLnByZXYsIGRyYWdnZWRJdGVtXVxuICAgICAgICAgIHJldHVybiBuZXdIZWFkaW5nc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5ld0hlYWRpbmdzID0gWy4uLnByZXZdXG4gICAgICAgICAgY29uc3QgZHJhZ2dlZEluZGV4ID0gbmV3SGVhZGluZ3MuZmluZEluZGV4KFxuICAgICAgICAgICAgKGgpID0+IGgucmFuZG9tS2V5ID09PSBkcmFnZ2VkSXRlbS5yYW5kb21LZXlcbiAgICAgICAgICApXG5cblxuICAgICAgICAgIG5ld0hlYWRpbmdzLnNwbGljZShkcmFnZ2VkSW5kZXgsIDEpXG4gICAgICAgICAgaWYgKGRyb3BJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdIZWFkaW5ncy5zcGxpY2UoZHJvcEluZGV4LCAwLCBkcmFnZ2VkSXRlbSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SGVhZGluZ3MucHVzaChkcmFnZ2VkSXRlbSlcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIHJldHVybiBuZXdIZWFkaW5nc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XG4gICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXG4gICAgfSksXG4gIH0pXG5cblxuICBjb25zdCBkcm9wUmVmID0gdXNlUmVmKG51bGwpXG5cblxuICBkcm9wKGRyb3BSZWYpXG5cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHJlZj17ZHJvcFJlZn1cbiAgICAgIHN4PXt7XG4gICAgICAgIGhlaWdodDogc2hvcnQgPyBcIjEwcHhcIiA6IFwiMTAwcHhcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc092ZXIgPyBcImxpZ2h0R3JlZW5cIiA6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiOHB4XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDAuM3NcIixcbiAgICAgICAgYm94U2hhZG93OiBpc092ZXIgPyBcIjBweCA0cHggOHB4IHJnYmEoMCwwLDAsMC4yKVwiIDogXCJub25lXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHshc2hvd0luZm8gPyB1bmRlZmluZWQgOiAoXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IGNvbG9yOiBcImdyYXlcIiB9fT5cbiAgICAgICAgICBEcm9wIGhlcmUgdG8gc3RhcnQgcmVhcnJhbmdpbmdcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiQm94IiwiVHlwb2dyYXBoeSIsInVzZURyb3AiLCJTb3J0YWJsZUFjY29yZGlvbiIsIkRyYWdnYWJsZVN0cnVjdHVyZSIsInN0cnVjdHVyZSIsInJlc3RydWN0dXJlZCIsInNldFJlc3RydWN0dXJlZCIsImV4cGFuZGVkT2ciLCJzZXRFeHBhbmRlZE9nIiwiZXhwYW5kZWRSZXN0cnVjdHVyZWQiLCJzZXRFeHBhbmRlZFJlc3RydWN0dXJlZCIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnQiLCJzeCIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJtYXAiLCJoZWFkaW5nIiwiaW5kZXgiLCJleHBhbmRlZCIsImlzRHJhZ2dhYmxlIiwic2V0RXhwYW5kZWQiLCJzZXRBbGxIZWFkaW5ncyIsImlzRHJvcHBhYmxlIiwiZm9udFN0eWxlIiwicGFkZCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nVG9wIiwiRHJvcHBhYmxlQ29udGFpbmVyIiwic2hvd0luZm8iLCJsZW5ndGgiLCJhbGxIZWFkaW5ncyIsInNob3J0IiwiZHJvcEluZGV4IiwiaXNPdmVyIiwiZHJvcCIsImFjY2VwdCIsImRyYWdnZWRJdGVtIiwicHJldiIsImZpbmQiLCJoIiwicmFuZG9tS2V5IiwibmV3SGVhZGluZ3MiLCJkcmFnZ2VkSW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY29sbGVjdCIsIm1vbml0b3IiLCJkcm9wUmVmIiwicmVmIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DraggableStructure.tsx\n"));

/***/ })

});