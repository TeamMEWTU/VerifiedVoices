"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/linkedin":
/*!***********************************************!*\
  !*** external "next-auth/providers/linkedin" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/linkedin");

/***/ }),

/***/ "next-auth/providers/reddit":
/*!*********************************************!*\
  !*** external "next-auth/providers/reddit" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/reddit");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_reddit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/reddit */ \"next-auth/providers/reddit\");\n/* harmony import */ var next_auth_providers_reddit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_reddit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_linkedin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/linkedin */ \"next-auth/providers/linkedin\");\n/* harmony import */ var next_auth_providers_linkedin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_linkedin__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        // Add as many providers as you like to this array\n        next_auth_providers_linkedin__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.LINKEDIN_CLIENT_ID,\n            clientSecret: process.env.LINKEDIN_CLIENT_SECRET\n        })\n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDSztBQUU1RCxpRUFBZUEsZ0RBQVFBLENBQUM7SUFDdEIsaURBQWlEO0lBQ2pERyxXQUFXO1FBQ1Qsa0RBQWtEO1FBQ2xERCxtRUFBZ0JBLENBQUM7WUFDZkUsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0I7WUFDeENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csc0JBQXNCO1FBQ2xEO0tBQ0Q7QUFFSCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgUmVkZGl0UHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9yZWRkaXQnXG5pbXBvcnQgTGlua2VkSW5Qcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9saW5rZWRpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gQWRkIGFzIG1hbnkgcHJvdmlkZXJzIGFzIHlvdSBsaWtlIHRvIHRoaXMgYXJyYXlcbiAgICBMaW5rZWRJblByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5MSU5LRURJTl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkxJTktFRElOX0NMSUVOVF9TRUNSRVRcbiAgICB9KVxuICBdLFxuICAvLyBBIGRhdGFiYXNlIGlzIG9wdGlvbmFsLCBidXQgcmVxdWlyZWQgdG8gcGVyc2lzdCBhY2NvdW50cyBpbiBhIGRhdGFiYXNlXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlJlZGRpdFByb3ZpZGVyIiwiTGlua2VkSW5Qcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkxJTktFRElOX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkxJTktFRElOX0NMSUVOVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();