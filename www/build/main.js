webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe_ngx__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { NotificationsService } from 'angular2-notifications-lite';
// import {Location} from '@angular/common';
// declare var $ : any;
// declare var jQuery : any;
var PaymentDetailsPage = /** @class */ (function () {
    function PaymentDetailsPage(navCtrl, stripe, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.stripe = stripe;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
    }
    PaymentDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* cartPage */]);
        }, 0);
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.Details = {
            // number: '5241810401568530', // 16-digit credit card number
            // expMonth:"09", // expiry month
            // expYear:"2021", // expiry year
            // cvc: '703', // CVC / CCV
            number: '4242424242424242',
            expMonth: "12",
            expYear: "2020",
            cvc: '220',
        };
    };
    // -----PaymentMethod-----
    PaymentDetailsPage.prototype.show = function () {
        var _this = this;
        try {
            if (this.Details.number == "") {
                this.presentToast("Please enter card number");
                return false;
            }
            if (this.Details.expMonth == "") {
                this.presentToast("Please enter card expMonth");
                return false;
            }
            if (this.Details.expYear == "") {
                this.presentToast("Please enter valid card expYear");
                return false;
            }
            if (this.Details.cvc == "") {
                this.presentToast("Please enter cvc");
                return false;
            }
            if (this.Details.cvc <= 3) {
                this.presentToast("Please enter valid cvc");
                return false;
            }
            console.log("before key Sucess");
            console.log("key Sucess");
            window.Stripe.card.createToken({
                number: this.Details.number,
                exp_month: this.Details.expMonth,
                exp_year: this.Details.expYear,
                cvc: this.Details.cvc
            }, function (status, response) {
                console.log(response);
                if (status === 200) {
                    localStorage.setItem("cardToken", response.card.id);
                    var cardDetail = {
                        "card_number": _this.Details.number,
                        "cvc": _this.Details.cvc,
                        "exp_month": _this.Details.expMonth,
                        "exp_year": _this.Details.expYear,
                        "name": "Prashant",
                        "user_id": _this.userInfo.user_id,
                        "strip_token": response.card.id,
                        "amount": "500"
                    };
                    console.log(cardDetail);
                    localStorage.setItem("cardInfo", JSON.stringify(cardDetail));
                }
                else {
                    _this.presentToast(response.error.message);
                }
            });
        }
        catch (error) {
            this.presentToast("chala hi nhi");
            console.log(error);
        }
    };
    // -----PaymentMethod-----
    PaymentDetailsPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* cartPage */]);
    };
    PaymentDetailsPage.prototype.goNext = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    PaymentDetailsPage.prototype.successModelOpen = function () {
        this.presentToast("Your Payment Sucessfully");
        this.goNext();
    };
    PaymentDetailsPage.prototype.successModelClosed = function () {
        this.presentToast("Your Payment not Done Sucessfully");
    };
    PaymentDetailsPage.prototype.backClicked = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* cartPage */]);
    };
    /// Toast function ////
    PaymentDetailsPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    PaymentDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paymentDetails',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/paymentDetails/paymentDetails.html"*/'<ion-header no-border>\n\n    <ion-toolbar transparent class="themColor white">\n\n        <button ion-button menuToggle >\n\n            <ion-icon name="menu" class="white"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            <div text-center style="margin-left: 38px;">\n\n            <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n            </div>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button style="background:transparent;" (click)="back()">\n\n                <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n            </button>\n\n        </ion-buttons>  \n\n    </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content padding10 >\n\n    <div style="padding: 30px;">\n\n        <div class="credit-card">\n\n            <div style="margin-bottom: 10px;text-align: center;">\n\n                <h4 class="title">Card detail</h4>\n\n            </div>\n\n            \n\n            <div class="form-body">\n\n                <!-- Card Number -->\n\n                <input type="tel" class="card-number" [(ngModel)]="Details.number" placeholder="Card Number">\n\n            \n\n                <!-- Date Field -->\n\n                <div class="date-field">\n\n                <div class="month">\n\n                    <select name="Month" [(ngModel)]="Details.expMonth" >\n\n                    <option value="00" selected>Month</option>\n\n                    <option value="01">January</option>\n\n                    <option value="02">February</option>\n\n                    <option value="03">March</option>\n\n                    <option value="04">April</option>\n\n                    <option value="05">May</option>\n\n                    <option value="06">June</option>\n\n                    <option value="07">July</option>\n\n                    <option value="08">August</option>\n\n                    <option value="09">September</option>\n\n                    <option value="10">October</option>\n\n                    <option value="11">November</option>\n\n                    <option value="12">December</option>\n\n                    </select>\n\n                </div>\n\n                <div class="year">\n\n                    <select name="Year" [(ngModel)]="Details.expYear">\n\n                    <option value="0000">Select Year</option>\n\n                    <option value="2018">2018</option>\n\n                    <option value="2019">2019</option>\n\n                    <option value="2020">2020</option>\n\n                    <option value="2021">2021</option>\n\n                    <option value="2022">2022</option>\n\n                    <option value="2023">2023</option>\n\n                    <option value="2024">2024</option>\n\n                    <option value="2025">2025</option>\n\n                    <option value="2026">2026</option>\n\n                    </select>\n\n                </div>\n\n                </div>\n\n            \n\n                <!-- Card Verification Field -->\n\n                <div class="card-verification">\n\n                <div class="cvv-input">\n\n                    <input type="tel" placeholder="CVV" [(ngModel)]="Details.cvc">\n\n                </div>\n\n                <div class="cvv-details">\n\n                    <p>3 or 4 digits usually found <br> on the signature strip</p>\n\n                </div>\n\n                </div>\n\n            \n\n                <!-- Buttons -->\n\n                <button type="submit" class="proceed-btn" (click)="show()">Proceed</button>\n\n                <!-- <button type="submit" class="paypal-btn"><a href="#">Pay With</a></button> -->\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/paymentDetails/paymentDetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe_ngx__["a" /* Stripe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], PaymentDetailsPage);
    return PaymentDetailsPage;
}());

//# sourceMappingURL=paymentDetails.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoryFilter_categoryFilter__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sortBy_sortBy__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(navCtrl, navParams, loadingCtrl, userService, toastCtrl, popoverCtrl, ModalCtrl, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.ModalCtrl = ModalCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.sort = "";
        this.mainCat = [];
        this.SearchValue = "";
        this.categories = [];
        this.SelectedCatIds = [];
        this.Searchdata = [];
        this.imgUrl = localStorage.getItem("BaseUrl");
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.categories = [];
        this.loadcat();
    }
    DiscoverPage_1 = DiscoverPage;
    DiscoverPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(DiscoverPage_1);
        }, 0);
    };
    DiscoverPage.prototype.loadcat = function () {
        var _this = this;
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.CategoryList(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.categories = res.data;
                console.log(_this.categories);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    // --------ForSearch-------
    DiscoverPage.prototype.loadcatSearch = function () {
        this.Searchdata = {
            "sort": '',
            "category": '',
            "fill_search": this.SearchValue,
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(this.Searchdata);
        this.SearchAPI();
    };
    DiscoverPage.prototype.SearchAPI = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.CategoryListSearch(this.Searchdata).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.categories = res.data;
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    // --------ForSearch-------
    DiscoverPage.prototype.details = function (id) {
        localStorage.setItem("MainCatId", id);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__category_category__["a" /* categoryPage */]);
    };
    DiscoverPage.prototype.Filter = function () {
        var _this = this;
        var modal1 = this.ModalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__categoryFilter_categoryFilter__["a" /* categoryFilterPage */]);
        modal1.present();
        modal1.onDidDismiss(function (data) {
            console.log(data);
            if (data == null) {
            }
            else {
                _this.mainCat = JSON.stringify(data);
                _this.loadcatbyFIlters();
            }
        });
    };
    DiscoverPage.prototype.short = function () {
        var _this = this;
        var modal2 = this.ModalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__sortBy_sortBy__["a" /* sortByPage */]);
        modal2.present();
        modal2.onDidDismiss(function (data) {
            console.log(data);
            if (data == null) {
            }
            else {
                _this.sort = data;
                _this.loadcatbyFIlters();
            }
        });
    };
    DiscoverPage.prototype.loadcatbyFIlters = function () {
        this.Searchdata = {
            "sort": this.sort,
            "category": this.mainCat,
            "fill_search": this.SearchValue,
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(this.Searchdata);
        this.SearchAPI();
    };
    DiscoverPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    /// Toast function ////
    DiscoverPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    DiscoverPage = DiscoverPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-discover',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/discover/discover.html"*/'\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button style="background:transparent;" (click)="back()">\n\n              <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n          </button>\n\n      </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n<ion-content>\n\n    <div *ngIf="ShowShortFilter != true">\n\n        <div text-center>\n\n            <ion-searchbar placeholder="Type Of Serach" showCancelButton cancelButtonText="Custom Cancel" (ionChange)="loadcatSearch()" [(ngModel)]="SearchValue"></ion-searchbar>\n\n        </div>\n\n        <div text-center *ngIf="this.SearchValue != \'\'">\n\n          <h4>Result for "{{SearchValue}}"</h4>\n\n        </div>\n\n        <!-- --------Filters---- -->\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <div class="buttonDiv">\n\n              <button class="themColor DiscoverButton" (click)="Filter()">Filters</button>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <div class="buttonDiv">\n\n              <button class="themColor DiscoverButton" (click)="short()">Sort By</button>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- --------Filters---- -->\n\n        <!-- --------ShowProduct---- -->\n\n        <ion-grid no-padding>\n\n          <ion-row>\n\n            <ion-col col-6 no-padding *ngFor="let item of categories" >\n\n              <ion-card (click)="details(item.id)">\n\n                <img src="{{imgUrl}}{{item.image}}" alt="logo" style="height: 100%;"/>\n\n                <div class="opctyDiv">\n\n                  <h2 class="opctyText">{{item.category_name}}</h2>\n\n                </div>\n\n              </ion-card>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <!-- --------ShowProduct---- -->\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/discover/discover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DiscoverPage);
    return DiscoverPage;
    var DiscoverPage_1;
}());

//# sourceMappingURL=discover.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categoryFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var categoryFilterPage = /** @class */ (function () {
    function categoryFilterPage(navCtrl, navParams, loadingCtrl, userService, viewCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.CatId = [];
        this.categories = [];
    }
    categoryFilterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.loading.dismiss();
            _this.viewCtrl.dismiss("");
        }, 0);
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.categories = [];
        this.loadcat();
    };
    categoryFilterPage.prototype.loadcat = function () {
        var _this = this;
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        this.loading.present();
        this.userService.CategoryList(data).subscribe(function (res) {
            _this.loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.categories = res.data;
                console.log(_this.categories);
            }
            else {
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    categoryFilterPage.prototype.selectdata = function (id) {
        if (this.CatId.length == 0) {
            this.CatId.push(id);
        }
        else {
            var found = 'n';
            for (var i = 0; i < this.CatId.length; i++) {
                if (id == this.CatId[i]) {
                    found = 'y';
                    this.CatId.splice(i, 1);
                }
            }
            if (found == 'n') {
                this.CatId.push(id);
            }
        }
        console.log(this.CatId);
    };
    categoryFilterPage.prototype.save = function (id) {
        this.viewCtrl.dismiss(this.CatId);
        // localStorage.setItem("MainCatId",id);
        // let a = localStorage.getItem("filterfrom");
        // if(a == 'search'){
        //   this.navCtrl.setRoot(DiscoverPage);
        // }else{
        //   this.navCtrl.setRoot(collectionPage);
        // }
    };
    categoryFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoryFilter',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/categoryFilter/categoryFilter.html"*/'\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button style="background:transparent;" (click)="save()">\n\n            <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n        </button>\n\n      </ion-buttons> \n\n  </ion-toolbar>  \n\n</ion-header>\n\n<ion-content>\n\n  <div>\n\n    <div text-center>\n\n        <h4 text-uppercase class="textColor fw600">Filters</h4>\n\n    </div>\n\n    <div margin-top class="text-webkit">\n\n      <div class="width_max">\n\n        <ion-item no-border *ngFor="let item of categories">\n\n          <ion-label text-capitalize>{{item.category_name}}</ion-label>\n\n          <ion-checkbox (click)="selectdata(item.id)"  color="primary" checked="false" class="checkbox-margin"></ion-checkbox>\n\n        </ion-item>\n\n      </div>\n\n    </div>\n\n    <div text-center class="mtop10">\n\n        <button class="themColor okButton" (click)="save()">ok</button>\n\n    </div>\n\n    <!-- <div text-center margin-top class="posBot">\n\n      <button class="themColor okButton" (click)="save()">ok</button>\n\n    </div> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/categoryFilter/categoryFilter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], categoryFilterPage);
    return categoryFilterPage;
}());

//# sourceMappingURL=categoryFilter.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sortByPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var sortByPage = /** @class */ (function () {
    function sortByPage(navCtrl, navParams, viewCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.Sort = '';
    }
    sortByPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss("");
        }, 0);
    };
    sortByPage.prototype.selectdata = function (id) {
        this.Sort = id;
    };
    sortByPage.prototype.save = function (id) {
        this.viewCtrl.dismiss(id);
        // localStorage.setItem("sortby",id);
        // let a = localStorage.getItem("sort");
        // if(a == 'search'){
        //   this.navCtrl.setRoot(DiscoverPage);
        // }else{
        //   this.navCtrl.setRoot(collectionPage);
        // }
    };
    sortByPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sortBy',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/sortBy/sortBy.html"*/'\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button style="background:transparent;" (click)="save()">\n\n            <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n        </button>\n\n      </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div>\n\n    <div text-center>\n\n        <h4 text-uppercase class="textColor fw600">sort By</h4>\n\n    </div>\n\n    <div margin-top class="text-webkit">\n\n      <div class="width_max">\n\n        <ion-item no-border>\n\n          <ion-label text-capitalize>date</ion-label>\n\n          <ion-checkbox (click)="save(\'Date\')" color="primary" checked="false" class="checkbox-margin"></ion-checkbox>\n\n        </ion-item>\n\n        \n\n        <ion-item no-border>\n\n          <ion-label text-capitalize>price low to high</ion-label>\n\n          <ion-checkbox (click)="save(\'0\')" color="primary" checked="false" class="checkbox-margin"></ion-checkbox>\n\n        </ion-item>\n\n\n\n        <ion-item no-border>\n\n          <ion-label text-capitalize>price high to low</ion-label>\n\n          <ion-checkbox (click)="save(\'1\')" color="primary" checked="false" class="checkbox-margin"></ion-checkbox>\n\n        </ion-item>\n\n      </div>\n\n      <!-- <div text-center margin-top class="posBot">\n\n        <button class="themColor okButton" (click)="save()">ok</button>\n\n      </div> -->\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/sortBy/sortBy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], sortByPage);
    return sortByPage;
}());

//# sourceMappingURL=sortBy.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PSRPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__psrGenerate_psrGenerate__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemName_itemName__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PSRPage = /** @class */ (function () {
    function PSRPage(navCtrl, navParams, loadingCtrl, userService, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.platform = platform;
    }
    PSRPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, 0);
        this.makeRequest = false;
        this.printIT = false;
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.LoadPersonal();
    };
    PSRPage.prototype.LoadPersonal = function () {
        var _this = this;
        var data = {
            "user_id": this.userInfo.user_id
        };
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.PersonalService(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.PersonalDetails = res.data;
                for (var i = 0; i < _this.PersonalDetails.length; i++) {
                    var splitname = _this.PersonalDetails[i].attechment.split("/");
                    _this.PersonalDetails[i].Filename = splitname[splitname.length - 1];
                }
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    PSRPage.prototype.request = function (status) {
        this.makeRequest = status;
    };
    PSRPage.prototype.goPrint = function (value) {
        this.makeRequest = false;
        this.printIT = value;
    };
    PSRPage.prototype.makeReq = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__psrGenerate_psrGenerate__["a" /* PSRGeneratePage */]);
    };
    PSRPage.prototype.viewProduct = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__itemName_itemName__["a" /* itemNamePage */]);
    };
    PSRPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    PSRPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-psr',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/psr/psr.html"*/'<!-- <ion-header no-border>\n\n  <ion-navbar transparent class="themColor white">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" class="white"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n      <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end >\n\n          <button style="background:transparent;" (click)="back()">\n\n              <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n          </button>\n\n      </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content padding class="">\n\n  <div text-center text-uppercase class="fs18 fw500">\n\n    personalised services requests\n\n  </div>\n\n  <div text-center>\n\n    <div text-center style="margin: 10px 0px 20px 0px;" >\n\n      <p class="newRequest border-black" (click)="makeReq()" tappable>\n\n          <ion-icon name="text" class="white" style="margin-right: 5px;"></ion-icon>\n\n        make a new request\n\n      </p>\n\n    </div>\n\n    <!-- <div class="timeDiv">\n\n        <div text-right>\n\n            <p class="fs12 fw500 black margin5px">22/01/2019</p>\n\n            <p class="fs12 fw500 black margin2px">3.15 PM</p>\n\n        </div>\n\n        <div text-start class="" style="padding-left: 5px;">\n\n          <p text-uppercase class="fs14 fw600">sdsfdf</p>\n\n        </div>\n\n        <div text-justify class="">\n\n          <p class="fs12">\n\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.\n\n          </p>\n\n        </div>\n\n        <div text-start class="" style="padding-left: 5px;">\n\n          <p text-uppercase class="fs12 fw500">Attachments : filepreview.jpg</p>\n\n        </div>\n\n        <div class="posRelative mtop20">\n\n          <button ion-button class="answerButton butAnswerPos border-black">answer</button>\n\n        </div>\n\n    </div> -->\n\n    <!-- second div -->\n\n    <div class="timeDiv mtop10per" *ngFor="let item of PersonalDetails">\n\n        <div text-right>\n\n            <p class="fs12 fw500 black margin5px">{{item.date}}</p>\n\n            <p class="fs12 fw500 black margin2px">{{item.time}}</p>\n\n        </div>\n\n        <div text-start class="" style="padding-left: 5px;">\n\n          <p text-uppercase class="fs14 fw600">{{item.title}}</p>\n\n        </div>\n\n        <div text-justify class="">\n\n          <p class="fs12" style="padding-left: 5px;">\n\n           {{item.message}}\n\n          </p>\n\n        </div>\n\n        <div text-start class="" style="padding-left: 5px;">\n\n          <p text-uppercase class="fs12 fw500">Attachments : {{item.Filename}}</p>\n\n        </div>\n\n        <div class="posRelative mtop20">\n\n          <button *ngIf="item.priduct_link !=\'\'" ion-button class="answerButton butViewPos border-black" (click)="viewProduct(item.priduct_link)">View Product</button>\n\n          <button ion-button class="answerButton butAnswerPos border-black">answer</button>\n\n        </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/psr/psr.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], PSRPage);
    return PSRPage;
}());

//# sourceMappingURL=psr.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itemName_itemName__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productReturnNew_productReturnNew__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collection_collection__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { productReturnPage } from '../productReturn/productReturn';





var MyOrderPage = /** @class */ (function () {
    function MyOrderPage(navCtrl, navParams, userService, loadingCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.Orderlist = [];
    }
    MyOrderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__collection_collection__["a" /* collectionPage */]);
        }, 0);
        this.imgUrl = localStorage.getItem("BaseUrl");
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.LoadOrder();
    };
    // -----LodingOrders-----
    MyOrderPage.prototype.LoadOrder = function () {
        var _this = this;
        var data = {
            "user_id": this.userInfo.user_id,
            "country": this.userInfo.country
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.myOrder(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.Orderlist = res.data;
                console.log(_this.Orderlist);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    // -----LodingOrders-----
    // -----ViewOrders-----
    MyOrderPage.prototype.viewOrder = function (item) {
        if (item.file_id == "0") {
            localStorage.setItem("through", "main");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* categoryPage */]);
            localStorage.setItem("MainCatId", item.category_id);
        }
        else {
            localStorage.setItem("FileId", item.file_id);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__itemName_itemName__["a" /* itemNamePage */]);
        }
    };
    // -----ViewOrders-----
    MyOrderPage.prototype.productReturn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__productReturnNew_productReturnNew__["a" /* ProductReturnNewPage */]);
    };
    // viewOrder(){
    //   this.navCtrl.setRoot(itemNamePage);
    // }
    MyOrderPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__collection_collection__["a" /* collectionPage */]);
    };
    MyOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myOrder',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/myOrder/myOrder.html"*/'\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center>\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button style="background:transparent;" (click)="back()">\n\n              <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n          </button>\n\n      </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content class="bgWhite">\n\n  <div text-center class="mtop15 mbot20">\n\n      <p text-uppercase class="textColor fs14 font-bold">my orders</p>\n\n  </div>\n\n\n\n  <div class="mtop15" *ngFor="let item of Orderlist">\n\n    <ion-row >\n\n      <ion-col col-6>\n\n        <div>\n\n          <img src="{{imgUrl}}{{item.image}}" alt="logo" class="borderReds" style="height: 180px;"/>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div>\n\n          <h6 class="Text mtop1 mb0 fs14">Order Date :</h6>\n\n          <p class="mtop1 fs14">{{item.order_date}}</p>\n\n        </div>\n\n        <div>\n\n          <h6 class="Text mtop1 mb0 fs14">Status :</h6>\n\n          <p class="mtop1 fs14">"Shipping : 24 Apr 2019 "</p>\n\n        </div>\n\n        <div>\n\n          <h6 class="Text mtop1 mb0 fs14">Product :</h6>\n\n          <p class="mtop1 fs14">{{item.name}}</p>\n\n        </div>\n\n        <div>\n\n          <h6 class="Text mtop1 mb0 fs14">Price :</h6>\n\n          <p class="mtop1 fs14">23.50</p>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 text-center>\n\n        <div class="buttonDiv">\n\n          <button class="themColor DiscoverButton" (click)="viewOrder(item)">View Product</button>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6 text-center>\n\n        <div class="buttonDiv">\n\n          <button class="themColor DiscoverButton" (click)="productReturn()">Product Return</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/myOrder/myOrder.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], MyOrderPage);
    return MyOrderPage;
}());

//# sourceMappingURL=myOrder.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__supportRequestNew_supportRequestNew__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupportNewPage = /** @class */ (function () {
    function SupportNewPage(navCtrl, navParams, loadingCtrl, userService, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.platform = platform;
        this.userInfo = [];
        this.SupportDetails = [];
    }
    SupportNewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 0);
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.LoadSupport();
    };
    SupportNewPage.prototype.LoadSupport = function () {
        var _this = this;
        var data = {
            "user_id": this.userInfo.user_id,
            "language_id": this.userInfo.language_id,
            "country": this.userInfo.country
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.SupportService(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.SupportDetails = res.data;
                _this.discription = res.request_detail[0].discription;
                console.log(_this.discription);
                for (var i = 0; i < _this.SupportDetails.length; i++) {
                    var splitname = _this.SupportDetails[i].attechment.split("/");
                    _this.SupportDetails[i].Filename = splitname[splitname.length - 1];
                }
                console.log(_this.SupportDetails);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    SupportNewPage.prototype.makeReq = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__supportRequestNew_supportRequestNew__["a" /* SupportRequestNewPage */]);
    };
    SupportNewPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SupportNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-supportNew',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/supportNew/supportNew.html"*/'<!-- <ion-header no-border>\n\n  <ion-navbar transparent class="themColor white">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" class="white"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n      <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button style="background:transparent;" (click)="back()">\n\n              <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n          </button>\n\n      </ion-buttons> \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div >\n\n    <div text-center>\n\n      <img src="/assets/icon/chate.png" alt="logo Support" style="width: 25%;"/>\n\n        <p [innerHTML]="discription"></p>\n\n    </div>\n\n    \n\n    <div text-center style="margin: 10px 0px 20px 0px;" >\n\n        <p class="newRequest border-black" (click)="makeReq()" tappable>\n\n            <ion-icon name="text" class="white" style="margin-right: 5px;"></ion-icon>\n\n          make a new request\n\n        </p>\n\n      </div>\n\n    <div class="timeDiv mtop10per" *ngFor="let item of SupportDetails">\n\n        <div text-right>\n\n            <p class="fs12 fw500 black margin5px">{{item.date}}</p>\n\n            <p class="fs12 fw500 black margin2px">{{item.time}}</p>\n\n        </div>\n\n        <div text-start style="padding-left: 5px;">\n\n          <p text-uppercase class="fs14 fw500">{{item.title}}</p>\n\n        </div>\n\n        <div text-justify class="">\n\n          <p class="fs12 fw500" style="padding-left: 5px;">\n\n           {{item.message}}\n\n          </p>\n\n        </div>\n\n        <div text-start style="padding-left: 5px;">\n\n          <p text-uppercase class="fs12 fw500">Attachments : {{item.Filename}}</p>\n\n        </div>\n\n        <div class="posRelative mtop20">\n\n          <!-- //<button *ngIf="item.priduct_link !=\'\'" ion-button class="answerButton butViewPos border-black">View Product</button> -->\n\n          <button ion-button class="answerButton butAnswerPos border-black">view</button>\n\n        </div>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/supportNew/supportNew.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], SupportNewPage);
    return SupportNewPage;
}());

//# sourceMappingURL=supportNew.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, userService, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.ProductList = [];
        this.multiArray = [];
        this.DemoArray = [];
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.imgUrl = localStorage.getItem("BaseUrl");
        this.loadProduct();
        this.pair = 0;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var alert = _this.alertCtrl.create({
                title: 'Exit App!',
                message: 'Do you really want to exit from the app?',
                buttons: [{
                        text: 'Exit',
                        handler: function () {
                            _this.platform.exitApp();
                        }
                    }, {
                        text: 'Cancel',
                        handler: function () {
                        }
                    }]
            });
            alert.present();
        }, 0);
    };
    // -----LoadProduct-----
    HomePage.prototype.loadProduct = function () {
        var _this = this;
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.dashboard(data).subscribe(function (res) {
            loading.dismiss();
            console.log(res);
            _this.ProductList = res.data;
            _this.pair = res.pair;
            if (_this.pair == 2) {
                var indexInNew = 0;
                for (var i = 0; i < _this.ProductList.length; i++) {
                    for (var k = 0; k < 2; k++) {
                        _this.DemoArray[k] = _this.ProductList[k];
                    }
                    i++;
                    _this.multiArray[indexInNew] = _this.DemoArray;
                    indexInNew++;
                    _this.DemoArray = [];
                }
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    // -----LoadProduct-----
    HomePage.prototype.detail = function () {
        // localStorage.setItem("MainCatId",id);
        // this.navCtrl.setRoot(categoryPage);
    };
    HomePage.prototype.cart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* cartPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/home/home.html"*/'\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button style="background:transparent;" (click)="cart()">\n\n              <img src="/assets/icon/app_icon/cart.png" alt="logo" style="width:30px;"/>\n\n          </button>\n\n      </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- //----if pair = 6-------- -->\n\n  <div *ngIf="this.pair == 6">\n\n    <div text-center class="divCard" *ngFor="let item of ProductList">\n\n      <ion-card class="card_height" >\n\n          <video *ngIf="item.file_type ==\'Video\'" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer cover_image">\n\n            <source src="{{imgUrl}}{{item.banner_img}}" type="video/mp4"/>\n\n          </video>\n\n        <img *ngIf="item.file_type ==\'Image\'" src="{{imgUrl}}{{item.banner_img}}" class="cover_image" />\n\n        <div class="opctyDiv">\n\n          <h2 class="opctyText">{{item.text}}</h2>\n\n        </div>\n\n        <div class="buttonDiv">\n\n            <button (click)="detail()" class="themColor DiscoverButton">{{item.button_text}}</button>\n\n        </div>\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n  <!-- //----if pair = 6-------- -->\n\n\n\n  <!-- //----if pair = 2-------- -->\n\n  <div *ngIf="this.pair == 2">\n\n    <div *ngFor="let array of multiArray" >\n\n      <div class="mtop15">\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <div>\n\n                <video  *ngIf="array[0].file_type ==\'Video\'" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer borderReds" style="height: 160px;">\n\n                  <source src="{{imgUrl}}{{array[0].banner_img}}" type="video/mp4"/>\n\n                </video>\n\n                <img *ngIf="array[0].file_type == \'Image\'" src="{{imgUrl}}{{array[0].banner_img}}" alt="logo" class="borderReds" style="height: 160px;"/>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <div text-center>\n\n                <h4 class="Text">{{array[0].text}}</h4>\n\n                <span>"{{array[0].description}}"</span>\n\n              </div>\n\n            </ion-col>\n\n            <div class="buttonDiv1">\n\n              <button class="themColor DiscoverButton1">{{array[0].button_text}}</button>\n\n            </div>\n\n          </ion-row>\n\n      </div>\n\n      <div class="mtop15">\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <div text-center>\n\n              <h4 class="Text">{{array[1].text}}</h4>\n\n              <span>"{{array[1].description}}"</span>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <div>\n\n              <video  *ngIf="array[0].file_type ==\'Video\'" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer borderReds" style="height: 160px;">\n\n                <source src="{{imgUrl}}{{array[1].banner_img}}" type="video/mp4"/>\n\n              </video>\n\n              <img *ngIf="array[0].file_type == \'Image\'" src="{{imgUrl}}{{array[1].banner_img}}" alt="logo" class="borderReds" style="height: 160px;"/>\n\n            </div>\n\n          </ion-col>\n\n          <div class="buttonDiv1">\n\n            <button class="themColor DiscoverButton1">{{array[1].button_text}}</button>\n\n          </div>\n\n        </ion-row>\n\n    </div>\n\n      <!-- <div>\n\n        <div text-center>\n\n          <h4 class="Text">{{array[1].text}}</h4>\n\n        </div>\n\n        <div class="fullImgDiv">\n\n          <video *ngIf="array[1].file_type == \'Video\'" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer borderReds HW100">\n\n            <source src="https://admin.3dhom.com/{{array[1].banner_img}}" type="video/mp4"/>\n\n          </video>\n\n          <img alt="logo" *ngIf="array[1].file_type == \'Image\'" src="https://admin.3dhom.com/{{array[1].banner_img}}" alt="logo" class="borderReds HW100"/>\n\n        </div>\n\n        <div text-center style="padding: 4px 25px 4px 25px;" class="mtop5">\n\n          <span>"{{array[1].description}}"</span>\n\n        </div>\n\n        <div class="buttonDiv1">\n\n          <button class="themColor DiscoverButton1">{{array[1].button_text}}</button>\n\n        </div>\n\n      </div> -->\n\n    </div>\n\n  </div>\n\n  \n\n  <!-- //----if pair = 2-------- -->\n\n\n\n  <!-- //----if pair = 4-------- -->\n\n  <div *ngIf="this.pair == 4">\n\n    <div  class="mtop15" *ngFor="let item of ProductList">\n\n      <div text-center>\n\n        <h4 class="Text">{{item.text}}</h4>\n\n      </div>\n\n      <div class="fullImgDiv1" style="position: relative;">\n\n          <video  *ngIf="item.file_type ==\'Video\'" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer borderReds1 HW1001">\n\n              <source src="{{imgUrl}}{{item.banner_img}}" type="video/mp4"/>\n\n            </video>\n\n          <img *ngIf="item.file_type ==\'Image\'" src="{{imgUrl}}{{item.banner_img}}" class="borderReds1 HW100" />\n\n          <div class="buttonDiv2">\n\n            <button class="themColor DiscoverButton2">{{item.button_text}}</button>\n\n          </div>\n\n      </div>\n\n      \n\n      <div text-center style="padding: 15px 25px 15px 25px;" class="mtop5">\n\n        <span>"{{item.description}}"</span>\n\n      </div>\n\n    </div>\n\n  </div>\n\n    \n\n  <!-- //----if pair = 4-------- -->\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ReflectiveInjector } from '@angular/core';

var HttpHelper = /** @class */ (function () {
    /**
     * Constructor
     * @param _http: inject http object
     */
    function HttpHelper(_http) {
        this._http = _http;
    }
    /**
     * Executes the post request with given uri parameters and header values.
     * @param url: The reqeust URI.
     * @param data: The reqeust object.
     * @param args: The request argument.
     */
    HttpHelper.prototype.post = function (url, data, requestOptions, enableAPILog, actionName) {
        // Add default header
        requestOptions.headers.append('Content-Type', 'application/json');
        requestOptions.headers.append('Accept', 'application/json');
        // Add reqeust method
        requestOptions.method = __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Post;
        return this._http.post(url, JSON.stringify(data), requestOptions)
            .map(function (res) {
            return res.json();
        });
    };
    HttpHelper.prototype.postFrom = function (url, data, requestOptions, enableAPILog, actionName) {
        // Add default header
        // requestOptions.headers.append('Content-Type', 'application/json');
        // requestOptions.headers.append('Accept', 'application/json');
        // Add reqeust method
        requestOptions.method = __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Post;
        return this._http.post(url, data, requestOptions)
            .map(function (res) {
            return res.json();
        });
    };
    HttpHelper.prototype.put = function (url, data, requestOptions, enableAPILog, actionName) {
        // Add default header
        requestOptions.headers.append('Content-Type', 'application/json');
        requestOptions.headers.append('Accept', 'application/json');
        // Add reqeust method
        requestOptions.method = __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Put;
        // Call server API
        return this._http.put(url, JSON.stringify(data), requestOptions)
            .map(function (res) {
            return res.json();
        });
    };
    HttpHelper.prototype.get = function (url, requestOptions, enableAPILog, actionName) {
        // Add default header
        requestOptions.headers.append('Content-Type', 'application/json');
        requestOptions.headers.append('Accept', 'application/json');
        // Add reqeust method
        requestOptions.method = __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get;
        return this._http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    HttpHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        /**
         * This class provides the helper method to execute Web API request.
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], HttpHelper);
    return HttpHelper;
}());

//# sourceMappingURL=http.helper.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrintModalPage = /** @class */ (function () {
    function PrintModalPage(navCtrl, statusBar, viewCtrl, loadingCtrl, userService, toastCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.case = "First";
        this.data = navParams.get('data');
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    }
    ;
    PrintModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss();
        }, 0);
    };
    PrintModalPage.prototype.checkPersent = function () {
        var _this = this;
        if (this.Percent == 100) {
            console.log("done");
            clearInterval(this.Interval);
        }
        else {
            var data = {
                "file_id": this.data.file_id,
            };
            this.userService.checkStatusForPrint(data).subscribe(function (res) {
                if (res.status == "true" || res.status == true) {
                    console.log(res);
                    _this.presentToast(res.message);
                }
                else {
                    _this.presentToast(res.message);
                }
            }, function (err) {
                console.log(err);
                _this.presentToast("API Is Not Working");
            });
        }
    };
    PrintModalPage.prototype.OnPrint = function () {
        var _this = this;
        var data = {
            "file_id": this.data.file_id,
            "material": this.data.materialId,
            //"country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.ForPrint(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.case = "Second";
                _this.Percent = 0;
                _this.Interval = setInterval(function () {
                    _this.Percent = _this.Percent + 10;
                    _this.checkPersent();
                }, 4000);
                _this.presentToast(res.message);
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
            _this.presentToast("API Is Not Working");
        });
    };
    PrintModalPage.prototype.saveData = function () {
        this.viewCtrl.dismiss();
    };
    /// Toast function ////
    PrintModalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    PrintModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-printModal',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/printModal/printModal.html"*/'<ion-content>\n\n    <div padding text-center *ngIf="case == \'First\'">\n\n        <img src="/assets/icon/print.png" alt="printing" class="w25" />\n\n        <div class="parentDiv">\n\n            <div  class="childDiv">\n\n                <div>\n\n                    <div text-uppercase text-center margin-top margin-bottom class="fs18 fw500 textTheme">\n\n                        printing\n\n                    </div>\n\n                    <div text-center>\n\n                        <p class="fs16 fw500 mtop5">\n\n                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.""\n\n                        </p>\n\n                    </div>\n\n                    <div text-center class="mtop5">\n\n                        <button ion-button class="answerButton border-black w65" (click)="OnPrint()">print</button>\n\n                        <button ion-button icon-start margin-top class="answerButton border-black w40"  (click)="saveData()">\n\n                            <ion-icon name="arrow-round-back" class="white"></ion-icon>\n\n                            go back\n\n                        </button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>    \n\n    </div>\n\n    <!-- 2nd case -->\n\n    <div padding text-center *ngIf="case == \'Second\'">\n\n        <img src="/assets/icon/print.png" alt="printing" class="w25" />\n\n        <div class="parentDiv">\n\n            <div  class="childDiv">\n\n                <div>\n\n                    <div text-uppercase text-center margin-top margin-bottom class="fs18 fw500 textTheme">\n\n                        printing\n\n                        <p text-uppercase class="fs16 fw500 mtop5">\n\n                                {{this.Percent}}%\n\n                        </p>\n\n                    </div>\n\n                    <div text-center>\n\n                        <p text-uppercase class="fs16 fw500 mtop5">\n\n                            remaining 00:00\n\n                        </p>\n\n                    </div>\n\n                    <div text-center class="mtop5">\n\n                        <button ion-button icon-start margin-top class="answerButton border-black w65"  (click)="saveData()">\n\n                            <ion-icon name="pause" class="white"></ion-icon>\n\n                            pause\n\n                        </button>\n\n                        <button ion-button icon-start margin-top class="answerButton border-black w65"  (click)="saveData()">\n\n                            <ion-icon name="pause" class="white"></ion-icon>\n\n                            stop\n\n                        </button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>    \n\n    </div>\n\n    <!-- 3rd case -->\n\n    <div padding text-center *ngIf="case == \'thired\'">\n\n        <img src="/assets/icon/print.png" alt="printing" class="w25" />\n\n        <div class="parentDiv">\n\n            <div  class="childDiv">\n\n                <div>\n\n                    <div text-uppercase text-center margin-top margin-bottom class="fs18 fw500 textTheme">\n\n                        printing\n\n                    </div>\n\n                    <div text-center>\n\n                        <p class="fs16 fw500 mtop5">\n\n                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.""\n\n                        </p>\n\n                    </div>\n\n                    <div text-center class="mtop5">\n\n                        <button ion-button margin-top class="answerButton border-black w65"  (click)="saveData()">\n\n                            ok\n\n                        </button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>    \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/printModal/printModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], PrintModalPage);
    return PrintModalPage;
}());

//# sourceMappingURL=printModal.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgetPwdPage = /** @class */ (function () {
    function ForgetPwdPage(navCtrl, statusBar, loadingCtrl, toastCtrl, userService, platform) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.userService = userService;
        this.platform = platform;
        this.user = [];
        // email details
        this.user = {
            'email': ""
        };
    }
    ForgetPwdPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }, 0);
    };
    ForgetPwdPage.prototype.back = function () {
        console.log("working");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ForgetPwdPage.prototype.sendRequest = function () {
        // if(this.user.email=="")
        // {
        //   this.presentToast('Please Enter Registered Email!');
        //     return false;
        // }
        // else{
        //     let data={
        //       "email": this.user.email
        //     }
        //     console.log(data);
        //     let loading = this.loadingCtrl.create({
        //         content: 'Checking Credentials...'
        //     });
        //     loading.present();
        //     this.userService.Forget(data).subscribe(res=>{
        //       loading.dismiss();
        //       console.log(res);
        //       if(res.status=="true" || res.status== true){
        //         localStorage.setItem("LoggedinFrom","mobile");
        //         this.presentToast(res.success);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        //     }else{
        //       this.presentToast(res.error);
        //       console.log(res.error);
        //       this.user.email = "";
        //     }
        //   },err=>{
        //     loading.dismiss();
        //     console.log(err);
        //   })
        // }
    };
    /// Toast function ////
    ForgetPwdPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    ForgetPwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgetPwd',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/forgetPwd/forgetPwd.html"*/'<ion-header no-border>\n\n    <ion-navbar transparent class="themColor white">\n\n      <ion-title>\n\n        <div text-center class="white">\n\n          <!-- <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/> -->\n\n          Forgot Password\n\n        </div>\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding class="themColor">\n\n      <div class="margin_top_10">\n\n        <div text-center>\n\n          <img src="/assets/icon/logo_alex.png" alt="3d printerlogo image" class="logo"/>\n\n        </div>\n\n        <div style="padding:50px;">\n\n    \n\n          <ion-list class="text_center" >\n\n            <div class="inputDiv">\n\n                <ion-item class="backgroundTransparent borderRedi ionitemDesign" style="height: 100%;">\n\n                  <ion-input type="email" class="mleft10 mtop5" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n\n                </ion-item>\n\n                <ion-icon name="person" class="icon_img"></ion-icon>\n\n                <!-- <img src=\'assets/imgs/UserICon.png\' class="icon_img"> -->\n\n            </div>\n\n          </ion-list>\n\n          <div class="mtop5">\n\n            <div>\n\n              <button ion-button full text-capitalize class="login_button borderRedi" (click)="sendRequest()">Submit</button>\n\n            </div>\n\n            <div text-center>\n\n              <p class="fs16 fw500 darkgray">Back to? <span class="fs16 white font-bold">Signin</span></p>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        \n\n      </div>\n\n    </ion-content>\n\n<!-- <ion-content padding>\n\n  <div class="margin_top_10">\n\n    <div text-center>\n\n      <img src="/assets/imgs/logo.png" alt="3d printerlogo image" class="logo"/>\n\n      <p class="textColor fs16 fw500">Welcome Logo</p>\n\n    </div>\n\n    <div style="padding: 15px;">\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label stacked class="fw500 fs16 black">Email</ion-label>\n\n          <ion-input type="email" placeholder="test@gmail.com" [(ngModel)]="user.email" class="border_bottom"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div style="padding: 10px;">\n\n      <div>\n\n        <button ion-button full text-capitalize class="themColor login_button" (click)="sendRequest()">send request</button>\n\n      </div>\n\n      <div text-center (click)="back()">\n\n        <p class="fs16 fw500 darkgray">Back to? <span class="fs16 textColor font-bold">Signin</span></p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content> -->'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/forgetPwd/forgetPwd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], ForgetPwdPage);
    return ForgetPwdPage;
}());

//# sourceMappingURL=forgetPwd.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PSRGeneratePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__psr_psr__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer_ngx__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

var PSRGeneratePage = /** @class */ (function () {
    function PSRGeneratePage(navCtrl, navParams, userService, toastCtrl, fileTransfer, camera, loadingCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.fileTransfer = fileTransfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.SendReq = {
            "title": "",
            "message": "",
            "user_id": this.userInfo.user_id,
            "file": "",
        };
    }
    PSRGeneratePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__psr_psr__["a" /* PSRPage */]);
        }, 0);
    };
    // -----SelectFile-----
    PSRGeneratePage.prototype.SelectFile = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: this.camera.MediaType.ALLMEDIA
            // mediaType:this.camera.MediaType.VIDEO
        }).then(function (imageData) {
            _this.imageURI = "file://" + imageData; //Get File Path
            _this.SendReq.file = imageData;
            _this.presentToast("File Selected");
        });
        loading.dismiss();
    };
    // -----SelectFile-----
    PSRGeneratePage.prototype.remove = function () {
        this.SendReq.file = "";
    };
    // -----AddPersonalReq-----
    PSRGeneratePage.prototype.AddPersonal = function () {
        var _this = this;
        if (this.SendReq.title == "") {
            this.presentToast("Please Insert Title");
            return false;
        }
        if (this.SendReq.message == "") {
            this.presentToast("Please Insert Message");
            return false;
        }
        if (this.SendReq.file == "") {
            this.presentToast("Please Select File");
            return false;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.AddPersonalService(this.SendReq).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.presentToast(res.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__psr_psr__["a" /* PSRPage */]);
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    // -----AddPersonalReq-----
    PSRGeneratePage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__psr_psr__["a" /* PSRPage */]);
    };
    /// Toast function ////
    PSRGeneratePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    PSRGeneratePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-psrGenerate',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/psrGenerate/psrGenerate.html"*/'\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button style="background:transparent;" (click)="back()">\n\n            <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n        </button>\n\n      </ion-buttons> \n\n  </ion-toolbar>  \n\n</ion-header>\n\n<ion-content padding class="">\n\n  <div text-center text-uppercase class="fs18 fw500">\n\n    personalised services requests\n\n  </div>\n\n  <div style="margin-top: 25px;">\n\n    <!-- <div text-start>\n\n      <p text-uppercase class="fs14 fw500">Request Id : 1223456789d</p>\n\n    </div> -->\n\n    <div style="display: flex;">\n\n      <p text-uppercase class="fs14 fw500 w20">title :</p>\n\n      <ion-input type="text" [(ngModel)]="SendReq.title" placeholder="Type to write" class="inputCss w80"></ion-input>\n\n    </div>\n\n    <div>\n\n      <p text-uppercase class="fs14 fw500">Message :</p>\n\n      <div>\n\n        <textarea placeholder="Type to write" clear-text class="txtArea" [(ngModel)]="SendReq.message">\n\n        </textarea>\n\n      </div>\n\n    </div>\n\n    <div margin-top>\n\n      <ion-row>\n\n        <ion-col col-6 text-start>\n\n            <p text-uppercase class="fs14 fw500">Attachments</p>\n\n        </ion-col>\n\n        <ion-col col-6 text-end>\n\n            <!-- <button ion-button class="answerButton border-black">\n\n                <ion-icon ios="ios-attach" md="md-attach"></ion-icon>\n\n              select file\n\n            </button> -->\n\n            <button ion-button icon-start class="answerButton border-black" (click)="SelectFile()">\n\n              <!-- <ion-icon name="home"></ion-icon> -->\n\n              <ion-icon ios="ios-attach" md="md-attach"></ion-icon>\n\n              select file\n\n            </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- -----IfFileSelected----- -->\n\n      <ion-row *ngIf="SendReq.file != \'\'">\n\n          <ion-col col-10 text-start>\n\n              <p text-uppercase class="fs10 fw500">{{this.SendReq.file}}</p>\n\n          </ion-col>\n\n          <ion-col col-2 text-start (click)="remove()">\n\n              <ion-icon ios="ios-close" md="md-close"></ion-icon>\n\n          </ion-col>\n\n      </ion-row>\n\n      <!-- -----IfFileSelected----- -->\n\n\n\n    </div>\n\n    <div margin-top text-center>\n\n        <button ion-button class="sendMsg border-black" (click)="AddPersonal()">send message</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/psrGenerate/psrGenerate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], PSRGeneratePage);
    return PSRGeneratePage;
}());

//# sourceMappingURL=psrGenerate.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductReturnNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myOrder_myOrder__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductReturnNewPage = /** @class */ (function () {
    function ProductReturnNewPage(navCtrl, navParams, platform, loadingCtrl, userService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.message = "";
    }
    ProductReturnNewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__myOrder_myOrder__["a" /* MyOrderPage */]);
        }, 0);
        this.onLoad();
    };
    ProductReturnNewPage.prototype.onLoad = function () {
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        var data = {
            "user_id": this.userInfo.user_id,
            "country": this.userInfo.country,
            "language_id": this.userInfo.language_id,
            "item_id": this.userInfo.user_id
        };
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.ProductReturnDetail(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    ProductReturnNewPage.prototype.subCat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__myOrder_myOrder__["a" /* MyOrderPage */]);
    };
    ProductReturnNewPage.prototype.send = function () {
        var _this = this;
        if (this.message == "") {
            this.presentToast("Please Write Message");
            return false;
        }
        var data = {
            "user_id": this.userInfo.user_id,
            "message": this.message,
            "ship_id": "",
            "id": ""
        };
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.ProductReturnSend(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__myOrder_myOrder__["a" /* MyOrderPage */]);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    ProductReturnNewPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__myOrder_myOrder__["a" /* MyOrderPage */]);
    };
    /// Toast function ////
    ProductReturnNewPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    ProductReturnNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ProductReturnNew',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/productReturnNew/ProductReturnNew.html"*/'<!-- <ion-header no-border>\n\n  <ion-navbar transparent class="themColor white">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" class="white"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div text-center>\n\n        <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n      </div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center>\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button class="headerButton" (click)="back()">\n\n          <ion-icon name="share-alt" class="white"></ion-icon>\n\n        </button>\n\n      </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <div text-center>\n\n      <p text-uppercase class="fs20 fw500" style="margin-top: 0;">\n\n        product return\n\n      </p>\n\n    </div>\n\n    <div style="border:1px solid #000; border-radius:10px;position: relative;">\n\n      <div padding class="mtop15" (click)="productReturn()">\n\n        <ion-row>\n\n          <ion-col col-6 text-center>\n\n            <p text-uppercase class="fs16 fw500 catLabel">category</p>\n\n            <div>\n\n              <img src="/assets/imgs/hercul.jpg" alt="logo" class="borderReds"/>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <div>\n\n              <h6 text-uppercase class="Text mtop1 mb0 fs14">Order Date :</h6>\n\n              <p class="mtop1 fs12 fw500">20 Apr 2019</p>\n\n            </div>\n\n            <div>\n\n              <h6 text-uppercase class="Text mtop1 mb0 fs14">Status :</h6>\n\n              <p class="mtop1 fs12 fw500">Shipping : 24 Apr 2019</p>\n\n            </div>\n\n            <div>\n\n              <h6 text-uppercase class="Text mtop1 mb0 fs14">Product :</h6>\n\n              <p class="mtop1 fs12 fw500">Filment Red</p>\n\n            </div>\n\n            <div>\n\n              <h6 text-uppercase class="Text mtop1 mb0 fs14">Price :</h6>\n\n              <p class="mtop1 fs12 fw500">23.50</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12 class="returnLbl">\n\n            <div text-center>\n\n              <p text-uppercase class="fs20 fw500 paraLbl">\n\n                return motivation\n\n              </p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <div padding margin-bottom>\n\n        <textarea [(ngModel)]="message" class="txtArea">\n\n\n\n        </textarea>\n\n      </div>\n\n      <div class="buttonDiv buttonPos" >\n\n        <button class="themColor sendButton" (click)="send()">send</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/productReturnNew/ProductReturnNew.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ProductReturnNewPage);
    return ProductReturnNewPage;
}());

//# sourceMappingURL=productReturnNew.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlicingSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection_collection__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SlicingSettingPage = /** @class */ (function () {
    function SlicingSettingPage(navCtrl, loadingCtrl, userService, NavParams, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.NavParams = NavParams;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.materialListArray = [];
        this.mainData = [];
        this.print = [];
        this.slicing = [];
        this.enable_slicing_outlineArray = [];
        this.generate_supportArray = [];
    }
    SlicingSettingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__collection_collection__["a" /* collectionPage */]);
        }, 0);
        this.id = this.NavParams.get("FileId");
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.loadFile(this.id);
    };
    SlicingSettingPage.prototype.loadFile = function (id) {
        var _this = this;
        this.enable_slicing_outlineArray = {
            "yes": false,
            "no": false
        };
        this.generate_supportArray = {
            "yes": false,
            "no": false
        };
        var data = {
            "file_id": id,
            "user_id": this.userInfo.user_id,
            "country": this.userInfo.country,
            "language_id": this.userInfo.language_id,
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.EditFileInMyCollection(data).subscribe(function (res) {
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.mainData = res.data[0];
                _this.print = res.print[0];
                _this.slicing = res.slicing[0];
                _this.enable_slicing_outlineArrayValueSet(_this.slicing.enable_slicing_outline);
                _this.generate_supportArrayValueSet(_this.slicing.generate_support);
                _this.MatrialLoad();
                loading.dismiss();
            }
            else {
            }
        }, function (err) {
            console.log(err);
        });
    };
    SlicingSettingPage.prototype.enable_slicing_outlineArrayValueSet = function (value) {
        if (value == '1') {
            this.enable_slicing_outlineArray = {
                "yes": true,
                "no": false
            };
            this.slicing.enable_slicing_outline = 1;
        }
        else {
            this.enable_slicing_outlineArray = {
                "yes": false,
                "no": true
            };
            this.slicing.enable_slicing_outline = 0;
        }
    };
    SlicingSettingPage.prototype.generate_supportArrayValueSet = function (value) {
        if (value == '1') {
            this.generate_supportArray = {
                "yes": true,
                "no": false
            };
            this.slicing.generate_support = "Yes";
        }
        else {
            this.generate_supportArray = {
                "yes": false,
                "no": true
            };
            this.slicing.generate_support = "No";
        }
    };
    SlicingSettingPage.prototype.MatrialLoad = function () {
        var _this = this;
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            content: 'Checking File...'
        });
        this.userService.materialList(data).subscribe(function (res) {
            _this.materialListArray = [];
            if (res.status == "true" || res.status == true) {
                _this.materialListArray = res.data;
                _this.materialValue = _this.materialListArray[0].id;
                console.log(_this.materialListArray);
                console.log(_this.materialValue);
            }
            else {
            }
        }, function (err) {
            console.log(err);
        });
    };
    // ======PrintIncreeFuction======
    SlicingSettingPage.prototype.PrintIncress = function (value) {
        // ----layer_thickness---
        if (value == "layer_thickness") {
            this.print.layer_thickness++;
        }
        // ----exposure_time---
        if (value == "exposure_time") {
            this.print.exposure_time++;
        }
        // ----off_time---
        if (value == "off_time") {
            this.print.off_time++;
        }
        // ----bottom_exposure_time---
        if (value == "bottom_exposure_time") {
            this.print.bottom_exposure_time++;
        }
        // ----bottom_layers---
        if (value == "bottom_layers") {
            this.print.bottom_layers++;
        }
        // ----post_cure_time---
        if (value == "post_cure_time") {
            this.print.post_cure_time++;
        }
        // ----lift_and_sequence_time---
        if (value == "lift_and_sequence_time") {
            this.print.lift_and_sequence_time++;
        }
        // ----z_lift_distance-----
        if (value == "z_lift_distance") {
            this.print.z_lift_distance++;
        }
        // --------z_lift_speed-----
        if (value == "z_lift_speed") {
            this.print.z_lift_speed++;
        }
        // ------z_bottom_speed-------
        if (value == "z_bottom_speed") {
            this.print.z_bottom_speed++;
        }
        // -------z_bottom_retract_speed------
        if (value == "z_bottom_retract_speed") {
            this.print.z_bottom_retract_speed++;
        }
        // ------slide_tilt-------------
        if (value == "slide_tilt") {
            this.print.slide_tilt++;
        }
        // ---------reflect_x-------
        if (value == "reflect_x") {
            this.print.reflect_x++;
        }
        // ------reflect_y----------
        if (value == "reflect_y") {
            this.print.reflect_y++;
        }
    };
    // ======PrintIncreeFuction=======
    // ======PrintDecressFuction======
    SlicingSettingPage.prototype.PrintDecress = function (value) {
        var msg = value + " Value Should not be less then Zero";
        // -----layer_thickness------
        if (value == "layer_thickness") {
            if (this.print.layer_thickness != "" && this.print.layer_thickness != 0) {
                this.print.layer_thickness--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----exposure_time------
        if (value == "exposure_time") {
            if (this.print.exposure_time != "" && this.print.exposure_time != 0) {
                this.print.exposure_time--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----off_time------
        if (value == "off_time") {
            if (this.print.off_time != "" && this.print.off_time != 0) {
                this.print.off_time--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----bottom_exposure_time------
        if (value == "bottom_exposure_time") {
            if (this.print.bottom_exposure_time != "" && this.print.bottom_exposure_time != 0) {
                this.print.bottom_exposure_time--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----bottom_layers------
        if (value == "bottom_layers") {
            if (this.print.bottom_layers != "" && this.print.bottom_layers != 0) {
                this.print.bottom_layers--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----post_cure_time------
        if (value == "post_cure_time") {
            if (this.print.post_cure_time != "" && this.print.post_cure_time != 0) {
                this.print.post_cure_time--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // ----lift_and_sequence_time---
        if (value == "lift_and_sequence_time") {
            if (this.print.lift_and_sequence_time != "" && this.print.lift_and_sequence_time != 0) {
                this.print.lift_and_sequence_time--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----z_lift_distance---------
        if (value == "z_lift_distance") {
            if (this.print.z_lift_distance != "" && this.print.z_lift_distance != 0) {
                this.print.z_lift_distance--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // --------z_lift_speed--------
        if (value == "z_lift_speed") {
            if (this.print.z_lift_speed != "" && this.print.z_lift_speed != 0) {
                this.print.z_lift_speed--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -------z_bottom_speed-----
        if (value == "z_bottom_speed") {
            if (this.print.z_bottom_speed != "" && this.print.z_bottom_speed != 0) {
                this.print.z_bottom_speed--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----z_bottom_retract_speed----
        if (value == "z_bottom_retract_speed") {
            if (this.print.z_bottom_retract_speed != "" && this.print.z_bottom_retract_speed != 0) {
                this.print.z_bottom_retract_speed--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----slide_tilt---------
        if (value == "slide_tilt") {
            if (this.print.slide_tilt != "" && this.print.slide_tilt != 0) {
                this.print.slide_tilt--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -------reflect_x---------
        if (value == "reflect_x") {
            if (this.print.reflect_x != "" && this.print.reflect_x != 0) {
                this.print.reflect_x--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----reflect_y---------
        if (value == "reflect_y") {
            if (this.print.reflect_y != "" && this.print.reflect_y != 0) {
                this.print.reflect_y--;
            }
            else {
                this.presentToast(msg);
            }
        }
    };
    // ======PrintDecressFuction======
    // ======slicingIncreeFuction======
    SlicingSettingPage.prototype.slicingIncree = function (value) {
        // ----layer_thickness---
        if (value == "infill_density") {
            this.slicing.infill_density++;
        }
        // --infill_line_distance------
        if (value == "infill_line_distance") {
            this.slicing.infill_line_distance++;
        }
        // ----infill_overlap_percentage----
        if (value == "infill_overlap_percentage") {
            this.slicing.infill_overlap_percentage++;
        }
        // ---infill_layer_thickness------
        if (value == "infill_layer_thickness") {
            this.slicing.infill_layer_thickness++;
        }
        // ------support_overhang_angle------
        if (value == "support_overhang_angle") {
            this.slicing.support_overhang_angle++;
        }
        // ------support_density----------
        if (value == "support_density") {
            this.slicing.support_density++;
        }
        // --------support_horizontal_expansion----
        if (value == "support_horizontal_expansion") {
            this.slicing.support_horizontal_expansion++;
        }
        // -------support_infill_layer_thickness----
        if (value == "support_infill_layer_thickness") {
            this.slicing.support_infill_layer_thickness++;
        }
        // ----gradual_support_infill_steps-----
        if (value == "gradual_support_infill_steps") {
            this.slicing.gradual_support_infill_steps++;
        }
    };
    // ======slicingIncreeFuction======
    // ======slicingDecreeFuction======
    SlicingSettingPage.prototype.slicingDecree = function (value) {
        var msg = value + " Value Should not be less then Zero";
        // -----infill_density------
        if (value == "infill_density") {
            if (this.slicing.infill_density != "" && this.slicing.infill_density != 0) {
                this.slicing.infill_density--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // ------infill_line_distance------
        if (value == "infill_line_distance") {
            if (this.slicing.infill_line_distance != "" && this.slicing.infill_line_distance != 0) {
                this.slicing.infill_line_distance--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // ------infill_overlap_percentage--
        if (value == "infill_overlap_percentage") {
            if (this.slicing.infill_overlap_percentage != "" && this.slicing.infill_overlap_percentage != 0) {
                this.slicing.infill_overlap_percentage--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----infill_layer_thickness----
        if (value == "infill_layer_thickness") {
            if (this.slicing.infill_layer_thickness != "" && this.slicing.infill_layer_thickness != 0) {
                this.slicing.infill_layer_thickness--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----support_overhang_angle----
        if (value == "support_overhang_angle") {
            if (this.slicing.support_overhang_angle != "" && this.slicing.support_overhang_angle != 0) {
                this.slicing.support_overhang_angle--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // ----support_density---------
        if (value == "support_density") {
            if (this.slicing.support_density != "" && this.slicing.support_density != 0) {
                this.slicing.support_density--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // --------support_horizontal_expansion---
        if (value == "support_horizontal_expansion") {
            if (this.slicing.support_horizontal_expansion != "" && this.slicing.support_horizontal_expansion != 0) {
                this.slicing.support_horizontal_expansion--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // ---------support_infill_layer_thickness----
        if (value == "support_infill_layer_thickness") {
            if (this.slicing.support_infill_layer_thickness != "" && this.slicing.support_infill_layer_thickness != 0) {
                this.slicing.support_infill_layer_thickness--;
            }
            else {
                this.presentToast(msg);
            }
        }
        // -----gradual_support_infill_steps--------
        if (value == "gradual_support_infill_steps") {
            if (this.slicing.gradual_support_infill_steps != "" && this.slicing.gradual_support_infill_steps != 0) {
                this.slicing.gradual_support_infill_steps--;
            }
            else {
                this.presentToast(msg);
            }
        }
    };
    // ======slicingDecreeFuction======
    SlicingSettingPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__collection_collection__["a" /* collectionPage */]);
    };
    SlicingSettingPage.prototype.save = function () {
        var _this = this;
        if (this.print.material_id == "0") {
            this.presentToast("Please Select Material Id");
            return false;
        }
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id,
            "language_id": this.userInfo.language_id,
            "file_id": this.id,
            "title": this.mainData.item_name,
            "discription": this.mainData.description,
            "material_id": this.print.material_id,
            "layer_thickness": this.print.layer_thickness,
            "exposure_time": this.print.exposure_time,
            "off_time": this.print.off_time,
            "bottom_exposure_time": this.print.bottom_exposure_time,
            "bottom_layers": this.print.bottom_layers,
            "post_cure_time": this.print.post_cure_time,
            "lift_and_sequence_time": this.print.lift_and_sequence_time,
            "z_lift_distance": this.print.z_lift_distance,
            "build_direction": this.print.build_direction,
            "z_lift_speed": this.print.z_lift_speed,
            "z_bottom_speed": this.print.z_bottom_speed,
            "z_bottom_retract_speed": this.print.z_bottom_retract_speed,
            "slide_tilt": this.print.slide_tilt,
            "reflect_x": this.print.reflect_x,
            "reflect_y": this.print.reflect_y,
            "enable_slicing_outline": this.slicing.enable_slicing_outline,
            "infill_density": this.slicing.infill_density,
            "infill_line_distance": this.slicing.infill_line_distance,
            "infill_overlap_percentage": this.slicing.infill_overlap_percentage,
            "infill_layer_thickness": this.slicing.infill_layer_thickness,
            "infill_pattern": this.slicing.infill_pattern,
            "generate_support": this.slicing.generate_support,
            "support_placement": this.slicing.support_placement,
            "support_overhang_angle": this.slicing.support_overhang_angle,
            "support_pattern": this.slicing.support_pattern,
            "support_density": this.slicing.support_density,
            "support_horizontal_expansion": this.slicing.support_horizontal_expansion,
            "support_infill_layer_thickness": this.slicing.support_infill_layer_thickness,
            "gradual_support_infill_steps": this.slicing.gradual_support_infill_steps
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.SubmitEditFileInMyCollection(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.presentToast(res.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__collection_collection__["a" /* collectionPage */]);
            }
            else {
            }
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    /// Toast function ////
    SlicingSettingPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    SlicingSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slicingSetting',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/slicingSetting/slicingSetting.html"*/'\n\n\n\n<ion-header no-border>\n\n    <ion-toolbar transparent class="themColor white">\n\n        <button ion-button menuToggle >\n\n          <ion-icon name="menu" class="white"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n            <div text-center style="margin-left: 38px;">\n\n                <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n            </div>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button style="background:transparent;" (click)="back()">\n\n                <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n            </button>\n\n        </ion-buttons> \n\n    </ion-toolbar>  \n\n  </ion-header>\n\n\n\n<ion-content padding10 class="">\n\n  <div padding>\n\n        <!-- -----------FileName-------- -->\n\n        <div text-center>\n\n            <p text-uppercase class="fs14 fw500">file name</p>\n\n            <ion-input text-capitalize type="text" value="{{mainData.stl_file}}" placeholder="fileName1.jpg" class="border-black type" readonly></ion-input>\n\n        </div>\n\n        <!-- -----------FileName-------- -->\n\n        <!-- -----------TitleAndDescription-------- -->\n\n        <div>\n\n            <ion-row >\n\n                <p text-uppercase class="fs14 fw500 paraMar">title</p>\n\n                <ion-col col-12 >\n\n                    <ion-input type="text" placeholder="insert title" class=" border-black" [(ngModel)]="mainData.item_name"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row >\n\n                <!-- <ion-col col-3> -->\n\n                    <p text-uppercase class="fs14 fw500 paraMar">description</p>\n\n                <!-- </ion-col> -->\n\n                <ion-col col-12>\n\n                    <textarea [(ngModel)]="mainData.description" class="txtArea border-black"></textarea>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n        <!-- -----------TitleAndDescription-------- -->\n\n        <!-- -----------MateriaSelect-------- -->\n\n        <div text-center style="padding: 0px 45px 0px 45px;">\n\n            <p class="upcase">Choose Material</p>\n\n            <ion-item style="border:1px solid;">\n\n              <ion-label class="upcase">PLA</ion-label>\n\n              <ion-select [(ngModel)]="print.material_id" class="plaSelection">\n\n                <ion-option *ngFor="let data of materialListArray" Selected value="{{data.id}}">{{data.name}}</ion-option> \n\n              </ion-select>\n\n            </ion-item>\n\n        </div>\n\n        <!-- -----------MateriaSelect-------- -->\n\n        <!-- -----------print settings-------- -->\n\n        <div text-center>\n\n            <p text-uppercase class="fs16 fw500 textTheme">print settings</p>\n\n        </div>\n\n        <div text-center>\n\n            <div>\n\n                <ion-grid>\n\n                    <!-- 1 -->\n\n                    <ion-row >\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">Layer thickness</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'layer_thickness\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input type="text" [(ngModel)]="print.layer_thickness"  class="input_css" style="margin:auto;" readonly></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(mm)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button (click)="PrintIncress(\'layer_thickness\')" ion-button icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 2 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">exposure time</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'exposure_time\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input type="text" [(ngModel)]="print.exposure_time" class="input_css" style="margin:auto;" readonly></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(ms)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'exposure_time\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 3 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">off time</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'off_time\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input type="text" [(ngModel)]="print.off_time" class="input_css" style="margin:auto;" readonly></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(ms)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'off_time\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 4 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">bottom exposure time</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'bottom_exposure_time\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input type="text" [(ngModel)]="print.bottom_exposure_time" class="input_css" style="margin:auto;" readonly></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(no)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'bottom_exposure_time\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 5 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">bottom layers</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'bottom_layers\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input type="text" [(ngModel)]="print.bottom_layers" class="input_css" style="margin:auto;" readonly></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(min)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'bottom_layers\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 6 -->\n\n                    <ion-row >\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">post cure time</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'post_cure_time\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input type="text" [(ngModel)]="print.post_cure_time" class="input_css" style="margin:auto;" readonly></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(ms)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'post_cure_time\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 7 -->\n\n                    <ion-row >\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">lift and sequence time</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'lift_and_sequence_time\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input type="text" [(ngModel)]="print.lift_and_sequence_time" class="input_css" style="margin:auto;" readonly></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(no)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'lift_and_sequence_time\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- button -->\n\n                    <ion-row class="mbot5">\n\n                        <ion-col col-6>\n\n                        </ion-col>\n\n                        <ion-col col-6 text-center>\n\n                            <button ion-button text-uppercase class="fs12 fw00 themColor border-black" style="height: 25px;" >\n\n                                autocomplete\n\n                            </button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 8 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">z lift distance</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'z_lift_distance\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input type="text" [(ngModel)]="print.z_lift_distance" class="input_css" style="margin:auto;" readonly></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(no)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'z_lift_distance\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- select  -->\n\n                    <ion-row>\n\n                        <ion-col col-6 text-left>\n\n                            <p text-uppercase class="fs12 fw500">build direction</p>\n\n                        </ion-col>\n\n                        <ion-col col-6 text-right style="display: inline-flex;">\n\n                            <ion-select [(ngModel)]="print.build_direction" class="fw500 buildSelect ionselectClass">\n\n                                <ion-option value="Bottom Up" selected>Bottom Up</ion-option>\n\n                                <ion-option value="Up Bottom">Up to Bottom</ion-option>\n\n                            </ion-select>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 9 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">Z lift speed</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'z_lift_speed\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="print.z_lift_speed" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(mm/sec)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'z_lift_speed\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 9 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">z bottom speed</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'z_bottom_speed\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="print.z_bottom_speed" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(mm/sec)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'z_bottom_speed\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 10 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">z lift retract speed</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'z_bottom_retract_speed\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="print.z_bottom_retract_speed" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(mm/sec)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'z_bottom_retract_speed\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 11 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">slide tilt value</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'slide_tilt\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="print.slide_tilt" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(mm)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'slide_tilt\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 12 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">reflect x</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'reflect_x\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="print.reflect_x" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(no)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'reflect_x\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                     <!-- 12 -->\n\n                     <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">reflect y</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintDecress(\'reflect_y\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="print.reflect_y" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(no)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="PrintIncress(\'reflect_y\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </div>\n\n        </div>\n\n        <!-- -----------print settings-------- -->\n\n        \n\n        <!-- ----------slicing settings---------- -->\n\n        <div text-center>\n\n            <p text-uppercase class="fs16 fw500 textTheme">slicing settings</p>\n\n        </div>\n\n        <div text-center>\n\n            <div>\n\n                <ion-grid>\n\n                    <!-- 1 Redio-->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">enable slicing outlines</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-center style="display: inline-flex;">\n\n                            <ion-row style="width: 100%;">\n\n                                <ion-col col-6>\n\n                                    <span text-uppercase class="fs10 fw500 lh3">yes</span>\n\n                                    <ion-radio checked="{{enable_slicing_outlineArray.yes}}"  (click)="enable_slicing_outlineArrayValueSet(\'1\')" class="radioCss"></ion-radio>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <span text-uppercase class="fs10 fw500 lh3">no</span>\n\n                                    <ion-radio checked="{{enable_slicing_outlineArray.no}}"  (click)="enable_slicing_outlineArrayValueSet(\'0\')" class="radioCss"></ion-radio>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- label -->\n\n                    <div text-start text-uppercase class="fs12 fw700 mbot10">\n\n                        infill\n\n                    </div>\n\n                    <!-- 2.2 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">infill density</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingDecree(\'infill_density\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="slicing.infill_density" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(%)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingIncree(\'infill_density\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 3.2 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">infill line distance</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingDecree(\'infill_line_distance\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="slicing.infill_line_distance" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(mm)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingIncree(\'infill_line_distance\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 4.2 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">infill overlap percentage</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingDecree(\'infill_overlap_percentage\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="slicing.infill_overlap_percentage" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(%)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingIncree(\'infill_overlap_percentage\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 5.2 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">infill layer thickness</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingDecree(\'infill_layer_thickness\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="slicing.infill_layer_thickness" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(mm)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingIncree(\'infill_layer_thickness\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- select  -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs12 fw500">infill pattern</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-select [(ngModel)]="slicing.infill_pattern" class="fw500 buildSelect ionselectClass">\n\n                                <ion-option value="Grid">Grid</ion-option>\n\n                                <ion-option value="Lines">Lines</ion-option>\n\n                                <ion-option value="Triangles">Triangles</ion-option>\n\n                                <ion-option value="Cubic">Cubic</ion-option>\n\n                                <ion-option value="Trihexadone">Tri-hexadone</ion-option>\n\n                                <ion-option value="Concentric">Concentric</ion-option>\n\n                                <ion-option value="Zigzag">Zigzag</ion-option>\n\n                                <ion-option value="Cross">Cross</ion-option>\n\n                            </ion-select>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- label -->\n\n                    <div text-start text-uppercase margin-top class="fs12 fw700 mbot10">\n\n                        support generation\n\n                    </div>\n\n                    <!-- 2.2 redio-->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">generate support</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-center style="display: inline-flex;">\n\n                            <ion-row style="width: 100%;">\n\n                                <ion-col col-6>\n\n                                    <span text-uppercase class="fs10 fw500 lh3">yes</span>\n\n                                    <ion-radio checked="{{generate_supportArray.yes}}"  (click)="generate_supportArrayValueSet(\'1\')" class="radioCss"></ion-radio>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <span text-uppercase class="fs10 fw500 lh3">no</span>\n\n                                    <ion-radio checked="{{generate_supportArray.no}}"  (click)="generate_supportArrayValueSet(\'1\')" class="radioCss"></ion-radio>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 3.2 -->\n\n                    <ion-row class="mbot3 mtop3">\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">support placement</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-select [(ngModel)]="slicing.support_placement" class="fw500 buildSelect ionselectClass">\n\n                                <ion-option value="Touching Build Plate" selected>Touching Build Plate</ion-option>\n\n                                <ion-option value="Lines">Lines</ion-option>\n\n                            </ion-select>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 4.2 -->\n\n                    <ion-row >\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">support overhang angel</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingDecree(\'support_overhang_angle\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="slicing.support_overhang_angle" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(%)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingIncree(\'support_overhang_angle\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 5.2 -->\n\n                    <ion-row class="mbot3 mtop3">\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">support pattern</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-select [(ngModel)]="slicing.support_pattern" class="fw500 buildSelect ionselectClass">\n\n                                    <ion-option value="Grid">Grid</ion-option>\n\n                                    <ion-option value="lines">Lines</ion-option>\n\n                                    <ion-option value="Triangles">Triangles</ion-option>\n\n                                    <ion-option value="Cubic">Cubic</ion-option>\n\n                                    <ion-option value="Trihexadone">Tri-hexadone</ion-option>\n\n                                    <ion-option value="Concentric">Concentric</ion-option>\n\n                                    <ion-option value="Lines">Zigzag</ion-option>\n\n                                    <ion-option value="Cross">Cross</ion-option>\n\n                            </ion-select>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 5.2 -->\n\n                    <ion-row >\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">support density</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingDecree(\'support_density\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="slicing.support_density" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(mm)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingIncree(\'support_density\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 9 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">support horizontal expansion</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingDecree(\'support_horizontal_expansion\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="slicing.support_horizontal_expansion" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(mm)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingIncree(\'support_horizontal_expansion\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 10 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">support infill layer thickness</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingDecree(\'support_infill_layer_thickness\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="slicing.support_infill_layer_thickness" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(mm)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingIncree(\'support_infill_layer_thickness\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <!-- 11 -->\n\n                    <ion-row>\n\n                        <ion-col col-5 text-left>\n\n                            <p text-uppercase class="fs10 fw500">gradual support infill steps</p>\n\n                        </ion-col>\n\n                        <ion-col col-7 text-right style="display: inline-flex;">\n\n                            <ion-row>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingDecree(\'gradual_support_infill_steps\')" icon-only class="minus_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="remove"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                                <ion-col col-5>\n\n                                    <ion-input readonly type="text" [(ngModel)]="slicing.gradual_support_infill_steps" class="input_css" style="margin:auto;"></ion-input>\n\n                                </ion-col>\n\n                                <ion-col col-3 text-left>\n\n                                    <span class="fs10 fw500 position">(#)</span>\n\n                                </ion-col>\n\n                                <ion-col col-2>\n\n                                    <button ion-button (click)="slicingIncree(\'gradual_support_infill_steps\')" icon-only class="add_icon iconPos" style="margin:auto;">\n\n                                        <ion-icon name="add"></ion-icon>\n\n                                    </button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </div>\n\n        </div>\n\n        <!-- ----------slicing settings---------- -->\n\n\n\n        <!-- button -->\n\n        <ion-row>\n\n            <ion-col col-12 text-center>\n\n                <button ion-button text-uppercase (click)="save()" class="fs14 fw00 themColor border-black" style="width: 50%;">\n\n                    save\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/slicingSetting/slicingSetting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], SlicingSettingPage);
    return SlicingSettingPage;
}());

//# sourceMappingURL=slicingSetting.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportRequestNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supportNew_supportNew__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer_ngx__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


var SupportRequestNewPage = /** @class */ (function () {
    function SupportRequestNewPage(navCtrl, navParams, toastCtrl, fileTransfer, camera, loadingCtrl, userService, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.fileTransfer = fileTransfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.platform = platform;
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.SendReq = {
            "title": "",
            "message": "",
            "user_id": this.userInfo.user_id,
            "file": ""
        };
    }
    SupportRequestNewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__supportNew_supportNew__["a" /* SupportNewPage */]);
        }, 0);
    };
    SupportRequestNewPage.prototype.SelectFile = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: this.camera.MediaType.ALLMEDIA
            // mediaType:this.camera.MediaType.VIDEO
        }).then(function (imageData) {
            // this.imageURI ="file://"+imageData; //Get File Path
            _this.SendReq.file = imageData;
            _this.presentToast("File Selected");
        });
        loading.dismiss();
    };
    SupportRequestNewPage.prototype.remove = function () {
        this.SendReq.file = "";
    };
    SupportRequestNewPage.prototype.AddSupport = function () {
        var _this = this;
        if (this.SendReq.title == "") {
            this.presentToast("Please Insert Title");
            return false;
        }
        if (this.SendReq.message == "") {
            this.presentToast("Please Insert Message");
            return false;
        }
        if (this.SendReq.file == "") {
            this.presentToast("Please Select File");
            return false;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.AddSupportRequest(this.SendReq).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.presentToast(res.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__supportNew_supportNew__["a" /* SupportNewPage */]);
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    SupportRequestNewPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__supportNew_supportNew__["a" /* SupportNewPage */]);
    };
    /// Toast function ////
    SupportRequestNewPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    SupportRequestNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-supportRequestNew',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/supportRequestNew/supportRequestNew.html"*/'\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button style="background:transparent;" (click)="back()">\n\n              <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n          </button>\n\n      </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content padding class="">\n\n  <div text-center text-uppercase class="fs18 fw500">\n\n    support requests\n\n  </div>\n\n  <div style="margin-top: 25px;">\n\n    <!-- <div text-start>\n\n      <p text-uppercase class="fs14 fw500">Request Id : 1223456789d</p>\n\n    </div> -->\n\n    <div style="display: flex;">\n\n      <p text-uppercase class="fs14 fw500 w20">title :</p>\n\n      <ion-input type="text" [(ngModel)]="SendReq.title" placeholder="Type to write" class="inputCss w80"></ion-input>\n\n    </div>\n\n    <div>\n\n      <p text-uppercase class="fs14 fw500">Message :</p>\n\n      <div>\n\n        <textarea [(ngModel)]="SendReq.message" placeholder="Type to write" clear-text class="txtArea">\n\n\n\n        </textarea>\n\n      </div>\n\n    </div>\n\n    <div margin-top>\n\n      <ion-row>\n\n        <ion-col col-6 text-start>\n\n            <p text-uppercase class="fs14 fw500">Attachments :</p>\n\n        </ion-col>\n\n        <ion-col col-6 text-end>\n\n            <!-- <button ion-button class="answerButton border-black">\n\n                <ion-icon ios="ios-attach" md="md-attach"></ion-icon>\n\n              select file\n\n            </button> -->\n\n            <button ion-button icon-start class="answerButton border-black" (click)="SelectFile()">\n\n              <!-- <ion-icon name="home"></ion-icon> -->\n\n              <ion-icon ios="ios-attach" md="md-attach"></ion-icon>\n\n              select file\n\n            </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="SendReq.file != \'\'">\n\n          <ion-col col-10 text-start>\n\n              <p text-uppercase class="fs10 fw500">{{this.SendReq.file}}</p>\n\n          </ion-col>\n\n          <ion-col col-2 text-start (click)="remove()">\n\n              <ion-icon ios="ios-close" md="md-close"></ion-icon>\n\n          </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div margin-top text-center>\n\n        <button ion-button class="sendMsg border-black" (click)="AddSupport()">send message</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/supportRequestNew/supportRequestNew.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], SupportRequestNewPage);
    return SupportRequestNewPage;
}());

//# sourceMappingURL=supportRequestNew.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_shippingAddressModal_shippingAddressModal__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_userDetailsModal_userDetailsModal__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_information_information__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_languageSettingModal_languageSettingModal__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_paymentDetailsModal_paymentDetailsModal__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_selectSubscription_selectSubscription__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_advancedSettingModal_advancedSettingModal__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_platformChange_platformChange__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ShippingDetailsPage = /** @class */ (function () {
    function ShippingDetailsPage(navCtrl, modalCtrl, userService, loadingCtrl, toastCtrl, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.cityList = [];
        this.stateList = [];
        this.countryList = [];
    }
    ShippingDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
        }, 0);
        this.setValue();
    };
    // -----------LodingData-------
    ShippingDetailsPage.prototype.setValue = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        this.loading.present();
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.Usershipping = JSON.parse(localStorage.getItem("Usershipping"));
        var FileName = this.userInfo.user_name.split(" ");
        this.UserName = FileName[0];
        this.UserSurname = FileName[1];
        this.Address = this.userInfo.email;
        this.mobile = this.userInfo.user_mobile;
        this.city = this.userInfo.city_name;
        this.zipCode = this.userInfo.zipcode;
        this.REGION = this.userInfo.state_name;
        this.country = this.userInfo.country_name;
        this.ShippingCity = this.Usershipping.city_name;
        this.ShippingZone = this.Usershipping.shp_region;
        this.Shippingcountry = this.Usershipping.shp_country;
        this.Shippingzip = this.Usershipping.shp_zip;
        this.Shippingaddress = this.Usershipping.shp_address;
        this.additionalemail = this.userInfo.additional_email;
        this.subscription_status = this.userInfo.subscription_status;
        this.subscriptionMsg = this.userInfo.subscription_msg;
        console.log(this.subscriptionMsg);
        this.loading.dismiss();
    };
    // -----------LodingData-------
    // -----------AllModelOpen-------
    ShippingDetailsPage.prototype.presentModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_shippingAddressModal_shippingAddressModal__["a" /* ShippingAddressModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.setValue();
        });
    };
    ShippingDetailsPage.prototype.userEdit = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_userDetailsModal_userDetailsModal__["a" /* UserDetailsModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.setValue();
        });
    };
    ShippingDetailsPage.prototype.paymentEdit = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modal_paymentDetailsModal_paymentDetailsModal__["a" /* PaymentDetailsModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.setValue();
        });
    };
    ShippingDetailsPage.prototype.info = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_information_information__["a" /* InformationModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.setValue();
        });
    };
    ShippingDetailsPage.prototype.languageSet = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_languageSettingModal_languageSettingModal__["a" /* LanguageSettingModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.setValue();
        });
    };
    ShippingDetailsPage.prototype.subscribe = function () {
        var _this = this;
        // SelectSubscriptionModalPage
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__modal_selectSubscription_selectSubscription__["a" /* SelectSubscriptionModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.setValue();
        });
    };
    // print(){
    //   let modal = this.modalCtrl.create(PrintModalPage);
    //   modal.present();
    // }
    ShippingDetailsPage.prototype.advance = function () {
        var _this = this;
        // AdvancedSettingModalPage
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__modal_advancedSettingModal_advancedSettingModal__["a" /* AdvancedSettingModalPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.setValue();
        });
    };
    ShippingDetailsPage.prototype.platformChange = function (email) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__modal_platformChange_platformChange__["a" /* platformChangeModalPage */], { Email: email });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.setValue();
        });
    };
    // -----------AllModelOpen-------
    ShippingDetailsPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
    };
    // -----------LogOut-------
    ShippingDetailsPage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Log Out App!',
            message: 'Do you want to Log Out from the app?',
            buttons: [{
                    text: 'Log Out',
                    handler: function () {
                        localStorage.clear();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                    }
                }, {
                    text: 'Cancel',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    // -----------LogOut-------
    /// Toast function ////
    ShippingDetailsPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    ShippingDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shippingDetails',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/shippingDetails/shippingDetails.html"*/'\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n            <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n    </ion-title>\n\n    <ion-buttons end >\n\n        <button style="background:transparent;" (click)="back()">\n\n            <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n        </button>\n\n    </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div padding>\n\n    <div text-center>\n\n      <p text-uppercase class="fs20 fw500" style="margin-top: 0px;">\n\n        Settings\n\n      </p>\n\n    </div>\n\n    <ion-grid class="borderDiv ">\n\n      <div text-start text-uppercase class="fs16 fw500 marginTopLeft">\n\n        User Details\n\n      </div>\n\n      <ion-row>\n\n        <ion-col col-4>\n\n            <ion-label fixed text-uppercase class="fs10 fw600">Name:</ion-label>\n\n        </ion-col>\n\n        <ion-col col-8>\n\n            <ion-input type="text" value="{{UserName}}" class="input_css" readonly></ion-input>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!--  -->\n\n      <ion-row class="mtop_minus15px">\n\n        <ion-col col-4>\n\n              <ion-label fixed text-uppercase class="fs10 fw600">Surname:</ion-label>\n\n        </ion-col>\n\n        <ion-col col-8>\n\n            <ion-input type="text" value="{{UserSurname}}" class="input_css" readonly></ion-input>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="mtop_minus15px">\n\n          <ion-col col-4>\n\n                <ion-label fixed text-uppercase class="fs10 fw600">Email:</ion-label>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n              <ion-input type="text" value="{{Address}}" class="input_css" readonly></ion-input>\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row class="mtop_minus15px">\n\n          <ion-col col-4>\n\n                <ion-label fixed text-uppercase class="fs10 fw600">city:</ion-label>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n              <ion-input type="text" value="{{city}}" class="input_css" readonly></ion-input>\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row class="mtop_minus15px">\n\n          <ion-col col-4>\n\n                <ion-label fixed text-uppercase class="fs10 fw600">ZIP CODE:</ion-label>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n              <ion-input type="text" value="{{zipCode}}" class="input_css" readonly></ion-input>\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row class="mtop_minus15px">\n\n          <ion-col col-4>\n\n                <ion-label fixed text-uppercase class="fs10 fw600">REGION/PROVINCE:</ion-label>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n              <ion-input type="text" value="{{REGION}}" class="input_css" readonly></ion-input>\n\n          </ion-col>\n\n      </ion-row> \n\n      <ion-row class="mtop_minus15px">\n\n          <ion-col col-4>\n\n                <ion-label fixed text-uppercase class="fs10 fw600">country:</ion-label>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n              <ion-input type="text" value="{{country}}" class="input_css" readonly></ion-input>\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row class="mtop_minus15px">\n\n          <ion-col col-4>\n\n                <ion-label fixed text-uppercase class="fs10 fw600">phone:</ion-label>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n              <ion-input type="tel" value="{{mobile}}" class="input_css" readonly></ion-input>\n\n          </ion-col>\n\n      </ion-row>\n\n      <div class="posRelative mtop20">\n\n        <button ion-button class="answerButton butAnswerPos border-black" (click)="userEdit()">edit</button>\n\n      </div> \n\n    </ion-grid>\n\n    <!-- platform access -->\n\n    <ion-grid class="borderDiv mtop10p">\n\n      <ion-row>\n\n        <ion-col col-6 text-start >\n\n            <div text-uppercase class="fs16 fw500">\n\n                platform access\n\n            </div>\n\n        </ion-col>\n\n        <ion-col col-6 text-right>\n\n          <button *ngIf="additionalemail == \'\'" ion-button icon-only class="addButton" (click)="platformChange()">\n\n            <ion-icon  name="add"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="">\n\n          <ion-col col-4>\n\n                <!-- <ion-label fixed text-uppercase class="fs10 fw600">Address:</ion-label> -->\n\n          </ion-col>\n\n          <ion-col col-8 text-right (click)="platformChange(this.additionalemail)">\n\n              <span *ngIf="additionalemail != \'\'" class="fs12 fw500 white spanEmail">{{this.additionalemail}}</span>\n\n          </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <!-- shipping address -->\n\n    <ion-grid class="borderDiv mtop10p">\n\n        <div text-uppercase text-start class="fs16 fw500 marginTopLeft">\n\n            shipping Details\n\n        </div>\n\n        \n\n        <ion-row>\n\n            <ion-col col-4>\n\n                  <ion-label fixed text-uppercase class="fs10 fw600">Address:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-input type="text" value="{{Shippingaddress}}" class="input_css" readonly></ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="mtop_minus15px">\n\n            <ion-col col-4>\n\n                  <ion-label fixed text-uppercase class="fs10 fw600">city:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-input type="text" value="{{ShippingCity}}" class="input_css" readonly></ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="mtop_minus15px">\n\n            <ion-col col-4>\n\n                  <ion-label fixed text-uppercase class="fs10 fw600">ZIP CODE:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-input type="text" value="{{Shippingzip}}" class="input_css" readonly></ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="mtop_minus15px">\n\n            <ion-col col-4>\n\n                  <ion-label fixed text-uppercase class="fs10 fw600">REGION/PROVINCE:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-input type="text" value="{{ShippingZone}}" class="input_css" readonly></ion-input>\n\n            </ion-col>\n\n        </ion-row> \n\n        <ion-row class="mtop_minus15px">\n\n            <ion-col col-4>\n\n                  <ion-label fixed text-uppercase class="fs10 fw600">country:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-input type="text" value="{{Shippingcountry}}" class="input_css" readonly></ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n        <div class="posRelative mtop20">\n\n          <button ion-button class="answerButton butAnswerPos border-black" (click)="presentModal()">edit</button>\n\n        </div> \n\n    </ion-grid>\n\n    <!-- payment details -->\n\n    <!-- <ion-grid class="borderDiv mtop10p">\n\n        <div text-uppercase text-start class="fs16 fw500 marginTopLeft">\n\n            payment details\n\n        </div>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n              <ion-label fixed text-uppercase class="fs10 fw600">payment method:</ion-label>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n              <ion-input type="text" value="" class="input_css"></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="mtop_minus15px">\n\n          <ion-col col-4>\n\n                <ion-label fixed text-uppercase class="fs10 fw600">card number:</ion-label>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n              <ion-input type="tel" value="" class="input_css"></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="mtop_minus15px">\n\n            <ion-col col-4>\n\n                  <ion-label fixed text-uppercase class="fs10 fw600">card holder\'s full name:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-input type="text" value="" class="input_css"></ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="mtop_minus15px">\n\n            <ion-col col-4>\n\n                  <ion-label fixed text-uppercase class="fs10 fw600">card expiry date:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-input type="date" value="" class="input_css"></ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="mtop_minus15px">\n\n            <ion-col col-4>\n\n                  <ion-label fixed text-uppercase class="fs10 fw600">security CODE:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-input type="tel" value="" class="input_css"></ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n        <div class="posRelative mtop20">\n\n          <button ion-button class="answerButton butAnswerPos border-black" (click)="paymentEdit()">edit</button>\n\n        </div> \n\n    </ion-grid> -->\n\n    <!-- subscription details -->\n\n    <ion-grid class="borderDiv mtop10p">\n\n        <div text-uppercase text-start class="fs16 fw500 marginTopLeft">\n\n            subscription details\n\n        </div>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n              <ion-label fixed text-uppercase class="fs10 fw600">subscription :</ion-label>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n                <ion-input  *ngIf="subscription_status == true"  type="text" value="Active" class="input_css" placeholder="Active" readonly></ion-input>\n\n                <ion-input  *ngIf="subscription_status != true"  type="text" value="Expired" class="input_css" placeholder="Expired" readonly></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="mtop_minus15px">\n\n          <ion-col col-4>\n\n                <ion-label fixed text-uppercase class="fs10 fw600">expiry date:</ion-label>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n              <ion-input type="text" value="{{subscriptionMsg}}" class="input_css" readonly></ion-input>\n\n          </ion-col>\n\n        </ion-row>\n\n        <div class="posRelative mtop20">\n\n          <button ion-button class="answerButton butAnswerPos border-black" (click)="subscribe()">edit</button>\n\n        </div> \n\n    </ion-grid>\n\n    <!-- subscription details -->\n\n    <div padding class="borderDiv mtop10p">\n\n      <div text-uppercase text-center class="fs16 fw500">\n\n          platform Settings\n\n      </div>\n\n      <div text-center margin-top>\n\n          <button ion-button class="saveChanges border-black" (click)="advance()">Advance Setting</button>\n\n          <button ion-button class="saveChanges border-black" (click)="languageSet()">language settings</button>\n\n          <button ion-button class="saveChanges border-black" (click)="info()">information settings</button>  \n\n      </div>\n\n    </div>\n\n    <div text-center class="padding10">\n\n      <!-- <button ion-button class="logoutButton border-black">log out</button> -->\n\n      <button ion-button icon-start class="logoutButton border-black" (click)="logout()">\n\n          <ion-icon name="log-out"></ion-icon>\n\n          log out\n\n        </button>\n\n    </div>    \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/shippingDetails/shippingDetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], ShippingDetailsPage);
    return ShippingDetailsPage;
}());

//# sourceMappingURL=shippingDetails.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingAddressModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShippingAddressModalPage = /** @class */ (function () {
    function ShippingAddressModalPage(navCtrl, statusBar, viewCtrl, loadingCtrl, userService, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.countryList = [];
        this.stateList = [];
        this.cityList = [];
        this.Usershipping = JSON.parse(localStorage.getItem("Usershipping"));
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.ShippingFinalDetails = {
            "user_id": this.userInfo.user_id,
            "country": this.userInfo.country,
            "sh_address": this.Usershipping.shp_address,
            "shp_city1": this.Usershipping.shp_city,
            "sh_zipcode": this.Usershipping.shp_zip,
            "sh_region": this.Usershipping.shp_region,
            "shp_country1": this.Usershipping.shp_country
        };
        this.CountryLoad();
    }
    ShippingAddressModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss();
        }, 0);
    };
    // ======CountryList API========
    ShippingAddressModalPage.prototype.CountryLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.CountryList().subscribe(function (res) {
            loading.dismiss();
            console.log(res);
            if (res.status == "true" || res.status == true) {
                _this.countryList = [];
                _this.countryList = res.data;
                _this.stateLoad();
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    // ======CountryList API========
    // ======StateList API========
    ShippingAddressModalPage.prototype.stateLoad = function () {
        var _this = this;
        var data = {
            "country_id": this.Usershipping.shp_country
        };
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.stateList(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.stateList = [];
                _this.stateList = res.data;
                console.log(_this.stateList);
                _this.cityLoad();
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    // ======StateList API========
    // ======CityList API========
    ShippingAddressModalPage.prototype.cityLoad = function () {
        var _this = this;
        var data = {
            "state_id": this.Usershipping.shp_region
        };
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.CityList(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.cityList = [];
                _this.cityList = res.data;
                console.log(_this.cityList);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    // ======CityList API========
    ShippingAddressModalPage.prototype.saveData = function () {
        var _this = this;
        if (this.ShippingFinalDetails.sh_address == "") {
            this.presentToast("Please select address");
            return false;
        }
        if (this.ShippingFinalDetails.sh_zipcode == "") {
            this.presentToast("Please select zipcode");
            return false;
        }
        if (this.ShippingFinalDetails.sh_region == "") {
            this.presentToast("Please select region");
            return false;
        }
        if (this.ShippingFinalDetails.shp_country1 == "") {
            this.presentToast("Please select mobile");
            return false;
        }
        if (this.ShippingFinalDetails.shp_city1 == "") {
            this.presentToast("Please select country");
            return false;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.AddUserShippingDetails(this.ShippingFinalDetails).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                localStorage.setItem("Usershipping", JSON.stringify(res.data));
                _this.presentToast(res.message);
                _this.viewCtrl.dismiss();
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    /// Toast function ////
    ShippingAddressModalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    ShippingAddressModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shippingAddressModal',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/shippingAddressModal/shippingAddressModal.html"*/'<ion-content class="sample-modal-page">\n\n    <div padding>\n\n        <!-- shipping address -->\n\n        <ion-grid class="">\n\n            <div text-uppercase text-center margin-top margin-bottom class="fs16 fw500 textTheme">\n\n                shipping Details\n\n            </div>\n\n            \n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">Address:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="text" value="" [(ngModel)]="ShippingFinalDetails.sh_address" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            \n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">ZIP CODE:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="text" value="" [(ngModel)]="ShippingFinalDetails.sh_zipcode" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">country:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8 style="padding-top: 13px;">\n\n                    <ion-select (ionChange)="stateLoad($event)" [(ngModel)]="ShippingFinalDetails.shp_country1" class="fw500 buildSelect ionselectClass">\n\n                        <ion-option *ngFor="let country of countryList" value="{{country.id}}">{{country.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">REGION/PROVINCE:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8 style="padding-top: 13px;">\n\n                    <ion-select (ionChange)="cityLoad($event)" [(ngModel)]="ShippingFinalDetails.sh_region"  class="fw500 buildSelect ionselectClass">\n\n                            <ion-option *ngFor="let state of stateList" value="{{state.id}}">{{state.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">city:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8 style="padding-top: 13px;">\n\n                    <ion-select  [(ngModel)]="ShippingFinalDetails.shp_city1" class="fw500 buildSelect ionselectClass">\n\n                        <ion-option *ngFor="let city of cityList" value="{{city.id}}" >{{city.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-col>\n\n            </ion-row>\n\n            \n\n        </ion-grid>\n\n        <div text-center class="padding10">\n\n        <!-- <button ion-button class="logoutButton border-black">log out</button> -->\n\n        <button ion-button class="logoutButton border-black" (click)="saveData()">\n\n            save\n\n            </button>\n\n        </div>    \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/shippingAddressModal/shippingAddressModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], ShippingAddressModalPage);
    return ShippingAddressModalPage;
}());

//# sourceMappingURL=shippingAddressModal.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsModalPage = /** @class */ (function () {
    function UserDetailsModalPage(navCtrl, statusBar, viewCtrl, navParams, loadingCtrl, userService, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.countryList = [];
        this.stateList = [];
        this.cityList = [];
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        var FileName = this.userInfo.user_name.split(" ");
        this.countryList = this.navParams.get('CountryData');
        this.status = "true";
        this.UserFinalDetails = {
            "user_id": this.userInfo.user_id,
            "country": this.userInfo.country,
            "name": FileName[0],
            "lname": FileName[1],
            "address": this.userInfo.address,
            "zipcode": this.userInfo.zipcode,
            "region": this.userInfo.region,
            "mobile": this.userInfo.user_mobile,
            "city": this.userInfo.city,
            "state": this.userInfo.region
        };
        this.CountryLoad();
    }
    UserDetailsModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss();
        }, 0);
    };
    UserDetailsModalPage.prototype.onSelectChange = function (e) {
        console.log(e);
    };
    //  // ======CountryList API========
    UserDetailsModalPage.prototype.CountryLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.CountryList().subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.countryList = [];
                _this.countryList = res.data;
                _this.stateLoad();
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    // ======CountryList API========
    // ======StateList API========
    UserDetailsModalPage.prototype.stateLoad = function () {
        var _this = this;
        var data = {
            "country_id": this.UserFinalDetails.country
        };
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.stateList(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.stateList = [];
                _this.stateList = res.data;
                console.log(_this.stateList);
                _this.cityLoad();
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    // ======StateList API========
    // ======CityList API========
    UserDetailsModalPage.prototype.cityLoad = function () {
        var _this = this;
        var data = {
            "state_id": this.UserFinalDetails.state
        };
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.CityList(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.cityList = [];
                _this.cityList = res.data;
                console.log(_this.cityList);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    // ======CityList API========
    UserDetailsModalPage.prototype.saveData = function () {
        var _this = this;
        if (this.UserFinalDetails.name == "") {
            this.presentToast("Please select name");
            return false;
        }
        if (this.UserFinalDetails.lname == "") {
            this.presentToast("Please select lname");
            return false;
        }
        if (this.UserFinalDetails.address == "") {
            this.presentToast("Please select address");
            return false;
        }
        if (this.UserFinalDetails.zipcode == "") {
            this.presentToast("Please select zipcode");
            return false;
        }
        if (this.UserFinalDetails.country == "") {
            this.presentToast("Please select country");
            return false;
        }
        if (this.UserFinalDetails.region == "") {
            this.presentToast("Please select region");
            return false;
        }
        if (this.UserFinalDetails.city == "") {
            this.presentToast("Please select city");
            return false;
        }
        if (this.UserFinalDetails.mobile == "") {
            this.presentToast("Please Insert mobile");
            return false;
        }
        if (this.UserFinalDetails.mobile.length > 10) {
            this.presentToast("Please Insert min 10 digit mobile");
            return false;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.AddUserDetails(this.UserFinalDetails).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                localStorage.setItem("UserInfo", JSON.stringify(res.data));
                _this.presentToast(res.message);
                _this.viewCtrl.dismiss();
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    /// Toast function ////
    UserDetailsModalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    UserDetailsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userDetailsModal',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/userDetailsModal/userDetailsModal.html"*/'<ion-content class="sample-modal-page">\n\n    <div padding>\n\n        <!-- shipping address -->\n\n        <ion-grid class="">\n\n            <div text-center text-uppercase margin-top margin-bottom class="fs16 fw500 textTheme">\n\n                User Details\n\n            </div>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">Name:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="text" value="" [(ngModel)]="UserFinalDetails.name" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                        <ion-label fixed text-uppercase class="fs10 fw600">Surname:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="text" value="" [(ngModel)]="UserFinalDetails.lname" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">Address:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="text" value="" [(ngModel)]="UserFinalDetails.address" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">country:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8 style="padding-top: 13px;">\n\n                    <ion-select (ionChange)="stateLoad($event)" [(ngModel)]="UserFinalDetails.country" class="fw500 buildSelect ionselectClass">\n\n                        <ion-option *ngFor="let country of countryList" value="{{country.id}}">{{country.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">REGION/PROVINCE:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8 style="padding-top: 13px;">\n\n                    <ion-select (ionChange)="cityLoad($event)" [(ngModel)]="UserFinalDetails.state"  class="fw500 buildSelect ionselectClass">\n\n                            <ion-option *ngFor="let state of stateList" value="{{state.id}}">{{state.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">city:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8 style="padding-top: 13px;">\n\n                    <ion-select  [(ngModel)]="UserFinalDetails.city" class="fw500 buildSelect ionselectClass">\n\n                        <ion-option *ngFor="let city of cityList" value="{{city.id}}" >{{city.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">ZIP CODE:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="text" value="" [(ngModel)]="UserFinalDetails.zipcode" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">phone:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="tel" value="" [(ngModel)]="UserFinalDetails.mobile" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <div text-center class="padding10">\n\n            <button ion-button class="logoutButton border-black" (click)="saveData()">\n\n                save\n\n            </button>\n\n        </div>    \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/userDetailsModal/userDetailsModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], UserDetailsModalPage);
    return UserDetailsModalPage;
}());

//# sourceMappingURL=userDetailsModal.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformationModalPage = /** @class */ (function () {
    function InformationModalPage(navCtrl, statusBar, viewCtrl, loadingCtrl, userService, platform) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.platform = platform;
    }
    InformationModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss();
        }, 0);
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.InfoDetails(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.Info = res.data[0].discription;
                console.log(_this.Info);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    InformationModalPage.prototype.saveData = function () {
        this.viewCtrl.dismiss();
    };
    InformationModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/information/information.html"*/'<ion-content class="sample-modal-page">\n\n    <div padding>\n\n        <div text-uppercase text-center margin-top margin-bottom class="fs16 fw500 textTheme">\n\n            Information\n\n        </div>\n\n        <div style="padding-left: 10px;padding-right: 10px">\n\n            <p [innerHTML]="Info"></p>\n\n        </div>\n\n        <!-- <div class="parentDiv">\n\n            <div text-center class="childDiv">\n\n                <p class="fs14 fw500">www.xxxxx.com/faq</p>\n\n            </div>\n\n        </div>     -->\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/information/information.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], InformationModalPage);
    return InformationModalPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSettingModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageSettingModalPage = /** @class */ (function () {
    function LanguageSettingModalPage(navCtrl, statusBar, viewCtrl, userService, loadingCtrl, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.viewCtrl = viewCtrl;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.LanguageValue = this.userInfo.language_id;
        console.log(this.LanguageValue);
        this.LoadLanguage();
    }
    LanguageSettingModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss();
        }, 0);
    };
    LanguageSettingModalPage.prototype.LoadLanguage = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.languageList().subscribe(function (res) {
            _this.LanguageListArray = [];
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.LanguageListArray = res.data;
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    LanguageSettingModalPage.prototype.saveData = function () {
        var _this = this;
        var data = {
            "printer_id": this.userInfo.user_id,
            "language_id": this.LanguageValue,
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.AddLanguage(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.userInfo.language_id = _this.LanguageValue;
                localStorage.setItem("UserInfo", JSON.stringify(_this.userInfo));
                _this.viewCtrl.dismiss();
                _this.presentToast(res.message);
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    /// Toast function ////
    LanguageSettingModalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    LanguageSettingModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-languageSettingModal',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/languageSettingModal/languageSettingModal.html"*/'<ion-content>\n\n    <div padding>\n\n        <div text-uppercase text-center margin-top margin-bottom class="fs16 fw500 textTheme">\n\n            Languages Settings\n\n        </div>\n\n        <div class="parentDiv">\n\n            <div class="childDiv">\n\n                <ion-grid class="">\n\n                    <ion-row>\n\n                        <ion-col col-4>\n\n                            <ion-label fixed text-uppercase class="fs10 fw600">Languages</ion-label>\n\n                        </ion-col>\n\n                        <ion-col col-8>\n\n                            <ion-select text-uppercase [(ngModel)]="LanguageValue" class="selectText">\n\n                                <ion-option *ngFor="let item of LanguageListArray" value="{{item.id}}">{{item.name}}</ion-option>\n\n                            </ion-select>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n                <div text-center margin-top class="">\n\n                    <button ion-button class="logoutButton border-black" (click)="saveData()">\n\n                        save\n\n                    </button>\n\n                </div>\n\n            </div>\n\n        </div>    \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/languageSettingModal/languageSettingModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], LanguageSettingModalPage);
    return LanguageSettingModalPage;
}());

//# sourceMappingURL=languageSettingModal.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDetailsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentDetailsModalPage = /** @class */ (function () {
    function PaymentDetailsModalPage(navCtrl, statusBar, viewCtrl) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.viewCtrl = viewCtrl;
    }
    PaymentDetailsModalPage.prototype.saveData = function () {
        this.viewCtrl.dismiss();
    };
    PaymentDetailsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paymentDetailsModal',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/paymentDetailsModal/paymentDetailsModal.html"*/'<ion-content class="sample-modal-page">\n\n    <div padding>\n\n        <!-- shipping address -->\n\n        <ion-grid class="">\n\n            <div text-uppercase text-center margin-top margin-bottom class="fs16 fw500 textTheme">\n\n                Payment Details\n\n            </div>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">payment method:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="text" value="" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                        <ion-label fixed text-uppercase class="fs10 fw600">card number:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="tel" value="" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">card holder\'s full name:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="text" value="" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">card expiry date:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="date" value="" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">security CODE:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="tel" value="" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        <div text-center class="padding10">\n\n            <button ion-button class="logoutButton border-black" (click)="saveData()">\n\n                save\n\n            </button>\n\n        </div>    \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/paymentDetailsModal/paymentDetailsModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], PaymentDetailsModalPage);
    return PaymentDetailsModalPage;
}());

//# sourceMappingURL=paymentDetailsModal.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSubscriptionModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paymentDetails_paymentDetails__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectSubscriptionModalPage = /** @class */ (function () {
    function SelectSubscriptionModalPage(navCtrl, statusBar, viewCtrl, loadingCtrl, userService, platform) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.platform = platform;
        this.check = [];
    }
    SelectSubscriptionModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss();
        }, 0);
        this.check = {
            "monthly": true,
            "quaterly": false,
            "yearly": false,
            "semester": false,
        };
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.subscriptionDetail(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.SubScription = res.data;
                _this.monthly = res.data.monthly;
                _this.quaterly = res.data.quaterly;
                _this.semester = res.data.semester;
                _this.yearly = res.data.yearly;
                _this.SelectedAmount = _this.monthly;
                console.log(_this.SubScription);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    SelectSubscriptionModalPage.prototype.checkValue = function (data) {
        if (data == "monthly") {
            this.check = {
                "monthly": true,
                "quaterly": false,
                "yearly": false,
                "semester": false,
            };
            this.SelectedAmount = this.monthly;
        }
        if (data == "quaterly") {
            this.check = {
                "monthly": false,
                "quaterly": true,
                "yearly": false,
                "semester": false,
            };
            this.SelectedAmount = this.quaterly;
        }
        if (data == "yearly") {
            this.check = {
                "monthly": false,
                "quaterly": false,
                "yearly": true,
                "semester": false,
            };
            this.SelectedAmount = this.yearly;
        }
        if (data == "semester") {
            this.check = {
                "monthly": false,
                "quaterly": false,
                "yearly": false,
                "semester": true,
            };
            this.SelectedAmount = this.semester;
        }
    };
    SelectSubscriptionModalPage.prototype.Payment = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__paymentDetails_paymentDetails__["a" /* PaymentDetailsPage */]);
    };
    SelectSubscriptionModalPage.prototype.saveData = function () {
        console.log(this.SelectedAmount);
        this.viewCtrl.dismiss();
    };
    SelectSubscriptionModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectSubscription',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/selectSubscription/selectSubscription.html"*/'<ion-content class="sample-modal-page">\n\n    <div padding>\n\n        <div text-uppercase text-center margin-top margin-bottom class="fs18 fw500 textTheme">\n\n            Select subscription\n\n        </div>\n\n        <div class="parentDiv">\n\n            <div text-center class="childDiv">\n\n                <div>\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-6 text-start>\n\n                                <span text-uppercase class="fs14 fw500 lh3">billing month</span>\n\n                            </ion-col>\n\n                            <ion-col col-3 text-end>\n\n                                <span text-uppercase class="fs14 fw500 lh3">{{monthly}} $</span>\n\n                            </ion-col>\n\n                            <ion-col col-3 text-end>\n\n                                <ion-item>\n\n                                    <ion-radio checked="{{check.monthly}}" value="5,00" (click)="checkValue(\'monthly\')"></ion-radio>\n\n                                </ion-item>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col col-6 text-start>\n\n                                <span text-uppercase class="fs14 fw500 lh3">billing quarter</span>\n\n                            </ion-col>\n\n                            <ion-col col-3 text-end>\n\n                                <span text-uppercase class="fs14 fw500 lh3">{{quaterly}} $</span>\n\n                            </ion-col>\n\n                            <ion-col col-3 text-end>\n\n                                <ion-item>\n\n                                    <ion-radio checked="{{check.quaterly}}" value="12,00" (click)="checkValue(\'quaterly\')"></ion-radio>\n\n                                </ion-item>\n\n                            </ion-col>\n\n                            <!-- <ion-col col-6 text-end>\n\n                                <span text-uppercase class="fs14 fw500">12,00 $</span>\n\n                            </ion-col> -->\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col col-6 text-start>\n\n                                <span text-uppercase class="fs14 fw500 lh3">billing semester</span>\n\n                            </ion-col>\n\n                            <ion-col col-3 text-end>\n\n                                <span text-uppercase class="fs14 fw500 lh3">{{semester}} $</span>\n\n                            </ion-col>\n\n                            <ion-col col-3 text-end>\n\n                                <ion-item>\n\n                                    <ion-radio checked="{{check.semester}}" value="25,00" (click)="checkValue(\'semester\')"></ion-radio>\n\n                                </ion-item>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <ion-col col-6 text-start>\n\n                                <span text-uppercase class="fs14 fw500 lh3">billing year</span>\n\n                            </ion-col>\n\n                            <ion-col col-3 text-end>\n\n                                <span text-uppercase class="fs14 fw500 lh3">{{yearly}} $</span>\n\n                            </ion-col>\n\n                            <ion-col col-3 text-end>\n\n                                <ion-item>\n\n                                    <ion-radio checked="{{check.yearly}}" value="50,00" (click)="checkValue(\'yearly\')"></ion-radio>\n\n                                </ion-item>\n\n                            </ion-col>\n\n                            <!-- <ion-col col-6 text-end>\n\n                                <span text-uppercase class="fs14 fw500">50,00 $</span>\n\n                            </ion-col> -->\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                </div>\n\n                <div text-center>\n\n                    <p text-uppercase class="fs18 fw500 m0">\n\n                        new expiry date\n\n                    </p>\n\n                    <p text-uppercase class="fs16 fw600 mtop5">22 may 2019</p>\n\n                </div>\n\n                <div text-center class="mtop5">\n\n                    <button (click)="Payment()" ion-button class="answerButton border-black w65">proceed to payment</button>\n\n                    <button (click)="saveData()" ion-button icon-start margin-top class="answerButton border-black w40">\n\n                        <ion-icon name="arrow-round-back" class="white"></ion-icon>\n\n                        go back\n\n                    </button>\n\n                </div>\n\n            </div>\n\n        </div>    \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/selectSubscription/selectSubscription.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], SelectSubscriptionModalPage);
    return SelectSubscriptionModalPage;
}());

//# sourceMappingURL=selectSubscription.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedSettingModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdvancedSettingModalPage = /** @class */ (function () {
    function AdvancedSettingModalPage(navCtrl, statusBar, viewCtrl, loadingCtrl, userService, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.machinestandby = [];
        this.zmotor = [];
        this.tiltmotor = [];
        this.zposition = [];
        this.lampstatus = [];
        this.fan = [];
    }
    AdvancedSettingModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss();
        }, 0);
        this.fan = {
            "off": false,
            "yes": false,
        };
        this.lampstatus = {
            "off": false,
            "yes": false,
        };
        this.zposition = {
            "TOP": false,
            "BOTTOM": false,
        };
        this.machinestandby = {
            "no": false,
            "yes": false,
        };
        this.zmotor = {
            "stopped": false,
            "paused": false,
            "running": false,
        };
        this.tiltmotor = {
            "stopped": false,
            "paused": false,
            "running": false,
        };
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.getAdvanceSettingDetail(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.machinestatus = res.data[0].machine_status;
                _this.tiltmotorstatusSelect(res.data[0].tilt_motor);
                _this.zmotorstatusSelect(res.data[0].z_motor);
                _this.machinestandbystatusSelect(res.data[0].standby);
                _this.zpositionstatusSelect(res.data[0].z_position);
                _this.lampstatusSelect(res.data[0].lamp_status);
                _this.fanValueSelect(res.data[0].fan);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    AdvancedSettingModalPage.prototype.tiltmotorstatusSelect = function (value) {
        console.log(value);
        if (value == "0") {
            this.tiltmotor = {
                "stopped": true,
                "paused": false,
                "running": false,
            };
            this.tiltmotorVlaue = "0";
        }
        if (value == "1") {
            this.tiltmotor = {
                "stopped": false,
                "paused": true,
                "running": false,
            };
            this.tiltmotorVlaue = "1";
        }
        if (value == "2") {
            this.tiltmotor = {
                "stopped": false,
                "paused": false,
                "running": true,
            };
            this.tiltmotorVlaue = "2";
        }
    };
    AdvancedSettingModalPage.prototype.zmotorstatusSelect = function (value) {
        console.log(value);
        if (value == "0") {
            this.zmotor = {
                "stopped": true,
                "paused": false,
                "running": false,
            };
            this.zmotorValue = "0";
        }
        if (value == "1") {
            this.zmotor = {
                "stopped": false,
                "paused": true,
                "running": false,
            };
            this.zmotorValue = "1";
        }
        if (value == "2") {
            this.zmotor = {
                "stopped": false,
                "paused": false,
                "running": true,
            };
            this.zmotorValue = "2";
        }
    };
    AdvancedSettingModalPage.prototype.machinestandbystatusSelect = function (value) {
        console.log(value);
        if (value == "No") {
            this.machinestandby = {
                "no": true,
                "yes": false,
            };
            this.machinestandbyValue = "No";
        }
        if (value == "Yes") {
            this.machinestandby = {
                "no": false,
                "yes": true,
            };
            this.machinestandbyValue = "Yes";
        }
    };
    AdvancedSettingModalPage.prototype.zpositionstatusSelect = function (value) {
        console.log(value);
        if (value == "TOP") {
            this.zposition = {
                "TOP": true,
                "BOTTOM": false,
            };
            this.zpositionValue = "TOP";
        }
        if (value == "BOTTOM") {
            this.zposition = {
                "TOP": false,
                "BOTTOM": true,
            };
            this.zpositionValue = "BOTTOM";
        }
    };
    AdvancedSettingModalPage.prototype.lampstatusSelect = function (value) {
        console.log(value);
        if (value == "0") {
            this.lampstatus = {
                "off": true,
                "yes": false,
            };
            this.lampstatusValue = "0";
        }
        if (value == "1") {
            this.lampstatus = {
                "off": false,
                "yes": true,
            };
            this.lampstatusValue = "1";
        }
    };
    AdvancedSettingModalPage.prototype.fanValueSelect = function (value) {
        console.log(value);
        if (value == "0") {
            this.fan = {
                "off": true,
                "yes": false,
            };
            this.fanValue = "0";
        }
        if (value == "1") {
            this.fan = {
                "off": false,
                "yes": true,
            };
            this.fanValue = "1";
        }
    };
    AdvancedSettingModalPage.prototype.saveData = function () {
        var _this = this;
        var data = {
            "standby": this.machinestandbyValue,
            "z_position": this.zpositionValue,
            "tilt_motor": this.tiltmotorVlaue,
            "z_motor": this.zmotorValue,
            "lamp_status": this.lampstatusValue,
            "fan": this.fanValue,
            "machine_status": this.machinestatus,
            "printer_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.addAdvanceSettingDetail(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.presentToast(res.message);
                _this.viewCtrl.dismiss();
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    /// Toast function ////
    AdvancedSettingModalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    AdvancedSettingModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advancedSettingModal',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/advancedSettingModal/advancedSettingModal.html"*/'<ion-content >\n\n    <div padding>\n\n        <ion-grid class="">\n\n            <div text-uppercase text-start margin-top margin-bottom class="fs16 fw500 textTheme">\n\n                system update\n\n            </div>\n\n            \n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <span fixed text-uppercase class="fs10 fw600 lh3">machine standby:</span>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">yes</span>\n\n                    <ion-radio checked="{{machinestandby.yes}}" (click)="machinestandbystatusSelect(\'Yes\')" value="yes" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">no</span>\n\n                    <ion-radio checked="{{machinestandby.no}}" (click)="machinestandbystatusSelect(\'No\')" value="no" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <span fixed text-uppercase class="fs10 fw600 lh3">z motor </span>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">stopped</span>\n\n                    <ion-radio checked="{{zmotor.stopped}}" (click)="zmotorstatusSelect(\'0\')" value="stopped" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">paused</span>\n\n                    <ion-radio checked="{{zmotor.paused}}" (click)="zmotorstatusSelect(\'1\')" value="paused" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">running</span>\n\n                    <ion-radio checked="{{zmotor.running}}" (click)="zmotorstatusSelect(\'2\')" value="running" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <span fixed text-uppercase class="fs10 fw600 lh3">tilt motor </span>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">stopped</span>\n\n                    <ion-radio checked="{{tiltmotor.stopped}}" (click)="tiltmotorstatusSelect(\'0\')" value="stopped" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">paused</span>\n\n                    <ion-radio checked="{{tiltmotor.paused}}" (click)="tiltmotorstatusSelect(\'1\')" value="paused" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">running</span>\n\n                    <ion-radio checked="{{tiltmotor.running}}" (click)="tiltmotorstatusSelect(\'2\')" value="running" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n            </ion-row>\n\n            <!--  -->\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <span fixed text-uppercase class="fs10 fw600 lh3">z position </span>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">top</span>\n\n                    <ion-radio checked="{{zposition.TOP}}" (click)="zpositionstatusSelect(\'TOP\')" value="top" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">bottom</span>\n\n                    <ion-radio checked="{{zposition.BOTTOM}}" (click)="zpositionstatusSelect(\'BOTTOM\')" value="bottom" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <span fixed text-uppercase class="fs10 fw600 lh3">lamp status </span>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">yes</span>\n\n                    <ion-radio checked="{{lampstatus.yes}}" (click)="lampstatusSelect(\'1\')" value="yes" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">no</span>\n\n                    <ion-radio checked="{{lampstatus.off}}" (click)="lampstatusSelect(\'0\')" value="no" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <span fixed text-uppercase class="fs10 fw600 lh3">fan </span>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">yes</span>\n\n                    <ion-radio checked="{{fan.yes}}" (click)="fanValueSelect(\'1\')"  value="yes" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <span text-uppercase class="fs10 fw500 lh3">no</span>\n\n                    <ion-radio checked="{{fan.off}}" (click)="fanValueSelect(\'0\')" value="no" class="radioCss"></ion-radio>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">machine status </ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="text" value="{{machinestatus}}" class="input_css" placeholder="printing" readonly="true"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n                <!-- ---------- -->\n\n            <!-- <div text-uppercase text-start margin-top margin-bottom class="fs16 fw500">\n\n                WIFI (Internet)\n\n            </div>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">network selection:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-input type="text" value="" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-6>\n\n                        <ion-label fixed text-uppercase class="fs10 fw600">password:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-input type="password" value="" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row> -->\n\n            <!-- 2 -->\n\n            <!-- <div text-uppercase text-start margin-top margin-bottom class="fs16 fw500 ">\n\n                platform authentication\n\n            </div>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <ion-label fixed text-uppercase class="fs10 fw600">user email:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="text" value="" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row class="mtop_minus15px">\n\n                <ion-col col-4>\n\n                        <ion-label fixed text-uppercase class="fs10 fw600">user password:</ion-label>\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <ion-input type="password" value="" class="input_css"></ion-input>\n\n                </ion-col>\n\n            </ion-row> -->\n\n        </ion-grid>\n\n        <div text-center class="">\n\n            <button ion-button class="logoutButton border-black" (click)="saveData()">\n\n                save\n\n            </button>\n\n        </div>    \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/advancedSettingModal/advancedSettingModal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], AdvancedSettingModalPage);
    return AdvancedSettingModalPage;
}());

//# sourceMappingURL=advancedSettingModal.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return platformChangeModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var platformChangeModalPage = /** @class */ (function () {
    function platformChangeModalPage(navCtrl, statusBar, viewCtrl, loadingCtrl, userService, NavParams, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.NavParams = NavParams;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.Email = NavParams.get("Email");
        console.log(this.Email);
    }
    platformChangeModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.viewCtrl.dismiss();
        }, 0);
    };
    platformChangeModalPage.prototype.saveData = function () {
        var _this = this;
        console.log(this.Email);
        if (this.Email == "") {
            this.presentToast('Please Enter Email!');
            return false;
        }
        var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!(emailfilter.test(this.Email))) {
            this.presentToast('Please enter a valid Email ID');
            return false;
        }
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id,
            "extra_email": this.Email
        };
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.UpdateEmailDetails(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.userInfo.additional_email = _this.Email;
                localStorage.setItem("UserInfo", JSON.stringify(_this.userInfo));
                _this.viewCtrl.dismiss();
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    /// Toast function ////
    platformChangeModalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    platformChangeModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-platformChange',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/platformChange/platformChange.html"*/'<ion-content class="sample-modal-page">\n\n    <div padding>\n\n        <div text-uppercase text-center margin-top margin-bottom class="fs16 fw500 textTheme">\n\n           Update Mail\n\n        </div>\n\n        <ion-row class="mtop25 mtop_minus15px">\n\n            <ion-col col-4>\n\n                <ion-label fixed text-uppercase class="fs10 fw600">Email:</ion-label>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n                <ion-input type="text" value="" [(ngModel)]="Email" class="input_css"></ion-input>\n\n            </ion-col>\n\n        </ion-row>\n\n        <div text-center class="padding10">\n\n            <button ion-button class="logoutButton border-black" (click)="saveData()">\n\n                save\n\n            </button>\n\n        </div>    \n\n        <!-- <div class="parentDiv">\n\n            <div text-center class="childDiv">\n\n                <p class="fs14 fw500">www.xxxxx.com/faq</p>\n\n            </div>\n\n        </div>     -->\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/modal/platformChange/platformChange.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], platformChangeModalPage);
    return platformChangeModalPage;
}());

//# sourceMappingURL=platformChange.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(252);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_http_helper__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_stripe_ngx__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_ngx__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_discover_discover__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_category_category__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_collection_collection__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_share_share__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_visitLink_visitLink__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_itemName_itemName__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_myOrder_myOrder__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_psr_psr__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_paymentDetails_paymentDetails__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_support_support__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_subscriptionPack_subscriptionPack__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_slicingSetting_slicingSetting__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_forgetPwd_forgetPwd__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_categoryFilter_categoryFilter__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_sortBy_sortBy__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_productReturnNew_productReturnNew__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_psrGenerate_psrGenerate__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_supportNew_supportNew__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_supportRequestNew_supportRequestNew__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_shippingDetails_shippingDetails__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_modal_shippingAddressModal_shippingAddressModal__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_modal_userDetailsModal_userDetailsModal__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_modal_information_information__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_modal_languageSettingModal_languageSettingModal__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_modal_paymentDetailsModal_paymentDetailsModal__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_modal_selectSubscription_selectSubscription__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_modal_printModal_printModal__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_modal_platformChange_platformChange__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_modal_advancedSettingModal_advancedSettingModal__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// 






//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

// 



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_category_category__["a" /* categoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_collection_collection__["a" /* collectionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cart_cart__["a" /* cartPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_share_share__["a" /* sharePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_visitLink_visitLink__["a" /* visitLinkPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_itemName_itemName__["a" /* itemNamePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_myOrder_myOrder__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_psr_psr__["a" /* PSRPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_paymentDetails_paymentDetails__["a" /* PaymentDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_support_support__["a" /* supportPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_subscriptionPack_subscriptionPack__["a" /* SubscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_slicingSetting_slicingSetting__["a" /* SlicingSettingPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_forgetPwd_forgetPwd__["a" /* ForgetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_categoryFilter_categoryFilter__["a" /* categoryFilterPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_sortBy_sortBy__["a" /* sortByPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_productReturnNew_productReturnNew__["a" /* ProductReturnNewPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_psrGenerate_psrGenerate__["a" /* PSRGeneratePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_supportNew_supportNew__["a" /* SupportNewPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_supportRequestNew_supportRequestNew__["a" /* SupportRequestNewPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_shippingDetails_shippingDetails__["a" /* ShippingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_modal_shippingAddressModal_shippingAddressModal__["a" /* ShippingAddressModalPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_modal_userDetailsModal_userDetailsModal__["a" /* UserDetailsModalPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_modal_information_information__["a" /* InformationModalPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_modal_languageSettingModal_languageSettingModal__["a" /* LanguageSettingModalPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_modal_paymentDetailsModal_paymentDetailsModal__["a" /* PaymentDetailsModalPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_modal_selectSubscription_selectSubscription__["a" /* SelectSubscriptionModalPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_modal_printModal_printModal__["a" /* PrintModalPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_modal_advancedSettingModal_advancedSettingModal__["a" /* AdvancedSettingModalPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_modal_platformChange_platformChange__["a" /* platformChangeModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_discover_discover__["a" /* DiscoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_category_category__["a" /* categoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_collection_collection__["a" /* collectionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cart_cart__["a" /* cartPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_share_share__["a" /* sharePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_visitLink_visitLink__["a" /* visitLinkPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_itemName_itemName__["a" /* itemNamePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_myOrder_myOrder__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_psr_psr__["a" /* PSRPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_paymentDetails_paymentDetails__["a" /* PaymentDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_support_support__["a" /* supportPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_subscriptionPack_subscriptionPack__["a" /* SubscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_slicingSetting_slicingSetting__["a" /* SlicingSettingPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_forgetPwd_forgetPwd__["a" /* ForgetPwdPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_categoryFilter_categoryFilter__["a" /* categoryFilterPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_sortBy_sortBy__["a" /* sortByPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_productReturnNew_productReturnNew__["a" /* ProductReturnNewPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_psrGenerate_psrGenerate__["a" /* PSRGeneratePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_supportNew_supportNew__["a" /* SupportNewPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_supportRequestNew_supportRequestNew__["a" /* SupportRequestNewPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_shippingDetails_shippingDetails__["a" /* ShippingDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_modal_shippingAddressModal_shippingAddressModal__["a" /* ShippingAddressModalPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_modal_userDetailsModal_userDetailsModal__["a" /* UserDetailsModalPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_modal_information_information__["a" /* InformationModalPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_modal_languageSettingModal_languageSettingModal__["a" /* LanguageSettingModalPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_modal_paymentDetailsModal_paymentDetailsModal__["a" /* PaymentDetailsModalPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_modal_selectSubscription_selectSubscription__["a" /* SelectSubscriptionModalPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_modal_printModal_printModal__["a" /* PrintModalPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_modal_advancedSettingModal_advancedSettingModal__["a" /* AdvancedSettingModalPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_modal_platformChange_platformChange__["a" /* platformChangeModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_4__helper_http_helper__["a" /* HttpHelper */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_stripe_ngx__["a" /* Stripe */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_ngx__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_discover_discover__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_psr_psr__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_collection_collection__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_supportNew_supportNew__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_shippingDetails_shippingDetails__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        // SlicingSettingPage
        this.counter = 0;
        this.loginStatus = localStorage.getItem("LoginStatus");
        if (this.loginStatus == "yes") {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        }
        //localStorage.setItem("BaseUrl","https://admin.3dhom.com/");
        localStorage.setItem("BaseUrl", "http://isysnexttechnofuture.in/printer_software/");
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'Home', component: HomePage, icon: "book" },
            { title: 'Browse', component: __WEBPACK_IMPORTED_MODULE_5__pages_discover_discover__["a" /* DiscoverPage */], icon: "assets/icon/app_icon/brows.png" },
            { title: 'My Collection', component: __WEBPACK_IMPORTED_MODULE_8__pages_collection_collection__["a" /* collectionPage */], icon: "assets/icon/app_icon/callection.png" },
            { title: 'Personalised Services', component: __WEBPACK_IMPORTED_MODULE_7__pages_psr_psr__["a" /* PSRPage */], icon: "assets/icon/app_icon/personal.png" },
            { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_11__pages_shippingDetails_shippingDetails__["a" /* ShippingDetailsPage */], icon: "assets/icon/app_icon/seting.png" },
            { title: 'Support', component: __WEBPACK_IMPORTED_MODULE_10__pages_supportNew_supportNew__["a" /* SupportNewPage */], icon: "assets/icon/app_icon/help.png" },
            { title: 'Cart', component: __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__["a" /* cartPage */], icon: "assets/icon/app_icon/cart.png" },
            { title: 'Log Out', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: "assets/icon/app_icon/help.png" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#0b7b94');
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.component == __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]) {
            var alert_1 = this.alertCtrl.create({
                title: 'Log Out App!',
                message: 'Do you want to Log Out from the app?',
                buttons: [{
                        text: 'Log Out',
                        handler: function () {
                            localStorage.clear();
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
                        }
                    }, {
                        text: 'Cancel',
                        handler: function () {
                        }
                    }]
            });
            alert_1.present();
        }
        else {
            // Reset the content nav to have just this page
            // we wouldn't want the back button to show in this scenario
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header no-border>\n\n    <ion-navbar transparent class="themColor">\n\n      <ion-title>\n\n        <div text-center>\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <!-- <ion-icon name="book"></ion-icon>\n\n  <ion-icon name="search"></ion-icon>\n\n  <ion-icon name="heart"></ion-icon>\n\n  <ion-icon name="cog"></ion-icon> -->\n\n\n\n  <ion-content class="themColor">\n\n    <!-- <ion-list> -->\n\n      <button menuClose icon-start ion-item *ngFor="let p of pages" (click)="openPage(p)" class="button_menu black fs20 fw400" >\n\n        <img width="20px" height="20px" src="{{p.icon}}" style="margin-right: 10px;\n\n        margin-bottom: -5px;"/>\n\n        <span style="font-weight: 600;">{{p.title}}</span>\n\n      </button>\n\n    <!-- </ion-list> -->\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var sharePage = /** @class */ (function () {
    function sharePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    sharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-share',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/share/share.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent class="themColor white">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" class="white"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n      <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bgDark">\n\n  <div text-center class="mtop15 mbot20">\n\n      <button ion-button class="normalButton textColor">Share</button>\n\n  </div>\n\n  <ion-card class="mbot20">\n\n    <ion-row class="padding10">\n\n      <ion-col col-3>\n\n          <div style="text-align: -webkit-center;">\n\n              <img src="../../assets/icon/twitter.png" style="width: 45px;border-radius: 50px;">\n\n          </div>\n\n      </ion-col>\n\n      <ion-col col-9 class="paddingTop17">\n\n          <h2 class="textColor">Twitter</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card class="mbot20">\n\n    <ion-row class="padding10">\n\n      <ion-col col-3>\n\n          <div style="text-align: -webkit-center;">\n\n              <img src="../../assets/icon/facebook.png" style="width: 45px;border-radius: 50px;">\n\n          </div>\n\n      </ion-col>\n\n      <ion-col col-9 class="paddingTop17">\n\n          <h2 class="textColor">Facebook</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card class="mbot20">\n\n    <ion-row class="padding10">\n\n      <ion-col col-3>\n\n          <div style="text-align: -webkit-center;">\n\n              <img src="../../assets/icon/google.png" style="width: 45px;border-radius: 50px;">\n\n          </div>\n\n      </ion-col>\n\n      <ion-col col-9 class="paddingTop17">\n\n          <h2 class="textColor">Google+</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  \n\n  <ion-card class="mbot20">\n\n    <ion-row class="padding10">\n\n      <ion-col col-3>\n\n          <div style="text-align: -webkit-center;">\n\n              <img src="../../assets/icon/evernote.png" style="width: 45px;border-radius: 50px;">\n\n          </div>\n\n      </ion-col>\n\n      <ion-col col-9 class="paddingTop17">\n\n          <h2 class="textColor">Evernote</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <div text-center>\n\n      <button ion-button class="ShareButton" (click)="home()">Share</button>\n\n  </div>\n\n  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/share/share.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], sharePage);
    return sharePage;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return visitLinkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var visitLinkPage = /** @class */ (function () {
    function visitLinkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    visitLinkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visitLink',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/visitLink/visitLink.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent class="themColor white">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" class="white"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n      <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bgDark">\n\n  <ion-card class="cardDesign mbot20">\n\n    <h6 class="fs10">dlajfsjdfjksdfjkfbfsbkjsbsdkjfbjksfbkjsfbkjsbfksbfksbkbkbksbkfksbbsksb</h6>\n\n    <h6 class="fs10 mtop10">dlajfsjdfjksdfjkfbfsbkj</h6>\n\n    <h6 class="fs10">dlajfsjdfjksdfjkfbfsbkj</h6>\n\n    <h6 class="fs10">dlajfsjdfjksdfjkfbfsbkj</h6>\n\n  </ion-card>\n\n  <ion-card class="priceCard mbot20">\n\n    <h3 class="fs18">Visit Link</h3>\n\n  </ion-card>\n\n  \n\n  <div text-center>\n\n    <h6 class="fw500">Explore More</h6>\n\n  </div>\n\n  <ion-card class="mbot20 mtop25">\n\n    <ion-row class="padding10">\n\n      <ion-col col-4>\n\n          <div style="text-align: -webkit-center;">\n\n              <img src="../../assets/imgs/hercul.jpg" style="width: 45px;border-radius: 50px;">\n\n          </div>\n\n      </ion-col>\n\n      <ion-col col-8 class="paddingTop17">\n\n          <h2 class="fw500 textColor">Boxes  - Plain</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card class="mbot20">\n\n    <ion-row class="padding10">\n\n      <ion-col col-4>\n\n          <div style="text-align: -webkit-center;">\n\n              <img src="../../assets/imgs/hercul.jpg" style="width: 45px;border-radius: 50px;">\n\n          </div>\n\n      </ion-col>\n\n      <ion-col col-8 class="paddingTop17">\n\n          <h2 class="fw500 textColor">Boxes  - Fantasy</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card class="mbot20">\n\n    <ion-row class="padding10">\n\n      <ion-col col-4>\n\n          <div style="text-align: -webkit-center;">\n\n              <img src="../../assets/imgs/hercul.jpg" style="width: 45px;border-radius: 50px;">\n\n          </div>\n\n      </ion-col>\n\n      <ion-col col-8 class="paddingTop17">\n\n          <h2 class="fw500 textColor">Boxes  - Arts</h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/visitLink/visitLink.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], visitLinkPage);
    return visitLinkPage;
}());

//# sourceMappingURL=visitLink.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return supportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var supportPage = /** @class */ (function () {
    function supportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    supportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/support/support.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent class="themColor white">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" class="white"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n      <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bgDark">\n\n  <ion-card class="mtop10 backCard cardShadow">\n\n    <div>\n\n      <ion-row class="rowBorder padding10">\n\n        <ion-col col-5>\n\n          <img src=\'../../assets/icon/setting.png\'>\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          <p class="fs10">3D Model Dimantion : 29*15*25</p>\n\n          <p class="fs10">Scale : 120%</p>\n\n          <p class="fs10">Filement : ABS</p>\n\n          <p class="fs10">Filement Weight : 52grams </p>\n\n          <p class="fs10">Nr. of files : 3</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div text-center>\n\n        <button ion-button class="fs10 NewRequestButton">Make a New Request</button>\n\n    </div>\n\n    <div>\n\n      <ion-row class="textUper">\n\n        <ion-col col-4 text-center class="colback">\n\n          <p class="fs10">22/22/2019</p>\n\n          <p class="fs10">3:30 PM</p>\n\n        </ion-col>\n\n        <ion-col col-8  text-center class="colback">\n\n          <h4>Request Title</h4>\n\n          <ion-checkbox class="checkBox" checked="true"></ion-checkbox>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div text-justify padding>\n\n      <p class="fs12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n\n      <p class="fs12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n\n    </div>\n\n    <div text-center class="mbot20">\n\n        <h2>Attachement : ancd.jpg</h2>\n\n        <button ion-button class="fs10 NewRequestButton">Answer</button>\n\n    </div>\n\n    <div>\n\n      <ion-row class="textUper">\n\n        <ion-col col-4 text-center class="colback">\n\n          <p class="fs10">22/22/2019</p>\n\n          <p class="fs10">3:30 PM</p>\n\n        </ion-col>\n\n        <ion-col col-8  text-center class="colback">\n\n          <h4>Request Title</h4>\n\n          <ion-checkbox class="checkBox" checked="true"></ion-checkbox>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    <div text-justify padding>\n\n      <p class="fs12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n\n      <p class="fs12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n\n    </div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], supportPage);
    return supportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscriptionPage = /** @class */ (function () {
    function SubscriptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subscriptionPack',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/subscriptionPack/subscriptionPack.html"*/'<!-- <ion-header no-border>\n\n  <ion-navbar transparent class="themColor white">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" class="white"></ion-icon>\n\n    </button>\n\n    <div text-center>\n\n      <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center>\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button class="headerButton">\n\n          <ion-icon name="share-alt" class="white"></ion-icon>\n\n        </button>\n\n      </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content class="bgDark">\n\n  <div class="margin_top_10">\n\n    <ion-card class="mbot20">\n\n      <div text-center class="padding15">\n\n        <p text-uppercase class="fs16 fw600">select subscription type</p>\n\n      </div>\n\n      <ion-row class="border-top">\n\n        <ion-col col-3 class="padding10 border-black border-left-none">\n\n          <div text-center>\n\n            <ion-checkbox color="dark" checked="true"></ion-checkbox>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-3 class="border-black">\n\n          <div text-center>\n\n            <p class="fs18 fw600 position">$5.00</p>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6 class="border-black border-right-none">\n\n          <div text-center>\n\n            <p text-uppercase class="fs14 fw500" style="width: 60%;\n\n            margin: auto;">billing <span class="fs18 fw500">month</span></p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!--  -->\n\n      <ion-row>\n\n        <ion-col col-3 class="padding10 border-black border-left-none">\n\n          <div text-center>\n\n            <ion-checkbox color="dark" checked="true"></ion-checkbox>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-3 class="border-black">\n\n          <div text-center>\n\n            <p class="fs18 fw600 position">$12.00</p>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6 class="border-black border-right-none">\n\n          <div text-center>\n\n            <p text-uppercase class="fs14 fw500" style="width: 60%;\n\n            margin: auto;">billing <span class="fs18 fw500">quarter</span></p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!--  -->\n\n      <ion-row>\n\n        <ion-col col-3 class="padding10 border-black border-left-none">\n\n          <div text-center>\n\n            <ion-checkbox color="dark" checked="true"></ion-checkbox>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-3 class="border-black">\n\n          <div text-center>\n\n            <p class="fs18 fw600 position">$25.00</p>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6 class="border-black border-right-none">\n\n          <div text-center>\n\n            <p text-uppercase class="fs14 fw500" style="width: 60%;\n\n            margin: auto;">billing <span class="fs18 fw500">semester</span></p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!--  -->\n\n      <ion-row style="margin-bottom: 25px;" class="border-bottom">\n\n        <ion-col col-3 class="padding10 border-black border-left-none">\n\n          <div text-center>\n\n            <ion-checkbox color="dark" checked="true"></ion-checkbox>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-3 class="border-black">\n\n          <div text-center>\n\n            <p class="fs18 fw600 position">$50.00</p>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-6 class="border-black border-right-none">\n\n          <div text-center>\n\n            <p text-uppercase class="fs14 fw500" style="width: 60%;\n\n            margin: auto;">billing <span class="fs18 fw500">year</span></p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n    <div>\n\n      <div text-center class="expiry_badge">\n\n        <p text-uppercase class="fs14 fw600">\n\n          new expiry date : 22 may 2019\n\n        </p>\n\n      </div>\n\n      <div text-center>\n\n        <button ion-button class="newRequest">proceed to payment</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/subscriptionPack/subscriptionPack.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SubscriptionPage);
    return SubscriptionPage;
}());

//# sourceMappingURL=subscriptionPack.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paymentDetails_paymentDetails__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var cartPage = /** @class */ (function () {
    function cartPage(navCtrl, navParams, loadingCtrl, userService, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.imgUrl = localStorage.getItem("BaseUrl");
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.loadProduct();
    }
    cartPage_1 = cartPage;
    cartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 0);
    };
    cartPage.prototype.loadProduct = function () {
        var _this = this;
        console.log(this.userInfo);
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.cart(data).subscribe(function (res) {
            loading.dismiss();
            _this.cartData = res.data;
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.cartData = res.data;
                if (_this.cartData == '') {
                    _this.presentToast(res.message);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                _this.amountValue();
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            _this.presentToast("Please check Your Internet");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        });
    };
    // -------AmoutFun--------
    cartPage.prototype.amountValue = function () {
        for (var i = 0; i < this.cartData.length; i++) {
            var Amount = 0;
            Amount = this.cartData[i].price * this.cartData[i].qty;
            this.cartData[i].Amount = Amount;
        }
        this.TotalAmountValue();
    };
    // -------AmoutFun--------
    // -------TotalAmoutFun--------
    cartPage.prototype.TotalAmountValue = function () {
        this.totalAmount = 0;
        for (var i = 0; i < this.cartData.length; i++) {
            this.totalAmount = this.totalAmount + this.cartData[i].Amount;
        }
    };
    // -------TotalAmoutFun--------
    // -------QutyIncreeFun--------
    cartPage.prototype.QutyIncree = function (item, id) {
        if (item.file_id != '0') {
            if (item.file_type == "2") {
                for (var i = 0; i < this.cartData.length; i++) {
                    if (this.cartData[i].cart_id == id) {
                        this.cartData[i].qty++;
                        this.amountValue();
                    }
                }
            }
            else {
                this.presentToast("QTY will be only one");
            }
        }
        else {
            this.presentToast("QTY will be only one");
        }
    };
    // -------QutyIncreeFun--------
    // -------QtyDecressFun--------
    cartPage.prototype.QutyDecress = function (item, id) {
        if (item.file_id != '0') {
            if (item.file_type == "2") {
                for (var i = 0; i < this.cartData.length; i++) {
                    if (this.cartData[i].cart_id == id) {
                        if (this.cartData[i].qty < '1') {
                            this.cartData[i].qty--;
                            this.amountValue();
                        }
                        else {
                            this.presentToast("minimum 1 Quentity required");
                        }
                    }
                }
            }
            else {
                this.presentToast("QTY will be only one");
            }
        }
        else {
            this.presentToast("QTY will be only one");
        }
    };
    // -------QtyDecressFun--------
    cartPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    // -------DeleteFun--------
    cartPage.prototype.Delete = function (id) {
        var _this = this;
        var data = {
            "cart_id": id,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.DeleteFormCart(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                console.log(res);
                _this.presentToast(res.message);
                _this.loadProduct();
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            loading.dismiss();
        });
    };
    // -------DeleteFun--------
    //--------GotToCart--------
    cartPage.prototype.Gocart = function () {
        this.navCtrl.setRoot(cartPage_1);
    };
    //--------GotToCart--------
    //------Go payment------
    cartPage.prototype.goPayment = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__paymentDetails_paymentDetails__["a" /* PaymentDetailsPage */]);
    };
    //------Go payment------
    /// Toast function ////
    cartPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    cartPage = cartPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/cart/cart.html"*/'\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button style="background:transparent;" (click)="back()">\n\n              <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n          </button>\n\n      </ion-buttons> \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div>\n\n    <div text-center class="">\n\n        <h3 class="textColor" (click)=\'Gocart()\'>Cart</h3>\n\n    </div>\n\n    \n\n    <ion-grid no-padding>\n\n      <ion-row>\n\n        <!-- <ion-col col-6 no-padding>\n\n          <ion-card >\n\n            <img src="/assets/imgs/hercul.jpg" alt="logo" style="height:70%;" (click)="subCat()"/>\n\n            <div class="opctyDiv">\n\n              <h2 class="opctyText">Category</h2>\n\n            </div>\n\n            <div class="iconDiv">\n\n              <ion-row>\n\n                <ion-col col-6>\n\n                  <div>\n\n                      <p>Price</p>\n\n                      <ion-icon name="close" class="iconClass" (click)="Delete()"></ion-icon>\n\n                  </div>\n\n                </ion-col>\n\n                <ion-col col-6 >\n\n                  \n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </ion-card>\n\n        </ion-col> -->\n\n        <ion-col col-6 no-padding *ngFor="let item of cartData">\n\n          <ion-card>\n\n            <img src="{{imgUrl}}{{item.image}}" alt="logo" style="height: 70%;" (click)="subCat()"/>\n\n            <div class="opctyDiv">\n\n              <h2 class="opctyText">{{item.name}}</h2>\n\n            </div>\n\n            <div class="iconDiv">\n\n              <ion-row>\n\n                <ion-col col-6 style="padding: 1px;">\n\n                  <div>\n\n                    <p>Price: {{item.price}} ₹</p>\n\n                    <ion-row>\n\n                      <ion-col col-4 class="padding0">\n\n                          <ion-icon name="arrow-dropleft" class="iconClass"(click)="QutyDecress(item,item.cart_id)"></ion-icon>\n\n                      </ion-col>\n\n                      <ion-col col-4 text-left class="padding0">\n\n                      <span class="textColor">{{item.qty}}</span>\n\n                      </ion-col>\n\n                      <ion-col col-4 class="padding0">\n\n                          <ion-icon name="arrow-dropright" class="iconClass" (click)="QutyIncree(item,item.cart_id)"></ion-icon>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                  </div>\n\n                </ion-col>\n\n                <ion-col col-6 style="padding: 1px;">\n\n                  <div class="secondRow" style="padding-top: 20px;" (click)="Delete(item.cart_id)">\n\n                      <ion-icon name="close" class="iconClass"></ion-icon>\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <div text-center >\n\n        <h3 class="textColor">SubTotal</h3>\n\n        <div style="padding: 10px 50px 5px 50px;">\n\n            <div class="borddrBot textColor fs16 fw600">{{totalAmount}} ₹</div>\n\n        </div>\n\n    </div>\n\n    <div text-center class="mtop10">\n\n        <span class="textColor fs14">lorem ipsum</span><br>\n\n        <span class="textColor fs14">lorem ipsum</span><br>\n\n        <span class="textColor fs20">lorem ipsum</span>\n\n    </div>\n\n    <div text-center class="rowHeight">\n\n        <button class="themColor DiscoverButton" (click)="goPayment()">Proceed to Payment</button>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], cartPage);
    return cartPage;
    var cartPage_1;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemNamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_printModal_printModal__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var itemNamePage = /** @class */ (function () {
    function itemNamePage(navCtrl, navParams, modalCtrl, loadingCtrl, userService, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.userInfo = [];
        this.ShowData = [];
        this.otherFiles = [];
    }
    itemNamePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* categoryPage */]);
        }, 0);
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.imgUrl = localStorage.getItem("BaseUrl");
        this.MaincatId = localStorage.getItem("MainCatId");
        this.SubCatId = localStorage.getItem("SubcatId");
        this.FileId = localStorage.getItem("FileId");
        this.FileLoading();
    };
    itemNamePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
    };
    // subCatLoading(){
    //   let data={
    //     "sub_cat_id":this.SubCatId,
    //     "country": this.userInfo.country,
    //     "user_id" : this.userInfo.user_id
    //   }
    //   console.log(data);
    //   let loading = this.loadingCtrl.create({
    //       content: 'Checking SubCategory...'
    //   });
    //   loading.present();
    //   this.userService.SubCategoryDetails(data).subscribe(res=>{
    //     loading.dismiss();
    //     this.ShowData = [];
    //     this.otherFiles = [];
    //     if(res.status=="true" || res.status== true){
    //       this.ShowData = res.data;
    //       this.otherFiles = res.files;
    //       console.log(this.ShowData);
    //       console.log(this.otherFiles);
    //     }else{
    //     }
    //   },err=>{
    //     loading.dismiss();
    //     console.log(err);
    //   })
    //   //this.navCtrl.setRoot(home2Page);
    // }
    // -------FileDetailsLoading--------
    itemNamePage.prototype.FileLoading = function () {
        var _this = this;
        var through = localStorage.getItem("through");
        this.data = [];
        if (through == "Sub") {
            this.data = {
                "file_id": this.FileId,
                "cat_id": '0',
                "sub_cat_id": this.SubCatId,
                "country": this.userInfo.country,
                "user_id": this.userInfo.user_id
            };
            console.log(this.data);
        }
        else {
            this.data = {
                "file_id": this.FileId,
                "cat_id": this.MaincatId,
                "sub_cat_id": '0',
                "country": this.userInfo.country,
                "user_id": this.userInfo.user_id
            };
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.FileDetails(this.data).subscribe(function (res) {
            loading.dismiss();
            _this.ShowData = [];
            _this.otherFiles = [];
            if (res.status == "true" || res.status == true) {
                _this.ShowData = res.data;
                _this.otherFiles = res.files;
                console.log(_this.ShowData);
                console.log(_this.otherFiles);
                _this.MatrialLoad();
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    // -------FileDetailsLoading--------
    // -------MatrialListLoad--------
    itemNamePage.prototype.MatrialLoad = function () {
        var _this = this;
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(this.data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.materialList(this.data).subscribe(function (res) {
            loading.dismiss();
            _this.materialListArray = [];
            if (res.status == "true" || res.status == true) {
                _this.materialListArray = res.data;
                _this.materialValue = _this.materialListArray[0].id;
                console.log(_this.materialListArray);
                console.log(_this.materialValue);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    // -------MatrialListLoad--------
    // -------AddToCartFun--------
    itemNamePage.prototype.cart = function (item) {
        var _this = this;
        var data = {
            "file_id": item.id,
            "unique_id": item.unique_id,
            "name": item.name,
            "sub_cat_id": "0",
            "cat_id": "0",
            "price": item.price,
            "qty": "1",
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.AddToCart(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.presentToast(res.message);
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    // -------AddToCartFun--------
    // -------GoToPrintMOdel--------
    itemNamePage.prototype.print = function (item) {
        var data = {
            "file_id": item.id,
            "materialId": this.materialValue
        };
        console.log(this.materialValue);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_printModal_printModal__["a" /* PrintModalPage */], { data: data });
        modal.present();
    };
    // -------GoToPrintMOdel--------
    itemNamePage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* categoryPage */]);
    };
    itemNamePage.prototype.goToCart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* cartPage */]);
    };
    /// Toast function ////
    itemNamePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], itemNamePage.prototype, "slides", void 0);
    itemNamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-itemName',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/itemName/itemName.html"*/'\n\n\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button style="background:transparent;" (click)="back()">\n\n            <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n        </button>\n\n      </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- ------GO TO Card Button------- -->\n\n  <div class="buttonDiv topButton">\n\n    <button class="themColor DiscoverButton" (click)="goToCart()">Go to Cart</button>\n\n  </div>\n\n  <!-- ------GO TO Card Button------- -->\n\n  <div *ngFor="let item of ShowData">\n\n    <div text-center>\n\n        <h3 class="textColor fw600 upcase">{{item.name}}</h3>\n\n    </div>\n\n    <div class="padding10" >\n\n      <!-- ------slider------ -->\n\n      <ion-slides style="height: 180px !important;" loop="true" speed="1000" pager="true" paginationType="bullets" (ionSlideDidChange)="slideChanged()">\n\n          <ion-slide *ngFor="let itemImage of item.image" >\n\n            <video *ngIf="itemImage.file_type != \'Image\'" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer borderReds HW100">\n\n              <source src="{{imgUrl}}{{itemImage.img}}" type="video/mp4"/>\n\n            </video>\n\n            <img *ngIf="itemImage.file_type == \'Image\'" src="{{imgUrl}}{{itemImage.img}}" alt="logo" class="hw100"/>\n\n        </ion-slide>\n\n      </ion-slides>\n\n      <!-- ------slider------ -->\n\n      <div text-center class="mtop10">\n\n        <span class="textColor fw500">"{{item.description}}"</span>\n\n      </div>\n\n      <!-- ------Forsale is yes------- -->\n\n      <div *ngIf="item.main_cat_forsale == \'yes\'">\n\n          <div *ngIf="item.file_type == \'1\' || item.file_type == \'2\'">\n\n            <!-- ------ Add to Cart Button------- -->\n\n            <div *ngIf="item.model_type == \'2\' || item.model_type == \'3\'">\n\n              <div class="buttonDiv">\n\n                <button class="themColor DiscoverButton" (click)="Cart(item)">Add to Cart</button>\n\n              </div>\n\n            </div>\n\n            <!-- ------Add to Cart Button------- -->\n\n            <!-- ------Select List and Print Button------- -->\n\n            <div *ngIf="item.file_type == \'1\'">\n\n              <div *ngIf="item.model_type == \'1\' || item.model_type == \'4\'">\n\n                  <div text-center style="padding: 0px 45px 0px 45px;">\n\n                      <p class="upcase">Choose Material</p>\n\n                      <ion-item style="border:1px solid;">\n\n                        <!-- //<ion-label class="upcase">PLA</ion-label> -->\n\n                        <ion-select [(ngModel)]="materialValue">\n\n                          <ion-option *ngFor="let data of materialListArray" Selected value="{{data.id}}">{{data.name}}</ion-option> \n\n                        </ion-select>\n\n                      </ion-item>\n\n                  </div>\n\n                  <div class="buttonDiv">\n\n                    <button class="themColor DiscoverButton" (click)="print(item)">Print</button>\n\n                  </div>\n\n              </div>\n\n            </div>\n\n            <!-- ------Select List and Print Button------- -->\n\n          </div>\n\n      </div>\n\n      <!-- ------Forsale is yes------- -->\n\n\n\n      <!-- ------Forsale is No------- -->\n\n      <div *ngIf="item.main_cat_forsale != \'yes\'">\n\n          <div *ngIf="item.file_type == \'1\' || item.file_type == \'2\'">\n\n            <!-- ------Text show------- -->\n\n            <div *ngIf="item.model_type == \'2\' || item.model_type == \'3\'">\n\n              <div text-center style="padding: 0px 70px 0px 70px;">\n\n                  <h6 class="upcase" style="border:1px solid;">This item is included in the collection on sale</h6>\n\n              </div>\n\n            </div>\n\n            <!-- ------Text show------- -->\n\n            <!-- ------Material Select List and Print Button -------- -->\n\n            <div *ngIf="item.file_type == \'1\'">\n\n              <div *ngIf="item.model_type == \'1\' || item.model_type == \'4\'">\n\n                  <div text-center style="padding: 0px 45px 0px 45px;">\n\n                      <p class="upcase">Choose Material</p>\n\n                      <ion-item style="border:1px solid;">\n\n                        <!-- //<ion-label class="upcase">PLA</ion-label> -->\n\n                        <ion-select [(ngModel)]="materialValue">\n\n                          <ion-option *ngFor="let data of materialListArray" Selected value="{{data.id}}">{{data.name}}</ion-option> \n\n                        </ion-select>\n\n                      </ion-item>\n\n                  </div>\n\n                  <div class="buttonDiv">\n\n                    <button class="themColor DiscoverButton" (click)="print(item)">Print</button>\n\n                  </div>\n\n              </div>\n\n            </div>\n\n            <!-- ------Material Select List and Print Button-------- -->\n\n          </div>\n\n      </div>\n\n      <!-- ------Forsale is No------- -->\n\n\n\n      <!-- ------File Type is 3------ -->\n\n      <div *ngIf="item.file_type == \'3\'">\n\n        <div class="buttonDiv">\n\n          <button class="themColor DiscoverButton">Visit Link</button>\n\n        </div>\n\n        <div class="buttonDiv">\n\n          <button class="themColor DiscoverButton">Share</button>\n\n        </div>   \n\n      </div>\n\n      <!-- ------File Type is 3------- -->\n\n    </div>\n\n    <ion-grid padding class="mtop15" *ngIf="otherFiles != \'\'">\n\n        <div text-center>\n\n            <h3 class="textColor upcase">Explore more</h3>\n\n        </div>\n\n      <ion-row>\n\n        <ion-col col-12 no-padding *ngFor="let item of otherFiles">\n\n          <ion-card (click)="subCat()">\n\n            <img src="{{imgUrl}}{{item.image}}" alt="logo" style="height: 100%;"/>\n\n            <div class="opctyDiv">\n\n              <h2 class="opctyText">{{item.name}}</h2>\n\n            </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/itemName/itemName.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], itemNamePage);
    return itemNamePage;
}());

//# sourceMappingURL=itemName.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itemName_itemName__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__discover_discover__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';




var categoryPage = /** @class */ (function () {
    function categoryPage(navCtrl, navParams, loadingCtrl, userService, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.Category = [];
        this.otherfiles = [];
    }
    categoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__discover_discover__["a" /* DiscoverPage */]);
        }, 0);
        this.imgUrl = localStorage.getItem("BaseUrl");
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.CatId = localStorage.getItem("MainCatId");
        console.log(this.CatId);
        this.SubCat = false;
        this.loadcatDetails();
    };
    categoryPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
    };
    // -------LoadCatFun--------
    categoryPage.prototype.loadcatDetails = function () {
        var _this = this;
        var data = {
            "cat_id": this.CatId,
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.CategoryDetails(data).subscribe(function (res) {
            loading.dismiss();
            console.log(res);
            if (res.status == "true" || res.status == true) {
                _this.Category = res.data;
                _this.catName = res.data[0].category_name;
                _this.otherfiles = res.files;
                console.log(_this.Category);
                console.log(_this.otherfiles);
                localStorage.setItem("through", "main");
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    // -------LoadCatFun--------
    // -------CheckLoadSubCatOrFileFun--------
    categoryPage.prototype.subCat = function (item) {
        if (item.file_id == "0") {
            localStorage.setItem("through", "Sub");
            this.subCatLoading(item.sub_cat_id);
        }
        else {
            localStorage.setItem("FileId", item.file_id);
            console.log(this.SubCat);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__itemName_itemName__["a" /* itemNamePage */]);
        }
    };
    // -------CheckLoadSubCatOrFileFun--------
    // -------LoadSubCatFun--------
    categoryPage.prototype.subCatLoading = function (id) {
        var _this = this;
        var data = {
            "cat_id": this.CatId,
            "sub_cat_id": id,
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.SubCategoryDetails(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                localStorage.setItem("SubcatId", id);
                _this.Category = res.data;
                _this.catName = res.data[0].category_name;
                _this.otherfiles = res.files;
                console.log(_this.Category);
                console.log(_this.otherfiles);
                _this.SubCat = true;
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    // -------LoadSubCatFun----------------
    // -------AddToCartFun--------
    categoryPage.prototype.cart = function (item) {
        var _this = this;
        var data = {
            "file_id": item.id,
            "unique_id": item.unique_id,
            "name": this.catName,
            "sub_cat_id": "0",
            "cat_id": "0",
            "price": item.price,
            "qty": "1",
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.AddToCart(data).subscribe(function (res) {
            loading.dismiss();
            if (res.status == "true" || res.status == true) {
                _this.presentToast(res.message);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* cartPage */]);
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    // -------AddToCartFun--------
    categoryPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__discover_discover__["a" /* DiscoverPage */]);
    };
    /// Toast function ////
    categoryPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], categoryPage.prototype, "slides", void 0);
    categoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/category/category.html"*/'<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button style="background:transparent;" (click)="back()">\n\n              <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div>\n\n    <div *ngFor="let item of Category">\n\n        <div text-center>\n\n            <h3 class="textColor fw600 upcase">{{catName}}</h3>\n\n        </div>\n\n        <div class="padding10" >\n\n          <!-- ---------Slider-------- -->\n\n          <ion-slides style="height: 180px !important;" loop="true" speed="1000" pager="true" paginationType="bullets" (ionSlideDidChange)="slideChanged()">\n\n              <ion-slide *ngFor="let itemImage of item.image" >\n\n                <video *ngIf="itemImage.type != \'Image\'" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer borderReds HW100">\n\n                  <source src="{{imgUrl}}{{itemImage.img}}" type="video/mp4"/>\n\n                </video>\n\n                <img *ngIf="itemImage.type == \'Image\'" src="{{imgUrl}}{{itemImage.img}}" alt="logo" class="hw100"/>\n\n            </ion-slide>\n\n          </ion-slides>\n\n          <!-- ---------Slider-------- -->\n\n\n\n          <div text-center class="mtop10">\n\n                <span class="textColor fw500">"{{item.description}}"</span>\n\n          </div>\n\n          <!-- ------Text and Add to Cart Button------- -->\n\n          <div *ngIf="item.forsale == \'yes\'">\n\n            <div *ngIf="SubCat == true">\n\n              <div text-center style="padding: 0px 70px 0px 70px;" *ngIf="item.main_cat_forsale == \'yes\'" >\n\n                  <h6 class="upcase" style="border:1px solid;">This item is included in the collection on sale</h6>\n\n              </div>\n\n            </div>\n\n            <div text-center style="padding: 0px 107px 0px 107px;">\n\n                <h3 class="upcase" style="border:1px solid;">{{item.price}} C</h3>\n\n            </div>\n\n            <div class="buttonDiv">\n\n              <button class="themColor DiscoverButton" (click)="cart(item)">Add to Cart</button>\n\n            </div>\n\n          </div>\n\n          <!-- ------Text and Add to Cart Button------- -->\n\n        </div>\n\n    </div>\n\n   \n\n    <ion-grid no-padding class="mtop15" *ngIf="otherfiles != \'\'">\n\n      <ion-row>\n\n        <ion-col col-6 no-padding *ngFor="let item of otherfiles">\n\n          <ion-card (click)="subCat(item)">\n\n            <img src="{{imgUrl}}{{item.image}}" alt="logo" style="height: 100%;"/>\n\n            <div class="opctyDiv">\n\n              <h2 class="opctyText">{{item.name}}</h2>\n\n            </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/category/category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], categoryPage);
    return categoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgetPwd_forgetPwd__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, statusBar, loadingCtrl, toastCtrl, userService, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.userService = userService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.userLogin = [];
        // this.statusBar.overlaysWebView(false);
        // this.statusBar.backgroundColorByHexString('#02286b');
        this.userLogin = {
            "email": "shashivani01@gmail.com",
            "password": "123456"
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var alert = _this.alertCtrl.create({
                title: 'Exit App!',
                message: 'Do you really want to exit from the app?',
                buttons: [{
                        text: 'Exit',
                        handler: function () {
                            _this.platform.exitApp();
                        }
                    }, {
                        text: 'Cancel',
                        handler: function () {
                        }
                    }]
            });
            alert.present();
        }, 0);
    };
    LoginPage.prototype.goForgot = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__forgetPwd_forgetPwd__["a" /* ForgetPwdPage */]);
    };
    // -----Login-----
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.userLogin.email == "") {
            this.presentToast('Please Enter Your Email!');
            return false;
        }
        var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!(emailfilter.test(this.userLogin.email))) {
            this.presentToast('Please enter a valid Email ID');
            return false;
        }
        if (this.userLogin.password == "") {
            this.presentToast('Please Enter Your Password!');
            return false;
        }
        else {
            var data = {
                "username": this.userLogin.email,
                "password": this.userLogin.password
            };
            var loading_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: '<img src="assets/imgs/spinner.gif">'
            });
            loading_1.present();
            this.userService.goLoginAPI(data).subscribe(function (res) {
                loading_1.dismiss();
                console.log(res);
                if (res.status == "true" || res.status == true) {
                    localStorage.setItem("LoggedinFrom", "mobile");
                    _this.presentToast(res.message);
                    localStorage.setItem("UserInfo", JSON.stringify(res.user_detail.user_info[0]));
                    localStorage.setItem("Usershipping", JSON.stringify(res.user_detail.shipping_detail[0]));
                    localStorage.setItem("LoginStatus", "yes");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.presentToast(res.message);
                    _this.userLogin.email = "";
                    _this.userLogin.password = "";
                }
            }, function (err) {
                loading_1.dismiss();
                _this.presentToast("Internet not available");
                console.log(err);
            });
        }
    };
    // -----Login-----
    /// Toast function ////
    LoginPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/login/login.html"*/'<ion-header>\n\n \n\n</ion-header>\n\n\n\n<ion-content padding class="themColor">\n\n  <div class="margin_top_15">\n\n    <div text-center>\n\n      <img src="/assets/icon/logo_alex.png" alt="3d printerlogo image" class="logo"/>\n\n    </div>\n\n    <div style="padding:50px;">\n\n\n\n      <ion-list class="text_center" >\n\n        <div class="inputDiv">\n\n            <ion-item class="backgroundTransparent borderRedi" style="height: 100%;">\n\n              <ion-input type="email" class="mleft10 mtop5" placeholder="Email" [(ngModel)]="userLogin.email"></ion-input>\n\n            </ion-item>\n\n            <ion-icon name="person" class="icon_img"></ion-icon>\n\n            <!-- <img src=\'assets/imgs/UserICon.png\' class="icon_img"> -->\n\n        </div>\n\n        <div class="inputDiv">\n\n            <ion-item class="backgroundTransparent borderRedi" style="height: 100%;">\n\n              <ion-input color="dark" class="mleft10 mtop5" type="password" placeholder="Password" [(ngModel)]="userLogin.password"></ion-input>\n\n            </ion-item>\n\n            <ion-icon name="lock" class="icon_img"></ion-icon>\n\n            <!-- <img src=\'assets/imgs/SigninLock.png\' > -->\n\n        </div>\n\n      </ion-list>\n\n      <div text-left>\n\n        <ion-label text-capitalize class="fs14 fw400 white"><ion-checkbox checked="true"></ion-checkbox> save credentials</ion-label>\n\n      </div>\n\n      <div class="mtop5">\n\n        <div class="textRight">\n\n          <p text-capitalize class="fw500 white" (click)="goForgot()">forgot Password?</p>\n\n        </div>\n\n        <div>\n\n          <button ion-button full text-capitalize class="login_button borderRedi" (click)="login()">log in</button>\n\n        </div>\n\n        <!-- <div text-center>\n\n          <p class="fs16 fw500 darkgray">New user? <span class="fs16 white font-bold">Signup</span></p>\n\n        </div> -->\n\n      </div>\n\n    </div>\n\n    \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemName_itemName__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categoryFilter_categoryFilter__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sortBy_sortBy__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__myOrder_myOrder__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slicingSetting_slicingSetting__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer_ngx__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

var collectionPage = /** @class */ (function () {
    function collectionPage(navCtrl, navParams, loadingCtrl, userService, toastCtrl, ModalCtrl, fileTransfer, camera, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.ModalCtrl = ModalCtrl;
        this.fileTransfer = fileTransfer;
        this.camera = camera;
        this.platform = platform;
        this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
        this.imgUrl = localStorage.getItem("BaseUrl");
        this.LoadCollection();
    }
    collectionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, 0);
    };
    // -------LoadCollectionFile------
    collectionPage.prototype.LoadCollection = function () {
        var _this = this;
        var data = {
            "user_id": this.userInfo.user_id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.MyCollection(data).subscribe(function (res) {
            loading.dismiss();
            console.log(res);
            if (res.status == "true" || res.status == true) {
                _this.Collectionlist = res.data;
                console.log(_this.Collectionlist);
            }
            else {
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    // -------LoadCollectionFile------
    collectionPage.prototype.subCat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__itemName_itemName__["a" /* itemNamePage */]);
    };
    collectionPage.prototype.cat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    collectionPage.prototype.myOrder = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__myOrder_myOrder__["a" /* MyOrderPage */]);
    };
    // -------GoToFiltersPage------
    collectionPage.prototype.filters = function () {
        var modal1 = this.ModalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__categoryFilter_categoryFilter__["a" /* categoryFilterPage */]);
        modal1.present();
        modal1.onDidDismiss(function (data) {
            console.log(data);
        });
    };
    collectionPage.prototype.sort = function () {
        var modal2 = this.ModalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__sortBy_sortBy__["a" /* sortByPage */]);
        modal2.present();
        modal2.onDidDismiss(function (data) {
            console.log(data);
        });
    };
    // -------GoToFiltersPage------
    // -------EditCollectionFile------
    collectionPage.prototype.Edit = function (id) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__slicingSetting_slicingSetting__["a" /* SlicingSettingPage */], { FileId: id });
    };
    // -------EditCollectionFile------
    //------SelectFile--------
    collectionPage.prototype.SelectFile = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: this.camera.MediaType.ALLMEDIA
            // mediaType:this.camera.MediaType.VIDEO
        }).then(function (imageData) {
            _this.imageURI = "file://" + imageData; //Get File Path
            _this.FileName = _this.imageURI.substr(_this.imageURI.lastIndexOf('/') + 1); //Get File name
            var fileuploadTypeName = imageData.lastIndexOf(".");
            _this.FileType = imageData.substring(fileuploadTypeName, imageData.length).toLowerCase();
            _this.Filepath = "file://" + imageData;
            _this.Send();
        });
    };
    collectionPage.prototype.Send = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        if (this.FileType == ".stl") {
            var data = {
                "country": this.userInfo.country,
                "user_id": this.userInfo.user_id,
                "file": this.imageURI
            };
            this.userService.AddFileInMyCollection(data).subscribe(function (res) {
                loading.dismiss();
                if (res.status == "true" || res.status == true) {
                    _this.presentToast(res.message);
                    _this.LoadCollection();
                }
                else {
                    _this.presentToast(res.message);
                }
            }, function (err) {
                loading.dismiss();
                console.log(err);
            });
        }
        else {
            loading.dismiss();
            this.presentToast(".stl File Type Required");
        }
    };
    //--------SelectFile------------
    // -------DeleteFile------
    collectionPage.prototype.DeleteCollection = function (id) {
        var _this = this;
        var data = {
            "country": this.userInfo.country,
            "user_id": this.userInfo.user_id,
            "file_id": id
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.DeleteFormMyCollection(data).subscribe(function (res) {
            loading.dismiss();
            console.log(res);
            if (res.status == "true" || res.status == true) {
                _this.presentToast(res.message);
                _this.LoadCollection();
            }
            else {
                _this.presentToast(res.message);
            }
        }, function (err) {
            loading.dismiss();
            console.log(err);
        });
    };
    //------DeleteFile----------------
    collectionPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    /// Toast function ////
    collectionPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom',
            cssClass: 'normalToast'
        });
        toast.present();
    };
    collectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collection',template:/*ion-inline-start:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/collection/collection.html"*/'\n\n<ion-header no-border>\n\n  <ion-toolbar transparent class="themColor white">\n\n      <button ion-button menuToggle >\n\n        <ion-icon name="menu" class="white"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n        <div text-center style="margin-left: 38px;">\n\n          <img src="/assets/icon/logo_alex.png" alt="logo" style="width:120px;"/>\n\n        </div>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button style="background:transparent;" (click)="back()">\n\n              <img src="/assets/icon/app_icon/back.png" alt="logo" style="width:30px;"/>\n\n          </button>\n\n      </ion-buttons>  \n\n  </ion-toolbar>  \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div>\n\n    <div text-center class="borddrBot">\n\n        <h3 class="textColor">My Collection</h3>\n\n    </div>\n\n    <ion-row class="borddrBot rowHeight">\n\n      <ion-col col-6>\n\n        <div class="buttonDiv">\n\n          <p class="textColor">Upload your File</p>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div class="buttonDiv">\n\n          <button (click)="SelectFile()" class="themColor DiscoverButton" style="width:90% !important;">Select your File</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <div text-center class="borddrBot rowHeight">\n\n      <button class="themColor DiscoverButton" (click)="myOrder()">Go To My Orders</button>\n\n    </div>\n\n    <!-- --------Filters------- -->\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <div class="buttonDiv">\n\n          <button ion-button class="themColor DiscoverButton" (click)="filters()">Filters</button>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div class="buttonDiv">\n\n          <button ion-button class="themColor DiscoverButton" (click)="sort()">Sort By</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- --------Filters------- -->\n\n\n\n    <!-- --------ProductList------- -->\n\n    <ion-grid no-padding>\n\n      <ion-row>\n\n        <ion-col col-6 no-padding *ngFor="let item of Collectionlist">\n\n          <ion-card >\n\n            <img (click)="cat()" src="{{imgUrl}}{{item.image}}" alt="logo" style="height: 100%;"/>\n\n            <div class="opctyDiv">\n\n              <h2 class="opctyText">{{item.name}}</h2>\n\n            </div>\n\n            <div class="iconDiv">\n\n              <ion-row>\n\n                <ion-col col-6>\n\n                  <div (click)="Edit(item.file_id)">\n\n                      <ion-icon name="create" class="iconClass" ></ion-icon>\n\n                  </div>\n\n                </ion-col>\n\n                <ion-col col-6 >\n\n                  <div class="secondRow" (click)="DeleteCollection(item.file_id)">\n\n                      <ion-icon name="close-circle" class="iconClass"></ion-icon>\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </ion-card>\n\n        </ion-col>\n\n        <div padding style="width: 100%;" text-center *ngIf="Collectionlist == \'\'">\n\n          <h3 style="text-shadow: 1px 1px #065f73;\n\n          color: #0b7a94;">No Product Avaliable in Collection</h3>\n\n        </div>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <!-- --------ProductList------- -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mac/Projects/Ionic/Ionic3/3dhomsource/src/pages/collection/collection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], collectionPage);
    return collectionPage;
}());

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_http_helper__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Header } from 'ionic-angular/components/toolbar/toolbar-header';
//const Base_url='https://admin.3dhom.com/index.php/api';
var Base_url = "http://isysnexttechnofuture.in/printer_software/index.php/api";
var UserService = /** @class */ (function () {
    function UserService(http, HttpHelper) {
        this.http = http;
        this.HttpHelper = HttpHelper;
    }
    UserService.prototype.goLoginAPI = function (data) {
        var request = data;
        console.log(request);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        var Formdata = new FormData();
        Formdata.append("username", data.username);
        Formdata.append("password", data.password);
        // let reqOption: RequestOptions = new RequestOptions({  headers: headers });
        return this.http.post(Base_url + '/login/check', Formdata, { headers: headers }).map(function (response) {
            var res = response.json();
            return res;
        });
        // var headers = new Headers()
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // let options = new RequestOptions({ headers: headers });
        //  let postData = new FormData();
        //  postData.append('username' , data.username );
        //  postData.append('password' , data.password );
        //  return this.http.post(Base_url+'/login/check',postData)
        //    .map((response: Response) => {
        //        let res = response.json();
        //        return res;
        //    });
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // let reqOption: RequestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headers });
        // return this.http.post(Base_url+'/login/check',request,reqOption)
        // .map((response: Response) => {
        //     let res = response.json();
        //     return res;
        // });
    };
    UserService.prototype.Forget = function (data) {
        var request = data;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var reqOption = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, headers: headers });
        return this.http.post(Base_url + '/forgetPassword', request, reqOption)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.dashboard = function (data) {
        var request = data;
        console.log(request);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        var Formdata = new FormData();
        Formdata.append("country", data.country);
        Formdata.append("user_id", data.user_id);
        // let reqOption: RequestOptions = new RequestOptions({  headers: headers });
        return this.http.post(Base_url + '/dashboard/', Formdata, { headers: headers }).map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.CityList = function (req) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        var postData = new FormData();
        //postData.append('country_id' , req.country_id );
        postData.append('state_id', req.state_id);
        return this.http.post(Base_url + '/dashboard/city', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.stateList = function (req) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        var postData = new FormData();
        postData.append('country_id', req.country_id);
        return this.http.post(Base_url + '/dashboard/state', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.CountryList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        return this.http.post(Base_url + '/dashboard/country', { headers: headers }).map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.AddUserDetails = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('user_id', userInfo.user_id);
        postData.append('name', userInfo.name);
        postData.append('lname', userInfo.lname);
        postData.append('address', userInfo.address);
        postData.append('zipcode', userInfo.zipcode);
        postData.append('mobile', userInfo.mobile);
        postData.append('country', userInfo.country);
        postData.append('state', userInfo.state);
        postData.append('city', userInfo.city);
        postData.append('region', userInfo.region);
        return this.http.post(Base_url + '/dashboard/add_user_detail', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.AddUserShippingDetails = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('user_id', userInfo.user_id);
        postData.append('country', userInfo.country);
        postData.append('sh_address', userInfo.sh_address);
        postData.append('sh_zipcode', userInfo.sh_zipcode);
        postData.append('shp_country1', userInfo.shp_country1);
        postData.append('shp_city1', userInfo.shp_city1);
        postData.append('sh_region', userInfo.sh_region);
        return this.http.post(Base_url + '/dashboard/add_ship_detail', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.cart = function (data) {
        var request = data;
        console.log(request);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.delete('content-type');
        var Formdata = new FormData();
        Formdata.append("country", data.country);
        Formdata.append("user_id", data.user_id);
        // let reqOption: RequestOptions = new RequestOptions({  headers: headers });
        return this.http.post(Base_url + '/dashboard/cart', Formdata, { headers: headers }).map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.CategoryList = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        console.log("https://admin.3dhom.com/index.php/api/dashboard/category_list");
        return this.http.post(Base_url + '/dashboard/category_list', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.CategoryListSearch = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('sort', userInfo.sort);
        postData.append('category', userInfo.category);
        postData.append('fill_search', userInfo.fill_search);
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/search_result', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.CategoryDetails = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('cat_id', userInfo.cat_id);
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/category_details', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.SubCategoryDetails = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('cat_id', userInfo.cat_id);
        postData.append('sub_cat_id', userInfo.sub_cat_id);
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/sub_category_detail', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.FileDetails = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('file_id', userInfo.file_id);
        postData.append('cat_id', userInfo.cat_id);
        postData.append('sub_cat_id', userInfo.sub_cat_id);
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/file_detail', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.materialList = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/material_list', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.ForPrint = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('file_id', userInfo.file_id);
        postData.append('material', userInfo.material);
        //postData.append('country' , userInfo.country );
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/add_print_file', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.checkStatusForPrint = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('file_id', userInfo.file_id);
        return this.http.post(Base_url + '/dashboard/check_status_print_file', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.AddToCart = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('file_id', userInfo.file_id);
        postData.append('unique_id', userInfo.unique_id);
        postData.append('name', userInfo.name);
        postData.append('sub_cat_id', userInfo.sub_cat_id);
        postData.append('cat_id', userInfo.cat_id);
        postData.append('price', userInfo.price);
        postData.append('qty', userInfo.qty);
        //postData.append('country' , userInfo.country );
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/add_cart', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.DeleteFormCart = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('cart_id', userInfo.cart_id);
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/delete_item_cart', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.MyCollection = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/my_collection', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.AddFileInMyCollection = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        postData.append('file', userInfo.file);
        return this.http.post(Base_url + '/dashboard/Add_file', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.EditFileInMyCollection = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        postData.append('file_id', userInfo.file_id);
        postData.append('language_id', userInfo.language_id);
        return this.http.post(Base_url + '/dashboard/edit_file', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.SubmitEditFileInMyCollection = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        postData.append('file_id', userInfo.file_id);
        postData.append('language_id', userInfo.language_id);
        postData.append('material_id', userInfo.material_id);
        postData.append('layer_thickness', userInfo.layer_thickness);
        postData.append('exposure_time', userInfo.exposure_time);
        postData.append('off_time', userInfo.off_time);
        postData.append('bottom_exposure_time', userInfo.bottom_exposure_time);
        postData.append('bottom_layers', userInfo.bottom_layers);
        postData.append('post_cure_time', userInfo.post_cure_time);
        postData.append('lift_and_sequence_time', userInfo.lift_and_sequence_time);
        postData.append('z_lift_distance', userInfo.z_lift_distance);
        postData.append('build_direction', userInfo.build_direction);
        postData.append('z_lift_speed', userInfo.z_lift_speed);
        postData.append('z_bottom_speed', userInfo.z_bottom_speed);
        postData.append('z_bottom_retract_speed', userInfo.z_bottom_retract_speed);
        postData.append('slide_tilt', userInfo.slide_tilt);
        postData.append('reflect_x', userInfo.reflect_x);
        postData.append('reflect_y', userInfo.reflect_y);
        postData.append('enable_slicing_outline', userInfo.enable_slicing_outline);
        postData.append('infill_density', userInfo.infill_density);
        postData.append('infill_line_distance', userInfo.infill_line_distance);
        postData.append('infill_overlap_percentage', userInfo.infill_overlap_percentage);
        postData.append('infill_layer_thickness', userInfo.infill_layer_thickness);
        postData.append('infill_pattern', userInfo.infill_pattern);
        postData.append('generate_support', userInfo.generate_support);
        postData.append('support_placement', userInfo.support_placement);
        postData.append('support_overhang_angle', userInfo.support_overhang_angle);
        postData.append('support_pattern', userInfo.support_pattern);
        postData.append('support_density', userInfo.support_density);
        postData.append('support_horizontal_expansion', userInfo.support_horizontal_expansion);
        postData.append('support_infill_layer_thickness', userInfo.support_infill_layer_thickness);
        postData.append('gradual_support_infill_steps', userInfo.gradual_support_infill_steps);
        postData.append('title', userInfo.title);
        postData.append('discription', userInfo.discription);
        // return this.http.post(Base_url + '/dashboard/Add_prints',postData,{  headers: headers }).map((response: Response) => {
        //     let res = response.json();
        //     return res;
        // });
        return this.http.post(Base_url + '/dashboard/Add_prints', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.DeleteFormMyCollection = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        postData.append('file_id', userInfo.file_id);
        return this.http.post(Base_url + '/dashboard/delete_collection_file', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.myOrder = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/my_order', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.ProductReturnDetail = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('item_id', userInfo.item_id);
        postData.append('country', userInfo.country);
        postData.append('user_id', userInfo.user_id);
        postData.append('language_id', userInfo.language_id);
        return this.http.post(Base_url + '/dashboard/product_return', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.ProductReturnSend = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('id', userInfo.id);
        postData.append('ship_id', userInfo.ship_id);
        postData.append('user_id', userInfo.user_id);
        postData.append('message', userInfo.message);
        return this.http.post(Base_url + '/dashboard/product_return', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.PersonalService = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('user_id', userInfo.user_id);
        return this.http.post(Base_url + '/dashboard/service_request_list', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.AddPersonalService = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('title', userInfo.title);
        postData.append('message', userInfo.message);
        postData.append('user_id', userInfo.user_id);
        postData.append('file', userInfo.file);
        return this.http.post(Base_url + '/dashboard/add_personalized_request', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.SupportService = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('user_id', userInfo.user_id);
        postData.append('language_id', userInfo.language_id);
        postData.append('country', userInfo.country);
        return this.http.post(Base_url + '/dashboard/support_request_list', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.AddSupportRequest = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('title', userInfo.title);
        postData.append('message', userInfo.message);
        postData.append('user_id', userInfo.user_id);
        postData.append('file', userInfo.file);
        return this.http.post(Base_url + '/dashboard/add_request', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.languageList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(Base_url + '/dashboard/get_language', { headers: headers }).map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.AddLanguage = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('printer_id', userInfo.printer_id);
        postData.append('language_id', userInfo.language_id);
        return this.http.post(Base_url + '/dashboard/set_language', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.InfoDetails = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('user_id', userInfo.user_id);
        postData.append('country', userInfo.country);
        return this.http.post(Base_url + '/dashboard/information', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.UpdateEmailDetails = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('user_id', userInfo.user_id);
        postData.append('country', userInfo.country);
        postData.append('extra_email', userInfo.extra_email);
        return this.http.post(Base_url + '/dashboard/add_extra_mail', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.subscriptionDetail = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('user_id', userInfo.user_id);
        postData.append('country', userInfo.country);
        return this.http.post(Base_url + '/dashboard/subscription_detail', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.getAdvanceSettingDetail = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('user_id', userInfo.user_id);
        postData.append('country', userInfo.country);
        return this.http.post(Base_url + '/dashboard/advance_setting', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService.prototype.addAdvanceSettingDetail = function (userInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postData = new FormData();
        postData.append('printer_id', userInfo.printer_id);
        postData.append('standby', userInfo.standby);
        postData.append('z_position', userInfo.z_position);
        postData.append('tilt_motor', userInfo.tilt_motor);
        postData.append('z_motor', userInfo.z_motor);
        postData.append('lamp_status', userInfo.lamp_status);
        postData.append('fan', userInfo.fan);
        postData.append('machine_status', userInfo.machine_status);
        return this.http.post(Base_url + '/dashboard/add_advnace_setting', postData)
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__helper_http_helper__["a" /* HttpHelper */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user-service.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map