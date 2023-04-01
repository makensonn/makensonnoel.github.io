"use strict";
exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 7757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
;// CONCATENATED MODULE: ./public/assets/contact.png
/* harmony default export */ const contact = ({"src":"/_next/static/media/contact.cad7a430.png","height":912,"width":1216,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAM1BMVEVMaXHq7O3l5eX29/bPzs7g4OH09fXe397b29q0tLTj4uLHxMHW1tbb2trf3t7Y19d5e4I8hMinAAAAD3RSTlMADBYc/P0sTuX91/s88mIUevYuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVQImQXBBwIAEAwAsUOnVf9/rQRo7h1gR1U4tJCUOh3XfLn0YlOXnLmBYTbgAx8hATCezdVtAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./pages/contact.jsx









const titleStyle = "text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500";
const Contact = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "contact",
        className: "w-full lg:h-screen",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-[1240px] m-auto px-2 py-16 w-full ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: titleStyle,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "Contact"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "py-6"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid lg:grid-cols-5 gap-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "lg:p-4 h-full ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: "rounded-xl hover:scale-105 ease-in duration-300",
                                            src: contact,
                                            alt: "/"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "uppercase pt-8",
                                                children: "Connect With Me"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center justify-between py-4",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.linkedin.com/in/makensonnoel/",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedinIn, {})
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://github.com/makensonn",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {})
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://replit.com/@MakensonNoel",
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsFillPersonLinesFill, {})
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "p-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    action: "https://getform.io/f/7d94aa2b-bbf7-4996-83a6-43d6efb0412e",
                                    method: "POST",
                                    encType: "multipart/form-data",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "grid md:grid-cols-2 gap-4 w-full py-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        className: "uppercase text-sm py-2",
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        className: "border-2 rounded-lg p-3 flex border-gray-300",
                                                        type: "text",
                                                        name: "name"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col py-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "uppercase text-sm py-2",
                                                    children: "Email"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "border-2 rounded-lg p-3 flex border-gray-300",
                                                    type: "email",
                                                    name: "email"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col py-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "uppercase text-sm py-2",
                                                    children: "Message"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                    className: "border-2 rounded-lg p-3 border-gray-300",
                                                    rows: "10",
                                                    name: "message"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "w-full p-4 text-gray-100 mt-4",
                                            children: "Send Message"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center py-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(hi_.HiOutlineHome, {
                                    className: "text-[#0a192f]",
                                    size: 30
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const pages_contact = (Contact);


/***/ })

};
;