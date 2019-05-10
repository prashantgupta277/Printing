import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, PopoverController, ModalController, Platform, AlertController } from 'ionic-angular';
import { categoryFilterPage } from '../categoryFilter/categoryFilter';
import { sortByPage } from '../sortBy/sortBy';
import { categoryPage } from '../category/category';
import { UserService } from '../../providers/user-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {
  sort = "";
  mainCat:any=[];
  SearchValue = "";
  userInfo:any;
  categories:any=[];
  SelectedCatIds:any =[];
  Searchdata:any=[];
  imgUrl:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              private toastCtrl: ToastController,
              public popoverCtrl: PopoverController,
              public ModalCtrl: ModalController,
              public platform: Platform,
              public alertCtrl: AlertController) {
    this.imgUrl = localStorage.getItem("BaseUrl");
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.categories = [];
    this.loadcat();
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(DiscoverPage);
    }, 0)
  }
  loadcat(){
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
    this.userService.CategoryList(data).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        this.categories = res.data;
        console.log(this.categories);
        
      }else{
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
  // --------ForSearch-------
  loadcatSearch(){
    this.Searchdata={
      "sort":'',
      "category": '',
      "fill_search":this.SearchValue,
      "country": this.userInfo.country,
      "user_id" : this.userInfo.user_id
    }
    console.log(this.Searchdata);
    this.SearchAPI();
  }

  SearchAPI(){
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.CategoryListSearch(this.Searchdata).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        this.categories = res.data;
      }else{
        this.presentToast(res.message)
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
  // --------ForSearch-------

  details(id){
    localStorage.setItem("MainCatId",id);
    this.navCtrl.setRoot(categoryPage);
  }
  
  Filter(){
    let modal1 = this.ModalCtrl.create(categoryFilterPage);
    modal1.present();
    modal1.onDidDismiss((data)=>{
      console.log(data);
      if(data == null){

      }else{
        this.mainCat=JSON.stringify(data);
      this.loadcatbyFIlters();
      }
      
    })
   
  }
  short(){
    let modal2 = this.ModalCtrl.create(sortByPage);
    modal2.present();
    modal2.onDidDismiss((data)=>{
      console.log(data);
      if(data == null){

      }else{
        this.sort = data;
        this.loadcatbyFIlters();
      }
    })
  }

  loadcatbyFIlters(){
    this.Searchdata={
      "sort":this.sort,
      "category": this.mainCat,
      "fill_search":this.SearchValue,
      "country": this.userInfo.country,
      "user_id" : this.userInfo.user_id
    }
    console.log(this.Searchdata);
    this.SearchAPI();
  }

  back(){
    this.navCtrl.setRoot(HomePage);
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
