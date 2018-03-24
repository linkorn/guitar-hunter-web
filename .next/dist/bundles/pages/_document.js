module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Analytics/YandexMetrika.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/denisabrosimov/Documents/projects/guitar-hunter-web/components/Analytics/YandexMetrika.js";

/* eslint-disable */
var script = "(function (d, w, c) {\n  (w[c] = w[c] || []).push(function() {\n      try {\n          w.yaCounter48188183 = new Ya.Metrika({\n              id:48188183,\n              clickmap:true,\n              trackLinks:true,\n              accurateTrackBounce:true,\n              webvisor:true,\n              trackHash:true\n          });\n      } catch(e) { }\n  });\n\n  var n = d.getElementsByTagName(\"script\")[0],\n      s = d.createElement(\"script\"),\n      f = function () { n.parentNode.insertBefore(s, n); };\n  s.type = \"text/javascript\";\n  s.async = true;\n  s.src = \"https://mc.yandex.ru/metrika/watch.js\";\n\n  if (w.opera == \"[object Opera]\") {\n      d.addEventListener(\"DOMContentLoaded\", f, false);\n  } else { f(); }\n})(document, window, \"yandex_metrika_callbacks\");";

var noScript = "<div><img src=\"https://mc.yandex.ru/watch/48188183\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div>";

/* harmony default export */ __webpack_exports__["a"] = (function () {
    return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { key: "ss1", dangerouslySetInnerHTML: { __html: script }, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noscript", { key: "ss2", dangerouslySetInnerHTML: { __html: noScript }, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    })];
});

/***/ }),

/***/ "./components/Analytics/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__YandexMetrika__ = __webpack_require__("./components/Analytics/YandexMetrika.js");
var _jsxFileName = "/Users/denisabrosimov/Documents/projects/guitar-hunter-web/components/Analytics/index.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__YandexMetrika__["a" /* default */], { key: "a2", __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  });
});

/***/ }),

/***/ "./components/Favicon/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_theme__ = __webpack_require__("./shared/theme.js");
var _jsxFileName = "/Users/denisabrosimov/Documents/projects/guitar-hunter-web/components/Favicon/index.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/apple-touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/favicon-32x32.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/favicon-16x16.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "manifest", href: "/static/site.webmanifest", __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/safari-pinned-tab.svg",
    color: __WEBPACK_IMPORTED_MODULE_1__shared_theme__["a" /* colors */].background,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "msapplication-TileColor", content: __WEBPACK_IMPORTED_MODULE_1__shared_theme__["a" /* colors */].background, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "theme-color", content: __WEBPACK_IMPORTED_MODULE_1__shared_theme__["a" /* colors */].background, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })];
});

/***/ }),

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("next/document");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion_server__ = __webpack_require__("emotion-server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_emotion_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Analytics__ = __webpack_require__("./components/Analytics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Favicon__ = __webpack_require__("./components/Favicon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_text_json__ = __webpack_require__("./shared/text.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_text_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__shared_text_json__);
var _jsxFileName = '/Users/denisabrosimov/Documents/projects/guitar-hunter-web/pages/_document.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var MyDocument = function (_Document) {
  _inherits(MyDocument, _Document);

  _createClass(MyDocument, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var page = renderPage();
      var styles = Object(__WEBPACK_IMPORTED_MODULE_2_emotion_server__["extractCritical"])(page.html);
      return _extends({}, page, styles);
    }
  }]);

  function MyDocument(props) {
    _classCallCheck(this, MyDocument);

    var _this = _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).call(this, props));

    var __NEXT_DATA__ = props.__NEXT_DATA__,
        ids = props.ids;

    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
    return _this;
  }

  _createClass(MyDocument, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'html',
        { lang: 'ru', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_document__["Head"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, minimal-ui',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Analytics__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            { key: 'title', __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            __WEBPACK_IMPORTED_MODULE_5__shared_text_json___default.a.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.css }, __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Favicon__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'body',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          })
        )
      );
    }
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "./shared/text.json":
/***/ (function(module, exports) {

module.exports = {"title":"Guitar Hunter"}

/***/ }),

/***/ "./shared/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export breakpoints */
/* unused harmony export media */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);
var _templateObject = _taggedTemplateLiteral(['\n    @media only screen and (min-width: ', 'px) {\n      ', ';\n    }\n  '], ['\n    @media only screen and (min-width: ', 'px) {\n      ', ';\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    @media only screen and (max-width: ', 'px) {\n      ', ';\n    }\n  '], ['\n    @media only screen and (max-width: ', 'px) {\n      ', ';\n    }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var breakpoints = {
  mobile: 600,
  medium: 960,
  desktop: 1200
};

var media = {
  medium: function medium() {
    return (/*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["css"])(_templateObject, breakpoints.medium, __WEBPACK_IMPORTED_MODULE_0_react_emotion__["css"].apply(undefined, arguments))
    );
  },
  mobile: function mobile() {
    return (/*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["css"])(_templateObject2, breakpoints.mobile, __WEBPACK_IMPORTED_MODULE_0_react_emotion__["css"].apply(undefined, arguments))
    );
  },
  desktop: function desktop() {
    return (/*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["css"])(_templateObject, breakpoints.desktop, __WEBPACK_IMPORTED_MODULE_0_react_emotion__["css"].apply(undefined, arguments))
    );
  }
};

var colors = {
  background: '#ffffff'
};

var theme = {
  media: media,
  breakpoints: breakpoints,
  colors: colors
};

/* harmony default export */ __webpack_exports__["b"] = (theme);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "emotion-server":
/***/ (function(module, exports) {

module.exports = require("emotion-server");

/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-emotion":
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map