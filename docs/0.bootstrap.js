(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/museum.js":
/*!************************!*\
  !*** ../pkg/museum.js ***!
  \************************/
/*! exports provided: Cell, Board, __wbindgen_string_new, __wbg_log_61ea781bd002cc41, __wbindgen_object_drop_ref, __wbg_random_5af91a0f7daf1188, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./museum_bg.wasm */ \"../pkg/museum_bg.wasm\");\n/* harmony import */ var _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./museum_bg.js */ \"../pkg/museum_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Board\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_61ea781bd002cc41\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_log_61ea781bd002cc41\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_5af91a0f7daf1188\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_5af91a0f7daf1188\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/museum.js?");

/***/ }),

/***/ "../pkg/museum_bg.js":
/*!***************************!*\
  !*** ../pkg/museum_bg.js ***!
  \***************************/
/*! exports provided: Cell, Board, __wbindgen_string_new, __wbg_log_61ea781bd002cc41, __wbindgen_object_drop_ref, __wbg_random_5af91a0f7daf1188, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_61ea781bd002cc41\", function() { return __wbg_log_61ea781bd002cc41; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_5af91a0f7daf1188\", function() { return __wbg_random_5af91a0f7daf1188; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./museum_bg.wasm */ \"../pkg/museum_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n* Cell status.\n*/\nconst Cell = Object.freeze({\n/**\n* Dead cell.\n*/\nDead:0,\"0\":\"Dead\",\n/**\n* Living cell.\n*/\nAlive:1,\"1\":\"Alive\", });\n/**\n* Game board.\n*/\nclass Board {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Board.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_board_free\"](ptr);\n    }\n    /**\n    * Construct a new instance.\n    * @param {number} width\n    * @param {number} height\n    * @returns {Board}\n    */\n    static new(width, height) {\n        var ret = _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_new\"](width, height);\n        return Board.__wrap(ret);\n    }\n    /**\n    * Count the number of living cells.\n    * @returns {number}\n    */\n    num_alive() {\n        var ret = _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_num_alive\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * Tick forward a number of times.\n    * @param {number} ticks\n    */\n    tick_forward(ticks) {\n        _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_tick_forward\"](this.ptr, ticks);\n    }\n    /**\n    * Randomise the status of a cell.\n    * @param {number} x\n    */\n    randomise(x) {\n        _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_randomise\"](this.ptr, x);\n    }\n    /**\n    * Reference the array of cells as a pointer.\n    * @returns {number}\n    */\n    cells_ptr() {\n        var ret = _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_cells_ptr\"](this.ptr);\n        return ret;\n    }\n}\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_log_61ea781bd002cc41 = function(arg0) {\n    console.log(getObject(arg0));\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_random_5af91a0f7daf1188 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../web/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/museum_bg.js?");

/***/ }),

/***/ "../pkg/museum_bg.wasm":
/*!*****************************!*\
  !*** ../pkg/museum_bg.wasm ***!
  \*****************************/
/*! exports provided: memory, __wbg_board_free, board_new, board_num_alive, board_tick_forward, board_randomise, board_cells_ptr */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./museum_bg.js */ \"../pkg/museum_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/museum_bg.wasm?");

/***/ }),

/***/ "./drawing.js":
/*!********************!*\
  !*** ./drawing.js ***!
  \********************/
/*! exports provided: CELL_SIZE, draw_grid, draw_cells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CELL_SIZE\", function() { return CELL_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw_grid\", function() { return draw_grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw_cells\", function() { return draw_cells; });\n/// Drawn cell size.\nconst CELL_SIZE = 10; // [px]\n/// Grid colour.\nconst GRID_COL = \"#CCCCCC\";\n/// Dead cell colour.\nconst DEAD_COL = \"#FFFFFF\";\n/// Living cell colour.\nconst ALIVE_COL = \"#000000\";\n\n\n\n/// Draw the grid array.\nfunction draw_grid(ctx, width, height) {\n    ctx.beginPath();\n    ctx.strokeStyle = GRID_COL;\n\n    for (let j = 0; j <= height; ++j) {\n        ctx.moveTo(0, (j * (CELL_SIZE + 1)) + 1);\n        ctx.lineTo(((CELL_SIZE + 1) * width) + 1, (j * (CELL_SIZE + 1)) + 1);\n    }\n    for (let i = 0; i <= width; ++i) {\n        ctx.moveTo((i * (CELL_SIZE + 1)) + 1, 0);\n        ctx.lineTo((i * (CELL_SIZE + 1)) + 1, ((CELL_SIZE + 1) * height) + 1);\n    }\n\n    ctx.stroke();\n}\n\n/// Draw the cell array.\nfunction draw_cells(ctx, width, height, board, memory) {\n    const cells_ptr = board.cells_ptr();\n    const cells = new Uint8Array(memory.buffer, cells_ptr, (width * height));\n\n    ctx.beginPath();\n\n    for (let row = 0; row < height; ++row) {\n        for (let col = 0; col < width; ++col) {\n            const idx = (row * width) + col;\n\n            ctx.fillStyle = cells[idx] == 0 ?\n                DEAD_COL :\n                ALIVE_COL;\n\n            ctx.fillRect(\n                (col * (CELL_SIZE + 1)) + 1,\n                (row * (CELL_SIZE + 1)) + 1,\n                CELL_SIZE,\n                CELL_SIZE\n            );\n        }\n    }\n\n    ctx.stroke();\n}\n\n\n//# sourceURL=webpack:///./drawing.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var museum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! museum */ \"../pkg/museum.js\");\n/* harmony import */ var museum_museum_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! museum/museum_bg */ \"../pkg/museum_bg.wasm\");\n/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawing */ \"./drawing.js\");\n\n\n\n\n\n\n/// Canvas id.\nconst canvas = document.getElementById(\"main_canvas\");\n/// Drawing context.\nconst ctx = canvas.getContext('2d');\n\n\n\n/// Draw the grid array.\nfunction setup_new_grid(width, height) {\n    canvas.height = (_drawing__WEBPACK_IMPORTED_MODULE_2__[\"CELL_SIZE\"] + 1) * height + 1;\n    canvas.width = (_drawing__WEBPACK_IMPORTED_MODULE_2__[\"CELL_SIZE\"] + 1) * width + 1;\n\n    /// Main board.\n    const board = museum__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].new(width, height);\n    board.randomise(0.5);\n\n    Object(_drawing__WEBPACK_IMPORTED_MODULE_2__[\"draw_grid\"])(ctx, width, height);\n    Object(_drawing__WEBPACK_IMPORTED_MODULE_2__[\"draw_cells\"])(ctx, width, height, board, museum_museum_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"]);\n    console.log(\"num alive: \", board.num_alive());\n\n    return board;\n}\n\n/// Update the board and then draw it.\nfunction loop(timestamp) {\n    board.tick_forward(1);\n\n    Object(_drawing__WEBPACK_IMPORTED_MODULE_2__[\"draw_cells\"])(ctx, width, height, board, museum_museum_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"]);\n    console.log(\"num alive: \", board.num_alive());\n\n    window.requestAnimationFrame(loop)\n}\n\n\nlet width = 64;\nlet height = 64;\nlet board = setup_new_grid(width, height);\nwindow.requestAnimationFrame(loop)\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);