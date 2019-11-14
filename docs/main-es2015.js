(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<app-header></app-header>\r\n\r\n<app-beasts-panel *ngIf=\"paging.currentPage == 'beasts'\"></app-beasts-panel>\r\n<app-birds-panel *ngIf=\"paging.currentPanel == 'birds'\" ></app-birds-panel>\r\n<app-wilds-panel *ngIf=\"paging.currentPage == 'wilds'\"></app-wilds-panel>\r\n<app-paginator (moveItem)=\"getUp($event)\"></app-paginator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <h3>{{ beastsSvc.currentBeast.name }}</h3>\r\n    <div>size: {{ beastsSvc.currentBeast.size }}</div>\r\n    <div>lifeSpan: {{ beastsSvc.currentBeast.lifeSpan }}</div>\r\n    <div>habitat: {{ beastsSvc.currentBeast.habitat }}</div>\r\n    <img [src]=\"beastsSvc.currentBeast.img\" />\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <h3>{{ birdsSvc.currentBird.name }}</h3>\r\n    <div>size: {{ birdsSvc.currentBird.size }}</div>\r\n    <div>lifeSpan: {{ birdsSvc.currentBird.lifeSpan }}</div>\r\n    <div>habitat: {{ birdsSvc.currentBird.habitat }}</div>\r\n    <img [src]=\"birdsSvc.currentBird.img\" />\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/cards.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/cards.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <h3>{{ wildsSvc.currentcurrentWild.name }}</h3>\r\n    <div>size: {{ wildsSvc.currentcurrentWild.size }}</div>\r\n    <div>lifeSpan: {{ wildsSvc.currentcurrentWild.lifeSpan }}</div>\r\n    <div>habitat: {{ wildsSvc.currentcurrentWild.habitat }}</div>\r\n    <img [src]=\"wildsSvc.currentcurrentWild.img\" />\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/general.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/general.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>general works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background-header\">\r\n    <div class=\"logo-zoo\">\r\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9P9cyvQuLBlpP4cQpTLIYjoRDlkqNci9m6NtJsx4rvNr7oe6&s\">\r\n    </div>\r\n    <app-nav></app-nav>\r\n    <div class=\"hello-user\">\r\n        Wellcom!\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav\">\r\n    <ul>\r\n        <li (click)=\"navToPage('birds')\">Birds</li>\r\n        <li (click)=\"navToPage('beasts')\">Beasts</li>\r\n        <li (click)=\"navToPage('wilds')\">Wilds</li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"arrows\">\r\n    <div (click)=\"moveItemPage(1)\">\r\n          <img src=\"https://publicdomainvectors.org/photos/pitr_red_arrows_set_4.png\" />\r\n    </div>\r\n    <div (click)=\"moveItemPage(-1)\">\r\n      <img src=\"https://publicdomainvectors.org/photos/pitr_red_arrows_set_4.png\" class=\"revrs\"/>\r\n      </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Welcome to the beasts observatory</h1>\r\n\r\n<div class=\"\">\r\n  <div>\r\n      <h2>The beasts list</h2>\r\n      <ul>\r\n          <li *ngFor=\"let i of beastsSvc.beasts\">{{ i.name }}</li>\r\n      </ul>\r\n  </div>\r\n  <div>\r\n        <app-beasts-card></app-beasts-card>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Welcome to the birds observatory</h1>\r\n\r\n<div class=\"\">\r\n  <div>\r\n      <h2>The bird list</h2>\r\n      <ul>\r\n          <li *ngFor=\"let i of birdsSvc.birds\">{{ i.name }}</li>\r\n      </ul>\r\n  </div>\r\n  <div>\r\n        <app-bird-card></app-bird-card>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/panels.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/panels.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>panels works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Welcome to the wilds observatory</h1>\r\n\r\n<div class=\"\">\r\n  <div>\r\n      <h2>The wilds list</h2>\r\n      <ul>\r\n          <li *ngFor=\"let i of wildsSvc.wilds\">{{ i.name }}</li>\r\n      </ul>\r\n  </div>\r\n  <div>\r\n        <app-wilds-card></app-wilds-card>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_paging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/paging.service */ "./src/app/services/paging.service.ts");
/* harmony import */ var _services_birds_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/birds.service */ "./src/app/services/birds.service.ts");
/* harmony import */ var _services_beasts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/beasts.service */ "./src/app/services/beasts.service.ts");
/* harmony import */ var _services_wild_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/wild.service */ "./src/app/services/wild.service.ts");






let AppComponent = class AppComponent {
    constructor(paging, birds, beasts, wilds) {
        this.paging = paging;
        this.birds = birds;
        this.beasts = beasts;
        this.wilds = wilds;
        this.title = 'Zoo';
    }
    getUp(ev) {
        console.log('AppComponent  getUp', ev);
        switch (this.paging.currentPanel) {
            case 'birds':
                let newBirdIndex = this.getNewCurrentIndex(this.birds.currentBirdIndex, ev, this.birds.birds);
                this.birds.currentBirdIndex = newBirdIndex;
                this.birds.currentBird = this.birds.birds[newBirdIndex];
                break;
            case 'beasts':
                let newBeastsIndex = this.getNewCurrentIndex(this.beasts.currentBeastsIndex, ev, this.beasts.beasts);
                this.beasts.currentBeastsIndex = newBeastsIndex;
                this.beasts.currentBeasts = this.beasts.beasts[newBeastsIndex];
                break;
            case 'wilds':
                let newWildsIndex = this.getNewCurrentIndex(this.wilds.currentWildsIndex, ev, this.wilds.wilds);
                this.wilds.currentWildsIndex = newWildsIndex;
                this.wilds.currentWilds = this.wilds.wilds[newWildsIndex];
                break;
        }
    }
    getNewCurrentIndex(current, delta, array) {
        let max = array.length - 1;
        let newIndex = current + delta;
        if (newIndex > max) {
            newIndex = 0;
        }
        if (newIndex < 0) {
            newIndex = max;
        }
        return newIndex;
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_paging_service__WEBPACK_IMPORTED_MODULE_2__["PagingService"] },
    { type: _services_birds_service__WEBPACK_IMPORTED_MODULE_3__["BirdsService"] },
    { type: _services_beasts_service__WEBPACK_IMPORTED_MODULE_4__["BeastsService"] },
    { type: _services_wild_service__WEBPACK_IMPORTED_MODULE_5__["WildService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_general_general_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/general/general.component */ "./src/app/comps/general/general.component.ts");
/* harmony import */ var _comps_panels_panels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/panels/panels.component */ "./src/app/comps/panels/panels.component.ts");
/* harmony import */ var _comps_general_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/general/header/header.component */ "./src/app/comps/general/header/header.component.ts");
/* harmony import */ var _comps_panels_beasts_panel_beasts_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/panels/beasts-panel/beasts-panel.component */ "./src/app/comps/panels/beasts-panel/beasts-panel.component.ts");
/* harmony import */ var _comps_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/panels/birds-panel/birds-panel.component */ "./src/app/comps/panels/birds-panel/birds-panel.component.ts");
/* harmony import */ var _comps_panels_wilds_panel_wilds_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/panels/wilds-panel/wilds-panel.component */ "./src/app/comps/panels/wilds-panel/wilds-panel.component.ts");
/* harmony import */ var _comps_cards_cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/cards/cards.component */ "./src/app/comps/cards/cards.component.ts");
/* harmony import */ var _comps_cards_beast_card_beast_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/cards/beast-card/beast-card.component */ "./src/app/comps/cards/beast-card/beast-card.component.ts");
/* harmony import */ var _comps_cards_bird_card_bird_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/cards/bird-card/bird-card.component */ "./src/app/comps/cards/bird-card/bird-card.component.ts");
/* harmony import */ var _comps_cards_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/cards/wild-card/wild-card.component */ "./src/app/comps/cards/wild-card/wild-card.component.ts");
/* harmony import */ var _comps_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/general/nav/nav.component */ "./src/app/comps/general/nav/nav.component.ts");
/* harmony import */ var _comps_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comps/general/paginator/paginator.component */ "./src/app/comps/general/paginator/paginator.component.ts");
/* harmony import */ var _comps_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comps/general/footer/footer.component */ "./src/app/comps/general/footer/footer.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _comps_general_general_component__WEBPACK_IMPORTED_MODULE_4__["GeneralComponent"],
            _comps_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
            _comps_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_14__["NavComponent"],
            _comps_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_15__["PaginatorComponent"],
            _comps_panels_panels_component__WEBPACK_IMPORTED_MODULE_5__["PanelsComponent"],
            _comps_general_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _comps_panels_beasts_panel_beasts_panel_component__WEBPACK_IMPORTED_MODULE_7__["BeastsPanelComponent"],
            _comps_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_8__["BirdsPanelComponent"],
            _comps_panels_wilds_panel_wilds_panel_component__WEBPACK_IMPORTED_MODULE_9__["WildsPanelComponent"],
            _comps_cards_cards_component__WEBPACK_IMPORTED_MODULE_10__["CardsComponent"],
            _comps_cards_beast_card_beast_card_component__WEBPACK_IMPORTED_MODULE_11__["BeastCardComponent"],
            _comps_cards_bird_card_bird_card_component__WEBPACK_IMPORTED_MODULE_12__["BirdCardComponent"],
            _comps_cards_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_13__["WildCardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comps/cards/beast-card/beast-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/comps/cards/beast-card/beast-card.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvYmVhc3QtY2FyZC9iZWFzdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXJkcy9iZWFzdC1jYXJkL2JlYXN0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiAxMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comps/cards/beast-card/beast-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comps/cards/beast-card/beast-card.component.ts ***!
  \****************************************************************/
/*! exports provided: BeastCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastCardComponent", function() { return BeastCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_beasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/beasts.service */ "./src/app/services/beasts.service.ts");



let BeastCardComponent = class BeastCardComponent {
    constructor(beastsSvc) {
        this.beastsSvc = beastsSvc;
    }
    ngOnInit() {
    }
};
BeastCardComponent.ctorParameters = () => [
    { type: _services_beasts_service__WEBPACK_IMPORTED_MODULE_2__["BeastsService"] }
];
BeastCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beasts-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beast-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beast-card.component.css */ "./src/app/comps/cards/beast-card/beast-card.component.css")).default]
    })
], BeastCardComponent);



/***/ }),

/***/ "./src/app/comps/cards/bird-card/bird-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/comps/cards/bird-card/bird-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvYmlyZC1jYXJkL2JpcmQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvY2FyZHMvYmlyZC1jYXJkL2JpcmQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDEwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/comps/cards/bird-card/bird-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comps/cards/bird-card/bird-card.component.ts ***!
  \**************************************************************/
/*! exports provided: BirdCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdCardComponent", function() { return BirdCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_birds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/birds.service */ "./src/app/services/birds.service.ts");



let BirdCardComponent = class BirdCardComponent {
    constructor(birdsSvc) {
        this.birdsSvc = birdsSvc;
    }
    ngOnInit() {
    }
};
BirdCardComponent.ctorParameters = () => [
    { type: _services_birds_service__WEBPACK_IMPORTED_MODULE_2__["BirdsService"] }
];
BirdCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bird-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bird-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bird-card.component.css */ "./src/app/comps/cards/bird-card/bird-card.component.css")).default]
    })
], BirdCardComponent);



/***/ }),

/***/ "./src/app/comps/cards/cards.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/cards/cards.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/comps/cards/cards.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/cards/cards.component.ts ***!
  \************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardsComponent = class CardsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/cards.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cards.component.css */ "./src/app/comps/cards/cards.component.css")).default]
    })
], CardsComponent);



/***/ }),

/***/ "./src/app/comps/cards/wild-card/wild-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/comps/cards/wild-card/wild-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvd2lsZC1jYXJkL3dpbGQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvY2FyZHMvd2lsZC1jYXJkL3dpbGQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDEwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/comps/cards/wild-card/wild-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comps/cards/wild-card/wild-card.component.ts ***!
  \**************************************************************/
/*! exports provided: WildCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildCardComponent", function() { return WildCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_wild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wild.service */ "./src/app/services/wild.service.ts");



let WildCardComponent = class WildCardComponent {
    constructor(wildsSvc) {
        this.wildsSvc = wildsSvc;
    }
    ngOnInit() {
    }
};
WildCardComponent.ctorParameters = () => [
    { type: _services_wild_service__WEBPACK_IMPORTED_MODULE_2__["WildService"] }
];
WildCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wilds-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wild-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wild-card.component.css */ "./src/app/comps/cards/wild-card/wild-card.component.css")).default]
    })
], WildCardComponent);



/***/ }),

/***/ "./src/app/comps/general/footer/footer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/comps/general/footer/footer.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dlbmVyYWwvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/comps/general/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/general/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/comps/general/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/comps/general/general.component.css":
/*!*****************************************************!*\
  !*** ./src/app/comps/general/general.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dlbmVyYWwvZ2VuZXJhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/comps/general/general.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comps/general/general.component.ts ***!
  \****************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GeneralComponent = class GeneralComponent {
    constructor() { }
    ngOnInit() {
    }
};
GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-general',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/general.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./general.component.css */ "./src/app/comps/general/general.component.css")).default]
    })
], GeneralComponent);



/***/ }),

/***/ "./src/app/comps/general/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/comps/general/header/header.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-header{\r\n    background: rgb(229, 214, 194);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 10px;\r\n}\r\n.logo-zoo{\r\n    width: 25%;\r\n}\r\n.logo-zoo>img{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9nZW5lcmFsL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjksIDIxNCwgMTk0KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5sb2dvLXpvb3tcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuLmxvZ28tem9vPmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/comps/general/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/general/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/comps/general/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/comps/general/nav/nav.component.css":
/*!*****************************************************!*\
  !*** ./src/app/comps/general/nav/nav.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.nav{\r\n    width: 100%;;\r\n}\r\n\r\n.nav>ul{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.nav>ul>li{\r\n    color: blueviolet;\r\n    display:block;\r\n    width: 100px;\r\n}\r\n\r\nli:hover{\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdntcclxuICAgIHdpZHRoOiAxMDAlOztcclxufVxyXG5cclxuLm5hdj51bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLm5hdj51bD5saXtcclxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5saTpob3ZlcntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/comps/general/nav/nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comps/general/nav/nav.component.ts ***!
  \****************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_paging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/paging.service */ "./src/app/services/paging.service.ts");



let NavComponent = class NavComponent {
    constructor(paging) {
        this.paging = paging;
        console.log("nav com cons");
    }
    ngOnInit() {
    }
    navToPage(page) {
        console.log(`navToPage( ${page} )`);
        this.paging.currentPanel = page;
    }
};
NavComponent.ctorParameters = () => [
    { type: _services_paging_service__WEBPACK_IMPORTED_MODULE_2__["PagingService"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/comps/general/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/comps/general/paginator/paginator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/comps/general/paginator/paginator.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{width: 10vw;}\r\n\r\n.arrows{\r\n    width: 30vw;\r\n    margin: auto;\r\n}\r\n\r\n.revrs{\r\n    transform: scaleX(-1);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxXQUFXLENBQUM7O0FBRWhCO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFFSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9nZW5lcmFsL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3t3aWR0aDogMTB2dzt9XHJcblxyXG4uYXJyb3dze1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnJldnJze1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comps/general/paginator/paginator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comps/general/paginator/paginator.component.ts ***!
  \****************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginatorComponent = class PaginatorComponent {
    constructor() {
        this.moveItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    moveItemPage(delta) {
        console.log('PaginatorComponent moveItemPage ' + delta);
        this.moveItem.emit(delta);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginatorComponent.prototype, "moveItem", void 0);
PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paginator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paginator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paginator.component.css */ "./src/app/comps/general/paginator/paginator.component.css")).default]
    })
], PaginatorComponent);



/***/ }),

/***/ "./src/app/comps/panels/beasts-panel/beasts-panel.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/comps/panels/beasts-panel/beasts-panel.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhbmVscy9iZWFzdHMtcGFuZWwvYmVhc3RzLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/comps/panels/beasts-panel/beasts-panel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/comps/panels/beasts-panel/beasts-panel.component.ts ***!
  \*********************************************************************/
/*! exports provided: BeastsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastsPanelComponent", function() { return BeastsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_beasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/beasts.service */ "./src/app/services/beasts.service.ts");



let BeastsPanelComponent = class BeastsPanelComponent {
    constructor(beastssSvc) {
        this.beastssSvc = beastssSvc;
        console.log('beastssSvc constructor');
    }
    ngOnInit() {
    }
};
BeastsPanelComponent.ctorParameters = () => [
    { type: _services_beasts_service__WEBPACK_IMPORTED_MODULE_2__["BeastsService"] }
];
BeastsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beasts-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beasts-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beasts-panel.component.css */ "./src/app/comps/panels/beasts-panel/beasts-panel.component.css")).default]
    })
], BeastsPanelComponent);



/***/ }),

/***/ "./src/app/comps/panels/birds-panel/birds-panel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/comps/panels/birds-panel/birds-panel.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhbmVscy9iaXJkcy1wYW5lbC9iaXJkcy1wYW5lbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/comps/panels/birds-panel/birds-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comps/panels/birds-panel/birds-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: BirdsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsPanelComponent", function() { return BirdsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_birds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/birds.service */ "./src/app/services/birds.service.ts");



let BirdsPanelComponent = class BirdsPanelComponent {
    constructor(birdsSvc) {
        this.birdsSvc = birdsSvc;
        console.log('birdsSvc constructor');
    }
    ngOnInit() {
    }
};
BirdsPanelComponent.ctorParameters = () => [
    { type: _services_birds_service__WEBPACK_IMPORTED_MODULE_2__["BirdsService"] }
];
BirdsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-birds-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./birds-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./birds-panel.component.css */ "./src/app/comps/panels/birds-panel/birds-panel.component.css")).default]
    })
], BirdsPanelComponent);



/***/ }),

/***/ "./src/app/comps/panels/panels.component.css":
/*!***************************************************!*\
  !*** ./src/app/comps/panels/panels.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhbmVscy9wYW5lbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/comps/panels/panels.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/panels/panels.component.ts ***!
  \**************************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PanelsComponent = class PanelsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PanelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panels',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./panels.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/panels.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./panels.component.css */ "./src/app/comps/panels/panels.component.css")).default]
    })
], PanelsComponent);



/***/ }),

/***/ "./src/app/comps/panels/wilds-panel/wilds-panel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/comps/panels/wilds-panel/wilds-panel.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhbmVscy93aWxkcy1wYW5lbC93aWxkcy1wYW5lbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/comps/panels/wilds-panel/wilds-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comps/panels/wilds-panel/wilds-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: WildsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildsPanelComponent", function() { return WildsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_wild_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wild.service */ "./src/app/services/wild.service.ts");



let WildsPanelComponent = class WildsPanelComponent {
    constructor(wildSvc) {
        this.wildSvc = wildSvc;
        console.log('wildSvc constructor');
    }
    ngOnInit() {
    }
};
WildsPanelComponent.ctorParameters = () => [
    { type: _services_wild_service__WEBPACK_IMPORTED_MODULE_2__["WildService"] }
];
WildsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wilds-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wilds-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wilds-panel.component.css */ "./src/app/comps/panels/wilds-panel/wilds-panel.component.css")).default]
    })
], WildsPanelComponent);



/***/ }),

/***/ "./src/app/services/beasts.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/beasts.service.ts ***!
  \********************************************/
/*! exports provided: BeastsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastsService", function() { return BeastsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BeastsService = class BeastsService {
    constructor() {
        this.beasts = [
            { name: 'Belgian Blue Cow', size: '3 m', lifeSpan: '30 years', habitat: 'Belgian', img: 'https://usercontent1.hubstatic.com/9121182_f520.jpg' },
            { name: 'Lamb', size: '1.5 m', lifeSpan: '40 years', habitat: 'Any place', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Graue_geh%C3%B6rnte_Heidschnucke_qtl1.jpg/1280px-Graue_geh%C3%B6rnte_Heidschnucke_qtl1.jpg' },
            { name: 'goat', size: '1.5 m', lifeSpan: '30 years', habitat: 'Any place', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Bouc_commun_proven%C3%A7al.JPG/1280px-Bouc_commun_proven%C3%A7al.JPG' },
            { name: 'Wildebeest', size: '2 m', lifeSpan: '20 years', habitat: 'Africa', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kruger%C5%AFv_park%2C_Jihoafrick%C3%A1_republika_-_panoramio_%281%29.jpg/1280px-Kruger%C5%AFv_park%2C_Jihoafrick%C3%A1_republika_-_panoramio_%281%29.jpg' }
        ];
        this.currentBeastsIndex = 0;
        this.currentBeasts = this.beasts[this.currentBeastsIndex];
    }
};
BeastsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BeastsService);



/***/ }),

/***/ "./src/app/services/birds.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/birds.service.ts ***!
  \*******************************************/
/*! exports provided: BirdsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsService", function() { return BirdsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BirdsService = class BirdsService {
    constructor() {
        this.birds = [
            { name: 'White-tailed patch', size: '71–80 cm', lifeSpan: '20 years', habitat: 'Found above the oceans in the tropics', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Phaethon_lepturus%2C_Seychelles.jpg' },
            { name: 'rainbow lorikeet', size: '25–30 cm', lifeSpan: '20 years', habitat: 'Australia', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rainbow_lorikeet.jpg/800px-Rainbow_lorikeet.jpg' },
            { name: ' Ramphastos sulfuratus', size: '42-55 cm', lifeSpan: '50 years', habitat: 'Tropical, subtropical rainforest and lowland forests', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ramphastos_sulfuratus_Flickr.jpg/800px-Ramphastos_sulfuratus_Flickr.jpg' },
            { name: ' Columba Livia', size: '30–35 cm', lifeSpan: '5 years', habitat: 'Lives in cities', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG/800px-Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG' }
        ];
        this.currentBirdIndex = 0;
        this.currentBird = this.birds[this.currentBirdIndex];
        console.log('ctor BirdsService', this);
    }
};
BirdsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BirdsService);



/***/ }),

/***/ "./src/app/services/paging.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/paging.service.ts ***!
  \********************************************/
/*! exports provided: PagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingService", function() { return PagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagingService = class PagingService {
    constructor() {
        this.currentPanel = 'birds';
        console.log('PagingService ctor, currentPanel = ' + this.currentPanel);
    }
};
PagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PagingService);



/***/ }),

/***/ "./src/app/services/wild.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/wild.service.ts ***!
  \******************************************/
/*! exports provided: WildService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildService", function() { return WildService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WildService = class WildService {
    constructor() {
        this.wilds = [
            { name: 'Tiger', size: ' 2.2 m', lifeSpan: '16–18 years', habitat: 'Africa', img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.dailymail.co.uk%2F1s%2F2019%2F10%2F29%2F14%2F20320992-7625529-Cara_a_five_year_old_125lb_Bengal_tiger_has_been_fitted_with_a_g-a-8_1572358357911.jpg&imgrefurl=https%3A%2F%2Fwww.dailymail.co.uk%2Fnews%2Farticle-7625529%2FTiger-fitted-golden-fang-German-rescue-centre-cracking-hers.html&docid=b7yWJT-onGBbUM&tbnid=tS8oy4Qcppq-YM%3A&vet=10ahUKEwiR8uuB4-TlAhWjnVwKHWa9CYEQMwiHASgNMA0..i&w=962&h=642&itg=1&bih=932&biw=1110&q=tiger&ved=0ahUKEwiR8uuB4-TlAhWjnVwKHWa9CYEQMwiHASgNMA0&iact=mrc&uact=8' },
            { name: 'Elephant', size: '4.4 m', lifeSpan: '70 years', habitat: 'Africa', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Loxodonta_africana_%28Serengeti%2C_2009%29.jpg/1280px-Loxodonta_africana_%28Serengeti%2C_2009%29.jpg' },
            { name: 'cheetah', size: '2 m', lifeSpan: '50 years', habitat: 'Africa', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/1M2A5923_%2832104186088%29.jpg/1280px-1M2A5923_%2832104186088%29.jpg' },
            { name: 'bear', size: '5 m', lifeSpan: '40', habitat: 'Alaska', img: 'https://img.mako.co.il/2013/08/20/afasffasfzzxc6_g.jpg' }
        ];
        this.currentWildsIndex = 0;
        this.currentWilds = this.wilds[this.currentWildsIndex];
    }
};
WildService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WildService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stu.RAVTECH\Desktop\NatiZoo\zoo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map