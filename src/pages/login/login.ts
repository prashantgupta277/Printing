import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../../providers/user-service';
import { ForgetPwdPage } from '../forgetPwd/forgetPwd';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userLogin:any=[];
  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private userService:UserService,
              public platform: Platform,
              public alertCtrl: AlertController) {
    // this.statusBar.overlaysWebView(false);
    // this.statusBar.backgroundColorByHexString('#02286b');
    this.userLogin={
      "email":"shashivani01@gmail.com",
      "password":"123456"
    }
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      let alert = this.alertCtrl.create({
            title: 'Exit App!',
            message: 'Do you really want to exit from the app?',
            buttons: [{
                text: 'Exit',
                handler: () =>{
                  this.platform.exitApp();
                }
            },{
                text: 'Cancel',
                handler:()=>{
                }
            }]
        })
        alert.present();
    }, 0)
  }
  goForgot(){
    this.navCtrl.setRoot(ForgetPwdPage);
  }
  // -----Login-----

  login(){
    if(this.userLogin.email=="")
    {
      this.presentToast('Please Enter Your Email!');
        return false;
    }
    var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if(!(emailfilter.test(this.userLogin.email))){
      this.presentToast('Please enter a valid Email ID');
        return false;
    }
    if(this.userLogin.password==""){
      this.presentToast('Please Enter Your Password!');
        return false;
    }
    else{
        let data={
          "username": this.userLogin.email,
          "password" : this.userLogin.password
        }
        let loading = this.loadingCtrl.create({
            spinner:'hide',
            content: '<img src="assets/imgs/spinner.gif">'
        });
        loading.present();
        this.userService.goLoginAPI(data).subscribe(res=>{
          loading.dismiss();
          console.log(res);
          if(res.status=="true" || res.status== true){
            localStorage.setItem("LoggedinFrom","mobile");
            this.presentToast(res.message);
            localStorage.setItem("UserInfo",JSON.stringify(res.user_detail.user_info[0]));
            localStorage.setItem("Usershipping",JSON.stringify(res.user_detail.shipping_detail[0]));
            localStorage.setItem("LoginStatus","yes");
            this.navCtrl.setRoot(HomePage);
          }else{
            this.presentToast(res.message);
            this.userLogin.email ="";
            this.userLogin.password ="";
          }
        },err=>{
          loading.dismiss();
          this.presentToast("Internet not available");
          console.log(err);
        })
      }
  }
  // -----Login-----

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
