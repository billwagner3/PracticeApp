webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__key_pick_key_pick_component__ = __webpack_require__("./src/app/key-pick/key-pick.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__key_certainty_drill_key_certainty_drill_component__ = __webpack_require__("./src/app/key-certainty-drill/key-certainty-drill.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', redirectTo: '/key-certainty-drill', pathMatch: 'full' },
    { path: 'key-certainty-drill', component: __WEBPACK_IMPORTED_MODULE_3__key_certainty_drill_key_certainty_drill_component__["a" /* KeyCertaintyDrillComponent */] },
    { path: 'key-pick', component: __WEBPACK_IMPORTED_MODULE_2__key_pick_key_pick_component__["a" /* KeyPickComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "input.scaleInput[type=\"text\"] {\n  width: 300px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loadedFeature = 'key-certainty-drill';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__keys_service__ = __webpack_require__("./src/app/keys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__key_pick_key_pick_component__ = __webpack_require__("./src/app/key-pick/key-pick.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__key_certainty_drill_key_certainty_drill_component__ = __webpack_require__("./src/app/key-certainty-drill/key-certainty-drill.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__key_pick_key_pick_component__["a" /* KeyPickComponent */],
                __WEBPACK_IMPORTED_MODULE_12__key_certainty_drill_key_certainty_drill_component__["a" /* KeyCertaintyDrillComponent */],
                __WEBPACK_IMPORTED_MODULE_8__menu_menu_component__["a" /* MenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__keys_service__["a" /* KeysService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/key-certainty-drill/key-certainty-drill.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-menu (featureSelected)=\"onNavigate($event)\"></app-menu> -->\n<div class=\"container\">\n  <audio id=\"correctSound\" src=\"../../assets/ding.wav\" preload=\"auto\"></audio>\n  <audio id=\"wrongSound\" src=\"../../assets/WrongAnswer.wav\" preload=\"auto\"></audio>\n  <form>\n    <div style=\"text-align:center\">\n      \n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\" >\n        <input \n        class=\"scaleInput\" \n        type=\"text\" \n        [(ngModel)]=\"typeKey\"     \n        [ngModelOptions]=\"{standalone: true}\"> \n        <!-- <h1 *ngIf=\"dataPassed else errors\">Key: {{ test }}</h1> -->\n        <h4>Your Key Spelling is {{ printSpelling() }}</h4>\n        \n        <button class=\"btn btn-primary\" (click)=\"getKeyClass(typeKey)\">Check Your Key Spelling</button>\n        <br><br>  \n        \n        <!-- <h3 *ngIf=\"wrongInput\">I'm sorry, please try again</h3> -->\n      </div>\n      \n    </div>\n  </form>  \n</div>\n\n"

/***/ }),

/***/ "./src/app/key-certainty-drill/key-certainty-drill.component.scss":
/***/ (function(module, exports) {

module.exports = "input.scaleInput[type=\"text\"] {\n  width: 300px; }\n"

/***/ }),

/***/ "./src/app/key-certainty-drill/key-certainty-drill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyCertaintyDrillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_service__ = __webpack_require__("./src/app/keys.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeyCertaintyDrillComponent = /** @class */ (function () {
    function KeyCertaintyDrillComponent(keysService) {
        this.keysService = keysService;
        this.typeKey = '';
        this.dataPassed = false;
        this.test = '';
        this.errors = false;
        this.hasError = false;
    }
    KeyCertaintyDrillComponent.prototype.getKeyClass = function (typeKey) {
        var _this = this;
        this.keysService.getAllKeys(typeKey)
            .subscribe(function (test) {
            _this.test = test;
            console.log(test);
            var isRightKey = document.getElementById("drillKey").innerHTML;
            console.log(isRightKey);
            var audioPlayer = document.getElementById('correctSound');
            audioPlayer.addEventListener;
            if (test == isRightKey) {
                audioPlayer.play()
                    .then(function () {
                    alert("You got it right!");
                });
            }
            else {
                var audioPlayer_1 = document.getElementById('WrongAnswer');
                audioPlayer_1.addEventListener;
                alert("Incorrect answer, please try again");
            }
        });
    };
    ;
    KeyCertaintyDrillComponent.prototype.printSpelling = function () {
        return this.typeKey;
    };
    // loadedFeature = 'drill';
    // onNavigate(feature: string) {
    //   this.loadedFeature = feature;
    // }
    KeyCertaintyDrillComponent.prototype.ngOnInit = function () {
    };
    KeyCertaintyDrillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-key-certainty-drill',
            template: __webpack_require__("./src/app/key-certainty-drill/key-certainty-drill.component.html"),
            styles: [__webpack_require__("./src/app/key-certainty-drill/key-certainty-drill.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__keys_service__["a" /* KeysService */]])
    ], KeyCertaintyDrillComponent);
    return KeyCertaintyDrillComponent;
}());



/***/ }),

/***/ "./src/app/key-pick/key-pick.component.html":
/***/ (function(module, exports) {

module.exports = " <app-menu></app-menu>\n\n<form [formGroup]=\"form\">\n  <div style=\"text-align:center\">\n      <h1>\n          Welcome to {{ title }}!<br><br>\n        </h1>   \n        <h3>Go to Choose Keys on the menu and pick which keys you wish to drill. Once you have picked your keys, hit the submit\n          button and you will be directed back to this page to start your drill.\n        </h3><br><br>\n    <div>\n      <label formArrayName=\"keyNames\" *ngFor=\"let keyName of form.controls.keyNames.controls; let i = index\">\n        <input type=\"checkbox\" [formControlName]=\"i\">\n        <h5 [style.margin-left]=\"'20px'\">{{ keyNames[i].name }}</h5>\n      </label>\n    </div>\n    <div>\n        <h4>Keys to Drill: {{ keysToDrill() }}</h4>\n      <button   class=\"btn btn-primary\" (click)=\"submit()\">Get a Random Key</button>      \n      <h3>Key to Drill:</h3><h3 id=\"drillKey\"></h3>\n    </div>\n  </div>\n</form>\n<app-key-certainty-drill></app-key-certainty-drill>"

/***/ }),

/***/ "./src/app/key-pick/key-pick.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/key-pick/key-pick.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyPickComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keys_service__ = __webpack_require__("./src/app/keys.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KeyPickComponent = /** @class */ (function () {
    function KeyPickComponent(keysService, fb, router) {
        this.keysService = keysService;
        this.fb = fb;
        this.router = router;
        this.title = 'The Scale Certainty Application';
        this.keyNames = [
            { id: '1', name: 'C Major' }, { id: '2', name: 'G Major' }, { id: '3', name: 'D Major' },
            { id: '4', name: 'A Major' }, { id: '5', name: 'E Major' }, { id: '6', name: 'B Major' },
            { id: '7', name: 'F# Major' }, { id: '8', name: 'C# Major' }, { id: '9', name: 'F Major' },
            { id: '10', name: 'Bb Major' }, { id: '11', name: 'Eb Major' }, { id: '12', name: 'Ab Major' },
            { id: '13', name: 'Db Major' }, { id: '14', name: 'Gb Major' }, { id: '15', name: 'Cb Major' },
            { id: '16', name: 'A Minor' }, { id: '17', name: 'E Minor' }, { id: '18', name: 'B Minor' },
            { id: '19', name: 'F# Minor' }, { id: '20', name: 'C# Minor' }, { id: '21', name: 'G# Minor' },
            { id: '22', name: 'D# Minor' }, { id: '23', name: 'A# Minor' }, { id: '24', name: 'D Minor' },
            { id: '25', name: 'G Minor' }, { id: '26', name: 'C Minor' }, { id: '27', name: 'F Minor' },
            { id: '28', name: 'Bb Minor' }, { id: '29', name: 'Eb Minor' }, { id: '30', name: 'Ab Minor' }
        ];
        this.errors = false;
        this.dataPassed = false;
        this.tyepKey = '';
        this.currentKey = '';
        this.test = '';
        this.rightSpelling = '';
        var controls = this.keyNames.map(function (c) { return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](false); });
        controls[0].setValue(true);
        this.form = this.fb.group({
            keyNames: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */](controls, this.minSelectedCheckboxes(1))
        });
    }
    // thisKey = this.keysService.getScale(this.tyepKey)
    KeyPickComponent.prototype.ngOnInit = function () {
    };
    KeyPickComponent.prototype.getRandomKey = function () {
        var keyNumber = this.keysToDrill().length;
        console.log(keyNumber);
        var randomKey = Math.floor(Math.random() * keyNumber);
        /** below is what is needed to query the db, then it needs to be connected to another button to
         *  trigger the next drill.
        **/
        // console.log(this.keyNames[randomKey].name);
        console.log(randomKey);
        var currentKey = this.keyNames[randomKey].name;
        return currentKey;
    };
    KeyPickComponent.prototype.keysToDrill = function () {
        var _this = this;
        var onesChecked = this.form.value.keyNames
            .map(function (v, i) { return v ? _this.keyNames[i].name : null; })
            .filter(function (v) { return v !== null; });
        // this.router.navigate(['../key-certainty-drill/key-certainty-drill.component.html'])
        return onesChecked;
    };
    KeyPickComponent.prototype.submit = function () {
        var _this = this;
        var keysPicked = this.form.value.keyNames
            .map(function (v, i) { return v ? _this.keyNames[i].name : null; })
            .filter(function (v) { return v != null; });
        var firstKey = keysPicked.length;
        console.log(firstKey);
        var randomKey = Math.floor(Math.random() * firstKey);
        var drillKey = keysPicked[randomKey];
        console.log(keysPicked, drillKey);
        document.getElementById("drillKey").innerHTML = drillKey;
        return drillKey;
    };
    KeyPickComponent.prototype.checkKeyPick = function (tyepKey) {
        var _this = this;
        var check = this.keysService.getAllKeys(tyepKey)
            .subscribe(function (rightSpelling) {
            _this.rightSpelling = rightSpelling;
        });
    };
    KeyPickComponent.prototype.checkAnswer = function (check) {
        if (this.checkKeyPick(this.tyepKey)) {
            console.log(check);
            alert('You are correct!');
            var audio = new Audio('ding.wav');
            audio.play();
        }
    };
    KeyPickComponent.prototype.minSelectedCheckboxes = function (min) {
        if (min === void 0) { min = 1; }
        var validator = function (formArray) {
            var totalSelected = formArray.controls
                .map(function (control) { return control.value; })
                .reduce(function (prev, next) { return next ? prev + next : prev; }, 0);
            // if the total is not greater than the minimum, return the error message
            return totalSelected >= min ? null : { required: true };
        };
        return validator;
    };
    KeyPickComponent.prototype.gotoDrill = function () {
        this.router.navigate(['../key-certainty-drill/key-certainty-drill.component.html']);
    };
    KeyPickComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-key-pick',
            template: __webpack_require__("./src/app/key-pick/key-pick.component.html"),
            styles: [__webpack_require__("./src/app/key-pick/key-pick.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__keys_service__["a" /* KeysService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], KeyPickComponent);
    return KeyPickComponent;
}());



/***/ }),

/***/ "./src/app/keys.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeysService = /** @class */ (function () {
    function KeysService(_http) {
        this._http = _http;
    }
    KeysService.prototype.getKeys = function (typeKey) {
        typeKey = typeKey.replace('#', '%23');
        return this._http.get("api/keys/" + typeKey).do(console.log)
            .map(function (result) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["values"](result); });
    };
    KeysService.prototype.getAllKeys = function (typeKey) {
        var thisScale = '#';
        var sharpScale = new RegExp(thisScale, 'g');
        typeKey = typeKey.replace(sharpScale, '%23');
        return this._http.get("api/all-keys/" + typeKey).do(console.log)
            .map(function (result) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["values"](result); });
    };
    KeysService.prototype.getScale = function (typeKey) {
        var thisScale = '#';
        var sharpScale = new RegExp(thisScale, 'g');
        typeKey = typeKey.replace(sharpScale, '%23');
        return this._http.get("api/majorkeys/" + typeKey).do(console.log)
            .map(function (result) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["values"](result); });
    };
    KeysService.prototype.getMinorScale = function (typeKey) {
        var thisScale = '#';
        var sharpMinorScale = new RegExp(thisScale, 'g');
        typeKey = typeKey.replace(sharpMinorScale, '%23');
        return this._http.get("api/minorkeys/" + typeKey).do(console.log)
            .map(function (result) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["values"](result); });
    };
    KeysService.prototype.getKeyName = function (typeKey) {
        var thisScale = '#';
        var sharpScale = new RegExp(thisScale, 'g');
        typeKey = typeKey.replace(sharpScale, '%23');
        return this._http.get("api/all-keys/" + typeKey).do(console.log)
            .map(function (result) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["values"](result); });
    };
    KeysService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], KeysService);
    return KeysService;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    <div class=\"\">\n      <a routerLink=\"/\" class=\"navbar-brand\">Drill Page</a>\n    </div>  \n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/key-pick\" id=\"menu\"> Choose Keys </a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/drill-page\" id=\"menu\"> Drill Page </a></li>\n      </ul>\n      <ul class=\"nav navbar-nav ml-auto\">\n        <li class=\"dropdown\" appDropdown>\n          <a style=\"cursor: pointer;\" class=\"dropdown-menu\" role=\"button\"> Manage <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a style=\"cursor: pointer;\">Save Data</a></li>\n            <li><a style=\"cursor: pointer;\">Fetch Data</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/***/ (function(module, exports) {

module.exports = "#menu {\n  margin-left: 40px; }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map