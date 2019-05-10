import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, ToastController, AlertController, Platform } from 'ionic-angular';
import { ShippingAddressModalPage } from '../modal/shippingAddressModal/shippingAddressModal';
import { UserDetailsModalPage } from '../modal/userDetailsModal/userDetailsModal';
import { InformationModalPage } from '../modal/information/information';
import { LanguageSettingModalPage } from '../modal/languageSettingModal/languageSettingModal';
import { PaymentDetailsModalPage } from '../modal/paymentDetailsModal/paymentDetailsModal';
import { SelectSubscriptionModalPage } from '../modal/selectSubscription/selectSubscription';
import { PrintModalPage } from '../modal/printModal/printModal';
import { AdvancedSettingModalPage } from '../modal/advancedSettingModal/advancedSettingModal';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { UserService } from '../../providers/user-service';
import { platformChangeModalPage } from '../modal/platformChange/platformChange';

@Component({
  selector: 'page-shippingDetails',
  templateUrl: 'shippingDetails.html'
})
export class ShippingDetailsPage {
  userInfo:any;
  Usershipping:any;
  UserName:any;
  UserSurname:any;
  Address:any;
  mobile:any;
  city:any;
  zipCode:any;
  REGION:any;
  country:any;
  ShippingCity:any;
  ShippingZone:any;
  Shippingcountry:any;
  Shippingzip:any;
  Shippingaddress:any;
  additionalemail:any;
  subscriptionMsg:any;
  subscription_status:any;
  cityList:any=[];
  stateList:any=[];
  countryList:any=[];
  loading:any;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public userService: UserService,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public platform: Platform
            ) {
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(HomePage);
    }, 0)
    this.setValue();
  }
  
  // -----------LodingData-------
  setValue(){
    this.loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    this.loading.present();
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.Usershipping = JSON.parse(localStorage.getItem("Usershipping"));  
    let FileName=this.userInfo.user_name.split(" ");
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
    
  }
  // -----------LodingData-------
  
  // -----------AllModelOpen-------
  presentModal() {
    let modal = this.modalCtrl.create(ShippingAddressModalPage);
    modal.present();
    modal.onDidDismiss((data)=>{
      this.setValue();
    })
  }
  userEdit() {
    let modal = this.modalCtrl.create(UserDetailsModalPage);
    modal.present();
    modal.onDidDismiss((data)=>{
      this.setValue();
    })
  }
  paymentEdit() {
    let modal = this.modalCtrl.create(PaymentDetailsModalPage);
    modal.present();
    modal.onDidDismiss((data)=>{
      this.setValue();
    })
  }
  info() {
    let modal = this.modalCtrl.create(InformationModalPage);
    modal.present();
    modal.onDidDismiss((data)=>{
      this.setValue();
    })
  }
  languageSet() {
    let modal = this.modalCtrl.create(LanguageSettingModalPage);
    modal.present();
    modal.onDidDismiss((data)=>{
      this.setValue();
    })
  }
  subscribe(){
// SelectSubscriptionModalPage
  let modal = this.modalCtrl.create(SelectSubscriptionModalPage);
    modal.present();
    modal.onDidDismiss((data)=>{
      this.setValue();
    })
  }
  // print(){
  //   let modal = this.modalCtrl.create(PrintModalPage);
  //   modal.present();
  // }
  advance(){
    // AdvancedSettingModalPage
    let modal = this.modalCtrl.create(AdvancedSettingModalPage);
    modal.present();
    modal.onDidDismiss((data)=>{
      this.setValue();
    })
  }
  platformChange(email){
    let modal = this.modalCtrl.create(platformChangeModalPage,{Email:email});
    modal.present();
    modal.onDidDismiss((data)=>{
      this.setValue();
    })
  }
  // -----------AllModelOpen-------
  back(){
    this.navCtrl.setRoot(HomePage);
  }
  
  // -----------LogOut-------
  logout(){
    let alert = this.alertCtrl.create({
      title: 'Log Out App!',
      message: 'Do you want to Log Out from the app?',
      buttons: [{
          text: 'Log Out',
          handler: () =>{
            localStorage.clear();
            this.navCtrl.setRoot(LoginPage);
            
          }
      },{
          text: 'Cancel',
          handler:()=>{
          }
      }]
  })
  alert.present();
  }
  // -----------LogOut-------
  /// Toast function ////
  private presentToast(text) {
    let toast = this.toastCtrl.create({
    message: text,
    duration: 1000,
    position: 'bottom',
    cssClass: 'normalToast'
    });
    toast.present();
  }

}
