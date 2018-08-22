(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./documentation/documentation.module": [
		"./src/app/documentation/documentation.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this._location = location;
        router.events.subscribe(function (event) {
            // Send GA tracking on NavigationEnd event. You may wish to add other
            // logic here too or change which event to work with
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // When the route is '/', location.path actually returns ''.
                var newRoute = location.path() || '/';
                // If the route has changed, send the new route to analytics.
                if (_this.currentRoute != newRoute) {
                    _gaq('send', 'pageview', newRoute);
                    fbq('track', 'PageView');
                    _this.currentRoute = newRoute;
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _documentation_documentation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation/documentation.module */ "./src/app/documentation/documentation.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
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
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_13__["HomeModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _documentation_documentation_module__WEBPACK_IMPORTED_MODULE_6__["DocumentationModule"]
            ],
            providers: [],
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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/documentation/documentation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'user-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_8__["NucleoiconsComponent"] },
    {
        path: '',
        component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__["DocumentationComponent"],
        children: [{
                path: 'documentation',
                loadChildren: './documentation/documentation.module#DocumentationModule'
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-buttons\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Basic Components</h2>\n        </div>\n        <div id=\"buttons\">\n            <div class=\"tim-title\">\n                <h3>Buttons\n                    <br/>\n                    <small>Pick your style</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your size</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your color</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button><button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\n                </div>\n            </div>\n        </div>\n            <br/>\n        <div class=\"tim-title\">\n            <h3>Links</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\n            </div>\n        </div>\n        <br/>\n        <div class=\"tim-title\">\n            <h3>Inputs</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-success\">\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-danger\">\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Checkboxes</h3>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                    Unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                    Checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n                    Disabled unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\n                    Disabled checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Radio Buttons</h3>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n                    Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\n                    Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\n                    Disabled Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\n                    Disabled Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Toggle Buttons</h3>\n                </div>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\">\n                </bSwitch>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\"\n                    [(ngModel)]=\"state_default\"> Toggle is off\n                </bSwitch>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Sliders</h3>\n                </div>\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\n                <br>\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
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

var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    BasicelementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basicelements',
            template: __webpack_require__(/*! ./basicelements.component.html */ "./src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-basicelements></app-basicelements>\n<app-navigation></app-navigation>\n<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Progress Bar</h3>\n                    <br/>\n                </div>\n                <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\n                <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\n                <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\n                <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Pagination</h3>\n                    <br/>\n                </div>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                <br/>\n                <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Navigation Tabs</h3>\n                </div>\n\n                <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ngb-tabset [justify]=\"'center'\">\n                            <ngb-tab title=\"Home\">\n                                <ng-template ngbTabContent>\n                                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Profile\">\n                                <ng-template ngbTabContent>\n                                    <p>Here is your profile.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Messages\">\n                                <ng-template ngbTabContent>\n                                    <p>Here are your messages.</p>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Labels</h3>\n                </div>\n                <span class=\"label label-default\">Default</span>\n                <span class=\"label label-primary\">Primary</span>\n                <span class=\"label label-info\">Info</span>\n                <span class=\"label label-success\">Success</span>\n                <span class=\"label label-warning\">Warning</span>\n                <span class=\"label label-danger\">Danger</span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section section-notifications\" id=\"notifications\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Notification</h3>\n        </div>\n    </div>\n    <app-notification></app-notification>\n</div>\n<app-typography></app-typography>\n<div class=\"section javascript-components\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Angular Native Components</h2>\n        </div>\n        <div class=\"row\" id=\"modals\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Modal</h3>\n                </div>\n                <app-modal-component></app-modal-component>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Popovers</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n                    on right\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                    on top\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                    on left\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                    on bottom\n                </button>\n\n            </div>\n            <br/>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Datepicker</h3>\n                </div>\n                <div class=\"row\">\n                    <div class='col-sm-6'>\n                        <form class=\"form-inline\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group date\">\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\">\n                                    <span class=\"input-group-addon\">\n                                        <span class=\"glyphicon glyphicon-calendar\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                                    </span>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Tooltips</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                   on right\n               </button>\n               <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                  on left\n               </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                   on top\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                   on bottom\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section\" id=\"carousel\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Carousel</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <div class=\"card page-carousel\">\n                    <ngb-carousel>\n                        <ng-template ngbSlide>\n                            <img src=\"./assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"./assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere else</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"./assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Here it is</p>\n                            </div>\n                        </ng-template>\n                    </ngb-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
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

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_6__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["NgbdModalContent"]],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_10__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"tim-title\">\n            <h3>Menu</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item \">\n                                    <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"container\">\n            <div class=\"tim-title\">\n                <h3>Navigation</h3>\n                <br/>\n            </div>\n        </div>\n        <div class=\"navigation-example\">\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\n        <div class=\"container\">\n            <ng-container *ngIf=\"alert.icon\">\n                <i class=\"nc-icon {{alert.icon}}\"></i>\n            </ng-container>\n\n            {{ alert.message }}\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                <i class=\"nc-icon nc-simple-remove\"></i>\n            </button>\n        </div>\n    </ngb-alert>\n</p>\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <h1>Paper Kit 2 Icons</h1>\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\n</header>\n\n<div id=\"icons-wrapper\">\n    <section>\n        <ul>\n            <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n            </li>\n            <!-- list of icons here with the proper class-->\n        </ul>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
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

var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    NucleoiconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleoicons',
            template: __webpack_require__(/*! ./nucleoicons.component.html */ "./src/app/components/nucleoicons/nucleoicons.component.html"),
            styles: [__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"tim-title\">\n            <h3>Typography</h3>\n            <br/>\n        </div>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"typography-line\">\n                    <h1>\n                        <span class=\"note\">Header 1</span> Thinking in textures\n                    </h1>\n                </div>\n                <div class=\"typography-line\">\n                    <h2>\n                        <span class=\"note\">Header 2</span> Thinking in textures\n                    </h2>\n                </div>\n                <div class=\"typography-line\">\n                    <h3>\n                        <span class=\"note\">Header 3</span> Thinking in textures\n                    </h3>\n                </div>\n                <div class=\"typography-line\">\n                    <h4>\n                        <span class=\"note\">Header 4</span> Thinking in textures\n                    </h4>\n                </div>\n                <div class=\"typography-line\">\n                    <h5>\n                        <span class=\"note\">Header 5</span> Thinking in textures\n                    </h5>\n                </div>\n                <div class=\"typography-line\">\n                    <h6>\n                        <span class=\"note\">Header 6</span> Thinking in textures\n                    </h6>\n                </div>\n                <div class=\"typography-line\">\n                    <p>\n                        <span class=\"note\">Paragraph</span> Thinking in textures\n                    </p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Quote</span>\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Muted text</span>\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Primary text</span>\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Success text</span>\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Info text</span>\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Warning text</span>\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Danger text</span>\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\n                        <br/>\n                        <small>\".small\" is a tag for the headers</small>\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"images\">\n            <div class=\"container\">\n                <div class=\"tim-title\">\n                    <h3>Images</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\n                        <h4 class=\"images-title\">Rounded Image</h4>\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\n                        <div class=\"img-details\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                            </div>\n                            <p>Chet Faker</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Circle Image</h4>\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Joe Gardner</p>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Thumbnail</h4>\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Erik Faker</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/documentation/buttons/buttons.component.html":
/*!**************************************************************!*\
  !*** ./src/app/documentation/buttons/buttons.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- buttons row -->\n<h2>Buttons </h2>\n<legend></legend>\n<h4>Colors</h4>\n<p class=\"space-top\">We worked over the original Bootstrap classes, choosing a different color pallete. We opted for this beautiful scheme of pale colors:</p>\n<br/>\n<button type=\"button\" class=\"btn btn-default\">Default</button>\n<button type=\"button\" class=\"btn btn-primary\">Primary</button>\n<button type=\"button\" class=\"btn btn-info\">Info</button>\n<button type=\"button\" class=\"btn btn-success\">Success</button>\n<button type=\"button\" class=\"btn btn-warning\">Warning</button>\n<button type=\"button\" class=\"btn btn-danger\">Danger</button>\n<button type=\"button\" class=\"btn btn-neutral\">Neutral</button>\n<br />\n<div class=\"area-line\">\n    <div id=\"buttonColor\" class=\"\">\n\t    <pre class=\"prettyprint\">\n&lt;button type=&quot;button&quot; class=&quot;btn btn-default&quot;&gt;Default&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot;&gt;Info&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-success&quot;&gt;Success&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-warning&quot;&gt;Warning&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;&gt;Danger&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-neutral&quot;&gt;Neutral&lt;/button&gt;</pre>\n    </div>\n</div>\n<h4>Sizes</h4>\n<p class=\"space-top\">Buttons come in all needed sizes:</p>\n<button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\n<button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\n<button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\n<div class=\"area-line\">\n<!-- <a data-target=\"#buttonSize\" href=\"javascript: void(0);\" data-toggle=\"collapse\">\n      See Full Implementation\n</a> -->\n<div id=\"buttonSize\" >\n<pre class=\"prettyprint\">\n&lt;button type=&quot;button&quot; class=&quot;btn btn-danger btn-sm&quot;&gt;Small&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-danger&quot;&gt;Regular&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-danger btn-lg&quot;&gt;Large&lt;/button&gt;</pre>\n</div>\n</div>\n<h4>Styles</h4>\n<p class=\"space-top\">\n    We added extra classes that can help you better customise the look. You can use regular buttons, filled buttons or plain link buttons. Let's see some examples:\n</p>\n<button type=\"button\" class=\"btn btn-info\">Default</button>\n<button type=\"button\" class=\"btn btn-info btn-round\">Round</button>\n<button type=\"button\" class=\"btn btn-info btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\n<button type=\"button\" class=\"btn btn-info btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n<button type=\"button\" class=\"btn btn-info btn-link\">Simple</button>\n<div class=\"area-line\">\n<!-- <a data-target=\"#buttonStyle\" href=\"javascript: void(0);\" data-toggle=\"collapse\">\n      See Full Implementation\n</a> -->\n\t<div id=\"buttonStyle\" >\n\t\t<pre class=\"prettyprint\">\n&lt;button type=&quot;button&quot; class=&quot;btn btn-info&quot;&gt;Default&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-info btn-round&quot;&gt;Round&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-info btn-round&quot;&gt;&lt;i class=&quot;fa fa-heart&quot;&gt;&lt;/i&gt; With Icon&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-info btn-just-icon&quot;&gt;&lt;i class=&quot;fa fa-heart&quot;&gt;&lt;/i&gt;&lt;/button&gt;\n&lt;button type=&quot;button&quot; class=&quot;btn btn-info btn-link&quot;&gt;Simple&lt;/button&gt;</pre>\n\t</div>\n</div>\n<p class=\"space-top\">\n    Button groups, toolbars, and disabled state all work like they are supposed to.\n</p>\n\n<!--     end row -->\n"

/***/ }),

/***/ "./src/app/documentation/buttons/buttons.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/documentation/buttons/buttons.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/buttons/buttons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/documentation/buttons/buttons.component.ts ***!
  \************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
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

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/documentation/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/documentation/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/checkbox/checkbox.component.html":
/*!****************************************************************!*\
  !*** ./src/app/documentation/checkbox/checkbox.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- checkbox row -->\n           <div>\n                   <h2> Checkboxes </h2>\n                   <legend></legend>\n                  <br>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                      Unchecked\n                      <span class=\"form-check-sign\"></span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                      Checked\n                      <span class=\"form-check-sign\"></span>\n                    </label>\n                  </div>\n                  <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n                      Disabled unchecked\n                      <span class=\"form-check-sign\"></span>\n                    </label>\n                  </div>\n                  <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\n                      Disabled checked\n                      <span class=\"form-check-sign\"></span>\n                    </label>\n                  </div>\n                   <p>Usage can be done via Data Attributes:\n\n                   </p>\n                   <div id=\"checkboxDataAttribute\">\n                       <pre class=\"prettyprint\">\n&#x3C;div class=&#x22;form-check&#x22;&#x3E;\n &#x3C;label class=&#x22;form-check-label&#x22;&#x3E;\n   &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22;&#x3E;\n   Unchecked\n   &#x3C;span class=&#x22;form-check-sign&#x22;&#x3E;&#x3C;/span&#x3E;\n &#x3C;/label&#x3E;\n&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;form-check&#x22;&#x3E;\n &#x3C;label class=&#x22;form-check-label&#x22;&#x3E;\n   &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; checked=&#x22;&#x22;&#x3E;\n   Checked\n   &#x3C;span class=&#x22;form-check-sign&#x22;&#x3E;&#x3C;/span&#x3E;\n &#x3C;/label&#x3E;\n&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;form-check disabled&#x22;&#x3E;\n &#x3C;label class=&#x22;form-check-label&#x22;&#x3E;\n   &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; disabled=&#x22;&#x22;&#x3E;\n   Disabled unchecked\n   &#x3C;span class=&#x22;form-check-sign&#x22;&#x3E;&#x3C;/span&#x3E;\n &#x3C;/label&#x3E;\n&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;form-check disabled&#x22;&#x3E;\n &#x3C;label class=&#x22;form-check-label&#x22;&#x3E;\n   &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; checked=&#x22;&#x22; disabled=&#x22;&#x22;&#x3E;\n   Disabled checked\n   &#x3C;span class=&#x22;form-check-sign&#x22;&#x3E;&#x3C;/span&#x3E;\n &#x3C;/label&#x3E;\n&#x3C;/div&#x3E;</pre>\n               </div>\n           </div>\n       <!-- end row -->\n"

/***/ }),

/***/ "./src/app/documentation/checkbox/checkbox.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/documentation/checkbox/checkbox.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/checkbox/checkbox.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/documentation/checkbox/checkbox.component.ts ***!
  \**************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
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

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    CheckboxComponent.prototype.ngOnInit = function () {
    };
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkbox',
            template: __webpack_require__(/*! ./checkbox.component.html */ "./src/app/documentation/checkbox/checkbox.component.html"),
            styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/documentation/checkbox/checkbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/documentation/datepicker/datepicker.component.html":
/*!********************************************************************!*\
  !*** ./src/app/documentation/datepicker/datepicker.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tim-title\">\n    <h2>Date Picker</h2>\n    <br/>\n</div>\n<p><b>For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/datepicker/examples\" target=\"_blank\">link</a>.</b></p>\n<br>\n<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <div class=\"input-group date\">\n      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n             name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\">\n      <span class=\"input-group-addon\">\n            <span class=\"glyphicon glyphicon-calendar\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n        </span>\n    </div>\n  </div>\n</form>\n<div class=\"area-line\">\n    <div id=\"paginationCode\">\n    <pre class=\"prettyprint\">\n&#x3C;form class=&#x22;form-inline&#x22;&#x3E;\n  &#x3C;div class=&#x22;form-group&#x22;&#x3E;\n    &#x3C;div class=&#x22;input-group date&#x22;&#x3E;\n      &#x3C;input class=&#x22;form-control&#x22; placeholder=&#x22;yyyy-mm-dd&#x22;\n             name=&#x22;dp&#x22; [(ngModel)]=&#x22;model&#x22; ngbDatepicker #d=&#x22;ngbDatepicker&#x22; (click)=&#x22;d.toggle()&#x22;&#x3E;\n      &#x3C;span class=&#x22;input-group-addon&#x22;&#x3E;\n            &#x3C;span class=&#x22;glyphicon glyphicon-calendar&#x22;&#x3E;&#x3C;i class=&#x22;fa fa-calendar&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/span&#x3E;\n        &#x3C;/span&#x3E;\n    &#x3C;/div&#x3E;\n  &#x3C;/div&#x3E;\n&#x3C;/form&#x3E;</pre>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/datepicker/datepicker.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/documentation/datepicker/datepicker.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/datepicker/datepicker.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/documentation/datepicker/datepicker.component.ts ***!
  \******************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
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

var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
    }
    DatepickerComponent.prototype.ngOnInit = function () {
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/documentation/datepicker/datepicker.component.html"),
            styles: [__webpack_require__(/*! ./datepicker.component.scss */ "./src/app/documentation/datepicker/datepicker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/documentation/documentation.component.html":
/*!************************************************************!*\
  !*** ./src/app/documentation/documentation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"documentation page-header page-header-small\" style=\"background-image: url('./assets/img/daniel-olahs.jpg');\">\n\t\t<div class=\"filter\"></div>\n\t\t<div class=\"motto\">\n\t\t\t<h2 class=\"title-uppercase text-center\">Tutorial and Components</h2>\n\t\t\t<h3 class=\"text-center\">Documentation v1.1.0</h3>\n\t\t\t<br>\n\t\t</div>\n\t</div>\n    <div class=\"main\">\n        <div class=\"section\">\n            <div class=\"container\">\n                <div class=\"row tim-row\">\n                    <div class=\"col-lg-3 col-md-6\">\n    \t                <div class=\"fixed-section\">\n    \t                    <ul>\n                              <li><a [routerLink]=\"['/documentation/tutorial']\">Tutorial</a></li>\n                              <li><a [routerLink]=\"['/documentation/ng-bootstrap']\">Ng Bootstrap</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/buttons']\">Buttons</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/checkbox']\">Checkbox</a></li>\n    \t\t\t\t\t\t\t            <li><a [routerLink]=\"['/documentation/radio']\">Radio</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/dropdown']\">Dropdown</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/inputs']\">Inputs</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/textarea']\">Textarea</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/navigation']\">Navigation</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/pagination']\">Pagination</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/progressbar']\">Progress Bars</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/sliders']\">Sliders</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/labels']\">Labels</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/datepicker']\">Datepicker</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/modal']\">Modals</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/tooltips']\">Tooltips</a></li>\n    \t\t\t\t\t\t\t            <li><a [routerLink]=\"['/documentation/popover']\">Popovers</a></li>\n    \t                        <li><a [routerLink]=\"['/documentation/notification']\">Notification</a></li>\n    \t                    </ul>\n    \t                </div>\n    \t            </div>\n                    <div class=\"col-lg-8 col-md-12\">\n                        <router-outlet></router-outlet>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/documentation.component.scss":
/*!************************************************************!*\
  !*** ./src/app/documentation/documentation.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/documentation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/documentation/documentation.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
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

var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.scss */ "./src/app/documentation/documentation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/documentation/documentation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/documentation/documentation.module.ts ***!
  \*******************************************************/
/*! exports provided: DocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationModule", function() { return DocumentationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation.component */ "./src/app/documentation/documentation.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/documentation/tutorial/tutorial.component.ts");
/* harmony import */ var _documentation_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./documentation.routing */ "./src/app/documentation/documentation.routing.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/documentation/modal/modal.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/documentation/navigation/navigation.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/documentation/notification/notification.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/documentation/buttons/buttons.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/documentation/checkbox/checkbox.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/documentation/radio/radio.component.ts");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/documentation/dropdown/dropdown.component.ts");
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inputs/inputs.component */ "./src/app/documentation/inputs/inputs.component.ts");
/* harmony import */ var _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./textarea/textarea.component */ "./src/app/documentation/textarea/textarea.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/documentation/pagination/pagination.component.ts");
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/documentation/progressbar/progressbar.component.ts");
/* harmony import */ var _sliders_sliders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sliders/sliders.component */ "./src/app/documentation/sliders/sliders.component.ts");
/* harmony import */ var _labels_labels_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./labels/labels.component */ "./src/app/documentation/labels/labels.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/documentation/datepicker/datepicker.component.ts");
/* harmony import */ var _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tooltips/tooltips.component */ "./src/app/documentation/tooltips/tooltips.component.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/documentation/popover/popover.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ng-bootstrap/ng-bootstrap.component */ "./src/app/documentation/ng-bootstrap/ng-bootstrap.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var DocumentationModule = /** @class */ (function () {
    function DocumentationModule() {
    }
    DocumentationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_documentation_routing__WEBPACK_IMPORTED_MODULE_8__["DocumentationRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"]
            ],
            declarations: [
                _documentation_component__WEBPACK_IMPORTED_MODULE_6__["DocumentationComponent"],
                _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_7__["TutorialComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["NgbdModalContent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"],
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_12__["ButtonsComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__["CheckboxComponent"],
                _radio_radio_component__WEBPACK_IMPORTED_MODULE_14__["RadioComponent"],
                _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["DropdownComponent"],
                _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_16__["InputsComponent"],
                _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_17__["TextareaComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__["PaginationComponent"],
                _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_19__["ProgressbarComponent"],
                _sliders_sliders_component__WEBPACK_IMPORTED_MODULE_20__["SlidersComponent"],
                _labels_labels_component__WEBPACK_IMPORTED_MODULE_21__["LabelsComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_22__["DatepickerComponent"],
                _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_23__["TooltipsComponent"],
                _popover_popover_component__WEBPACK_IMPORTED_MODULE_24__["PopoverComponent"],
                _ng_bootstrap_ng_bootstrap_component__WEBPACK_IMPORTED_MODULE_25__["NgBootstrapComponent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["NgbdModalContent"]],
            exports: []
        })
    ], DocumentationModule);
    return DocumentationModule;
}());



/***/ }),

/***/ "./src/app/documentation/documentation.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/documentation/documentation.routing.ts ***!
  \********************************************************/
/*! exports provided: DocumentationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationRoutes", function() { return DocumentationRoutes; });
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/documentation/tutorial/tutorial.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/documentation/modal/modal.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/documentation/navigation/navigation.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/documentation/notification/notification.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/documentation/buttons/buttons.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/documentation/checkbox/checkbox.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/documentation/radio/radio.component.ts");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/documentation/dropdown/dropdown.component.ts");
/* harmony import */ var _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inputs/inputs.component */ "./src/app/documentation/inputs/inputs.component.ts");
/* harmony import */ var _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./textarea/textarea.component */ "./src/app/documentation/textarea/textarea.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/documentation/pagination/pagination.component.ts");
/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/documentation/progressbar/progressbar.component.ts");
/* harmony import */ var _sliders_sliders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sliders/sliders.component */ "./src/app/documentation/sliders/sliders.component.ts");
/* harmony import */ var _labels_labels_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./labels/labels.component */ "./src/app/documentation/labels/labels.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/documentation/datepicker/datepicker.component.ts");
/* harmony import */ var _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tooltips/tooltips.component */ "./src/app/documentation/tooltips/tooltips.component.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/documentation/popover/popover.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ng-bootstrap/ng-bootstrap.component */ "./src/app/documentation/ng-bootstrap/ng-bootstrap.component.ts");


















var DocumentationRoutes = [{
        path: '',
        children: [{
                path: 'tutorial',
                component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_0__["TutorialComponent"]
            }, {
                path: 'modal',
                component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["NgbdModalComponent"]
            }, {
                path: 'navigation',
                component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"]
            }, {
                path: 'notification',
                component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"]
            }, {
                path: 'buttons',
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"]
            }, {
                path: 'checkbox',
                component: _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"]
            }, {
                path: 'radio',
                component: _radio_radio_component__WEBPACK_IMPORTED_MODULE_6__["RadioComponent"]
            }, {
                path: 'dropdown',
                component: _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DropdownComponent"]
            }, {
                path: 'inputs',
                component: _inputs_inputs_component__WEBPACK_IMPORTED_MODULE_8__["InputsComponent"]
            }, {
                path: 'textarea',
                component: _textarea_textarea_component__WEBPACK_IMPORTED_MODULE_9__["TextareaComponent"]
            }, {
                path: 'pagination',
                component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]
            }, {
                path: 'progressbar',
                component: _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_11__["ProgressbarComponent"]
            }, {
                path: 'sliders',
                component: _sliders_sliders_component__WEBPACK_IMPORTED_MODULE_12__["SlidersComponent"]
            }, {
                path: 'datepicker',
                component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_14__["DatepickerComponent"]
            }, {
                path: 'labels',
                component: _labels_labels_component__WEBPACK_IMPORTED_MODULE_13__["LabelsComponent"]
            }, {
                path: 'tooltips',
                component: _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_15__["TooltipsComponent"]
            }, {
                path: 'popover',
                component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_16__["PopoverComponent"]
            }, {
                path: 'ng-bootstrap',
                component: _ng_bootstrap_ng_bootstrap_component__WEBPACK_IMPORTED_MODULE_17__["NgBootstrapComponent"]
            }]
    }];


/***/ }),

/***/ "./src/app/documentation/dropdown/dropdown.component.html":
/*!****************************************************************!*\
  !*** ./src/app/documentation/dropdown/dropdown.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Dropdown </h2>\n               <legend></legend>\n               <p class=\"space-top\">\n               We are very proud to present the dropdown, we added a subtle animation resembling a piece of paper sliding down.<b> For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/dropdown/examples\" target=\"_blank\">link</a></b>. Here is an example and the code:\n               </p>\n\n               <div class=\"row\">\n                   <div class=\"col-md-3\">\n                       <div ngbDropdown class=\"d-inline-block dropdown\">\n                         <a class=\"btn btn-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                         <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                            <a class=\"dropdown-header\">Dropdown header</a>\n                            <a class=\"dropdown-item\">Action</a>\n                            <a class=\"dropdown-item\">Another action</a>\n                            <a class=\"dropdown-item\">Something else here</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\">Separated link</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\">Another separated link</a>\n                         </div>\n                       </div>\n                   </div>\n               </div>\n               <div class=\"area-line\">\n                   <div id=\"dropdown\">\n                       <pre class=\"prettyprint\">\n&#x3C;div ngbDropdown class=&#x22;d-inline-block dropdown&#x22;&#x3E;\n    &#x3C;a class=&#x22;btn btn-primary&#x22; id=&#x22;dropdownBasic1&#x22; ngbDropdownToggle&#x3E;Dropdown&#x3C;/a&#x3E;\n    &#x3C;div ngbDropdownMenu aria-labelledby=&#x22;dropdownBasic1&#x22; class=&#x22;dropdown-primary&#x22;&#x3E;\n       &#x3C;a class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/a&#x3E;\n       &#x3C;a class=&#x22;dropdown-item&#x22;&#x3E;Action&#x3C;/a&#x3E;\n       &#x3C;a class=&#x22;dropdown-item&#x22;&#x3E;Another action&#x3C;/a&#x3E;\n       &#x3C;a class=&#x22;dropdown-item&#x22;&#x3E;Something else here&#x3C;/a&#x3E;\n       &#x3C;div class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;\n       &#x3C;a class=&#x22;dropdown-item&#x22;&#x3E;Separated link&#x3C;/a&#x3E;\n       &#x3C;div class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/div&#x3E;\n       &#x3C;a class=&#x22;dropdown-item&#x22;&#x3E;Another separated link&#x3C;/a&#x3E;\n    &#x3C;/div&#x3E;\n&#x3C;/div&#x3E;</pre>\n       </div>\n               </div>\n"

/***/ }),

/***/ "./src/app/documentation/dropdown/dropdown.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/documentation/dropdown/dropdown.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/dropdown/dropdown.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/documentation/dropdown/dropdown.component.ts ***!
  \**************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
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

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/documentation/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/documentation/dropdown/dropdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/documentation/inputs/inputs.component.html":
/*!************************************************************!*\
  !*** ./src/app/documentation/inputs/inputs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Inputs </h2>\n                   <legend></legend>\n\n                   <p class=\"space-top\">\n                   We restyled the Bootstrap input to give it a different look. You can use the classic look, different colors and states or input groups.\n                   </p>\n                   <div class=\"row\">\n                       <div class=\"col-md-6\">\n                           <div class=\"form-group\">\n                               <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\n                           </div>\n                       </div>\n                       <div class=\"col-md-6\">\n                           <div class=\"form-group has-success\">\n                               <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\n                           </div>\n                       </div>\n                   </div>\n                   <div class=\"row\">\n                       <div class=\"col-md-6\">\n                           <div class=\"form-group has-danger\">\n                               <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\n                               <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                           </div>\n                       </div>\n                       <div class=\"col-md-6\">\n                           <div class=\"input-group\">\n                               <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\">\n                               <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\n                           </div>\n                       </div>\n                   </div>\n                   <div class=\"area-line\">\n           <div id=\"inputs\">\n       <pre class=\"prettyprint\">\n&lt;div class=&quot;row&quot;&gt;\n   &lt;div class=&quot;col-md-6&quot;&gt;\n       &lt;div class=&quot;form-group&quot;&gt;\n           &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Default&quot;&gt;\n       &lt;/div&gt;\n   &lt;/div&gt;\n   &lt;div class=&quot;col-md-6&quot;&gt;\n       &lt;div class=&quot;form-group has-success&quot;&gt;\n           &lt;input type=&quot;text&quot; class=&quot;form-control form-control-success&quot; id=&quot;inputSuccess1&quot; placeholder=&quot;Success&quot;&gt;\n       &lt;/div&gt;\n   &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=&quot;row&quot;&gt;\n   &lt;div class=&quot;col-md-6&quot;&gt;\n       &lt;div class=&quot;form-group has-danger&quot;&gt;\n           &lt;input type=&quot;text&quot; class=&quot;form-control form-control-danger&quot; id=&quot;inputDanger1&quot; placeholder=&quot;Error&quot;&gt;\n           &lt;div class=&quot;form-control-feedback&quot;&gt;Sorry, that username's taken. Try another?&lt;/div&gt;\n       &lt;/div&gt;\n   &lt;/div&gt;\n   &lt;div class=&quot;col-md-6&quot;&gt;\n       &lt;div class=&quot;input-group&quot;&gt;\n           &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Username&quot; aria-describedby=&quot;basic-addon1&quot;&gt;\n           &lt;span class=&quot;input-group-addon&quot; id=&quot;basic-addon1&quot;&gt;&lt;i class=&quot;fa fa-group&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;&lt;/span&gt;\n       &lt;/div&gt;\n   &lt;/div&gt;\n&lt;/div&gt;</pre>\n       </div>\n           </div>\n"

/***/ }),

/***/ "./src/app/documentation/inputs/inputs.component.scss":
/*!************************************************************!*\
  !*** ./src/app/documentation/inputs/inputs.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/inputs/inputs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/documentation/inputs/inputs.component.ts ***!
  \**********************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
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

var InputsComponent = /** @class */ (function () {
    function InputsComponent() {
    }
    InputsComponent.prototype.ngOnInit = function () {
    };
    InputsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inputs',
            template: __webpack_require__(/*! ./inputs.component.html */ "./src/app/documentation/inputs/inputs.component.html"),
            styles: [__webpack_require__(/*! ./inputs.component.scss */ "./src/app/documentation/inputs/inputs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputsComponent);
    return InputsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/labels/labels.component.html":
/*!************************************************************!*\
  !*** ./src/app/documentation/labels/labels.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Labels</h2>\n           <legend></legend>\n           <p>We restyled the default options for labels and we added the filled class, that can be used in any combination.</p>\n           <span class=\"label label-default\">Default</span>\n           <span class=\"label label-primary\">Primary</span>\n           <span class=\"label label-info\">Info</span>\n           <span class=\"label label-success\">Success</span>\n           <span class=\"label label-warning\">Warning</span>\n           <span class=\"label label-danger\">Danger</span>\n           <div class=\"area-line\">\n\n               <div id=\"labels\">\n                   <pre class=\"prettyprint\">\n&lt;span class=&quot;label label-default&quot;&gt;Default&lt;/span&gt;\n&lt;span class=&quot;label label-primary&quot;&gt;Primary&lt;/span&gt;\n&lt;span class=&quot;label label-info&quot;&gt;Info&lt;/span&gt;\n&lt;span class=&quot;label label-success&quot;&gt;Success&lt;/span&gt;\n&lt;span class=&quot;label label-warning&quot;&gt;Warning&lt;/span&gt;\n&lt;span class=&quot;label label-danger&quot;&gt;Danger&lt;/span&gt;</pre>\n               </div>\n           </div>\n"

/***/ }),

/***/ "./src/app/documentation/labels/labels.component.scss":
/*!************************************************************!*\
  !*** ./src/app/documentation/labels/labels.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/labels/labels.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/documentation/labels/labels.component.ts ***!
  \**********************************************************/
/*! exports provided: LabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsComponent", function() { return LabelsComponent; });
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

var LabelsComponent = /** @class */ (function () {
    function LabelsComponent() {
    }
    LabelsComponent.prototype.ngOnInit = function () {
    };
    LabelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-labels',
            template: __webpack_require__(/*! ./labels.component.html */ "./src/app/documentation/labels/labels.component.html"),
            styles: [__webpack_require__(/*! ./labels.component.scss */ "./src/app/documentation/labels/labels.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LabelsComponent);
    return LabelsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/modal/modal.component.html":
/*!**********************************************************!*\
  !*** ./src/app/documentation/modal/modal.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tim-title\">\n    <h2>Modal</h2>\n    <br/>\n</div>\n\n<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p><br>\n<p><b>For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/modal/examples\" target=\"_blank\">link</a>.</b></p>\n<br>\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/documentation/modal/modal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/documentation/modal/modal.component.ts ***!
  \********************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/documentation/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/documentation/navigation/navigation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/documentation/navigation/navigation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Navbar </h2>\n<legend></legend>\n<p class=\"space-top\">\n    We restyled the classic Bootstrap Navbar:\n</p>\n\n<nav class=\"navbar navbar-expand-md navbar-default\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n        <span class=\"navbar-toggler-icon\"></span>\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">Menu</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#pk\">Link</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#pk\">Link</a>\n            </li>\n            <li class=\"nav-item \">\n                <div ngbDropdown class=\"d-inline-block dropdown\">\n                  <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                    <a class=\"dropdown-item\">Action - 1</a>\n                    <a class=\"dropdown-item\">Another Action</a>\n                    <a class=\"dropdown-item\">Something else is here</a>\n                  </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<div class=\"area-line\">\n\n    <div id=\"navbarCode\">\n    <pre class=\"prettyprint\">\n&#x3C;nav class=&#x22;navbar navbar-expand-md navbar-default&#x22;&#x3E;\n    &#x3C;button class=&#x22;navbar-toggler navbar-toggler-right&#x22; type=&#x22;button&#x22; data-toggle=&#x22;collapse&#x22; data-target=&#x22;#navbar-menu&#x22; aria-controls=&#x22;navbarSupportedContent&#x22; aria-expanded=&#x22;false&#x22; aria-label=&#x22;Toggle navigation&#x22;&#x3E;\n        &#x3C;span class=&#x22;navbar-toggler-icon&#x22;&#x3E;&#x3C;/span&#x3E;\n        &#x3C;span class=&#x22;navbar-toggler-icon&#x22;&#x3E;&#x3C;/span&#x3E;\n        &#x3C;span class=&#x22;navbar-toggler-icon&#x22;&#x3E;&#x3C;/span&#x3E;\n    &#x3C;/button&#x3E;\n    &#x3C;a class=&#x22;navbar-brand&#x22; href=&#x22;#&#x22;&#x3E;Menu&#x3C;/a&#x3E;\n    &#x3C;div class=&#x22;collapse navbar-collapse&#x22; id=&#x22;navbar-menu&#x22;&#x3E;\n        &#x3C;ul class=&#x22;navbar-nav mr-auto&#x22;&#x3E;\n            &#x3C;li class=&#x22;nav-item&#x22;&#x3E;\n                &#x3C;a class=&#x22;nav-link&#x22; href=&#x22;#pk&#x22;&#x3E;Link&#x3C;/a&#x3E;\n            &#x3C;/li&#x3E;\n            &#x3C;li class=&#x22;nav-item&#x22;&#x3E;\n                &#x3C;a class=&#x22;nav-link&#x22; href=&#x22;#pk&#x22;&#x3E;Link&#x3C;/a&#x3E;\n            &#x3C;/li&#x3E;\n            &#x3C;li class=&#x22;nav-item &#x22;&#x3E;\n                &#x3C;div ngbDropdown class=&#x22;d-inline-block dropdown&#x22;&#x3E;\n                  &#x3C;a class=&#x22;nav-link&#x22; id=&#x22;dropdownBasic1&#x22; ngbDropdownToggle&#x3E;Dropdown&#x3C;/a&#x3E;\n                  &#x3C;div ngbDropdownMenu aria-labelledby=&#x22;dropdownBasic1&#x22; class=&#x22;dropdown-primary&#x22;&#x3E;\n                    &#x3C;a class=&#x22;dropdown-item&#x22;&#x3E;Action - 1&#x3C;/a&#x3E;\n                    &#x3C;a class=&#x22;dropdown-item&#x22;&#x3E;Another Action&#x3C;/a&#x3E;\n                    &#x3C;a class=&#x22;dropdown-item&#x22;&#x3E;Something else is here&#x3C;/a&#x3E;\n                  &#x3C;/div&#x3E;\n                &#x3C;/div&#x3E;\n            &#x3C;/li&#x3E;\n        &#x3C;/ul&#x3E;\n    &#x3C;/div&#x3E;\n&#x3C;/nav&#x3E;</pre>\n    </div>\n</div>\n\n<p class=\"space-top\">\n    Besides the default navbar, we added 5 new classes for colors: <code>primary</code>, <code>info</code>, <code>success</code>, <code>warning</code>, <code>danger</code>, <code>transparent</code>. If you want to use one of them, you have to replace the <code>navbar-default</code> with the class for the chosen color <code>navbar-#class</code>.\n</p>\n\n<!-- navbar blue -->\n<nav class=\"navbar navbar-expand-md bg-primary\">\n    <div class=\"container\">\n        <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar\"></span>\n            <span class=\"navbar-toggler-bar\"></span>\n            <span class=\"navbar-toggler-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav><br>\n<nav class=\"navbar navbar-expand-md bg-info\">\n    <div class=\"container\">\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar\"></span>\n            <span class=\"navbar-toggler-bar\"></span>\n            <span class=\"navbar-toggler-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Discover</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Profile</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Settings</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav><br>\n<nav class=\"navbar navbar-expand-md bg-success\">\n    <div class=\"container\">\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar\"></span>\n            <span class=\"navbar-toggler-bar\"></span>\n            <span class=\"navbar-toggler-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav><br>\n<nav class=\"navbar navbar-expand-md bg-warning\">\n    <div class=\"container\">\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar\"></span>\n            <span class=\"navbar-toggler-bar\"></span>\n            <span class=\"navbar-toggler-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav><br>\n<nav class=\"navbar navbar-expand-md bg-danger\">\n    <div class=\"container\">\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar\"></span>\n            <span class=\"navbar-toggler-bar\"></span>\n            <span class=\"navbar-toggler-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav><br>\n<div class=\"navigation-example\">\n\n    <nav class=\"navbar navbar-expand-md navbar-transparent\">\n        <div class=\"container\">\n            <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n            <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\n                <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>\n<p class=\"space-top\">\n    Besides all this customisation, we have an extra navbar. <code>navbar-transparent</code> is a special class that you can to use if you want the navbar to be transparent. We recommend that the part of your page that has the transparent navbar contains something non-cluttered, like an image.\n</p>\n\n<!-- </div> -->\n<!-- end row -->\n\n<!--     nav tabs row -->\n<div class=\"tim-row\" id=\"navtabs-row\">\n<h2> Nav Tabs</h2>\n<legend></legend>\n<p class=\"space-top\">We changed the look for the nav tabs, so they can easily integrate with the rest of the kit. </p>\n<p><b>For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/tabs/examples\" target=\"_blank\">link</a>.</b></p>\n\n<div class=\"nav-tabs-navigation\">\n\t<div class=\"nav-tabs-wrapper\">\n\t\t<ngb-tabset [justify]=\"'center'\">\n\t\t  <ngb-tab title=\"Home\">\n\t\t\t<ng-template ngbTabContent>\n\t\t\t  <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n\t\t\t</ng-template>\n\t\t  </ngb-tab>\n\t\t  <ngb-tab title=\"Profile\">\n\t\t\t<ng-template ngbTabContent>\n\t\t\t  <p>Here is your profile.</p>\n\t\t\t</ng-template>\n\t\t  </ngb-tab>\n\t\t  <ngb-tab title=\"Messages\">\n\t\t\t<ng-template ngbTabContent>\n\t\t\t  <p>Here are your messages.</p>\n\t\t\t</ng-template>\n\t\t  </ngb-tab>\n\t\t</ngb-tabset>\n\t</div>\n</div>\n\n<div class=\"area-line\">\n\t<div id=\"navTabs\">\n\t\t<pre class=\"prettyprint\">\n&#x3C;div class=&#x22;nav-tabs-navigation&#x22;&#x3E;\n\t&#x3C;div class=&#x22;nav-tabs-wrapper&#x22;&#x3E;\n\t\t&#x3C;ngb-tabset [justify]=&#x22;&#x27;center&#x27;&#x22;&#x3E;\n\t\t  &#x3C;ngb-tab title=&#x22;Home&#x22;&#x3E;\n\t\t\t&#x3C;ng-template ngbTabContent&#x3E;\n\t\t\t  &#x3C;p&#x3E;Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.&#x3C;/p&#x3E;\n\t\t\t&#x3C;/ng-template&#x3E;\n\t\t  &#x3C;/ngb-tab&#x3E;\n\t\t  &#x3C;ngb-tab title=&#x22;Profile&#x22;&#x3E;\n\t\t\t&#x3C;ng-template ngbTabContent&#x3E;\n\t\t\t  &#x3C;p&#x3E;Here is your profile.&#x3C;/p&#x3E;\n\t\t\t&#x3C;/ng-template&#x3E;\n\t\t  &#x3C;/ngb-tab&#x3E;\n\t\t  &#x3C;ngb-tab title=&#x22;Messages&#x22;&#x3E;\n\t\t\t&#x3C;ng-template ngbTabContent&#x3E;\n\t\t\t  &#x3C;p&#x3E;Here are your messages.&#x3C;/p&#x3E;\n\t\t\t&#x3C;/ng-template&#x3E;\n\t\t  &#x3C;/ngb-tab&#x3E;\n\t\t&#x3C;/ngb-tabset&#x3E;\n\t&#x3C;/div&#x3E;\n&#x3C;/div&#x3E;</pre>\n\t\t</div>\n\t</div>\n</div>\n<!--     end row -->\n\n<!-- nav pills row -->\n<div class=\"tim-row\" id=\"navpills-row\">\n<h2> Nav Pills</h2>\n<legend></legend>\n<p class=\"space-top\">\n    We changed the design for the Bootstrap nav pills into something a bit more fresh. We also added more color classes for customisation.\n</p>\n<p><b>For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/tabs/examples\" target=\"_blank\">link</a>.</b></p>\n<!-- Nav pills -->\n<ngb-tabset type=\"pills\" class=\"nav-pills-danger\">\n  <ngb-tab title=\"Info\">\n    <ng-template ngbTabContent>\n\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"Menu\">\n\t<ng-template ngbTabContent>\n\n\t</ng-template>\n  </ngb-tab>\n  <ngb-tab title=\"Concept\">\n    <ng-template ngbTabContent>\n    </ng-template>\n  </ngb-tab>\n</ngb-tabset>\n\n<div class=\"area-line\">\n\t<div id=\"navPills\" >\n\t\t<pre class=\"prettyprint\">\n&#x3C;ngb-tabset type=&#x22;pills&#x22; class=&#x22;nav-pills-danger&#x22;&#x3E;\n  &#x3C;ngb-tab title=&#x22;Info&#x22;&#x3E;\n    &#x3C;ng-template ngbTabContent&#x3E;\n\n    &#x3C;/ng-template&#x3E;\n  &#x3C;/ngb-tab&#x3E;\n  &#x3C;ngb-tab title=&#x22;Menu&#x22;&#x3E;\n&#x9;&#x3C;ng-template ngbTabContent&#x3E;\n\n&#x9;&#x3C;/ng-template&#x3E;\n  &#x3C;/ngb-tab&#x3E;\n  &#x3C;ngb-tab title=&#x22;Concept&#x22;&#x3E;\n    &#x3C;ng-template ngbTabContent&#x3E;\n    &#x3C;/ng-template&#x3E;\n  &#x3C;/ngb-tab&#x3E;\n&#x3C;/ngb-tabset&#x3E;</pre>\n\t    </div>\n\t</div>\n</div>\n\t    <!-- end row -->\n"

/***/ }),

/***/ "./src/app/documentation/navigation/navigation.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/documentation/navigation/navigation.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/navigation/navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/documentation/navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/documentation/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/documentation/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/documentation/ng-bootstrap/ng-bootstrap.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/documentation/ng-bootstrap/ng-bootstrap.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/ng-bootstrap/ng-bootstrap.component.html":
/*!************************************************************************!*\
  !*** ./src/app/documentation/ng-bootstrap/ng-bootstrap.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Ng Bootstrap</h2>\n<p class=\"space-top\">\n  This repository contains a set of native Angular directives based on Bootstrap's markup and CSS. As a result no dependency on jQuery or Bootstrap's JavaScript is required. The only required dependencies are:\n</p>\n<ul>\n    <li>\n      <a href=\"https://angular.io\" target=\"_blank\">Angular</a> (<em>requires</em> Angular version 4 or higher, tested with 4.0.3)\n    </li>\n    <li>\n      <a href=\"https://www.getbootstrap.com\" target=\"_blank\">Bootstrap CSS</a> (tested with 4.0.0-beta)\n    </li>\n  </ul>\n<div class=\"row space-top\">\n    <div class=\"col-md-4 ml-auto mr-auto\">\n        <a class=\"btn btn-danger btn-round\" href=\"https://ng-bootstrap.github.io/#/getting-started\">View Documentation</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/ng-bootstrap/ng-bootstrap.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/documentation/ng-bootstrap/ng-bootstrap.component.ts ***!
  \**********************************************************************/
/*! exports provided: NgBootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapComponent", function() { return NgBootstrapComponent; });
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

var NgBootstrapComponent = /** @class */ (function () {
    function NgBootstrapComponent() {
    }
    NgBootstrapComponent.prototype.ngOnInit = function () {
    };
    NgBootstrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ng-bootstrap',
            template: __webpack_require__(/*! ./ng-bootstrap.component.html */ "./src/app/documentation/ng-bootstrap/ng-bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./ng-bootstrap.component.css */ "./src/app/documentation/ng-bootstrap/ng-bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NgBootstrapComponent);
    return NgBootstrapComponent;
}());



/***/ }),

/***/ "./src/app/documentation/notification/notification.component.html":
/*!************************************************************************!*\
  !*** ./src/app/documentation/notification/notification.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tim-title\">\n    <h2>Notifications</h2>\n</div>\n\n<p>\nThe new Paper Kit notifications are looking fresh and clean. They go great with the navbar.</p>\n<p class=\"space-top\"><b>For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/alert/examples\" target=\"_blank\">link</a>.</b></p>\n<br>\n<p *ngFor=\"let alert of alerts\">\n  <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\n      <div class=\"container\">\n          <ng-container *ngIf=\"alert.icon\">\n            <i class=\"nc-icon {{alert.icon}}\"></i>\n          </ng-container>\n\n          {{ alert.message }}\n          <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n              <i class=\"nc-icon nc-simple-remove\"></i>\n          </button>\n      </div>\n  </ngb-alert>\n</p>\n\n<div class=\"area-line\">\n    <div id=\"tooltipsCode\">\n    <pre class=\"prettyprint\">\nHTML:\n\n&#x3C;p *ngFor=&#x22;let alert of alerts&#x22;&#x3E;\n  &#x3C;ngb-alert [type]=&#x22;alert.type&#x22;  [dismissible]=&#x22;false&#x22;&#x3E;\n      &#x3C;div class=&#x22;container&#x22;&#x3E;\n          &#x3C;ng-container *ngIf=&#x22;alert.icon&#x22;&#x3E;\n            &#x3C;i class=&#x22;nc-icon {{ '{' }}{{ '{' }}alert.icon{{ '}' }}{{ '}' }}&#x22;&#x3E;&#x3C;/i&#x3E;\n          &#x3C;/ng-container&#x3E;\n\n          {{ '{' }}{{ '{' }} alert.message {{ '}' }}{{ '}' }}\n          &#x3C;button type=&#x22;button&#x22; name=&#x22;button&#x22; class=&#x22;close&#x22; (click)=&#x22;closeAlert(alert)&#x22;&#x3E;\n              &#x3C;i class=&#x22;nc-icon nc-simple-remove&#x22;&#x3E;&#x3C;/i&#x3E;\n          &#x3C;/button&#x3E;\n      &#x3C;/div&#x3E;\n  &#x3C;/ngb-alert&#x3E;\n&#x3C;/p&#x3E;\n\nTYPESCRIPT:\n\nexport class NotificationComponent {{ '{' }}\n      @Input()\n      public alerts: Array&#x3C;IAlert&#x3E; = [];\n\n      private backup: Array&#x3C;IAlert&#x3E;;\n\n      constructor() {{ '{' }}\n        this.alerts.push({{ '{' }}\n          id: 1,\n          type: &#x27;success&#x27;,\n          message: &#x27;This is an success alert&#x27;,\n        {{ '}' }}, {{ '{' }}\n          id: 2,\n          type: &#x27;info&#x27;,\n          message: &#x27;This is an info alert&#x27;,\n        {{ '}' }}, {{ '{' }}\n          id: 3,\n          type: &#x27;warning&#x27;,\n          message: &#x27;This is a warning alert&#x27;,\n          icon: &#x27;nc-bell-55&#x27;\n        {{ '}' }}, {{ '{' }}\n          id: 4,\n          type: &#x27;danger&#x27;,\n          message: &#x27;This is a danger alert&#x27;,\n          icon: &#x27;nc-bell-55&#x27;\n        {{ '}' }});\n        this.backup = this.alerts.map((alert: IAlert) =&#x3E; Object.assign({{ '{' }}{{ '}' }}, alert));\n      {{ '}' }}\n\n      public closeAlert(alert: IAlert) {{ '{' }}\n        const index: number = this.alerts.indexOf(alert);\n        this.alerts.splice(index, 1);\n      {{ '}' }}\n{{ '}' }}\n\n\nexport interface IAlert {{ '{' }}\n  id: number;\n  type: string;\n  message: string;\n  icon?: string;\n{{ '}' }}\n</pre>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/notification/notification.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/documentation/notification/notification.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/notification/notification.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/documentation/notification/notification.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/documentation/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/documentation/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/documentation/pagination/pagination.component.html":
/*!********************************************************************!*\
  !*** ./src/app/documentation/pagination/pagination.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tim-title\">\n    <h2>Pagination</h2>\n    <br/>\n</div>\n<p><b>For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/pagination/examples\" target=\"_blank\">link</a>.</b></p>\n<br>\n<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n<br/>\n<ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n\n<div class=\"area-line\">\n\n    <div id=\"paginationCode\">\n    <pre class=\"prettyprint\">\n&#x3C;ngb-pagination [collectionSize]=&#x22;70&#x22; [(page)]=&#x22;page&#x22; aria-label=&#x22;Default pagination&#x22;&#x3E;&#x3C;/ngb-pagination&#x3E;\n&#x3C;br/&#x3E;\n&#x3C;ngb-pagination [collectionSize]=&#x22;100&#x22; [(page)]=&#x22;page1&#x22; [maxSize]=&#x22;5&#x22; [rotate]=&#x22;true&#x22;&#x3E;&#x3C;/ngb-pagination&#x3E;</pre>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/pagination/pagination.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/documentation/pagination/pagination.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/pagination/pagination.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/documentation/pagination/pagination.component.ts ***!
  \******************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
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

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.page = 4;
        this.page1 = 5;
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/documentation/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/documentation/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/documentation/popover/popover.component.html":
/*!**************************************************************!*\
  !*** ./src/app/documentation/popover/popover.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tim-title\">\n    <h2>Popovers</h2>\n</div>\n<p class=\"space-top\"><b>For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/popover/examples\" target=\"_blank\">link</a>.</b></p>\n<br>\n\n<button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n    on left\n</button>\n\n<button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n    on right\n</button>\n\n<button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n    on top\n</button>\n\n<button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n    on bottom\n</button>\n\n<div class=\"area-line\">\n\n    <div id=\"tooltipsCode\">\n    <pre class=\"prettyprint\">\n&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-outline-danger btn-round&#x22; placement=&#x22;left&#x22; ngbTooltip=&#x22;Tooltip on left&#x22;&#x3E;\n   on left\n&#x3C;/button&#x3E;\n&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-outline-danger btn-round&#x22; placement=&#x22;right&#x22; ngbTooltip=&#x22;Tooltip on right&#x22;&#x3E;\n   on right\n&#x3C;/button&#x3E;\n&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-outline-danger btn-round&#x22; placement=&#x22;top&#x22; ngbTooltip=&#x22;Tooltip on top&#x22;&#x3E;\n   on top\n&#x3C;/button&#x3E;\n&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-outline-danger btn-round&#x22; placement=&#x22;bottom&#x22; ngbTooltip=&#x22;Tooltip on bottom&#x22;&#x3E;\n   on bottom\n&#x3C;/button&#x3E;</pre>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/popover/popover.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/documentation/popover/popover.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/popover/popover.component.ts":
/*!************************************************************!*\
  !*** ./src/app/documentation/popover/popover.component.ts ***!
  \************************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
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

var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
    }
    PopoverComponent.prototype.ngOnInit = function () {
    };
    PopoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! ./popover.component.html */ "./src/app/documentation/popover/popover.component.html"),
            styles: [__webpack_require__(/*! ./popover.component.scss */ "./src/app/documentation/popover/popover.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/documentation/progressbar/progressbar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/documentation/progressbar/progressbar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tim-title\">\n    <h2>Progress Bar</h2>\n    <br/>\n</div>\n<p><b>For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/progressbar/examples\" target=\"_blank\">link</a>.</b></p>\n<br>\n<ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\n<ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\n<ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>75%</i></ngb-progressbar><br>\n<ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n<div class=\"area-line\">\n\n    <div id=\"progressbarCode\">\n    <pre class=\"prettyprint\">\n&#x3C;ngb-progressbar type=&#x22;success&#x22; [value]=&#x22;25&#x22;&#x3E;25&#x3C;/ngb-progressbar&#x3E;&#x3C;br&#x3E;\n&#x3C;ngb-progressbar type=&#x22;info&#x22; [value]=&#x22;50&#x22;&#x3E;Copying file &#x3C;b&#x3E;2 of 4&#x3C;/b&#x3E;...&#x3C;/ngb-progressbar&#x3E;&#x3C;br&#x3E;\n&#x3C;ngb-progressbar type=&#x22;warning&#x22; [value]=&#x22;75&#x22; [striped]=&#x22;true&#x22; [animated]=&#x22;true&#x22;&#x3E;&#x3C;i&#x3E;75%&#x3C;/i&#x3E;&#x3C;/ngb-progressbar&#x3E;&#x3C;br&#x3E;\n&#x3C;ngb-progressbar type=&#x22;danger&#x22; [value]=&#x22;100&#x22; [striped]=&#x22;true&#x22;&#x3E;Completed!&#x3C;/ngb-progressbar&#x3E;</pre>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/progressbar/progressbar.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/documentation/progressbar/progressbar.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/progressbar/progressbar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/documentation/progressbar/progressbar.component.ts ***!
  \********************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
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

var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent() {
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
    };
    ProgressbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progressbar',
            template: __webpack_require__(/*! ./progressbar.component.html */ "./src/app/documentation/progressbar/progressbar.component.html"),
            styles: [__webpack_require__(/*! ./progressbar.component.scss */ "./src/app/documentation/progressbar/progressbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());



/***/ }),

/***/ "./src/app/documentation/radio/radio.component.html":
/*!**********************************************************!*\
  !*** ./src/app/documentation/radio/radio.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Radio Buttons </h2>\n<legend></legend>\n    <p class=\"space-top\">\n        To use the custom radio buttons, you need to import a separate Javascript file called 'paper-kit-radio.js'.\n    </p>\n    <div class=\"form-check-radio\">\n      <label class=\"form-check-label\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n        Radio is off\n        <span class=\"form-check-sign\"></span>\n      </label>\n    </div>\n    <div class=\"form-check-radio\">\n      <label class=\"form-check-label\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\n        Radio is on\n        <span class=\"form-check-sign\"></span>\n      </label>\n    </div>\n    <div class=\"form-check-radio disabled\">\n      <label class=\"form-check-label\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\n        Disabled Radio is off\n        <span class=\"form-check-sign\"></span>\n      </label>\n    </div>\n    <div class=\"form-check-radio disabled\">\n      <label class=\"form-check-label\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\n        Disabled Radio is on\n        <span class=\"form-check-sign\"></span>\n      </label>\n    </div>\n    <!-- <p>Usage can be done via Data Attributes: <a data-target=\"#radioDataAttribute\" href=\"javascript: void(0);\" data-toggle=\"collapse\">See example.</a></p> -->\n\t<div id=\"radioDataAttribute\">\n\t\t<pre class=\"prettyprint\">\n&#x3C;div class=&#x22;form-check-radio&#x22;&#x3E;\n  &#x3C;label class=&#x22;form-check-label&#x22;&#x3E;\n    &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;radio&#x22; name=&#x22;exampleRadios&#x22; id=&#x22;exampleRadios1&#x22; value=&#x22;option1&#x22; &#x3E;\n    Radio is off\n    &#x3C;span class=&#x22;form-check-sign&#x22;&#x3E;&#x3C;/span&#x3E;\n  &#x3C;/label&#x3E;\n&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;form-check-radio&#x22;&#x3E;\n  &#x3C;label class=&#x22;form-check-label&#x22;&#x3E;\n    &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;radio&#x22; name=&#x22;exampleRadios&#x22; id=&#x22;exampleRadios2&#x22; value=&#x22;option2&#x22; checked=&#x22;&#x22;&#x3E;\n    Radio is on\n    &#x3C;span class=&#x22;form-check-sign&#x22;&#x3E;&#x3C;/span&#x3E;\n  &#x3C;/label&#x3E;\n&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;form-check-radio disabled&#x22;&#x3E;\n  &#x3C;label class=&#x22;form-check-label&#x22;&#x3E;\n    &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;radio&#x22; name=&#x22;exampleRadios1&#x22; id=&#x22;exampleRadios3&#x22; value=&#x22;option3&#x22; disabled=&#x22;&#x22;&#x3E;\n    Disabled Radio is off\n    &#x3C;span class=&#x22;form-check-sign&#x22;&#x3E;&#x3C;/span&#x3E;\n  &#x3C;/label&#x3E;\n&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;form-check-radio disabled&#x22;&#x3E;\n  &#x3C;label class=&#x22;form-check-label&#x22;&#x3E;\n    &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;radio&#x22; name=&#x22;exampleRadios1&#x22; id=&#x22;exampleRadios4&#x22; value=&#x22;option3&#x22; checked disabled=&#x22;&#x22;&#x3E;\n    Disabled Radio is on\n    &#x3C;span class=&#x22;form-check-sign&#x22;&#x3E;&#x3C;/span&#x3E;\n  &#x3C;/label&#x3E;\n&#x3C;/div&#x3E;</pre>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/radio/radio.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/documentation/radio/radio.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/radio/radio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/documentation/radio/radio.component.ts ***!
  \********************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
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

var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
    }
    RadioComponent.prototype.ngOnInit = function () {
    };
    RadioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-radio',
            template: __webpack_require__(/*! ./radio.component.html */ "./src/app/documentation/radio/radio.component.html"),
            styles: [__webpack_require__(/*! ./radio.component.scss */ "./src/app/documentation/radio/radio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RadioComponent);
    return RadioComponent;
}());



/***/ }),

/***/ "./src/app/documentation/sliders/sliders.component.html":
/*!**************************************************************!*\
  !*** ./src/app/documentation/sliders/sliders.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"tim-title\">\n    <h2> Sliders</h2>\n    <br/>\n</div>\n<legend></legend>\n<p class=\"space-top\"><b>For full documentation, see this <a href=\"https://github.com/tb/ng2-nouislider\" target=\"_blank\">link</a>.</b></p>\n<br>\n<nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\n<br>\n<nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\n<div class=\"area-line\">\n   <div id=\"sliderMarkup\">\n   <pre class=\"prettyprint\">\n&#x3C;nouislider [connect]=&#x22;false&#x22; [min]=&#x22;0&#x22; [max]=&#x22;100&#x22; [step]=&#x22;1&#x22; [(ngModel)]=&#x22;simpleSlider&#x22; [tooltips]=&#x22;false&#x22; class=&#x22;slider&#x22;&#x3E;&#x3C;/nouislider&#x3E;\n&#x3C;br&#x3E;\n&#x3C;nouislider class=&#x22;slider slider-info&#x22; [connect]=&#x22;true&#x22; [min]=&#x22;0&#x22; [max]=&#x22;100&#x22; [step]=&#x22;1&#x22; [(ngModel)]=&#x22;doubleSlider&#x22; [tooltips]=&#x22;false&#x22;&#x3E;&#x3C;/nouislider&#x3E;</pre>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/sliders/sliders.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/documentation/sliders/sliders.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/sliders/sliders.component.ts":
/*!************************************************************!*\
  !*** ./src/app/documentation/sliders/sliders.component.ts ***!
  \************************************************************/
/*! exports provided: SlidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersComponent", function() { return SlidersComponent; });
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

var SlidersComponent = /** @class */ (function () {
    function SlidersComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
    }
    SlidersComponent.prototype.ngOnInit = function () {
    };
    SlidersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sliders',
            template: __webpack_require__(/*! ./sliders.component.html */ "./src/app/documentation/sliders/sliders.component.html"),
            styles: [__webpack_require__(/*! ./sliders.component.scss */ "./src/app/documentation/sliders/sliders.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SlidersComponent);
    return SlidersComponent;
}());



/***/ }),

/***/ "./src/app/documentation/textarea/textarea.component.html":
/*!****************************************************************!*\
  !*** ./src/app/documentation/textarea/textarea.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Textarea</h2>\n           <legend></legend>\n           <p class=\"space-top\">We added custom style for the textarea, so it looks similar to all other inputs.</p>\n\n           <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n\n           <div class=\"area-line\">\n       <div id=\"textarea\">\n       <pre class=\"prettyprint\">\n&lt;textarea class=&quot;form-control&quot; rows=&quot;4&quot; placeholder=&quot;Tell us your thoughts&quot;&gt;&lt;/textarea&gt;</pre>\n       </div>\n           </div>\n"

/***/ }),

/***/ "./src/app/documentation/textarea/textarea.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/documentation/textarea/textarea.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/textarea/textarea.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/documentation/textarea/textarea.component.ts ***!
  \**************************************************************/
/*! exports provided: TextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function() { return TextareaComponent; });
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

var TextareaComponent = /** @class */ (function () {
    function TextareaComponent() {
    }
    TextareaComponent.prototype.ngOnInit = function () {
    };
    TextareaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-textarea',
            template: __webpack_require__(/*! ./textarea.component.html */ "./src/app/documentation/textarea/textarea.component.html"),
            styles: [__webpack_require__(/*! ./textarea.component.scss */ "./src/app/documentation/textarea/textarea.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TextareaComponent);
    return TextareaComponent;
}());



/***/ }),

/***/ "./src/app/documentation/tooltips/tooltips.component.html":
/*!****************************************************************!*\
  !*** ./src/app/documentation/tooltips/tooltips.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tim-title\">\n    <h2>Tooltips</h2>\n</div>\n<p class=\"space-top\"><b>For full documentation, see this <a href=\"https://ng-bootstrap.github.io/#/components/tooltip/examples\" target=\"_blank\">link</a>.</b></p>\n<br>\n<button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n   on left\n</button>\n<button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n   on right\n</button>\n<button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n   on top\n</button>\n<button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n   on bottom\n</button>\n\n<div class=\"area-line\">\n\n    <div id=\"tooltipsCode\">\n    <pre class=\"prettyprint\">\n&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-outline-danger btn-round&#x22; placement=&#x22;left&#x22; ngbTooltip=&#x22;Tooltip on left&#x22;&#x3E;\n   on left\n&#x3C;/button&#x3E;\n&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-outline-danger btn-round&#x22; placement=&#x22;right&#x22; ngbTooltip=&#x22;Tooltip on right&#x22;&#x3E;\n   on right\n&#x3C;/button&#x3E;\n&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-outline-danger btn-round&#x22; placement=&#x22;top&#x22; ngbTooltip=&#x22;Tooltip on top&#x22;&#x3E;\n   on top\n&#x3C;/button&#x3E;\n&#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-outline-danger btn-round&#x22; placement=&#x22;bottom&#x22; ngbTooltip=&#x22;Tooltip on bottom&#x22;&#x3E;\n   on bottom\n&#x3C;/button&#x3E;</pre>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/tooltips/tooltips.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/documentation/tooltips/tooltips.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/tooltips/tooltips.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/documentation/tooltips/tooltips.component.ts ***!
  \**************************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return TooltipsComponent; });
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

var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent() {
    }
    TooltipsComponent.prototype.ngOnInit = function () {
    };
    TooltipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tooltips',
            template: __webpack_require__(/*! ./tooltips.component.html */ "./src/app/documentation/tooltips/tooltips.component.html"),
            styles: [__webpack_require__(/*! ./tooltips.component.scss */ "./src/app/documentation/tooltips/tooltips.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ }),

/***/ "./src/app/documentation/tutorial/tutorial.component.html":
/*!****************************************************************!*\
  !*** ./src/app/documentation/tutorial/tutorial.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">License</h2>\n<legend></legend>\n<p class=\"space-top\">\n    When you purchase an item from <a href=\"https://www.creative-tim.com/\" target=\"_blank\">Creative Tim</a>, you are actually purchasing a license to use that item. All our free items are under MIT license. All our premium items are covered by our Personal and Developer licenses. In order to understand the rights and restrictions that come with your purchase, please read the details from our <a href=\"https://www.creative-tim.com/license?ref=license-page-pk2-angular\" target=\"_blank\">Official License Page</a>.\n</p>\n\n\n<h2 class=\"text-center\">Short Description and Usage</h2>\n<legend></legend>\n<p class=\"space-top\">\nPaper kit is a beautiful resource built for Bootstrap. We have redesigned all its components with a pale color scheme and paper-like transitions. We are proud of this new Bootstrap skin and the possibilities for customisation.\n</p>\n<p>\nUsing it is very simple and it will enable you to refresh you classic looking application. To get the desired effect you will also need to integrate JS plugins that take a little bit more effort. It the end the result will be worth it.\n</p>\n\n<!--         end row -->\n\n<!--         usage row -->\n<h2 class=\"text-center\">Getting Started</h2>\n<legend></legend>\n<p class=\"space-top\">\nThe Paper Kit is built on top of Bootstrap 4, so you can safely use it on your existing or new Bootstrap project. No line of code from Bootstrap 4 was changed, so you don't have to worry about undesired effects in your work.\n</p>\n<p>\n    We provide all the necessary CSS resources. To get going, just include 'css/paper-kit.css' in your HTML template. Your project will get the new look.\n</p>\n<p>\n    The easiest way to start is to use our start-up template where all the files are already included and ready to use.\n</p>\n<!--         end row -->\n<ul>\n    <li><p>Install NodeJs from <a href=\"https://nodejs.org/en\" target=\"_blank\">NodeJs Official Page</a></p></li>\n    <li><p>Open Terminal</p></li>\n    <li><p>Go to your file project</p></li>\n    <li><p>Run in terminal: <code>npm install -g @angular/cli@latest</code></p></li>\n    <li><p>Then: <code>npm install</code></p></li>\n    <li><p>And: <code>ng serve</code></p></li>\n    <li><p>Navigate to: <a href=\"http://localhost:4200/\" target=\"_blank\">http://localhost:4200/</a></p></li>\n\n</ul>\n\n<h4 class=\"title\">\n    <b>Live Production on Heroku</b>\n</h4>\n<p>Replace package.json with this code.</p>\n<pre class=\"prettyprint\">\n{{ '{' }}\n  \"name\": \"pk2-angular\",\n  \"version\": \"1.0.0\",\n  \"license\": \"MIT\",\n  \"scripts\": {{ '{' }}\n    \"postinstall\": \"ng build --aot -prod\",\n    \"ng\": \"ng\",\n    \"start\": \"node server.js\",\n    \"build\": \"ng build\",\n    \"test\": \"ng test\",\n    \"lint\": \"ng lint\",\n    \"e2e\": \"ng e2e\"\n  {{ '}' }},\n  \"engines\": {{ '{' }}\n    \"node\": \"6.11.1\",\n    \"npm\": \"3.10.9\"\n  {{ '}' }},\n  \"private\": true,\n  \"dependencies\": {{ '{' }}\n    \"@angular/cli\": \"1.4.1\",\n    \"@angular/animations\": \"4.3.1\",\n    \"@angular/common\": \"4.3.1\",\n    \"@angular/compiler\": \"4.3.1\",\n    \"@angular/compiler-cli\": \"4.3.1\",\n    \"@angular/core\": \"4.3.1\",\n    \"@angular/forms\": \"4.3.1\",\n    \"@angular/http\": \"4.3.1\",\n    \"@angular/platform-browser\": \"4.3.1\",\n    \"@angular/platform-browser-dynamic\": \"4.3.1\",\n    \"@angular/router\": \"4.3.1\",\n    \"@ng-bootstrap/ng-bootstrap\": \"1.0.0-beta.4\",\n    \"bootstrap\": \"4.0.0-beta\",\n    \"core-js\": \"^2.4.1\",\n    \"jquery\": \"3.2.1\",\n    \"jw-bootstrap-switch-ng2\": \"1.0.3\",\n    \"ng2-nouislider\": \"1.6.1\",\n    \"nouislider\": \"9.2.0\",\n    \"popper.js\": \"^1.12.3\",\n    \"rxjs\": \"^5.1.0\",\n    \"zone.js\": \"^0.8.4\",\n    \"typescript\": \"2.3.3\"\n  {{ '}' }},\n  \"devDependencies\": {{ '{' }}\n    \"@angular/compiler-cli\": \"4.3.1\",\n    \"@angular/language-service\": \"4.3.1\",\n    \"@types/jasmine\": \"2.5.45\",\n    \"@types/node\": \"~6.0.60\",\n    \"codelyzer\": \"~3.0.1\",\n    \"jasmine-core\": \"~2.6.2\",\n    \"jasmine-spec-reporter\": \"~4.1.0\",\n    \"karma\": \"~1.7.0\",\n    \"karma-chrome-launcher\": \"~2.1.1\",\n    \"karma-cli\": \"~1.0.1\",\n    \"karma-jasmine\": \"~1.1.0\",\n    \"karma-jasmine-html-reporter\": \"^0.2.2\",\n    \"karma-coverage-istanbul-reporter\": \"^1.2.1\",\n    \"protractor\": \"~5.1.2\",\n    \"ts-node\": \"~3.0.4\",\n    \"tslint\": \"~5.3.2\",\n    \"typescript\": \"2.3.3\"\n  {{ '}' }}\n{{ '}' }}\n</pre>\n<p>Also check this tutorial: <a href=\"https://paucls.wordpress.com/2016/11/25/deploy-angular-2-cli-app-to-heroku/\">Deploy Angular 2 CLI app to Heroku</a>.</p>\n<!--         file structure row -->\n<h2 class=\"text-center\">File Structure</h2>\n<legend></legend>\n<p class=\"space-top\">\n    Once you have downloaded the archive and opened it, you will find the following structure:\n\n</p>\n<p>\n    Let's take it one by one:\n</p>\n<pre class=\"prettyprint\">\n    pk2-angular\n    ├── CHANGELOG.md\n    ├── LICENSE.md\n    ├── README.md\n    ├── angular-cli.json\n    ├── documentation\n    │   └── tutorial-components.html\n    ├── e2e\n    ├── karma.conf.js\n    ├── package-lock.json\n    ├── package.json\n    ├── protractor.conf.js\n    ├── src\n    │   ├── app\n    │   │   ├── app.component.html\n    │   │   ├── app.component.scss\n    │   │   ├── app.component.spec.ts\n    │   │   ├── app.component.ts\n    │   │   ├── app.module.ts\n    │   │   ├── app.routing.ts\n    │   │   ├── components\n    │   │   │   ├── basicelements\n    │   │   │   │   ├── basicelements.component.html\n    │   │   │   │   ├── basicelements.component.scss\n    │   │   │   │   ├── basicelements.component.spec.ts\n    │   │   │   │   └── basicelements.component.ts\n    │   │   │   ├── components.component.html\n    │   │   │   ├── components.component.ts\n    │   │   │   ├── components.module.ts\n    │   │   │   ├── modal\n    │   │   │   │   ├── modal.component.html\n    │   │   │   │   ├── modal.component.scss\n    │   │   │   │   ├── modal.component.spec.ts\n    │   │   │   │   └── modal.component.ts\n    │   │   │   ├── navigation\n    │   │   │   │   ├── navigation.component.html\n    │   │   │   │   ├── navigation.component.scss\n    │   │   │   │   ├── navigation.component.spec.ts\n    │   │   │   │   └── navigation.component.ts\n    │   │   │   ├── notification\n    │   │   │   │   ├── notification.component.html\n    │   │   │   │   ├── notification.component.scss\n    │   │   │   │   ├── notification.component.spec.ts\n    │   │   │   │   └── notification.component.ts\n    │   │   │   ├── nucleoicons\n    │   │   │   │   ├── nucleoicons.component.html\n    │   │   │   │   ├── nucleoicons.component.scss\n    │   │   │   │   ├── nucleoicons.component.spec.ts\n    │   │   │   │   └── nucleoicons.component.ts\n    │   │   │   └── typography\n    │   │   │       ├── typography.component.html\n    │   │   │       ├── typography.component.scss\n    │   │   │       ├── typography.component.spec.ts\n    │   │   │       └── typography.component.ts\n    │   │   ├── home\n    │   │   │   ├── home.component.html\n    │   │   │   ├── home.component.scss\n    │   │   │   ├── home.component.spec.ts\n    │   │   │   ├── home.component.ts\n    │   │   │   └── home.module.ts\n    │   │   ├── landing\n    │   │   │   ├── landing.component.html\n    │   │   │   ├── landing.component.scss\n    │   │   │   ├── landing.component.spec.ts\n    │   │   │   └── landing.component.ts\n    │   │   ├── profile\n    │   │   │   ├── profile.component.html\n    │   │   │   ├── profile.component.scss\n    │   │   │   ├── profile.component.spec.ts\n    │   │   │   └── profile.component.ts\n    │   │   ├── shared\n    │   │   │   ├── footer\n    │   │   │   │   ├── footer.component.html\n    │   │   │   │   ├── footer.component.scss\n    │   │   │   │   ├── footer.component.spec.ts\n    │   │   │   │   └── footer.component.ts\n    │   │   │   └── navbar\n    │   │   │       ├── navbar.component.html\n    │   │   │       ├── navbar.component.scss\n    │   │   │       ├── navbar.component.spec.ts\n    │   │   │       └── navbar.component.ts\n    │   │   └── signup\n    │   │       ├── signup.component.html\n    │   │       ├── signup.component.scss\n    │   │       ├── signup.component.spec.ts\n    │   │       └── signup.component.ts\n    │   ├── assets\n    │   │   ├── css\n    │   │   ├── fonts\n    │   │   ├── img\n    │   │   └── sass\n    │   │       ├── paper-kit\n    │   │       └── paper-kit.scss\n    │   ├── environments\n    │   ├── favicon.ico\n    │   ├── index.html\n    │   ├── main.ts\n    │   ├── polyfills.ts\n    │   ├── styles.scss\n    │   ├── test.ts\n    │   ├── tsconfig.app.json\n    │   ├── tsconfig.spec.json\n    │   └── typings.d.ts\n    ├── tsconfig.json\n    └── tslint.json</pre>\n<!--         end row -->\n\n<!--         restyled components row -->\n<h2 class=\"text-center\">Restyled Components</h2>\n<legend></legend>\n<br>\nHere is the list of Bootstrap 4 components that we restyled in Paper kit:\n    <ul>\n        <li> Buttons </li>\n        <li> Inputs</li>\n        <li> Textarea</li>\n        <li> Menu </li>\n        <li> Dropdown</li>\n        <li> Progress Bars</li>\n        <li> Navigation Menu</li>\n        <li> Pagination</li>\n        <li> Labels</li>\n        <li> Notifications</li>\n        <li> Typography</li>\n        <li> Images</li>\n        <li> Tooltips</li>\n        <li> Popovers</li>\n        <li> Modal </li>\n        <li> Carousel</li>\n    </ul>\n<!--         end row -->\n\n<h2 class=\"text-center\">New Components</h2>\n<legend></legend>\n<p class=\"space-top\">\nBesides giving the existing Bootstrap elements a new look, we added new ones, so that the interface and consistent and homogenous.\n</p>\nGoing through them, we added:\n<ul>\n    <li> Checkboxes</li>\n    <li> Radio Buttons</li>\n    <li> Sliders</li>\n    <li> Datepicker</li>\n</ul>\n<p>\n    For more details regarding the components, go to our <a [routerLink]=\"['/home']\">components page</a>.\n</p>\n<!-- end row -->\n"

/***/ }),

/***/ "./src/app/documentation/tutorial/tutorial.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/documentation/tutorial/tutorial.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pre.prettyprint {\n  background-color: #eee;\n  border: 0px;\n  margin-bottom: 60px;\n  margin-top: 30px;\n  padding: 20px;\n  text-align: left; }\n\n.atv, .str {\n  color: #05AE0E; }\n\n.tag, .pln, .kwd {\n  color: #3472F7; }\n\n.atn {\n  color: #2C93FF; }\n\n.pln {\n  color: #333; }\n\n.com {\n  color: #999; }\n\n.space-top {\n  margin-top: 50px; }\n\n.area-line {\n  border: 1px solid #999;\n  border-left: 0;\n  border-right: 0;\n  color: #666;\n  display: block;\n  margin-top: 20px;\n  padding: 8px 0;\n  text-align: center; }\n\n.area-line a {\n  color: #666; }\n\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px; }\n"

/***/ }),

/***/ "./src/app/documentation/tutorial/tutorial.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/documentation/tutorial/tutorial.component.ts ***!
  \**************************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
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

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/documentation/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.scss */ "./src/app/documentation/tutorial/tutorial.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/antoine-barres.jpg')\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <div class=\"angular-logo\">\n                        <img src=\"assets/img/angular2-logo.png\" alt=\"\">\n                    </div>\n                    <h1 class=\"presentation-title\">Paper Kit 2</h1>\n                    <div class=\"fog-low\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                    <div class=\"fog-low right\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\">Free Bootstrap 4 UI Kit for Angular 6</h2>\n            </div>\n        </div>\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n        <h6 class=\" category-absolute ml-auto mr-auto\">Designed and coded by\n        <!-- <h6 class=\"category category-absolute\">Designed and coded by -->\n\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">\n                <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\">\n            </a>\n        </h6>\n    </div>\n    <div class=\"main\">\n        <app-components></app-components>\n        <div class=\"section section-dark section-nucleo-icons\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-12\">\n                        <h2 class=\"title\">Nucleo Icons</h2><br/>\n                        <p class=\"description\">\n                            Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.\n                        </p><br/>\n                        <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-danger btn-round\">View Demo Icons</a>\n                        <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-outline-danger btn-round\" target=\"_blank\">View All Icons</a>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-12\">\n                        <div class=\"icons-container\">\n                            <i class=\"nc-icon nc-time-alarm\"></i>\n                            <i class=\"nc-icon nc-atom\"></i>\n                            <i class=\"nc-icon nc-camera-compact\"></i>\n                            <i class=\"nc-icon nc-watch-time\"></i>\n                            <i class=\"nc-icon nc-key-25\"></i>\n                            <i class=\"nc-icon nc-diamond\"></i>\n                            <i class=\"nc-icon nc-user-run\"></i>\n                            <i class=\"nc-icon nc-layout-11\"></i>\n                            <i class=\"nc-icon nc-badge\"></i>\n                            <i class=\"nc-icon nc-bulb-63\"></i>\n                            <i class=\"nc-icon nc-favourite-28\"></i>\n                            <i class=\"nc-icon nc-planet\"></i>\n                            <i class=\"nc-icon nc-tie-bow\"></i>\n                            <i class=\"nc-icon nc-zoom-split\"></i>\n                            <i class=\"nc-icon nc-cloud-download-93\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Completed with examples</h2>\n                        <p class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-image section-login\" style=\"background-image: url('assets/img/login-image.jpg');\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-md-6 col-sm-12 ml-auto mr-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Welcome</h3>\n                            <div class=\"social-line text-center\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </div>\n                            <form class=\"register-form\">\n                                <label>Email</label>\n                                <div class=\"input-group form-group-no-border\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n                                </div>\n\n                                <label>Password</label>\n                                <div class=\"input-group form-group-no-border\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-key-25\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Password\">\n                                </div>\n                                <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                            </form>\n                            <div class=\"forgot\">\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                        <div class=\"col text-center\" routerLinkActive=\"active\">\n                            <a [routerLink]=\"['/signup']\" class=\"btn btn-outline-neutral btn-round btn-lg\">View Register Page</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row example-page\">\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/landing']\">\n                            <img src=\"./assets/img/examples/landing-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                            <a [routerLink]=\"['/landing']\" class=\"btn btn-outline-neutral btn-round\">Landing Page</a>\n                        </a>\n                    </div>\n\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/user-profile']\">\n                            <img src=\"./assets/img/examples/profile-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                            <a [routerLink]=\"['/user-profile']\" class=\"btn btn-outline-neutral btn-round\">Profile Page</a>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"container text-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Do you like what you see?</h2>\n                        <p class=\"description\">Cause if you do, it can be yours for Free. Hit the button below and download it. Start a new project or give an old Bootstrap 4 project a new look.</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6 download-area ml-auto mr-auto\">\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2\" class=\"btn btn-warning btn-round\">Download free HTML</a>\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2-angular\" class=\"btn btn-danger btn-round\">Download free Angular</a>\n                    </div>\n                </div>\n                <div class=\"row justify-content-md-center sharing-area text-center\">\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <h3>Thank you for supporting us!</h3>\n                    </div>\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                      <share-buttons [theme]=\"'modern-dark'\"\n               [include]=\"['facebook','twitter','google']\"\n               [show]=\"5\"\n               [url]=\"'https://demos.creative-tim.com/paper-kit-2-angular/'\"\n              ></share-buttons>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.twitter-sharrre').length != 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.twitter-sharrre').sharrre({
                share: {
                    twitter: true
                },
                enableHover: false,
                enableTracking: true,
                enableCounter: false,
                buttons: { twitter: { via: 'CreativeTim' } },
                click: function (api, options) {
                    api.simulateClick();
                    api.openPopup('twitter');
                },
                template: '<i class="fa fa-twitter"></i>',
                url: 'http://pk2-angular.creative-tim.com/'
            });
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.twitter-sharrre-nav').length != 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.twitter-sharrre-nav').sharrre({
                share: {
                    twitter: true
                },
                enableHover: false,
                enableTracking: true,
                enableCounter: false,
                buttons: { twitter: { via: 'CreativeTim' } },
                click: function (api, options) {
                    api.simulateClick();
                    api.openPopup('twitter');
                },
                template: '<i class="fa fa-twitter"></i><p class="hidden-lg-up">Twitter</p>',
                url: 'http://pk2-angular.creative-tim.com/'
            });
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.facebook-sharrre').length != 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.facebook-sharrre').sharrre({
                share: {
                    facebook: true
                },
                enableHover: false,
                enableTracking: true,
                enableCounter: false,
                click: function (api, options) {
                    api.simulateClick();
                    api.openPopup('facebook');
                },
                template: '<i class="fa fa-facebook-square"></i>',
                url: 'http://pk2-angular.creative-tim.com/'
            });
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.facebook-sharrre-nav').length != 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.facebook-sharrre-nav').sharrre({
                share: {
                    facebook: true
                },
                enableHover: false,
                enableTracking: true,
                enableCounter: false,
                click: function (api, options) {
                    api.simulateClick();
                    api.openPopup('facebook');
                },
                template: '<i class="fa fa-facebook-square"></i><p class="hidden-lg-up">Facebook</p>',
                url: 'http://pk2-angular.creative-tim.com/'
            });
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.google-sharrre').length != 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.google-sharrre').sharrre({
                share: {
                    googlePlus: true
                },
                enableCounter: false,
                enableHover: false,
                enableTracking: true,
                click: function (api, options) {
                    api.simulateClick();
                    api.openPopup('googlePlus');
                },
                template: '<i class="fa fa-google"></i>',
                url: 'http://pk2-angular.creative-tim.com/'
            });
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_1__('.google-sharrre-nav').length != 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.google-sharrre-nav').sharrre({
                share: {
                    googlePlus: true
                },
                enableCounter: false,
                enableHover: false,
                enableTracking: true,
                click: function (api, options) {
                    api.simulateClick();
                    api.openPopup('googlePlus');
                },
                template: '<i class="fa fa-google"></i><p class="hidden-lg-up">Google</p>',
                url: 'http://pk2-angular.creative-tim.com/'
            });
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ngx_share_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-share/buttons */ "./node_modules/@ngx-share/buttons/esm5/ngx-share-buttons.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _documentation_documentation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../documentation/documentation.module */ "./src/app/documentation/documentation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
                _documentation_documentation_module__WEBPACK_IMPORTED_MODULE_10__["DocumentationModule"],
                _ngx_share_buttons__WEBPACK_IMPORTED_MODULE_8__["ShareButtonsModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/daniel-olahh.jpg');\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"motto text-center\">\n            <h1>Example page</h1>\n            <h3>Start designing your landing page here.</h3>\n            <br />\n            <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\n        </div>\n    </div>\n</div>\n<div class=\"main\">\n    <div class=\"section text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <h2 class=\"title\">Let's talk product</h2>\n                <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\n                <br>\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\n            </div>\n        </div>\n        <br/><br/>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-album-2\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">New Ideas</h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Statistics</h4>\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Delightful design</h4>\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"section section-dark text-center\">\n    <div class=\"container\">\n        <h2 class=\"title\">Let's talk about us</h2>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Henry Ford</h4>\n                                <h6 class=\"card-category\">Product Manager</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Sophie West</h4>\n                                <h6 class=\"card-category\">Designer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Robert Orben</h4>\n                                <h6 class=\"card-category\">Developer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\">Keep in touch?</h2>\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">  <i class=\"nc-icon nc-email-85\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                            </div>\n                        </div>\n                        <label>Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Jane Faker<br /></h4>\n                    <h6 class=\"description\">Music Producer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>\n                    <br />\n                    <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <ngb-tabset [justify]=\"'center'\">\n                        <ngb-tab title=\"Follows\">\n                            <ng-template ngbTabContent >\n                                <div class=\"row following\" id=\"follows\">\n                                    <div class=\"col-md-6 ml-auto mr-auto\">\n                                        <ul class=\"list-unstyled follows\">\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Flume<br/><small>Musical Producer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr />\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Banks<br /><small>Singer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Following\">\n                            <ng-template ngbTabContent>\n                                <h3 class=\"text-muted\">Not following anyone yet :(</h3>\n                                <br>\n                                <button class=\"btn btn-warning btn-round\">Find artists</button>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"https://www.creative-tim.com\">Paper Kit 2 Angular</a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\">\n                        <i class=\"fa fa-twitter\"></i>\n                        <p class=\"d-lg-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\">\n                        <i class=\"fa fa-facebook-square\"></i>\n                        <p class=\"d-lg-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\">\n                        <i class=\"fa fa-instagram\"></i>\n                        <p class=\"d-lg-none\">Instagram</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\" href=\"https://www.github.com/CreativeTimOfficial/paper-kit-2-angular\" target=\"_blank\">\n                        <i class=\"fa fa-github\"></i>\n                        <p class=\"d-lg-none\">GitHub</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a [routerLink]=\"['/documentation/tutorial']\" class=\"nav-link\"><i class=\"nc-icon nc-book-bookmark\"></i> Documentation</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"isHome()\">\n                    <a href=\"https://www.creative-tim.com/product/paper-kit-2-pro?ref=pk2-free-local\" target=\"_blank\" class=\"btn btn-danger btn-round disabled\">Upgrade to Pro</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isHome()\">\n                        <a [routerLink]=\"['/home']\" class=\"nav-link\" *ngIf=\"isDocumentation()\"><i class=\"nc-icon nc-layout-11\"></i>Back to Kit</a>\n                        <a [routerLink]=\"['/home']\" class=\"nav-link\" *ngIf=\"!isDocumentation()\"><i class=\"nc-icon nc-layout-11\"></i>Components</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"isDocumentation()\">\n                    <a href=\"https://github.com/creativetimofficial/paper-kit-2-angular/issues?ref=pk2-free-local\" target=\"_blank\" class=\"nav-link\">Have an issue</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.split('/')[1];
        if (titlee === 'documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/login-image.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Welcome</h3>\n                            <div class=\"social-line text-center\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </div>\n                            <form class=\"register-form\">\n                                <label>Email</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n\n                                <label>Password</label>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                                <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                            </form>\n                            <div class=\"forgot\">\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\n                </div>\n            </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ciprianchelaru/Developer/PK/github-pk-free-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map