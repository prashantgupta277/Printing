import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { DiscoverPage } from '../discover/discover';
import { collectionPage } from '../collection/collection';

@Component({
  selector: 'page-sortBy',
  templateUrl: 'sortBy.html'
})
export class sortByPage {
  Sort:any='';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public platform: Platform) {
   
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.viewCtrl.dismiss("");
    }, 0)
  }
  
  selectdata(id){
    this.Sort = id;
  }
  save(id){

    this.viewCtrl.dismiss(id);

    // localStorage.setItem("sortby",id);
    // let a = localStorage.getItem("sort");
    // if(a == 'search'){
    //   this.navCtrl.setRoot(DiscoverPage);
    // }else{
    //   this.navCtrl.setRoot(collectionPage);
    // }
    
  }

}
