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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/raw_components/index.html":
/*!***************************************!*\
  !*** ./src/raw_components/index.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./index.html\";\n\n//# sourceURL=webpack:///./src/raw_components/index.html?");

/***/ }),

/***/ "./src/raw_components/to-do-app.js":
/*!*****************************************!*\
  !*** ./src/raw_components/to-do-app.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _to_do_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-item.js */ \"./src/raw_components/to-do-item.js\");\n/* harmony import */ var _to_do_item_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_to_do_item_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n    <style>\\n        :host {\\n            display: block;\\n            font-family: sans-serif;\\n            text-align: center;\\n        }\\n        button {\\n            border: none;\\n            cursor: pointer;\\n        }\\n        ul {\\n            list-style: none;\\n            padding: 0;\\n        }\\n    </style>\\n    <h3>Raw web components</h3>\\n    <br>\\n    <h1>To do</h1>\\n    <form id=\\\"todo-input\\\">\\n        <input type=\\\"text\\\" placeholder=\\\"Add a new to do\\\"></input>\\n        <button>\\u2705</button>\\n    </form>\\n    <ul id=\\\"todos\\\"></ul>\\n\";\n\nvar TodoApp =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(TodoApp, _HTMLElement);\n\n  function TodoApp() {\n    var _this;\n\n    _classCallCheck(this, TodoApp);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoApp).call(this));\n    _this._shadowRoot = _this.attachShadow({\n      'mode': 'open'\n    });\n\n    _this._shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$todoList = _this._shadowRoot.querySelector('ul');\n    _this.$input = _this._shadowRoot.querySelector('input');\n    _this.$submitButton = _this._shadowRoot.querySelector('button');\n\n    _this.$submitButton.addEventListener('click', _this._addTodo.bind(_assertThisInitialized(_this)));\n\n    return _this;\n  }\n\n  _createClass(TodoApp, [{\n    key: \"_removeTodo\",\n    value: function _removeTodo(e) {\n      this._todos.splice(e.detail, 1);\n\n      this._renderTodoList();\n    }\n  }, {\n    key: \"_toggleTodo\",\n    value: function _toggleTodo(e) {\n      var todo = this._todos[e.detail];\n      this._todos[e.detail] = Object.assign({}, todo, {\n        checked: !todo.checked\n      });\n\n      this._renderTodoList();\n    }\n  }, {\n    key: \"_addTodo\",\n    value: function _addTodo() {\n      if (this.$input.value.length > 0) {\n        this._todos.push({\n          text: this.$input.value,\n          checked: false\n        });\n\n        this._renderTodoList();\n\n        this.$input.value = '';\n      }\n    }\n  }, {\n    key: \"_renderTodoList\",\n    value: function _renderTodoList() {\n      var _this2 = this;\n\n      this.$todoList.innerHTML = '';\n\n      this._todos.forEach(function (todo, index) {\n        var $todoItem = document.createElement('to-do-item');\n        $todoItem.setAttribute('text', todo.text);\n\n        if (todo.checked) {\n          $todoItem.setAttribute('checked', '');\n        }\n\n        $todoItem.setAttribute('index', index);\n        $todoItem.addEventListener('onRemove', _this2._removeTodo.bind(_this2));\n        $todoItem.addEventListener('onToggle', _this2._toggleTodo.bind(_this2));\n\n        _this2.$todoList.appendChild($todoItem);\n      });\n    }\n  }, {\n    key: \"todos\",\n    set: function set(value) {\n      this._todos = value;\n\n      this._renderTodoList();\n    },\n    get: function get() {\n      return this._todos;\n    }\n  }]);\n\n  return TodoApp;\n}(_wrapNativeSuper(HTMLElement));\n\nwindow.customElements.define('to-do-app', TodoApp);\n\n//# sourceURL=webpack:///./src/raw_components/to-do-app.js?");

/***/ }),

/***/ "./src/raw_components/to-do-item.js":
/*!******************************************!*\
  !*** ./src/raw_components/to-do-item.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n    <style>\\n        :host {\\n            display: block;\\n            font-family: sans-serif;\\n        }\\n        .completed {\\n            text-decoration: line-through;\\n        }\\n        button {\\n            border: none;\\n            cursor: pointer;\\n        }\\n    </style>\\n    <li class=\\\"item\\\">\\n        <input type=\\\"checkbox\\\">\\n        <label></label>\\n        <button>\\u274C</button>\\n    </li>\\n\";\n\nvar TodoItem =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(TodoItem, _HTMLElement);\n\n  function TodoItem() {\n    var _this;\n\n    _classCallCheck(this, TodoItem);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoItem).call(this));\n    _this._shadowRoot = _this.attachShadow({\n      'mode': 'open'\n    });\n\n    _this._shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$item = _this._shadowRoot.querySelector('.item');\n    _this.$removeButton = _this._shadowRoot.querySelector('button');\n    _this.$text = _this._shadowRoot.querySelector('label');\n    _this.$checkbox = _this._shadowRoot.querySelector('input');\n\n    _this.$removeButton.addEventListener('click', function (e) {\n      _this.dispatchEvent(new CustomEvent('onRemove', {\n        detail: _this.index\n      }));\n    });\n\n    _this.$checkbox.addEventListener('click', function (e) {\n      _this.dispatchEvent(new CustomEvent('onToggle', {\n        detail: _this.index\n      }));\n    });\n\n    return _this;\n  }\n\n  _createClass(TodoItem, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      if (!this.hasAttribute('text')) {\n        this.setAttribute('text', 'placeholder');\n      }\n\n      this._renderTodoItem();\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      switch (name) {\n        case 'text':\n          this._text = newValue;\n          break;\n\n        case 'checked':\n          this._checked = this.hasAttribute('checked');\n          break;\n\n        case 'index':\n          this._index = parseInt(newValue);\n          break;\n      }\n    }\n  }, {\n    key: \"_renderTodoItem\",\n    value: function _renderTodoItem() {\n      if (this.hasAttribute('checked')) {\n        this.$item.classList.add('completed');\n        this.$checkbox.setAttribute('checked', '');\n      } else {\n        this.$item.classList.remove('completed');\n        this.$checkbox.removeAttribute('checked');\n      }\n\n      this.$text.innerHTML = this._text;\n    }\n  }, {\n    key: \"index\",\n    set: function set(val) {\n      this.setAttribute('index', val);\n    },\n    get: function get() {\n      return this._index;\n    }\n  }, {\n    key: \"checked\",\n    get: function get() {\n      return this.hasAttribute('checked');\n    },\n    set: function set(val) {\n      if (val) {\n        this.setAttribute('checked', '');\n      } else {\n        this.removeAttribute('checked');\n      }\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return ['text', 'checked', 'index'];\n    }\n  }]);\n\n  return TodoItem;\n}(_wrapNativeSuper(HTMLElement));\n\nwindow.customElements.define('to-do-item', TodoItem);\n\n//# sourceURL=webpack:///./src/raw_components/to-do-item.js?");

/***/ }),

/***/ 0:
/*!*******************************************************************************!*\
  !*** multi ./src/raw_components/index.html ./src/raw_components/to-do-app.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/raw_components/index.html */\"./src/raw_components/index.html\");\nmodule.exports = __webpack_require__(/*! ./src/raw_components/to-do-app.js */\"./src/raw_components/to-do-app.js\");\n\n\n//# sourceURL=webpack:///multi_./src/raw_components/index.html_./src/raw_components/to-do-app.js?");

/***/ })

/******/ });