/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".index.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var _src_pages_Produtos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/pages/Produtos */ \"./src/pages/Produtos.js\");\n\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', function (req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)); //aqui onde renderiza Site no servidor pela tag <App>\n  //   const app = ReactDOMServer.renderToString(<App />);\n\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> *{\\n|   margin:0;\\n|   padding:0;\");\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router */ \"./src/Router.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Router; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_NossasLojas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/NossasLojas */ \"./src/pages/NossasLojas.js\");\n/* harmony import */ var _pages_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Index */ \"./src/pages/Index.js\");\n/* harmony import */ var _pages_Contato__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Contato */ \"./src/pages/Contato.js\");\n/* harmony import */ var _pages_Produtos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Produtos */ \"./src/pages/Produtos.js\");\n\n\n\n\n\n\nfunction Router() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/contato\",\n    component: _pages_Contato__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/lojas\",\n    component: _pages_NossasLojas__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/produtos\",\n    component: _pages_Produtos__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    exact: true,\n    component: _pages_Index__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  })));\n}\n\n//# sourceURL=webpack:///./src/Router.js?");

/***/ }),

/***/ "./src/components/CardProduto.js":
/*!***************************************!*\
  !*** ./src/components/CardProduto.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cardProduto; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_Produtos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Produtos.css */ \"./src/css/Produtos.css\");\n/* harmony import */ var _css_Produtos_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Produtos_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar cardProduto = /*#__PURE__*/function (_React$Component) {\n  _inherits(cardProduto, _React$Component);\n\n  var _super = _createSuper(cardProduto);\n\n  function cardProduto(props) {\n    _classCallCheck(this, cardProduto);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(cardProduto, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"boxProduto text-center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"card\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"card-img-top\",\n        src: __webpack_require__(\"./src/img sync recursive ^\\\\.\\\\/.*$\")(\"./\" + this.props.data.nome_imagem).default,\n        alt: \"Imagem da \" + this.props.data.descricao\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"card-header\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, this.props.data.descricao)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"card-body\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strike\", null, \"R$ \", this.props.data.preco))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n        className: \"text-danger\"\n      }, \"R$ \", this.props.data.preco_venda))));\n    }\n  }]);\n\n  return cardProduto;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/components/CardProduto.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_Footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/Footer.css */ \"./src/css/Footer.css\");\n/* harmony import */ var _css_Footer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_Footer_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction Footer(props) {\n  {\n    /* <div className=\"row\">\r\n       <div className=\"col-sm-12 text-center text-danger\"><h4>{props.title}</h4></div>\r\n       <div className=\"col-sm-12 text-center\"><img src={ require('../img/'+props.img).default } width=\"300px\" alt=\"Formas de pagamento\"/></div>\r\n       <div className=\"col-sm-12 text-center text-monospace\"><span>&copy; {props.footer}</span></div>\r\n    </div> */\n  }\n  return /*#__PURE__*/React.createElement(\"footer\", {\n    className: \"rodape\"\n  }, /*#__PURE__*/React.createElement(\"p\", {\n    className: \"formaDePagamento\"\n  }, props.title), /*#__PURE__*/React.createElement(\"img\", {\n    className: \"mb-5\",\n    src: __webpack_require__(\"./src/img sync recursive ^\\\\.\\\\/.*$\")(\"./\" + props.img).default,\n    width: \"300px\",\n    alt: \"Formas de pagamento\"\n  }), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"copyFooter\"\n  }, \"\\xA9 \", props.footer));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Loja.js":
/*!********************************!*\
  !*** ./src/components/Loja.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Loja(props) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-sm m-2\"\n  }, /*#__PURE__*/React.createElement(\"h3\", null, props.nome), /*#__PURE__*/React.createElement(\"p\", null, \" \", props.rua), /*#__PURE__*/React.createElement(\"p\", null, props.andar, \" \\xBA\"), /*#__PURE__*/React.createElement(\"p\", null, props.bairro), /*#__PURE__*/React.createElement(\"p\", null, props.telefone));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loja);\n\n//# sourceURL=webpack:///./src/components/Loja.js?");

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_Menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/Menu.css */ \"./src/css/Menu.css\");\n/* harmony import */ var _css_Menu_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Menu_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar Menu = /*#__PURE__*/function (_React$Component) {\n  _inherits(Menu, _React$Component);\n\n  var _super = _createSuper(Menu);\n\n  function Menu() {\n    _classCallCheck(this, Menu);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Menu, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n        className: \"navbar navbar-expand-lg navbar-light menu\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\",\n        className: \"navbar-brand\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: __webpack_require__(/*! ../img/logo.png */ \"./src/img/logo.png\").default,\n        alt: \"logo full stack eletro\",\n        width: \"150px\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"navbar-toggler\",\n        type: \"button\",\n        \"data-toggle\": \"collapse\",\n        \"data-target\": \"#navbarNav\",\n        \"aria-controls\": \"navbarNav\",\n        \"aria-expanded\": \"false\",\n        \"aria-label\": \"Toggle navigation\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"navbar-toggler-icon\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"collapse navbar-collapse justify-content-center\",\n        id: \"navbarNav\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"navbar-nav \"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"nav-item active\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/produtos\",\n        className: \"nav-link text-white\"\n      }, \"Nossos Produtos\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"nav-item active\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/lojas\",\n        className: \"nav-link text-white\"\n      }, \"Nossos Lojas\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"nav-item active\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/contato\",\n        className: \"nav-link text-white\"\n      }, \"Fale Conosco\")))));\n    }\n  }]);\n\n  return Menu;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/components/Menu.js?");

/***/ }),

/***/ "./src/css/Contato.css":
/*!*****************************!*\
  !*** ./src/css/Contato.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .mt-10{\\n|     margin-top: 100px;\\n| }\");\n\n//# sourceURL=webpack:///./src/css/Contato.css?");

/***/ }),

/***/ "./src/css/Footer.css":
/*!****************************!*\
  !*** ./src/css/Footer.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .copyFooter{\\n|     width: 100%;\\n|     color: white;\");\n\n//# sourceURL=webpack:///./src/css/Footer.css?");

/***/ }),

/***/ "./src/css/Index.css":
/*!***************************!*\
  !*** ./src/css/Index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> *{\\n|     text-align: center;\\n|     color:gray;\");\n\n//# sourceURL=webpack:///./src/css/Index.css?");

/***/ }),

/***/ "./src/css/Loja.css":
/*!**************************!*\
  !*** ./src/css/Loja.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .mt-10{\\n|     margin-top: 100px;\\n| }\");\n\n//# sourceURL=webpack:///./src/css/Loja.css?");

/***/ }),

/***/ "./src/css/Menu.css":
/*!**************************!*\
  !*** ./src/css/Menu.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> *{\\n|     margin:0;\\n|     padding:0;\");\n\n//# sourceURL=webpack:///./src/css/Menu.css?");

/***/ }),

/***/ "./src/css/Produtos.css":
/*!******************************!*\
  !*** ./src/css/Produtos.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> *{\\n|     margin:0;\\n|     padding:0 0 50 0;\");\n\n//# sourceURL=webpack:///./src/css/Produtos.css?");

/***/ }),

/***/ "./src/img sync recursive ^\\.\\/.*$":
/*!*******************************!*\
  !*** ./src/img sync ^\.\/.*$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./BRBFD5VCR_PRD_447_1.jpg\": \"./src/img/BRBFD5VCR_PRD_447_1.jpg\",\n\t\"./Brastemp_Geladeira_BRM45HK_Imagem_Frontal_1600x1400.jpg\": \"./src/img/Brastemp_Geladeira_BRM45HK_Imagem_Frontal_1600x1400.jpg\",\n\t\"./Consul_Geladeira_CRE44AK_Imagem_Frontal_1.jpg\": \"./src/img/Consul_Geladeira_CRE44AK_Imagem_Frontal_1.jpg\",\n\t\"./Geladeira Brastemp Frost Free Duplex BRM44HB 375L Branco.jpg\": \"./src/img/Geladeira Brastemp Frost Free Duplex BRM44HB 375L Branco.jpg\",\n\t\"./Lavadora de Roupas LG Vivace VC4 11kg Branca.jpg\": \"./src/img/Lavadora de Roupas LG Vivace VC4 11kg Branca.jpg\",\n\t\"./Range_76USV_Front_View_Electrolux_1000x1000.jpg\": \"./src/img/Range_76USV_Front_View_Electrolux_1000x1000.jpg\",\n\t\"./blackfriday.webp\": \"./src/img/blackfriday.webp\",\n\t\"./email.png\": \"./src/img/email.png\",\n\t\"./forno-de-micro-ondas-31l-electrolux-me41x_211417_7.jpg\": \"./src/img/forno-de-micro-ondas-31l-electrolux-me41x_211417_7.jpg\",\n\t\"./lava-loucas-14-servicos-electrolux-lv14x-inox-photo892601426-12-2c-17.jpg\": \"./src/img/lava-loucas-14-servicos-electrolux-lv14x-inox-photo892601426-12-2c-17.jpg\",\n\t\"./lava_loucas_febe_300x300.jpg\": \"./src/img/lava_loucas_febe_300x300.jpg\",\n\t\"./lavadora-e-secadora-de-roupas-samsung-11kg-air-wash-e-ecobubble-branca.jpg\": \"./src/img/lavadora-e-secadora-de-roupas-samsung-11kg-air-wash-e-ecobubble-branca.jpg\",\n\t\"./logo.png\": \"./src/img/logo.png\",\n\t\"./logo_branco.png\": \"./src/img/logo_branco.png\",\n\t\"./ofertafogao.jpg\": \"./src/img/ofertafogao.jpg\",\n\t\"./ofertageladeira.jpg\": \"./src/img/ofertageladeira.jpg\",\n\t\"./pagamento.jpg\": \"./src/img/pagamento.jpg\",\n\t\"./wpp.png\": \"./src/img/wpp.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/img_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/img/BRBFD5VCR_PRD_447_1.jpg":
/*!*****************************************!*\
  !*** ./src/img/BRBFD5VCR_PRD_447_1.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/BRBFD5VCR_PRD_447_1.jpg?");

/***/ }),

/***/ "./src/img/Brastemp_Geladeira_BRM45HK_Imagem_Frontal_1600x1400.jpg":
/*!*************************************************************************!*\
  !*** ./src/img/Brastemp_Geladeira_BRM45HK_Imagem_Frontal_1600x1400.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:6)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/Brastemp_Geladeira_BRM45HK_Imagem_Frontal_1600x1400.jpg?");

/***/ }),

/***/ "./src/img/Consul_Geladeira_CRE44AK_Imagem_Frontal_1.jpg":
/*!***************************************************************!*\
  !*** ./src/img/Consul_Geladeira_CRE44AK_Imagem_Frontal_1.jpg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0014' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/Consul_Geladeira_CRE44AK_Imagem_Frontal_1.jpg?");

/***/ }),

/***/ "./src/img/Geladeira Brastemp Frost Free Duplex BRM44HB 375L Branco.jpg":
/*!******************************************************************************!*\
  !*** ./src/img/Geladeira Brastemp Frost Free Duplex BRM44HB 375L Branco.jpg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/Geladeira_Brastemp_Frost_Free_Duplex_BRM44HB_375L_Branco.jpg?");

/***/ }),

/***/ "./src/img/Lavadora de Roupas LG Vivace VC4 11kg Branca.jpg":
/*!******************************************************************!*\
  !*** ./src/img/Lavadora de Roupas LG Vivace VC4 11kg Branca.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/Lavadora_de_Roupas_LG_Vivace_VC4_11kg_Branca.jpg?");

/***/ }),

/***/ "./src/img/Range_76USV_Front_View_Electrolux_1000x1000.jpg":
/*!*****************************************************************!*\
  !*** ./src/img/Range_76USV_Front_View_Electrolux_1000x1000.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/Range_76USV_Front_View_Electrolux_1000x1000.jpg?");

/***/ }),

/***/ "./src/img/blackfriday.webp":
/*!**********************************!*\
  !*** ./src/img/blackfriday.webp ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:6)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/blackfriday.webp?");

/***/ }),

/***/ "./src/img/email.png":
/*!***************************!*\
  !*** ./src/img/email.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/email.png?");

/***/ }),

/***/ "./src/img/forno-de-micro-ondas-31l-electrolux-me41x_211417_7.jpg":
/*!************************************************************************!*\
  !*** ./src/img/forno-de-micro-ondas-31l-electrolux-me41x_211417_7.jpg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/forno-de-micro-ondas-31l-electrolux-me41x_211417_7.jpg?");

/***/ }),

/***/ "./src/img/lava-loucas-14-servicos-electrolux-lv14x-inox-photo892601426-12-2c-17.jpg":
/*!*******************************************************************************************!*\
  !*** ./src/img/lava-loucas-14-servicos-electrolux-lv14x-inox-photo892601426-12-2c-17.jpg ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/lava-loucas-14-servicos-electrolux-lv14x-inox-photo892601426-12-2c-17.jpg?");

/***/ }),

/***/ "./src/img/lava_loucas_febe_300x300.jpg":
/*!**********************************************!*\
  !*** ./src/img/lava_loucas_febe_300x300.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:6)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/lava_loucas_febe_300x300.jpg?");

/***/ }),

/***/ "./src/img/lavadora-e-secadora-de-roupas-samsung-11kg-air-wash-e-ecobubble-branca.jpg":
/*!********************************************************************************************!*\
  !*** ./src/img/lavadora-e-secadora-de-roupas-samsung-11kg-air-wash-e-ecobubble-branca.jpg ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/lavadora-e-secadora-de-roupas-samsung-11kg-air-wash-e-ecobubble-branca.jpg?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/logo.png?");

/***/ }),

/***/ "./src/img/logo_branco.png":
/*!*********************************!*\
  !*** ./src/img/logo_branco.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/logo_branco.png?");

/***/ }),

/***/ "./src/img/ofertafogao.jpg":
/*!*********************************!*\
  !*** ./src/img/ofertafogao.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/ofertafogao.jpg?");

/***/ }),

/***/ "./src/img/ofertageladeira.jpg":
/*!*************************************!*\
  !*** ./src/img/ofertageladeira.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/ofertageladeira.jpg?");

/***/ }),

/***/ "./src/img/pagamento.jpg":
/*!*******************************!*\
  !*** ./src/img/pagamento.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/pagamento.jpg?");

/***/ }),

/***/ "./src/img/wpp.png":
/*!*************************!*\
  !*** ./src/img/wpp.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/img/wpp.png?");

/***/ }),

/***/ "./src/pages/Contato.js":
/*!******************************!*\
  !*** ./src/pages/Contato.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contato; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var _css_Contato_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/Contato.css */ \"./src/css/Contato.css\");\n/* harmony import */ var _css_Contato_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Contato_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Contato = /*#__PURE__*/function (_React$Component) {\n  _inherits(Contato, _React$Component);\n\n  var _super = _createSuper(Contato);\n\n  function Contato(props) {\n    var _this;\n\n    _classCallCheck(this, Contato);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      nome: '',\n      msg: '',\n      comentarios: []\n    };\n    _this.setComentario = _this.setComentario.bind(_assertThisInitialized(_this));\n    _this.getInput = _this.getInput.bind(_assertThisInitialized(_this));\n    _this.getComentarios = _this.getComentarios.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Contato, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getComentarios();\n    }\n  }, {\n    key: \"getComentarios\",\n    value: function getComentarios() {\n      var _this2 = this;\n\n      fetch(\"http://localhost:5002/comentarios\") // fetch(\"http://localhost/react/api/index.php?tabela=comentarios\")\n      .then(function (response) {\n        return response.json();\n      }).then(function (responseJson) {\n        _this2.setState({\n          comentarios: responseJson\n        });\n      });\n    }\n  }, {\n    key: \"setComentario\",\n    value: function setComentario(e) {\n      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(\"http://localhost:5002/comentario/\", {\n        nome: this.state.nome,\n        msg: this.state.msg\n      }).then(function (res) {\n        console.log(res);\n        console.log(res.data);\n      }); // fetch(\"http://localhost:5002/comentario/\",//nosql\n      // fetch(\"http://localhost:5001/comentario/\"+this.state.nome+\"/\"+this.state.msg,//nosql\n      // fetch(\"http://localhost/react/api/setComentario.php?nome=\"+this.state.nome+\"&msg=\"+this.state.msg,\n      //  {mode:\"no-cors\"});\n      // e.preventDefault();\n      // fetch(\"http://localhost:5002/comentario/\",\n      // {\n      //     method: 'post',\n      //     headers: {\n      //       'Accept': 'application/json, text/plain, */*',\n      //       'Content-Type': 'application/json'\n      //     },\n      //     body: JSON.stringify({nome: this.state.nome, msg: this.state.msg})\n      //   })\n      // .then(res=>res.json())\n      // .then(res => console.log(res));\n    }\n  }, {\n    key: \"getInput\",\n    value: function getInput(e) {\n      var nam = e.target.name;\n      var val = e.target.value;\n      this.setState(_defineProperty({}, nam, val));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container-fluid\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm-12 p-0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row \"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm-12 mt-10 p-0 mx-0 justify-content-center \"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"mt-3\"\n      }, \"Fale Conosco\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row mt-10\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm-6 d-flex justify-content-center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: __webpack_require__(/*! ../img/email.png */ \"./src/img/email.png\").default,\n        alt: \"icone de email\",\n        width: \"50px\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"fullstack@eletro.com\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm-6 d-flex  justify-content-center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: __webpack_require__(/*! ../img/wpp.png */ \"./src/img/wpp.png\").default,\n        alt: \"icone de whatsapp\",\n        width: \"50px\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"21 4932-4564\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        id: \"frmContato\",\n        onSubmit: this.setComentario,\n        className: \" m-4\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"form-row justify-content-center\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-7 form \"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"nome\"\n      }, \"Nome:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        id: \"nome\",\n        name: \"nome\",\n        onChange: this.getInput,\n        className: \"form-control\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"form-group\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"msg\"\n      }, \"Mensagem:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n        type: \"text\",\n        id: \"msg\",\n        name: \"msg\",\n        onChange: this.getInput,\n        className: \"form-control\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"submit\",\n        value: \"Enviar\",\n        className: \"btn btn-danger\"\n      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Coment\\xE1rios\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"table-responsive \"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n        className: \"table table-hover\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n        scope: \"col\"\n      }, \"#\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Nome\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Coment\\xE1rio\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Data de Coment\\xE1rio\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, this.state.comentarios.map(function (comentario) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n          scope: \"row\"\n        }, comentario.id_contato), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, comentario.nome), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, comentario.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, comentario.data_cadastro));\n      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm-12 p-0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        img: \"pagamento.jpg\",\n        title: \"Formas de Pagamento\",\n        footer: \"Recode Pro\"\n      }))));\n    }\n  }]);\n\n  return Contato;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/pages/Contato.js?");

/***/ }),

/***/ "./src/pages/Index.js":
/*!****************************!*\
  !*** ./src/pages/Index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_Index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/Index.css */ \"./src/css/Index.css\");\n/* harmony import */ var _css_Index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_Index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import Footer from \"../components/Footer\";\n// import Menu from \"../components/Menu\";\n// import Carrosel from \"../components/Carrosel\";\n\n\nvar Carrosel = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/Carrosel */ \"./src/components/Carrosel.js\"));\n});\nvar Footer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../components/Footer */ \"./src/components/Footer.js\"));\n});\nvar Menu = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../components/Menu */ \"./src/components/Menu.js\"));\n});\n\nfunction Index() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container-fluid\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-12 p-0\"\n  }, /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(\"p\", null, \"Carregando...\")\n  }, /*#__PURE__*/React.createElement(Menu, null)))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row \"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-sm-12 mt-10 p-0 mx-0 justify-content-center \"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, \"Seja bem vindo(a)!\"), /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(\"p\", null, \"Carregando...\")\n  }, /*#__PURE__*/React.createElement(Carrosel, {\n    img1: __webpack_require__(/*! ../img/blackfriday.webp */ \"./src/img/blackfriday.webp\").default,\n    img2: __webpack_require__(/*! ../img/ofertageladeira.jpg */ \"./src/img/ofertageladeira.jpg\").default,\n    img3: __webpack_require__(/*! ../img/ofertafogao.jpg */ \"./src/img/ofertafogao.jpg\").default\n  })), /*#__PURE__*/React.createElement(\"p\", null, \"Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!\"))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col-sm-12 p-0\"\n  }, /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(\"p\", null, \"Carregando...\")\n  }, /*#__PURE__*/React.createElement(Footer, {\n    img: \"pagamento.jpg\",\n    title: \"Formas de Pagamento\",\n    footer: \"Recode Pro\"\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack:///./src/pages/Index.js?");

/***/ }),

/***/ "./src/pages/NossasLojas.js":
/*!**********************************!*\
  !*** ./src/pages/NossasLojas.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NossasLojas; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _components_Loja__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loja */ \"./src/components/Loja.js\");\n/* harmony import */ var _css_Loja_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/Loja.css */ \"./src/css/Loja.css\");\n/* harmony import */ var _css_Loja_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Loja_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar NossasLojas = /*#__PURE__*/function (_React$Component) {\n  _inherits(NossasLojas, _React$Component);\n\n  var _super = _createSuper(NossasLojas);\n\n  function NossasLojas() {\n    _classCallCheck(this, NossasLojas);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(NossasLojas, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container-fluid\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm-12 p-0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm-12 mt-10 \"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"mt-3\"\n      }, \"Nossas Lojas\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row mt-5\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loja__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        nome: \"Rio de Janeiro\",\n        rua: \"Rua Luigi Galvani, 70\",\n        andar: \"4\",\n        bairro: \"Centro\",\n        telefone: \"(21) 4004-4044\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loja__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        nome: \"S\\xE3o Paulo\",\n        rua: \"Rua Joanes Petroni, 102\",\n        andar: \"6\",\n        bairro: \"Centro\",\n        telefone: \"(21) 3005-6522\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loja__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        nome: \"Santa Catarina\",\n        rua: \"Rua Louvre Senior, 920\",\n        andar: \"2\",\n        bairro: \"Centro\",\n        telefone: \"(21) 3658-1287\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm-12 mt-5 p-0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        img: \"pagamento.jpg\",\n        title: \"Formas de Pagamento\",\n        footer: \"Recode Pro\"\n      }))));\n    }\n  }]);\n\n  return NossasLojas;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/pages/NossasLojas.js?");

/***/ }),

/***/ "./src/pages/Produtos.js":
/*!*******************************!*\
  !*** ./src/pages/Produtos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Produtos; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CardProduto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CardProduto */ \"./src/components/CardProduto.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var _css_Produtos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/Produtos.css */ \"./src/css/Produtos.css\");\n/* harmony import */ var _css_Produtos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Produtos_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\nvar Produtos = /*#__PURE__*/function (_React$Component) {\n  _inherits(Produtos, _React$Component);\n\n  var _super = _createSuper(Produtos);\n\n  function Produtos(props) {\n    var _this;\n\n    _classCallCheck(this, Produtos);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      produtos: [],\n      categoria: 'todos',\n      categorias: []\n    };\n    _this.getCategoria = _this.getCategoria.bind(_assertThisInitialized(_this));\n    _this.exibirProdutos = _this.exibirProdutos.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Produtos, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.exibirProdutos();\n      this.exibirCategoria();\n    }\n  }, {\n    key: \"exibirProdutos\",\n    value: function exibirProdutos() {\n      var _this2 = this;\n\n      fetch(\"http://localhost:5002/produtos\") //noqsl\n      // fetch(\"http://localhost/react/api/index.php?tabela=produtos\")\n      .then(function (response) {\n        return response.json();\n      }).then(function (responseJson) {\n        _this2.setState({\n          produtos: responseJson\n        });\n      });\n    }\n  }, {\n    key: \"exibirCategoria\",\n    value: function exibirCategoria() {\n      var _this3 = this;\n\n      fetch(\"http://localhost:5002/categorias\") //nosql\n      // fetch(\"http://localhost/react/api/index.php?tabela=categorias\")\n      .then(function (response) {\n        return response.json();\n      }).then(function (responseJson) {\n        _this3.setState({\n          categorias: responseJson,\n          categoria: 'todos'\n        });\n      });\n    }\n  }, {\n    key: \"getCategoria\",\n    value: function getCategoria(e) {\n      var _this4 = this;\n\n      var categoria = e.target.value;\n      console.log(categoria);\n\n      if (categoria === 'todos') {\n        this.setState({\n          categoria: 'todos'\n        });\n        this.exibirProdutos();\n      } else {\n        fetch(\"http://localhost:5002/categorias?tipo=\" + categoria) //nosql\n        // fetch(\"http://localhost:5002/categorias/\" + categoria)//nosql\n        // fetch(\"http://localhost/react/api/index.php?tabela=categorias&categoria=\" + categoria)\n        .then(function (response) {\n          return response.json();\n        }).then(function (responseJson) {\n          _this4.setState({\n            produtos: responseJson,\n            categoria: categoria\n          });\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this5 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container-fluid\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-12 p-0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row mt-10\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm-12\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"mt-3 mb-3\"\n      }, \"Produtos\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm-3\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"list-group\"\n      }, this.state.categorias.map(function (categoria) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          type: \"button\",\n          className: \"list-group-item list-group-item-action\",\n          value: categoria.chave,\n          onClick: _this5.getCategoria\n        }, categoria.nome, \" (\", categoria.qtd, \")\");\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        type: \"button\",\n        className: \"list-group-item list-group-item-action\",\n        value: \"todos\",\n        onClick: this.getCategoria\n      }, \"Todos\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-sm col-9 p-0\"\n      }, this.state.produtos.map(function (produto) {\n        if (_this5.state.categoria === \"todos\") {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CardProduto__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            data: produto\n          });\n        } else {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CardProduto__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            data: produto\n          });\n        }\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-12 p-0\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        img: \"pagamento.jpg\",\n        title: \"Formas de Pagamento\",\n        footer: \"Recode Pro\"\n      }))));\n    }\n  }]);\n\n  return Produtos;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/pages/Produtos.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });