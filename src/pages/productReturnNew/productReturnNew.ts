import { Component } from '@angular/core';
import { NavController, NavParams, Platform, LoadingController, ToastController } from 'ionic-angular';
import { MyOrderPage } from '../myOrder/myOrder';
import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-ProductReturnNew',
  templateUrl: 'ProductReturnNew.html'
})
export class ProductReturnNewPage {
  userInfo:any;
  message:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public platform: Platform,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public toastCtrl: ToastController) {
    this.message = "";
   
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(MyOrderPage);
    }, 0)
    this.onLoad();
  }

  onLoad(){
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    let data={
      "user_id" : this.userInfo.user_id,
      "country" : this.userInfo.country,
      "language_id" : this.userInfo.language_id,
      "item_id" : this.userInfo.user_id
    }
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.ProductReturnDetail(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        console.log(res);
        
      }
      else{
        
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
  subCat(){
    this.navCtrl.setRoot(MyOrderPage);
  }
  send(){
    if(this.message == ""){
      this.presentToast("Please Write Message")
      return false;
    }
   
    let data={
      "user_id" : this.userInfo.user_id,
      "message" : this.message,
      "ship_id" : "",
      "id"      : ""
    }
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.ProductReturnSend(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        console.log(res);
        this.navCtrl.setRoot(MyOrderPage);
        
      }
      else{
        
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
  back(){
    this.navCtrl.setRoot(MyOrderPage);
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
