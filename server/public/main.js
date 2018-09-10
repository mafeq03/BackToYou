(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/activities/activities.component.css":
/*!*****************************************************!*\
  !*** ./src/app/activities/activities.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/activities/activities.component.html":
/*!******************************************************!*\
  !*** ./src/app/activities/activities.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  activities works!\n</p>\n"

/***/ }),

/***/ "./src/app/activities/activities.component.ts":
/*!****************************************************!*\
  !*** ./src/app/activities/activities.component.ts ***!
  \****************************************************/
/*! exports provided: ActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function() { return ActivitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent() {
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
    };
    ActivitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__(/*! ./activities.component.html */ "./src/app/activities/activities.component.html"),
            styles: [__webpack_require__(/*! ./activities.component.css */ "./src/app/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/all-entries/all-entries.component.css":
/*!*******************************************************!*\
  !*** ./src/app/all-entries/all-entries.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-entries/all-entries.component.html":
/*!********************************************************!*\
  !*** ./src/app/all-entries/all-entries.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  all-entries works!\n</p>\n"

/***/ }),

/***/ "./src/app/all-entries/all-entries.component.ts":
/*!******************************************************!*\
  !*** ./src/app/all-entries/all-entries.component.ts ***!
  \******************************************************/
/*! exports provided: AllEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEntriesComponent", function() { return AllEntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllEntriesComponent = /** @class */ (function () {
    function AllEntriesComponent() {
    }
    AllEntriesComponent.prototype.ngOnInit = function () {
    };
    AllEntriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-entries',
            template: __webpack_require__(/*! ./all-entries.component.html */ "./src/app/all-entries/all-entries.component.html"),
            styles: [__webpack_require__(/*! ./all-entries.component.css */ "./src/app/all-entries/all-entries.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AllEntriesComponent);
    return AllEntriesComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* img {\n    height:800px;\n    overflow: hidden;\n};\n\n.login {\n    display: inline-block;\n    text-align: left;\n    vertical-align: middle;\n} */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n <!-- Navbar -->\n <nav class=\"navbar-expand-md navbar-dark bg-dark navbar fixed-top\">\n    <div class=\"container\">\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar3SupportedContent\" aria-controls=\"navbar3SupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse text-center justify-content-center\" id=\"navbar3SupportedContent\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item mx-3\">\n            <a class=\"nav-link text-light\" href=\"#\">\n              <b>Home</b>\n            </a>\n          </li>\n          <li class=\"nav-item mx-2\">\n            <a class=\"nav-link\" href=\"#menu\">\n              <b>Why Us</b>\n            </a>\n          </li>\n          <li class=\"nav-item mx-2\">\n            <a class=\"nav-link\" href=\"#venue\">\n              <b>Contact Us</b>\n            </a>\n          </li>\n        </ul>\n        <a class=\"btn navbar-btn btn-secondary mx-2\" href=\"#book\">\n          <b>Sign up</b>\n        </a>\n      </div>\n    </div>\n  </nav>\n  <!-- Cover -->\n  <div class=\"align-items-center d-flex py-5 cover photo-overlay\" style=\"background-image: url('./assets/Packrafting+Lake+Powell.jpg');\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 align-self-center text-lg-left text-center\">\n          <h1 class=\"mb-0 mt-4 display-3\">BackToYou</h1>\n          <p class=\"mb-5 lead\">Find the way back to you</p>\n        </div>\n        <div class=\"col-lg-5 p-3\">\n            <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"py-5 text-center bg-light\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h1 class=\"pb-3 text-secondary\">Sometimes is just matter to write things clear.&nbsp;</h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"text-right col-md-6\">\n          <div class=\"row my-5\">\n            <div class=\"col-2 order-lg-2 col-2 text-center\">\n              <i class=\"d-block fa fa-columns fa-3x\"></i>\n            </div>\n            <div class=\"col-10 text-lg-right text-left order-lg-1\">\n              <h4 class=\"text-primary\">Responsive design</h4>\n              <p>Based on fluid design principles.\n                <br>Works with screen resolution</p>\n            </div>\n          </div>\n          <div class=\"row my-5\">\n            <div class=\"col-2 order-lg-2 col-2 text-center\">\n              <i class=\"d-block fa fa-circle-thin fa-4x\"></i>\n            </div>\n            <div class=\"col-10 text-lg-right text-left order-lg-1\">\n              <h4 class=\"text-primary\">Customized settings</h4>\n              <p>Choose settings depending on the criteria you value the most</p>\n            </div>\n          </div>\n          <div class=\"row my-5\">\n            <div class=\"col-2 order-lg-2 col-2 text-center\">\n              <i class=\"d-block fa  fa-comment-o fa-3x\"></i>\n            </div>\n            <div class=\"col-10 text-lg-right text-left order-lg-1\">\n              <h4 class=\"text-primary\">Connect</h4>\n              <p>In-app chat panel 24/7 active.\n                <br>The support you need, right there.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"text-left col-md-6\">\n          <div class=\"row my-5\">\n            <div class=\"col-2 text-center\">\n              <i class=\"d-block fa fa-battery-empty fa-3x\"></i>\n            </div>\n            <div class=\"col-10\">\n              <h4 class=\"text-primary\">Battery-friendly</h4>\n              <p>Non consuming background operation\n                <br>Pingendo enhance the battery duration.</p>\n            </div>\n          </div>\n          <div class=\"row my-5\">\n            <div class=\"col-2 text-center\">\n              <i class=\"d-block mx-auto fa  fa-clone fa-3x\"></i>\n            </div>\n            <div class=\"col-10\">\n              <h4 class=\"text-primary\">Multilayers</h4>\n              <p>Work simultaneously on different panels.\n                <br>Share the work with teammates.</p>\n            </div>\n          </div>\n          <div class=\"row my-5\">\n            <div class=\"col-2 text-center\">\n              <i class=\"d-block fa  fa-heart-o fa-3x\"></i>\n            </div>\n            <div class=\"col-10\">\n              <h4 class=\"text-primary\">Share the love</h4>\n              <p>Help us spreading the word.\n                <br>Tell your friends with just one-click</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"align-items-center d-flex py-5 cover photo-overlay\" style=\"background-image: url(&quot;./assets/Lake+Tahoe-12.jpg&quot;);\" >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 my-3\">\n          <ul class=\"nav nav-pills flex-column\">\n            <li class=\"nav-item\">\n              <a href=\"#\" class=\"active nav-link\">\n                <i class=\"fa fa-home fa-home\"></i>&nbsp;Home</a>\n            </li>\n            <ul class=\"list-group\">\n              <li class=\"list-group-item d-flex justify-content-between align-items-center\"> Cras justo odio\n                <span class=\"badge badge-primary badge-pill\">14</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between align-items-center\"> Dapibus ac facilisis in\n                <span class=\"badge badge-primary badge-pill\">2</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between align-items-center\"> Morbi leo risus\n                <span class=\"badge badge-primary badge-pill\">1</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between align-items-start\">Cras justo odio\n                <span class=\"badge badge-pill badge-primary\">4</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between align-items-start\">Cras justo odio\n                <span class=\"badge badge-pill badge-primary\">4</span>\n              </li>\n            </ul>\n          </ul>\n        </div>\n        <div class=\"col-md-6\">\n          <form class=\"\">\n            <div class=\"form-group\">\n              <label>Date</label>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n              <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label>Mood</label>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n              <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label>Activities</label>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n              <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label>Notes</label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\"> </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Intro -->\n  <!-- Gallery -->\n  <!-- Menu -->\n  <div class=\"py-5 text-center\" id=\"menu\">\n    <div class=\"container\">\n      <div class=\"row p-4 my-5 bg-primary animate-in-down\">\n        <div class=\"col-md-12\">\n          <h2 class=\"mt-3\">Menu</h2>\n          <p class=\"mb-5\">Week #26</p>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <h5>From our lands</h5>\n              <ul class=\"list-unstyled\">\n                <li class=\"my-4\">Fillet of beef carpaccio,\n                  <br>raspberries and shaved parmesan\n                  <br>[ $12 ]</li>\n                <li class=\"my-4\">Rabbit stewed with prune,\n                  <br>artichokes and tomato focaccia\n                  <br>[ $24 ]</li>\n                <li class=\"my-4\">Season vegetables,\n                  <br>daily picked from our gardens\n                  <br>[ $8 ]</li>\n                <li class=\"my-4\">Rhubarb and blood orange crumble\n                  <br>served with clotted cream\n                  <br>[ $10 ]</li>\n              </ul>\n            </div>\n            <div class=\"col-md-4\">\n              <h5>From the sea</h5>\n              <ul class=\"list-unstyled\">\n                <li class=\"my-4\">Fresh rock oyster &nbsp;\n                  <br>with homemade tartare sauce\n                  <br>[ $12 ]</li>\n                <li class=\"my-4\">Salt and chilli squid&nbsp;\n                  <br>with lime mayonnaise\n                  <br>[ $15 ]</li>\n                <li class=\"my-4\">Beetroot salmon gravadlax&nbsp;\n                  <br>with blinis and chive cream\n                  <br>[ $30 ]</li>\n                <li class=\"my-4\">Claret jelly with Chantilly cream\n                  <br>&nbsp;and a shortbread petticoat tail\n                  <br>[ $12 ]</li>\n              </ul>\n            </div>\n            <div class=\"col-md-4\">\n              <h5>For the youngest</h5>\n              <ul class=\"list-unstyled\">\n                <li class=\"my-4\">Milan saffron risotto\n                  <br>with mint leaves and cherry tomato\n                  <br>[ $6 ]</li>\n                <li class=\"my-4\">Angus hamburger\n                  <br>ketchup and grilled vegetables\n                  <br>[ $12 ]</li>\n                <li class=\"my-4\">Potato chips\n                  <br>proudly grown in our fields\n                  <br>[ $7 ]</li>\n                <li class=\"my-4\">Ice cream with orange peel,\n                  <br>wild berries and daily cream\n                  <br>[ $4 ]</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Carousel reviews -->\n  <!-- Carousel venue -->\n  <!-- Events -->\n  <!-- Dark opaque section -->\n  <!-- Footer -->\n  <div class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 p-4\">\n          <h2 class=\"mb-4\">Contact</h2>\n          <p class=\"m-0\">\n            <a href=\"tel:+246 - 542 550 5462\" class=\"text-white\">+246 - 542 550 5462</a>\n          </p>\n          <p>\n            <a href=\"mailto:info@pingendo.com\" class=\"text-white\">info@pingendo.com</a>\n          </p>\n        </div>\n        <div class=\"col-md-4 p-4\">\n          <h2 class=\"mb-4\">Location</h2>\n          <p>\n            <a href=\"https://www.google.it/maps\" target=\"_blank\" class=\"text-white\">23 Fake Street\n              <br>Seattle, WA 00000</a>\n          </p>\n        </div>\n        <div class=\"col-md-4 p-4\">\n          <h2 class=\"mb-4\">Openings</h2>\n          <p>11:00 - 15:00 &amp; 19:00 - 00:00 Tue/Fri\n            <br>11:00 - 15:00 &amp; 19:00 - 02:00 Sat/Sun</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 mt-3\">\n          <p class=\"text-center text-muted\">© Copyright 2018 Pingendo - All rights reserved. </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n<!-- <div id=\"container\">\n<div class=\"row align-middle\">\n  <div class=\"col-xs-8\"><img class=\"img-responsive\" src=\"https://static1.squarespace.com/static/572164baf8508222d12dcd6e/58687c9d197aea52833d45e7/5b023d1daa4a99a865f43fe2/1535090993455/USA+Road+Trip-4.jpg?format=1000w\"></div>\n  <div class=\"col-xs-4 align-center\"><router-outlet></router-outlet></div>\n</div>\n</div> -->\n\n<!-- <app-footer></app-footer> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
        this.loggedin = false;
        // title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-entry/new-entry.component */ "./src/app/new-entry/new-entry.component.ts");
/* harmony import */ var _all_entries_all_entries_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-entries/all-entries.component */ "./src/app/all-entries/all-entries.component.ts");
/* harmony import */ var _activities_activities_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./activities/activities.component */ "./src/app/activities/activities.component.ts");
/* harmony import */ var _emotions_emotions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./emotions/emotions.component */ "./src/app/emotions/emotions.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./single-entry/single-entry.component */ "./src/app/single-entry/single-entry.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
                _new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_10__["NewEntryComponent"],
                _all_entries_all_entries_component__WEBPACK_IMPORTED_MODULE_11__["AllEntriesComponent"],
                _activities_activities_component__WEBPACK_IMPORTED_MODULE_12__["ActivitiesComponent"],
                _emotions_emotions_component__WEBPACK_IMPORTED_MODULE_13__["EmotionsComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"],
                _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_15__["SingleEntryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_3__["routes"]),
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            providers: [
                _services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _all_entries_all_entries_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-entries/all-entries.component */ "./src/app/all-entries/all-entries.component.ts");
/* harmony import */ var _new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-entry/new-entry.component */ "./src/app/new-entry/new-entry.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-entry/single-entry.component */ "./src/app/single-entry/single-entry.component.ts");





var routes = [
    //Authorization routes
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: '**', redirectTo: '' },
    //Entries route - multiple and single
    {
        path: 'new-entry',
        component: _new_entry_new_entry_component__WEBPACK_IMPORTED_MODULE_2__["NewEntryComponent"]
    },
    {
        path: 'entries',
        component: _all_entries_all_entries_component__WEBPACK_IMPORTED_MODULE_1__["AllEntriesComponent"]
    },
    {
        path: 'entries/:id',
        component: _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_4__["SingleEntryComponent"]
    },
    {
        path: 'delete/:id',
        component: _single_entry_single_entry_component__WEBPACK_IMPORTED_MODULE_4__["SingleEntryComponent"]
    },
    //User Profile Routes
    {
        path: 'user/:id',
        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]
    },
    {
        path: 'user/:id',
        component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]
    },
];


/***/ }),

/***/ "./src/app/emotions/emotions.component.css":
/*!*************************************************!*\
  !*** ./src/app/emotions/emotions.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/emotions/emotions.component.html":
/*!**************************************************!*\
  !*** ./src/app/emotions/emotions.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  emotions works!\n</p>\n"

/***/ }),

/***/ "./src/app/emotions/emotions.component.ts":
/*!************************************************!*\
  !*** ./src/app/emotions/emotions.component.ts ***!
  \************************************************/
/*! exports provided: EmotionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmotionsComponent", function() { return EmotionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmotionsComponent = /** @class */ (function () {
    function EmotionsComponent() {
    }
    EmotionsComponent.prototype.ngOnInit = function () {
    };
    EmotionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emotions',
            template: __webpack_require__(/*! ./emotions.component.html */ "./src/app/emotions/emotions.component.html"),
            styles: [__webpack_require__(/*! ./emotions.component.css */ "./src/app/emotions/emotions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmotionsComponent);
    return EmotionsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n    min-width: 100px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form *ngIf=\"!user\">\n  <h2> Login or Signup </h2>\n  \n  <label> name </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\"/>\n  <br>\n  <label> Username </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n  <br>\n  <label> Password </label>\n  <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n  <br>\n  <button type=\"button\" class=\"btn btn-dark\" (click)=\"login()\"> login </button>\n  <button type=\"button\" class=\"btn btn-light\" (click)=\"signup()\"> signup </button>\n</form> -->\n\n<div *ngIf=\"user\">\n  <h2> You are now logged in as {{ user.username }}!! </h2>\n  <p> Here's the user object </p>\n  <pre> {{ user | json }} </pre>\n  <p *ngIf=\"privateData\"> Here's some data fetched from a protected API </p>\n  <pre> {{ privateData | json }} </pre>\n  <button (click)=\"logout()\"> logout </button>\n  <button (click)=\"getPrivateData()\"> Get private data </button>\n</div>\n\n<p class=\"error\"> {{ error }} </p>\n\n\n<form class=\"bg-dark-opaque p-3\" *ngIf=\"!user\">\n  <h4 class=\"mb-4 text-center\">Login / Signup</h4>\n  <div class=\"form-group\">\n    <label>User Name</label>\n    <input class=\"form-control\" placeholder=\"Type here\" type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"> </div>\n  <div class=\"form-group my-2\">\n        <label>Name</label>\n        <input class=\"form-control\" placeholder=\"Type here\" type=\"text\" [(ngModel)]=\"formInfo.name\" name=\"name\"> </div>\n  <div class=\"form-group my-2\">\n    <label for=\"password\">Password</label>\n    <div class=\"input-group\">\n      <input type=\"password\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"> </div>\n  </div>\n  <button type=\"submit\" class=\"btn mt-4 btn-outline-primary p-2 w-25 mx-4\" (click)=\"login()\">\n    <b>Log In</b>\n  </button>\n  <button type=\"submit\" class=\"btn mt-4 btn-outline-primary p-2 w-25 mx-4\" (click)=\"signup()\">\n    <b>Sign Up</b>\n  </button>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(session) {
        this.session = session;
        this.formInfo = {
            username: '',
            password: '',
            name: ''
        };
        this.user = false;
        this.privateData = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.formInfo)
            .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); });
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        this.session.signup(this.formInfo)
            .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .subscribe(function () { return _this.successCb(null); }, function (err) { return _this.errorCb(err); });
    };
    LoginComponent.prototype.getPrivateData = function () {
        var _this = this;
        this.session.getPrivateData()
            .subscribe(function (data) { return _this.privateData = data; }, function (err) { return _this.error = err; });
    };
    LoginComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    LoginComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-entry/new-entry.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-entry/new-entry.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-entry/new-entry.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-entry/new-entry.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-entry works!\n</p>\n"

/***/ }),

/***/ "./src/app/new-entry/new-entry.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-entry/new-entry.component.ts ***!
  \**************************************************/
/*! exports provided: NewEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEntryComponent", function() { return NewEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewEntryComponent = /** @class */ (function () {
    function NewEntryComponent() {
    }
    NewEntryComponent.prototype.ngOnInit = function () {
    };
    NewEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-entry',
            template: __webpack_require__(/*! ./new-entry.component.html */ "./src/app/new-entry/new-entry.component.html"),
            styles: [__webpack_require__(/*! ./new-entry.component.css */ "./src/app/new-entry/new-entry.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewEntryComponent);
    return NewEntryComponent;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.mainURL = "http://localhost:3000";
    }
    SessionService.prototype.handleError = function (e) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e.json().message);
    };
    SessionService.prototype.signup = function (user) {
        return this.http.post(this.mainURL + "/signup", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    SessionService.prototype.login = function (user) {
        return this.http.post(this.mainURL + "/login", user, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    SessionService.prototype.logout = function () {
        return this.http.post(this.mainURL + "/logout", {}, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.http.get(this.mainURL + "/loggedin", { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    SessionService.prototype.getPrivateData = function () {
        return this.http.get(this.mainURL + "/private", { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/single-entry/single-entry.component.css":
/*!*********************************************************!*\
  !*** ./src/app/single-entry/single-entry.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/single-entry/single-entry.component.html":
/*!**********************************************************!*\
  !*** ./src/app/single-entry/single-entry.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  single-entry works!\n</p>\n"

/***/ }),

/***/ "./src/app/single-entry/single-entry.component.ts":
/*!********************************************************!*\
  !*** ./src/app/single-entry/single-entry.component.ts ***!
  \********************************************************/
/*! exports provided: SingleEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleEntryComponent", function() { return SingleEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleEntryComponent = /** @class */ (function () {
    function SingleEntryComponent() {
    }
    SingleEntryComponent.prototype.ngOnInit = function () {
    };
    SingleEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-entry',
            template: __webpack_require__(/*! ./single-entry.component.html */ "./src/app/single-entry/single-entry.component.html"),
            styles: [__webpack_require__(/*! ./single-entry.component.css */ "./src/app/single-entry/single-entry.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleEntryComponent);
    return SingleEntryComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  welcome works!\n</p>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    BASE_URL: 'http://localhost:3000'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\willi\Documents\Ironhack\Module-3\Module_3_Project\BackToYou\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map