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

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\n  <h2 class=\"text-center\">Add User</h2>\n  <button class=\"btn btn-danger\" style=\"\n  width: 100px;margin-left: 500px;\" (click)=\"login()\">Login</button>\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"username\">User Name:</label>\n      <input type=\"text\" formControlName=\"username\" placeholder=\"username\" name=\"username\" class=\"form-control\" id=\"username\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password:</label>\n      <input type=\"password\" formControlName=\"password\" placeholder=\"password\" name=\"password\" class=\"form-control\" id=\"password\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name:</label>\n      <input formControlName=\"firstName\" placeholder=\"First Name\" name=\"firstName\" class=\"form-control\" id=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name:</label>\n      <input formControlName=\"lastName\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\" id=\"lastName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"age\">Age:</label>\n      <input type=\"number\" formControlName=\"age\" placeholder=\"age\" name=\"age\" class=\"form-control\" id=\"age\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"salary\">Salary:</label>\n      <input type=\"number\" formControlName=\"salary\" placeholder=\"salary\" name=\"salary\" class=\"form-control\" id=\"salary\">\n    </div>\n\n    <button class=\"btn btn-success\">Update</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(formBuilder, router, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiService = apiService;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        // if(!window.localStorage.getItem('token')) {
        //   this.router.navigate(['login']);
        //   return;
        // }
        this.addForm = this.formBuilder.group({
            id: [],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            salary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AddUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.apiService.createUser(this.addForm.value)
            .subscribe(function (data) {
            _this.router.navigate(['list-user']);
        });
    };
    AddUserComponent.prototype.login = function () {
        if (window.localStorage.getItem('token')) {
            window.localStorage.removeItem("token");
        }
        this.router.navigate(['login']);
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"\">User Management</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</nav>\n<router-outlet></router-outlet>\n"

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
        this.title = 'nextgen-app';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");
/* harmony import */ var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-user/list-user.component */ "./src/app/list-user/list-user.component.ts");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/api.service */ "./src/app/core/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _core_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptor */ "./src/app/core/interceptor.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_4__["AddUserComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"],
                _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_6__["ListUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_core_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _core_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
                    multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-user/list-user.component */ "./src/app/list-user/list-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/edit-user/edit-user.component.ts");





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'add-user', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"] },
    { path: 'list-user', component: _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_3__["ListUserComponent"] },
    { path: 'edit-user', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["EditUserComponent"] },
    { path: '', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/core/api.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/api.service.ts ***!
  \*************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrl = '/users';
        this.separator = '/';
    }
    ApiService.prototype.login = function (loginPayload) {
        return this.http.post('/token/generate-token', loginPayload);
    };
    ApiService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl);
    };
    ApiService.prototype.getUserById = function (id) {
        return this.http.get(this.baseUrl + this.separator + id);
    };
    ApiService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl, user);
    };
    ApiService.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + this.separator + user.id, user);
    };
    ApiService.prototype.deleteUser = function (id) {
        return this.http.delete(this.baseUrl + this.separator + id);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/core/interceptor.ts ***!
  \*************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var token = window.localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/edit-user/edit-user.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\n  <h2 class=\"text-center\">Edit User</h2>\n  <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"hidden\">\n      <input type=\"text\" formControlName=\"id\" placeholder=\"id\" name=\"id\" class=\"form-control\" id=\"id\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"username\">User Name:</label>\n      <input type=\"text\" formControlName=\"username\" placeholder=\"username\" name=\"username\" class=\"form-control\" id=\"username\" readonly=\"true\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name:</label>\n      <input formControlName=\"firstName\" placeholder=\"First Name\" name=\"firstName\" class=\"form-control\" id=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name:</label>\n      <input formControlName=\"lastName\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\" id=\"lastName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"age\">Age:</label>\n      <input type=\"number\" formControlName=\"age\" placeholder=\"age\" name=\"age\" class=\"form-control\" id=\"age\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"salary\">Salary:</label>\n      <input type=\"number\" formControlName=\"salary\" placeholder=\"salary\" name=\"salary\" class=\"form-control\" id=\"salary\">\n    </div>\n\n    <button class=\"btn btn-success\">Update</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-user/edit-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-user/edit-user.component.ts ***!
  \**************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(formBuilder, router, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiService = apiService;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = window.localStorage.getItem("editUserId");
        if (!userId) {
            alert("Invalid action.");
            this.router.navigate(['list-user']);
            return;
        }
        this.editForm = this.formBuilder.group({
            id: [''],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.apiService.getUserById(+userId)
            .subscribe(function (data) {
            _this.editForm.setValue(data.result);
        });
    };
    EditUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.apiService.updateUser(this.editForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            if (data.status === 200) {
                alert('User updated successfully.');
                _this.router.navigate(['list-user']);
            }
            else {
                alert(data.message);
            }
        }, function (error) {
            alert(error);
        });
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/list-user/list-user.component.css":
/*!***************************************************!*\
  !*** ./src/app/list-user/list-user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-container {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC11c2VyL2xpc3QtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9saXN0LXVzZXIvbGlzdC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/list-user/list-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-user/list-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\n  <h2 style=\"margin: auto\"> User Details</h2>\n  <button class=\"btn btn-danger\" style=\"width:100px\" (click)=\"addUser()\"> Add User</button>\n  <button class=\"btn btn-danger\" style=\"width:100px; float:right;\" (click)=\"logout()\"> Logout</button>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th class=\"hidden\">Id</th>\n      <th>FirstName</th>\n      <th>LastName</th>\n      <th>UserName</th>\n      <th>Age</th>\n      <th>Salary</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td class=\"hidden\">{{user.id}}</td>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.username}}</td>\n      <td>{{user.age}}</td>\n      <td>{{user.salary}}</td>\n      <td><button class=\"btn btn-success\" (click)=\"deleteUser(user)\"> Delete</button>\n        <button class=\"btn btn-success\" (click)=\"editUser(user)\" style=\"margin-left: 20px;\"> Edit</button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/list-user/list-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-user/list-user.component.ts ***!
  \**************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListUserComponent = /** @class */ (function () {
    function ListUserComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    ListUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log;
        if (!window.localStorage.getItem('token')) {
            this.router.navigate(['login']);
            return;
        }
        this.apiService.getUsers()
            .subscribe(function (data) {
            _this.users = data.result;
        });
    };
    ListUserComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.apiService.deleteUser(user.id)
            .subscribe(function (data) {
            _this.users = _this.users.filter(function (u) { return u !== user; });
        });
    };
    ;
    ListUserComponent.prototype.editUser = function (user) {
        window.localStorage.removeItem("editUserId");
        window.localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['edit-user']);
    };
    ;
    ListUserComponent.prototype.addUser = function () {
        this.router.navigate(['add-user']);
    };
    ;
    ListUserComponent.prototype.logout = function () {
        window.localStorage.removeItem("token");
        this.router.navigate(['login']);
    };
    ;
    ListUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-user',
            template: __webpack_require__(/*! ./list-user.component.html */ "./src/app/list-user/list-user.component.html"),
            styles: [__webpack_require__(/*! ./list-user.component.css */ "./src/app/list-user/list-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ListUserComponent);
    return ListUserComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\n  color: #FF0000;\n}\n.login-container {\n  display: flex;\n  flex-direction: column;\n  background-color: blanchedalmond;\n  margin: 2em auto auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3J7XG4gIGNvbG9yOiAjRkYwMDAwO1xufVxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xuICBtYXJnaW46IDJlbSBhdXRvIGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-6 login-container\">\n    <h2 style=\"margin: auto\">Login </h2>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"username\">UserName:</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\" autocomplete=\"off\">\n        <div class=\"error\" *ngIf=\"loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched\">Username is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"pwd\" autocomplete=\"off\">\n        <div class=\"error\" *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\">Password is required</div>\n      </div>\n      <div>\n        <button class=\"btn btn-success\" [disabled]=\"loginForm.invalid\">Login</button>\n        <button class=\"btn btn-success\" style=\"float: right;\"(click) = \"register()\"> Register</button>\n      </div>\n      <div *ngIf=\"invalidLogin\" class=\"error\">\n        <div>Invalid credentials.</div>\n      </div>\n    </form>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/api.service */ "./src/app/core/api.service.ts");
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
    function LoginComponent(formBuilder, router, apiService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.apiService = apiService;
        this.invalidLogin = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        var loginPayload = {
            username: this.loginForm.controls.username.value,
            password: this.loginForm.controls.password.value
        };
        this.apiService.login(loginPayload).subscribe(function (data) {
            console.log("login entered");
            if (data.status === 200) {
                window.localStorage.setItem('token', data.result.token);
                _this.router.navigate(['list-user']);
            }
            else {
                _this.invalidLogin = true;
            }
        }, function (error) {
            if (error.status === 403) {
                _this.invalidLogin = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        window.localStorage.removeItem('token');
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['add-user']);
    };
    ;
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\saibose\Desktop\Docker\nextgenworkspacedocker\nextgen\nextgen-client\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map