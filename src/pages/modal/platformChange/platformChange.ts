import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, NavParams, ToastController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../../../providers/user-service';
import { ShippingDetailsPage } from '../../shippingDetails/shippingDetails';

@Component({
  selector: 'page-platformChange',
  templateUrl: 'platformChange.html'
})
export class platformChangeModalPage {
  userInfo:any;
  Email:any;
  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public NavParams: NavParams,
              public toastCtrl: ToastController,
              public platform: Platform
            ) {
    this.Email = NavParams.get("Email");
    console.log(this.Email);
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.viewCtrl.dismiss();
    }, 0)
  }
  
  saveData() {
    console.log(this.Email);
    if(this.Email=="")
    {
      this.presentToast('Please Enter Email!');
        return false;
    }
    var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if(!(emailfilter.test(this.Email))){
      this.presentToast('Please enter a valid Email ID');
        return false;
    }
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
      
      let data={
        "country": this.userInfo.country,
        "user_id" : this.userInfo.user_id,
        "extra_email":this.Email
      }
      let loading = this.loadingCtrl.create({
          spinner:'hide',
          content: '<img src="assets/imgs/spinner.gif">'
      });
      loading.present();
      this.userService.UpdateEmailDetails(data).subscribe(res=>{
        loading.dismiss();
        if(res.status=="true" || res.status== true){
          console.log(res);
          this.userInfo.additional_email = this.Email;
          localStorage.setItem("UserInfo",JSON.stringify(this.userInfo));
          this.viewCtrl.dismiss();
        }else{

        }
        
      },err=>{
        loading.dismiss();
      })
    
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
