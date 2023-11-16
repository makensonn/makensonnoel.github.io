"use strict";
exports.id = 321;
exports.ids = [321];
exports.modules = {

/***/ 5321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialBoard = Array(9).fill("");
const TicTacToe = ()=>{
    const { 0: board , 1: setBoard  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialBoard);
    const { 0: currentPlayer , 1: setCurrentPlayer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("X");
    const { 0: winner , 1: setWinner  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentPlayer === "O" && !winner) {
            makeComputerMove();
        }
    }, [
        currentPlayer,
        winner
    ]);
    const handleCellClick = (index)=>{
        if (board[index] === "" && !winner && currentPlayer === "X") {
            const newBoard = [
                ...board
            ];
            newBoard[index] = currentPlayer;
            setBoard(newBoard);
            checkWinner(newBoard);
            setCurrentPlayer("O");
        }
    };
    const makeComputerMove = ()=>{
        const availableCells = board.reduce((acc, cell, index)=>cell === "" ? [
                ...acc,
                index
            ] : acc, []);
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const computerMove = availableCells[randomIndex];
        const newBoard = [
            ...board
        ];
        newBoard[computerMove] = currentPlayer;
        setBoard(newBoard);
        checkWinner(newBoard);
        setCurrentPlayer("X");
    };
    const checkWinner = (board)=>{
        const winningCombinations = [
            [
                0,
                1,
                2
            ],
            [
                3,
                4,
                5
            ],
            [
                6,
                7,
                8
            ],
            [
                0,
                3,
                6
            ],
            [
                1,
                4,
                7
            ],
            [
                2,
                5,
                8
            ],
            [
                0,
                4,
                8
            ],
            [
                2,
                4,
                6
            ], 
        ];
        for(let i = 0; i < winningCombinations.length; i++){
            const [a, b, c] = winningCombinations[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                return;
            }
        }
        if (!board.includes("")) {
            setWinner("draw");
        }
    };
    const resetGame = ()=>{
        setBoard(initialBoard);
        setCurrentPlayer("X");
        setWinner(null);
    };
    const renderCell = (index)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "cell bg-gray-200 border border-gray-300 text-4xl text-center cursor-pointer flex items-center justify-center",
            onClick: ()=>handleCellClick(index),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "block w-16 h-16",
                children: board[index]
            })
        }, index);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tic-tac-toe",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: " Tic Tac Toe"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "board grid grid-cols-3 gap-4 w-64 mx-auto mt-8",
                children: board.map((cell, index)=>renderCell(index))
            }),
            winner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "winner text-center text-xl font-bold mt-4",
                children: winner === "draw" ? "It's a draw!" : `Player ${winner} wins!`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "reset-button block mx-auto mt-4 px-4 py-2 rounded bg-blue-500 text-white",
                onClick: resetGame,
                children: "Reset Game"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicTacToe);


/***/ })

};
;