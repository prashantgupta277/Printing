import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ModalController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { itemNamePage } from '../itemName/itemName';
import { categoryFilterPage } from '../categoryFilter/categoryFilter';
import { sortByPage } from '../sortBy/sortBy';
import { MyOrderPage } from '../myOrder/myOrder';
import { SlicingSettingPage } from '../slicingSetting/slicingSetting';
import { UserService } from '../../providers/user-service';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FileTransfer , FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Camera } from '@ionic-native/camera';



@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html'
})
export class collectionPage {
  userInfo:any;
  Collectionlist:any;
  FileType:any;
  FileName:any;
  imageURI:any;
  Filepath:any;
  imgUrl:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl:LoadingController,
              public userService: UserService,
              public toastCtrl: ToastController,
              public ModalCtrl: ModalController,
              public fileTransfer:FileTransfer,
              public camera: Camera,
              public platform: Platform,
            ) {
   
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.imgUrl = localStorage.getItem("BaseUrl");
    this.LoadCollection();
   
  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(HomePage);
    }, 0)
  }
  // -------LoadCollectionFile------
  LoadCollection(){
    let data={
      "user_id" : this.userInfo.user_id
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.MyCollection(data).subscribe(res=>{
      loading.dismiss();
      console.log(res);
      
      if(res.status=="true" || res.status== true){
        this.Collectionlist = res.data;
        console.log(this.Collectionlist);
        
      }
      else{
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }
  // -------LoadCollectionFile------

  subCat(){
    this.navCtrl.setRoot(itemNamePage);
  }
  cat(){
    this.navCtrl.setRoot(HomePage);
  }
  myOrder(){
    this.navCtrl.setRoot(MyOrderPage);
  }
  // -------GoToFiltersPage------
  filters(){
    let modal1 = this.ModalCtrl.create(categoryFilterPage);
    modal1.present();
    modal1.onDidDismiss((data)=>{
      console.log(data);
    })
   
  }
  sort(){
    let modal2 = this.ModalCtrl.create(sortByPage);
    modal2.present();
    modal2.onDidDismiss((data)=>{
      console.log(data);
    })
  }
  // -------GoToFiltersPage------

  // -------EditCollectionFile------

  Edit(id){
    this.navCtrl.setRoot(SlicingSettingPage,{FileId:id});
  }
  // -------EditCollectionFile------

  //------SelectFile--------

  SelectFile(){
    this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    destinationType: this.camera.DestinationType.FILE_URI,
    mediaType:this.camera.MediaType.ALLMEDIA
    // mediaType:this.camera.MediaType.VIDEO
    }).then((imageData) => {
      this.imageURI ="file://"+imageData; //Get File Path
      this.FileName=this.imageURI.substr(this.imageURI.lastIndexOf('/')+1)  //Get File name
      let fileuploadTypeName = imageData.lastIndexOf(".");
      this.FileType = imageData.substring(fileuploadTypeName, imageData.length).toLowerCase();
      this.Filepath="file://"+imageData;
      this.Send()
    });
  }
  Send(){
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
      if(this.FileType==".stl"){
        let data={
          "country": this.userInfo.country,
          "user_id" : this.userInfo.user_id,
          "file":this.imageURI
        }
      this.userService.AddFileInMyCollection(data).subscribe(res=>{
        loading.dismiss();
        if(res.status=="true" || res.status== true){
          this.presentToast(res.message);
          this.LoadCollection();

        }else{
          this.presentToast(res.message)
        }
      },err=>{
        loading.dismiss();
        console.log(err);
      })
    }
    else{
      loading.dismiss();
      this.presentToast(".stl File Type Required");
    }
  }
  //--------SelectFile------------
  
  // -------DeleteFile------

  DeleteCollection(id){
    let data={
      "country": this.userInfo.country,
      "user_id" : this.userInfo.user_id,
      "file_id" : id
    }
    console.log(data);
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.DeleteFormMyCollection(data).subscribe(res=>{
      loading.dismiss();
      console.log(res);
      if(res.status=="true" || res.status== true){
        this.presentToast(res.message)
        this.LoadCollection(); 
      }
      else{
        this.presentToast(res.message)
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }

  //------DeleteFile----------------

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
