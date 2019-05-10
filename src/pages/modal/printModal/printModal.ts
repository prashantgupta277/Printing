import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, ToastController, NavParams, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../../../providers/user-service';

@Component({
  selector: 'page-printModal',
  templateUrl: 'printModal.html'
})
export class PrintModalPage {
  userInfo:any;
  case:String = "First";
  data:any;
  Interval:any;
  Percent:any;;
  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public toastCtrl: ToastController,
              public navParams: NavParams,
              public platform: Platform) {
    this.data = navParams.get('data');
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.viewCtrl.dismiss();
    }, 0)
  }
  checkPersent(){
    if(this.Percent == 100){
      console.log("done");
      clearInterval(this.Interval);
    }else{
      let data = {
        "file_id": this.data.file_id,
      }
      this.userService.checkStatusForPrint(data).subscribe(res=>{
        if(res.status=="true" || res.status== true){
          console.log(res);
          this.presentToast(res.message);
  
          
        }else{
          this.presentToast(res.message);
        }
        
      },err=>{
        console.log(err);
        this.presentToast("API Is Not Working");
        
      })
    }
  }
  OnPrint(){
    
    let data={
      "file_id": this.data.file_id,
      "material" : this.data.materialId,
      //"country": this.userInfo.country,
      "user_id" : this.userInfo.user_id
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.ForPrint(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        console.log(res);
        this.case = "Second";
        this.Percent = 0;
        this.Interval = setInterval(() => { 
          this.Percent = this.Percent + 10;
          this.checkPersent()
        }, 4000);
        
        this.presentToast(res.message);

        
      }else{
        this.presentToast(res.message);
      }
      
    },err=>{
      loading.dismiss();
      console.log(err);
      this.presentToast("API Is Not Working");
      
    })
  }

  saveData() {
    this.viewCtrl.dismiss();
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
