import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DiscoverPage } from '../pages/discover/discover';

import { LoginPage } from '../pages/login/login';
import { visitLinkPage } from '../pages/visitLink/visitLink';
import { PSRPage } from '../pages/psr/psr';
import { collectionPage } from '../pages/collection/collection';
import { cartPage } from '../pages/cart/cart';
import { SupportNewPage } from '../pages/supportNew/supportNew';
import { ShippingDetailsPage } from '../pages/shippingDetails/shippingDetails';
import { PaymentDetailsPage } from '../pages/paymentDetails/paymentDetails';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  userId:any;
  loginStatus:any;
  rootPage: any;
// SlicingSettingPage
  public counter = 0

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public alertCtrl: AlertController
            ) {
     this.loginStatus = localStorage.getItem("LoginStatus");
      if(this.loginStatus == "yes"){
        this.rootPage = HomePage;
      }else{
        this.rootPage = LoginPage;
      }
      //localStorage.setItem("BaseUrl","https://admin.3dhom.com/");

      localStorage.setItem("BaseUrl","http://isysnexttechnofuture.in/printer_software/");
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home', component: HomePage, icon: "book" },
      { title: 'Browse', component: DiscoverPage, icon: "assets/icon/app_icon/brows.png" },
      { title: 'My Collection', component: collectionPage, icon: "assets/icon/app_icon/callection.png" },
      { title: 'Personalised Services', component: PSRPage, icon: "assets/icon/app_icon/personal.png" },
      { title: 'Setting', component: ShippingDetailsPage, icon: "assets/icon/app_icon/seting.png" },
      { title: 'Support', component: SupportNewPage, icon: "assets/icon/app_icon/help.png" },
      { title: 'Cart', component: cartPage, icon: "assets/icon/app_icon/cart.png" },
      { title: 'Log Out', component: LoginPage, icon: "assets/icon/app_icon/help.png" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#0b7b94');
    });
  }

  openPage(page) {
    if(page.component == LoginPage){
      let alert = this.alertCtrl.create({
        title: 'Log Out App!',
        message: 'Do you want to Log Out from the app?',
        buttons: [{
            text: 'Log Out',
            handler: () =>{
              localStorage.clear();
              this.nav.setRoot(LoginPage);
              
            }
        },{
            text: 'Cancel',
            handler:()=>{
            }
        }]
    })
    alert.present();
    }
    else{
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    }
   
  }
}
