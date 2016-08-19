/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n// webpack assets\n\n__webpack_require__(1);\n__webpack_require__(2);\n\n// npm modules\nvar angular = __webpack_require__(12);\n\n// angular modules\nangular.module('demoApp', []);\n\n// angular services\n\n// angular components\n__webpack_require__(14);\n__webpack_require__(18);\n__webpack_require__(19);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/entry.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/entry.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__.p + \"index.html\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/file-loader?name=[name].[ext]!./app/html/index.html\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/html/index.html?./~/file-loader?name=%5Bname%5D.%5Bext%5D");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/scss/base.scss\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/scss/base.scss?");

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(13);\nmodule.exports = angular;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/angular/index.js\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/angular/index.js?");

/***/ },
/* 13 */
/***/ function(module, exports) {


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(15);\n\nvar angular = __webpack_require__(12);\n\nangular.module('demoApp').directive('appMain', function () {\n  return {\n    restrict: 'E',\n    replace: true,\n    template: __webpack_require__(17),\n    controller: ['listService', MainController],\n    controllerAs: 'mainCtrl',\n    bindToController: true,\n    scope: {}\n  };\n});\n\nfunction MainController(listService) {\n  var _this = this;\n\n  listService.fetchList().then(function (lists) {\n    _this.list = lists;\n  }).catch(function (err) {\n    alert('that failed');\n  });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/main/index.js\n ** module id = 14\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/main/index.js?");

/***/ },
/* 15 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/main/main.scss\n ** module id = 15\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/main/main.scss?");

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	eval("module.exports = \"<main class=\\\"app-main\\\">\\n  <app-create-list-form></app-create-list-form>\\n  <app-list ng-repeat=\\\"itme in mainCtrl.lists\\\" list=\\\"item\\\"></app-list>\\n</main>\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/main/main.html\n ** module id = 17\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/main/main.html?");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar angular = __webpack_require__(12);\nangular.module('demoApp').factory('listService', ['$log', '$q', '$http', listService]);\n\nfunction listService($log, $q, $http) {\n  var service = {};\n  var url = '$(__API_URL__)/api/list';\n  var config = {\n    header: {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json'\n    }\n  };\n  service.lists = [];\n\n  service.createList = function (data) {\n    var _this = this;\n\n    $log.debug('listService.createList');\n    return $q(function (resolve, reject) {\n\n      $http.post(url, data, config).then(function (res) {\n        $log.log('POST ' + url + ': ' + res.status + ' sucess!');\n        _this.lists.push(res.data);\n        resolve(res.data);\n      }).catch(function (err) {\n        $log.error('POST ' + url + ':' + err.status + 'failure!');\n        reject(err);\n      });\n    });\n  };\n\n  service.fetchLists = function () {\n    var _this2 = this;\n\n    $log.debug('listService.fetchList');\n    return $q(function (resolve, reject) {\n      $http.get(url, config).then(function (res) {\n        $log.log('GET ' + url + ': ' + res.status + ' sucess!');\n        _this2.lists = res.data;\n        resolve(_this2.lists);\n      }).catch(function (err) {\n        $log.error('GET ' + url + ':' + err.status + 'failure!');\n        reject(err);\n      });\n    });\n  };\n\n  service.updateList = function (data, res) {\n    var _this3 = this;\n\n    $log.debug('listService.updateList');\n    return $q(function (resolve, reject) {\n      $http.put(url + '/' + data._id, data, config).then(function (lists) {\n        $log.log('GET ' + url + ':' + res.status + ' sucess!');\n        _this3.lists.forEach(function (list, index) {\n          if (list._id === res.data._id) _this3.lists[index] = res.data;\n        });\n        resolve(res.data);\n      }).catch(function (err) {\n        $log.error('GET ' + url + ':' + err.status + 'failure!');\n        reject(err);\n      });\n    });\n  };\n  service.deleteList = function (listId) {\n    var _this4 = this;\n\n    $log.debug('listService.deleteList');\n    return $q(function (resolve, reject) {\n      $http.delete(url + '/' + listId, config).then.then(function (res) {\n        $log.log('DELETE ' + url + ':' + res.status + ' sucess!');\n        _this4.lists.forEach(function (list, index) {\n          if (list._id === listId) _this4.lists.splice(index, 1);\n        });\n        resolve(res.data);\n      }).catch(function (err) {\n        $log.error('PUT ' + url + ':' + err.status + 'failure!');\n        reject(err);\n      });\n    });\n  };\n  return service;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/service/list-service.js\n ** module id = 18\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/service/list-service.js?");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(20);\nvar angular = __webpack_require__(12);\nangular.module('demoApp').directive('appList', function () {\n  return {\n    restrict: 'E',\n    replace: true,\n    template: __webpack_require__(22),\n    controller: ['$log', 'listService', 'noteService', listController],\n    controllerAs: 'listCtrl',\n    bindToController: true,\n    scope: {\n      list: '='\n    }\n  };\n});\n\nfunction ListController($log, listService, noteService) {\n  this.deleteList = function () {\n    $log.debug('listCtrl.deleteList');\n    listService.deleteList(this.list._id).catch(function () {\n      alert('you failed');\n    });\n  };\n  this.createNote = function (data) {\n    var _this = this;\n\n    $log.debug('listCtrl.createNote');\n    data.listId = this.list._id;\n\n    noteService.createNote(data).then(function (note) {\n      _this.list.notes.push(note);\n    }).catch(function () {\n      alert('dat sho anint working at atll ');\n    });\n  };\n  this.deleteNote = function (noteId) {\n    var _this2 = this;\n\n    $log.debug('listCtrl.deleteNote');\n\n    noteService.deleteNote(noteId).then(function () {\n      _this2.list.notes.forEach(function (note, index) {\n        if (note._id === noteId) _this2.list.notes.splice(index, 1);\n      });\n    }).catch(function () {\n      alert('Dammit Jim');\n    });\n  };\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/list/index.js\n ** module id = 19\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/list/index.js?");

/***/ },
/* 20 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/list/list.scss\n ** module id = 20\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/list/list.scss?");

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"app-list\\\">\\n  <i class=\\\"fa fa-trash-o\\\" ng-click=\\\"listCtrl.deleteList\\\"></i>\\n  <h2>{{listCtrl.list.name}}</h2>\\n  <ul>\\n    <li>\\n    <app-note-li ng-repeat=\\\"item in listCtrl.list.notes\\\" note=\\\"item\\\" delete-note=\\\"listCtrl.deleteNote(noteId)\\\"></app-note-li>\\n    <app-create-note-form create-note=\\\"listCtrl.createNote(note)\\\"></app-create-note-form>\\n  </li>\\n  </ul>\\n</div>\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/list/list.html\n ** module id = 22\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/list/list.html?");

/***/ }
/******/ ]);