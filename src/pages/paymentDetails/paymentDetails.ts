import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe/ngx';
import { cartPage } from '../cart/cart';
import { HomePage } from '../home/home';
// import { NotificationsService } from 'angular2-notifications-lite';
// import {Location} from '@angular/common';
// declare var $ : any;
// declare var jQuery : any;



@Component({
  selector: 'page-paymentDetails',
  templateUrl: 'paymentDetails.html'
})
export class PaymentDetailsPage {
  Details:any;
  userInfo:any;
  constructor(public navCtrl: NavController,
              private stripe: Stripe,
              private toastCtrl:ToastController,
              public platform: Platform
              ) {
    
  
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(cartPage);
    }, 0)
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.Details = {
        // number: '5241810401568530', // 16-digit credit card number
        // expMonth:"09", // expiry month
        // expYear:"2021", // expiry year
        // cvc: '703', // CVC / CCV
        number: '4242424242424242', // 16-digit credit card number
        expMonth:"12", // expiry month
        expYear:"2020", // expiry year
        cvc: '220', // CVC / CCV
        // name: 'John Smith', // card holder name (optional)
        // address_line1: '123 Some Street', // address line 1 (optional)
        // address_line2: 'Suite #220', // address line 2 (optional)
        // address_city: 'Toronto', // city (optional)
        // address_state: 'Ontario', // state/province (optional)
        // address_country: 'Canada', // country (optional)
        // postalCode: 'L5L5L5', // Postal Code / Zip Code (optional)
        // currency: 'CAD' // Three-letter ISO currency code (optional)
      
    }
  }
  // -----PaymentMethod-----
  show(){
    try{
      if(this.Details.number ==""){
        this.presentToast("Please enter card number");
        return false;
      }
      if(this.Details.expMonth==""){
        this.presentToast("Please enter card expMonth");
        return false;
      }
      if(this.Details.expYear==""){
        this.presentToast("Please enter valid card expYear");
        return false;
      }
      if(this.Details.cvc==""){
        this.presentToast("Please enter cvc");
        return false;
      }
      if(this.Details.cvc<=3){
        this.presentToast("Please enter valid cvc");
        return false;
      }
      console.log("before key Sucess");
      console.log("key Sucess");
      (<any>window).Stripe.card.createToken({
        number: this.Details.number,
        exp_month: this.Details.expMonth,
        exp_year: this.Details.expYear,
        cvc: this.Details.cvc
      }, (status: number, response: any) => {
        console.log(response);
        
        if (status === 200) {
          localStorage.setItem("cardToken",response.card.id);
          let cardDetail={
              "card_number": this.Details.number,
              "cvc":this.Details.cvc,
              "exp_month":this.Details.expMonth,
              "exp_year":this.Details.expYear,
              "name":"Prashant",
              "user_id":this.userInfo.user_id,
              "strip_token":response.card.id,
              "amount":"500"
          }
          console.log(cardDetail);
          
           localStorage.setItem("cardInfo",JSON.stringify(cardDetail));
        } else {
          this.presentToast(response.error.message);
        }
      });

    }catch(error){
      this.presentToast("chala hi nhi");
      console.log(error);

    }
    
  }
  // -----PaymentMethod-----

  back(){
    this.navCtrl.setRoot(cartPage)
  }

  goNext(){
       this.navCtrl.setRoot(HomePage)
    }
  successModelOpen(){
    this.presentToast("Your Payment Sucessfully");
    this.goNext()
  }
  successModelClosed(){
    this.presentToast("Your Payment not Done Sucessfully");
  }

  backClicked() {
    this.navCtrl.setRoot(cartPage)
  }

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
