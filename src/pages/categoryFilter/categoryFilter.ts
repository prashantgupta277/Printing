import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, Platform } from 'ionic-angular';
import { DiscoverPage } from '../discover/discover';
import { collectionPage } from '../collection/collection';
import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-categoryFilter',
  templateUrl: 'categoryFilter.html'
})
export class categoryFilterPage {
  CatId:any =[];
  userInfo:any;
  categories:any=[];
  loading:any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public viewCtrl: ViewController,
              public platform: Platform) {
    
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.loading.dismiss();
      this.viewCtrl.dismiss("");
    }, 0)
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.categories = [];
    this.loadcat();
  }
  loadcat(){
    let data={
      "country": this.userInfo.country,
      "user_id" : this.userInfo.user_id
    }
    console.log(data);
    this.loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    this.loading.present();
    this.userService.CategoryList(data).subscribe(res=>{
      this.loading.dismiss();
      if(res.status=="true" || res.status== true){
        this.categories = res.data;
        console.log(this.categories);
        
      }else{
      }
    },err=>{
      this.loading.dismiss();
      console.log(err);
    })
  }
  selectdata(id){
    if(this.CatId.length == 0){
      this.CatId.push(id)
    }else{
      let found = 'n'
      for(let i=0;i<this.CatId.length;i++){
        if(id == this.CatId[i]){
          found = 'y'
          this.CatId.splice(i, 1); 
        }
      }
      if(found == 'n'){
        this.CatId.push(id)
      }
    }
    console.log(this.CatId);
    
  }
  save(id){
    this.viewCtrl.dismiss(this.CatId);
    // localStorage.setItem("MainCatId",id);
    // let a = localStorage.getItem("filterfrom");
    // if(a == 'search'){
    //   this.navCtrl.setRoot(DiscoverPage);
    // }else{
    //   this.navCtrl.setRoot(collectionPage);
    // }
  }

}
