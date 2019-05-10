import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, ToastController, Slides, Platform } from 'ionic-angular';
import { PrintModalPage } from '../modal/printModal/printModal';
import { categoryPage } from '../category/category';
import { UserService } from '../../providers/user-service';
import { cartPage } from '../cart/cart';

@Component({
  selector: 'page-itemName',
  templateUrl: 'itemName.html'
})
export class itemNamePage {
  @ViewChild(Slides) slides: Slides;

  userInfo:any=[];
  LoadOf:any;
  MaincatId:any;
  SubCatId:any;
  FileId:any;
  ShowData:any=[];
  otherFiles:any=[];
  data:any;
  materialListArray:any;
  materialValue : any;
  imgUrl:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl : ModalController,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public toastCtrl: ToastController,
              public platform: Platform) {
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(categoryPage);
    }, 0)
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.imgUrl = localStorage.getItem("BaseUrl");
    this.MaincatId = localStorage.getItem("MainCatId");
    this.SubCatId = localStorage.getItem("SubcatId");
    this.FileId = localStorage.getItem("FileId");
    this.FileLoading();
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
  }
  
  
  // subCatLoading(){
  //   let data={
  //     "sub_cat_id":this.SubCatId,
  //     "country": this.userInfo.country,
  //     "user_id" : this.userInfo.user_id
  //   }
  //   console.log(data);
  //   let loading = this.loadingCtrl.create({
  //       content: 'Checking SubCategory...'
  //   });
  //   loading.present();
  //   this.userService.SubCategoryDetails(data).subscribe(res=>{
  //     loading.dismiss();
  //     this.ShowData = [];
  //     this.otherFiles = [];
  //     if(res.status=="true" || res.status== true){
  //       this.ShowData = res.data;
  //       this.otherFiles = res.files;
  //       console.log(this.ShowData);
  //       console.log(this.otherFiles);
        
  //     }else{
  //     }
  //   },err=>{
  //     loading.dismiss();
  //     console.log(err);
  //   })
  //   //this.navCtrl.setRoot(home2Page);
  // }

  // -------FileDetailsLoading--------
  FileLoading(){
    let through = localStorage.getItem("through");
    this.data = [];
    if(through == "Sub"){
      this.data={
        "file_id":this.FileId,
        "cat_id":'0',
        "sub_cat_id":this.SubCatId,
        "country": this.userInfo.country,
        "user_id" : this.userInfo.user_id
      }
      console.log(this.data);
    }else{
      this.data={
        "file_id":this.FileId,
        "cat_id":this.MaincatId,
        "sub_cat_id":'0',
        "country": this.userInfo.country,
        "user_id" : this.userInfo.user_id
      }
    }
   
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.FileDetails(this.data).subscribe(res=>{
      loading.dismiss();
      this.ShowData = [];
      this.otherFiles = [];
      if(res.status=="true" || res.status== true){
        this.ShowData = res.data;
        this.otherFiles = res.files;
        console.log(this.ShowData);
        console.log(this.otherFiles);
        this.MatrialLoad();
      }else{

      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })

  }
  // -------FileDetailsLoading--------

  // -------MatrialListLoad--------
  MatrialLoad(){
    let data={
      "country": this.userInfo.country,
      "user_id" : this.userInfo.user_id
    }
    console.log(this.data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.materialList(this.data).subscribe(res=>{
      loading.dismiss();
      this.materialListArray = [];
      if(res.status=="true" || res.status== true){
        this.materialListArray = res.data;
        this.materialValue = this.materialListArray[0].id;
        console.log(this.materialListArray);
        console.log(this.materialValue);
      }else{

      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
    
  }
  // -------MatrialListLoad--------

  // -------AddToCartFun--------
  cart(item){
  let data={
    "file_id":item.id,
    "unique_id":item.unique_id,
    "name":item.name,
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
    }else{
      this.presentToast(res.message);
    }
  },err=>{
    loading.dismiss();
    console.log(err);
  })
  }
  // -------AddToCartFun--------

   // -------GoToPrintMOdel--------
  print(item){
    let data={
      "file_id":item.id,
      "materialId":this.materialValue
    }
    console.log(this.materialValue);
    let modal = this.modalCtrl.create(PrintModalPage,{data:data});
    modal.present();
  }
   // -------GoToPrintMOdel--------

  back(){
    this.navCtrl.setRoot(categoryPage);
  }
  goToCart(){
    this.navCtrl.setRoot(cartPage);
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
