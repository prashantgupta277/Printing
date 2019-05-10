import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
 //import { productReturnPage } from '../productReturn/productReturn';
import { itemNamePage } from '../itemName/itemName';
import { ProductReturnNewPage } from '../productReturnNew/productReturnNew';
import { collectionPage } from '../collection/collection';
import { UserService } from '../../providers/user-service';
import { categoryPage } from '../category/category';


@Component({
  selector: 'page-myOrder',
  templateUrl: 'myOrder.html'
})
export class MyOrderPage {
  userInfo:any;
  Orderlist:any=[];
  imgUrl:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: UserService,
              public loadingCtrl: LoadingController,
              public platform: Platform) {
    
   
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(collectionPage);
    }, 0)
    this.imgUrl = localStorage.getItem("BaseUrl");
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.LoadOrder();
  }
  // -----LodingOrders-----

  LoadOrder(){
    let data={
      "user_id" : this.userInfo.user_id,
      "country" : this.userInfo.country
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.myOrder(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        this.Orderlist = res.data;
        console.log(this.Orderlist);
      }
      else{
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
  // -----LodingOrders-----

  // -----ViewOrders-----

  viewOrder(item){
    if(item.file_id == "0"){
        localStorage.setItem("through","main")
      this.navCtrl.setRoot(categoryPage);
      localStorage.setItem("MainCatId",item.category_id);
    }
    else{
      localStorage.setItem("FileId",item.file_id)
      this.navCtrl.setRoot(itemNamePage);
    }
  }
  // -----ViewOrders-----

  productReturn(){
    this.navCtrl.setRoot(ProductReturnNewPage);
  } 
  // viewOrder(){
  //   this.navCtrl.setRoot(itemNamePage);
  // }
  back(){
    this.navCtrl.setRoot(collectionPage);
  }

}
