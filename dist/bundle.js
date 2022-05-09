/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    box-sizing: border-box;\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n}\\r\\nbody{\\r\\n    background-color: rgba(3, 47, 55, 0.8);\\r\\n    background-size: auto;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n\\r\\n.text-area {\\r\\n    width: 900px;\\r\\n    height: 200px;\\r\\n    margin-bottom: 30px;\\r\\n    margin-top: 60px;\\r\\n    font-size: 18px;\\r\\n    color: rgba(5, 125, 133, 1);\\r\\n}\\r\\n\\r\\n.list-of-buttons {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    gap: 5px;\\r\\n    width: 930px;\\r\\n    background-color: rgba(10, 151, 179, 0.8);\\r\\n    padding: 15px;\\r\\n    border-radius: 5px;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.key-board-item {\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\n.key-board-button {\\r\\n    background-color: rgba(19, 191, 226, 1);\\r\\n    font-size: 15px;\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    border-radius: 3px;\\r\\n    border: 1px solid rgba(3, 47, 55, 1);\\r\\n}\\r\\n\\r\\n.key-board-button-color:hover {\\r\\n    background-color: rgba(47, 210, 153, 1);\\r\\n}\\r\\n\\r\\n.upper-item {\\r\\n    margin-left: 5px;\\r\\n}\\r\\n\\r\\n.button-space {\\r\\n    width: 440px;\\r\\n}\\r\\n\\r\\n.key-board-button-hover {\\r\\n    background-color: rgba(5, 125, 133, 1);\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.caps-lock, .enter {\\r\\n    width: 140px;\\r\\n}\\r\\n\\r\\n.right-shift {\\r\\n    width: 50px;\\r\\n}\\r\\n\\r\\n.left-shift {\\r\\n    width: 200px;\\r\\n}\\r\\n\\r\\n.back-space {\\r\\n    width: 150px;\\r\\n}\\r\\n\\r\\n.tab {\\r\\n    width: 100px;\\r\\n}\\r\\n\\r\\n.description-system {\\r\\n    font-size: 20px;\\r\\n    margin-top: 20px;\\r\\n    margin-bottom: 20px;\\r\\n    color: rgba(19, 191, 226, 1);\\r\\n}\\r\\n\\r\\n.description-language {\\r\\n    font-size: 22px;\\r\\n    color: rgba(19, 191, 226, 1);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://key-board/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://key-board/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://key-board/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html>\\r\\n    <head>\\r\\n        <title>key board</title>\\r\\n        <meta charset=\\\"utf-8\\\">\\r\\n    </head>\\r\\n    <body>\\r\\n    </body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://key-board/./src/index.html?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://key-board/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://key-board/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://key-board/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://key-board/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://key-board/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://key-board/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://key-board/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst KEYBOARD_BUTTONS = [\n  {\n    id: 'Backquote', eng: '`', ru: '~', text: true,\n  }, {\n    id: 'Digit1', eng: '1', ru: '!', text: true,\n  }, {\n    id: 'Digit2', eng: '2', ru: '@', text: true,\n  },\n  {\n    id: 'Digit3', eng: '3', ru: '#', text: true,\n  }, {\n    id: 'Digit4', eng: '4', ru: '$', text: true,\n  }, {\n    id: 'Digit5', eng: '5', ru: '%', text: true,\n  },\n  {\n    id: 'Digit6', eng: '6', ru: ':', text: true,\n  }, {\n    id: 'Digit7', eng: '7', ru: '?', text: true,\n  }, {\n    id: 'Digit8', eng: '8', ru: '*', text: true,\n  },\n  {\n    id: 'Digit9', eng: '9', ru: '(', text: true,\n  }, {\n    id: 'Digit0', eng: '0', ru: ')', text: true,\n  }, {\n    id: 'Minus', eng: '-', ru: '_', text: true,\n  },\n  {\n    id: 'Equal', eng: '=', ru: '+', text: true,\n  }, { id: 'Backspace', eng: 'Backspace' }, { id: 'Tab', eng: 'Tab' },\n  {\n    id: 'KeyQ', eng: 'q', ru: 'й', text: true,\n  }, {\n    id: 'KeyW', eng: 'w', ru: 'ц', text: true,\n  }, {\n    id: 'KeyE', eng: 'e', ru: 'у', text: true,\n  },\n  {\n    id: 'KeyR', eng: 'r', ru: 'к', text: true,\n  }, {\n    id: 'KeyT', eng: 't', ru: 'е', text: true,\n  }, {\n    id: 'KeyY', eng: 'y', ru: 'н', text: true,\n  },\n  {\n    id: 'KeyU', eng: 'u', ru: 'г', text: true,\n  }, {\n    id: 'KeyI', eng: 'i', ru: 'ш', text: true,\n  }, {\n    id: 'KeyO', eng: 'o', ru: 'щ', text: true,\n  },\n  {\n    id: 'KeyP', eng: 'p', ru: 'з', text: true,\n  }, {\n    id: 'BracketLeft', eng: '[', ru: 'х', text: true,\n  }, {\n    id: 'BracketRight', eng: ']', ru: 'ъ', text: true,\n  },\n  {\n    id: 'Backslash', eng: '\\\\', ru: '//', text: true,\n  }, { id: 'Delete', eng: 'DEL' }, { id: 'CapsLock', eng: 'Caps Lock' },\n  {\n    id: 'KeyA', eng: 'a', ru: 'ф', text: true,\n  }, {\n    id: 'KeyS', eng: 's', ru: 'ы', text: true,\n  }, {\n    id: 'KeyD', eng: 'd', ru: 'в', text: true,\n  },\n  {\n    id: 'KeyF', eng: 'f', ru: 'а', text: true,\n  }, {\n    id: 'KeyG', eng: 'g', ru: 'п', text: true,\n  }, {\n    id: 'KeyH', eng: 'h', ru: 'р', text: true,\n  },\n  {\n    id: 'KeyJ', eng: 'j', ru: 'о', text: true,\n  }, {\n    id: 'KeyK', eng: 'k', ru: 'л', text: true,\n  }, {\n    id: 'KeyL', eng: 'l', ru: 'д', text: true,\n  },\n  {\n    id: 'Semicolon', eng: ';', ru: 'ж', text: true,\n  }, {\n    id: 'Quote', eng: '\\'', ru: 'э', text: true,\n  }, { id: 'Enter', eng: 'ENTER' },\n  { id: 'ShiftLeft', eng: 'Shift' }, {\n    id: 'KeyZ', eng: 'z', ru: 'я', text: true,\n  }, {\n    id: 'KeyX', eng: 'x', ru: 'ч', text: true,\n  },\n  {\n    id: 'KeyC', eng: 'c', ru: 'с', text: true,\n  }, {\n    id: 'KeyV', eng: 'v', ru: 'м', text: true,\n  }, {\n    id: 'KeyB', eng: 'b', ru: 'и', text: true,\n  },\n  {\n    id: 'KeyN', eng: 'n', ru: 'т', text: true,\n  }, {\n    id: 'KeyM', eng: 'm', ru: 'ь', text: true,\n  }, {\n    id: 'Comma', eng: ',', ru: 'б', text: true,\n  },\n  {\n    id: 'Period', eng: '.', ru: 'ю', text: true,\n  }, {\n    id: 'Slash', eng: '/', ru: '.', text: true,\n  }, { id: 'ArrowUp', eng: '↑' },\n  { id: 'ShiftRight', eng: 'Shift' }, { id: 'ControlLeft', eng: 'ctrl' }, { id: 'MetaLeft', eng: 'win' },\n  { id: 'AltLeft', eng: 'alt' }, { id: 'Space', eng: 'space' }, { id: 'AltRight', eng: 'alt' },\n  { id: 'ControlRight', eng: 'ctrl' }, { id: 'ArrowLeft', eng: '←' }, { id: 'ArrowDown', eng: '↓' },\n  { id: 'ArrowRight', eng: '→' },\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KEYBOARD_BUTTONS);\n\n\n//# sourceURL=webpack://key-board/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/dataStorage.js":
/*!*******************************!*\
  !*** ./src/js/dataStorage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLanguageInLocalStorage\": () => (/* binding */ checkLanguageInLocalStorage),\n/* harmony export */   \"checkSessionStorage\": () => (/* binding */ checkSessionStorage)\n/* harmony export */ });\n/* harmony import */ var _keyBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyBoard */ \"./src/js/keyBoard.js\");\n\n\nfunction checkLanguageInLocalStorage() {\n  if (localStorage.getItem('change language')) {\n    localStorage.clear();\n    (0,_keyBoard__WEBPACK_IMPORTED_MODULE_0__.changeButtonTextContent)();\n  } else {\n    localStorage.setItem('change language', true);\n    (0,_keyBoard__WEBPACK_IMPORTED_MODULE_0__.changeButtonTextContent)();\n  }\n}\n\nfunction checkSessionStorage() {\n  if (sessionStorage.getItem('capsLockActive')) {\n    sessionStorage.clear();\n    (0,_keyBoard__WEBPACK_IMPORTED_MODULE_0__.changeButtonCase)();\n  } else {\n    sessionStorage.setItem('capsLockActive', true);\n    (0,_keyBoard__WEBPACK_IMPORTED_MODULE_0__.changeButtonCase)();\n  }\n}\n\n\n//# sourceURL=webpack://key-board/./src/js/dataStorage.js?");

/***/ }),

/***/ "./src/js/eventChangeLanguage.js":
/*!***************************************!*\
  !*** ./src/js/eventChangeLanguage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeLanguage)\n/* harmony export */ });\n/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataStorage */ \"./src/js/dataStorage.js\");\n\n\nfunction changeLanguage(array) {\n  const pressed = new Set();\n  document.addEventListener('keydown', (event) => {\n    pressed.add(event.code);\n    for (let i = 0; i < array.length; i += 1) {\n      if (!pressed.has(array[i])) {\n        return;\n      }\n    }\n    pressed.clear();\n    (0,_dataStorage__WEBPACK_IMPORTED_MODULE_0__.checkLanguageInLocalStorage)();\n  });\n  document.addEventListener('keyup', (event) => {\n    pressed.delete(event.code);\n  });\n}\n\n\n//# sourceURL=webpack://key-board/./src/js/eventChangeLanguage.js?");

/***/ }),

/***/ "./src/js/eventClickButton.js":
/*!************************************!*\
  !*** ./src/js/eventClickButton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickButton)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nfunction changeButtonColor(event) {\n  const { target } = event;\n  target.classList.add('key-board-button-hover');\n  target.classList.remove('key-board-button-color');\n  setTimeout(() => {\n    target.classList.add('key-board-button-color');\n    target.classList.remove('key-board-button-hover');\n  }, 500);\n}\n\nfunction clickButton(event) {\n  const { target } = event;\n  const targetAttributeButton = target.getAttribute('data-button');\n  const targetAttributeSpeciaButton = target.getAttribute('data-special-button');\n  const textAreaClassList = target.classList.contains('text-area');\n  if (!targetAttributeButton && !targetAttributeSpeciaButton && !textAreaClassList) {\n    return;\n  }\n\n  if (targetAttributeButton) {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createText)(event);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showTextInTextArea)();\n    changeButtonColor(event);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.changeCursorPosition)();\n  }\n  if (targetAttributeSpeciaButton) {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useBackSpaceButton)(event);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useEnterButton)(event);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useDeleteButton)(event);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useArrowsButton)(event);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useCapsLockButton)(event);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useSpaceButton)(event);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useTabButton)(event);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.changeCursorPosition)();\n    changeButtonColor(event);\n  }\n}\n\n\n//# sourceURL=webpack://key-board/./src/js/eventClickButton.js?");

/***/ }),

/***/ "./src/js/eventKeyBoard.js":
/*!*********************************!*\
  !*** ./src/js/eventKeyBoard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ keyDownClick)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataStorage */ \"./src/js/dataStorage.js\");\n\n\n\nfunction keyDownClick(event) {\n  _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item) => {\n    const buttonCode = event.code;\n    if (buttonCode === item.id) {\n      const itemId = document.getElementById(item.id);\n      if (buttonCode === 'CapsLock') {\n        (0,_dataStorage__WEBPACK_IMPORTED_MODULE_1__.checkSessionStorage)();\n      }\n      itemId.classList.add('key-board-button-hover');\n      setTimeout(() => {\n        itemId.classList.remove('key-board-button-hover');\n      }, 500);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://key-board/./src/js/eventKeyBoard.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ \"./src/index.html\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _keyBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyBoard */ \"./src/js/keyBoard.js\");\n/* harmony import */ var _eventClickButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventClickButton */ \"./src/js/eventClickButton.js\");\n/* harmony import */ var _eventKeyBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventKeyBoard */ \"./src/js/eventKeyBoard.js\");\n/* harmony import */ var _eventChangeLanguage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventChangeLanguage */ \"./src/js/eventChangeLanguage.js\");\n\n\n\n\n\n\n\n(0,_keyBoard__WEBPACK_IMPORTED_MODULE_2__.createKeyBoard)();\nconst wrapper = document.querySelector('.wrapper');\nwrapper.addEventListener('click', _eventClickButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\ndocument.addEventListener('keydown', _eventKeyBoard__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n(0,_eventChangeLanguage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(['ControlLeft', 'AltLeft']);\n\n\n//# sourceURL=webpack://key-board/./src/js/index.js?");

/***/ }),

/***/ "./src/js/keyBoard.js":
/*!****************************!*\
  !*** ./src/js/keyBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeButtonCase\": () => (/* binding */ changeButtonCase),\n/* harmony export */   \"changeButtonTextContent\": () => (/* binding */ changeButtonTextContent),\n/* harmony export */   \"createKeyBoard\": () => (/* binding */ createKeyBoard)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/js/constants.js\");\n\n\nconst arraySpecialButtons = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter',\n  'ShiftLeft', 'ShiftRight', 'ArrowUp', 'ControlLeft', 'MetaLeft', 'AltLeft',\n  'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',\n];\nfunction createKeyBoard() {\n  const { body } = document;\n  const keyBoardWrapper = document.createElement('section');\n  keyBoardWrapper.classList.add('wrapper');\n  body.append(keyBoardWrapper);\n\n  const textArea = document.createElement('textarea');\n  textArea.classList.add('text-area');\n  textArea.setAttribute('id', 'text-area');\n  textArea.setAttribute('rows', 20);\n  textArea.setAttribute('cols', 50);\n  keyBoardWrapper.append(textArea);\n\n  const listOfButtons = document.createElement('ul');\n  listOfButtons.classList.add('list-of-buttons');\n  textArea.after(listOfButtons);\n\n  _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item) => {\n    const keyBoardItem = document.createElement('li');\n    keyBoardItem.classList.add('key-board-item');\n    listOfButtons.append(keyBoardItem);\n\n    const keyBoardButton = document.createElement('button');\n    keyBoardButton.classList.add('key-board-button');\n    keyBoardButton.classList.add('key-board-button-color');\n    keyBoardButton.setAttribute('type', 'button');\n    keyBoardButton.setAttribute('id', item.id);\n    if (arraySpecialButtons.includes(item.id)) {\n      keyBoardButton.setAttribute('data-special-button', 'special-button');\n    } else {\n      keyBoardButton.setAttribute('data-button', 'button');\n    }\n    if (localStorage.getItem('change language')) {\n      if (!item.ru) {\n        keyBoardButton.textContent = item.eng;\n      } else {\n        keyBoardButton.textContent = item.ru;\n      }\n    } else {\n      keyBoardButton.textContent = item.eng;\n    }\n    keyBoardItem.append(keyBoardButton);\n\n    const buttonSpace = document.getElementById('Space');\n    if (buttonSpace) {\n      buttonSpace.classList.add('button-space');\n    }\n  });\n  const leftShift = document.getElementById('ShiftLeft');\n  leftShift.classList.add('left-shift');\n  const rightShift = document.getElementById('ShiftRight');\n  rightShift.classList.add('right-shift');\n  const capsLock = document.getElementById('CapsLock');\n  capsLock.classList.add('caps-lock');\n  const enter = document.getElementById('Enter');\n  enter.classList.add('enter');\n  const backspace = document.getElementById('Backspace');\n  backspace.classList.add('back-space');\n  const tab = document.getElementById('Tab');\n  tab.classList.add('tab');\n\n  const descriptionSystem = document.createElement('p');\n  descriptionSystem.classList.add('description-system');\n  descriptionSystem.textContent = 'Клавиатура выполнена в операционной системе Windows';\n  listOfButtons.after(descriptionSystem);\n  const descriptionLanguage = document.createElement('p');\n  descriptionLanguage.classList.add('description-language');\n  descriptionLanguage.textContent = 'Для переключения языка комбинация: cntrl + alt';\n  descriptionSystem.after(descriptionLanguage);\n}\n\nfunction changeButtonTextContent() {\n  _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item) => {\n    const keyBoardButton = document.getElementById(item.id);\n    if (localStorage.getItem('change language')) {\n      if (!item.ru) {\n        keyBoardButton.textContent = item.eng;\n      } else {\n        keyBoardButton.textContent = item.ru;\n      }\n    } else {\n      keyBoardButton.textContent = item.eng;\n    }\n  });\n}\n\nfunction changeButtonCase() {\n  _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item) => {\n    const keyBoardButton = document.getElementById(item.id);\n    if (arraySpecialButtons.includes(item.id)) {\n      keyBoardButton.textContent = item.eng;\n    } else if (sessionStorage.getItem('capsLockActive')) {\n      keyBoardButton.textContent = keyBoardButton.textContent.toUpperCase();\n    } else {\n      keyBoardButton.textContent = keyBoardButton.textContent.toLowerCase();\n    }\n  });\n}\n\n\n//# sourceURL=webpack://key-board/./src/js/keyBoard.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeCursorPosition\": () => (/* binding */ changeCursorPosition),\n/* harmony export */   \"createText\": () => (/* binding */ createText),\n/* harmony export */   \"showTextInTextArea\": () => (/* binding */ showTextInTextArea),\n/* harmony export */   \"useArrowsButton\": () => (/* binding */ useArrowsButton),\n/* harmony export */   \"useBackSpaceButton\": () => (/* binding */ useBackSpaceButton),\n/* harmony export */   \"useCapsLockButton\": () => (/* binding */ useCapsLockButton),\n/* harmony export */   \"useDeleteButton\": () => (/* binding */ useDeleteButton),\n/* harmony export */   \"useEnterButton\": () => (/* binding */ useEnterButton),\n/* harmony export */   \"useSpaceButton\": () => (/* binding */ useSpaceButton),\n/* harmony export */   \"useTabButton\": () => (/* binding */ useTabButton)\n/* harmony export */ });\n/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataStorage */ \"./src/js/dataStorage.js\");\n\n\nlet text = '';\nlet cursorPositionEnd = text.length;\nlet cursorPositionStart = text.length;\n\nfunction showTextInTextArea() {\n  const textAreaId = document.getElementById('text-area');\n  textAreaId.textContent = text;\n}\n\nfunction createText(event) {\n  const { target } = event;\n  const targetTextContent = target.textContent;\n  const textAreaId = document.getElementById('text-area');\n  cursorPositionEnd = textAreaId.selectionEnd;\n  if (cursorPositionEnd !== text.length) {\n    const textBeforeCursor = text.slice(0, cursorPositionEnd);\n    const textBeAfterCursor = text.slice(cursorPositionEnd);\n    text = textBeforeCursor + targetTextContent + textBeAfterCursor;\n    cursorPositionEnd = text.length + 1;\n    cursorPositionStart = text.length + 1;\n  } else {\n    cursorPositionEnd = text.length + 1;\n    cursorPositionStart = text.length + 1;\n    text += targetTextContent;\n  }\n}\n\nfunction useBackSpaceButton(event) {\n  const { target } = event;\n  const textAreaId = document.getElementById('text-area');\n  const targetBackSpaceId = document.getElementById('Backspace');\n  if (targetBackSpaceId !== target) {\n    return;\n  }\n  if (targetBackSpaceId === target) {\n    if (cursorPositionEnd === text.length - 1) {\n      const arrayTextAreaContent = text.split('');\n      arrayTextAreaContent.pop();\n      text = arrayTextAreaContent.join('');\n    } else {\n      cursorPositionEnd = textAreaId.selectionEnd - 1;\n      const textBeforeCursor = text.slice(0, cursorPositionEnd);\n      const textBeAfterCursor = text.slice(cursorPositionEnd + 1);\n      cursorPositionEnd -= 1;\n      cursorPositionStart -= 1;\n      text = textBeforeCursor + textBeAfterCursor;\n    }\n    showTextInTextArea();\n  }\n}\n\nfunction useDeleteButton(event) {\n  const { target } = event;\n  const textAreaId = document.getElementById('text-area');\n  const targetDeleteId = document.getElementById('Delete');\n  if (targetDeleteId !== target) {\n    return;\n  }\n  if (targetDeleteId === target) {\n    cursorPositionEnd = textAreaId.selectionEnd;\n    const textBeforeCursor = text.slice(0, cursorPositionEnd);\n    const textBeAfterCursor = text.slice(cursorPositionEnd + 1);\n    text = textBeforeCursor + textBeAfterCursor;\n    showTextInTextArea();\n  }\n}\n\nfunction changeCursorPosition() {\n  const textArea = document.getElementById('text-area');\n  textArea.focus();\n  textArea.setSelectionRange(cursorPositionStart, cursorPositionEnd);\n}\n\nfunction useEnterButton(event) {\n  const { target } = event;\n  const targetEnter = document.getElementById('Enter');\n  const textBeforeCursor = text.slice(0, cursorPositionEnd);\n  cursorPositionEnd = textBeforeCursor.length + 1;\n  cursorPositionStart = textBeforeCursor.length + 1;\n  if (target === targetEnter) {\n    text = `${textBeforeCursor}\\n`;\n    showTextInTextArea();\n  }\n}\n\nfunction useArrowsButton(event) {\n  const { target } = event;\n  const targetRightArrow = document.getElementById('ArrowRight');\n  const targetLeftArrow = document.getElementById('ArrowLeft');\n  const targetUpArrow = document.getElementById('ArrowUp');\n  const targetDownArrow = document.getElementById('ArrowDown');\n  if (target === targetRightArrow) {\n    text += targetRightArrow.textContent;\n  } else if (target === targetLeftArrow) {\n    text += targetLeftArrow.textContent;\n  } else if (target === targetUpArrow) {\n    text += targetUpArrow.textContent;\n  } else if (target === targetDownArrow) {\n    text += targetDownArrow.textContent;\n  }\n  showTextInTextArea();\n}\nfunction useCapsLockButton(event) {\n  const { target } = event;\n  const targetCapsLock = document.getElementById('CapsLock');\n  if (target === targetCapsLock) {\n    (0,_dataStorage__WEBPACK_IMPORTED_MODULE_0__.checkSessionStorage)();\n  }\n}\n\nfunction useSpaceButton(event) {\n  const { target } = event;\n  const targetSpace = document.getElementById('Space');\n  if (target === targetSpace) {\n    text += ' ';\n    showTextInTextArea();\n  }\n}\n\nfunction useTabButton(event) {\n  const { target } = event;\n  const targetTab = document.getElementById('Tab');\n  if (target === targetTab) {\n    cursorPositionStart += 4;\n    cursorPositionEnd += 4;\n    text += '    ';\n    showTextInTextArea();\n  }\n}\n\n\n//# sourceURL=webpack://key-board/./src/js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;