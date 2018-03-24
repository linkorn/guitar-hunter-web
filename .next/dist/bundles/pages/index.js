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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hoc/withEmotion.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_emotion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion_theming__ = __webpack_require__("emotion-theming");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion_theming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_emotion_theming__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_styles__ = __webpack_require__("./shared/styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_theme__ = __webpack_require__("./shared/theme.js");
var _jsxFileName = '/Users/denisabrosimov/Documents/projects/guitar-hunter-web/hoc/withEmotion.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var withEmotion = function withEmotion(ComposedComponent) {
  var HOC = function (_Component) {
    _inherits(HOC, _Component);

    function HOC() {
      _classCallCheck(this, HOC);

      return _possibleConstructorReturn(this, (HOC.__proto__ || Object.getPrototypeOf(HOC)).apply(this, arguments));
    }

    _createClass(HOC, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (typeof window !== 'undefined') {
          // eslint-disable-next-line
          Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["hydrate"])(window.__NEXT_DATA__.ids);
        }
        Object(__WEBPACK_IMPORTED_MODULE_3__shared_styles__["a" /* injectGlobalStyles */])();
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_emotion_theming__["ThemeProvider"],
          { theme: __WEBPACK_IMPORTED_MODULE_4__shared_theme__["b" /* default */], __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComposedComponent, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          })
        );
      }
    }]);

    return HOC;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  return HOC;
};

/* harmony default export */ __webpack_exports__["a"] = (withEmotion);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hoc_withEmotion__ = __webpack_require__("./hoc/withEmotion.js");
var _jsxFileName = '/Users/denisabrosimov/Documents/projects/guitar-hunter-web/pages/index.js';



var App = Object(__WEBPACK_IMPORTED_MODULE_1__hoc_withEmotion__["a" /* default */])(function () {
  return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'main',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    'ffff'
  )];
});

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./shared/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return injectGlobalStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion__ = __webpack_require__("react-emotion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_emotion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_emotion__);
var _templateObject = _taggedTemplateLiteral(["\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\naddress,\ncite,\ncode,\ndel,\nem,\nimg,\nq,\ns,\nsmall,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\nfigure,\nfigcaption,\nfooter,\nheader,\nmenu,\nnav,\nsection,\ntime,\naudio,\nvideo {\n  border: 0;\n  vertical-align: baseline;\n}\nhtml {\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -o-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n  height: 100%;\n}\n*[aria-hidden=\"true\"] {\n  user-select: none;\n}\n@-ms-viewport {\n  width: device-width;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n  text-decoration: none;\n}\na:active,\na:hover {\n  outline-width: 0;\n}\nimg {\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\n* {\n  box-sizing: border-box;\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/static/fonts/Lato-Light.woff) format('woff');\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/static/fonts/Lato-LightItalic.woff) format('woff');\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/static/fonts/Lato-Regular.woff) format('woff');\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/static/fonts/Lato-Italic.woff) format('woff');\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/static/fonts/Lato-Bold.woff) format('woff');\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(/static/fonts/Lato-Bold.woff) format('woff');\n}\nhtml,body{\n  margin: 0;\n  padding: 0;\n}\nbody {\n  min-width:320px;\n  min-height: 100vh;\n  position:relative;\n  background: #EAEAEA;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: antialiased;\n  overflow: hidden;\n}\n\n"], ["\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\naddress,\ncite,\ncode,\ndel,\nem,\nimg,\nq,\ns,\nsmall,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\nfigure,\nfigcaption,\nfooter,\nheader,\nmenu,\nnav,\nsection,\ntime,\naudio,\nvideo {\n  border: 0;\n  vertical-align: baseline;\n}\nhtml {\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -o-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n  height: 100%;\n}\n*[aria-hidden=\"true\"] {\n  user-select: none;\n}\n@-ms-viewport {\n  width: device-width;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n  text-decoration: none;\n}\na:active,\na:hover {\n  outline-width: 0;\n}\nimg {\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\n* {\n  box-sizing: border-box;\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/static/fonts/Lato-Light.woff) format('woff');\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 300;\n  font-display: swap;\n  src: url(/static/fonts/Lato-LightItalic.woff) format('woff');\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/static/fonts/Lato-Regular.woff) format('woff');\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url(/static/fonts/Lato-Italic.woff) format('woff');\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(/static/fonts/Lato-Bold.woff) format('woff');\n}\n@font-face {\n  font-family: 'Lato';\n  font-style: normal;\n  font-weight: 900;\n  font-display: swap;\n  src: url(/static/fonts/Lato-Bold.woff) format('woff');\n}\nhtml,body{\n  margin: 0;\n  padding: 0;\n}\nbody {\n  min-width:320px;\n  min-height: 100vh;\n  position:relative;\n  background: #EAEAEA;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: antialiased;\n  overflow: hidden;\n}\n\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var injectGlobalStyles = function injectGlobalStyles() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react_emotion__["injectGlobal"])(_templateObject);
};

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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "emotion-theming":
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

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
//# sourceMappingURL=index.js.map