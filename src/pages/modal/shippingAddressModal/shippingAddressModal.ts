import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, ToastController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../../../providers/user-service';

@Component({
  selector: 'page-shippingAddressModal',
  templateUrl: 'shippingAddressModal.html'
})
export class ShippingAddressModalPage {
  Usershipping:any;
  userInfo:any;
  ShippingFinalDetails:any;
  countryList:any=[];
  stateList:any=[];
  cityList:any = [];
  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public toastCtrl: ToastController,
              public platform: Platform) {
    this.Usershipping = JSON.parse(localStorage.getItem("Usershipping")); 
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.ShippingFinalDetails = {
      "user_id":this.userInfo.user_id,
      "country":this.userInfo.country,
      "sh_address":this.Usershipping.shp_address,
      "shp_city1":this.Usershipping.shp_city,
      "sh_zipcode":this.Usershipping.shp_zip,
      "sh_region":this.Usershipping.shp_region,
      "shp_country1":this.Usershipping.shp_country
    } 
    this.CountryLoad();
 }
 ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.viewCtrl.dismiss();
    }, 0)
    
  }
   // ======CountryList API========
   CountryLoad(){
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.CountryList().subscribe(res=>{
      loading.dismiss();
      console.log(res);
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
      "country_id":this.Usershipping.shp_country
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
      "state_id":this.Usershipping.shp_region
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
    if(this.ShippingFinalDetails.sh_address == ""){
      this.presentToast("Please select address");
      return false;
    }
    if(this.ShippingFinalDetails.sh_zipcode == ""){
      this.presentToast("Please select zipcode");
      return false;
    }
    if(this.ShippingFinalDetails.sh_region == ""){
      this.presentToast("Please select region");
      return false;
    }
    if(this.ShippingFinalDetails.shp_country1 == ""){
      this.presentToast("Please select mobile");
      return false;
    }
    if(this.ShippingFinalDetails.shp_city1 == ""){
      this.presentToast("Please select country");
      return false;
    }
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.AddUserShippingDetails(this.ShippingFinalDetails).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        console.log(res);
        localStorage.setItem("Usershipping",JSON.stringify(res.data));
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
