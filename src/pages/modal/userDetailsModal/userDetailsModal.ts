import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../../../providers/user-service';

@Component({
  selector: 'page-userDetailsModal',
  templateUrl: 'userDetailsModal.html'
})
export class UserDetailsModalPage {
  userInfo;any;
  UserFinalDetails:any;
  countryList:any=[];
  stateList:any=[];
  cityList:any = [];
  loading:any;
  status:any;
  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,
              public viewCtrl: ViewController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public toastCtrl: ToastController,
              public platform: Platform) {
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    let FileName=this.userInfo.user_name.split(" ");
    this.countryList =this.navParams.get('CountryData');
    this.status = "true";
    this.UserFinalDetails={
      "user_id":this.userInfo.user_id,
      "country":this.userInfo.country,
      "name":FileName[0],
      "lname":FileName[1],
      "address":this.userInfo.address,
      "zipcode":this.userInfo.zipcode,
      "region":this.userInfo.region,
      "mobile":this.userInfo.user_mobile,
      "city":this.userInfo.city,
      "state":this.userInfo.region
    }
    this.CountryLoad();
    
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.viewCtrl.dismiss();
    }, 0)
  }
  onSelectChange(e){
    console.log(e);
  }

  //  // ======CountryList API========
  CountryLoad(){
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.CountryList().subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
          this.countryList = [];
          this.countryList = res.data;
          this.stateLoad();
          }else{

      }
    },err=>{
      loading.dismiss();
    })
  }
   // ======CountryList API========

  // ======StateList API========
  stateLoad(){
    let data ={
      "country_id":this.UserFinalDetails.country
    }
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.stateList(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
          this.stateList = [];
          this.stateList = res.data;
          console.log(this.stateList);
          this.cityLoad();
      }else{

      }
    },err=>{
      loading.dismiss();
    })
  }
  // ======StateList API========
  // ======CityList API========
  cityLoad(){
    let data ={
      "state_id":this.UserFinalDetails.state
    }
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.CityList(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
          this.cityList = [];
          this.cityList = res.data;
          console.log(this.cityList);
      }else{

      }
    },err=>{
      loading.dismiss();
    })
  }
  // ======CityList API========
  saveData() {
    if(this.UserFinalDetails.name == ""){
      this.presentToast("Please select name");
      return false;
    }
    if(this.UserFinalDetails.lname == ""){
      this.presentToast("Please select lname");
      return false;
    }
    if(this.UserFinalDetails.address == ""){
      this.presentToast("Please select address");
      return false;
    }
    if(this.UserFinalDetails.zipcode == ""){
      this.presentToast("Please select zipcode");
      return false;
    }
    if(this.UserFinalDetails.country == ""){
      this.presentToast("Please select country");
      return false;
    }
    if(this.UserFinalDetails.region == ""){
      this.presentToast("Please select region");
      return false;
    }
    if(this.UserFinalDetails.city == ""){
      this.presentToast("Please select city");
      return false;
    }
    if(this.UserFinalDetails.mobile == ""){
      this.presentToast("Please Insert mobile");
      return false;
    }
    if(this.UserFinalDetails.mobile.length > 10){
      this.presentToast("Please Insert min 10 digit mobile");
      return false;
    }
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.AddUserDetails(this.UserFinalDetails).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        console.log(res);
        localStorage.setItem("UserInfo",JSON.stringify(res.data));
        this.presentToast(res.message);
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
