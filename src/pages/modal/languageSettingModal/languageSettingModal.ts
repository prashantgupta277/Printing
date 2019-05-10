import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, ToastController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../../../providers/user-service';

@Component({
  selector: 'page-languageSettingModal',
  templateUrl: 'languageSettingModal.html'
})
export class LanguageSettingModalPage {
  userInfo:any;
  LanguageListArray:any;
  LanguageValue:any;
  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,
              public viewCtrl: ViewController,
              public userService: UserService,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public platform: Platform) {
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.LanguageValue = this.userInfo.language_id;
    console.log(this.LanguageValue);
    this.LoadLanguage();
    
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.viewCtrl.dismiss();
    }, 0)
  }
  LoadLanguage(){
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.languageList().subscribe(res=>{
      this.LanguageListArray = [];
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        this.LanguageListArray = res.data;
        
      }else{

      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
  saveData() {
    let data ={
      "printer_id":this.userInfo.user_id,
      "language_id":this.LanguageValue,
    }
    console.log(data);
    
      let loading = this.loadingCtrl.create({
          spinner:'hide',
          content: '<img src="assets/imgs/spinner.gif">'
      });
      loading.present();
      this.userService.AddLanguage(data).subscribe(res=>{
        loading.dismiss();
        if(res.status=="true" || res.status== true){
          this.userInfo.language_id =this.LanguageValue;
          localStorage.setItem("UserInfo",JSON.stringify(this.userInfo));
          this.viewCtrl.dismiss();
          this.presentToast(res.message);
        }else{
          this.presentToast(res.message);
        }
      },err=>{
        loading.dismiss();
        console.log(err);
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
