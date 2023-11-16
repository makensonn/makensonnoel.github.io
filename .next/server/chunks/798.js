"use strict";
exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 6634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ecomm.af472f2b.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAHlBMVEX////7+/v29vbQ0NDu7u6kpKTn5+e4uLjW1tbHx8fCOlYWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKElEQVQImRXJyQ0AIBDDQCd7AP03jPLzyADYgNg5Cul5pLrq1uZZsvgGgQBPqO/56wAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 8781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);



const Countdown = ()=>{
    const { 0: timeLeft , 1: setTimeLeft  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const countdownDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.add)(new Date(), {
            weeks: 1
        });
        const interval = setInterval(()=>{
            const now = new Date();
            const distance = countdownDate - now;
            const days = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInDays)(countdownDate, now);
            const hours = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInHours)(countdownDate, now) % 24;
            const minutes = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInMinutes)(countdownDate, now) % 60;
            const seconds = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInSeconds)(countdownDate, now) % 60;
            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft("Countdown expired");
            }
        }, 1000);
        return ()=>{
            clearInterval(interval);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-4xl font-bold mb-2",
                children: "Coming Soon"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-2xl font-medium",
                children: timeLeft
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countdown);


/***/ })

};
;