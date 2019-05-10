import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../../../providers/user-service';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationModalPage {
  userInfo:any;
  Info:any;
  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public platform: Platform) {
      
    }
    
    ionViewDidLoad(){
      this.platform.registerBackButtonAction(() => {
        this.viewCtrl.dismiss();
      }, 0)
      this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
      let data={
        "country": this.userInfo.country,
        "user_id" : this.userInfo.user_id
      }
      console.log(data);
      let loading = this.loadingCtrl.create({
          spinner:'hide',
          content: '<img src="assets/imgs/spinner.gif">'
      });
      loading.present();
      this.userService.InfoDetails(data).subscribe(res=>{
        loading.dismiss();
        if(res.status=="true" || res.status== true){
          console.log(res);
          this.Info = res.data[0].discription;
          console.log(this.Info);
        }else{

        }
        
      },err=>{
        loading.dismiss();
      })
      
    }
  
  saveData() {
    this.viewCtrl.dismiss();
  }
}
