"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./public/assets/projects/portfolio.png":
/*!**********************************************!*\
  !*** ./public/assets/projects/portfolio.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/portfolio.ade858b9.png\",\"height\":1080,\"width\":1920,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio.ade858b9.png&w=8&q=70\"});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvYXNzZXRzL3Byb2plY3RzL3BvcnRmb2xpby5wbmcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLENBQUMsMktBQTJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9hc3NldHMvcHJvamVjdHMvcG9ydGZvbGlvLnBuZz80MzUxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9wb3J0Zm9saW8uYWRlODU4YjkucG5nXCIsXCJoZWlnaHRcIjoxMDgwLFwid2lkdGhcIjoxOTIwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZtZWRpYSUyRnBvcnRmb2xpby5hZGU4NThiOS5wbmcmdz04JnE9NzBcIn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/assets/projects/portfolio.png\n"));

/***/ }),

/***/ "./components/Projects.jsx":
/*!*********************************!*\
  !*** ./components/Projects.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _public_assets_projects_tictactoe_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/projects/tictactoe.png */ \"./public/assets/projects/tictactoe.png\");\n/* harmony import */ var _public_assets_projects_sudoku_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/assets/projects/sudoku.png */ \"./public/assets/projects/sudoku.png\");\n/* harmony import */ var _public_assets_projects_ecomm_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/projects/ecomm.png */ \"./public/assets/projects/ecomm.png\");\n/* harmony import */ var _public_assets_projects_art_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/projects/art.png */ \"./public/assets/projects/art.png\");\n/* harmony import */ var _public_assets_projects_dontforget_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/projects/dontforget.png */ \"./public/assets/projects/dontforget.png\");\n/* harmony import */ var _public_assets_projects_gym_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/projects/gym.png */ \"./public/assets/projects/gym.png\");\n/* harmony import */ var _public_assets_projects_cof_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/projects/cof.png */ \"./public/assets/projects/cof.png\");\n/* harmony import */ var _public_assets_projects_sc_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/assets/projects/sc.png */ \"./public/assets/projects/sc.png\");\n/* harmony import */ var _public_assets_projects_portfolio_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/assets/projects/portfolio.png */ \"./public/assets/projects/portfolio.png\");\n/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProjectItem */ \"./components/ProjectItem.jsx\");\n/* harmony import */ var _ProjectItems__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ProjectItems */ \"./components/ProjectItems.jsx\");\nvar _this = undefined;\n\n\n\n\n\n//Image\n //TicTacToe\n //ASL Hand Tracker\n //TicTacToe\\\n //Art\n //Dont forget\n //Gym\n //Cof\n //Speed Converter\n //TicTacToe\\\n//Source\nvar aslSource = \"https://github.com/makensonn/asl\"; //ASL Hand Tracker\nvar ticSource = \"https://github.com/makensonn/makensonn.github.io/blob/master/components/TicTacToe.jsx\"; //TicTacToe\nvar sudSource = \"https://github.com/makensonn/makensonn.github.io/blob/master/components/Sudoku.jsx\"; //Sudoku Solver\nvar ecommSource = \"/ecomm\"; //Ecommerce Site\n\n\nvar titleStyle = \"text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500\";\nvar gridOld = \"grid md:grid-cols-2 gap-8\";\nvar Projects = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects\",\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[1240px] mx-auto px-2 py-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: titleStyle,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 37\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 46\n                            }, _this),\n                            \"Projects\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"py-6\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid md:grid-cols-3 gap-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                title: \"Coding is Fun\",\n                                backgroundImg: _public_assets_projects_cof_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                                projectUrl: \"/ecomm\",\n                                sourceUrl: ecommSource,\n                                tech: \"JavaScript\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                title: \"Tic Tac Toe\",\n                                backgroundImg: _public_assets_projects_art_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                projectUrl: \"/tic\",\n                                sourceUrl: ticSource,\n                                tech: \"JavaScript\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                title: \"Sudoku Game\",\n                                backgroundImg: _public_assets_projects_gym_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                                projectUrl: \"/sud\",\n                                sourceUrl: sudSource,\n                                tech: \"JavaScript\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                title: \"E-Commerce\",\n                                backgroundImg: _public_assets_projects_dontforget_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                                projectUrl: \"/ecomm\",\n                                sourceUrl: ecommSource,\n                                tech: \"JavaScript\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                title: \"Tic Tac Toe\",\n                                backgroundImg: _public_assets_projects_sc_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                                projectUrl: \"/tic\",\n                                sourceUrl: ticSource,\n                                tech: \"JavaScript\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                title: \"Sudoku Game\",\n                                backgroundImg: _public_assets_projects_sudoku_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                projectUrl: \"/sud\",\n                                sourceUrl: sudSource,\n                                tech: \"JavaScript\"\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_15__.HiOutlineChevronDoubleUp, {\n                                className: \"text-[#0a192f]\",\n                                size: 30\n                            }, void 0, false, {\n                                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/makensonn.github.io/components/Projects.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxTQUFTLEVBQUMsMkJBQTJCOzBCQUN0Qyw0RUFBQ3ZCLGtEQUFJO29CQUFDK0IsSUFBSSxFQUFDLEdBQUc7OEJBQ1osNEVBQUNDLEdBQUM7a0NBQ0EsNEVBQUNYLEtBQUc7NEJBQUNFLFNBQVMsRUFBQyxnR0FBZ0c7c0NBQzdHLDRFQUFDckIscUVBQXdCO2dDQUN2QnFCLFNBQVMsRUFBQyxnQkFBZ0I7Z0NBQzFCVSxJQUFJLEVBQUUsRUFBRTs7Ozs7cUNBQ1I7Ozs7O2lDQUNFOzs7Ozs2QkFDSjs7Ozs7eUJBQ0M7Ozs7O3FCQUNIOzs7Ozs7YUFFSixDQUNOO0NBQ0g7QUFwRktiLEtBQUFBLFFBQVE7QUFzRmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzLmpzeD8xM2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGlPdXRsaW5lQ2hldnJvbkRvdWJsZVVwIH0gZnJvbSAncmVhY3QtaWNvbnMvaGknO1xuXG4vL0ltYWdlXG5pbXBvcnQgdGljSW1nIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvcHJvamVjdHMvdGljdGFjdG9lLnBuZyc7IC8vVGljVGFjVG9lXG5pbXBvcnQgc3VkSW1nIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvcHJvamVjdHMvc3Vkb2t1LnBuZyc7IC8vQVNMIEhhbmQgVHJhY2tlclxuaW1wb3J0IGVjb21tSW1nIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvcHJvamVjdHMvZWNvbW0ucG5nJzsgLy9UaWNUYWNUb2VcXFxuXG5pbXBvcnQgYXJ0SW1nIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvcHJvamVjdHMvYXJ0LnBuZyc7IC8vQXJ0XG5pbXBvcnQgZG9udGZvcmdldEltZyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3Byb2plY3RzL2RvbnRmb3JnZXQucG5nJzsgLy9Eb250IGZvcmdldFxuaW1wb3J0IGd5bUltZyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3Byb2plY3RzL2d5bS5wbmcnOyAvL0d5bVxuaW1wb3J0IGNvZkltZyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3Byb2plY3RzL2NvZi5wbmcnOyAvL0NvZlxuaW1wb3J0IHNjSW1nIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvcHJvamVjdHMvc2MucG5nJzsgLy9TcGVlZCBDb252ZXJ0ZXJcbmltcG9ydCBwb3J0Zm9saW9JbWcgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9wcm9qZWN0cy9wb3J0Zm9saW8ucG5nJzsgLy9UaWNUYWNUb2VcXFxuXG5cblxuLy9Tb3VyY2VcbmNvbnN0IGFzbFNvdXJjZSA9J2h0dHBzOi8vZ2l0aHViLmNvbS9tYWtlbnNvbm4vYXNsJzsgLy9BU0wgSGFuZCBUcmFja2VyXG5jb25zdCB0aWNTb3VyY2UgPSdodHRwczovL2dpdGh1Yi5jb20vbWFrZW5zb25uL21ha2Vuc29ubi5naXRodWIuaW8vYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9UaWNUYWNUb2UuanN4JzsgLy9UaWNUYWNUb2VcbmNvbnN0IHN1ZFNvdXJjZSA9J2h0dHBzOi8vZ2l0aHViLmNvbS9tYWtlbnNvbm4vbWFrZW5zb25uLmdpdGh1Yi5pby9ibG9iL21hc3Rlci9jb21wb25lbnRzL1N1ZG9rdS5qc3gnOyAvL1N1ZG9rdSBTb2x2ZXJcbmNvbnN0IGVjb21tU291cmNlID0nL2Vjb21tJzsgLy9FY29tbWVyY2UgU2l0ZVxuXG5pbXBvcnQgUHJvamVjdEl0ZW0gZnJvbSAnLi9Qcm9qZWN0SXRlbSc7XG5pbXBvcnQgUHJvamVjdEl0ZW1zIGZyb20gJy4vUHJvamVjdEl0ZW1zJztcblxuY29uc3QgdGl0bGVTdHlsZSA9ICd0ZXh0LTR4bCBmb250LWJvbGQgaW5saW5lIGJvcmRlci1iLTQgdGV4dC1bIzBhMTkyZl0gYm9yZGVyLXppbmMtNTAwJ1xuXG5jb25zdCBncmlkT2xkID0gJ2dyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTgnXG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J3Byb2plY3RzJyBjbGFzc05hbWU9J3ctZnVsbCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF4LXctWzEyNDBweF0gbXgtYXV0byBweC0yIHB5LTE2Jz5cbiAgICAgICAgPHAgY2xhc3NOYW1lID0ge3RpdGxlU3R5bGV9Pjxicj48L2JyPjxicj48L2JyPlByb2plY3RzPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3B5LTYnPjwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBtZDpncmlkLWNvbHMtMyBnYXAtOCc+XG5cbiAgICAgICAgICA8UHJvamVjdEl0ZW1cbiAgICAgICAgICAgIHRpdGxlPSdDb2RpbmcgaXMgRnVuJ1xuICAgICAgICAgICAgYmFja2dyb3VuZEltZz17Y29mSW1nfVxuICAgICAgICAgICAgcHJvamVjdFVybD0nL2Vjb21tJ1xuICAgICAgICAgICAgc291cmNlVXJsPXtlY29tbVNvdXJjZX1cbiAgICAgICAgICAgIHRlY2g9J0phdmFTY3JpcHQnXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxQcm9qZWN0SXRlbVxuICAgICAgICAgICAgdGl0bGU9J1RpYyBUYWMgVG9lJ1xuICAgICAgICAgICAgYmFja2dyb3VuZEltZz17YXJ0SW1nfVxuICAgICAgICAgICAgcHJvamVjdFVybD0nL3RpYydcbiAgICAgICAgICAgIHNvdXJjZVVybD17dGljU291cmNlfVxuICAgICAgICAgICAgdGVjaD0nSmF2YVNjcmlwdCdcbiAgICAgICAgICAvPiBcblxuICAgICAgICAgIDxQcm9qZWN0SXRlbVxuICAgICAgICAgICAgdGl0bGU9J1N1ZG9rdSBHYW1lJ1xuICAgICAgICAgICAgYmFja2dyb3VuZEltZz17Z3ltSW1nfVxuICAgICAgICAgICAgcHJvamVjdFVybD0nL3N1ZCdcbiAgICAgICAgICAgIHNvdXJjZVVybD17c3VkU291cmNlfVxuICAgICAgICAgICAgdGVjaD0nSmF2YVNjcmlwdCdcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFByb2plY3RJdGVtXG4gICAgICAgICAgICB0aXRsZT0nRS1Db21tZXJjZSdcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWc9e2RvbnRmb3JnZXRJbWd9XG4gICAgICAgICAgICBwcm9qZWN0VXJsPScvZWNvbW0nXG4gICAgICAgICAgICBzb3VyY2VVcmw9e2Vjb21tU291cmNlfVxuICAgICAgICAgICAgdGVjaD0nSmF2YVNjcmlwdCdcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFByb2plY3RJdGVtXG4gICAgICAgICAgICB0aXRsZT0nVGljIFRhYyBUb2UnXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1nPXtzY0ltZ31cbiAgICAgICAgICAgIHByb2plY3RVcmw9Jy90aWMnXG4gICAgICAgICAgICBzb3VyY2VVcmw9e3RpY1NvdXJjZX1cbiAgICAgICAgICAgIHRlY2g9J0phdmFTY3JpcHQnXG4gICAgICAgICAgLz4gXG5cbiAgICAgICAgICA8UHJvamVjdEl0ZW1cbiAgICAgICAgICAgIHRpdGxlPSdTdWRva3UgR2FtZSdcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWc9e3N1ZEltZ31cbiAgICAgICAgICAgIHByb2plY3RVcmw9Jy9zdWQnXG4gICAgICAgICAgICBzb3VyY2VVcmw9e3N1ZFNvdXJjZX1cbiAgICAgICAgICAgIHRlY2g9J0phdmFTY3JpcHQnXG4gICAgICAgICAgLz5cblxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICB7LyogIDxicj48L2JyPjxicj48L2JyPlxuXG4gICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9tYWtlbnNvbm4nIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtZnVsbCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICBWaWV3IE1vcmVcbiAgPC9hPiAqL31cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTY3JvbGwgVXAgQnV0dG9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgcHktMTInPlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwgc2hhZG93LWxnIHNoYWRvdy1ncmF5LTQwMCBwLTQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIGVhc2UtaW4gZHVyYXRpb24tMzAwJz5cbiAgICAgICAgICAgICAgICA8SGlPdXRsaW5lQ2hldnJvbkRvdWJsZVVwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtWyMwYTE5MmZdJ1xuICAgICAgICAgICAgICAgICAgc2l6ZT17MzB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvKiBCdXR0b24gRW5kcyBIZXJlICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJIaU91dGxpbmVDaGV2cm9uRG91YmxlVXAiLCJ0aWNJbWciLCJzdWRJbWciLCJlY29tbUltZyIsImFydEltZyIsImRvbnRmb3JnZXRJbWciLCJneW1JbWciLCJjb2ZJbWciLCJzY0ltZyIsInBvcnRmb2xpb0ltZyIsImFzbFNvdXJjZSIsInRpY1NvdXJjZSIsInN1ZFNvdXJjZSIsImVjb21tU291cmNlIiwiUHJvamVjdEl0ZW0iLCJQcm9qZWN0SXRlbXMiLCJ0aXRsZVN0eWxlIiwiZ3JpZE9sZCIsIlByb2plY3RzIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJwIiwiYnIiLCJ0aXRsZSIsImJhY2tncm91bmRJbWciLCJwcm9qZWN0VXJsIiwic291cmNlVXJsIiwidGVjaCIsImhyZWYiLCJhIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects.jsx\n"));

/***/ })

});