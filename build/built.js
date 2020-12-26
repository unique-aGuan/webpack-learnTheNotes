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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/index.less":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/index.less ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ag_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ag.jpg */ \"./src/ag.jpg\");\n/* harmony import */ var _ag_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ag_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mr_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mr.png */ \"./src/mr.png\");\n/* harmony import */ var _mr_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mr_png__WEBPACK_IMPORTED_MODULE_3__);\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_ag_jpg__WEBPACK_IMPORTED_MODULE_2___default.a);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_mr_png__WEBPACK_IMPORTED_MODULE_3___default.a);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#title {\\n  color: #fff;\\n}\\n#box1 {\\n  width: 100px;\\n  height: 100px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 100% 100%;\\n}\\n#box2 {\\n  width: 100px;\\n  height: 100px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-size: 100% 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html, body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  height: 100%;\\r\\n  background-color: aqua;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/ag.jpg":
/*!********************!*\
  !*** ./src/ag.jpg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ece8d095ea.jpg\";\n\n//# sourceURL=webpack:///./src/ag.jpg?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: name, age, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"ag\\\",\\\"age\\\":\\\"18\\\"}\");\n\n//# sourceURL=webpack:///./src/data.json?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ \"./src/data.json\", 1);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./src/index.less\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(_data_json__WEBPACK_IMPORTED_MODULE_0__)\r\nfunction add () {\r\n  return console.log(10);\r\n}\r\n\r\nadd();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/index.less\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/index.less?");

/***/ }),

/***/ "./src/mr.png":
/*!********************!*\
  !*** ./src/mr.png ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAtSSURBVFhHTVd5bJPnHf6ApDnsxPfx2f4+3/GROCckkMt37DixcxAgIWeBtBkBClkgAyTo3WlND7F1Xcu0lgmt1dg6bdraSqNr1wIdVxtK27WapmrTNE2b9uf+fva8Rur2x6vPseP3+R3P8/x+lhYajJj0WTHudWHE58aw3408X+e9DhQCTuQ9Zgx4TBjw2pHzycgqFgzKdZhx1+Kb4Rq8VlDx3riCW2MW3BioxO10BT4vaPFlQY9P4jX4U1KHL3u0+LSzBh+3V+JmcyU+bNyMq5FNkOYbLNjtlTHquQde8nmRdzuRUwlGwAzBs34ZA34Faf5PUnUho1hRcNVhTN6Mw4FNeDlpwbXJIO7sVrAxZMTdvA53B+pxJ6HBF71a/HFrDTZaKnEjvAlXGyRcCUj4ILgZ0h6vBaNuO4oeBUWvBwWvggHlXoZZtxVJAif9zjLwgMfNgFRWwYmkYkBcvg9xjYQHAhU4n3bj3Ykobo37cTtnxu2UBncTWtzdVo3PWqrwcWQLbgYl/MEr4SrPFR6ppJpRUOzlbAe9vNzjRMZJYIcBGdWCjN+FHQ4LemULcgEPhsI+JD0ytjv02CHXoxC0IG+vwLxrM57tkvHmcBC/zztxLa7DRn8dNtqqcDdWiY3wFtwm+C2fhOseEQTLXmI5RY9FRoWgG4MBVznjLDPLe6zlz0SmaY8DCb4fZ0C9DLhXtaJPldHnspWDHLBWY9ws4eGYDr8phnF9yId3Wytwgz2+E6vCRrQCd0Jb8GmoEh8R+AYDkARoilmLk/UJIBlpxYiMS4+8asRYQEWR74uAEvw77jajz20pA/coTnS7GBTvyLhtGLTXYJY8eDRch4udFlzutuL95lrcjFXjFsE3IpX4vKkGdwKbcVMleMbn4Zdd5ZPxO+6Ry0NGu00okeV7oyomAnYMETSjGpBmlqLsvQy2S3Wgmxzp96nlwAcZ9JBewh6thFOeagbgxJttRlxp0+FaTINbzRp81laPu9EafESiSkn2McHSC1IJcCGnQb+drLdhnBKci7qwt8GOCb+FhLSSF6wMW9DrltFJrvSyVd0kbFwhdxhY0aZBSSdhxlyJNbcGP2oy4NftRrzTbsLVdgPlxtOkwZ1oNaQEdS3AEz4HM7KV9Vzw2THGv3f6bdgbsmK6QRw7JgMy3yc/mHkPe75NMWGH14YdzDhO8uVlHUYcRoySjEVbHSb0W/AtVyVeiurwxjYHfrvNjisdZnzYVIebjVWQ4gFmTZIJSaVIsAEGMMIKTJDlu/ic9JswGzRjPuTAbEjBnqDgAKVGDvQQdAeJmWB7MqoJKVs9Bmw6DLlYIfpEyV6POYOER3xa/LDFjp9tdeIyA/igVYcPowRPNriRblCRDpJ0gt0eO3aSZJNBL6YDbswHHVhg1vMs/3yjipmoG7vDTgZIedKAUi4dsvSKNE+fU4ceaz36ZUPZK8ZYoRmHFitePR726vC8vx6XYmZcJg/eJ/GkVFBBJqwgS5AMsymwfwJ8OujHrN+LB6IeLEZU7I84caBJwWLMg30xN6vgZGXYIif9wFGPOIEFeDez7bFoy1UouUzYF3Zh0WfEgmkLlknGZ3wMoE3GW61GZk7QVAOJFnJR5y4MMdpRMnnaHyBoGIsNCpZ4wZEmFcss/YMBc/n14RgrQwJO8fslSm+A0swpOuRcWva+CiOuGtq2DjMhGybZlknKdMqhwRx5cNxehfNRO6Q0M8iEHcizlAUGMcyBMkI2T1KC+0J+HAg4sN+jx5KfoA02HA5acSTiwNEmN5bYglkOnzEXmW7XoUTwootsd96HvYFaLLU7MMXZMeo2YITSHXXxaarGnLUWp93MXICnQ9R2g4x8iHom8UqU2y72eyGk4mizioN+A5YCBhyJ2rActtHLzVgiD5bC5AAlNkOeTHIWTLD/gpzf2ObGwU4V8zErdvpMGHboeAwoOvUomGsxaqYZWe4TZefgCNpIOityzGyQr4dpKuMs92zEhbVOH1abLXioUZTbioMRCx4Imr4OYEHVY56MXyD5DjW7sdYfw/FkE/a3OlFUaspZD1i1yFF6Q+SHkOOgzOpYyXbR7xQvybA3ubAIgO7Gi0UAu1niZbJzrc2GVZ7DESMORc2shh3HYnZWwsSK1OGApwYrrXY8me/A2Uw7FsIyirIWo5TfCPmQJbiQYJ4EzLho3XTKrFMDKUuiZcnkXFT0XUYmYEHKayzLp+RhRpTHapsVa1tlrMT0ON6sx+mtZpymUx1v0TCgCjyR9uDcWAfOJEKYD3Ae2DnrOQl3ih2BLcmQDxmZd7I1CaeJbmgqzwkpRdfKsOeDLLEgXdrPyUUyJBnxEAOYJtFW2pw4263giV4ZzyTMeC6px3qyFs9m9Xg6b8b56RasjzbTE+qQr5cw4TRj1uvlssFtSLGV3S/JrIUx9com9PJzMSElMaVS9PF8A8F5MrRW8UGapCvSA8SKdYT9e6xfwQ9Kbrw+peIne4x4bcqAXy4FcHmtH+tFL+5vqMZOVzWBmbmNzDabCM6smbHQfh/BE/SQHrEbOK2srgtSgQDdFu5k25oxSNvMc8CICLv5pRKHhrjsUKMF54p+/Go5hitrIXz0SAR3n2rD7ce24/khEi9cgV2OauxROYx48U7O+ClOxjLZ+EzwiDHcz/VLzP8+BwcRR7Ekthbh1dOtEfoxK8AepV2CdJztNI4RyyasbTPh0mIbPlkfwL8uFPDPVzK4fjaKC8x+tZkTzClhjPodt5sxTlsd5XQbd9djSNUgRTWI5UNk3sd7xUbUY+dckG1cJuxGzDQGsIceX2JkRU61NAkySg3nuB7NcOi/OC7j+uNJ/PmlEv726gi++F4aP3/Qi7M7JJxoq8Vqq4zlRjcWowEcaAlhLw1ohL6Q9+vRT2YLYDFykxw4cYeZ4GZ0OdjzEb651B7GfETBGL1ZuFSBMij6DBhySDjdI+HdU034+4Wd+Py7Wbx9ogmvzjjxOAm30rwJRxu1OLXdh2NtQfo4vaHRg9GAjcOliv2t+TrjJF1QVFSwXbS0k8STFsjwY10RHOnwY9xWiYJJwohSgaxNojVK+OmyE38534v//GIKG08n8MqUglOdlTjIz8TWutcuYTFkxKyPM5xgw6oOaSbRZdEQRM8ACM5sBWiKLI9z3m/n0NlK3UurPVGsdYdwtN2JOU8VRi0S57DEjVTCoyN2fPVKFv9+PY2/nk/jd8z6+yUzTnVU4VCwEot+DaaEj3vrqWk6l1NbXjzLqxbnecavkliCXFzBmXmKVe6nyYitt4tOJ51JNuPbuTYciRlonTXlHu9RJBzp0ePtx/P4x6Vx9no7rp2J4NL9VrwwoMET22txsrUOhxsNmPbda5XY+cQiInoqtHwPlAGoVA8DEfIVrBcc6OUI7mdVpNVOLy7MZUgcI0fmZswJ4FYJF5e34quL+7DxTC+uPRzFO8eCeGNBxYsFI57s1ZVd7mCTBbNhOwa5NuW50w2HvARyoN/JHx1uLqUOsVb/D7y8+SpsBX9uxQX4yS4vnss34ck+BStcb/e7JTzP0n52bhh31pO4drIDby014OKEjBfoZt9JWnGm24aHWszYF7Fit49S5T6XY2nF9pImcFxmmSklAdxt4YJhM5DhRmZM5tM37jHfDOlEhwdnu1Sc5Z59LCzhqXgd3jvVi0/XU7i8EsLFcTtezlmw3lOPRzrrcbLDwEXCgLmAHhM0kVGuXjmWOsNSZ5ycjgQXGSeoZSGtfvqI6HlC2KyQ2v8d6WCjozydTrTocDQk4cfTQXx5bgJvr8TwYlGLM2zBKf6qXI1sxlGuu8vRetxPD9+laClFbXldToke22mfBEqLEhNIvBbA5R8i3I7FU6zcKban3AbFhv8CMw8wKqWg0UkAAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack:///./src/mr.png?");

/***/ })

/******/ });