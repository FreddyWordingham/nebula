(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/museum.js":
/*!************************!*\
  !*** ../pkg/museum.js ***!
  \************************/
/*! exports provided: Board, __wbindgen_string_new, __wbg_log_61ea781bd002cc41, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./museum_bg.wasm */ \"../pkg/museum_bg.wasm\");\n/* harmony import */ var _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./museum_bg.js */ \"../pkg/museum_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Board\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_61ea781bd002cc41\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_log_61ea781bd002cc41\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _museum_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/museum.js?");

/***/ }),

/***/ "../pkg/museum_bg.js":
/*!***************************!*\
  !*** ../pkg/museum_bg.js ***!
  \***************************/
/*! exports provided: Board, __wbindgen_string_new, __wbg_log_61ea781bd002cc41, __wbindgen_object_drop_ref, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_61ea781bd002cc41\", function() { return __wbg_log_61ea781bd002cc41; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./museum_bg.wasm */ \"../pkg/museum_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n* Game board.\n*/\nclass Board {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Board.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_board_free\"](ptr);\n    }\n    /**\n    * Construct a new instance.\n    * @param {number} width\n    * @param {number} height\n    * @returns {Board}\n    */\n    static new(width, height) {\n        var ret = _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_new\"](width, height);\n        return Board.__wrap(ret);\n    }\n    /**\n    * Count the number of living cells.\n    * @returns {number}\n    */\n    occupation() {\n        var ret = _museum_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"board_occupation\"](this.ptr);\n        return ret >>> 0;\n    }\n}\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_log_61ea781bd002cc41 = function(arg0) {\n    console.log(getObject(arg0));\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../web/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/museum_bg.js?");

/***/ }),

/***/ "../pkg/museum_bg.wasm":
/*!*****************************!*\
  !*** ../pkg/museum_bg.wasm ***!
  \*****************************/
/*! exports provided: memory, __wbg_board_free, board_new, board_occupation */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./museum_bg.js */ \"../pkg/museum_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/museum_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var museum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! museum */ \"../pkg/museum.js\");\n/* harmony import */ var museum_museum_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! museum/museum_bg */ \"../pkg/museum_bg.wasm\");\n\n\n\n\n\n/// Main board.\n// const board = Board.new(DEFAULT_WIDTH, DEFAULT_HEIGHT);\nconst board = museum__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].new(64, 64);\n\n\n//# sourceURL=webpack:///./index.js?");

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