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

/***/ "./components/GymTracker.jsx":
/*!***********************************!*\
  !*** ./components/GymTracker.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar GymTracker = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), workouts = ref[0], setWorkouts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), date = ref1[0], setDate = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), workoutType = ref2[0], setWorkoutType = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), startingReps = ref3[0], setStartingReps = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), endingReps = ref4[0], setEndingReps = ref4[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        var newWorkout = {\n            id: Date.now(),\n            date: date,\n            workoutType: workoutType,\n            startingReps: startingReps,\n            endingReps: endingReps\n        };\n        setWorkouts((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(workouts).concat([\n            newWorkout\n        ]));\n        setDate(\"\");\n        setWorkoutType(\"\");\n        setStartingReps(\"\");\n        setEndingReps(\"\");\n    };\n    var handleDelete = function(id) {\n        var updatedWorkouts = workouts.filter(function(workout) {\n            return workout.id !== id;\n        });\n        setWorkouts(updatedWorkouts);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Gym Tracker - Weight Training\"\n            }, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600\",\n                    children: \"Add Workout\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold\",\n                        children: \"Workout Log:\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    workouts.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No workouts recorded yet.\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"list-disc pl-6\",\n                        children: workouts.map(function(workout) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"flex justify-between items-center mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"mr-4\",\n                                                children: workout.date\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"mr-4\",\n                                                children: workout.workoutType\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"\".concat(workout.startingReps, \" - \").concat(workout.endingReps)\n                                            }, void 0, false, {\n                                                fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-red-600 hover:text-red-800\",\n                                        onClick: function() {\n                                            return handleDelete(workout.id);\n                                        },\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, workout.id, true, {\n                                fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/makensonn.github.io/components/GymTracker.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(GymTracker, \"zmrPrqWW6w3BbGUX3j80NIyWG00=\");\n_c = GymTracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GymTracker);\nvar _c;\n$RefreshReg$(_c, \"GymTracker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDRCxLQUFHOzswREFDRiw4REFBQ2EsTUFBSTtnREFBQ1osU0FBUyxFQUFDLE1BQU07MERBQUVGLE9BQU8sQ0FBQ2xCLElBQUk7Ozs7O3FEQUFROzBEQUM1Qyw4REFBQ2dDLE1BQUk7Z0RBQUNaLFNBQVMsRUFBQyxNQUFNOzBEQUFFRixPQUFPLENBQUNoQixXQUFXOzs7OztxREFBUTswREFDbkQsOERBQUM4QixNQUFJOzBEQUFFLEVBQUMsQ0FBNEJkLE1BQWtCLENBQTVDQSxPQUFPLENBQUNkLFlBQVksRUFBQyxLQUFHLENBQXFCLFFBQW5CYyxPQUFPLENBQUNaLFVBQVUsQ0FBRTs7Ozs7cURBQVE7Ozs7Ozs2Q0FDNUQ7a0RBQ04sOERBQUNrQixRQUFNO3dDQUNMSixTQUFTLEVBQUMsaUNBQWlDO3dDQUMzQ2EsT0FBTyxFQUFFO21EQUFNbEIsWUFBWSxDQUFDRyxPQUFPLENBQUNOLEVBQUUsQ0FBQzt5Q0FBQTtrREFDeEMsUUFFRDs7Ozs7NkNBQVM7OytCQVhGTSxPQUFPLENBQUNOLEVBQUU7Ozs7cUNBWWQ7eUJBQ04sQ0FBQzs7Ozs7NkJBQ0M7Ozs7OztxQkFFSDs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBbEVLZixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFvRWhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HeW1UcmFja2VyLmpzeD9kZDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR3ltVHJhY2tlciA9ICgpID0+IHtcbiAgY29uc3QgW3dvcmtvdXRzLCBzZXRXb3Jrb3V0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3dvcmtvdXRUeXBlLCBzZXRXb3Jrb3V0VHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzdGFydGluZ1JlcHMsIHNldFN0YXJ0aW5nUmVwc10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbmRpbmdSZXBzLCBzZXRFbmRpbmdSZXBzXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdXb3Jrb3V0ID0ge1xuICAgICAgaWQ6IERhdGUubm93KCksIC8vIEFkZCBhIHVuaXF1ZSBJRCBmb3IgZWFjaCB3b3Jrb3V0IGVudHJ5XG4gICAgICBkYXRlLFxuICAgICAgd29ya291dFR5cGUsXG4gICAgICBzdGFydGluZ1JlcHMsXG4gICAgICBlbmRpbmdSZXBzLFxuICAgIH07XG4gICAgc2V0V29ya291dHMoWy4uLndvcmtvdXRzLCBuZXdXb3Jrb3V0XSk7XG4gICAgc2V0RGF0ZSgnJyk7XG4gICAgc2V0V29ya291dFR5cGUoJycpO1xuICAgIHNldFN0YXJ0aW5nUmVwcygnJyk7XG4gICAgc2V0RW5kaW5nUmVwcygnJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFdvcmtvdXRzID0gd29ya291dHMuZmlsdGVyKCh3b3Jrb3V0KSA9PiB3b3Jrb3V0LmlkICE9PSBpZCk7XG4gICAgc2V0V29ya291dHModXBkYXRlZFdvcmtvdXRzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXcteGwgbXgtYXV0b1wiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+R3ltIFRyYWNrZXIgLSBXZWlnaHQgVHJhaW5pbmc8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIHsvKiAuLi4gSW5wdXQgZmllbGRzIC4uLiAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIFdvcmtvdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPldvcmtvdXQgTG9nOjwvaDI+XG4gICAgICAgIHt3b3Jrb3V0cy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPHA+Tm8gd29ya291dHMgcmVjb3JkZWQgeWV0LjwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIHBsLTZcIj5cbiAgICAgICAgICAgIHt3b3Jrb3V0cy5tYXAoKHdvcmtvdXQpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17d29ya291dC5pZH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItNFwiPnt3b3Jrb3V0LmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItNFwiPnt3b3Jrb3V0LndvcmtvdXRUeXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntgJHt3b3Jrb3V0LnN0YXJ0aW5nUmVwc30gLSAke3dvcmtvdXQuZW5kaW5nUmVwc31gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgaG92ZXI6dGV4dC1yZWQtODAwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZSh3b3Jrb3V0LmlkKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEd5bVRyYWNrZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkd5bVRyYWNrZXIiLCJ3b3Jrb3V0cyIsInNldFdvcmtvdXRzIiwiZGF0ZSIsInNldERhdGUiLCJ3b3Jrb3V0VHlwZSIsInNldFdvcmtvdXRUeXBlIiwic3RhcnRpbmdSZXBzIiwic2V0U3RhcnRpbmdSZXBzIiwiZW5kaW5nUmVwcyIsInNldEVuZGluZ1JlcHMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJuZXdXb3Jrb3V0IiwiaWQiLCJEYXRlIiwibm93IiwiaGFuZGxlRGVsZXRlIiwidXBkYXRlZFdvcmtvdXRzIiwiZmlsdGVyIiwid29ya291dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiYnV0dG9uIiwidHlwZSIsImgyIiwibGVuZ3RoIiwicCIsInVsIiwibWFwIiwibGkiLCJzcGFuIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GymTracker.jsx\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Main */ \"./components/Main.jsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/About */ \"./components/About.jsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ \"./components/Projects.jsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.jsx\");\n/* harmony import */ var _components_GymTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GymTracker */ \"./components/GymTracker.jsx\");\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Makenson Noel's Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/pages/index.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"If you're looking for a motivated and dedicated software engineer, please don't hesitate to reach out.\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/pages/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/fav.png\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/makensonn.github.io/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/makensonn.github.io/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GymTracker__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspaces/makensonn.github.io/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/makensonn.github.io/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDUztBQUNFO0FBQ007QUFDRjtBQUNTO0FBRXJDLFNBQVNNLElBQUksR0FBRztJQUM3QixxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNQLGtEQUFJOztrQ0FDSCw4REFBQ1EsT0FBSztrQ0FBQywyQkFBeUI7Ozs7OzRCQUFRO2tDQUN4Qyw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBQyx3R0FBd0c7Ozs7OzRCQUFHO2tDQUM1SSw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxVQUFVOzs7Ozs0QkFBRzs7Ozs7O29CQUM5QjswQkFDVCw4REFBQ2Isd0RBQUk7Ozs7b0JBQUc7MEJBQ1IsOERBQUNDLHlEQUFLOzs7O29CQUFHOzBCQUNULDhEQUFDRyw4REFBYTs7OztvQkFBRzswQkFDakIsOERBQUNGLDREQUFROzs7O29CQUFHOzBCQUNaLDhEQUFDQywyREFBTzs7OztvQkFBRzs7Ozs7O1lBRUwsQ0FFUDtDQUNGO0FBakJ1QkUsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbidcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0J1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMnXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnXG5pbXBvcnQgR3ltV29ya291dExvZyBmcm9tICcuLi9jb21wb25lbnRzL0d5bVRyYWNrZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWFrZW5zb24gTm9lbCdzIFBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJJZiB5b3UncmUgbG9va2luZyBmb3IgYSBtb3RpdmF0ZWQgYW5kIGRlZGljYXRlZCBzb2Z0d2FyZSBlbmdpbmVlciwgcGxlYXNlIGRvbid0IGhlc2l0YXRlIHRvIHJlYWNoIG91dC5cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXYucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICA8TWFpbiAvPlxuICAgIDxBYm91dCAvPlxuICAgIDxHeW1Xb3Jrb3V0TG9nIC8+XG4gICAgPFByb2plY3RzIC8+XG4gICAgPENvbnRhY3QgLz5cbiAgXG4gICAgPC9kaXY+XG4gICBcbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJNYWluIiwiQWJvdXQiLCJQcm9qZWN0cyIsIkNvbnRhY3QiLCJHeW1Xb3Jrb3V0TG9nIiwiSG9tZSIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});