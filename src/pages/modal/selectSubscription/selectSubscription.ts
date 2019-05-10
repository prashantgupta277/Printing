import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from '../../../providers/user-service';
import { PaymentDetailsPage } from '../../paymentDetails/paymentDetails';

@Component({
  selector: 'page-selectSubscription',
  templateUrl: 'selectSubscription.html'
})
export class SelectSubscriptionModalPage {
  userInfo:any;
  SubScription:any;
  monthly:any;
  quaterly:any;
  yearly:any;
  semester:any;
  check:any=[];
  SelectedAmount:any;
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
      this.check ={
        "monthly":true,
        "quaterly":false,
        "yearly":false,
        "semester":false,
      }
      this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
      let data={
        "country": this.userInfo.country,
        "user_id" : this.userInfo.user_id
      }
      let loading = this.loadingCtrl.create({
          spinner:'hide',
          content: '<img src="assets/imgs/spinner.gif">'
      });
      loading.present();
      this.userService.subscriptionDetail(data).subscribe(res=>{
        loading.dismiss();
        if(res.status=="true" || res.status== true){
          console.log(res);
          this.SubScription = res.data;
          this.monthly = res.data.monthly;
          this.quaterly = res.data.quaterly;
          this.semester = res.data.semester;
          this.yearly = res.data.yearly;
          this.SelectedAmount = this.monthly;

          console.log(this.SubScription);
        }else{
  
        }
        
      },err=>{
        loading.dismiss();
      })
      
    }
    checkValue(data){
      if(data == "monthly"){
        this.check ={
          "monthly":true,
          "quaterly":false,
          "yearly":false,
          "semester":false,
        }
        this.SelectedAmount = this.monthly;

      }
      if(data == "quaterly"){
        this.check ={
          "monthly":false,
          "quaterly":true,
          "yearly":false,
          "semester":false,
        }
        this.SelectedAmount = this.quaterly;

      }
      if(data == "yearly"){
        this.check ={
          "monthly":false,
          "quaterly":false,
          "yearly":true,
          "semester":false,
        }
        this.SelectedAmount = this.yearly;

      }
      if(data == "semester"){
        this.check ={
          "monthly":false,
          "quaterly":false,
          "yearly":false,
          "semester":true,
        }
        this.SelectedAmount = this.semester;

      }

    }
    Payment(){
      this.viewCtrl.dismiss();
      this.navCtrl.setRoot(PaymentDetailsPage)
    }
    
  saveData() {
    console.log(this.SelectedAmount);
    
    this.viewCtrl.dismiss();
  }
}
