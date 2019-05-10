import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { HomePage } from '../home/home';
import { SupportRequestNewPage } from '../supportRequestNew/supportRequestNew';

@Component({
  selector: 'page-supportNew',
  templateUrl: 'supportNew.html'
})
export class SupportNewPage {
  
  userInfo:any=[];
  SupportDetails:any=[];
  discription:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public platform: Platform) {
    
   
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(HomePage);
    }, 0)
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.LoadSupport();
  }
  LoadSupport(){
    let data={
      "user_id" : this.userInfo.user_id,
      "language_id" : this.userInfo.language_id,
      "country" : this.userInfo.country

    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.SupportService(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        console.log(res);
        this.SupportDetails = res.data;
        this.discription = res.request_detail[0].discription;
        console.log(this.discription);
        
        for(let i=0;i<this.SupportDetails.length;i++){
          let splitname = this.SupportDetails[i].attechment.split("/");
          this.SupportDetails[i].Filename = splitname[splitname.length-1];
        }
        console.log(this.SupportDetails);
        
      }
      else{
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
  makeReq(){
    this.navCtrl.setRoot(SupportRequestNewPage);
  }

  back(){
    this.navCtrl.setRoot(HomePage);
  }

}
