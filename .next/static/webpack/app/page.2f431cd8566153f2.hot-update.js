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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DraggableStructure: function() { return /* binding */ DraggableStructure; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _SortableAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortableAccordion */ \"(app-pages-browser)/./src/components/SortableAccordion.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst DraggableStructure = (param)=>{\n    let { structure } = param;\n    _s();\n    const [restructured, setRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedOg, setExpandedOg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedRestructured, setExpandedRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            variant: \"h4\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontWeight: \"bold\"\n                            },\n                            children: \"Table of Contents\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        structure.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_2__.SortableAccordion, {\n                                heading: heading,\n                                expanded: expandedOg,\n                                isDraggable: true,\n                                setExpanded: setExpandedOg,\n                                setAllHeadings: setRestructured,\n                                isDroppable: false\n                            }, index, false, {\n                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            variant: \"h6\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontStyle: \"italic\"\n                            },\n                            children: \"Drag and drop headings here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                border: \"2px dashed #ccc\",\n                                padding: \"16px\",\n                                borderRadius: \"8px\"\n                            },\n                            children: [\n                                restructured.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_2__.SortableAccordion, {\n                                                heading: heading,\n                                                expanded: expandedRestructured,\n                                                isDraggable: true,\n                                                setExpanded: setExpandedRestructured,\n                                                setAllHeadings: setRestructured,\n                                                isDroppable: true\n                                            }, index, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                                setAllHeadings: setRestructured,\n                                                showInfo: restructured.length === 0,\n                                                allHeadings: restructured,\n                                                short: true,\n                                                dropIndex: index + 1\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true)),\n                                restructured.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                    setAllHeadings: setRestructured,\n                                    showInfo: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DraggableStructure, \"c3PxwuBQ++k/50MG709aYSdQbDs=\");\n_c = DraggableStructure;\nconst DroppableContainer = (param)=>{\n    let { setAllHeadings, showInfo, allHeadings, short, dropIndex } = param;\n    _s1();\n    const [{ isOver }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop)({\n        accept: \"HEADING\",\n        drop: (draggedItem)=>{\n            setAllHeadings((prev)=>{\n                if (showInfo || !(allHeadings === null || allHeadings === void 0 ? void 0 : allHeadings.find((h)=>h.randomKey === draggedItem.randomKey))) {\n                    const newHeadings = [\n                        ...prev,\n                        draggedItem\n                    ];\n                    return newHeadings;\n                } else {\n                    const newHeadings = [\n                        ...prev\n                    ];\n                    const draggedIndex = newHeadings.findIndex((h)=>h.randomKey === draggedItem.randomKey);\n                    newHeadings.splice(draggedIndex, 1);\n                    if (dropIndex !== undefined) {\n                        newHeadings.splice(dropIndex, 0, draggedItem);\n                    } else {\n                        newHeadings.push(draggedItem);\n                    }\n                    return newHeadings;\n                }\n            });\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    const dropRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    drop(dropRef);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        ref: dropRef,\n        sx: {\n            height: short ? \"10px\" : \"100px\",\n            backgroundColor: isOver ? \"lightGreen\" : \"white\",\n            borderRadius: \"8px\",\n            marginTop: \"8px\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            transition: \"background-color 0.3s\",\n            boxShadow: isOver ? \"0px 4px 8px rgba(0,0,0,0.2)\" : \"none\"\n        },\n        children: !showInfo ? undefined : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            variant: \"body2\",\n            sx: {\n                color: \"gray\"\n            },\n            children: \"Drop here to start rearranging\"\n        }, void 0, false, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 145,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(DroppableContainer, \"kptFXlWE+TpNM97QpVqNJoqGO08=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop\n    ];\n});\n_c1 = DroppableContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"DraggableStructure\");\n$RefreshReg$(_c1, \"DroppableContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZVN0cnVjdHVyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUVoQjtBQUNuQjtBQUNvQjtBQVFoRCxNQUFNTSxxQkFBbUQ7UUFBQyxFQUMvREMsU0FBUyxFQUNWOztJQUNDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFZLEVBQUU7SUFDOUQsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFXLEVBQUU7SUFDekQsTUFBTSxDQUFDVyxzQkFBc0JDLHdCQUF3QixHQUFHWiwrQ0FBUUEsQ0FBVyxFQUFFO0lBRzdFLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWiwwRkFBVUE7NEJBQUNhLFNBQVE7NEJBQUtDLElBQUk7Z0NBQUVDLFdBQVc7Z0NBQVVDLFlBQVk7NEJBQU87c0NBQUc7Ozs7Ozt3QkFHekVaLFVBQVVhLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdkIsOERBQUNqQixpRUFBaUJBO2dDQUVoQmdCLFNBQVNBO2dDQUNURSxVQUFVYjtnQ0FDVmMsV0FBVztnQ0FDWEMsYUFBYWQ7Z0NBQ2JlLGdCQUFnQmpCO2dDQUNoQmtCLGFBQWE7K0JBTlJMOzs7Ozs7Ozs7Ozs4QkFVWCw4REFBQ1I7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWiwwRkFBVUE7NEJBQUNhLFNBQVE7NEJBQUtDLElBQUk7Z0NBQUVDLFdBQVc7Z0NBQVVVLFdBQVc7NEJBQVM7c0NBQUc7Ozs7OztzQ0FLM0UsOERBQUMxQiwwRkFBR0E7NEJBQUNlLElBQUk7Z0NBQUVZLFFBQVE7Z0NBQW1CQyxTQUFTO2dDQUFRQyxjQUFjOzRCQUFNOztnQ0FDeEV2QixhQUFhWSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQzFCOzswREFDRSw4REFBQ2pCLGlFQUFpQkE7Z0RBRWhCZ0IsU0FBU0E7Z0RBQ1RFLFVBQVVYO2dEQUNWWSxhQUFhO2dEQUNiQyxhQUFhWjtnREFDYmEsZ0JBQWdCakI7Z0RBQ2hCa0IsYUFBYTsrQ0FOUkw7Ozs7OzBEQVFQLDhEQUFDVTtnREFDQ04sZ0JBQWdCakI7Z0RBQ2hCd0IsVUFBVXpCLGFBQWEwQixNQUFNLEtBQUs7Z0RBQ2xDQyxhQUFhM0I7Z0RBQ2I0QixLQUFLO2dEQUNMQyxXQUFXZixRQUFROzs7Ozs7OztnQ0FNeEJkLGFBQWEwQixNQUFNLEtBQUssa0JBQ3ZCLDhEQUFDRjtvQ0FBbUJOLGdCQUFnQmpCO29DQUFpQndCLFFBQVE7Ozs7O2dEQUMzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCLEVBQUM7R0FqRVkzQjtLQUFBQTtBQW9FYixNQUFNMEIscUJBTUQ7UUFBQyxFQUFFTixjQUFjLEVBQUVPLFFBQVEsRUFBRUUsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRTs7SUFDL0QsTUFBTSxDQUFDLEVBQUVDLE1BQU0sRUFBRSxFQUFFQyxLQUFLLEdBQUduQyxrREFBT0EsQ0FBQztRQUNqQ29DLFFBQVE7UUFDUkQsTUFBTSxDQUFDRTtZQUNMZixlQUFlLENBQUNnQjtnQkFDZCxJQUNFVCxZQUNBLEVBQUNFLHdCQUFBQSxrQ0FBQUEsWUFBYVEsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLFNBQVMsS0FBS0osWUFBWUksU0FBUyxJQUMvRDtvQkFDQSxNQUFNQyxjQUFjOzJCQUFJSjt3QkFBTUQ7cUJBQVk7b0JBQzFDLE9BQU9LO2dCQUNULE9BQU87b0JBQ0wsTUFBTUEsY0FBYzsyQkFBSUo7cUJBQUs7b0JBQzdCLE1BQU1LLGVBQWVELFlBQVlFLFNBQVMsQ0FDeEMsQ0FBQ0osSUFBTUEsRUFBRUMsU0FBUyxLQUFLSixZQUFZSSxTQUFTO29CQUk5Q0MsWUFBWUcsTUFBTSxDQUFDRixjQUFjO29CQUNqQyxJQUFJVixjQUFjYSxXQUFXO3dCQUMzQkosWUFBWUcsTUFBTSxDQUFDWixXQUFXLEdBQUdJO29CQUNuQyxPQUFPO3dCQUNMSyxZQUFZSyxJQUFJLENBQUNWO29CQUNuQjtvQkFHQSxPQUFPSztnQkFDVDtZQUNGO1FBQ0Y7UUFDQU0sU0FBUyxDQUFDQyxVQUFhO2dCQUNyQmYsUUFBUWUsUUFBUWYsTUFBTTtZQUN4QjtJQUNGO0lBR0EsTUFBTWdCLFVBQVV0RCw2Q0FBTUEsQ0FBQztJQUd2QnVDLEtBQUtlO0lBR0wscUJBQ0UsOERBQUNwRCwwRkFBR0E7UUFDRnFELEtBQUtEO1FBQ0xyQyxJQUFJO1lBQ0Z1QyxRQUFRcEIsUUFBUSxTQUFTO1lBQ3pCcUIsaUJBQWlCbkIsU0FBUyxlQUFlO1lBQ3pDUCxjQUFjO1lBQ2QyQixXQUFXO1lBQ1hDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsV0FBV3pCLFNBQVMsZ0NBQWdDO1FBQ3REO2tCQUVDLENBQUNMLFdBQVdpQiwwQkFDWCw4REFBQy9DLDBGQUFVQTtZQUFDYSxTQUFRO1lBQVFDLElBQUk7Z0JBQUUrQyxPQUFPO1lBQU87c0JBQUc7Ozs7Ozs7Ozs7O0FBTTNEO0lBdEVNaEM7O1FBT3VCNUIsOENBQU9BOzs7TUFQOUI0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EcmFnZ2FibGVTdHJ1Y3R1cmUudHN4PzQ5MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzcGF0Y2gsIEZDLCBTZXRTdGF0ZUFjdGlvbiwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSBcIi4uL3V0aWxzL3BhcnNlRG9jdW1lbnRcIlxuaW1wb3J0IHsgQm94LCBHcmlkMiwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcbmltcG9ydCB7IHVzZURyb3AgfSBmcm9tIFwicmVhY3QtZG5kXCJcbmltcG9ydCB7IFNvcnRhYmxlQWNjb3JkaW9uIH0gZnJvbSBcIi4vU29ydGFibGVBY2NvcmRpb25cIlxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ2dhYmxlSGVhZGluZyBleHRlbmRzIEhlYWRpbmcge1xuICBwYXJlbnQ/OiBzdHJpbmcgfCBudWxsIC8vIFRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudCBoZWFkaW5nIGZvciBuZXN0ZWQgc3RydWN0dXJlc1xufVxuXG5cbmV4cG9ydCBjb25zdCBEcmFnZ2FibGVTdHJ1Y3R1cmU6IEZDPHsgc3RydWN0dXJlOiBIZWFkaW5nW10gfT4gPSAoe1xuICBzdHJ1Y3R1cmUsXG59KSA9PiB7XG4gIGNvbnN0IFtyZXN0cnVjdHVyZWQsIHNldFJlc3RydWN0dXJlZF0gPSB1c2VTdGF0ZTxIZWFkaW5nW10+KFtdKVxuICBjb25zdCBbZXhwYW5kZWRPZywgc2V0RXhwYW5kZWRPZ10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gIGNvbnN0IFtleHBhbmRlZFJlc3RydWN0dXJlZCwgc2V0RXhwYW5kZWRSZXN0cnVjdHVyZWRdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBcIiA+XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBzeD17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PlxuICAgICAgICAgICAgVGFibGUgb2YgQ29udGVudHNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAge3N0cnVjdHVyZS5tYXAoKGhlYWRpbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U29ydGFibGVBY2NvcmRpb25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaGVhZGluZz17aGVhZGluZ31cbiAgICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkT2d9XG4gICAgICAgICAgICAgIGlzRHJhZ2dhYmxlXG4gICAgICAgICAgICAgIHNldEV4cGFuZGVkPXtzZXRFeHBhbmRlZE9nfVxuICAgICAgICAgICAgICBzZXRBbGxIZWFkaW5ncz17c2V0UmVzdHJ1Y3R1cmVkfVxuICAgICAgICAgICAgICBpc0Ryb3BwYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVwiICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgc3g9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIgfX0+XG4gICAgICAgICAgICBEcmFnIGFuZCBkcm9wIGhlYWRpbmdzIGhlcmVcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cblxuICAgICAgICAgIDxCb3ggc3g9e3sgYm9yZGVyOiBcIjJweCBkYXNoZWQgI2NjY1wiLCBwYWRkaW5nOiBcIjE2cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjhweFwiIH19PlxuICAgICAgICAgICAge3Jlc3RydWN0dXJlZC5tYXAoKGhlYWRpbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFNvcnRhYmxlQWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgaGVhZGluZz17aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIGlzRHJhZ2dhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgc2V0RXhwYW5kZWQ9e3NldEV4cGFuZGVkUmVzdHJ1Y3R1cmVkfVxuICAgICAgICAgICAgICAgICAgc2V0QWxsSGVhZGluZ3M9e3NldFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIGlzRHJvcHBhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPERyb3BwYWJsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgc2V0QWxsSGVhZGluZ3M9e3NldFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIHNob3dJbmZvPXtyZXN0cnVjdHVyZWQubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICAgICAgYWxsSGVhZGluZ3M9e3Jlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIHNob3J0XG4gICAgICAgICAgICAgICAgICBkcm9wSW5kZXg9e2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuXG5cbiAgICAgICAgICAgIHtyZXN0cnVjdHVyZWQubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8RHJvcHBhYmxlQ29udGFpbmVyIHNldEFsbEhlYWRpbmdzPXtzZXRSZXN0cnVjdHVyZWR9IHNob3dJbmZvIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IERyb3BwYWJsZUNvbnRhaW5lcjogRkM8e1xuICBzZXRBbGxIZWFkaW5nczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RHJhZ2dhYmxlSGVhZGluZ1tdPj5cbiAgc2hvd0luZm86IGJvb2xlYW5cbiAgYWxsSGVhZGluZ3M/OiBEcmFnZ2FibGVIZWFkaW5nW11cbiAgc2hvcnQ/OiBib29sZWFuXG4gIGRyb3BJbmRleD86IG51bWJlclxufT4gPSAoeyBzZXRBbGxIZWFkaW5ncywgc2hvd0luZm8sIGFsbEhlYWRpbmdzLCBzaG9ydCwgZHJvcEluZGV4IH0pID0+IHtcbiAgY29uc3QgW3sgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCh7XG4gICAgYWNjZXB0OiBcIkhFQURJTkdcIixcbiAgICBkcm9wOiAoZHJhZ2dlZEl0ZW06IERyYWdnYWJsZUhlYWRpbmcpID0+IHtcbiAgICAgIHNldEFsbEhlYWRpbmdzKChwcmV2KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzaG93SW5mbyB8fFxuICAgICAgICAgICFhbGxIZWFkaW5ncz8uZmluZCgoaCkgPT4gaC5yYW5kb21LZXkgPT09IGRyYWdnZWRJdGVtLnJhbmRvbUtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3SGVhZGluZ3MgPSBbLi4ucHJldiwgZHJhZ2dlZEl0ZW1dXG4gICAgICAgICAgcmV0dXJuIG5ld0hlYWRpbmdzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3SGVhZGluZ3MgPSBbLi4ucHJldl1cbiAgICAgICAgICBjb25zdCBkcmFnZ2VkSW5kZXggPSBuZXdIZWFkaW5ncy5maW5kSW5kZXgoXG4gICAgICAgICAgICAoaCkgPT4gaC5yYW5kb21LZXkgPT09IGRyYWdnZWRJdGVtLnJhbmRvbUtleVxuICAgICAgICAgIClcblxuXG4gICAgICAgICAgbmV3SGVhZGluZ3Muc3BsaWNlKGRyYWdnZWRJbmRleCwgMSlcbiAgICAgICAgICBpZiAoZHJvcEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0hlYWRpbmdzLnNwbGljZShkcm9wSW5kZXgsIDAsIGRyYWdnZWRJdGVtKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdIZWFkaW5ncy5wdXNoKGRyYWdnZWRJdGVtKVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgcmV0dXJuIG5ld0hlYWRpbmdzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcbiAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcbiAgICB9KSxcbiAgfSlcblxuXG4gIGNvbnN0IGRyb3BSZWYgPSB1c2VSZWYobnVsbClcblxuXG4gIGRyb3AoZHJvcFJlZilcblxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcmVmPXtkcm9wUmVmfVxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBzaG9ydCA/IFwiMTBweFwiIDogXCIxMDBweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzT3ZlciA/IFwibGlnaHRHcmVlblwiIDogXCJ3aGl0ZVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCI4cHhcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMC4zc1wiLFxuICAgICAgICBib3hTaGFkb3c6IGlzT3ZlciA/IFwiMHB4IDRweCA4cHggcmdiYSgwLDAsMCwwLjIpXCIgOiBcIm5vbmVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyFzaG93SW5mbyA/IHVuZGVmaW5lZCA6IChcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgY29sb3I6IFwiZ3JheVwiIH19PlxuICAgICAgICAgIERyb3AgaGVyZSB0byBzdGFydCByZWFycmFuZ2luZ1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJCb3giLCJUeXBvZ3JhcGh5IiwidXNlRHJvcCIsIlNvcnRhYmxlQWNjb3JkaW9uIiwiRHJhZ2dhYmxlU3RydWN0dXJlIiwic3RydWN0dXJlIiwicmVzdHJ1Y3R1cmVkIiwic2V0UmVzdHJ1Y3R1cmVkIiwiZXhwYW5kZWRPZyIsInNldEV4cGFuZGVkT2ciLCJleHBhbmRlZFJlc3RydWN0dXJlZCIsInNldEV4cGFuZGVkUmVzdHJ1Y3R1cmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudCIsInN4IiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsIm1hcCIsImhlYWRpbmciLCJpbmRleCIsImV4cGFuZGVkIiwiaXNEcmFnZ2FibGUiLCJzZXRFeHBhbmRlZCIsInNldEFsbEhlYWRpbmdzIiwiaXNEcm9wcGFibGUiLCJmb250U3R5bGUiLCJib3JkZXIiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiRHJvcHBhYmxlQ29udGFpbmVyIiwic2hvd0luZm8iLCJsZW5ndGgiLCJhbGxIZWFkaW5ncyIsInNob3J0IiwiZHJvcEluZGV4IiwiaXNPdmVyIiwiZHJvcCIsImFjY2VwdCIsImRyYWdnZWRJdGVtIiwicHJldiIsImZpbmQiLCJoIiwicmFuZG9tS2V5IiwibmV3SGVhZGluZ3MiLCJkcmFnZ2VkSW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY29sbGVjdCIsIm1vbml0b3IiLCJkcm9wUmVmIiwicmVmIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DraggableStructure.tsx\n"));

/***/ })

});