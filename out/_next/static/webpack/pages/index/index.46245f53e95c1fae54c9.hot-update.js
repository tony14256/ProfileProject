webpackHotUpdate_N_E("pages/index/index",{

/***/ "./components/NavBar/index.tsx":
/*!*************************************!*\
  !*** ./components/NavBar/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ \"./components/NavBar/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jiankai-kuo/Documents/code/ProfileProject/components/NavBar/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  var title = props.title,\n      links = props.links;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])(),\n      pathname = _useRouter.pathname;\n\n  return __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavBar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, title), __jsx(\"div\", {\n    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Bar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, links.map(function (link, idx) {\n    var active = link.url === pathname ? _style_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active : '';\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      key: \"\".concat(link.text, \"-\").concat(idx),\n      href: link.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      className: active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 15\n      }\n    }, link.text));\n  })));\n};\n\n_s(Index, \"QpP2vYJstxsDz0K+Qwttl8PPVoY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIvaW5kZXgudHN4P2UwNDMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInRpdGxlIiwibGlua3MiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0eWxlIiwiTmF2QmFyIiwiVGl0bGUiLCJCYXIiLCJtYXAiLCJsaW5rIiwiaWR4IiwiYWN0aXZlIiwidXJsIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxLQUF5QixHQUFHLFNBQTVCQSxLQUE0QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNuQ0MsS0FEbUMsR0FDbEJELEtBRGtCLENBQ25DQyxLQURtQztBQUFBLE1BQzVCQyxLQUQ0QixHQUNsQkYsS0FEa0IsQ0FDNUJFLEtBRDRCOztBQUFBLG1CQUV0QkMsNkRBQVMsRUFGYTtBQUFBLE1BRW5DQyxRQUZtQyxjQUVuQ0EsUUFGbUM7O0FBSTNDLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHlEQUFLLENBQUNDLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUQseURBQUssQ0FBQ0UsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2Qk4sS0FBN0IsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFFSSx5REFBSyxDQUFDRyxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLEtBQUssQ0FBQ08sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3hCLFFBQU1DLE1BQU0sR0FBR0YsSUFBSSxDQUFDRyxHQUFMLEtBQWFULFFBQWIsR0FBd0JDLHlEQUFLLENBQUNPLE1BQTlCLEdBQXVDLEVBQXREO0FBQ0EsV0FDRSxNQUFDLGdEQUFEO0FBQU0sU0FBRyxZQUFLRixJQUFJLENBQUNJLElBQVYsY0FBa0JILEdBQWxCLENBQVQ7QUFBa0MsVUFBSSxFQUFFRCxJQUFJLENBQUNHLEdBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRUQsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVCRixJQUFJLENBQUNJLElBQTVCLENBREYsQ0FERjtBQUtELEdBUEEsQ0FESCxDQUZGLENBREY7QUFlRCxDQW5CRDs7R0FBTWYsSztVQUVpQkkscUQ7OztLQUZqQkosSztBQXFCU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmludGVyZmFjZSBJX05hdkJhciB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxpbmtzOiB7IHRleHQ6IHN0cmluZzsgdXJsOiBzdHJpbmcgfVtdO1xufVxuXG5jb25zdCBJbmRleDogUmVhY3QuRkM8SV9OYXZCYXI+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGxpbmtzIH0gPSBwcm9wcztcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuTmF2QmFyfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLlRpdGxlfT57dGl0bGV9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5CYXJ9PlxuICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpZHgpID0+IHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBsaW5rLnVybCA9PT0gcGF0aG5hbWUgPyBzdHlsZS5hY3RpdmUgOiAnJztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtgJHtsaW5rLnRleHR9LSR7aWR4fWB9IGhyZWY9e2xpbmsudXJsfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXthY3RpdmV9PntsaW5rLnRleHR9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar/index.tsx\n");

/***/ })

})