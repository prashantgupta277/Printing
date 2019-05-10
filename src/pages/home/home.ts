import { Component ,ViewChild} from '@angular/core';
import { Nav,App, NavController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { cartPage } from '../cart/cart';
import { UserService } from '../../providers/user-service';
import { categoryPage } from '../category/category';
import { MyApp } from '../../app/app.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 userInfo:any;
 ProductList:any=[];
 multiArray:any=[];
 DemoArray:any=[];
 pair:any;
 imgUrl:any;
 companies:any;
 a:any;
  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public userService : UserService,
              public platform: Platform,
              public alertCtrl: AlertController,
            ) 
             {
    
    
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.imgUrl = localStorage.getItem("BaseUrl");
    this.loadProduct();
    this.pair = 0;
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
  // -----LoadProduct-----
  loadProduct(){
     
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
    this.userService.dashboard(data).subscribe(res=>{
      loading.dismiss();
      console.log(res);
      this.ProductList = res.data;
      this.pair = res.pair;
      if(this.pair == 2){
        let indexInNew = 0;
        for(let i=0;i<this.ProductList.length;i++){
          for(let k=0;k<2;k++){
             this.DemoArray[k] = this.ProductList[k];
           }
           i++;
          this.multiArray[indexInNew] = this.DemoArray;
            indexInNew++;
            this.DemoArray = [];
        }
      }
    },err=>{
      loading.dismiss();
    })
  }
  // -----LoadProduct-----

  detail(){
    // localStorage.setItem("MainCatId",id);
    // this.navCtrl.setRoot(categoryPage);
  }
  cart(){
    this.navCtrl.setRoot(cartPage);
  }

}
