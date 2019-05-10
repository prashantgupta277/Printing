import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { HomePage } from '../home/home';
import { PaymentDetailsPage } from '../paymentDetails/paymentDetails';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class cartPage {
  userInfo:any;
  cartData:any;
  totalAmount:any;
  imgUrl:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public toastCtrl: ToastController,
              public platform: Platform) {
    this.imgUrl = localStorage.getItem("BaseUrl");
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.loadProduct();
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(HomePage);
    }, 0)
  }
  
  loadProduct(){
    console.log(this.userInfo);
    
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
    this.userService.cart(data).subscribe(res=>{
      loading.dismiss();
      this.cartData = res.data;
      if(res.status=="true" || res.status== true){
        console.log(res);
        this.cartData = res.data;
        if(this.cartData == ''){
          this.presentToast(res.message);
          this.navCtrl.setRoot(HomePage);
        }
        this.amountValue();
      }else{
      }
     
    },err=>{
      loading.dismiss();
      this.presentToast("Please check Your Internet");
      this.navCtrl.setRoot(HomePage);
    })
  }

  // -------AmoutFun--------

  amountValue(){
    for(let i=0;i<this.cartData.length;i++){
      let Amount = 0;
      Amount = this.cartData[i].price * this.cartData[i].qty;
      this.cartData[i].Amount = Amount;
    }
    this.TotalAmountValue();
  }

  // -------AmoutFun--------

  // -------TotalAmoutFun--------

  TotalAmountValue(){
    this.totalAmount = 0;
    for(let i=0;i<this.cartData.length;i++){
      this.totalAmount = this.totalAmount + this.cartData[i].Amount;
    }
  }

  // -------TotalAmoutFun--------

  // -------QutyIncreeFun--------

  QutyIncree(item,id){
    if(item.file_id != '0'){
      if(item.file_type == "2"){
        for(let i=0;i<this.cartData.length;i++){
          if(this.cartData[i].cart_id == id){
            this.cartData[i].qty++;
            this.amountValue();
          }
        }
      }else{
        this.presentToast("QTY will be only one")
      }
    }else{
      this.presentToast("QTY will be only one")
    }
  }
  // -------QutyIncreeFun--------

  // -------QtyDecressFun--------
  QutyDecress(item,id){
    if(item.file_id != '0'){
      if(item.file_type == "2"){
        for(let i=0;i<this.cartData.length;i++){
          if(this.cartData[i].cart_id == id){
            if(this.cartData[i].qty < '1'){
              this.cartData[i].qty--;
              this.amountValue();
            }else{
              this.presentToast("minimum 1 Quentity required")
            }
          }
        }
      }else{
        this.presentToast("QTY will be only one")
      }
    }else{
      this.presentToast("QTY will be only one")
    }
  }

  // -------QtyDecressFun--------

  back(){
    this.navCtrl.setRoot(HomePage)
  }

  // -------DeleteFun--------

  Delete(id){
    let data={
      "cart_id": id,
      "user_id" : this.userInfo.user_id
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.DeleteFormCart(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
          console.log(res);
          this.presentToast(res.message)
          this.loadProduct();
      }else{
        this.presentToast(res.message)
      }
    },err=>{
      loading.dismiss();
    })
  }
  // -------DeleteFun--------

  //--------GotToCart--------
  Gocart(){
    this.navCtrl.setRoot(cartPage);
  }
  //--------GotToCart--------

  //------Go payment------
  goPayment(){
    this.navCtrl.setRoot(PaymentDetailsPage)
  }
  //------Go payment------



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
