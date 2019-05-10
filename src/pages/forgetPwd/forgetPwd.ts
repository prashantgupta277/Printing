import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../../providers/user-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-forgetPwd',
  templateUrl: 'forgetPwd.html'
})
export class ForgetPwdPage {
  user:any=[];

  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private userService: UserService,
              public platform: Platform) {
    // email details
    this.user={
      'email':""
    }
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(LoginPage);
    }, 0)
  }
  back(){
    console.log("working");
    
    this.navCtrl.setRoot(LoginPage);
  }
  sendRequest(){
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
              this.navCtrl.setRoot(LoginPage);
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
