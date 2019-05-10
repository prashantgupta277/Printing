import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// 
import { UserService } from '../providers/user-service';
import { HttpHelper } from '../helper/http.helper';
import { HttpModule } from '@angular/http';
import { Stripe } from '@ionic-native/stripe/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Camera } from '@ionic-native/camera';

// 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DiscoverPage } from '../pages/discover/discover';
import { categoryPage } from '../pages/category/category';
import { collectionPage } from '../pages/collection/collection';
import { cartPage } from '../pages/cart/cart';
import { sharePage } from '../pages/share/share';
import { visitLinkPage } from '../pages/visitLink/visitLink';
import { itemNamePage } from '../pages/itemName/itemName';
import { MyOrderPage } from '../pages/myOrder/myOrder';
import { PSRPage } from '../pages/psr/psr';
import { PaymentDetailsPage } from '../pages/paymentDetails/paymentDetails';
import { supportPage } from '../pages/support/support';
import { SubscriptionPage } from '../pages/subscriptionPack/subscriptionPack';
import { SlicingSettingPage } from '../pages/slicingSetting/slicingSetting';
import { ForgetPwdPage } from '../pages/forgetPwd/forgetPwd';
import { categoryFilterPage } from '../pages/categoryFilter/categoryFilter';
import { sortByPage } from '../pages/sortBy/sortBy';
import { ProductReturnNewPage } from '../pages/productReturnNew/productReturnNew';
import { PSRGeneratePage } from '../pages/psrGenerate/psrGenerate';
import { SupportNewPage } from '../pages/supportNew/supportNew';
import { SupportRequestNewPage } from '../pages/supportRequestNew/supportRequestNew';
import { ShippingDetailsPage } from '../pages/shippingDetails/shippingDetails';
import { ShippingAddressModalPage } from '../pages/modal/shippingAddressModal/shippingAddressModal';
import { UserDetailsModalPage } from '../pages/modal/userDetailsModal/userDetailsModal';
import { InformationModalPage } from '../pages/modal/information/information';
import { LanguageSettingModalPage } from '../pages/modal/languageSettingModal/languageSettingModal';
import { PaymentDetailsModalPage } from '../pages/modal/paymentDetailsModal/paymentDetailsModal';
import { SelectSubscriptionModalPage } from '../pages/modal/selectSubscription/selectSubscription';
import { PrintModalPage } from '../pages/modal/printModal/printModal';
import { platformChangeModalPage } from '../pages/modal/platformChange/platformChange';
import { AdvancedSettingModalPage } from '../pages/modal/advancedSettingModal/advancedSettingModal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DiscoverPage,
    categoryPage,
    collectionPage,
    cartPage,
    sharePage,
    visitLinkPage,
    itemNamePage,
    MyOrderPage,
    PSRPage,
    PaymentDetailsPage,
    supportPage,
    SubscriptionPage,
    SlicingSettingPage,
    ForgetPwdPage,
    categoryFilterPage,
    sortByPage,
    ProductReturnNewPage,
    PSRGeneratePage,
    SupportNewPage,
    SupportRequestNewPage,
    ShippingDetailsPage,
    ShippingAddressModalPage,
    UserDetailsModalPage,
    InformationModalPage,
    LanguageSettingModalPage,
    PaymentDetailsModalPage,
    SelectSubscriptionModalPage,
    PrintModalPage,
    AdvancedSettingModalPage,
    platformChangeModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DiscoverPage,
    categoryPage,
    collectionPage,
    cartPage,
    sharePage,
    visitLinkPage,
    itemNamePage,
    MyOrderPage,
    PSRPage,
    PaymentDetailsPage,
    supportPage,
    SubscriptionPage,
    SlicingSettingPage,
    ForgetPwdPage,
    categoryFilterPage,
    sortByPage,
    ProductReturnNewPage,
    PSRGeneratePage,
    SupportNewPage,
    SupportRequestNewPage,
    ShippingDetailsPage,
    ShippingAddressModalPage,
    UserDetailsModalPage,
    InformationModalPage,
    LanguageSettingModalPage,
    PaymentDetailsModalPage,
    SelectSubscriptionModalPage,
    PrintModalPage,
    AdvancedSettingModalPage,
    platformChangeModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    HttpHelper,
    Stripe,
    File,
    FileTransfer,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
