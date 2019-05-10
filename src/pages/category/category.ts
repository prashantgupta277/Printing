import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, Slides, ToastController, Platform } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { itemNamePage } from '../itemName/itemName';
import { cartPage } from '../cart/cart';
import { UserService } from '../../providers/user-service';
import { DiscoverPage } from '../discover/discover';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class categoryPage {
  @ViewChild(Slides) slides: Slides;

  CatId:any;
  userInfo:any;
  Category:any=[];
  otherfiles:any=[];
  catName:any;
  SubCat:boolean;
  imgUrl:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public toastCtrl: ToastController,
              public platform: Platform) {
       
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(DiscoverPage);
    }, 0)
    this.imgUrl = localStorage.getItem("BaseUrl");
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.CatId = localStorage.getItem("MainCatId");
    console.log(this.CatId);
    this.SubCat = false;
    this.loadcatDetails();

  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
  }

  // -------LoadCatFun--------

  loadcatDetails(){
    let data={
      "cat_id":this.CatId,
      "country": this.userInfo.country,
      "user_id" : this.userInfo.user_id
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.CategoryDetails(data).subscribe(res=>{
      loading.dismiss();
      console.log(res);
      
      if(res.status=="true" || res.status== true){
        this.Category = res.data;
        this.catName = res.data[0].category_name;
        this.otherfiles = res.files;
        console.log(this.Category);
        console.log(this.otherfiles);
        localStorage.setItem("through","main")
        
      }else{
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
  // -------LoadCatFun--------

  // -------CheckLoadSubCatOrFileFun--------

  subCat(item){
    if(item.file_id == "0"){
      localStorage.setItem("through","Sub");
      this.subCatLoading(item.sub_cat_id);
    }
    else{
      localStorage.setItem("FileId",item.file_id)
      console.log(this.SubCat);
      this.navCtrl.setRoot(itemNamePage);
    }
  }

// -------CheckLoadSubCatOrFileFun--------

// -------LoadSubCatFun--------

  subCatLoading(id){
    let data={
      "cat_id":this.CatId,
      "sub_cat_id":id,
      "country": this.userInfo.country,
      "user_id" : this.userInfo.user_id
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.SubCategoryDetails(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        localStorage.setItem("SubcatId",id);
        this.Category = res.data;
        this.catName = res.data[0].category_name;
        this.otherfiles = res.files;
        console.log(this.Category);
        console.log(this.otherfiles);
        this.SubCat = true;
      }else{

      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }

  // -------LoadSubCatFun----------------


  // -------AddToCartFun--------

  cart(item){
    let data={
      "file_id":item.id,
      "unique_id":item.unique_id,
      "name":this.catName,
      "sub_cat_id":"0",
      "cat_id":"0",
      "price":item.price,
      "qty":"1",
      "country": this.userInfo.country,
      "user_id" : this.userInfo.user_id
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.AddToCart(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        this.presentToast(res.message)
        this.navCtrl.setRoot(cartPage);
      }else{
        this.presentToast(res.message);
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
   
   
  }

  // -------AddToCartFun--------

  back(){
    this.navCtrl.setRoot(DiscoverPage);
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
