import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { PSRGeneratePage } from '../psrGenerate/psrGenerate';
import { itemNamePage } from '../itemName/itemName';
import { UserService } from '../../providers/user-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-psr',
  templateUrl: 'psr.html'
})
export class PSRPage {
  makeRequest:Boolean;
  printIT:Boolean;
  userInfo:any;
  PersonalDetails:any;
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
    this.makeRequest=false;
    this.printIT=false;
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.LoadPersonal();
  }
  
  LoadPersonal(){
    let data={
      "user_id" : this.userInfo.user_id
    }
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.PersonalService(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        this.PersonalDetails = res.data;
        for(let i=0;i<this.PersonalDetails.length;i++){
          let splitname = this.PersonalDetails[i].attechment.split("/");
          this.PersonalDetails[i].Filename = splitname[splitname.length-1];
        }
      }
      else{
        
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
  request(status){
    this.makeRequest=status; 
  }
  goPrint(value){
    this.makeRequest=false;
    this.printIT=value;
  }
  makeReq(){
    this.navCtrl.setRoot(PSRGeneratePage);
  }
  viewProduct(){
    this.navCtrl.setRoot(itemNamePage);
  }
  back(){
    this.navCtrl.setRoot(HomePage);
  }
  // SupportRequestNewPage
}
