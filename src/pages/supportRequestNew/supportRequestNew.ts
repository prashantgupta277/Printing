import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, Platform } from 'ionic-angular';
import { SupportNewPage } from '../supportNew/supportNew';
import { FileTransfer , FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Camera } from '@ionic-native/camera';
import { UserService } from '../../providers/user-service';
@Component({
  selector: 'page-supportRequestNew',
  templateUrl: 'supportRequestNew.html'
})
export class SupportRequestNewPage {
  SendReq:any;
  FileType:any;
  FileName:any;
  imageURI:any;
  Filepath:any;
  userInfo:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public fileTransfer:FileTransfer,
              public camera: Camera,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public platform: Platform
              ) {
    this.userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    this.SendReq = {
      "title":"",
      "message":"",
      "user_id":this.userInfo.user_id,
      "file":""
    } 

  }
  ionViewDidLoad(){
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(SupportNewPage);
    }, 0)
    
  }
  
  SelectFile(){
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    destinationType: this.camera.DestinationType.FILE_URI,
    mediaType:this.camera.MediaType.ALLMEDIA
    // mediaType:this.camera.MediaType.VIDEO
    }).then((imageData) => {
     // this.imageURI ="file://"+imageData; //Get File Path
      this.SendReq.file = imageData;
      this.presentToast("File Selected");
    });
    loading.dismiss();
  }
  remove(){
    this.SendReq.file = "";
  }
  
  AddSupport(){
    if(this.SendReq.title == ""){
      this.presentToast("Please Insert Title");
      return false;
    }
    if(this.SendReq.message == ""){
      this.presentToast("Please Insert Message");
      return false;
    }
    if(this.SendReq.file == ""){
      this.presentToast("Please Select File");
      return false;
    }
    let loading = this.loadingCtrl.create({
        spinner:'hide',
        content: '<img src="assets/imgs/spinner.gif">'
    });
    loading.present();
    this.userService.AddSupportRequest(this.SendReq).subscribe(res=>{
      loading.dismiss();
      if(res.status=="true" || res.status== true){
        this.presentToast(res.message);
        this.navCtrl.setRoot(SupportNewPage);
      }
      else{
        this.presentToast(res.message);
      }
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }

  back(){
    this.navCtrl.setRoot(SupportNewPage);
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
